"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.Checkboard = void 0);
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = r(582128),
    a = l(o),
    i = l(r(584946)),
    u = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
    })(r(151027));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var s = (t.Checkboard = function (e) {
    var t = e.white,
        r = e.grey,
        l = e.size,
        s = e.renderers,
        p = e.borderRadius,
        c = e.boxShadow,
        f = e.children,
        d = (0, i.default)({
            default: {
                grid: {
                    borderRadius: p,
                    boxShadow: c,
                    absolute: "0px 0px 0px 0px",
                    background: "url(" + u.get(t, r, l, s.canvas) + ") center left",
                },
            },
        });
    return (0, o.isValidElement)(f)
        ? a.default.cloneElement(f, n({}, f.props, { style: n({}, f.props.style, d.grid) }))
        : a.default.createElement("div", { style: d.grid });
});
(s.defaultProps = { size: 8, white: "transparent", grey: "rgba(0,0,0,.08)", renderers: {} }), (t.default = s);
