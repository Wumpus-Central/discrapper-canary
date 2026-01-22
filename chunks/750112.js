n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(508425),
    l = n(559949),
    c = n(311907),
    u = n(36075),
    d = n(397927),
    f = n(775602),
    p = n(816395),
    _ = n(824994),
    h = n(922301),
    m = n(566492),
    g = n(73392),
    E = n(564515);
let b = [l.x.CHERRY_BOMB, l.x.CHICLE],
    y = i.memo(function (e) {
        var t;
        let {
                userName: n,
                displayNameStyles: i,
                effectDisplayType: a = h.G.STATIC,
                inProfile: l = !1,
                textClassName: y,
                loop: A = !1,
                shouldWrap: v = !1,
                boldFontOpacity: S = 1,
                shouldUnderlineOnHover: I = !1,
            } = e,
            T = (0, g.a)({
                displayNameStyles: i,
            }),
            { useReducedMotion: C } = (0, c.cf)([f.A], () => ({
                useReducedMotion: f.A.useReducedMotion,
            })),
            N = (0, _.W)({
                location: "UserNameWithEffects",
            }),
            R = (0, d.rdh)(d.LU0.colors.BACKGROUND_BASE_LOW).hex(),
            w = null != (t = null == i ? void 0 : i.effectId) ? t : o.z.SOLID,
            P = (0, d.Oer)(n),
            D = (0, u.CR)(P, w === o.z.TOON ? E.Zg : void 0),
            x = (0, p.H)({
                displayNameStyles: N ? i : null,
                backgroundColor: R,
            });
        if (!N || null == i) return n;
        let L = (0, m.P)(w, x, {
                shouldWrap: v,
                fontOpacity: b.includes(i.fontId) ? S : 1,
            }),
            j = O(w);
        return (0, r.jsxs)("div", {
            className: s()(E.kL, T, y, {
                [E.rD]: a !== h.G.PLAIN,
                [E.CS]: a === h.G.ANIMATED && !C,
                [E.HW]: A,
                [E.$E]: l,
            }),
            style: L,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": P,
                    className: s()(E.WH, null == j ? void 0 : j.effectClassName, {
                        [E._W]: I,
                    }),
                    children: D,
                }),
                (null == j ? void 0 : j.glowClassName) != null &&
                    (0, r.jsx)("span", {
                        className: s()(E.l1, E.WH, j.glowClassName),
                        "aria-hidden": !0,
                        children: P,
                    }),
            ],
        });
    });

function O(e) {
    switch (e) {
        case o.z.GRADIENT:
        case o.z.GLOW:
            return {
                effectClassName: E.D7,
            };
        case o.z.NEON:
            return {
                effectClassName: E.lw,
                glowClassName: E._4,
            };
        case o.z.TOON:
            return {
                effectClassName: E.lQ,
            };
        case o.z.POP:
            return {
                effectClassName: E.uY,
            };
        case o.z.SOLID:
        default:
            return {
                effectClassName: E.QJ,
            };
    }
}
