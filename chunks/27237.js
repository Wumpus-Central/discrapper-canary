n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    l = n.n(o),
    a = n(793030),
    s = n(692547),
    u = n(481060),
    c = n(297159),
    d = n(973772),
    f = n(838968),
    p = n(262212),
    m = n(226278),
    v = n(707541),
    g = n(192958),
    x = n(535396),
    b = n(981631),
    h = n(132748),
    j = n(556970),
    Z = n(388032),
    _ = n(138545),
    C = n(919600);
function w(e) {
    let t,
        { active: n, nextActive: i, position: o } = e;
    return (
        (t = n && !1 !== i ? x.vW.FULL : n && !1 === i ? x.vW.HALF : x.vW.NONE),
        (0, r.jsxs)("div", {
            className: C.progressContainer,
            children: [
                (0, r.jsx)("div", { className: l()(C.progress, C[o], C[t]) }),
                (0, r.jsx)("div", {
                    className: l()(C.boostContainer, _.boostProgressBackground, {
                        [C.boostContainerActive]: n,
                        [_.active]: n,
                    }),
                    children: (0, r.jsx)(u.Ucv, {
                        size: "sm",
                        color: s.Z.colors.ICON_STRONG,
                    }),
                }),
            ],
        })
    );
}
function I(e) {
    let { isActive: t, index: n } = e,
        { textColor: o, iconColor: l } = (0, v.Z)(t),
        s = i.useMemo(() => {
            let e = h.C[n];
            if (null == e) return [];
            let t = e.tier === b.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) => {
                      let i = (0, c.P)(e.perkIcon);
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: C.perkRow,
                              children: [
                                  (0, r.jsx)(i, {
                                      color: l,
                                      size: "sm",
                                  }),
                                  (0, r.jsx)(a.xvT, {
                                      className: C.perkText,
                                      color: o,
                                      variant: "text-sm/medium",
                                      children: e.getCopy(),
                                  }),
                              ],
                          },
                          "perk-".concat(n, "-").concat(t),
                      );
                  });
        }, [n, l, o]);
    return (0, r.jsxs)("div", {
        className: C.perkRowContainer,
        children: [
            s,
            (0, r.jsx)("div", {
                className: C.perkRow,
                children: (0, r.jsx)(a.xvT, {
                    color: o,
                    variant: "text-sm/medium",
                    children: Z.intl.string(j.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function E(e) {
    let t,
        { guildId: n, index: o, powerup: l, nextPowerup: a } = e,
        s = (0, d.ZP)(n, l),
        u = (0, d.ZP)(n, a),
        c = s.type !== x.A3.INACTIVE,
        b = u.type !== x.A3.INACTIVE,
        h = s.type === x.A3.TIER_OVERRIDE_ACTIVATED,
        [j, Z] = i.useState(void 0);
    (0, g.Z)(j), (t = 0 === o ? x.m.START : null == a ? x.m.END : x.m.MIDDLE);
    let { textColor: _ } = (0, v.Z)(c);
    return (0, r.jsxs)(m.Z, {
        guildId: n,
        powerup: l,
        className: C.card,
        children: [
            (0, r.jsx)(w, {
                position: t,
                active: c,
                nextActive: null != a ? b : void 0,
            }),
            (0, r.jsx)(f.Q9, {
                title: l.title,
                textColor: _,
                footer:
                    !h &&
                    (0, r.jsx)(m.g, {
                        className: C.footer,
                        guildId: n,
                        powerup: l,
                    }),
                children: (0, r.jsx)(I, {
                    isActive: c,
                    index: o,
                }),
            }),
            !h &&
                (0, r.jsx)(f.N4, {
                    children: (0, r.jsx)(p.ZP, {
                        guildId: n,
                        powerup: l,
                        onError: Z,
                    }),
                }),
        ],
    });
}
