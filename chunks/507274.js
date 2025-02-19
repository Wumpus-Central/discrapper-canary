n.d(t, {
    M: () => h,
    V: () => m
});
var r = n(200651),
    i = n(192379),
    o = n(597442),
    a = n(84735),
    s = n(481060),
    l = n(793903);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = i.createContext(void 0),
    m = i.forwardRef(function (e, t) {
        let { children: n, impressionType: c, impression: d, disableTrack: _, returnRef: m } = e,
            g = p(e, ['children', 'impressionType', 'impression', 'disableTrack', 'returnRef']),
            E = i.useRef(null);
        return (
            (0, o.T)(E, { returnRef: m }),
            i.useContext(l.Z)(
                {
                    type: c,
                    name: null == d ? void 0 : d.impressionName,
                    properties: null == d ? void 0 : d.impressionProperties
                },
                { disableTrack: _ }
            ),
            i.useImperativeHandle(t, () => E.current),
            (0, r.jsx)(h.Provider, {
                value: !0,
                children: (0, r.jsx)(
                    'div',
                    f(u({}, g), {
                        ref: E,
                        role: 'dialog',
                        tabIndex: -1,
                        'aria-modal': !0,
                        children: (0, r.jsx)(s.y5t, {
                            forceLevel: 1,
                            children: (0, r.jsx)(a.J, {
                                containerRef: E,
                                children: n
                            })
                        })
                    })
                )
            })
        );
    });
