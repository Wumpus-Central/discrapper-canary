n.d(t, { ZP: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(793030),
    a = n(481060),
    c = n(808189),
    u = n(973772),
    d = n(838968),
    p = n(262212),
    m = n(226278),
    g = n(279604),
    f = n(279475),
    v = n(535396),
    _ = n(981631),
    x = n(989308),
    h = n(388032),
    b = n(237522),
    C = n(259913);
function j(e) {
    let t,
        { active: n, nextActive: i, position: o } = e;
    return (
        (t = n && !1 !== i ? "full" : n && !1 === i ? "half" : "none"),
        (0, r.jsxs)("div", {
            className: C.progressContainer,
            children: [
                (0, r.jsx)("div", { className: s()(C.progress, C[o], C[t]) }),
                (0, r.jsx)("div", {
                    className: s()(C.boostContainer, b.boostProgressBackground, {
                        [C.boostContainerActive]: n,
                        [b.active]: n,
                    }),
                    children: (0, r.jsx)(a.$Eu, {
                        size: "sm",
                        color: "white",
                    }),
                }),
            ],
        })
    );
}
function T(e) {
    let { isActive: t, index: n } = e,
        o = (0, f.d)(t),
        s = (0, f.u)(t),
        a = i.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === _.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: C.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: s,
                                      size: "sm",
                                  }),
                                  (0, r.jsx)(l.xvT, {
                                      className: C.perkText,
                                      color: o,
                                      variant: "text-sm/medium",
                                      children: e.getCopy(),
                                  }),
                              ],
                          },
                          "perk-".concat(n, "-").concat(t),
                      ),
                  );
        }, [n, s, o]);
    return (0, r.jsxs)("div", {
        className: C.perkRowContainer,
        children: [
            a,
            (0, r.jsx)("div", {
                className: C.perkRow,
                children: (0, r.jsx)(l.xvT, {
                    color: o,
                    variant: "text-sm/medium",
                    children: h.intl.string(x.default.nIj3LS),
                }),
            }),
        ],
    });
}
function E(e) {
    let { guildId: t, index: n, powerup: o, nextPowerup: s } = e,
        l = (0, u.ZP)(t, o),
        a = (0, u.ZP)(t, s),
        c = l.type !== v.A3.INACTIVE,
        _ = a.type !== v.A3.INACTIVE,
        x = l.type === v.A3.TIER_OVERRIDE_ACTIVATED,
        [h, b] = i.useState(void 0);
    (0, g.KT)(h);
    let E = (0, f.d)(c);
    return (0, r.jsxs)(m.Z, {
        guildId: t,
        powerup: o,
        className: C.card,
        children: [
            (0, r.jsx)(j, {
                position: 0 === n ? "start" : null == s ? "end" : "middle",
                active: c,
                nextActive: null != s ? _ : void 0,
            }),
            (0, r.jsx)(d.Q9, {
                title: o.title,
                textColor: E,
                footer:
                    !x &&
                    (0, r.jsx)(m.g, {
                        className: C.footer,
                        guildId: t,
                        powerup: o,
                    }),
                children: (0, r.jsx)(T, {
                    isActive: c,
                    index: n,
                }),
            }),
            !x &&
                (0, r.jsx)(d.N4, {
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: o,
                        onError: b,
                    }),
                }),
        ],
    });
}
