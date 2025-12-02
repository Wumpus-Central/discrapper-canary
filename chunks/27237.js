n.d(t, { ZP: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    l = n.n(o),
    a = n(793030),
    s = n(481060),
    c = n(297159),
    u = n(973772),
    d = n(838968),
    p = n(262212),
    f = n(226278),
    m = n(279604),
    g = n(707541),
    v = n(535396),
    x = n(981631),
    _ = n(132748),
    b = n(130231),
    h = n(388032),
    j = n(237522),
    C = n(259913);
function w(e) {
    let t,
        { active: n, nextActive: i, position: o } = e;
    return (
        (t = n && !1 !== i ? "full" : n && !1 === i ? "half" : "none"),
        (0, r.jsxs)("div", {
            className: C.progressContainer,
            children: [
                (0, r.jsx)("div", { className: l()(C.progress, C[o], C[t]) }),
                (0, r.jsx)("div", {
                    className: l()(C.boostContainer, j.boostProgressBackground, {
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
function Z(e) {
    let { isActive: t, index: n } = e,
        { textColor: o, iconColor: l } = (0, g.Z)(t),
        s = i.useMemo(() => {
            let e = _.C[n];
            if (null == e) return [];
            let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
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
                    children: h.intl.string(b.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function I(e) {
    let { guildId: t, index: n, powerup: o, nextPowerup: l } = e,
        a = (0, u.ZP)(t, o),
        s = (0, u.ZP)(t, l),
        c = a.type !== v.A3.INACTIVE,
        x = s.type !== v.A3.INACTIVE,
        _ = a.type === v.A3.TIER_OVERRIDE_ACTIVATED,
        [b, h] = i.useState(void 0);
    (0, m.KT)(b);
    let { textColor: j } = (0, g.Z)(c);
    return (0, r.jsxs)(f.Z, {
        guildId: t,
        powerup: o,
        className: C.card,
        children: [
            (0, r.jsx)(w, {
                position: 0 === n ? "start" : null == l ? "end" : "middle",
                active: c,
                nextActive: null != l ? x : void 0,
            }),
            (0, r.jsx)(d.Q9, {
                title: o.title,
                textColor: j,
                footer:
                    !_ &&
                    (0, r.jsx)(f.g, {
                        className: C.footer,
                        guildId: t,
                        powerup: o,
                    }),
                children: (0, r.jsx)(Z, {
                    isActive: c,
                    index: n,
                }),
            }),
            !_ &&
                (0, r.jsx)(d.N4, {
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: o,
                        onError: h,
                    }),
                }),
        ],
    });
}
