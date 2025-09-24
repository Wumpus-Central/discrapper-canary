n.d(t, {
    M: () => p,
    V: () => g,
});
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(597442),
    s = n(793903);
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = i.createContext({ firstFocusableItemProps: void 0 });
function h(e) {
    var { children: t, ref: n } = e,
        i = f(e, ["children", "ref"]);
    return (0, r.jsx)(p.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, r.jsx)(
            "div",
            d(c({}, i), {
                ref: n,
                "data-dialog": "modal",
                role: "dialog",
                "aria-modal": !0,
                children: (0, r.jsx)(a.y5t, {
                    forceLevel: 1,
                    children: (0, r.jsx)(a.JcV, {
                        containerRef: n,
                        children: t,
                    }),
                }),
            }),
        ),
    });
}
function m(e) {
    var { children: t } = e,
        n = f(e, ["children"]);
    return (0, r.jsx)(a.Wdt, {
        children: (e) =>
            (0, r.jsx)(p.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, r.jsx)(
                    "div",
                    d(c({}, n), {
                        "data-dialog": "non-modal",
                        role: "dialog",
                        children: t,
                    }),
                ),
            }),
    });
}
function g(e) {
    var t,
        n,
        { ref: a, returnRef: l, modal: u = !0, setDialogRef: _, trackingProps: p } = e,
        g = f(e, ["ref", "returnRef", "modal", "setDialogRef", "trackingProps"]);
    let E = i.useRef(null);
    i.useImperativeHandle(a, () => E.current),
        i.useEffect(
            () => (
                null == _ || _(E.current),
                () => {
                    null == _ || _(null);
                }
            ),
            [],
        ),
        i.useContext(s.Z)(
            {
                type: null == p ? void 0 : p.impressionType,
                name: null == p || null == (t = p.impression) ? void 0 : t.impressionName,
                properties: null == p || null == (n = p.impression) ? void 0 : n.impressionProperties,
            },
            { disableTrack: null == p ? void 0 : p.disableTrack },
        ),
        (0, o.T)(E, {
            returnRef: l,
            disable: !u,
        });
    let b = u ? h : m;
    return (0, r.jsx)(b, d(c({}, g), { ref: E }));
}
