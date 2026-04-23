"use strict";
r.d(t, { A: () => s });
var n = r(64700),
    o = r(205662),
    a = r(237190),
    i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    l = function (e) {
        var t = e.white,
            r = e.grey,
            l = e.size,
            s = e.renderers,
            u = e.borderRadius,
            c = e.boxShadow,
            p = e.children,
            d = (0, o.default)({
                default: {
                    grid: {
                        borderRadius: u,
                        boxShadow: c,
                        absolute: "0px 0px 0px 0px",
                        background: "url(" + a.J(t, r, l, s.canvas) + ") center left",
                    },
                },
            });
        return (0, n.isValidElement)(p)
            ? n.cloneElement(p, i({}, p.props, { style: i({}, p.props.style, d.grid) }))
            : n.createElement("div", { style: d.grid });
    };
l.defaultProps = { size: 8, white: "transparent", grey: "rgba(0,0,0,.08)", renderers: {} };
let s = l;
