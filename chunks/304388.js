n.d(t, { Z: () => p }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(930295),
    o = n(481060),
    a = n(579185),
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
            children: t(u({ closePopout: o }, s))
        })
    );
}
let p = i.forwardRef(function (e, t) {
    let { renderPopout: n, children: p, align: h = 'left', isPopoutBlocked: f, onPopoutOpen: m, onPopoutClose: g, onRequestClose: b } = e,
        [_, y] = i.useState(!1),
        { isHovered: C, setIsHovered: x, onMouseEnter: v, onMouseLeave: j, cancelTimers: O } = (0, a.Z)(200, 300);
    function E(e) {
        'focus' === e.type || _ || v();
    }
    function I() {
        _ || j();
    }
    function S(e) {
        O(), y(!_), _ ? null == g || g() : null == m || m(), (!C || _) && e();
    }
    i.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                x(!1), y(!1);
            }
        }),
        [x, y]
    );
    let P = (C && !f) || _;
    return (0, r.jsx)(o.yRy, {
        animation: o.yRy.Animation.FADE,
        shouldShow: P,
        animationPosition: 'top',
        position: 'top',
        align: h,
        spacing: 16,
        onRequestClose: () => {
            if ((null == b ? void 0 : b()) === l.F) return l.F;
            x(!1), y(!1), null == g || g();
        },
        renderPopout: (e) =>
            (0, r.jsx)(
                d,
                u(
                    {
                        isHovered: P,
                        onFocus: () => y(!0),
                        onMouseEnter: v,
                        onMouseLeave: I,
                        renderPopout: n
                    },
                    e
                )
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, r.jsx)(r.Fragment, {
                children: p({
                    onClick: (e) => S(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && S(() => n(e));
                    },
                    className: c.actionBarButton,
                    onMouseEnter: E,
                    onMouseLeave: I,
                    isActive: _
                })
            });
        }
    });
});
