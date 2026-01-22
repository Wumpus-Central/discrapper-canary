n.d(t, {
    $n: () => m,
    Ay: () => g,
    wv: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(331215);
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
    let { className: t } = e;
    return (0, r.jsx)("div", { className: s()(t, l.me) });
}
let m = i.forwardRef(function (e, t) {
        let [n, ...i] = [e, t],
            {
                onClick: a,
                onContextMenu: c,
                className: d,
                selected: _ = !1,
                children: h,
                disabled: m = !1,
                dangerous: g,
            } = n,
            E = p(n, ["onClick", "onContextMenu", "className", "selected", "children", "disabled", "dangerous"]),
            [b] = i;
        return (0, r.jsx)(
            o.DUT,
            f(
                u(
                    {
                        innerRef: b,
                        onClick: m ? void 0 : a,
                        onContextMenu: m ? void 0 : c,
                        className: s()(d, {
                            [l.x6]: !0,
                            [l.wH]: _,
                            [l.r9]: m,
                            [l.lv]: g,
                        }),
                    },
                    E,
                ),
                { children: h },
            ),
        );
    }),
    g = function (e) {
        let { className: t, children: n } = e,
            i = p(e, ["className", "children"]);
        return (0, r.jsx)("div", f(u({ className: s()(t, l.iE) }, i), { children: n }));
    };
