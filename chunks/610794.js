n.d(t, { Z: () => T }), n(47120), n(773603);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(780384),
    a = n(481060),
    o = n(457330),
    c = n(410030),
    d = n(726542),
    u = n(275759),
    h = n(231757),
    m = n(888496),
    g = n(706454),
    x = n(553795),
    _ = n(63063),
    p = n(981631),
    E = n(856651),
    C = n(388032),
    f = n(849179);
function N(e) {
    var t;
    let { account: n, refreshed: r, handleRefresh: o } = e,
        [c, d] = s.useState(!1),
        h = null !== (t = n.metadata) && void 0 !== t ? t : {},
        x = (0, l.e7)([g.default], () => g.default.locale),
        N = s.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        I = null;
    switch (n.type) {
        case p.ABu.REDDIT:
            I = (0, m.oP)(h, f.metadataItem);
            break;
        case p.ABu.STEAM:
            I = (0, m.Dq)(h, f.metadataItem);
            break;
        case p.ABu.TWITTER:
            I = (0, m.rJ)(h, f.metadataItem);
            break;
        case p.ABu.EBAY:
            I = (0, m.ul)(h, f.metadataItem);
            break;
        case p.ABu.PAYPAL:
            I = (0, m.li)(h, f.metadataItem);
            break;
        case p.ABu.TIKTOK:
            I = (0, m.hf)(h, f.metadataItem);
    }
    let T = (0, u.FI)(h[E.PC.CREATED_AT], x),
        S = null,
        j = C.intl.string(C.t.wzzjk5);
    return (
        (null == I || 0 === I.length) &&
            null == T &&
            ((S = (0, i.jsx)(
                a.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: C.intl.format(C.t.Up2ni4, { helpdeskUrl: _.Z.getArticleURL(p.BhN.CONNECTION_DETAILS) })
                },
                'label'
            )),
            (j = C.intl.string(C.t['LVh3//']))),
        r && (j = C.intl.string(C.t.i4jeWV)),
        (0, i.jsxs)('div', {
            className: f.metadataContainer,
            children: [
                S,
                null == I
                    ? void 0
                    : I.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < I.length - 1 ? (0, i.jsx)('span', { className: f.dot }) : null]
                          })
                      ),
                null != I && I.length > 0 && null != T ? (0, i.jsx)('div', { className: f.dot }) : null,
                null != T
                    ? (0, i.jsx)(
                          a.Text,
                          {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              children: C.intl.format(C.t['9rfonp'], { date: T })
                          },
                          'member-since'
                      )
                    : null,
                (0, i.jsx)(
                    a.zxk,
                    {
                        className: f.metadataRefreshButton,
                        look: a.zxk.Looks.OUTLINED,
                        color: r ? a.zxk.Colors.GREEN : a.zxk.Colors.PRIMARY,
                        size: a.zxk.Sizes.MIN,
                        submitting: c,
                        disabled: r,
                        'aria-label': C.intl.string(C.t.sCkLYG),
                        onClick: r ? void 0 : N,
                        children: j
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function I(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: l } = e,
        [u, m] = s.useState(t.visibility),
        [g, x] = s.useState(t.metadataVisibility),
        _ = (0, c.ZP)();
    s.useEffect(() => {
        m(t.visibility), x(t.metadataVisibility);
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
                        src: (0, r.wj)(_) ? p.icon.darkSVG : p.icon.lightSVG
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
                                        m(i),
                                            (0, h.Z)({
                                                platformType: t.type,
                                                location: 'User Settings'
                                            });
                                        return;
                                    }
                                    m(i), o.Z.setVisibility(t.type, t.id, i);
                                },
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: p.name
                                    }),
                                    E &&
                                        (0, i.jsx)(N, {
                                            account: t,
                                            refreshed: l.includes(t.id),
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
                                                (0, h.Z)({
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
function T() {
    let e = (0, l.e7)([x.Z], () => x.Z.getAccounts()),
        t = s.useMemo(() => e.filter((e) => d.Z.isSupported(e.type)), [e]),
        [n, r] = s.useState([]),
        c = s.useCallback(
            (e) =>
                o.Z.refresh(e.type, e.id).finally(() => {
                    r((t) => [...t, e.id]);
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
                          I,
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
