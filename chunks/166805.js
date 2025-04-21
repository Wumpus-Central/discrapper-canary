n.d(t, { P: () => C }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(580685),
    s = n(793030),
    a = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(484614),
    u = n(314852),
    m = n(65361),
    g = n(246946),
    p = n(330010),
    h = n(600553),
    f = n(999382),
    x = n(800223),
    b = n(24318),
    j = n(822693),
    _ = n(388032),
    v = n(832721);
function O(e) {
    let { guildId: t } = e,
        { guildProfile: c, fetchGuildProfile: g, fetchStatus: O } = (0, m.u)(t),
        C = O !== u.a.FETCHED,
        {
            fetchedEmbed: y,
            embedEnabled: N,
            embedChannelId: I
        } = (0, a.cj)([f.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = f.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n
            };
        }),
        E = i.useMemo(() => (0, b.S)(t), [t]),
        S = i.useMemo(() => (0, b.a)(t), [t]),
        [T, P] = i.useState(!1),
        w = null != c && l.Y.VISIBLE.has(c.visibility),
        R = !C && !w && !N,
        Z = (0, h.Dj)({
            guildId: t,
            location: 'widget settings'
        });
    i.useEffect(() => {
        y || (0, p.R)(t);
    }, [y, t]),
        i.useEffect(() => {
            g();
        }, [t, g]);
    let D = i.useCallback(
        async (e) => {
            P(!0), await (0, x.c)(t, e, I), P(!1);
        },
        [I, t]
    );
    return y
        ? (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(o.j7V, {
                      disabled: T,
                      value: N,
                      hideBorder: !0,
                      onChange: D,
                      children: _.intl.string(_.t.NR6hub)
                  }),
                  R
                      ? (0, r.jsx)(s.xv, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            className: v.subtext,
                            children: Z ? _.intl.string(_.t.zCGuJy) : _.intl.string(_.t.yInR2t)
                        })
                      : null,
                  N
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', { className: v.divider }),
                                (0, r.jsx)(o.vwX, { children: _.intl.string(_.t.LUo0Q0) }),
                                (0, r.jsx)(j.m, {
                                    guildId: t,
                                    widgetEnabled: N,
                                    widgetChannelId: I,
                                    enableLocalUpdate: !0
                                }),
                                (0, r.jsx)(s.xv, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: v.subtext,
                                    children: _.intl.string(_.t.LxVR9P)
                                }),
                                (0, r.jsxs)('div', {
                                    className: v.twoColumns,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: v.column,
                                            children: [(0, r.jsx)(o.vwX, { children: _.intl.string(_.t.TRyLUl) }), (0, r.jsx)(d.Z, { value: t })]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: v.column,
                                            children: [(0, r.jsx)(o.vwX, { children: _.intl.string(_.t.VECJcH) }), (0, r.jsx)(d.Z, { value: E })]
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
                                                (0, r.jsx)(o.vwX, { children: _.intl.string(_.t.XVGbn5) }),
                                                (0, r.jsx)(d.Z, { value: S }),
                                                (0, r.jsx)(s.xv, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-secondary',
                                                    className: v.subtext,
                                                    children: _.intl.string(_.t['+baN19'])
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
function C(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([g.Z], () => g.Z.enabled);
    return (0, r.jsxs)(o.hjN, {
        title: _.intl.string(_.t.qlhNb2),
        children: [
            (0, r.jsx)(s.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: v.description,
                children: _.intl.string(_.t['dNn/1t'])
            }),
            n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(O, { guildId: t })
        ]
    });
}
