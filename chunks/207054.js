n.d(t, {
    A: () => u,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(627968),
    i = n(64700),
    a = n(854284),
    s = n(676279),
    o = n(728458),
    l = n(216160),
    c = n(446770);
let u = (e) => {
    var t, n, u, d, f, p;
    let {
            layerConfig: _,
            animationType: h,
            ticking: m,
            time: g,
            hasPlayedThrough: E,
            setHasPlayedThrough: b,
            maxLoops: y,
            loopEnd: O,
            bannerAdjustment: A,
            imageData: v,
        } = e,
        S = !0,
        I = 0,
        T = (0, s.gm)() && null != _.loopDelay && _.loopDelay > 0 && (null == v ? void 0 : v.src) != null,
        [C, N] = i.useState("reset"),
        R = i.useRef(null != (t = null == v ? void 0 : v.src) ? t : _.src),
        [w, P] = i.useState(null != (n = null == v ? void 0 : v.src) ? n : _.src);
    i.useEffect(() => {
        if (!T || "layer" === C) return;
        let e = new AbortController();
        return (
            (async () => {
                try {
                    let t = R.current,
                        n = await fetch(t, {
                            signal: e.signal,
                        }),
                        r = await n.blob();
                    if (e.signal.aborted) return;
                    t !== (null == v ? void 0 : v.src) && URL.revokeObjectURL(t),
                        (R.current = URL.createObjectURL(r)),
                        P(() => R.current);
                } catch (e) {
                    if ("AbortError" === e.name) return null;
                    o.A.captureException(e);
                }
            })(),
            () => {
                e.abort();
            }
        );
    }, [C, T, P, null == v ? void 0 : v.src]),
        i.useEffect(
            () => () => {
                R.current !== (null == v ? void 0 : v.src) && URL.revokeObjectURL(R.current);
            },
            [],
        );
    let D = (e) => {
        (0, s.gm)() && e !== C && N(e);
    };
    if (
        (m || (S = !1),
        g < _.start && (S = !1),
        !_.loop && g > _.duration + _.start && (S = !1),
        h === a.l.ANIMATION_TYPE_PERSISTENT && !E && null != y && g >= O && b(!0),
        _.loop && void 0 !== _.loopDelay && _.loopDelay > 0)
    ) {
        let e = _.duration + _.loopDelay;
        (I = Math.floor((g - _.start) / e)),
            g - _.start - I * e > _.duration &&
                (h === a.l.ANIMATION_TYPE_INTERMITTENT && !E && null != y && I >= y && b(!0), (S = !1));
    }
    return S
        ? (D("layer"),
          (0, r.jsx)("img", {
              src: w,
              className: c.QZ,
              style: {
                  top: (null != (u = null == (f = _.position) ? void 0 : f.y) ? u : 0) - A,
                  left: null != (d = null == (p = _.position) ? void 0 : p.x) ? d : 0,
              },
              alt: "",
              "aria-hidden": !0,
          }))
        : (D("reset"),
          (0, r.jsx)("img", {
              src: l.Ut,
              alt: "",
              "aria-hidden": !0,
          }));
};
