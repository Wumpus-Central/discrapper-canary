n.d(t, { P: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(580685),
    s = n(793030),
    a = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(484614),
    u = n(314852),
    g = n(65361),
    m = n(246946),
    p = n(330010),
    f = n(999382),
    h = n(800223),
    x = n(24318),
    b = n(822693),
    j = n(388032),
    _ = n(356086);
function v(e) {
    let { guildId: t } = e,
        { guildProfile: c, fetchGuildProfile: m, fetchStatus: v } = (0, g.u)(t),
        C = v !== u.a.FETCHED,
        {
            fetchedEmbed: O,
            embedEnabled: y,
            embedChannelId: N,
        } = (0, a.cj)([f.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = f.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n,
            };
        }),
        E = i.useMemo(() => (0, x.S)(t), [t]),
        I = i.useMemo(() => (0, x.a)(t), [t]),
        [S, T] = i.useState(!1),
        P = null != c && l.Y.VISIBLE.has(c.visibility),
        w = !C && !P && !y;
    i.useEffect(() => {
        O || (0, p.R)(t);
    }, [O, t]),
        i.useEffect(() => {
            m();
        }, [t, m]);
    let R = i.useCallback(
        async (e) => {
            T(!0), await (0, h.c)(t, e, N), T(!1);
        },
        [N, t],
    );
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.rsf, {
                      label: j.intl.string(j.t.NR6hub),
                      checked: y,
                      onChange: R,
                      disabled: S,
                  }),
                  w
                      ? (0, r.jsx)(s.xvT, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            className: _.subtext,
                            children: j.intl.string(j.t.zCGuJy),
                        })
                      : null,
                  y
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(b.m, {
                                    label: j.intl.string(j.t.LUo0Q0),
                                    description: j.intl.string(j.t.LxVR9P),
                                    guildId: t,
                                    widgetEnabled: y,
                                    widgetChannelId: N,
                                    enableLocalUpdate: !0,
                                }),
                                (0, r.jsxs)("div", {
                                    className: _.twoColumns,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: _.column,
                                            children: (0, r.jsx)(s.NIc, {
                                                label: j.intl.string(j.t.TRyLUl),
                                                children: (0, r.jsx)(d.Z, { value: t }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: _.column,
                                            children: (0, r.jsx)(s.NIc, {
                                                label: j.intl.string(j.t.VECJcH),
                                                children: (0, r.jsx)(d.Z, { value: E }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: _.divider }),
                                (0, r.jsxs)("div", {
                                    className: _.twoColumns,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: _.column,
                                            children: (0, r.jsx)(s.NIc, {
                                                label: j.intl.string(j.t.XVGbn5),
                                                description: j.intl.string(j.t["+baN19"]),
                                                children: (0, r.jsx)(d.Z, { value: I }),
                                            }),
                                        }),
                                        (0, r.jsx)("img", {
                                            className: _.column,
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
        n = (0, a.e7)([m.Z], () => m.Z.enabled);
    return (0, r.jsx)(o.C3N, {
        label: j.intl.string(j.t.qlhNb2),
        description: j.intl.string(j.t["dNn/1t"]),
        children: n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(v, { guildId: t }),
    });
}
