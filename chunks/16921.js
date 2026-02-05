"use strict";
r.d(t, { A: () => s });
var n = r(64700),
    o = r(205662),
    a = r(152080),
    i = r(587033),
    l =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        };
let s = (0, a.l)(function (e) {
    var t = e.color,
        r = e.style,
        a = e.onClick,
        s = void 0 === a ? function () {} : a,
        u = e.onHover,
        c = e.title,
        p = void 0 === c ? t : c,
        d = e.children,
        f = e.focus,
        h = e.focusStyle,
        b = "transparent" === t,
        v = (0, o.default)({
            default: {
                swatch: l(
                    {
                        background: t,
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        position: "relative",
                        outline: "none",
                    },
                    r,
                    f ? (void 0 === h ? {} : h) : {},
                ),
            },
        }),
        g = {};
    return (
        u &&
            (g.onMouseOver = function (e) {
                return u(t, e);
            }),
        n.createElement(
            "div",
            l(
                {
                    style: v.swatch,
                    onClick: function (e) {
                        return s(t, e);
                    },
                    title: p,
                    tabIndex: 0,
                    onKeyDown: function (e) {
                        return 13 === e.keyCode && s(t, e);
                    },
                },
                g,
            ),
            d,
            b &&
                n.createElement(i.A, {
                    borderRadius: v.swatch.borderRadius,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }),
        )
    );
});
