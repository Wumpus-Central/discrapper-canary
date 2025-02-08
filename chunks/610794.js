n.d(t, { Z: () => I }), n(47120), n(773603);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(457330),
    c = n(410030),
    d = n(726542),
    u = n(275759),
    m = n(231757),
    g = n(888496),
    h = n(706454),
    x = n(553795),
    _ = n(63063),
    p = n(981631),
    E = n(856651),
    C = n(388032),
    f = n(429779);
function T(e) {
    var t;
    let { account: n, refreshed: l, handleRefresh: o } = e,
        [c, d] = s.useState(!1),
        m = null !== (t = n.metadata) && void 0 !== t ? t : {},
        x = (0, r.e7)([h.default], () => h.default.locale),
        T = s.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        N = null;
    switch (n.type) {
        case p.ABu.REDDIT:
            N = (0, g.oP)(m, f.metadataItem);
            break;
        case p.ABu.STEAM:
            N = (0, g.Dq)(m, f.metadataItem);
            break;
        case p.ABu.TWITTER:
            N = (0, g.rJ)(m, f.metadataItem);
            break;
        case p.ABu.EBAY:
            N = (0, g.ul)(m, f.metadataItem);
            break;
        case p.ABu.PAYPAL:
            N = (0, g.li)(m, f.metadataItem);
            break;
        case p.ABu.TIKTOK:
            N = (0, g.hf)(m, f.metadataItem);
    }
    let I = (0, u.FI)(m[E.PC.CREATED_AT], x),
        S = null,
        b = C.intl.string(C.t.wzzjk5);
    return (
        (null == N || 0 === N.length) &&
            null == I &&
            ((S = (0, i.jsx)(
                a.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: C.intl.format(C.t.Up2ni4, { helpdeskUrl: _.Z.getArticleURL(p.BhN.CONNECTION_DETAILS) })
                },
                'label'
            )),
            (b = C.intl.string(C.t['LVh3//']))),
        l && (b = C.intl.string(C.t.i4jeWV)),
        (0, i.jsxs)('div', {
            className: f.metadataContainer,
            children: [
                S,
                null == N
                    ? void 0
                    : N.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < N.length - 1 ? (0, i.jsx)('span', { className: f.dot }) : null]
                          })
                      ),
                null != N && N.length > 0 && null != I ? (0, i.jsx)('div', { className: f.dot }) : null,
                null != I
                    ? (0, i.jsx)(
                          a.Text,
                          {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              children: C.intl.format(C.t['9rfonp'], { date: I })
                          },
                          'member-since'
                      )
                    : null,
                (0, i.jsx)(
                    a.zxk,
                    {
                        className: f.metadataRefreshButton,
                        look: a.zxk.Looks.OUTLINED,
                        color: l ? a.zxk.Colors.GREEN : a.zxk.Colors.PRIMARY,
                        size: a.zxk.Sizes.MIN,
                        submitting: c,
                        disabled: l,
                        'aria-label': C.intl.string(C.t.sCkLYG),
                        onClick: l ? void 0 : T,
                        children: b
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function N(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: r } = e,
        [u, g] = s.useState(t.visibility),
        [h, x] = s.useState(t.metadataVisibility),
        _ = (0, c.ZP)();
    s.useEffect(() => {
        g(t.visibility), x(t.metadataVisibility);
    }, [t]);
    let p = d.Z.get(t.type),
        E = !0 === p.hasMetadata;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: f.activityRow,
                children: [
                    (0, i.jsx)('img', {
                        alt: p.name,
                        className: f.connectionIcon,
                        src: (0, l.wj)(_) ? p.icon.darkSVG : p.icon.lightSVG
                    }),
                    (0, i.jsxs)('div', {
                        className: f.activitySettings,
                        children: [
                            (0, i.jsxs)(a.j7V, {
                                className: f.visibilitySwitch,
                                hideBorder: !0,
                                value: 1 === u,
                                onChange: function (e) {
                                    let { verified: n } = t,
                                        i = e ? 1 : 0;
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
                                        children: p.name
                                    }),
                                    E &&
                                        (0, i.jsx)(T, {
                                            account: t,
                                            refreshed: r.includes(t.id),
                                            handleRefresh: n
                                        })
                                ]
                            }),
                            E &&
                                (0, i.jsx)(a.j7V, {
                                    className: f.additionalDetailsSwitch,
                                    hideBorder: !0,
                                    disabled: 1 !== u || null == t.metadata,
                                    value: 1 === h,
                                    onChange: function (e) {
                                        let { verified: n } = t,
                                            i = e ? 1 : 0;
                                        if (e && !n) {
                                            x(i),
                                                (0, m.Z)({
                                                    platformType: t.type,
                                                    location: 'User Settings'
                                                });
                                            return;
                                        }
                                        x(i), o.Z.setMetadataVisibility(t.type, t.id, i);
                                    },
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: C.intl.string(C.t['3l78ws'])
                                    })
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: f.divider })
        ]
    });
}
function I() {
    let e = (0, r.e7)([x.Z], () => x.Z.getAccounts()),
        t = s.useMemo(() => e.filter((e) => d.Z.isSupported(e.type)), [e]),
        [n, l] = s.useState([]),
        c = s.useCallback(
            (e) =>
                o.Z.refresh(e.type, e.id).finally(() => {
                    l((t) => [...t, e.id]);
                }),
            []
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)(a.hjN, {
              className: f.container,
              children: [
                  (0, i.jsx)(a.vwX, {
                      tag: a.RB0.H5,
                      className: f.title,
                      children: C.intl.string(C.t.aw0GVV)
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          N,
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
