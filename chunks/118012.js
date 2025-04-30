n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(163490),
    s = n(967777);
function l(e, t, n) {
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
function c(e) {
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
let p = Object.freeze({
        STANDARD: a.colorStandard,
        MUTED: a.colorMuted,
        ERROR: a.colorError,
        BRAND: a.colorBrand,
        LINK: a.colorLink,
        HEADER_PRIMARY: a.colorHeaderPrimary,
        HEADER_SECONDARY: a.colorHeaderSecondary,
        STATUS_YELLOW: a.colorStatusYellow,
        STATUS_GREEN: a.colorStatusGreen,
        STATUS_RED: a.colorStatusRed,
        INTERACTIVE_ACTIVE: a.colorInteractiveActive,
        INTERACTIVE_NORMAL: a.colorInteractiveNormal,
        ALWAYS_WHITE: a.colorWhite,
        CUSTOM: null
    }),
    h = Object.freeze({
        SIZE_10: s.size10,
        SIZE_12: s.size12,
        SIZE_14: s.size14,
        SIZE_16: s.size16,
        SIZE_20: s.size20,
        SIZE_24: s.size24,
        SIZE_32: s.size32
    }),
    m = (e) => {
        let { className: t, color: n = p.STANDARD, size: i = h.SIZE_14, tag: s = 'div', selectable: l = !1, strong: u = !1, children: _, style: m, 'aria-label': g } = e,
            E = f(e, ['className', 'color', 'size', 'tag', 'selectable', 'strong', 'children', 'style', 'aria-label']);
        return (0, r.jsx)(
            s,
            d(
                c(
                    {
                        'aria-label': g,
                        className: o()(n, i, t, {
                            [a.selectable]: l,
                            [a.strong]: u
                        }),
                        style: m
                    },
                    E
                ),
                { children: _ }
            )
        );
    };
(m.Colors = p), (m.Sizes = h);
let g = m;
