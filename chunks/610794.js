n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(780384),
    l = n(481060),
    o = n(457330),
    c = n(410030),
    d = n(726542),
    u = n(275759),
    m = n(231757),
    g = n(888496),
    h = n(706454),
    p = n(553795),
    x = n(63063),
    f = n(981631),
    E = n(856651),
    _ = n(388032),
    C = n(429779);
function T(e) {
    var t;
    let { account: n, refreshed: a, handleRefresh: o } = e,
        [c, d] = r.useState(!1),
        m = null !== (t = n.metadata) && void 0 !== t ? t : {},
        p = (0, s.e7)([h.default], () => h.default.locale),
        T = r.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        S = null;
    switch (n.type) {
        case f.ABu.REDDIT:
            S = (0, g.oP)(m, C.metadataItem);
            break;
        case f.ABu.STEAM:
            S = (0, g.Dq)(m, C.metadataItem);
            break;
        case f.ABu.TWITTER:
            S = (0, g.rJ)(m, C.metadataItem);
            break;
        case f.ABu.EBAY:
            S = (0, g.ul)(m, C.metadataItem);
            break;
        case f.ABu.PAYPAL:
            S = (0, g.li)(m, C.metadataItem);
            break;
        case f.ABu.TIKTOK:
            S = (0, g.hf)(m, C.metadataItem);
    }
    let b = (0, u.FI)(m[E.PC.CREATED_AT], p),
        I = null,
        N = _.intl.string(_.t.wzzjk5);
    return (
        (null == S || 0 === S.length) &&
            null == b &&
            ((I = (0, i.jsx)(
                l.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: _.intl.format(_.t.Up2ni4, { helpdeskUrl: x.Z.getArticleURL(f.BhN.CONNECTION_DETAILS) })
                },
                'label'
            )),
            (N = _.intl.string(_.t['LVh3//']))),
        a && (N = _.intl.string(_.t.i4jeWV)),
        (0, i.jsxs)('div', {
            className: C.metadataContainer,
            children: [
                I,
                null == S
                    ? void 0
                    : S.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < S.length - 1 ? (0, i.jsx)('span', { className: C.dot }) : null]
                          })
                      ),
                null != S && S.length > 0 && null != b ? (0, i.jsx)('div', { className: C.dot }) : null,
                null != b
                    ? (0, i.jsx)(
                          l.Text,
                          {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              children: _.intl.format(_.t['9rfonp'], { date: b })
                          },
                          'member-since'
                      )
                    : null,
                (0, i.jsx)(
                    l.Button,
                    {
                        className: C.metadataRefreshButton,
                        look: l.Button.Looks.OUTLINED,
                        color: a ? l.Button.Colors.GREEN : l.Button.Colors.PRIMARY,
                        size: l.Button.Sizes.MIN,
                        submitting: c,
                        disabled: a,
                        'aria-label': _.intl.string(_.t.sCkLYG),
                        onClick: a ? void 0 : T,
                        children: N
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function S(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: s } = e,
        [u, g] = r.useState(t.visibility),
        [h, p] = r.useState(t.metadataVisibility),
        x = (0, c.ZP)();
    r.useEffect(() => {
        g(t.visibility), p(t.metadataVisibility);
    }, [t]);
    let f = d.Z.get(t.type),
        E = !0 === f.hasMetadata;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: C.activityRow,
                children: [
                    (0, i.jsx)('img', {
                        alt: f.name,
                        className: C.connectionIcon,
                        src: (0, a.wj)(x) ? f.icon.darkSVG : f.icon.lightSVG
                    }),
                    (0, i.jsxs)('div', {
                        className: C.activitySettings,
                        children: [
                            (0, i.jsxs)(l.FormSwitch, {
                                className: C.visibilitySwitch,
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
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: f.name
                                    }),
                                    E &&
                                        (0, i.jsx)(T, {
                                            account: t,
                                            refreshed: s.includes(t.id),
                                            handleRefresh: n
                                        })
                                ]
                            }),
                            E &&
                                (0, i.jsx)(l.FormSwitch, {
                                    className: C.additionalDetailsSwitch,
                                    hideBorder: !0,
                                    disabled: 1 !== u || null == t.metadata,
                                    value: 1 === h,
                                    onChange: function (e) {
                                        let { verified: n } = t,
                                            i = e ? 1 : 0;
                                        if (e && !n) {
                                            p(i),
                                                (0, m.Z)({
                                                    platformType: t.type,
                                                    location: 'User Settings'
                                                });
                                            return;
                                        }
                                        p(i), o.Z.setMetadataVisibility(t.type, t.id, i);
                                    },
                                    children: (0, i.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: _.intl.string(_.t['3l78ws'])
                                    })
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: C.divider })
        ]
    });
}
function b() {
    let e = (0, s.e7)([p.Z], () => p.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => d.Z.isSupported(e.type)), [e]),
        [n, a] = r.useState([]),
        c = r.useCallback(
            (e) =>
                o.Z.refresh(e.type, e.id).finally(() => {
                    a((t) => [...t, e.id]);
                }),
            []
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)(l.FormSection, {
              className: C.container,
              children: [
                  (0, i.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H5,
                      className: C.title,
                      children: _.intl.string(_.t.aw0GVV)
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          S,
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
