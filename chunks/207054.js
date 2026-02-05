"use strict";
n.d(t, { A: () => c }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    a = n(854284),
    s = n(676279),
    o = n(728458),
    l = n(216160),
    u = n(446770);
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
            bannerAdjustment: m,
            imageData: g,
        } = e,
        E = !0,
        A = 0,
        I = (0, s.gm)() && null != t.loopDelay && t.loopDelay > 0 && g?.src != null,
        [T, y] = i.useState("reset"),
        S = i.useRef(g?.src ?? t.src),
        [v, C] = i.useState(g?.src ?? t.src);
    i.useEffect(() => {
        if (!I || "layer" === T) return;
        let e = new AbortController();
        return (
            (async () => {
                try {
                    let t = S.current,
                        n = await fetch(t, { signal: e.signal }),
                        r = await n.blob();
                    if (e.signal.aborted) return;
                    t !== g?.src && URL.revokeObjectURL(t), (S.current = URL.createObjectURL(r)), C(() => S.current);
                } catch (e) {
                    if ("AbortError" === e.name) return null;
                    o.A.captureException(e);
                }
            })(),
            () => {
                e.abort();
            }
        );
    }, [T, I, C, g?.src]),
        i.useEffect(
            () => () => {
                S.current !== g?.src && URL.revokeObjectURL(S.current);
            },
            [],
        );
    let b = (e) => {
        (0, s.gm)() && e !== T && y(e);
    };
    if (
        (c || (E = !1),
        d < t.start && (E = !1),
        !t.loop && d > t.duration + t.start && (E = !1),
        n === a.l.ANIMATION_TYPE_PERSISTENT && !_ && null != p && d >= h && f(!0),
        t.loop && void 0 !== t.loopDelay && t.loopDelay > 0)
    ) {
        let e = t.duration + t.loopDelay;
        (A = Math.floor((d - t.start) / e)),
            d - t.start - A * e > t.duration &&
                (n === a.l.ANIMATION_TYPE_INTERMITTENT && !_ && null != p && A >= p && f(!0), (E = !1));
    }
    return E
        ? (b("layer"),
          (0, r.jsx)("img", {
              src: v,
              className: u.QZ,
              style: { top: (t.position?.y ?? 0) - m, left: t.position?.x ?? 0 },
              alt: "",
              "aria-hidden": !0,
          }))
        : (b("reset"), (0, r.jsx)("img", { src: l.Ut, alt: "", "aria-hidden": !0 }));
};
