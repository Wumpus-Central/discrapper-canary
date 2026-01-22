n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(827734),
    s = n(397927),
    o = n(985018),
    l = n(927078);

function c(e, t, n) {
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

function u(e) {
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function h(e) {
    let { children: t, lineClamp: n = 2 } = e,
        c = p(e, ["children", "lineClamp"]),
        [d, _] = i.useState(!1),
        [h, m] = i.useState(null),
        g =
            null != h &&
            (0, r.jsx)("button", {
                className: l.x6,
                onClick: () => _((e) => !e),
                children: (0, r.jsxs)(s.Text, {
                    className: l.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        d ? o.intl.string(o.t["JQX/Pb"]) : o.intl.string(o.t.Fbrd8J),
                        d
                            ? (0, r.jsx)(s.tN5, {
                                  color: a.A.colors.TEXT_BRAND,
                                  size: "xs",
                              })
                            : (0, r.jsx)(s.abt, {
                                  color: a.A.colors.TEXT_BRAND,
                                  size: "xs",
                              }),
                    ],
                }),
            }),
        [E, b] = i.useState(null),
        y = i.useCallback(() => {
            if (null == E) return;
            let { scrollHeight: e, clientHeight: t } = E;
            e > t &&
                m({
                    truncatedHeight: t,
                    expandedHeight: e,
                });
        }, [E]);
    i.useEffect(() => {
        requestAnimationFrame(y);
    }, [y, t, n]);
    let O = "auto";
    return (
        null != h && (O = d ? "".concat(h.expandedHeight, "px") : "".concat(h.truncatedHeight, "px")),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(
                    s.Text,
                    f(u({}, c), {
                        className: l.Qs,
                        lineClamp: d ? void 0 : n,
                        ref: b,
                        style: {
                            height: O,
                        },
                        children: t,
                    }),
                ),
                g,
            ],
        })
    );
}
