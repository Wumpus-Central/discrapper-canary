t.d(s, { x: () => d });
var a = t(477900),
    c = t(582128),
    n = t(17928),
    o = t(775602),
    r = t(607470);
function d(e) {
    let { className: s, animationState: t = "on", staticAsset: d, webmAsset: u, assetAltText: i } = e,
        l = (0, n.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [p, f] = (0, c.useState)(!1),
        m = (0, c.useRef)(null),
        h = "on" === t || ("on_hover" === t && p);
    return (
        (0, c.useEffect)(() => {
            null !== m.current && (h ? m.current.play() : ((m.current.currentTime = 0), m.current.pause()));
        }, [h]),
        (0, a.jsx)("div", {
            onMouseEnter: "on_hover" === t ? () => f(!0) : void 0,
            onMouseLeave: "on_hover" === t ? () => f(!1) : void 0,
            children: l
                ? (0, a.jsx)("img", { src: d, className: s, alt: i })
                : (0, a.jsxs)(r.A, {
                      className: s,
                      autoPlay: !0,
                      loop: !0,
                      ref: m,
                      children: [
                          (0, a.jsx)("source", { src: u, type: "video/webm" }),
                          (0, a.jsx)("img", { src: d, className: s, alt: i }),
                      ],
                  }),
        })
    );
}
