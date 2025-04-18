n.d(t, {
    Z: () => m,
    e: () => h
});
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    c = n(600164),
    u = n(507675),
    d = n(768030);
function p(e) {
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
var h = (((r = {})[(r.TOP = 0)] = 'TOP'), (r[(r.BOTTOM = 1)] = 'BOTTOM'), r);
function f(e) {
    let { disableGradients: t = !1, renderHeader: n, renderBottomLeft: r, renderBottomCenter: o, renderBottomRight: a, renderCenter: u } = e,
        p = l.useRef(null);
    return (0, i.jsx)(s.JcV, {
        containerRef: p,
        children: (0, i.jsxs)('div', {
            className: d.videoControls,
            ref: p,
            children: [
                0 !== t && !0 !== t && (0, i.jsx)('div', { className: d.gradientTop }),
                1 !== t && !0 !== t && (0, i.jsx)('div', { className: d.gradientBottom }),
                (0, i.jsx)('div', {
                    className: d.topControls,
                    children: null == n ? void 0 : n()
                }),
                null == u ? void 0 : u(),
                (0, i.jsxs)('div', {
                    className: d.bottomControls,
                    children: [
                        (0, i.jsx)(c.Z, {
                            grow: 1,
                            align: c.Z.Align.CENTER,
                            className: d.edgeControls,
                            children: null == r ? void 0 : r()
                        }),
                        (0, i.jsx)(c.Z, {
                            grow: 1,
                            justify: c.Z.Justify.CENTER,
                            align: c.Z.Align.CENTER,
                            children: null == o ? void 0 : o()
                        }),
                        ' ',
                        (0, i.jsx)(c.Z, {
                            grow: 1,
                            justify: c.Z.Justify.END,
                            align: c.Z.Align.CENTER,
                            className: d.edgeControls,
                            children: null == a ? void 0 : a()
                        })
                    ]
                })
            ]
        })
    });
}
function m(e) {
    var { screenMessage: t, onDoubleClick: n, onActive: r, onForceIdle: l, idle: o, children: s, renderChatToasts: c, renderVoiceChannelEffects: h, style: m } = e,
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
        className: a()(d.root, { [d.idle]: o }),
        style: m,
        onMouseMove: r,
        onMouseDown: r,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [s, null != t ? (0, i.jsx)(u.Z, p({ size: 'large' }, t)) : null, (0, i.jsx)(f, p({}, g)), null == c ? void 0 : c(), null == h ? void 0 : h()]
    });
}
