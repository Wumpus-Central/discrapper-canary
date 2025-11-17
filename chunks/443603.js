n.d(t, {
    Z: () => O,
    j: () => g,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(636606),
    l = n(481060),
    c = n(686546),
    u = n(855981),
    d = n(55543),
    f = n(807095);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var g = (function (e) {
    return (e[(e.UPDATE = 0)] = "UPDATE"), (e[(e.NEW = 1)] = "NEW"), e;
})({});
let E = 20,
    b = {
        config: {
            friction: 26,
            tension: 700,
            mass: 1,
        },
        initial: {
            scale: 1,
            opacity: 1,
        },
        from: {
            scale: 0.6,
            opacity: 0,
        },
        enter: {
            scale: 1,
            opacity: 1,
        },
        leave: {
            scale: 0.6,
            opacity: 0,
        },
    };
function y(e) {
    let {
            ref: t,
            className: n,
            disabled: i = !1,
            childClassName: a,
            iconClassName: _,
            icon: h,
            children: g,
            onClick: y,
            onDoubleClick: O,
            isActive: v,
            onMouseEnter: I,
            onMouseLeave: T,
            onFocus: S,
            onBlur: A,
            pulse: C,
            sparkle: N,
            notification: R,
            "aria-label": P,
            "aria-expanded": D,
            "aria-haspopup": w,
            "aria-controls": x,
            noHover: L,
        } = e,
        M = (0, l.Yzy)(null != g, m(p({}, b), { keys: (e) => (e ? "children" : "icon") })),
        k = (e) => {
            let { component: t } = e;
            return null != R
                ? (0, r.jsxs)("div", {
                      className: f.buttonContent,
                      children: [
                          (0, r.jsx)(c.ZP, {
                              className: f.iconMask,
                              mask: c.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: E,
                              height: E,
                              children: t,
                          }),
                          (0, r.jsx)("span", { className: f.notificationDot }),
                      ],
                  })
                : t;
        };
    return (0, r.jsxs)(l.P3F, {
        innerRef: t,
        "aria-label": P,
        "aria-expanded": D,
        "aria-haspopup": w,
        "aria-controls": x,
        "aria-disabled": i,
        className: o()(n, f.button, {
            [f.active]: v,
            [f.noHover]: L,
            [f.pulseButton]: C,
            [f.disabled]: i,
        }),
        onClick: i ? void 0 : y,
        onDoubleClick: i ? void 0 : O,
        onMouseEnter: I,
        onMouseLeave: T,
        onFocus: S,
        onBlur: A,
        focusProps: {
            offset: {
                top: 4,
                bottom: 4,
            },
        },
        children: [
            M((e, t, n) => {
                let { key: i } = n;
                return t
                    ? (0, r.jsx)(
                          s.animated.div,
                          {
                              style: e,
                              className: o()(f.buttonWrapper, a),
                              children: k({ component: g }),
                          },
                          i,
                      )
                    : null != h
                      ? (0, r.jsx)(
                            s.animated.div,
                            {
                                style: e,
                                className: o()(f.buttonWrapper, a),
                                children: k({
                                    component: (0, r.jsx)(h, {
                                        className: o()(f.icon, _, { [f.pulseIcon]: C }),
                                        color: "currentColor",
                                    }),
                                }),
                            },
                            i,
                        )
                      : void 0;
            }),
            N &&
                (0, r.jsxs)("div", {
                    className: f.sparkleContainer,
                    children: [
                        (0, r.jsx)(d.Z, { className: f.sparkleStar }),
                        (0, r.jsx)(u.Z, { className: f.sparklePlus }),
                    ],
                }),
        ],
    });
}
let O = i.memo(y);
