Object.defineProperty(t, '__esModule', { value: !0 }), (t.Checkboard = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = n(192379),
    a = u(r),
    s = u(n(723184)),
    o = l(n(292346));
function l(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
var c = (t.Checkboard = function (e) {
    var t = e.white,
        n = e.grey,
        l = e.size,
        u = e.renderers,
        c = e.borderRadius,
        d = e.boxShadow,
        f = e.children,
        _ = (0, s.default)({
            default: {
                grid: {
                    borderRadius: c,
                    boxShadow: d,
                    absolute: '0px 0px 0px 0px',
                    background: 'url(' + o.get(t, n, l, u.canvas) + ') center left'
                }
            }
        });
    return (0, r.isValidElement)(f) ? a.default.cloneElement(f, i({}, f.props, { style: i({}, f.props.style, _.grid) })) : a.default.createElement('div', { style: _.grid });
});
(c.defaultProps = {
    size: 8,
    white: 'transparent',
    grey: 'rgba(0,0,0,.08)',
    renderers: {}
}),
    (t.default = c);
