t.d(s, { x: () => u });
var a = t(477900),
    c = t(582128),
    n = t(17928),
    o = t(775602),
    r = t(607470);
function u(e) {
    let { className: s, animationState: t = "on", staticAsset: u, webmAsset: d, assetAltText: i } = e,
        l = (0, n.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [p, m] = (0, c.useState)(!1),
        f = (0, c.useRef)(null),
        h = !l && ("on" === t || ("on_hover" === t && p));
    (0, c.useEffect)(() => {
        null !== f.current && (h ? f.current.play() : ((f.current.currentTime = 0), f.current.pause()));
    }, [h]);
    let b = (0, c.useMemo)(
            () =>
                (0, a.jsxs)(r.A, {
                    className: s,
                    autoPlay: !0,
                    loop: !0,
                    ref: f,
                    children: [
                        (0, a.jsx)("source", { src: d, type: "video/webm" }),
                        (0, a.jsx)("img", { src: u, className: s, alt: i }),
                    ],
                }),
            [s, u, d, i],
        ),
        v = (0, c.useMemo)(
            () => (l && null != u ? (0, a.jsx)("img", { src: u, className: s, alt: i }) : b),
            [s, u, i, l, b],
        );
    return (0, a.jsx)("div", {
        onMouseEnter: "on_hover" === t ? () => m(!0) : void 0,
        onMouseLeave: "on_hover" === t ? () => m(!1) : void 0,
        children: v,
    });
}
