n.d(t, { Z: () => S }), n(47120), n(773603);
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
    h = n(888496),
    g = n(706454),
    x = n(553795),
    _ = n(63063),
    p = n(981631),
    E = n(856651),
    C = n(388032),
    f = n(236878);
function T(e) {
    var t;
    let { account: n, refreshed: l, handleRefresh: o } = e,
        [c, d] = s.useState(!1),
        m = null !== (t = n.metadata) && void 0 !== t ? t : {},
        x = (0, r.e7)([g.default], () => g.default.locale),
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
            N = (0, h.oP)(m, f.metadataItem);
            break;
        case p.ABu.STEAM:
            N = (0, h.Dq)(m, f.metadataItem);
            break;
        case p.ABu.TWITTER:
            N = (0, h.rJ)(m, f.metadataItem);
            break;
        case p.ABu.EBAY:
            N = (0, h.ul)(m, f.metadataItem);
            break;
        case p.ABu.PAYPAL:
            N = (0, h.li)(m, f.metadataItem);
            break;
        case p.ABu.TIKTOK:
            N = (0, h.hf)(m, f.metadataItem);
    }
    let S = (0, u.FI)(m[E.PC.CREATED_AT], x),
        I = null,
        b = C.intl.string(C.t.wzzjk5);
    return (
        (null == N || 0 === N.length) &&
            null == S &&
            ((I = (0, i.jsx)(
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
                I,
                null == N
                    ? void 0
                    : N.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < N.length - 1 ? (0, i.jsx)('span', { className: f.dot }) : null]
                          })
                      ),
                null != N && N.length > 0 && null != S ? (0, i.jsx)('div', { className: f.dot }) : null,
                null != S
                    ? (0, i.jsx)(
                          a.Text,
                          {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              children: C.intl.format(C.t['9rfonp'], { date: S })
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
        [u, h] = s.useState(t.visibility),
        [g, x] = s.useState(t.metadataVisibility),
        _ = (0, c.ZP)();
    s.useEffect(() => {
        h(t.visibility), x(t.metadataVisibility);
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
                                        h(i),
                                            (0, m.Z)({
                                                platformType: t.type,
                                                location: 'User Settings'
                                            });
                                        return;
                                    }
                                    h(i), o.Z.setVisibility(t.type, t.id, i);
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
                                    value: 1 === g,
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
function S() {
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
