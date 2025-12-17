n.d(t, { Z: () => p }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(930295),
    a = n(481060),
    o = n(579185),
    s = n(295907),
    c = n(674463);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function d(e) {
    var { renderPopout: t, onMouseEnter: n, onMouseLeave: l, closePopout: a, isHovered: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["renderPopout", "onMouseEnter", "onMouseLeave", "closePopout", "isHovered"]);
    return (
        r.useEffect(() => {
            o || a();
        }, [a, o]),
        (0, i.jsx)("div", {
            onMouseEnter: n,
            onMouseLeave: l,
            children: t(u({ closePopout: a }, s)),
        })
    );
}
let p = r.forwardRef(function (e, t) {
    let {
            renderPopout: n,
            popoutTargetRef: p,
            children: f,
            align: h = "left",
            isPopoutBlocked: m,
            onPopoutOpen: g,
            onPopoutClose: b,
            onRequestClose: C,
        } = e,
        [y, v] = r.useState(!1),
        { isHovered: x, setIsHovered: O, onMouseEnter: E, onMouseLeave: j, cancelTimers: S } = (0, o.Z)(200, 300);
    function _(e) {
        "focus" === e.type || y || E();
    }
    function P() {
        y || j();
    }
    function I(e) {
        S(), v(!y), y ? null == b || b() : null == g || g(), (!x || y) && e();
    }
    r.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                O(!1), v(!1);
            },
        }),
        [O, v],
    );
    let Z = (x && !m) || y;
    return (0, i.jsx)(a.yRy, {
        targetElementRef: p,
        animation: a.yRy.Animation.FADE,
        shouldShow: Z,
        animationPosition: "top",
        position: "top",
        align: h,
        spacing: 16,
        onRequestClose: () => {
            if ((null == C ? void 0 : C()) === l.F) return l.F;
            O(!1), v(!1), null == b || b();
        },
        renderPopout: (e) =>
            (0, i.jsx)(
                d,
                u(
                    {
                        isHovered: Z,
                        onFocus: () => v(!0),
                        onMouseEnter: E,
                        onMouseLeave: P,
                        renderPopout: n,
                    },
                    e,
                ),
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, i.jsx)(i.Fragment, {
                children: f({
                    onClick: (e) => I(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && I(() => n(e));
                    },
                    className: c.actionBarButton,
                    onMouseEnter: _,
                    onMouseLeave: P,
                    isActive: y,
                }),
            });
        },
    });
});
