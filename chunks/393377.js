Object.defineProperty(t, '__esModule', { value: !0 }), (t.Swatch = void 0);
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = s(r(192379)),
    a = s(r(723184)),
    i = r(425980),
    l = s(r(122024));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = (t.Swatch = function (e) {
    var t = e.color,
        r = e.style,
        i = e.onClick,
        s = void 0 === i ? function () {} : i,
        u = e.onHover,
        c = e.title,
        p = void 0 === c ? t : c,
        f = e.children,
        d = e.focus,
        h = e.focusStyle,
        b = 'transparent' === t,
        v = (0, a.default)({
            default: {
                swatch: n(
                    {
                        background: t,
                        height: '100%',
                        width: '100%',
                        cursor: 'pointer',
                        position: 'relative',
                        outline: 'none'
                    },
                    r,
                    d ? (void 0 === h ? {} : h) : {}
                )
            }
        }),
        g = {};
    return (
        u &&
            (g.onMouseOver = function (e) {
                return u(t, e);
            }),
        o.default.createElement(
            'div',
            n(
                {
                    style: v.swatch,
                    onClick: function (e) {
                        return s(t, e);
                    },
                    title: p,
                    tabIndex: 0,
                    onKeyDown: function (e) {
                        return 13 === e.keyCode && s(t, e);
                    }
                },
                g
            ),
            f,
            b &&
                o.default.createElement(l.default, {
                    borderRadius: v.swatch.borderRadius,
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                })
        )
    );
});
t.default = (0, i.handleFocus)(u);
