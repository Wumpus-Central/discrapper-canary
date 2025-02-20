Object.defineProperty(t, '__esModule', { value: !0 }), (t.Swatch = void 0);
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = l(n(192379)),
    o = l(n(723184)),
    a = n(425980),
    s = l(n(122024));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var c = 13,
    u = (t.Swatch = function (e) {
        var t = e.color,
            n = e.style,
            a = e.onClick,
            l = void 0 === a ? function () {} : a,
            u = e.onHover,
            d = e.title,
            f = void 0 === d ? t : d,
            p = e.children,
            _ = e.focus,
            h = e.focusStyle,
            m = void 0 === h ? {} : h,
            g = 'transparent' === t,
            E = (0, o.default)({
                default: {
                    swatch: r(
                        {
                            background: t,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        n,
                        _ ? m : {}
                    )
                }
            }),
            v = function (e) {
                return l(t, e);
            },
            b = function (e) {
                return e.keyCode === c && l(t, e);
            },
            y = function (e) {
                return u(t, e);
            },
            O = {};
        return (
            u && (O.onMouseOver = y),
            i.default.createElement(
                'div',
                r(
                    {
                        style: E.swatch,
                        onClick: v,
                        title: f,
                        tabIndex: 0,
                        onKeyDown: b
                    },
                    O
                ),
                p,
                g &&
                    i.default.createElement(s.default, {
                        borderRadius: E.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    });
t.default = (0, a.handleFocus)(u);
