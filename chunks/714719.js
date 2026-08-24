n.d(t, { A: () => d });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(693875),
    i = n(478717);
function d(e) {
    let {
            bannerSrc: t,
            backgroundColor: n,
            showGifTag: l = !1,
            height: d,
            width: o,
            cutout: c,
            onInteractionStart: u,
            onInteractionEnd: f,
            className: E,
            fillClassName: m,
            overlay: g,
        } = e,
        p = {
            "--custom-cutout-radius": `${c.radius}px`,
            "--custom-cutout-x": "center" === c.align ? "50%" : `${c.insetStart + c.radius}px`,
            "--custom-cutout-y": `calc(100% - ${c.insetBottom}px)`,
        };
    return (0, a.jsx)("div", {
        className: r()(i.vK, E),
        style: { height: d, width: o ?? "100%" },
        children: (0, a.jsxs)("div", {
            className: r()(i.GS, m),
            style: { ...p, backgroundImage: null != t && "" !== t ? `url(${t})` : void 0, backgroundColor: n },
            onMouseMove: u,
            onMouseLeave: f,
            children: [l && (0, a.jsx)(s.A, { className: i.pH }), g],
        }),
    });
}
