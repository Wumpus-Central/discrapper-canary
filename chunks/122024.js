Object.defineProperty(t, '__esModule', { value: !0 }), (t.Checkboard = void 0);
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = n(192379),
    o = c(i),
    a = c(n(723184)),
    s = l(n(292346));
function l(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function c(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = (t.Checkboard = function (e) {
    var t = e.white,
        n = e.grey,
        l = e.size,
        c = e.renderers,
        u = e.borderRadius,
        d = e.boxShadow,
        f = e.children,
        p = (0, a.default)({
            default: {
                grid: {
                    borderRadius: u,
                    boxShadow: d,
                    absolute: '0px 0px 0px 0px',
                    background: 'url(' + s.get(t, n, l, c.canvas) + ') center left'
                }
            }
        });
    return (0, i.isValidElement)(f) ? o.default.cloneElement(f, r({}, f.props, { style: r({}, f.props.style, p.grid) })) : o.default.createElement('div', { style: p.grid });
});
(u.defaultProps = {
    size: 8,
    white: 'transparent',
    grey: 'rgba(0,0,0,.08)',
    renderers: {}
}),
    (t.default = u);
