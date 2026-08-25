t.d(s, { x: () => d });
var a = t(477900),
    c = t(582128),
    n = t(17928),
    r = t(775602),
    o = t(607470);
function d(e) {
    let { className: s, animationState: t = "on", staticAsset: d, webmAsset: u, assetAltText: i } = e,
        l = (0, n.bG)([r.Ay], () => r.Ay.useReducedMotion),
        [p, f] = (0, c.useState)(!1),
        E = (0, c.useRef)(null),
        b = "on" === t || ("on_hover" === t && p);
    return (
        (0, c.useEffect)(() => {
            null !== E.current && (b ? E.current.play() : ((E.current.currentTime = 0), E.current.pause()));
        }, [b]),
        (0, a.jsx)("div", {
            onMouseEnter: "on_hover" === t ? () => f(!0) : void 0,
            onMouseLeave: "on_hover" === t ? () => f(!1) : void 0,
            children: l
                ? (0, a.jsx)("img", { src: d, className: s, alt: i })
                : (0, a.jsxs)(o.A, {
                      className: s,
                      autoPlay: !0,
                      loop: !0,
                      ref: E,
                      children: [
                          (0, a.jsx)("source", { src: u, type: "video/webm" }),
                          (0, a.jsx)("img", { src: d, className: s, alt: i }),
                      ],
                  }),
        })
    );
}
