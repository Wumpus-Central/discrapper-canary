"use strict";
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = d(n(143243)),
    s = d(n(562627)),
    a = d(n(223108)),
    o = n(64700),
    l = d(o),
    u = d(n(518872));
function d(e) {
    return e && e.__esModule ? e : { default: e };
}
var c = {
        bgColor: a.default.oneOfType([a.default.object, a.default.string]),
        fgColor: a.default.oneOfType([a.default.object, a.default.string]),
        level: a.default.string,
        size: a.default.number,
        value: a.default.string.isRequired,
    },
    _ = (0, o.forwardRef)(function (e, t) {
        var n = e.bgColor,
            a = e.fgColor,
            o = e.level,
            d = e.size,
            c = e.value,
            _ = (function (e, t) {
                var n = {};
                for (var i in e) !(t.indexOf(i) >= 0) && Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                return n;
            })(e, ["bgColor", "fgColor", "level", "size", "value"]),
            h = new r.default(-1, s.default[o]);
        h.addData(c), h.make();
        var f = h.modules;
        return l.default.createElement(
            u.default,
            i({}, _, {
                bgColor: n,
                bgD: f
                    .map(function (e, t) {
                        return e
                            .map(function (e, n) {
                                return e ? "" : "M " + n + " " + t + " l 1 0 0 1 -1 0 Z";
                            })
                            .join(" ");
                    })
                    .join(" "),
                fgColor: a,
                fgD: f
                    .map(function (e, t) {
                        return e
                            .map(function (e, n) {
                                return e ? "M " + n + " " + t + " l 1 0 0 1 -1 0 Z" : "";
                            })
                            .join(" ");
                    })
                    .join(" "),
                ref: t,
                size: d,
                viewBoxSize: f.length,
            }),
        );
    });
(_.displayName = "QRCode"),
    (_.propTypes = c),
    (_.defaultProps = { bgColor: "#FFFFFF", fgColor: "#000000", level: "L", size: 256 }),
    (t.default = _);
