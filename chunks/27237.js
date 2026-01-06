n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    s = n(481060),
    u = n(297159),
    c = n(973772),
    d = n(838968),
    f = n(262212),
    p = n(226278),
    m = n(707541),
    g = n(192958),
    v = n(535396),
    x = n(981631),
    b = n(132748),
    h = n(556970),
    j = n(388032),
    Z = n(138545),
    _ = n(919600);
function C(e) {
    let t,
        { active: n, nextActive: i, position: l } = e;
    return (
        (t = n && !1 !== i ? v.vW.FULL : n && !1 === i ? v.vW.HALF : v.vW.NONE),
        (0, r.jsxs)("div", {
            className: _.progressContainer,
            children: [
                (0, r.jsx)("div", { className: o()(_.progress, _[l], _[t]) }),
                (0, r.jsx)("div", {
                    className: o()(_.boostContainer, Z.boostProgressBackground, {
                        [_.boostContainerActive]: n,
                        [Z.active]: n,
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
        { textColor: l, iconColor: o } = (0, m.Z)(t),
        s = i.useMemo(() => {
            let e = b.C[n];
            if (null == e) return [];
            let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) => {
                      let i = (0, u.P)(e.perkIcon);
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: _.perkRow,
                              children: [
                                  (0, r.jsx)(i, {
                                      color: o,
                                      size: "sm",
                                  }),
                                  (0, r.jsx)(a.xvT, {
                                      className: _.perkText,
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
        className: _.perkRowContainer,
        children: [
            s,
            (0, r.jsx)("div", {
                className: _.perkRow,
                children: (0, r.jsx)(a.xvT, {
                    color: l,
                    variant: "text-sm/medium",
                    children: j.intl.string(h.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function E(e) {
    let t,
        { guildId: n, index: l, powerup: o, nextPowerup: a } = e,
        s = (0, c.ZP)(n, o),
        u = (0, c.ZP)(n, a),
        x = s.type !== v.A3.INACTIVE,
        b = u.type !== v.A3.INACTIVE,
        h = s.type === v.A3.TIER_OVERRIDE_ACTIVATED,
        [j, Z] = i.useState(void 0);
    (0, g.Z)(j), (t = 0 === l ? v.m.START : null == a ? v.m.END : v.m.MIDDLE);
    let { textColor: E } = (0, m.Z)(x);
    return (0, r.jsxs)(p.Z, {
        guildId: n,
        powerup: o,
        className: _.card,
        children: [
            (0, r.jsx)(C, {
                position: t,
                active: x,
                nextActive: null != a ? b : void 0,
            }),
            (0, r.jsx)(d.Q9, {
                title: o.title,
                textColor: E,
                footer:
                    !h &&
                    (0, r.jsx)(p.g, {
                        className: _.footer,
                        guildId: n,
                        powerup: o,
                    }),
                children: (0, r.jsx)(w, {
                    isActive: x,
                    index: l,
                }),
            }),
            !h &&
                (0, r.jsx)(d.N4, {
                    children: (0, r.jsx)(f.ZP, {
                        guildId: n,
                        powerup: o,
                        onError: Z,
                    }),
                }),
        ],
    });
}
