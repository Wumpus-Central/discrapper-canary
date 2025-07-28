(n.d(t, { P: () => O }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(580685),
    a = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(484614),
    u = n(314852),
    m = n(65361),
    g = n(246946),
    p = n(330010),
    h = n(999382),
    f = n(800223),
    x = n(24318),
    b = n(822693),
    j = n(388032),
    v = n(832721);
function _(e) {
    let { guildId: t } = e,
        { guildProfile: c, fetchGuildProfile: g, fetchStatus: _ } = (0, m.u)(t),
        O = _ !== u.a.FETCHED,
        {
            fetchedEmbed: y,
            embedEnabled: C,
            embedChannelId: N
        } = (0, s.cj)([h.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = h.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n
            };
        }),
        I = i.useMemo(() => (0, x.S)(t), [t]),
        E = i.useMemo(() => (0, x.a)(t), [t]),
        [S, T] = i.useState(!1),
        P = null != c && l.Y.VISIBLE.has(c.visibility),
        w = !O && !P && !C;
    (i.useEffect(() => {
        y || (0, p.R)(t);
    }, [y, t]),
        i.useEffect(() => {
            g();
        }, [t, g]));
    let R = i.useCallback(
        async (e) => {
            (T(!0), await (0, f.c)(t, e, N), T(!1));
        },
        [N, t]
    );
    return y
        ? (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(o.j7V, {
                      disabled: S,
                      value: C,
                      hideBorder: !0,
                      onChange: R,
                      children: j.intl.string(j.t.NR6hub)
                  }),
                  w
                      ? (0, r.jsx)(a.xv, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            className: v.subtext,
                            children: j.intl.string(j.t.zCGuJy)
                        })
                      : null,
                  C
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', { className: v.divider }),
                                (0, r.jsx)(o.vwX, { children: j.intl.string(j.t.LUo0Q0) }),
                                (0, r.jsx)(b.m, {
                                    guildId: t,
                                    widgetEnabled: C,
                                    widgetChannelId: N,
                                    enableLocalUpdate: !0
                                }),
                                (0, r.jsx)(a.xv, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: v.subtext,
                                    children: j.intl.string(j.t.LxVR9P)
                                }),
                                (0, r.jsxs)('div', {
                                    className: v.twoColumns,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: v.column,
                                            children: [(0, r.jsx)(o.vwX, { children: j.intl.string(j.t.TRyLUl) }), (0, r.jsx)(d.Z, { value: t })]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: v.column,
                                            children: [(0, r.jsx)(o.vwX, { children: j.intl.string(j.t.VECJcH) }), (0, r.jsx)(d.Z, { value: I })]
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', { className: v.divider }),
                                (0, r.jsxs)('div', {
                                    className: v.twoColumns,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: v.column,
                                            children: [
                                                (0, r.jsx)(o.vwX, { children: j.intl.string(j.t.XVGbn5) }),
                                                (0, r.jsx)(d.Z, { value: E }),
                                                (0, r.jsx)(a.xv, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-secondary',
                                                    className: v.subtext,
                                                    children: j.intl.string(j.t['+baN19'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)('img', {
                                            className: v.column,
                                            'data-accessibility': 'desaturate',
                                            alt: '',
                                            src: n(329488)
                                        })
                                    ]
                                })
                            ]
                        })
                      : null
              ]
          })
        : (0, r.jsx)(o.$jN, {});
}
function O(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([g.Z], () => g.Z.enabled);
    return (0, r.jsxs)(o.hjN, {
        title: j.intl.string(j.t.qlhNb2),
        children: [
            (0, r.jsx)(a.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: v.description,
                children: j.intl.string(j.t['dNn/1t'])
            }),
            n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(_, { guildId: t })
        ]
    });
}
