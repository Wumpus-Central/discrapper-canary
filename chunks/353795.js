"use strict";
n.d(t, { v: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(941861),
    o = n(844222),
    d = n(604121),
    c = n(460890),
    u = n(978495),
    _ = n(818348),
    E = n(234978);
function A(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { className: E.image, src: t, alt: "", draggable: !1 });
}
function h(e) {
    let { lottie: t, props: n } = e,
        { reducedMotion: a } = r.useContext(o.C);
    return (0, i.jsx)(d.a, { className: E.lottie, importData: t, autoplay: !0, shouldAnimate: !a.enabled, ...n });
}
function I(e) {
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
function f(e) {
    let { ref: t, src: n, fallbackImageSrc: a, loop: s, loopAt: l = 0, playbackRate: d, isWindowFocused: c } = e,
        { reducedMotion: u } = r.useContext(o.C),
        h = r.useRef(null);
    return (r.useImperativeHandle(t, () => h.current),
    r.useEffect(() => {
        let e = h.current;
        if (null != e)
            return (
                null != d && (e.playbackRate = d),
                null != s && (e.loop = 0 === l && s),
                e.addEventListener("ended", t),
                () => {
                    e.removeEventListener("ended", t);
                }
            );
        function t() {
            null != e && !0 === s && 0 !== l && ((e.currentTime = l), e.play());
        }
    }, [s, l, d]),
    r.useEffect(() => {
        null != h.current && (!u.enabled && c ? h.current?.play().catch(_.tE) : h.current?.pause());
    }, [c, u.enabled]),
    u.enabled && null != a)
        ? (0, i.jsx)(A, { type: "image", src: a })
        : (0, i.jsx)("video", {
              className: E.video,
              ref: h,
              src: n,
              autoPlay: !u.enabled && c,
              muted: !0,
              playsInline: !0,
              controls: !1,
              preload: "metadata",
          });
}
function p(e) {
    let { aspectRatio: t = "16/9", ...n } = e,
        a = (0, c.G9)(),
        o = (0, l.R)(),
        d = a.isWindowFocused?.() ?? o;
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: s()(E.container, E[`aspect-ratio-${t}`]),
              children: (function () {
                  if ((0, u.wu)(n)) return (0, i.jsx)(A, { ...n });
                  if ((0, u.al)(n)) return (0, i.jsx)(h, { ...n });
                  if ((0, u.$P)(n)) return (0, i.jsx)(I, { ...n });
                  if ((0, u.cZ)(n)) return (0, i.jsx)(f, { ...n, isWindowFocused: d });
                  if ((0, u.Kh)(n))
                      return null == a.dynamicGraphicComponents
                          ? (console.warn(
                                "Dynamic graphic used but no dynamicGraphicComponents provided in ManaContext",
                            ),
                            null)
                          : (function (e) {
                                let { component: t, props: n, componentMap: a } = e,
                                    s = a[t];
                                return null == s
                                    ? (console.warn("No component found for dynamic graphic:", t), null)
                                    : (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(s, { ...n }) });
                            })({ component: n.component, props: n.props, componentMap: a.dynamicGraphicComponents });
                  return null;
              })(),
          });
}
