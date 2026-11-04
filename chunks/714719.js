var a = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(693875),
    i = n(478717);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    bannerSrc: t,
                    backgroundColor: n,
                    showGifTag: r = !1,
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
                className: l()(i.vK, m),
                style: { height: o, width: d ?? "100%" },
                children: (0, a.jsxs)("div", {
                    className: l()(i.GS, g),
                    style: { ...E, backgroundImage: null != t && "" !== t ? `url(${t})` : void 0, backgroundColor: n },
                    onMouseMove: u,
                    onMouseLeave: f,
                    children: [r && (0, a.jsx)(s.A, { className: i.pH }), p],
                }),
            });
        },
    },
);
