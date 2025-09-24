n.d(t, {
    M: () => _,
    V: () => m,
});
var r = n(951288),
    i = n(647438),
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
let _ = i.createContext({ firstFocusableItemProps: void 0 });
function p(e) {
    var { children: t, ref: n } = e,
        i = d(e, ["children", "ref"]);
    return (0, r.jsx)(_.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, r.jsx)(
            "div",
            u(l({}, i), {
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
function h(e) {
    var { children: t } = e,
        n = d(e, ["children"]);
    return (0, r.jsx)(a.Wdt, {
        children: (e) =>
            (0, r.jsx)(_.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, r.jsx)(
                    "div",
                    u(l({}, n), {
                        "data-dialog": "non-modal",
                        role: "dialog",
                        children: t,
                    }),
                ),
            }),
    });
}
function m(e) {
    var t,
        n,
        { ref: s, returnRef: c, modal: f = !0, setDialogRef: _, trackingProps: m } = e,
        g = d(e, ["ref", "returnRef", "modal", "setDialogRef", "trackingProps"]);
    let E = i.useRef(null);
    i.useImperativeHandle(s, () => E.current),
        i.useEffect(
            () => (
                null == _ || _(E.current),
                () => {
                    null == _ || _(null);
                }
            ),
            [],
        ),
        i.useContext(o.Z)(
            {
                type: null == m ? void 0 : m.impressionType,
                name: null == m || null == (t = m.impression) ? void 0 : t.impressionName,
                properties: null == m || null == (n = m.impression) ? void 0 : n.impressionProperties,
            },
            { disableTrack: null == m ? void 0 : m.disableTrack },
        ),
        (0, a.Tbt)(E, {
            returnRef: c,
            disable: !f,
        });
    let b = f ? p : h;
    return (0, r.jsx)(b, u(l({}, g), { ref: E }));
}
