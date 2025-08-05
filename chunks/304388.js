(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(930295),
    o = n(481060),
    s = n(579185),
    l = n(420212),
    c = n(940221);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
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
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let p = 300,
    h = 200;
function m(e) {
    var { renderPopout: t, onMouseEnter: n, onMouseLeave: a, closePopout: o, isHovered: s } = e,
        l = f(e, ['renderPopout', 'onMouseEnter', 'onMouseLeave', 'closePopout', 'isHovered']);
    return (
        i.useEffect(() => {
            s || o();
        }, [o, s]),
        (0, r.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: a,
            children: t(d({ closePopout: o }, l))
        })
    );
}
let g = i.forwardRef(function (e, t) {
    let { renderPopout: n, popoutTargetRef: u, children: f, align: _ = 'left', isPopoutBlocked: g, onPopoutOpen: E, onPopoutClose: b, onRequestClose: y } = e,
        [O, v] = i.useState(!1),
        { isHovered: I, setIsHovered: T, onMouseEnter: S, onMouseLeave: A, cancelTimers: N } = (0, s.Z)(h, p);
    function C(e) {
        'focus' === e.type || O || S();
    }
    function w() {
        O || A();
    }
    function R(e) {
        (N(), v(!O), O ? null == b || b() : null == E || E(), (!I || O) && e());
    }
    function P(e, t) {
        (e.key === l.vn.ENTER || e.key === l.vn.SPACE) && R(() => t(e));
    }
    i.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                (T(!1), v(!1));
            }
        }),
        [T, v]
    );
    let D = (I && !g) || O,
        L = O;
    return (0, r.jsx)(o.yRy, {
        targetElementRef: u,
        animation: o.yRy.Animation.FADE,
        shouldShow: D,
        animationPosition: 'top',
        position: 'top',
        align: _,
        spacing: 16,
        onRequestClose: () => {
            if ((null == y ? void 0 : y()) === a.F) return a.F;
            (T(!1), v(!1), null == b || b());
        },
        renderPopout: (e) =>
            (0, r.jsx)(
                m,
                d(
                    {
                        isHovered: D,
                        onFocus: () => v(!0),
                        onMouseEnter: S,
                        onMouseLeave: w,
                        renderPopout: n
                    },
                    e
                )
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, r.jsx)(r.Fragment, {
                children: f({
                    onClick: (e) => R(() => t(e)),
                    onKeyDown: (e) => P(e, n),
                    className: c.actionBarButton,
                    onMouseEnter: C,
                    onMouseLeave: w,
                    isActive: L
                })
            });
        }
    });
});
