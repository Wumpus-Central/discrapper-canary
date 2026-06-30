"use strict";
Object.defineProperty(t, "__esModule", { value: !0 });
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = o(n(223108)),
    s = n(64700),
    a = o(s);
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = {
        bgColor: r.default.oneOfType([r.default.object, r.default.string]).isRequired,
        bgD: r.default.string.isRequired,
        fgColor: r.default.oneOfType([r.default.object, r.default.string]).isRequired,
        fgD: r.default.string.isRequired,
        size: r.default.number.isRequired,
        title: r.default.string,
        viewBoxSize: r.default.number.isRequired,
        xmlns: r.default.string,
    },
    u = (0, s.forwardRef)(function (e, t) {
        var n = e.bgColor,
            r = e.bgD,
            s = e.fgD,
            o = e.fgColor,
            l = e.size,
            u = e.title,
            c = e.viewBoxSize,
            d = (function (e, t) {
                var n = {};
                for (var i in e) !(t.indexOf(i) >= 0) && Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                return n;
            })(e, ["bgColor", "bgD", "fgD", "fgColor", "size", "title", "viewBoxSize"]);
        return a.default.createElement(
            "svg",
            i({}, d, { height: l, ref: t, viewBox: "0 0 " + c + " " + c, width: l }),
            u ? a.default.createElement("title", null, u) : null,
            a.default.createElement("path", { d: r, fill: n }),
            a.default.createElement("path", { d: s, fill: o }),
        );
    });
(u.displayName = "QRCodeSvg"),
    (u.propTypes = l),
    (u.defaultProps = { title: void 0, xmlns: "http://www.w3.org/2000/svg" }),
    (t.default = u);
