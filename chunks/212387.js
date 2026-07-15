t.d(s, { $: () => U, A: () => B });
var i = t(627968),
    n = t(64700),
    a = t(503698),
    r = t.n(a),
    l = t(890856),
    c = t(140735),
    u = t(707554),
    d = t(17928),
    o = t(97808),
    h = t(587895),
    x = t(713517),
    m = t(575593),
    g = t(38021),
    j = t(844222),
    I = t(583094),
    p = t(661531),
    E = t(775602),
    f = t(139136),
    v = t(665411),
    A = t(474012),
    N = t(929283),
    R = t(245068),
    C = t(761365),
    T = t(366523),
    L = t(403362),
    _ = t(652215),
    k = t(778712),
    b = t(997990);
function S(e) {
    let { sku: s, isFocused: t, user: a, guildId: r } = e,
        l = n.useMemo(() => (0, A.T)(s), [s]);
    if (null == l) return null;
    if ("bundle" === l.type) {
        let e = l.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? b.Nq : b.hT,
            children: (0, i.jsx)(R.X, { product: l, isHighlighted: t, user: a }),
        });
    }
    switch (l.item.type) {
        case m.R.AVATAR_DECORATION:
            return (0, i.jsx)(N.i, { user: a, guildId: r, avatarSize: k._3.SIZE_80, item: l.item, isHighlighted: t });
        case m.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: b.xC,
                children: (0, i.jsx)(f.A, {
                    skuId: l.item.skuId,
                    isHighlighted: t,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case m.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: b.M4,
                children: (0, i.jsx)("div", {
                    className: b.N1,
                    children: (0, i.jsx)(C.A, {
                        user: a,
                        guildId: r,
                        nameplate: l.item,
                        isHighlighted: t,
                        size: "small",
                    }),
                }),
            });
        case m.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: b.pI,
                children: (0, i.jsx)(v.A, { frame: l.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function M(e) {
    let { sku: s, isFocused: t } = e;
    return (0, i.jsx)(T.e, {
        shape: "custom",
        containerClassName: r()(b.JS, t && b.P3),
        backgroundImageClassName: b.m1,
        foregroundImageClassName: b.aF,
        sku: s,
    });
}
function O(e) {
    let { eventTargetRef: s, assetClassName: t, disableHover: a } = e,
        l = (0, d.bG)([E.Ay], () => E.Ay.useReducedMotion),
        { theme: c, saturation: u } = (0, g.wR)(),
        { highContrastModeEnabled: o } = n.useContext(j.C),
        [h, x, m, f] = p.A.colors.TEXT_DEFAULT.resolve({ theme: c, saturation: u, highContrastModeEnabled: o }).rgba();
    return (0, i.jsx)("div", {
        className: b.yv,
        children: (0, i.jsx)(I.u, {
            className: r()(b.MO, t),
            dataBinding: { reducedMotion: a || l, logoColor: { r: h, g: x, b: m, a: f } },
            eventTargetRef: s,
            fit: "contain",
        }),
    });
}
function y(e) {
    let { sku: s, isFocused: t, user: n, guildId: a, eventTargetRef: r, assetClassName: l, disableHover: c } = e;
    switch (s.productLine) {
        case _.EZt.COLLECTIBLES:
            return (0, i.jsx)(S, { sku: s, isFocused: t, user: n, guildId: a });
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(M, { sku: s, isFocused: t });
        case _.EZt.APPLICATION:
        case _.EZt.BOOST:
        case _.EZt.GUILD_ROLE:
            return null;
        case _.EZt.PREMIUM:
            return (0, i.jsx)(O, { eventTargetRef: r, assetClassName: l, disableHover: c });
        case _.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, L.xb)(s.productLine);
    }
}
var F = t(661492),
    P = t(627001),
    Z = t(375708),
    w = t(213494),
    H = t(476324);
function z(e) {
    return { width: e.size, height: e.size };
}
function U(e) {
    let { spec: s, cardStyle: t } = e;
    return (0, i.jsx)("div", {
        className: r()(w.Nr, t),
        style: z(s),
        children: (0, i.jsx)("div", {
            className: w.ho,
            children: (0, i.jsx)(o.eu, { src: H, size: k._3.SIZE_80, "aria-label": Z.intl.string(Z.t.lqaIxI) }),
        }),
    });
}
function B(e) {
    let {
            sku: s,
            user: t,
            guildId: a,
            spec: o,
            children: m,
            cardStyle: g,
            skuPreviewStyle: j,
            skuAssetClassName: I,
            disableHoverOrFocus: p,
            disableRiveHover: E,
            onHoverOrFocusChange: f,
            onClick: v,
            "aria-label": A,
        } = e,
        N = n.useRef(null),
        { isHoveringOrFocusing: R } = (0, x.A)(N),
        C = n.useRef(f),
        T = (0, d.bG)([h.A], () => h.A.getApplication(s.applicationId));
    return (
        n.useEffect(() => {
            C.current = f;
        }, [f]),
        n.useEffect(() => {
            C.current?.(R);
        }, [R]),
        (0, i.jsxs)(l.s, {
            ref: N,
            className: r()(w.Nr, g),
            onClick: v,
            "aria-label": A,
            style: z(o),
            children: [
                (0, i.jsx)(c.A, { children: (0, i.jsx)(u.H, { children: (0, F.TC)(s) }) }),
                (0, i.jsx)("div", {
                    className: r()(w.ev, j),
                    children: (0, i.jsx)(y, {
                        sku: s,
                        isFocused: !p && R,
                        user: t,
                        guildId: a,
                        eventTargetRef: E ? void 0 : N,
                        assetClassName: I,
                        disableHover: E,
                    }),
                }),
                (0, i.jsx)(P.P, { spec: o, application: T }),
                m,
            ],
        })
    );
}
