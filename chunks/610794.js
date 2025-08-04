(n.d(t, { Z: () => v }), n(388685), n(457542));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(780384),
    l = n(755721),
    o = n(481060),
    c = n(457330),
    d = n(410030),
    u = n(726542),
    m = n(275759),
    p = n(231757),
    g = n(888496),
    h = n(706454),
    f = n(553795),
    b = n(63063),
    x = n(981631),
    _ = n(856651),
    j = n(388032),
    E = n(6318);
function C(e) {
    var t;
    let { account: n, refreshed: a, handleRefresh: c } = e,
        [d, u] = r.useState(!1),
        p = null != (t = n.metadata) ? t : {},
        f = (0, s.e7)([h.default], () => h.default.locale),
        C = r.useCallback(async () => {
            u(!0);
            try {
                await c(n);
            } finally {
                u(!1);
            }
        }, [n, c]),
        O = null;
    switch (n.type) {
        case x.ABu.REDDIT:
            O = (0, g.oP)(p, E.metadataItem);
            break;
        case x.ABu.STEAM:
            O = (0, g.Dq)(p, E.metadataItem);
            break;
        case x.ABu.TWITTER:
            O = (0, g.rJ)(p, E.metadataItem);
            break;
        case x.ABu.EBAY:
            O = (0, g.ul)(p, E.metadataItem);
            break;
        case x.ABu.PAYPAL:
            O = (0, g.li)(p, E.metadataItem);
            break;
        case x.ABu.TIKTOK:
            O = (0, g.hf)(p, E.metadataItem);
    }
    let v = (0, m.FI)(p[_.PC.CREATED_AT], f),
        S = null,
        T = j.intl.string(j.t.wzzjk5);
    return (
        (null == O || 0 === O.length) &&
            null == v &&
            ((S = (0, i.jsx)(
                o.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: j.intl.format(j.t.Up2ni4, { helpdeskUrl: b.Z.getArticleURL(x.BhN.CONNECTION_DETAILS) })
                },
                'label'
            )),
            (T = j.intl.string(j.t['LVh3//']))),
        a && (T = j.intl.string(j.t.i4jeWV)),
        (0, i.jsxs)('div', {
            className: E.metadataContainer,
            children: [
                S,
                null == O
                    ? void 0
                    : O.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < O.length - 1 ? (0, i.jsx)('span', { className: E.dot }) : null]
                          })
                      ),
                null != O && O.length > 0 && null != v ? (0, i.jsx)('div', { className: E.dot }) : null,
                null != v
                    ? (0, i.jsx)(
                          o.Text,
                          {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              children: j.intl.format(j.t['9rfonp'], { date: v })
                          },
                          'member-since'
                      )
                    : null,
                (0, i.jsx)(
                    l.zx,
                    {
                        className: E.metadataRefreshButton,
                        look: l.zx.Looks.OUTLINED,
                        color: a ? l.zx.Colors.GREEN : l.zx.Colors.PRIMARY,
                        size: l.zx.Sizes.MIN,
                        submitting: d,
                        disabled: a,
                        'aria-label': j.intl.string(j.t.sCkLYG),
                        onClick: a ? void 0 : C,
                        children: T
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function O(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: s } = e,
        [l, m] = r.useState(t.visibility),
        [g, h] = r.useState(t.metadataVisibility),
        f = (0, d.ZP)();
    r.useEffect(() => {
        (m(t.visibility), h(t.metadataVisibility));
    }, [t]);
    let b = u.Z.get(t.type),
        x = !0 === b.hasMetadata;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.activityRow,
                children: [
                    (0, i.jsx)('img', {
                        alt: b.name,
                        className: E.connectionIcon,
                        src: (0, a.wj)(f) ? b.icon.darkSVG : b.icon.lightSVG
                    }),
                    (0, i.jsxs)('div', {
                        className: E.activitySettings,
                        children: [
                            (0, i.jsxs)(o.j7V, {
                                className: E.visibilitySwitch,
                                hideBorder: !0,
                                value: 1 === l,
                                onChange: function (e) {
                                    let { verified: n } = t,
                                        i = +!!e;
                                    if (e && !n) {
                                        (m(i),
                                            (0, p.Z)({
                                                platformType: t.type,
                                                location: 'User Settings'
                                            }));
                                        return;
                                    }
                                    (m(i), c.Z.setVisibility(t.type, t.id, i));
                                },
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: b.name
                                    }),
                                    x &&
                                        (0, i.jsx)(C, {
                                            account: t,
                                            refreshed: s.includes(t.id),
                                            handleRefresh: n
                                        })
                                ]
                            }),
                            x &&
                                (0, i.jsx)(o.j7V, {
                                    className: E.additionalDetailsSwitch,
                                    hideBorder: !0,
                                    disabled: 1 !== l || null == t.metadata,
                                    value: 1 === g,
                                    onChange: function (e) {
                                        let { verified: n } = t,
                                            i = +!!e;
                                        if (e && !n) {
                                            (h(i),
                                                (0, p.Z)({
                                                    platformType: t.type,
                                                    location: 'User Settings'
                                                }));
                                            return;
                                        }
                                        (h(i), c.Z.setMetadataVisibility(t.type, t.id, i));
                                    },
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: j.intl.string(j.t['3l78ws'])
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
function v() {
    let e = (0, s.e7)([f.Z], () => f.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => u.Z.isSupported(e.type)), [e]),
        [n, a] = r.useState([]),
        l = r.useCallback(
            (e) =>
                c.Z.refresh(e.type, e.id).finally(() => {
                    a((t) => [...t, e.id]);
                }),
            []
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)(o.hjN, {
              className: E.container,
              children: [
                  (0, i.jsx)(o.vwX, {
                      tag: o.RB0.H5,
                      className: E.title,
                      children: j.intl.string(j.t.aw0GVV)
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          O,
                          {
                              account: e,
                              handleRefresh: l,
                              refreshedAccountIds: n
                          },
                          e.id
                      )
                  )
              ]
          });
}
