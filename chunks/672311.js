"use strict";
n.d(t, { A: () => c }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(854284),
    a = n(676279),
    o = n(728458),
    l = n(881106),
    u = n(839827);
let c = (e) => {
    let {
            layerConfig: t,
            animationType: n,
            ticking: c,
            time: d,
            hasPlayedThrough: _,
            setHasPlayedThrough: f,
            maxLoops: p,
            loopEnd: h,
            bannerAdjustment: E,
            imageData: m,
        } = e,
        g = !0,
        A = 0,
        I = (0, a.gm)() && null != t.loopDelay && t.loopDelay > 0 && m?.src != null,
        [T, S] = i.useState("reset"),
        y = i.useRef(m?.src ?? t.src),
        [N, v] = i.useState(m?.src ?? t.src);
    i.useEffect(() => {
        if (!I || "layer" === T) return;
        let e = new AbortController();
        return (
            (async () => {
                try {
                    let t = y.current,
                        n = await fetch(t, { signal: e.signal }),
                        r = await n.blob();
                    if (e.signal.aborted) return;
                    t !== m?.src && URL.revokeObjectURL(t), (y.current = URL.createObjectURL(r)), v(() => y.current);
                } catch (e) {
                    if ("AbortError" === e.name) return null;
                    o.A.captureException(e);
                }
            })(),
            () => {
                e.abort();
            }
        );
    }, [T, I, v, m?.src]),
        i.useEffect(
            () => () => {
                y.current !== m?.src && URL.revokeObjectURL(y.current);
            },
            [],
        );
    let C = (e) => {
        (0, a.gm)() && e !== T && S(e);
    };
    if (
        (c || (g = !1),
        d < t.start && (g = !1),
        !t.loop && d > t.duration + t.start && (g = !1),
        n === s.l.ANIMATION_TYPE_PERSISTENT && !_ && null != p && d >= h && f(!0),
        t.loop && void 0 !== t.loopDelay && t.loopDelay > 0)
    ) {
        let e = t.duration + t.loopDelay;
        (A = Math.floor((d - t.start) / e)),
            d - t.start - A * e > t.duration &&
                (n === s.l.ANIMATION_TYPE_INTERMITTENT && !_ && null != p && A >= p && f(!0), (g = !1));
    }
    return g
        ? (C("layer"),
          (0, r.jsx)("img", {
              src: N,
              className: u.QZ,
              style: { top: (t.position?.y ?? 0) - E, left: t.position?.x ?? 0 },
              alt: "",
              "aria-hidden": !0,
          }))
        : (C("reset"), (0, r.jsx)("img", { src: l.Ut, alt: "", "aria-hidden": !0 }));
};
