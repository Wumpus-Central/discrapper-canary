n.d(t, {
    M: () => m,
    l: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(312138),
    s = n(315710),
    o = n(426333),
    l = n(707554),
    c = n(460890);

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

function p(e, t) {
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

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = i.createContext({
    firstFocusableItemProps: void 0,
});

function g(e) {
    let { children: t, ref: n } = e,
        i = _(e, ["children", "ref"]);
    return (0, r.jsx)(m.Provider, {
        value: {
            firstFocusableItemProps: void 0,
        },
        children: (0, r.jsx)(
            "div",
            p(d({}, i), {
                ref: n,
                "data-dialog": "modal",
                role: "dialog",
                "aria-modal": !0,
                children: (0, r.jsx)(l.F, {
                    forceLevel: 1,
                    children: (0, r.jsx)(o.xp, {
                        containerRef: n,
                        children: t,
                    }),
                }),
            }),
        ),
    });
}

function E(e) {
    let { children: t } = e,
        n = _(e, ["children"]);
    return (0, r.jsx)(a.sk, {
        children: (e) =>
            (0, r.jsx)(m.Provider, {
                value: {
                    firstFocusableItemProps: e,
                },
                children: (0, r.jsx)(
                    "div",
                    p(d({}, n), {
                        "data-dialog": "non-modal",
                        role: "dialog",
                        children: t,
                    }),
                ),
            }),
    });
}

function b(e) {
    let { ref: t, returnRef: n, modal: a = !0, setDialogRef: o, trackingProps: l } = e,
        u = _(e, ["ref", "returnRef", "modal", "setDialogRef", "trackingProps"]),
        f = i.useRef(null);
    i.useImperativeHandle(t, () => f.current),
        i.useEffect(
            () => (
                null == o || o(f.current),
                () => {
                    null == o || o(null);
                }
            ),
            [],
        );
    let { trackImpression: h } = (0, c.G9)();
    i.useEffect(() => {
        if (null != h && null != l) {
            var e, t;
            h(
                {
                    type: l.impressionType,
                    name: null == (e = l.impression) ? void 0 : e.impressionName,
                    properties: null == (t = l.impression) ? void 0 : t.impressionProperties,
                },
                {
                    disableTrack: l.disableTrack,
                },
            );
        }
    }, [h, l]),
        (0, s.t)(f, {
            returnRef: n,
            disable: !a,
        });
    let m = a ? g : E;
    return (0, r.jsx)(
        m,
        p(d({}, u), {
            ref: f,
        }),
    );
}
