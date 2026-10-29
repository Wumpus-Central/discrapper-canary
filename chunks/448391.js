a.d(s, { X: () => H });
var l = a(477900),
    t = a(582128),
    i = a(503698),
    n = a.n(i),
    r = a(17928),
    c = a(462887),
    d = a(778712),
    u = a(736653),
    o = a(775602),
    m = a(607470),
    h = a(676279),
    p = a(723702);
let f = (0, a(945810).mj)({
    name: "2026-10-animated-shop-bundle-previews",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = a(442759),
    g = a(344346),
    x = a(139136),
    j = a(929283),
    A = a(66364),
    b = a(180171),
    y = a(989099);
async function N(e) {
    try {
        await e.play();
    } catch {}
}
function w(e) {
    let { src: s, poster: a, imageSrc: i, className: n, alt: r, isHighlighted: c } = e,
        d = f.useConfig({ location: "BundlePreview" }).enabled,
        u = t.useRef(null),
        o = t.useRef(!1);
    return (t.useEffect(() => {
        let e = u.current;
        null != e && (c ? ((o.current = !0), N(e)) : o.current && ((o.current = !1), e.pause(), e.load()));
    }, [c, d]),
    d)
        ? (0, l.jsx)(m.A, {
              ref: u,
              src: s,
              poster: a,
              className: n,
              alt: r,
              preload: "none",
              loop: !0,
              muted: !0,
              playsInline: !0,
              controls: !1,
              tabIndex: -1,
          })
        : (0, l.jsx)("img", { className: n, src: i, alt: r });
}
let H = t.memo(function (e) {
    let { product: s, isHighlighted: a, user: t, forCollectedModal: i, staticPreviewClassName: m } = e,
        { firstProfileEffect: f, firstAvatarDecoration: N, firstNameplate: H } = (0, v.f5)(s),
        S = (0, r.bG)([o.Ay], () => o.Ay.useReducedMotion),
        k = (0, u.Ay)(),
        I = (0, c.q)(k),
        E = null != H && null != N && null != f,
        P = E ? d._3.SIZE_72 : d._3.SIZE_80,
        _ = s.previewAssets?.fgStatic,
        C = s.previewAssets?.fgVideo,
        M = null != C && !S && !(0, h.nr)() && !(0, p.isLinux)();
    if (null != _) {
        let e = n()(A.VH, m, { [A.eO]: a }),
            t = s.previewAssets?.fgAnimated,
            i = a && !S && null != t ? t : _;
        return (0, l.jsx)("div", {
            className: A.EJ,
            children: M
                ? (0, l.jsx)(w, { src: C, poster: _, imageSrc: i, className: e, alt: s.name, isHighlighted: a })
                : (0, l.jsx)("img", { className: e, src: i, alt: s.name }),
        });
    }
    return (0, l.jsxs)("div", {
        className: n()(A.kL, { [A.ib]: !E, [A.c$]: E }),
        children: [
            null != f &&
                (0, l.jsx)("div", {
                    className: A.NM,
                    children: (0, l.jsx)(x.A, {
                        isHighlighted: a,
                        skuId: f.skuId,
                        removeSetHeight: !0,
                        delayProfileEffectIntro: i,
                        withScaleAnimation: i,
                    }),
                }),
            E &&
                (0, l.jsx)("div", {
                    className: A.M4,
                    children: (0, l.jsx)(g.A, {
                        user: t,
                        nameplate: H,
                        isHighlighted: a,
                        showPlaceholderUser: !a,
                        pendingAvatarDecoration: N,
                        hideDecorators: !0,
                    }),
                }),
            null != N &&
                (0, l.jsx)("div", {
                    className: A._P,
                    children: (0, l.jsx)(j.i, {
                        item: N,
                        user: t,
                        avatarSize: P,
                        isHighlighted: a,
                        avatarPlaceholderSrc: I ? y : b,
                        className: A.my,
                    }),
                }),
        ],
    });
});
