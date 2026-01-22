n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(843282),
    a = n(435371),
    s = n(397927),
    o = n(371509),
    l = n(721267);

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
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function p(e) {
    let { title: t, value: n, onChange: a, options: c, isDisabled: u = !1 } = e;
    return (0, r.jsxs)("div", {
        className: l.ar,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: u ? "text-muted" : "text-strong",
                className: l.DD,
                children: t,
            }),
            (0, r.jsx)(i.Te, {
                variant: "text-only",
                className: l.Lt,
                options: c,
                value: n,
                onChange: (e) => a(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, r.jsx)(o.A, {
                        option: t,
                    });
                },
                renderOptionLabel: (e) =>
                    (0, r.jsx)(o.A, {
                        option: e,
                    }),
                isDisabled: u,
                "data-migration-pending": !0,
            }),
        ],
    });
}

function _(e) {
    let { tooltipText: t } = e,
        n = d(e, ["tooltipText"]);
    return (0, r.jsx)(a.m_, {
        text: t,
        asContainer: !0,
        children: (0, r.jsx)(p, u({}, n)),
    });
}

function h(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(_, u({}, e)) : (0, r.jsx)(p, u({}, e));
}
