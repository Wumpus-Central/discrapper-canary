n.d(t, {
    D: () => p,
}),
    n(65821);
var r = n(64700),
    i = n(39184),
    a = n(683489),
    s = n(642733),
    o = n(875230);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let f = r.createElement("span");

function p(e) {
    let { children: t, targetElementRef: n, asContainer: l = !1, containerTag: d = "span", ariaHidden: p = !1 } = e,
        _ = u(e, ["children", "targetElementRef", "asContainer", "containerTag", "ariaHidden"]),
        h = (0, o._)(n),
        m = r.useId(),
        { isVisible: g, triggerProps: E } = (0, s.f)(
            c(
                {
                    targetElementRef: h.targetElementRef,
                },
                _,
            ),
        ),
        b = p ? void 0 : m,
        y = (0, i.o)(r.isValidElement(t) ? t : f, E, b, h.triggerRef),
        O = (0, a.w)(l, t, E, h.triggerRef, m, p, d),
        A = null != O ? O : y;
    return {
        tooltipId: m,
        isVisible: g,
        targetElementRef: h.targetElementRef,
        trigger: A,
        describedById: b,
    };
}
