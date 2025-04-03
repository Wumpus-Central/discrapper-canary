n.d(t, { P: () => C }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(580685),
    a = n(793030),
    l = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(484614),
    u = n(314852),
    m = n(65361),
    g = n(246946),
    p = n(330010),
    h = n(600553),
    f = n(999382),
    b = n(800223),
    x = n(24318),
    j = n(822693),
    N = n(388032),
    _ = n(832721);
function v(e) {
    let { guildId: t } = e,
        { guildProfile: c, fetchGuildProfile: g, fetchStatus: v } = (0, m.u)(t),
        C = v !== u.a.FETCHED,
        {
            fetchedEmbed: O,
            embedEnabled: y,
            embedChannelId: I
        } = (0, l.cj)([f.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = f.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n
            };
        }),
        E = i.useMemo(() => (0, x.S)(t), [t]),
        S = i.useMemo(() => (0, x.a)(t), [t]),
        [T, P] = i.useState(!1),
        w = null != c && s.Y.VISIBLE.has(c.visibility),
        R = !C && !w && !y,
        Z = (0, h.Dj)({
            guildId: t,
            location: 'widget settings'
        });
    i.useEffect(() => {
        O || (0, p.R)(t);
    }, [O, t]),
        i.useEffect(() => {
            g();
        }, [t, g]);
    let D = i.useCallback(
        async (e) => {
            P(!0), await (0, b.c)(t, e, I), P(!1);
        },
        [I, t]
    );
    return O
        ? (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(o.j7V, {
                      disabled: T,
                      value: y,
                      hideBorder: !0,
                      onChange: D,
                      children: N.NW.string(N.t.NR6hub)
                  }),
                  R
                      ? (0, r.jsx)(a.xv, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            className: _.subtext,
                            children: Z ? N.NW.string(N.t.zCGuJy) : N.NW.string(N.t.yInR2t)
                        })
                      : null,
                  y
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', { className: _.divider }),
                                (0, r.jsx)(o.vwX, { children: N.NW.string(N.t.LUo0Q0) }),
                                (0, r.jsx)(j.m, {
                                    guildId: t,
                                    widgetEnabled: y,
                                    widgetChannelId: I,
                                    enableLocalUpdate: !0
                                }),
                                (0, r.jsx)(a.xv, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: _.subtext,
                                    children: N.NW.string(N.t.LxVR9P)
                                }),
                                (0, r.jsxs)('div', {
                                    className: _.twoColumns,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: _.column,
                                            children: [(0, r.jsx)(o.vwX, { children: N.NW.string(N.t.TRyLUl) }), (0, r.jsx)(d.Z, { value: t })]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: _.column,
                                            children: [(0, r.jsx)(o.vwX, { children: N.NW.string(N.t.VECJcH) }), (0, r.jsx)(d.Z, { value: E })]
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', { className: _.divider }),
                                (0, r.jsxs)('div', {
                                    className: _.twoColumns,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: _.column,
                                            children: [
                                                (0, r.jsx)(o.vwX, { children: N.NW.string(N.t.XVGbn5) }),
                                                (0, r.jsx)(d.Z, { value: S }),
                                                (0, r.jsx)(a.xv, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-secondary',
                                                    className: _.subtext,
                                                    children: N.NW.string(N.t['+baN19'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)('img', {
                                            className: _.column,
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
function C(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([g.Z], () => g.Z.enabled);
    return (0, r.jsxs)(o.hjN, {
        title: N.NW.string(N.t.qlhNb2),
        children: [
            (0, r.jsx)(a.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: _.description,
                children: N.NW.string(N.t['dNn/1t'])
            }),
            n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(v, { guildId: t })
        ]
    });
}
