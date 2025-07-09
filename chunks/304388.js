(n.d(t, { Z: () => p }), n(388685));
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
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
    let { renderPopout: n, popoutTargetRef: p, children: h, align: f = 'left', isPopoutBlocked: m, onPopoutOpen: g, onPopoutClose: b, onRequestClose: _ } = e,
        [y, C] = i.useState(!1),
        { isHovered: x, setIsHovered: v, onMouseEnter: O, onMouseLeave: j, cancelTimers: E } = (0, o.Z)(200, 300);
    function S(e) {
        'focus' === e.type || y || O();
    }
    function I() {
        y || j();
    }
    function P(e) {
        (E(), C(!y), y ? null == b || b() : null == g || g(), (!x || y) && e());
    }
    i.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                (v(!1), C(!1));
            }
        }),
        [v, C]
    );
    let Z = (x && !m) || y;
    return (0, r.jsx)(a.yRy, {
        targetElementRef: p,
        animation: a.yRy.Animation.FADE,
        shouldShow: Z,
        animationPosition: 'top',
        position: 'top',
        align: f,
        spacing: 16,
        onRequestClose: () => {
            if ((null == _ ? void 0 : _()) === l.F) return l.F;
            (v(!1), C(!1), null == b || b());
        },
        renderPopout: (e) =>
            (0, r.jsx)(
                d,
                u(
                    {
                        isHovered: Z,
                        onFocus: () => C(!0),
                        onMouseEnter: O,
                        onMouseLeave: I,
                        renderPopout: n
                    },
                    e
                )
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, r.jsx)(r.Fragment, {
                children: h({
                    onClick: (e) => P(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && P(() => n(e));
                    },
                    className: c.actionBarButton,
                    onMouseEnter: S,
                    onMouseLeave: I,
                    isActive: y
                })
            });
        }
    });
});
