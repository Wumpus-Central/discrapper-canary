n.d(t, {
    Z: () => h,
    e: () => d
});
var i,
    l = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    s = n(600164),
    o = n(507675),
    c = n(576976),
    d = (((i = {})[(i.TOP = 0)] = 'TOP'), (i[(i.BOTTOM = 1)] = 'BOTTOM'), i);
function u(e) {
    let { disableGradients: t = !1, renderHeader: n, renderBottomLeft: i, renderBottomCenter: a, renderBottomRight: r, renderCenter: o } = e;
    return (0, l.jsxs)('div', {
        className: c.videoControls,
        children: [
            !(0 === t || !0 === t) && (0, l.jsx)('div', { className: c.gradientTop }),
            !(1 === t || !0 === t) && (0, l.jsx)('div', { className: c.gradientBottom }),
            (0, l.jsx)('div', {
                className: c.topControls,
                children: null == n ? void 0 : n()
            }),
            null == o ? void 0 : o(),
            (0, l.jsxs)('div', {
                className: c.bottomControls,
                children: [
                    (0, l.jsx)(s.Z, {
                        grow: 1,
                        align: s.Z.Align.CENTER,
                        className: c.edgeControls,
                        children: null == i ? void 0 : i()
                    }),
                    (0, l.jsx)(s.Z, {
                        grow: 1,
                        justify: s.Z.Justify.CENTER,
                        align: s.Z.Align.CENTER,
                        children: null == a ? void 0 : a()
                    }),
                    ' ',
                    (0, l.jsx)(s.Z, {
                        grow: 1,
                        justify: s.Z.Justify.END,
                        align: s.Z.Align.CENTER,
                        className: c.edgeControls,
                        children: null == r ? void 0 : r()
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { screenMessage: t, onDoubleClick: n, onActive: i, onForceIdle: a, idle: s, children: d, renderChatToasts: h, renderVoiceChannelEffects: p, style: m, ...f } = e;
    return (0, l.jsxs)('div', {
        className: r()(c.root, { [c.idle]: s }),
        style: m,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: a,
        onDoubleClick: n,
        children: [
            d,
            null != t
                ? (0, l.jsx)(o.Z, {
                      size: 'large',
                      ...t
                  })
                : null,
            (0, l.jsx)(u, { ...f }),
            null == h ? void 0 : h(),
            null == p ? void 0 : p()
        ]
    });
}
