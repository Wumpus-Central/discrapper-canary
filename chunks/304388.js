n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(930295),
    a = n(481060),
    o = n(579185),
    s = n(420212),
    c = n(940221);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e) {
    var { renderPopout: t, onMouseEnter: n, onMouseLeave: l, closePopout: a, isHovered: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['renderPopout', 'onMouseEnter', 'onMouseLeave', 'closePopout', 'isHovered']);
    return (
        i.useEffect(() => {
            o || a();
        }, [a, o]),
        (0, r.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: l,
            children: t(u({ closePopout: a }, s))
        })
    );
}
let p = i.forwardRef(function (e, t) {
    let { renderPopout: n, children: p, align: h = 'left', isPopoutBlocked: f, onPopoutOpen: m, onPopoutClose: g, onRequestClose: b, buttonRef: _ } = e,
        C = i.useRef(null),
        [x, y] = i.useState(!1),
        { isHovered: v, setIsHovered: j, onMouseEnter: O, onMouseLeave: E, cancelTimers: I } = (0, o.Z)(200, 300);
    function S(e) {
        'focus' === e.type || x || O();
    }
    function P() {
        x || E();
    }
    function Z(e) {
        I(), y(!x), x ? null == g || g() : null == m || m(), (!v || x) && e();
    }
    i.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                j(!1), y(!1);
            }
        }),
        [j, y]
    );
    let N = (v && !f) || x;
    return (0, r.jsx)(a.yRy, {
        targetElementRef: null != _ ? _ : C,
        animation: a.yRy.Animation.FADE,
        shouldShow: N,
        animationPosition: 'top',
        position: 'top',
        align: h,
        spacing: 16,
        onRequestClose: () => {
            if ((null == b ? void 0 : b()) === l.F) return l.F;
            j(!1), y(!1), null == g || g();
        },
        renderPopout: (e) =>
            (0, r.jsx)(
                d,
                u(
                    {
                        isHovered: N,
                        onFocus: () => y(!0),
                        onMouseEnter: O,
                        onMouseLeave: P,
                        renderPopout: n
                    },
                    e
                )
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, r.jsx)(r.Fragment, {
                children: p({
                    onClick: (e) => Z(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && Z(() => n(e));
                    },
                    className: c.actionBarButton,
                    onMouseEnter: S,
                    onMouseLeave: P,
                    isActive: x,
                    ref: null != _ ? _ : C
                })
            });
        }
    });
});
