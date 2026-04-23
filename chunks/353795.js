"use strict";
n.d(t, { v: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(941861),
    l = n(844222),
    d = n(604121),
    _ = n(460890),
    u = n(978495),
    c = n(818348),
    E = n(888061);
function h(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { className: E.image, src: t, alt: "", draggable: !1 });
}
function m(e) {
    let { lottie: t, props: n } = e,
        { reducedMotion: s } = r.useContext(l.C);
    return (0, i.jsx)(d.a, { className: E.lottie, importData: t, autoplay: !0, shouldAnimate: !s.enabled, ...n });
}
function f(e) {
    let { rive: t, props: n } = e;
    return (0, i.jsx)(t, {
        className: E.rive,
        withReducedMotion: "short-loop",
        autoplay: !0,
        fit: "contain",
        alignment: "center",
        ...n,
    });
}
function g(e) {
    let { ref: t, src: n, fallbackImageSrc: s, loop: a, loopAt: o = 0, playbackRate: d, isWindowFocused: _ } = e,
        { reducedMotion: u } = r.useContext(l.C),
        m = r.useRef(null);
    return (r.useImperativeHandle(t, () => m.current),
    r.useEffect(() => {
        let e = m.current;
        if (null != e)
            return (
                null != d && (e.playbackRate = d),
                null != a && (e.loop = 0 === o && a),
                e.addEventListener("ended", t),
                () => {
                    e.removeEventListener("ended", t);
                }
            );
        function t() {
            null != e && !0 === a && 0 !== o && ((e.currentTime = o), e.play());
        }
    }, [a, o, d]),
    r.useEffect(() => {
        null != m.current && (!u.enabled && _ ? m.current?.play().catch(c.tE) : m.current?.pause());
    }, [_, u.enabled]),
    u.enabled && null != s)
        ? (0, i.jsx)(h, { type: "image", src: s })
        : (0, i.jsx)("video", {
              className: E.video,
              ref: m,
              src: n,
              autoPlay: !u.enabled && _,
              muted: !0,
              playsInline: !0,
              controls: !1,
              preload: "metadata",
          });
}
function p(e) {
    let { aspectRatio: t = "16/9", ...n } = e,
        s = (0, _.G9)(),
        l = (0, o.R)(),
        d = s.isWindowFocused?.() ?? l;
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: a()(E.container, E[`aspect-ratio-${t}`]),
              children: (function () {
                  if ((0, u.wu)(n)) return (0, i.jsx)(h, { ...n });
                  if ((0, u.al)(n)) return (0, i.jsx)(m, { ...n });
                  if ((0, u.$P)(n)) return (0, i.jsx)(f, { ...n });
                  if ((0, u.cZ)(n)) return (0, i.jsx)(g, { ...n, isWindowFocused: d });
                  if ((0, u.Kh)(n))
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
