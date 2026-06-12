"use strict";
n.d(t, { v: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(941861),
    l = n(844222),
    u = n(604121),
    c = n(460890),
    d = n(978495),
    _ = n(818348),
    h = n(888061);
function f(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { className: h.image, src: t, alt: "", draggable: !1 });
}
function p(e) {
    let { lottie: t, props: n } = e,
        { reducedMotion: s } = r.useContext(l.C);
    return (0, i.jsx)(u.a, { className: h.lottie, importData: t, autoplay: !0, shouldAnimate: !s.enabled, ...n });
}
function E(e) {
    let { rive: t, props: n } = e;
    return (0, i.jsx)(t, {
        className: h.rive,
        withReducedMotion: "short-loop",
        autoplay: !0,
        fit: "contain",
        alignment: "center",
        ...n,
    });
}
function m(e) {
    let { ref: t, src: n, fallbackImageSrc: s, loop: a, loopAt: o = 0, playbackRate: u, isWindowFocused: c } = e,
        { reducedMotion: d } = r.useContext(l.C),
        p = r.useRef(null);
    return (r.useImperativeHandle(t, () => p.current),
    r.useEffect(() => {
        let e = p.current;
        if (null != e)
            return (
                null != u && (e.playbackRate = u),
                null != a && (e.loop = 0 === o && a),
                e.addEventListener("ended", t),
                () => {
                    e.removeEventListener("ended", t);
                }
            );
        function t() {
            null != e && !0 === a && 0 !== o && ((e.currentTime = o), e.play());
        }
    }, [a, o, u]),
    r.useEffect(() => {
        null != p.current && (!d.enabled && c ? p.current?.play().catch(_.tE) : p.current?.pause());
    }, [c, d.enabled]),
    d.enabled && null != s)
        ? (0, i.jsx)(f, { type: "image", src: s })
        : (0, i.jsx)("video", {
              className: h.video,
              ref: p,
              src: n,
              autoPlay: !d.enabled && c,
              muted: !0,
              playsInline: !0,
              controls: !1,
              preload: "metadata",
          });
}
function g(e) {
    let { aspectRatio: t = "16/9", ...n } = e,
        s = (0, c.G9)(),
        l = (0, o.R)(),
        u = s.isWindowFocused?.() ?? l;
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: a()(h.container, h[`aspect-ratio-${t}`]),
              children: (function () {
                  if ((0, d.wu)(n)) return (0, i.jsx)(f, { ...n });
                  if ((0, d.al)(n)) return (0, i.jsx)(p, { ...n });
                  if ((0, d.$P)(n)) return (0, i.jsx)(E, { ...n });
                  if ((0, d.cZ)(n)) return (0, i.jsx)(m, { ...n, isWindowFocused: u });
                  if ((0, d.Kh)(n))
                      return null == s.dynamicGraphicComponents
                          ? (console.warn(
                                "Dynamic graphic used but no dynamicGraphicComponents provided in ManaContext",
                            ),
                            null)
                          : (function (e) {
                                let { component: t, props: n, componentMap: s } = e,
                                    a = s[t];
                                return null == a
                                    ? (console.warn("No component found for dynamic graphic:", t), null)
                                    : (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(a, { ...n }) });
                            })({ component: n.component, props: n.props, componentMap: s.dynamicGraphicComponents });
                  return null;
              })(),
          });
}
