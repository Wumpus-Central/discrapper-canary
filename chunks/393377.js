Object.defineProperty(n, '__esModule', { value: !0 }), (n.Swatch = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = u(r(192379)),
    o = u(r(723184)),
    s = r(425980),
    l = u(r(122024));
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
var c = 13,
    d = (n.Swatch = function (e) {
        var n = e.color,
            r = e.style,
            s = e.onClick,
            u = void 0 === s ? function () {} : s,
            d = e.onHover,
            f = e.title,
            p = void 0 === f ? n : f,
            h = e.children,
            _ = e.focus,
            m = e.focusStyle,
            g = void 0 === m ? {} : m,
            E = 'transparent' === n,
            v = (0, o.default)({
                default: {
                    swatch: i(
                        {
                            background: n,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        r,
                        _ ? g : {}
                    )
                }
            }),
            y = function (e) {
                return u(n, e);
            },
            b = function (e) {
                return e.keyCode === c && u(n, e);
            },
            I = function (e) {
                return d(n, e);
            },
            T = {};
        return (
            d && (T.onMouseOver = I),
            a.default.createElement(
                'div',
                i(
                    {
                        style: v.swatch,
                        onClick: y,
                        title: p,
                        tabIndex: 0,
                        onKeyDown: b
                    },
                    T
                ),
                h,
                E &&
                    a.default.createElement(l.default, {
                        borderRadius: v.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    });
n.default = (0, s.handleFocus)(d);
