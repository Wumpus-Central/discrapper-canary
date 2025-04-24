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
    p = n(888496),
    g = n(706454),
    h = n(553795),
    f = n(63063),
    b = n(981631),
    _ = n(856651),
    x = n(388032),
    E = n(6318);
function C(e) {
    var t;
    let { account: n, refreshed: l, handleRefresh: o } = e,
        [c, d] = r.useState(!1),
        m = null != (t = n.metadata) ? t : {},
        h = (0, s.e7)([g.default], () => g.default.locale),
        C = r.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        j = null;
    switch (n.type) {
        case b.ABu.REDDIT:
            j = (0, p.oP)(m, E.metadataItem);
            break;
        case b.ABu.STEAM:
            j = (0, p.Dq)(m, E.metadataItem);
            break;
        case b.ABu.TWITTER:
            j = (0, p.rJ)(m, E.metadataItem);
            break;
        case b.ABu.EBAY:
            j = (0, p.ul)(m, E.metadataItem);
            break;
        case b.ABu.PAYPAL:
            j = (0, p.li)(m, E.metadataItem);
            break;
        case b.ABu.TIKTOK:
            j = (0, p.hf)(m, E.metadataItem);
    }
    let O = (0, u.FI)(m[_.PC.CREATED_AT], h),
        S = null,
        v = x.intl.string(x.t.wzzjk5);
    return (
        (null == j || 0 === j.length) &&
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
                null == j
                    ? void 0
                    : j.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < j.length - 1 ? (0, i.jsx)('span', { className: E.dot }) : null]
                          })
                      ),
                null != j && j.length > 0 && null != O ? (0, i.jsx)('div', { className: E.dot }) : null,
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
                        onClick: l ? void 0 : C,
                        children: v
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function j(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: s } = e,
        [u, p] = r.useState(t.visibility),
        [g, h] = r.useState(t.metadataVisibility),
        f = (0, c.ZP)();
    r.useEffect(() => {
        p(t.visibility), h(t.metadataVisibility);
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
                                        p(i),
                                            (0, m.Z)({
                                                platformType: t.type,
                                                location: 'User Settings'
                                            });
                                        return;
                                    }
                                    p(i), o.Z.setVisibility(t.type, t.id, i);
                                },
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: b.name
                                    }),
                                    _ &&
                                        (0, i.jsx)(C, {
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
                                    value: 1 === g,
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
                          j,
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
