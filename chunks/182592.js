"use strict";
n.d(t, { A: () => T, p: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(854284),
    l = n(311907),
    u = n(775602),
    c = n(940622),
    d = n(218394);
n(216160);
var _ = n(675100),
    f = n(619718),
    p = n(262737),
    h = n(142888),
    m = n(207054),
    g = n(517286),
    E = n(446770);
let A = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: a = !1,
                isHovering: l = !1,
                useOpacityOnHover: u = !0,
                autoPlay: c = !0,
                restartMethod: d,
                profileEffectConfig: p,
                noBorderRadius: g = !1,
                delayIntro: A = !0,
                layerData: I,
            } = e,
            T = i.useRef(null),
            [y, S] = i.useState([]),
            [v, C] = i.useState(0),
            [b, N] = i.useState(0),
            { accessibilityLabel: R } = p,
            O = A ? 500 : 0.1,
            [D, L] = i.useState(-O),
            {
                stop: w,
                reset: x,
                ticking: P,
            } = (0, f.A)((e) => {
                L((t) => t + e);
            }),
            M = i.useRef(O);
        i.useEffect(() => {
            M.current = O;
        }),
            i.useEffect(() => {
                L(-M.current), S((0, h.uN)(p.effects));
            }, [p]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                y.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    C(t),
                    N(e);
            }, [N, y]);
        let [k, U] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === c || l || (w(), L(0)),
                    !l && k && P.current && (w(), L(0)),
                    a &&
                        l &&
                        !P.current &&
                        (x(),
                        p.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? L(d === _.H.FromStart ? 0 : v) : L(0));
            }, [l, k, v, a, w, x, P, p.animationType, c, d]),
            (0, r.jsx)("div", {
                ref: T,
                className: s()(E.yC, { [E.yo]: l && u }),
                "aria-label": R,
                role: "img",
                children: (0, r.jsx)("div", {
                    className: g ? E.qb : E.vW,
                    children: y.map((e, i) => {
                        if (
                            !P.current &&
                            p.animationType === o.l.ANIMATION_TYPE_PERSISTENT &&
                            null != p.staticFrameSrc &&
                            0 === i &&
                            !0 === c
                        ) {
                            let { staticFrameSrc: n } = p;
                            return (0, r.jsx)(
                                "img",
                                {
                                    className: E.QZ,
                                    style: { top: e.position?.y ?? 0 - t, left: e.position?.x ?? 0 },
                                    src: n,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + i,
                            );
                        }
                        return (0, r.jsx)(
                            m.A,
                            {
                                layerConfig: e,
                                animationType: p.animationType,
                                ticking: P.current,
                                time: D,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: U,
                                maxLoops: n,
                                loopEnd: b,
                                bannerAdjustment: t,
                                imageData: I?.[e.src],
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
                config: t,
                useThumbnail: n,
                bannerAdjustment: i = 0,
                noBorderRadius: a,
                isHovering: o = !1,
                useOpacityOnHover: l = !0,
            } = e,
            { reducedMotionSrc: u, thumbnailPreviewSrc: c, accessibilityLabel: d } = t;
        return (0, r.jsx)("div", {
            className: s()(E.yC, { [E.yo]: o && l }),
            "aria-label": d,
            role: "img",
            children: (0, r.jsx)("div", {
                className: a ? E.qb : E.vW,
                children: (0, r.jsx)("img", {
                    src: n && !o ? c : u,
                    className: E.QZ,
                    style: { top: 0 - i },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    T = (e) => {
        let t = (0, d.j)(),
            n = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            i = (0, p.V)(e.skuId),
            a = (0, c.C)(i?.config),
            s = (0, h.ud)(i?.config),
            _ = a ?? s,
            { autoPlay: f = !0, isHovering: m } = e,
            E = !!(
                (!t && e.shopPreview) ||
                (!t && i?.config.animationType === o.l.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === f && !1 === m)
            ),
            { loaded: T, layerData: y } = (0, g.A)(i, !1 === E);
        return null != i &&
            null != _ &&
            (t || e.shopPreview || i.config.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT)
            ? E
                ? (0, r.jsx)(I, {
                      useThumbnail: e.useThumbnail,
                      config: _,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : T
                  ? (0, r.jsx)(A, { profileEffectConfig: _, layerData: y, ...e })
                  : null
            : null;
    };
