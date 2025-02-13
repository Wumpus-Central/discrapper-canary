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
    N = n(849179);
function I(e) {
    var t;
    let { account: n, refreshed: r, handleRefresh: o } = e,
        [c, d] = s.useState(!1),
        h = null !== (t = n.metadata) && void 0 !== t ? t : {},
        x = (0, l.e7)([g.default], () => g.default.locale),
        I = s.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        f = null;
    switch (n.type) {
        case p.ABu.REDDIT:
            f = (0, m.oP)(h, N.metadataItem);
            break;
        case p.ABu.STEAM:
            f = (0, m.Dq)(h, N.metadataItem);
            break;
        case p.ABu.TWITTER:
            f = (0, m.rJ)(h, N.metadataItem);
            break;
        case p.ABu.EBAY:
            f = (0, m.ul)(h, N.metadataItem);
            break;
        case p.ABu.PAYPAL:
            f = (0, m.li)(h, N.metadataItem);
            break;
        case p.ABu.TIKTOK:
            f = (0, m.hf)(h, N.metadataItem);
    }
    let T = (0, u.FI)(h[E.PC.CREATED_AT], x),
        S = null,
        j = C.intl.string(C.t.wzzjk5);
    return (
        (null == f || 0 === f.length) &&
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
            className: N.metadataContainer,
            children: [
                S,
                null == f
                    ? void 0
                    : f.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < f.length - 1 ? (0, i.jsx)('span', { className: N.dot }) : null]
                          })
                      ),
                null != f && f.length > 0 && null != T ? (0, i.jsx)('div', { className: N.dot }) : null,
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
                        className: N.metadataRefreshButton,
                        look: a.zxk.Looks.OUTLINED,
                        color: r ? a.zxk.Colors.GREEN : a.zxk.Colors.PRIMARY,
                        size: a.zxk.Sizes.MIN,
                        submitting: c,
                        disabled: r,
                        'aria-label': C.intl.string(C.t.sCkLYG),
                        onClick: r ? void 0 : I,
                        children: j
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function f(e) {
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
                className: N.activityRow,
                children: [
                    (0, i.jsx)('img', {
                        alt: p.name,
                        className: N.connectionIcon,
                        src: (0, r.wj)(_) ? p.icon.darkSVG : p.icon.lightSVG
                    }),
                    (0, i.jsxs)('div', {
                        className: N.activitySettings,
                        children: [
                            (0, i.jsxs)(a.j7V, {
                                className: N.visibilitySwitch,
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
                                        (0, i.jsx)(I, {
                                            account: t,
                                            refreshed: l.includes(t.id),
                                            handleRefresh: n
                                        })
                                ]
                            }),
                            E &&
                                (0, i.jsx)(a.j7V, {
                                    className: N.additionalDetailsSwitch,
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
            (0, i.jsx)('div', { className: N.divider })
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
              className: N.container,
              children: [
                  (0, i.jsx)(a.vwX, {
                      tag: a.RB0.H5,
                      className: N.title,
                      children: C.intl.string(C.t.aw0GVV)
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          f,
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
