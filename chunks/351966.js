t.d(r, { A: () => y, p: () => p });
var n = t(627968),
    a = t(64700),
    u = t(503698),
    l = t.n(u),
    s = t(854284),
    c = t(311907),
    o = t(775602),
    i = t(218394),
    f = t(203632),
    d = t(219220),
    A = t(940622);
t(881106);
var T = t(90368),
    m = t(942426),
    E = t(679606),
    I = t(672311),
    h = t(839827);
let p = (e) => {
        let {
                bannerAdjustment: r = 0,
                maxLoops: t,
                resetOnHover: u = !1,
                isHovering: c = !1,
                useOpacityOnHover: o = !0,
                autoPlay: i = !0,
                restartMethod: d,
                profileEffect: A,
                delayIntro: m = !0,
                layerData: p,
            } = e,
            N = a.useRef(null),
            [y, R] = a.useState([]),
            [b, v] = a.useState(0),
            [g, S] = a.useState(0),
            { accessibilityLabel: P } = A,
            M = m ? 500 : 0.1,
            [_, O] = a.useState(-M),
            {
                stop: j,
                reset: w,
                ticking: k,
            } = (0, T.A)((e) => {
                O((r) => r + e);
            }),
            C = a.useRef(M);
        a.useEffect(() => {
            C.current = M;
        }),
            a.useEffect(() => {
                O(-C.current), R((0, E.u)(A.effects));
            }, [A]),
            a.useEffect(() => {
                let e = 0,
                    r = 1 / 0;
                y.forEach((t) => {
                    let n = t.start + t.duration;
                    n > e && (e = n), t.loop && t.start < r && (r = t.start);
                }),
                    v(r),
                    S(e);
            }, [S, y]);
        let [x, U] = a.useState(!1);
        return (
            a.useEffect(() => {
                !0 === i || c || (j(), O(0)),
                    !c && x && k.current && (j(), O(0)),
                    u &&
                        c &&
                        !k.current &&
                        (w(),
                        A.animationType === s.l.ANIMATION_TYPE_PERSISTENT ? O(d === f.HL.FromStart ? 0 : b) : O(0));
            }, [c, x, b, u, j, w, k, A.animationType, i, d]),
            (0, n.jsx)("div", {
                ref: N,
                className: l()(h.yC, { [h.yo]: c && o }),
                "aria-label": P,
                role: "img",
                children: (0, n.jsx)("div", {
                    className: h.vW,
                    children: y.map((e, a) => {
                        if (
                            !k.current &&
                            A.animationType === s.l.ANIMATION_TYPE_PERSISTENT &&
                            null != A.staticFrameSrc &&
                            0 === a &&
                            !0 === i
                        ) {
                            let { staticFrameSrc: t } = A;
                            return (0, n.jsx)(
                                "img",
                                {
                                    className: h.QZ,
                                    style: { top: e.position?.y ?? 0 - r, left: e.position?.x ?? 0 },
                                    src: t,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + a,
                            );
                        }
                        return (0, n.jsx)(
                            I.A,
                            {
                                layerConfig: e,
                                animationType: A.animationType,
                                ticking: k.current,
                                time: _,
                                hasPlayedThrough: x,
                                setHasPlayedThrough: U,
                                maxLoops: t,
                                loopEnd: g,
                                bannerAdjustment: r,
                                imageData: p?.[e.src],
                            },
                            e.src + a,
                        );
                    }),
                }),
            })
        );
    },
    N = (e) => {
        let {
                profileEffect: r,
                useThumbnail: t,
                bannerAdjustment: a = 0,
                isHovering: u = !1,
                useOpacityOnHover: s = !0,
            } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: o, accessibilityLabel: i } = r;
        return (0, n.jsx)("div", {
            className: l()(h.yC, { [h.yo]: u && s }),
            "aria-label": i,
            role: "img",
            children: (0, n.jsx)("div", {
                className: h.vW,
                children: (0, n.jsx)("img", {
                    src: t && !u ? o : c,
                    className: h.QZ,
                    style: { top: 0 - a },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    y = (e) => {
        let r = (0, i.j)(),
            t = (0, c.bG)([o.A], () => o.A.useReducedMotion),
            a = (0, m.A)(e.skuId),
            u = (0, A.C)(a),
            l = (0, E.o)(a),
            f = u ?? l,
            { autoPlay: T = !0, isHovering: I } = e,
            h = !!(
                (!r && e.shopPreview) ||
                (!r && a?.animationType === s.l.ANIMATION_TYPE_PERSISTENT) ||
                t ||
                (!1 === T && !1 === I)
            ),
            { loaded: y, layerData: R } = (0, d.A)({ skuId: a?.skuId, layers: a?.effects, playing: !1 === h });
        return null != a && null != f && (r || e.shopPreview || a.animationType !== s.l.ANIMATION_TYPE_INTERMITTENT)
            ? h
                ? (0, n.jsx)(N, {
                      useThumbnail: e.useThumbnail,
                      profileEffect: f,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : y
                  ? (0, n.jsx)(p, { profileEffect: f, layerData: R, ...e })
                  : null
            : null;
    };
