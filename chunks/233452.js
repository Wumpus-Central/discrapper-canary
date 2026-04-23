"use strict";
var n = r(64700),
    o = r(655972),
    a = r.n(o),
    i = r(205662),
    l = r(920385),
    s = r(708005),
    u = r(543211),
    c =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    p = function (e) {
        var t = e.width,
            r = e.height,
            o = e.onChange,
            a = e.hsl,
            u = e.direction,
            p = e.pointer,
            d = e.styles,
            f = e.className,
            h = (0, i.default)(
                (0, l.A)(
                    { default: { picker: { position: "relative", width: t, height: r }, hue: { radius: "2px" } } },
                    void 0 === d ? {} : d,
                ),
            );
        return n.createElement(
            "div",
            { style: h.picker, className: "hue-picker " + (void 0 === f ? "" : f) },
            n.createElement(
                s.RG,
                c({}, h.hue, {
                    hsl: a,
                    pointer: p,
                    onChange: function (e) {
                        return o({ a: 1, h: e.h, l: 0.5, s: 1 });
                    },
                    direction: u,
                }),
            ),
        );
    };
(p.propTypes = { styles: a().object }),
    (p.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: u.A, styles: {} }),
    (0, s.Q$)(p);
