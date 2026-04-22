"use strict";
n.d(t, { v: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(941861),
    l = n(844222),
    u = n(604121),
    d = n(460890),
    c = n(849889),
    _ = n(978495),
    f = n(818348),
    E = n(888061);
function h(e) {
    let { src: t } = e;
    return (0, r.jsx)("img", { className: E.image, src: t, alt: "", draggable: !1 });
}
function p(e) {
    let { lottie: t, props: n } = e,
        { reducedMotion: s } = i.useContext(l.C);
    return (0, r.jsx)(u.a, { className: E.lottie, importData: t, autoplay: !0, shouldAnimate: !s.enabled, ...n });
}
function m(e) {
    let { rive: t, props: n } = e;
    return (0, r.jsx)(t, {
        className: E.rive,
        withReducedMotion: "short-loop",
        autoplay: !0,
        fit: "contain",
        alignment: "center",
        ...n,
    });
}
function g(e) {
    let { ref: t, src: n, fallbackImageSrc: s, loop: a, loopAt: o = 0, playbackRate: u, isWindowFocused: d } = e,
        { reducedMotion: c } = i.useContext(l.C),
        _ = i.useRef(null);
    return (i.useImperativeHandle(t, () => _.current),
    i.useEffect(() => {
        let e = _.current;
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
    i.useEffect(() => {
        null != _.current && (!c.enabled && d ? _.current?.play().catch(f.tE) : _.current?.pause());
    }, [d, c.enabled]),
    c.enabled && null != s)
        ? (0, r.jsx)(h, { type: "image", src: s })
        : (0, r.jsx)("video", {
              className: E.video,
              ref: _,
              src: n,
              autoPlay: !c.enabled && d,
              muted: !0,
              playsInline: !0,
              controls: !1,
              preload: "metadata",
          });
}
function A(e) {
    let { aspectRatio: t = "16/9", ...n } = e,
        i = (0, d.G9)(),
        s = (0, o.R)(),
        l = i.isWindowFocused?.() ?? s;
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: a()(E.container, E[`aspect-ratio-${t}`]),
              children: (function () {
                  if ((0, _.wu)(n)) return (0, r.jsx)(h, { ...n });
                  if ((0, _.al)(n)) return (0, r.jsx)(p, { ...n });
                  if ((0, _.$P)(n)) return (0, r.jsx)(m, { ...n });
                  if ((0, _.cZ)(n)) return (0, r.jsx)(g, { ...n, isWindowFocused: l });
                  if ((0, _.Kh)(n))
                      return null == i.dynamicGraphicComponents
                          ? (console.warn(
                                "Dynamic graphic used but no dynamicGraphicComponents provided in ManaContext",
                            ),
                            null)
                          : (0, c.o)({
                                component: n.component,
                                props: n.props,
                                componentMap: i.dynamicGraphicComponents,
                            });
                  return null;
              })(),
          });
}
