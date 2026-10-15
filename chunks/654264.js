l.d(t, { V: () => B, j: () => H });
var n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    a = l(199510),
    o = l.n(a),
    u = l(575593),
    c = l(17928),
    d = l(939249),
    m = l(531142),
    g = l(559106),
    h = l(765671),
    x = l(793574),
    f = l(713517),
    E = l(287809),
    p = l(174459),
    _ = l(440938),
    b = l(590180),
    j = l(161918);
let v = (0, l(945810).mj)({
    name: "2026-10-collectibles-interactive-jumble-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = l(395856),
    S = l(682301),
    y = l(536572),
    I = l(561769),
    N = l(929283),
    A = l(758836),
    R = l(652215),
    k = l(171934);
let T = [],
    L = [
        "1212569433839636530",
        "1144308439720394944",
        "1228251144065777765",
        "1343751620965564426",
        "1157407831348228141",
        "1197344326133502032",
        "1232071712695386162",
        "1144046002110738634",
        "1271174324375519273",
        "1237653964582031400",
        "1217625794382401577",
        "1462116613871636542",
        "1458472704469499965",
        "1447654091072344195",
        "1432550258839392376",
        "1409898407849365565",
        "1404558257065824347",
    ];
function O(e, t, l) {
    let n = l ? e.transitionOffsetLeft : 0,
        s = l ? -window.innerHeight - 384 - e.verticalOffset : e.verticalOffset;
    return {
        bottom: 0,
        left: t + e.horizontalJitter,
        transform: `translate(${n}px, ${s}px) rotate(${e.rotation}deg)`,
        transitionDelay: e.transitionDelay,
        transitionDuration: e.transitionDuration,
    };
}
function M(e) {
    let { config: t, baseLeft: l, transitioning: s, item: i } = e;
    return (0, n.jsx)("div", {
        className: k.LY,
        style: O(t, l, s),
        children: (0, n.jsx)(N.i, { item: i, className: k.my }),
    });
}
function D(e) {
    let { config: t, baseLeft: l, transitioning: i, product: r, item: a } = e,
        o = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        u = s.useRef(null),
        { isHoveringOrFocusing: m } = (0, f.A)(u),
        g = (0, j.Mk)()?.tab,
        h = (0, _.uM)(),
        b = s.useCallback(() => {
            p.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: h?.sessionId,
                sku_id: r.skuId,
                page_type: g,
                page_section: h?.pageSection,
                page_category: h?.pageCategory,
                tile_type: "JUMBLE_PRODUCT",
                tile_position: String(h?.tilePosition),
            });
        }, [r.skuId, g, h]),
        v = (0, I.ql)(r, x.A.COLLECTIBLES_SHOP_TRANSITION_JUMBLE_ITEM, b);
    return (0, n.jsx)("div", {
        ref: u,
        className: k.LY,
        style: O(t, l, i),
        children: (0, n.jsx)(d.D, {
            onClick: v,
            "aria-label": (0, y.s7)(r),
            children: (0, n.jsx)(N.i, { item: a, className: k.my, user: o, isHighlighted: m }),
        }),
    });
}
function P(e) {
    let { peaking: t, transitioning: l } = e,
        { ref: i, width: a } = (0, h.Ay)(),
        [c] = s.useState(() =>
            o()(L).map((e) => ({
                skuId: e,
                verticalOffset: -12 + 36 * Math.random(),
                rotation: -24 + 48 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${A.H1 - 200 * Math.random()}ms`,
            })),
        ),
        d = (0, C.$)("shop_transition_jumble"),
        g = v.useConfig({ location: "shop_transition_jumble" }).enabled,
        x = (0, S.hv)(d ? L : T, { needsCategory: !1 }),
        f = s.useMemo(() => {
            if (!d) return c;
            let e = c.filter((e) => {
                let t = x[e.skuId]?.product;
                return t?.items[0] != null && t.type === u.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : c;
        }, [d, c, x]),
        E = s.useMemo(() => {
            if (null == a || a <= 0) return [];
            let e = Math.max(1, Math.floor(a / 130)),
                t = a / e;
            return Array.from({ length: e }, (e, l) => ({ config: f[l % f.length], baseLeft: l * t }));
        }, [a, f]),
        p = s.useMemo(() => ({ standalonePreview: d }), [d]);
    return (0, n.jsx)("div", {
        ref: i,
        className: r()(k.rA, { [k.Kb]: t }),
        children: (0, n.jsx)(I.v3.Provider, {
            value: p,
            children: (0, n.jsx)(m.g.Provider, {
                value: !0 === l || !0 !== t,
                children: E.map((e, t) => {
                    let s,
                        { config: i, baseLeft: r } = e,
                        a = x[i.skuId]?.product ?? b.A.getProduct(i.skuId),
                        o = null != (s = a?.items[0]) && a?.type === u.R.AVATAR_DECORATION ? s : null;
                    if (null == a || null == o) return null;
                    let c = i.skuId + t,
                        d = { config: i, baseLeft: r, transitioning: l, product: a, item: o };
                    return g
                        ? (0, n.jsx)(
                              _.R9,
                              {
                                  newValue: { pageSection: "transition_jumble", tilePosition: t },
                                  children: (0, n.jsx)(D, { ...d }),
                              },
                              c,
                          )
                        : (0, n.jsx)(M, { ...d }, c);
                }),
            }),
        }),
    });
}
function B() {
    return (0, n.jsx)("div", { className: r()(k.I2, k.F$) });
}
function H(e) {
    let { isVisible: t, transitioning: l } = e,
        i = s.useRef(null);
    return (0, n.jsx)(g.xp, {
        containerRef: i,
        children: (0, n.jsx)("div", {
            className: r()(k.I2, k.MU),
            ref: i,
            children: (0, n.jsx)(P, { peaking: t, transitioning: l }),
        }),
    });
}
