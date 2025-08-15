n.d(t, {
    M: () => m,
    V: () => b,
});
var r = n(255367),
    i = n(73800),
    o = n(287235),
    a = n(597442),
    s = n(84735),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
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
                    children: (0, r.jsx)(s.J, {
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
        { ref: o, returnRef: s, modal: l = !0, trackingProps: u } = e,
        f = p(e, ["ref", "returnRef", "modal", "trackingProps"]);
    let h = i.useRef(null);
    i.useImperativeHandle(o, () => h.current),
        i.useContext(c.Z)(
            {
                type: null == u ? void 0 : u.impressionType,
                name: null == u || null == (t = u.impression) ? void 0 : t.impressionName,
                properties: null == u || null == (n = u.impression) ? void 0 : n.impressionProperties,
            },
            { disableTrack: null == u ? void 0 : u.disableTrack },
        ),
        (0, a.T)(h, {
            returnRef: s,
            disable: !l,
        });
    let m = l ? g : E;
    return (0, r.jsx)(m, _(d({}, f), { ref: h }));
}
