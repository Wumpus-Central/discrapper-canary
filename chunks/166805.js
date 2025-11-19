n.d(t, { P: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
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
    _ = n(356086);
function v(e) {
    let { guildId: t } = e,
        { guildProfile: c, fetchGuildProfile: m, fetchStatus: v } = (0, g.u)(t),
        O = v !== u.a.FETCHED,
        {
            fetchedEmbed: C,
            embedEnabled: y,
            embedChannelId: N,
        } = (0, s.cj)([f.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = f.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n,
            };
        }),
        E = i.useMemo(() => (0, b.S)(t), [t]),
        I = i.useMemo(() => (0, b.a)(t), [t]),
        [S, T] = i.useState(!1),
        P = null != c && l.Y.VISIBLE.has(c.visibility),
        w = !O && !P && !y;
    i.useEffect(() => {
        C || (0, p.R)(t);
    }, [C, t]),
        i.useEffect(() => {
            m();
        }, [t, m]);
    let Z = i.useCallback(
        async (e) => {
            T(!0), await (0, h.c)(t, e, N), T(!1);
        },
        [N, t],
    );
    return C
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
                            className: _.subtext,
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
                                    widgetChannelId: N,
                                    enableLocalUpdate: !0,
                                }),
                                (0, r.jsxs)("div", {
                                    className: _.twoColumns,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: _.column,
                                            children: (0, r.jsx)(a.gNt, {
                                                label: j.intl.string(j.t.TRyLUh),
                                                children: (0, r.jsx)(d.Z, { value: t }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: _.column,
                                            children: (0, r.jsx)(a.gNt, {
                                                label: j.intl.string(j.t.VECJcK),
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
                                            children: (0, r.jsx)(a.gNt, {
                                                label: j.intl.string(j.t.XVGbn1),
                                                description: j.intl.string(j.t["+baN11"]),
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
function O(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([m.Z], () => m.Z.enabled);
    return (0, r.jsx)(o.C3N, {
        label: j.intl.string(j.t["qlhNb+"]),
        description: j.intl.string(j.t["dNn/1i"]),
        children: n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(v, { guildId: t }),
    });
}
