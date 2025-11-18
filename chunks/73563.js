n.d(t, {
    Z: () => m,
    e: () => h,
});
var i,
    r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    c = n(600164),
    u = n(507675),
    d = n(86834);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
var h = (((i = {})[(i.TOP = 0)] = "TOP"), (i[(i.BOTTOM = 1)] = "BOTTOM"), i);
function f(e) {
    let {
            disableGradients: t = !1,
            renderHeader: n,
            renderBottomLeft: i,
            renderBottomCenter: a,
            renderBottomRight: o,
            renderCenter: u,
        } = e,
        p = l.useRef(null);
    return (0, r.jsx)(s.JcV, {
        containerRef: p,
        children: (0, r.jsxs)("div", {
            className: d.videoControls,
            ref: p,
            children: [
                0 !== t && !0 !== t && (0, r.jsx)("div", { className: d.gradientTop }),
                1 !== t && !0 !== t && (0, r.jsx)("div", { className: d.gradientBottom }),
                (0, r.jsx)("div", {
                    className: d.topControls,
                    children: null == n ? void 0 : n(),
                }),
                null == u ? void 0 : u(),
                (0, r.jsxs)("div", {
                    className: d.bottomControls,
                    children: [
                        (0, r.jsx)(c.Z, {
                            grow: 1,
                            align: c.Z.Align.CENTER,
                            className: d.edgeControls,
                            children: null == i ? void 0 : i(),
                        }),
                        (0, r.jsx)(c.Z, {
                            grow: 1,
                            justify: c.Z.Justify.CENTER,
                            align: c.Z.Align.CENTER,
                            children: null == a ? void 0 : a(),
                        }),
                        (0, r.jsx)(c.Z, {
                            grow: 1,
                            justify: c.Z.Justify.END,
                            align: c.Z.Align.CENTER,
                            className: d.edgeControls,
                            children: null == o ? void 0 : o(),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function m(e) {
    var {
            screenMessage: t,
            onDoubleClick: n,
            onActive: i,
            onForceIdle: l,
            idle: a,
            children: s,
            renderChatToasts: c,
            renderVoiceChannelEffects: h,
            style: m,
        } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "screenMessage",
            "onDoubleClick",
            "onActive",
            "onForceIdle",
            "idle",
            "children",
            "renderChatToasts",
            "renderVoiceChannelEffects",
            "style",
        ]);
    return (0, r.jsxs)("div", {
        className: o()(d.root, { [d.idle]: a }),
        style: m,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [
            s,
            null != t ? (0, r.jsx)(u.Z, p({ size: "large" }, t)) : null,
            (0, r.jsx)(f, p({}, g)),
            null == c ? void 0 : c(),
            null == h ? void 0 : h(),
        ],
    });
}
