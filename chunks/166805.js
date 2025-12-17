n.d(t, { P: () => C }), n(388685);
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
    f = n(246946),
    m = n(330010),
    b = n(999382),
    p = n(800223),
    h = n(24318),
    x = n(822693),
    j = n(388032),
    v = n(854815);
function O(e) {
    let { guildId: t } = e,
        { guildProfile: c, fetchGuildProfile: f, fetchStatus: O } = (0, g.u)(t),
        C = O !== u.a.FETCHED,
        {
            fetchedEmbed: y,
            embedEnabled: N,
            embedChannelId: E,
        } = (0, s.cj)([b.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = b.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n,
            };
        }),
        I = i.useMemo(() => (0, h.S)(t), [t]),
        S = i.useMemo(() => (0, h.a)(t), [t]),
        [_, T] = i.useState(!1),
        P = null != c && l.Y.VISIBLE.has(c.visibility),
        w = !C && !P && !N;
    i.useEffect(() => {
        y || (0, m.R)(t);
    }, [y, t]),
        i.useEffect(() => {
            f();
        }, [t, f]);
    let Z = i.useCallback(
        async (e) => {
            T(!0), await (0, p.c)(t, e, E), T(!1);
        },
        [E, t],
    );
    return y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.rsf, {
                      label: j.intl.string(j.t.NR6huS),
                      checked: N,
                      onChange: Z,
                      disabled: _,
                  }),
                  w
                      ? (0, r.jsx)(a.xvT, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: v.subtext,
                            children: j.intl.string(j.t["zCGuJ+"]),
                        })
                      : null,
                  N
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.m, {
                                    label: j.intl.string(j.t.LUo0Q8),
                                    description: j.intl.string(j.t.LxVR9A),
                                    guildId: t,
                                    widgetEnabled: N,
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
                                                children: (0, r.jsx)(d.Z, { value: I }),
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
                                                children: (0, r.jsx)(d.Z, { value: S }),
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
        n = (0, s.e7)([f.Z], () => f.Z.enabled);
    return (0, r.jsx)(o.C3N, {
        label: j.intl.string(j.t["qlhNb+"]),
        description: j.intl.string(j.t["dNn/1i"]),
        children: n ? (0, r.jsx)(c.Z, {}) : (0, r.jsx)(O, { guildId: t }),
    });
}
