n.d(t, {
    A: () => v,
    p: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(854284),
    l = n(311907),
    c = n(775602),
    u = n(940622),
    d = n(218394);
n(216160);
var f = n(675100),
    p = n(619718),
    _ = n(262737),
    h = n(142888),
    m = n(207054),
    g = n(517286),
    E = n(446770);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: a = !1,
                isHovering: l = !1,
                useOpacityOnHover: c = !0,
                autoPlay: u = !0,
                restartMethod: d,
                profileEffectConfig: _,
                noBorderRadius: g = !1,
                delayIntro: b = !0,
                layerData: y,
            } = e,
            O = i.useRef(null),
            [A, v] = i.useState([]),
            [S, I] = i.useState(0),
            [T, C] = i.useState(0),
            { accessibilityLabel: N } = _,
            R = b ? 500 : 0.1,
            [w, P] = i.useState(-R),
            {
                stop: D,
                reset: x,
                ticking: L,
            } = (0, p.A)((e) => {
                P((t) => t + e);
            }),
            j = i.useRef(R);
        i.useEffect(() => {
            j.current = R;
        }),
            i.useEffect(() => {
                P(-j.current), v((0, h.u)(_.effects));
            }, [_]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                A.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    I(t),
                    C(e);
            }, [C, A]);
        let [M, k] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === u || l || (D(), P(0)),
                    !l && M && L.current && (D(), P(0)),
                    a &&
                        l &&
                        !L.current &&
                        (x(),
                        _.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? P(d === f.H.FromStart ? 0 : S) : P(0));
            }, [l, M, S, a, D, x, L, _.animationType, u, d]),
            (0, r.jsx)("div", {
                ref: O,
                className: s()(E.yC, { [E.yo]: l && c }),
                "aria-label": N,
                role: "img",
                children: (0, r.jsx)("div", {
                    className: g ? E.qb : E.vW,
                    children: A.map((e, i) => {
                        if (
                            !L.current &&
                            _.animationType === o.l.ANIMATION_TYPE_PERSISTENT &&
                            null != _.staticFrameSrc &&
                            0 === i &&
                            !0 === u
                        ) {
                            var a, s, l, c;
                            let { staticFrameSrc: n } = _;
                            return (0, r.jsx)(
                                "img",
                                {
                                    className: E.QZ,
                                    style: {
                                        top: null != (a = null == (l = e.position) ? void 0 : l.y) ? a : 0 - t,
                                        left: null != (s = null == (c = e.position) ? void 0 : c.x) ? s : 0,
                                    },
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
                                animationType: _.animationType,
                                ticking: L.current,
                                time: w,
                                hasPlayedThrough: M,
                                setHasPlayedThrough: k,
                                maxLoops: n,
                                loopEnd: T,
                                bannerAdjustment: t,
                                imageData: null == y ? void 0 : y[e.src],
                            },
                            e.src + i,
                        );
                    }),
                }),
            })
        );
    },
    A = (e) => {
        let {
                config: t,
                useThumbnail: n,
                bannerAdjustment: i = 0,
                noBorderRadius: a,
                isHovering: o = !1,
                useOpacityOnHover: l = !0,
            } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: u, accessibilityLabel: d } = t;
        return (0, r.jsx)("div", {
            className: s()(E.yC, { [E.yo]: o && l }),
            "aria-label": d,
            role: "img",
            children: (0, r.jsx)("div", {
                className: a ? E.qb : E.vW,
                children: (0, r.jsx)("img", {
                    src: n && !o ? u : c,
                    className: E.QZ,
                    style: { top: 0 - i },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    v = (e) => {
        let t = (0, d.j)(),
            n = (0, l.bG)([c.A], () => c.A.useReducedMotion),
            i = (0, _.V)(e.skuId),
            a = (0, u.C)(null == i ? void 0 : i.config),
            s = (0, h.b)(null == i ? void 0 : i.config),
            f = null != a ? a : s,
            { autoPlay: p = !0, isHovering: m } = e,
            E = !!(
                (!t && e.shopPreview) ||
                (!t && (null == i ? void 0 : i.config.animationType) === o.l.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === p && !1 === m)
            ),
            { loaded: b, layerData: v } = (0, g.A)(i, !1 === E);
        return null != i &&
            null != f &&
            (t || e.shopPreview || i.config.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT)
            ? E
                ? (0, r.jsx)(A, {
                      useThumbnail: e.useThumbnail,
                      config: f,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : b
                  ? (0, r.jsx)(
                        O,
                        y(
                            {
                                profileEffectConfig: f,
                                layerData: v,
                            },
                            e,
                        ),
                    )
                  : null
            : null;
    };
