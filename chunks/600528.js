"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.Swatch = void 0);
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = l(r(582128)),
    a = l(r(584946)),
    i = r(791235),
    u = l(r(407544));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var s = (t.Swatch = function (e) {
    var t = e.color,
        r = e.style,
        i = e.onClick,
        l = void 0 === i ? function () {} : i,
        s = e.onHover,
        p = e.title,
        c = void 0 === p ? t : p,
        f = e.children,
        d = e.focus,
        h = e.focusStyle,
        v = "transparent" === t,
        b = (0, a.default)({
            default: {
                swatch: n(
                    {
                        background: t,
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        position: "relative",
                        outline: "none",
                    },
                    r,
                    d ? (void 0 === h ? {} : h) : {},
                ),
            },
        }),
        g = {};
    return (
        s &&
            (g.onMouseOver = function (e) {
                return s(t, e);
            }),
        o.default.createElement(
            "div",
            n(
                {
                    style: b.swatch,
                    onClick: function (e) {
                        return l(t, e);
                    },
                    title: c,
                    tabIndex: 0,
                    onKeyDown: function (e) {
                        return 13 === e.keyCode && l(t, e);
                    },
                },
                g,
            ),
            f,
            v &&
                o.default.createElement(u.default, {
                    borderRadius: b.swatch.borderRadius,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }),
        )
    );
});
t.default = (0, i.handleFocus)(s);
