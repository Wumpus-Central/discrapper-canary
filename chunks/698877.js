n.d(t, { O: () => f });
var r = n(255367),
    i = n(73800),
    o = n(864094),
    a = n(871499),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    let t;
    var {
            hasPermission: n,
            streamActive: l,
            isSelfStream: d,
            centerButton: f,
            onMouseEnter: _,
            onMouseLeave: p,
            renderNUXHighlight: h,
            buttonRef: m,
        } = e,
        g = u(e, [
            "hasPermission",
            "streamActive",
            "isSelfStream",
            "centerButton",
            "onMouseEnter",
            "onMouseLeave",
            "renderNUXHighlight",
            "buttonRef",
        ]);
    let E = f ? a.d : a.Z;
    t = l
        ? d
            ? s.intl.string(s.t.S5anIS)
            : s.intl.string(s.t.q3O3Jy)
        : n
          ? s.intl.string(s.t.fjBNo6)
          : s.intl.string(s.t.uQn9Bw);
    let { Component: b, events: y, play: O } = (0, o.P)(l ? "disable" : "enable");
    i.useEffect(() => () => O(), [l, O]);
    let v = () => {
        let e;
        return h ? (e = "premiumGradient") : l && (e = "green"), e;
    };
    return (0, r.jsx)(
        E,
        c(
            {
                buttonRef: m,
                isTrayButton: !0,
                label: t,
                disabled: !n,
                iconComponent: b,
                isActive: l,
                color: v(),
                onMouseEnter: (e) => {
                    null == _ || _(e), y.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == p || p(e), y.onMouseLeave();
                },
            },
            g,
        ),
    );
}
