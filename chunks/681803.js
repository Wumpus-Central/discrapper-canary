n.d(t, {
    M: () => m,
    V: () => b,
});
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(287235),
    s = n(597442),
    l = n(481060),
    c = n(793903);
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = i.createContext({ firstFocusableItemProps: void 0 });
function g(e) {
    var { children: t, ref: n } = e,
        i = p(e, ["children", "ref"]);
    return (0, r.jsx)(m.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, r.jsx)(
            "div",
            _(d({}, i), {
                ref: n,
                "data-dialog": "modal",
                role: "dialog",
                "aria-modal": !0,
                children: (0, r.jsx)(l.y5t, {
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
function E(e) {
    var { children: t } = e,
        n = p(e, ["children"]);
    return (0, r.jsx)(o.Wd, {
        children: (e) =>
            (0, r.jsx)(m.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, r.jsx)(
                    "div",
                    _(d({}, n), {
                        "data-dialog": "non-modal",
                        role: "dialog",
                        children: t,
                    }),
                ),
            }),
    });
}
function b(e) {
    var t,
        n,
        { ref: a, returnRef: o, modal: l = !0, setDialogRef: u, trackingProps: f } = e,
        h = p(e, ["ref", "returnRef", "modal", "setDialogRef", "trackingProps"]);
    let m = i.useRef(null);
    i.useImperativeHandle(a, () => m.current),
        i.useEffect(
            () => (
                null == u || u(m.current),
                () => {
                    null == u || u(null);
                }
            ),
            [],
        ),
        i.useContext(c.Z)(
            {
                type: null == f ? void 0 : f.impressionType,
                name: null == f || null == (t = f.impression) ? void 0 : t.impressionName,
                properties: null == f || null == (n = f.impression) ? void 0 : n.impressionProperties,
            },
            { disableTrack: null == f ? void 0 : f.disableTrack },
        ),
        (0, s.T)(m, {
            returnRef: o,
            disable: !l,
        });
    let b = l ? g : E;
    return (0, r.jsx)(b, _(d({}, h), { ref: m }));
}
