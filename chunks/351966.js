"use strict";
n.d(t, { A: () => T, p: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(854284),
    l = n(311907),
    u = n(775602),
    c = n(218394),
    d = n(203632),
    _ = n(219220),
    f = n(940622);
n(881106);
var p = n(90368),
    h = n(942426),
    m = n(679606),
    E = n(672311),
    g = n(182787);
let A = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: s = !1,
                isHovering: l = !1,
                useOpacityOnHover: u = !0,
                autoPlay: c = !0,
                restartMethod: _,
                profileEffect: f,
                delayIntro: h = !0,
                layerData: A,
            } = e,
            I = i.useRef(null),
            [T, S] = i.useState([]),
            [y, v] = i.useState(0),
            [N, C] = i.useState(0),
            { accessibilityLabel: R } = f,
            O = h ? 500 : 0.1,
            [b, D] = i.useState(-O),
            {
                stop: L,
                reset: w,
                ticking: M,
            } = (0, p.A)((e) => {
                D((t) => t + e);
            }),
            x = i.useRef(O);
        i.useEffect(() => {
            x.current = O;
        }),
            i.useEffect(() => {
                D(-x.current), S((0, m.u)(f.effects));
            }, [f]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                T.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    v(t),
                    C(e);
            }, [C, T]);
        let [P, k] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === c || l || (L(), D(0)),
                    !l && P && M.current && (L(), D(0)),
                    s &&
                        l &&
                        !M.current &&
                        (w(),
                        f.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? D(_ === d.HL.FromStart ? 0 : y) : D(0));
            }, [l, P, y, s, L, w, M, f.animationType, c, _]),
            (0, r.jsx)("div", {
                ref: I,
                className: a()(g.yC, { [g.yo]: l && u }),
                "aria-label": R,
                role: "img",
                children: (0, r.jsx)("div", {
                    className: g.vW,
                    children: T.map((e, i) => {
                        if (
                            !M.current &&
                            f.animationType === o.l.ANIMATION_TYPE_PERSISTENT &&
                            null != f.staticFrameSrc &&
                            0 === i &&
                            !0 === c
                        ) {
                            let { staticFrameSrc: n } = f;
                            return (0, r.jsx)(
                                "img",
                                {
                                    className: g.QZ,
                                    style: { top: e.position?.y ?? 0 - t, left: e.position?.x ?? 0 },
                                    src: n,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + i,
                            );
                        }
                        return (0, r.jsx)(
                            E.A,
                            {
                                layerConfig: e,
                                animationType: f.animationType,
                                ticking: M.current,
                                time: b,
                                hasPlayedThrough: P,
                                setHasPlayedThrough: k,
                                maxLoops: n,
                                loopEnd: N,
                                bannerAdjustment: t,
                                imageData: A?.[e.src],
                            },
                            e.src + i,
                        );
                    }),
                }),
            })
        );
    },
    I = (e) => {
        let {
                profileEffect: t,
                useThumbnail: n,
                bannerAdjustment: i = 0,
                isHovering: s = !1,
                useOpacityOnHover: o = !0,
            } = e,
            { reducedMotionSrc: l, thumbnailPreviewSrc: u, accessibilityLabel: c } = t;
        return (0, r.jsx)("div", {
            className: a()(g.yC, { [g.yo]: s && o }),
            "aria-label": c,
            role: "img",
            children: (0, r.jsx)("div", {
                className: g.vW,
                children: (0, r.jsx)("img", {
                    src: n && !s ? u : l,
                    className: g.QZ,
                    style: { top: 0 - i },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    T = (e) => {
        let t = (0, c.j)(),
            n = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            i = (0, h.A)(e.skuId),
            s = (0, f.C)(i),
            a = (0, m.o)(i),
            d = s ?? a,
            { autoPlay: p = !0, isHovering: E } = e,
            g = !!(
                (!t && e.shopPreview) ||
                (!t && i?.animationType === o.l.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === p && !1 === E)
            ),
            { loaded: T, layerData: S } = (0, _.A)({ skuId: i?.skuId, layers: i?.effects, playing: !1 === g });
        return null != i && null != d && (t || e.shopPreview || i.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT)
            ? g
                ? (0, r.jsx)(I, {
                      useThumbnail: e.useThumbnail,
                      profileEffect: d,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : T
                  ? (0, r.jsx)(A, { profileEffect: d, layerData: S, ...e })
                  : null
            : null;
    };
