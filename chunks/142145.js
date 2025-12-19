n.d(t, { Z: () => u }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(54381),
    i = n(473749),
    a = n(480210),
    o = n(526167),
    s = n(960048),
    l = n(119837),
    c = n(664545);
let u = (e) => {
    var t, n, u, d, f, p;
    let {
            layerConfig: _,
            animationType: m,
            ticking: h,
            time: g,
            hasPlayedThrough: E,
            setHasPlayedThrough: b,
            maxLoops: y,
            loopEnd: O,
            bannerAdjustment: v,
            imageData: S,
        } = e,
        I = !0,
        T = 0,
        C = (0, o.vU)() && null != _.loopDelay && _.loopDelay > 0 && (null == S ? void 0 : S.src) != null,
        [A, N] = i.useState("reset"),
        P = i.useRef(null != (u = null == S ? void 0 : S.src) ? u : _.src),
        [R, w] = i.useState(null != (d = null == S ? void 0 : S.src) ? d : _.src);
    i.useEffect(() => {
        if (!C || "layer" === A) return;
        let e = new AbortController();
        return (
            (async () => {
                try {
                    let t = P.current,
                        n = await fetch(t, { signal: e.signal }),
                        r = await n.blob();
                    if (e.signal.aborted) return;
                    t !== (null == S ? void 0 : S.src) && URL.revokeObjectURL(t),
                        (P.current = URL.createObjectURL(r)),
                        w(() => P.current);
                } catch (e) {
                    if ("AbortError" === e.name) return null;
                    s.Z.captureException(e);
                }
            })(),
            () => {
                e.abort();
            }
        );
    }, [A, C, w, null == S ? void 0 : S.src]),
        i.useEffect(
            () => () => {
                P.current !== (null == S ? void 0 : S.src) && URL.revokeObjectURL(P.current);
            },
            [],
        );
    let D = (e) => {
        (0, o.vU)() && e !== A && N(e);
    };
    if (
        (h || (I = !1),
        g < _.start && (I = !1),
        !_.loop && g > _.duration + _.start && (I = !1),
        m === a.y.ANIMATION_TYPE_PERSISTENT && !E && null != y && g >= O && b(!0),
        _.loop && void 0 !== _.loopDelay && _.loopDelay > 0)
    ) {
        let e = _.duration + _.loopDelay;
        (T = Math.floor((g - _.start) / e)),
            g - _.start - T * e > _.duration &&
                (m === a.y.ANIMATION_TYPE_INTERMITTENT && !E && null != y && T >= y && b(!0), (I = !1));
    }
    return I
        ? (D("layer"),
          (0, r.jsx)("img", {
              src: R,
              className: c.effect,
              style: {
                  top: (null != (f = null == (t = _.position) ? void 0 : t.y) ? f : 0) - v,
                  left: null != (p = null == (n = _.position) ? void 0 : n.x) ? p : 0,
              },
              alt: "",
              "aria-hidden": !0,
          }))
        : (D("reset"),
          (0, r.jsx)("img", {
              src: l.td,
              alt: "",
              "aria-hidden": !0,
          }));
};
