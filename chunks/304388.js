n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(930295),
    a = n(481060),
    s = n(579185),
    l = n(420212),
    c = n(689598);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = 300,
    h = 200;
function m(e) {
    var { renderPopout: t, onMouseEnter: n, onMouseLeave: o, closePopout: a, isHovered: s } = e,
        l = f(e, ["renderPopout", "onMouseEnter", "onMouseLeave", "closePopout", "isHovered"]);
    return (
        i.useEffect(() => {
            s || a();
        }, [a, s]),
        (0, r.jsx)("div", {
            onMouseEnter: n,
            onMouseLeave: o,
            children: t(d({ closePopout: a }, l)),
        })
    );
}
let g = i.forwardRef(function (e, t) {
    let {
            renderPopout: n,
            popoutTargetRef: u,
            children: f,
            align: _ = "left",
            isPopoutBlocked: g,
            onPopoutOpen: E,
            onPopoutClose: b,
            onRequestClose: y,
        } = e,
        [O, v] = i.useState(!1),
        { isHovered: I, setIsHovered: T, onMouseEnter: S, onMouseLeave: A, cancelTimers: N } = (0, s.Z)(h, p);
    function C(e) {
        "focus" === e.type || O || S();
    }
    function R() {
        O || A();
    }
    function P(e) {
        N(), v(!O), O ? null == b || b() : null == E || E(), (!I || O) && e();
    }
    function w(e, t) {
        (e.key === l.vn.ENTER || e.key === l.vn.SPACE) && P(() => t(e));
    }
    i.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                T(!1), v(!1);
            },
        }),
        [T, v],
    );
    let D = (I && !g) || O,
        L = O;
    return (0, r.jsx)(a.yRy, {
        targetElementRef: u,
        animation: a.yRy.Animation.FADE,
        shouldShow: D,
        animationPosition: "top",
        position: "top",
        align: _,
        spacing: 16,
        onRequestClose: () => {
            if ((null == y ? void 0 : y()) === o.F) return o.F;
            T(!1), v(!1), null == b || b();
        },
        renderPopout: (e) =>
            (0, r.jsx)(
                m,
                d(
                    {
                        isHovered: D,
                        onFocus: () => v(!0),
                        onMouseEnter: S,
                        onMouseLeave: R,
                        renderPopout: n,
                    },
                    e,
                ),
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, r.jsx)(r.Fragment, {
                children: f({
                    onClick: (e) => P(() => t(e)),
                    onKeyDown: (e) => w(e, n),
                    className: c.actionBarButton,
                    onMouseEnter: C,
                    onMouseLeave: R,
                    isActive: L,
                }),
            });
        },
    });
});
