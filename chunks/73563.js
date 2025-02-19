n.d(t, {
    Z: () => h,
    e: () => d
});
var r,
    i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(600164),
    s = n(507675),
    c = n(598518);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
var d = (((r = {})[(r.TOP = 0)] = 'TOP'), (r[(r.BOTTOM = 1)] = 'BOTTOM'), r);
function p(e) {
    let { disableGradients: t = !1, renderHeader: n, renderBottomLeft: r, renderBottomCenter: l, renderBottomRight: o, renderCenter: s } = e;
    return (0, i.jsxs)('div', {
        className: c.videoControls,
        children: [
            0 !== t && !0 !== t && (0, i.jsx)('div', { className: c.gradientTop }),
            1 !== t && !0 !== t && (0, i.jsx)('div', { className: c.gradientBottom }),
            (0, i.jsx)('div', {
                className: c.topControls,
                children: null == n ? void 0 : n()
            }),
            null == s ? void 0 : s(),
            (0, i.jsxs)('div', {
                className: c.bottomControls,
                children: [
                    (0, i.jsx)(a.Z, {
                        grow: 1,
                        align: a.Z.Align.CENTER,
                        className: c.edgeControls,
                        children: null == r ? void 0 : r()
                    }),
                    (0, i.jsx)(a.Z, {
                        grow: 1,
                        justify: a.Z.Justify.CENTER,
                        align: a.Z.Align.CENTER,
                        children: null == l ? void 0 : l()
                    }),
                    ' ',
                    (0, i.jsx)(a.Z, {
                        grow: 1,
                        justify: a.Z.Justify.END,
                        align: a.Z.Align.CENTER,
                        className: c.edgeControls,
                        children: null == o ? void 0 : o()
                    })
                ]
            })
        ]
    });
}
function h(e) {
    var { screenMessage: t, onDoubleClick: n, onActive: r, onForceIdle: l, idle: a, children: d, renderChatToasts: h, renderVoiceChannelEffects: f, style: m } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['screenMessage', 'onDoubleClick', 'onActive', 'onForceIdle', 'idle', 'children', 'renderChatToasts', 'renderVoiceChannelEffects', 'style']);
    return (0, i.jsxs)('div', {
        className: o()(c.root, { [c.idle]: a }),
        style: m,
        onMouseMove: r,
        onMouseDown: r,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [d, null != t ? (0, i.jsx)(s.Z, u({ size: 'large' }, t)) : null, (0, i.jsx)(p, u({}, g)), null == h ? void 0 : h(), null == f ? void 0 : f()]
    });
}
