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
    d = n(940622);
n(881106);
var _ = n(649802),
    f = n(90368),
    p = n(496867),
    h = n(679606),
    m = n(672311),
    E = n(616200),
    g = n(182787);
let A = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: s = !1,
                isHovering: l = !1,
                useOpacityOnHover: u = !0,
                autoPlay: c = !0,
                restartMethod: d,
                profileEffectConfig: p,
                delayIntro: E = !0,
                layerData: A,
            } = e,
            I = i.useRef(null),
            [T, S] = i.useState([]),
            [y, v] = i.useState(0),
            [N, C] = i.useState(0),
            { accessibilityLabel: R } = p,
            O = E ? 500 : 0.1,
            [b, D] = i.useState(-O),
            {
                stop: L,
                reset: w,
                ticking: M,
            } = (0, f.A)((e) => {
                D((t) => t + e);
            }),
            x = i.useRef(O);
        i.useEffect(() => {
            x.current = O;
        }),
            i.useEffect(() => {
                D(-x.current), S((0, h.u)(p.effects));
            }, [p]),
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
                        p.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? D(d === _.H.FromStart ? 0 : y) : D(0));
            }, [l, P, y, s, L, w, M, p.animationType, c, d]),
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
                            p.animationType === o.l.ANIMATION_TYPE_PERSISTENT &&
                            null != p.staticFrameSrc &&
                            0 === i &&
                            !0 === c
                        ) {
                            let { staticFrameSrc: n } = p;
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
                            m.A,
                            {
                                layerConfig: e,
                                animationType: p.animationType,
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
        let { config: t, useThumbnail: n, bannerAdjustment: i = 0, isHovering: s = !1, useOpacityOnHover: o = !0 } = e,
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
            i = (0, p.V)(e.skuId),
            s = (0, d.C)(i?.config),
            a = (0, h.b)(i?.config),
            _ = s ?? a,
            { autoPlay: f = !0, isHovering: m } = e,
            g = !!(
                (!t && e.shopPreview) ||
                (!t && i?.config.animationType === o.l.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === f && !1 === m)
            ),
            { loaded: T, layerData: S } = (0, E.A)(i, !1 === g);
        return null != i &&
            null != _ &&
            (t || e.shopPreview || i.config.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT)
            ? g
                ? (0, r.jsx)(I, {
                      useThumbnail: e.useThumbnail,
                      config: _,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : T
                  ? (0, r.jsx)(A, { profileEffectConfig: _, layerData: S, ...e })
                  : null
            : null;
    };
