n.d(t, { Z: () => p }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(930295),
    a = n(481060),
    o = n(579185),
    s = n(295907),
    c = n(579564);
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
            children: h,
            align: f = "left",
            isPopoutBlocked: m,
            onPopoutOpen: g,
            onPopoutClose: b,
            onRequestClose: y,
        } = e,
        [C, v] = r.useState(!1),
        { isHovered: _, setIsHovered: x, onMouseEnter: j, onMouseLeave: O, cancelTimers: E } = (0, o.Z)(200, 300);
    function S(e) {
        "focus" === e.type || C || j();
    }
    function P() {
        C || O();
    }
    function I(e) {
        E(), v(!C), C ? null == b || b() : null == g || g(), (!_ || C) && e();
    }
    r.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                x(!1), v(!1);
            },
        }),
        [x, v],
    );
    let Z = (_ && !m) || C;
    return (0, i.jsx)(a.yRy, {
        targetElementRef: p,
        animation: a.yRy.Animation.FADE,
        shouldShow: Z,
        animationPosition: "top",
        position: "top",
        align: f,
        spacing: 16,
        onRequestClose: () => {
            if ((null == y ? void 0 : y()) === l.F) return l.F;
            x(!1), v(!1), null == b || b();
        },
        renderPopout: (e) =>
            (0, i.jsx)(
                d,
                u(
                    {
                        isHovered: Z,
                        onFocus: () => v(!0),
                        onMouseEnter: j,
                        onMouseLeave: P,
                        renderPopout: n,
                    },
                    e,
                ),
            ),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, i.jsx)(i.Fragment, {
                children: h({
                    onClick: (e) => I(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && I(() => n(e));
                    },
                    className: c.actionBarButton,
                    onMouseEnter: S,
                    onMouseLeave: P,
                    isActive: C,
                }),
            });
        },
    });
});
