n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    s = n(481060),
    u = n(297159),
    c = n(238343),
    d = n(973772),
    p = n(838968),
    f = n(262212),
    m = n(226278),
    g = n(707541),
    v = n(535396),
    x = n(981631),
    _ = n(132748),
    b = n(265397),
    h = n(388032),
    j = n(237522),
    C = n(259913);
function Z(e) {
    let t,
        { active: n, nextActive: i, position: l } = e;
    return (
        (t = n && !1 !== i ? v.vW.FULL : n && !1 === i ? v.vW.HALF : v.vW.NONE),
        (0, r.jsxs)("div", {
            className: C.progressContainer,
            children: [
                (0, r.jsx)("div", { className: o()(C.progress, C[l], C[t]) }),
                (0, r.jsx)("div", {
                    className: o()(C.boostContainer, j.boostProgressBackground, {
                        [C.boostContainerActive]: n,
                        [j.active]: n,
                    }),
                    children: (0, r.jsx)(s.Ucv, {
                        size: "sm",
                        color: "white",
                    }),
                }),
            ],
        })
    );
}
function w(e) {
    let { isActive: t, index: n } = e,
        { textColor: l, iconColor: o } = (0, g.Z)(t),
        s = i.useMemo(() => {
            let e = _.C[n];
            if (null == e) return [];
            let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) => {
                      let i = (0, u.P)(e.perkIcon);
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: C.perkRow,
                              children: [
                                  (0, r.jsx)(i, {
                                      color: o,
                                      size: "sm",
                                  }),
                                  (0, r.jsx)(a.xvT, {
                                      className: C.perkText,
                                      color: l,
                                      variant: "text-sm/medium",
                                      children: e.getCopy(),
                                  }),
                              ],
                          },
                          "perk-".concat(n, "-").concat(t),
                      );
                  });
        }, [n, o, l]);
    return (0, r.jsxs)("div", {
        className: C.perkRowContainer,
        children: [
            s,
            (0, r.jsx)("div", {
                className: C.perkRow,
                children: (0, r.jsx)(a.xvT, {
                    color: l,
                    variant: "text-sm/medium",
                    children: h.intl.string(b.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function I(e) {
    let t,
        { guildId: n, index: l, powerup: o, nextPowerup: a } = e,
        s = (0, d.ZP)(n, o),
        u = (0, d.ZP)(n, a),
        x = s.type !== v.A3.INACTIVE,
        _ = u.type !== v.A3.INACTIVE,
        b = s.type === v.A3.TIER_OVERRIDE_ACTIVATED,
        [h, j] = i.useState(void 0);
    (0, c.KT)(h), (t = 0 === l ? v.m.START : null == a ? v.m.END : v.m.MIDDLE);
    let { textColor: I } = (0, g.Z)(x);
    return (0, r.jsxs)(m.Z, {
        guildId: n,
        powerup: o,
        className: C.card,
        children: [
            (0, r.jsx)(Z, {
                position: t,
                active: x,
                nextActive: null != a ? _ : void 0,
            }),
            (0, r.jsx)(p.Q9, {
                title: o.title,
                textColor: I,
                footer:
                    !b &&
                    (0, r.jsx)(m.g, {
                        className: C.footer,
                        guildId: n,
                        powerup: o,
                    }),
                children: (0, r.jsx)(w, {
                    isActive: x,
                    index: l,
                }),
            }),
            !b &&
                (0, r.jsx)(p.N4, {
                    children: (0, r.jsx)(f.ZP, {
                        guildId: n,
                        powerup: o,
                        onError: j,
                    }),
                }),
        ],
    });
}
