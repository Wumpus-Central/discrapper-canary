n.d(t, { Z: () => O }), n(388685), n(457542);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(457330),
    c = n(410030),
    d = n(726542),
    u = n(275759),
    m = n(231757),
    g = n(888496),
    p = n(706454),
    h = n(553795),
    f = n(63063),
    b = n(981631),
    _ = n(856651),
    x = n(388032),
    E = n(6318);
function j(e) {
    var t;
    let { account: n, refreshed: l, handleRefresh: o } = e,
        [c, d] = r.useState(!1),
        m = null != (t = n.metadata) ? t : {},
        h = (0, s.e7)([p.default], () => p.default.locale),
        j = r.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        C = null;
    switch (n.type) {
        case b.ABu.REDDIT:
            C = (0, g.oP)(m, E.metadataItem);
            break;
        case b.ABu.STEAM:
            C = (0, g.Dq)(m, E.metadataItem);
            break;
        case b.ABu.TWITTER:
            C = (0, g.rJ)(m, E.metadataItem);
            break;
        case b.ABu.EBAY:
            C = (0, g.ul)(m, E.metadataItem);
            break;
        case b.ABu.PAYPAL:
            C = (0, g.li)(m, E.metadataItem);
            break;
        case b.ABu.TIKTOK:
            C = (0, g.hf)(m, E.metadataItem);
    }
    let O = (0, u.FI)(m[_.PC.CREATED_AT], h),
        S = null,
        v = x.intl.string(x.t.wzzjk5);
    return (
        (null == C || 0 === C.length) &&
            null == O &&
            ((S = (0, i.jsx)(
                a.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: x.intl.format(x.t.Up2ni4, { helpdeskUrl: f.Z.getArticleURL(b.BhN.CONNECTION_DETAILS) })
                },
                'label'
            )),
            (v = x.intl.string(x.t['LVh3//']))),
        l && (v = x.intl.string(x.t.i4jeWV)),
        (0, i.jsxs)('div', {
            className: E.metadataContainer,
            children: [
                S,
                null == C
                    ? void 0
                    : C.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < C.length - 1 ? (0, i.jsx)('span', { className: E.dot }) : null]
                          })
                      ),
                null != C && C.length > 0 && null != O ? (0, i.jsx)('div', { className: E.dot }) : null,
                null != O
                    ? (0, i.jsx)(
                          a.Text,
                          {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              children: x.intl.format(x.t['9rfonp'], { date: O })
                          },
                          'member-since'
                      )
                    : null,
                (0, i.jsx)(
                    a.zxk,
                    {
                        className: E.metadataRefreshButton,
                        look: a.zxk.Looks.OUTLINED,
                        color: l ? a.zxk.Colors.GREEN : a.zxk.Colors.PRIMARY,
                        size: a.zxk.Sizes.MIN,
                        submitting: c,
                        disabled: l,
                        'aria-label': x.intl.string(x.t.sCkLYG),
                        onClick: l ? void 0 : j,
                        children: v
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function C(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: s } = e,
        [u, g] = r.useState(t.visibility),
        [p, h] = r.useState(t.metadataVisibility),
        f = (0, c.ZP)();
    r.useEffect(() => {
        g(t.visibility), h(t.metadataVisibility);
    }, [t]);
    let b = d.Z.get(t.type),
        _ = !0 === b.hasMetadata;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.activityRow,
                children: [
                    (0, i.jsx)('img', {
                        alt: b.name,
                        className: E.connectionIcon,
                        src: (0, l.wj)(f) ? b.icon.darkSVG : b.icon.lightSVG
                    }),
                    (0, i.jsxs)('div', {
                        className: E.activitySettings,
                        children: [
                            (0, i.jsxs)(a.j7V, {
                                className: E.visibilitySwitch,
                                hideBorder: !0,
                                value: 1 === u,
                                onChange: function (e) {
                                    let { verified: n } = t,
                                        i = +!!e;
                                    if (e && !n) {
                                        g(i),
                                            (0, m.Z)({
                                                platformType: t.type,
                                                location: 'User Settings'
                                            });
                                        return;
                                    }
                                    g(i), o.Z.setVisibility(t.type, t.id, i);
                                },
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: b.name
                                    }),
                                    _ &&
                                        (0, i.jsx)(j, {
                                            account: t,
                                            refreshed: s.includes(t.id),
                                            handleRefresh: n
                                        })
                                ]
                            }),
                            _ &&
                                (0, i.jsx)(a.j7V, {
                                    className: E.additionalDetailsSwitch,
                                    hideBorder: !0,
                                    disabled: 1 !== u || null == t.metadata,
                                    value: 1 === p,
                                    onChange: function (e) {
                                        let { verified: n } = t,
                                            i = +!!e;
                                        if (e && !n) {
                                            h(i),
                                                (0, m.Z)({
                                                    platformType: t.type,
                                                    location: 'User Settings'
                                                });
                                            return;
                                        }
                                        h(i), o.Z.setMetadataVisibility(t.type, t.id, i);
                                    },
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: x.intl.string(x.t['3l78ws'])
                                    })
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: E.divider })
        ]
    });
}
function O() {
    let e = (0, s.e7)([h.Z], () => h.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => d.Z.isSupported(e.type)), [e]),
        [n, l] = r.useState([]),
        c = r.useCallback(
            (e) =>
                o.Z.refresh(e.type, e.id).finally(() => {
                    l((t) => [...t, e.id]);
                }),
            []
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)(a.hjN, {
              className: E.container,
              children: [
                  (0, i.jsx)(a.vwX, {
                      tag: a.RB0.H5,
                      className: E.title,
                      children: x.intl.string(x.t.aw0GVV)
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          C,
                          {
                              account: e,
                              handleRefresh: c,
                              refreshedAccountIds: n
                          },
                          e.id
                      )
                  )
              ]
          });
}
