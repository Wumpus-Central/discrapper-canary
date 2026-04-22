t.d(r, { A: () => i }), t(323874), t(14289), t(35956);
var n = t(627968),
    a = t(64700),
    u = t(854284),
    l = t(676279),
    s = t(728458),
    c = t(881106),
    o = t(839827);
let i = (e) => {
    let {
            layerConfig: r,
            animationType: t,
            ticking: i,
            time: f,
            hasPlayedThrough: d,
            setHasPlayedThrough: A,
            maxLoops: T,
            loopEnd: m,
            bannerAdjustment: E,
            imageData: I,
        } = e,
        h = !0,
        p = 0,
        N = (0, l.gm)() && null != r.loopDelay && r.loopDelay > 0 && I?.src != null,
        [y, R] = a.useState("reset"),
        b = a.useRef(I?.src ?? r.src),
        [v, g] = a.useState(I?.src ?? r.src);
    a.useEffect(() => {
        if (!N || "layer" === y) return;
        let e = new AbortController();
        return (
            (async () => {
                try {
                    let r = b.current,
                        t = await fetch(r, { signal: e.signal }),
                        n = await t.blob();
                    if (e.signal.aborted) return;
                    r !== I?.src && URL.revokeObjectURL(r), (b.current = URL.createObjectURL(n)), g(() => b.current);
                } catch (e) {
                    if ("AbortError" === e.name) return null;
                    s.A.captureException(e);
                }
            })(),
            () => {
                e.abort();
            }
        );
    }, [y, N, g, I?.src]),
        a.useEffect(
            () => () => {
                b.current !== I?.src && URL.revokeObjectURL(b.current);
            },
            [],
        );
    let S = (e) => {
        (0, l.gm)() && e !== y && R(e);
    };
    if (
        (i || (h = !1),
        f < r.start && (h = !1),
        !r.loop && f > r.duration + r.start && (h = !1),
        t === u.l.ANIMATION_TYPE_PERSISTENT && !d && null != T && f >= m && A(!0),
        r.loop && void 0 !== r.loopDelay && r.loopDelay > 0)
    ) {
        let e = r.duration + r.loopDelay;
        (p = Math.floor((f - r.start) / e)),
            f - r.start - p * e > r.duration &&
                (t === u.l.ANIMATION_TYPE_INTERMITTENT && !d && null != T && p >= T && A(!0), (h = !1));
    }
    return h
        ? (S("layer"),
          (0, n.jsx)("img", {
              src: v,
              className: o.QZ,
              style: { top: (r.position?.y ?? 0) - E, left: r.position?.x ?? 0 },
              alt: "",
              "aria-hidden": !0,
          }))
        : (S("reset"), (0, n.jsx)("img", { src: c.Ut, alt: "", "aria-hidden": !0 }));
};
