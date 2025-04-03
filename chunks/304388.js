n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(579185),
    a = n(420212),
    s = n(940221);
function c(e) {
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
function u(e) {
    var { renderPopout: t, onMouseEnter: n, onMouseLeave: l, closePopout: o, isHovered: a } = e,
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
            a || o();
        }, [o, a]),
        (0, r.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: l,
            children: t(c({ closePopout: o }, s))
        })
    );
}
let d = i.forwardRef(function (e, t) {
    let { renderPopout: n, children: d, align: p = 'left', isPopoutBlocked: h, onPopoutOpen: f, onPopoutClose: m } = e,
        [g, b] = i.useState(!1),
        { isHovered: _, setIsHovered: C, onMouseEnter: y, onMouseLeave: x, cancelTimers: v } = (0, o.Z)(200, 300);
    function j(e) {
        'focus' === e.type || g || y();
    }
    function O() {
        g || x();
    }
    function E(e) {
        v(), b(!g), g ? null == m || m() : null == f || f(), (!_ || g) && e();
    }
    i.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                C(!1), b(!1);
            }
        }),
        [C, b]
    );
    let N = (_ && !h) || g;
    return (0, r.jsx)(l.yRy, {
        animation: l.yRy.Animation.FADE,
        shouldShow: N,
        animationPosition: 'top',
        position: 'top',
        align: p,
        spacing: 16,
        onRequestClose: () => {
            C(!1), b(!1), null == m || m();
        },
        renderPopout: (e) =>
            (0, r.jsx)(
                u,
                c(
                    {
                        isHovered: N,
                        onFocus: () => b(!0),
                        onMouseEnter: y,
                        onMouseLeave: O,
                        renderPopout: n
                    },
                    e
                )
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, r.jsx)(r.Fragment, {
                children: d({
                    onClick: (e) => E(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === a.vn.ENTER || e.key === a.vn.SPACE) && E(() => n(e));
                    },
                    className: s.actionBarButton,
                    onMouseEnter: j,
                    onMouseLeave: O,
                    isActive: g
                })
            });
        }
    });
});
