Object.defineProperty(t, '__esModule', { value: !0 }), (t.Swatch = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = l(n(192379)),
    a = l(n(723184)),
    s = n(425980),
    o = l(n(122024));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = 13,
    c = (t.Swatch = function (e) {
        var t = e.color,
            n = e.style,
            s = e.onClick,
            l = void 0 === s ? function () {} : s,
            c = e.onHover,
            d = e.title,
            f = void 0 === d ? t : d,
            _ = e.children,
            p = e.focus,
            h = e.focusStyle,
            m = void 0 === h ? {} : h,
            g = 'transparent' === t,
            E = (0, a.default)({
                default: {
                    swatch: i(
                        {
                            background: t,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        n,
                        p ? m : {}
                    )
                }
            }),
            v = function (e) {
                return l(t, e);
            },
            y = function (e) {
                return e.keyCode === u && l(t, e);
            },
            I = function (e) {
                return c(t, e);
            },
            b = {};
        return (
            c && (b.onMouseOver = I),
            r.default.createElement(
                'div',
                i(
                    {
                        style: E.swatch,
                        onClick: v,
                        title: f,
                        tabIndex: 0,
                        onKeyDown: y
                    },
                    b
                ),
                _,
                g &&
                    r.default.createElement(o.default, {
                        borderRadius: E.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    });
t.default = (0, s.handleFocus)(c);
