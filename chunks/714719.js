n.d(t, { A: () => o });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    i = n(693875),
    s = n(478717);
function o(e) {
    let {
            bannerSrc: t,
            backgroundColor: n,
            showGifTag: l = !1,
            height: o,
            width: d,
            cutout: c,
            onInteractionStart: u,
            onInteractionEnd: f,
            className: m,
            fillClassName: g,
            overlay: p,
        } = e,
        E = {
            "--custom-cutout-radius": `${c.radius}px`,
            "--custom-cutout-x": "center" === c.align ? "50%" : `${c.insetStart + c.radius}px`,
            "--custom-cutout-y": `calc(100% - ${c.insetBottom}px)`,
        };
    return (0, a.jsx)("div", {
        className: r()(s.vK, m),
        style: { height: o, width: d ?? "100%" },
        children: (0, a.jsxs)("div", {
            className: r()(s.GS, g),
            style: { ...E, backgroundImage: null != t && "" !== t ? `url(${t})` : void 0, backgroundColor: n },
            onMouseMove: u,
            onMouseLeave: f,
            children: [l && (0, a.jsx)(i.A, { className: s.pH }), p],
        }),
    });
}
