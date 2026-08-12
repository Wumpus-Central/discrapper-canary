"use strict";
n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(693875),
    l = n(910590);
function o(e) {
    let {
            bannerSrc: t,
            backgroundColor: n,
            showGifTag: r = !1,
            height: o,
            width: d,
            cutout: c,
            onInteractionStart: u,
            onInteractionEnd: _,
            className: E,
            fillClassName: A,
            overlay: h,
        } = e,
        I = {
            "--custom-cutout-radius": `${c.radius}px`,
            "--custom-cutout-x": "center" === c.align ? "50%" : `${c.insetStart + c.radius}px`,
            "--custom-cutout-y": `calc(100% - ${c.insetBottom}px)`,
        };
    return (0, i.jsx)("div", {
        className: a()(l.vK, E),
        style: { height: o, width: d ?? "100%" },
        children: (0, i.jsxs)("div", {
            className: a()(l.GS, A),
            style: { ...I, backgroundImage: null != t && "" !== t ? `url(${t})` : void 0, backgroundColor: n },
            onMouseMove: u,
            onMouseLeave: _,
            children: [r && (0, i.jsx)(s.A, { className: l.pH }), h],
        }),
    });
}
