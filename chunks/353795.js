n.d(t, { v: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(664354),
    o = n(941861),
    d = n(844222),
    c = n(604121),
    u = n(460890),
    _ = n(978495),
    E = n(234978);
function A(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { className: E.image, src: t, alt: "", draggable: !1 });
}
function h(e) {
    let { lottie: t, props: n } = e,
        { reducedMotion: a } = r.useContext(d.C);
    return (0, i.jsx)(c.a, { className: E.lottie, importData: t, autoplay: !0, shouldAnimate: !a.enabled, ...n });
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
    let { ref: t, src: n, fallbackImageSrc: a, loop: s, loopAt: o = 0, playbackRate: c, isWindowFocused: u } = e,
        { reducedMotion: _ } = r.useContext(d.C),
        h = r.useRef(null);
    return (r.useImperativeHandle(t, () => h.current),
    r.useEffect(() => {
        let e = h.current;
        if (null != e)
            return (
                null != c && (e.playbackRate = c),
                null != s && (e.loop = 0 === o && s),
                e.addEventListener("ended", t),
                () => {
                    e.removeEventListener("ended", t);
                }
            );
        function t() {
            null != e && !0 === s && 0 !== o && ((e.currentTime = o), e.play());
        }
    }, [s, o, c]),
    r.useEffect(() => {
        null != h.current && (!_.enabled && u ? h.current?.play().catch(l.tE) : h.current?.pause());
    }, [u, _.enabled]),
    _.enabled && null != a)
        ? (0, i.jsx)(A, { type: "image", src: a })
        : (0, i.jsx)("video", {
              className: E.video,
              ref: h,
              src: n,
              autoPlay: !_.enabled && u,
              muted: !0,
              playsInline: !0,
              controls: !1,
              preload: "metadata",
          });
}
function p(e) {
    let { aspectRatio: t = "16/9", ...n } = e,
        a = (0, u.G9)(),
        l = (0, o.R)(),
        d = a.isWindowFocused?.() ?? l;
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: s()(E.container, E[`aspect-ratio-${t}`]),
              children: (function () {
                  if ((0, _.wu)(n)) return (0, i.jsx)(A, { ...n });
                  if ((0, _.al)(n)) return (0, i.jsx)(h, { ...n });
                  if ((0, _.$P)(n)) return (0, i.jsx)(I, { ...n });
                  if ((0, _.cZ)(n)) return (0, i.jsx)(f, { ...n, isWindowFocused: d });
                  if ((0, _.Kh)(n))
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
