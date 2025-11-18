n.d(t, { ZP: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    s = n(481060),
    c = n(808189),
    u = n(973772),
    d = n(838968),
    p = n(262212),
    f = n(226278),
    m = n(279604),
    g = n(279475),
    v = n(535396),
    x = n(981631),
    _ = n(501669),
    b = n(388032),
    h = n(470039),
    j = n(444012);
function C(e) {
    let t,
        { active: n, nextActive: i, position: l } = e;
    return (
        (t = n && !1 !== i ? "full" : n && !1 === i ? "half" : "none"),
        (0, r.jsxs)("div", {
            className: j.progressContainer,
            children: [
                (0, r.jsx)("div", { className: o()(j.progress, j[l], j[t]) }),
                (0, r.jsx)("div", {
                    className: o()(j.boostContainer, h.boostProgressBackground, {
                        [j.boostContainerActive]: n,
                        [h.active]: n,
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
        l = (0, g.d)(t),
        o = (0, g.u)(t),
        s = i.useMemo(() => {
            let e = c.C[n];
            if (null == e) return [];
            let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: j.perkRow,
                              children: [
                                  (0, r.jsx)(e.icon, {
                                      color: o,
                                      size: "sm",
                                  }),
                                  (0, r.jsx)(a.xvT, {
                                      className: j.perkText,
                                      color: l,
                                      variant: "text-sm/medium",
                                      children: e.getCopy(),
                                  }),
                              ],
                          },
                          "perk-".concat(n, "-").concat(t),
                      ),
                  );
        }, [n, o, l]);
    return (0, r.jsxs)("div", {
        className: j.perkRowContainer,
        children: [
            s,
            (0, r.jsx)("div", {
                className: j.perkRow,
                children: (0, r.jsx)(a.xvT, {
                    color: l,
                    variant: "text-sm/medium",
                    children: b.intl.string(_.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function I(e) {
    let { guildId: t, index: n, powerup: l, nextPowerup: o } = e,
        a = (0, u.ZP)(t, l),
        s = (0, u.ZP)(t, o),
        c = a.type !== v.A3.INACTIVE,
        x = s.type !== v.A3.INACTIVE,
        _ = a.type === v.A3.TIER_OVERRIDE_ACTIVATED,
        [b, h] = i.useState(void 0);
    (0, m.KT)(b);
    let I = (0, g.d)(c);
    return (0, r.jsxs)(f.Z, {
        guildId: t,
        powerup: l,
        className: j.card,
        children: [
            (0, r.jsx)(C, {
                position: 0 === n ? "start" : null == o ? "end" : "middle",
                active: c,
                nextActive: null != o ? x : void 0,
            }),
            (0, r.jsx)(d.Q9, {
                title: l.title,
                textColor: I,
                footer:
                    !_ &&
                    (0, r.jsx)(f.g, {
                        className: j.footer,
                        guildId: t,
                        powerup: l,
                    }),
                children: (0, r.jsx)(w, {
                    isActive: c,
                    index: n,
                }),
            }),
            !_ &&
                (0, r.jsx)(d.N4, {
                    children: (0, r.jsx)(p.ZP, {
                        guildId: t,
                        powerup: l,
                        onError: h,
                    }),
                }),
        ],
    });
}
