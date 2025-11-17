n.d(t, {
    M: () => _,
    V: () => p,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(793903);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = i.createContext({ inDialog: void 0 }),
    p = i.forwardRef(function (e, t) {
        let { children: n, impressionType: s, impression: c, disableTrack: f, returnRef: p } = e,
            h = d(e, ["children", "impressionType", "impression", "disableTrack", "returnRef"]),
            m = i.useRef(null),
            g = i.useRef(null),
            [E, b] = i.useState(!1),
            y = E ? g : m;
        (0, a.Tbt)(y, { returnRef: p }),
            i.useContext(o.Z)(
                {
                    type: s,
                    name: null == c ? void 0 : c.impressionName,
                    properties: null == c ? void 0 : c.impressionProperties,
                },
                { disableTrack: f },
            ),
            i.useImperativeHandle(t, () => m.current);
        let O = i.useCallback(
            (e) => {
                E !== e && b(e);
            },
            [E],
        );
        return (0, r.jsx)(_.Provider, {
            value: {
                inDialog: !0,
                setFocusLockDisabled: O,
            },
            children: (0, r.jsx)(
                "div",
                u(l({}, h), {
                    ref: m,
                    role: "dialog",
                    tabIndex: -1,
                    "aria-modal": !0,
                    children: (0, r.jsx)(a.y5t, {
                        forceLevel: 1,
                        children: (0, r.jsx)(a.JcV, {
                            containerRef: m,
                            children: n,
                        }),
                    }),
                }),
            ),
        });
    });
