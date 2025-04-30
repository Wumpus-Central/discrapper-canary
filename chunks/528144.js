n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(951878),
    l = n(967777);
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
let _ = Object.freeze({
        SIZE_10: l.size10,
        SIZE_12: l.size12,
        SIZE_14: l.size14,
        SIZE_16: l.size16,
        SIZE_20: l.size20,
        SIZE_24: l.size24,
        SIZE_32: l.size32
    }),
    p = (e) => {
        let { id: t, muted: n = !1, className: i = s.wrapper, size: l = _.SIZE_14, selectable: c = !1, children: d, color: p, onClick: h, onContextMenu: m, style: g, title: E, uppercase: b } = e;
        return (0, r.jsx)(a.H, {
            role: null != h ? 'button' : void 0,
            onClick: h,
            onContextMenu: m,
            id: t,
            className: o()(i, {
                [s.base]: !0,
                [l]: !0,
                [s.selectable]: c,
                [s.muted]: n,
                [s.uppercase]: b
            }),
            title: E,
            style: null != p ? f(u({}, g), { color: p }) : g,
            children: d
        });
    };
p.Sizes = _;
let h = p;
