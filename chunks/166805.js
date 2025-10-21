n.d(t, { P: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(580685),
    a = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(484614),
    u = n(314852),
    g = n(65361),
    m = n(246946),
    p = n(330010),
    f = n(999382),
    h = n(800223),
    b = n(24318),
    x = n(822693),
    j = n(388032),
    v = n(356086);
function _(e) {
    let { guildId: t } = e,
        { guildProfile: c, fetchGuildProfile: m, fetchStatus: _ } = (0, g.u)(t),
        C = _ !== u.a.FETCHED,
        {
            fetchedEmbed: O,
            embedEnabled: y,
            embedChannelId: E,
        } = (0, s.cj)([f.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = f.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n,
            };
        }),
        N = i.useMemo(() => (0, b.S)(t), [t]),
        I = i.useMemo(() => (0, b.a)(t), [t]),
        [S, T] = i.useState(!1),
        P = null != c && l.Y.VISIBLE.has(c.visibility),
        w = !C && !P && !y;
    i.useEffect(() => {
        O || (0, p.R)(t);
    }, [O, t]),
        i.useEffect(() => {
            m();
        }, [t, m]);
    let Z = i.useCallback(
        async (e) => {
            T(!0), await (0, h.c)(t, e, E), T(!1);
        },
        [E, t],
    );
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.rsf, {
                      label: j.intl.string(j.t.NR6huS),
                      checked: y,
                      onChange: Z,
                      disabled: S,
                  }),
                  w
                      ? (0, r.jsx)(a.xvT, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            className: v.subtext,
                            children: j.intl.string(j.t["zCGuJ+"]),
                        })
                      : null,
                  y
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.m, {
                                    label: j.intl.string(j.t.LUo0Q8),
                                    description: j.intl.string(j.t.LxVR9A),
                                    guildId: t,
                                    widgetEnabled: y,
                                    widgetChannelId: E,
                                    enableLocalUpdate: !0,
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.twoColumns,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: v.column,
                                            children: (0, r.jsx)(a.gNt, {
                                                label: j.intl.string(j.t.TRyLUh),
                                                children: (0, r.jsx)(d.Z, { value: t }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: v.column,
                                            children: (0, r.jsx)(a.gNt, {
                                                label: j.intl.string(j.t.VECJcK),
                                                children: (0, r.jsx)(d.Z, { value: N }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: v.divider }),
                                (0, r.jsxs)("div", {
                                    className: v.twoColumns,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: v.column,
                                            children: (0, r.jsx)(a.gNt, {
                                                label: j.intl.string(j.t.XVGbn1),
                                                description: j.intl.string(j.t["+baN11"]),
                                                children: (0, r.jsx)(d.Z, { value: I }),
                                            }),
                                        }),
                                        (0, r.jsx)("img", {
                                            className: v.column,
                                            "data-accessibility": "desaturate",
                                            alt: "",
                                            src: n(329488),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, r.jsx)(o.$jN, {});
}
function C(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([m.Z], () => m.Z.enabled);
    return (0, r.jsx)(o.C3N, {
        label: j.intl.string(j.t["qlhNb+"]),
        description: j.intl.string(j.t["dNn/1i"]),
        children: n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(_, { guildId: t }),
    });
}
