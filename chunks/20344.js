"use strict";
var n = r(64700),
    o = r(205662),
    a = r(708005),
    i = r(640271),
    l =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    s = function (e) {
        var t = e.rgb,
            r = e.hsl,
            i = e.width,
            s = e.height,
            u = e.onChange,
            c = e.direction,
            p = e.style,
            d = e.renderers,
            f = e.pointer,
            h = e.className,
            b = (0, o.default)({
                default: { picker: { position: "relative", width: i, height: s }, alpha: { radius: "2px", style: p } },
            });
        return n.createElement(
            "div",
            { style: b.picker, className: "alpha-picker " + (void 0 === h ? "" : h) },
            n.createElement(
                a.ry,
                l({}, b.alpha, { rgb: t, hsl: r, pointer: f, renderers: d, onChange: u, direction: c }),
            ),
        );
    };
(s.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: i.A }), (0, a.Q$)(s);
