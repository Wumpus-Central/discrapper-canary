n.d(t, {
    $: () => y,
    f: () => O,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    l = n(397927),
    c = n(726249),
    u = n(540999),
    d = n(652215),
    f = n(985018),
    p = n(105199);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
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
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function y(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    (0, c.HU)({ location: f.intl.string(f.t["3S2494"]) });
    let s = (0, o.bG)([u.A], () => u.A.isDeveloper) ? "92px" : void 0;
    return (0, r.jsx)(l.NPJ, {
        theme: d.NJ8.DARK,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(e, p.Y, i),
                style: { marginBottom: s },
                children:
                    !0 === n
                        ? t
                        : (0, r.jsx)("div", {
                              className: p.Q,
                              children: t,
                          }),
            }),
    });
}
function O(e) {
    var t, n;
    let { hideHeader: i } = e,
        a = E(e, ["hideHeader"]);
    return (0, r.jsxs)(
        s.dWK,
        g(h({}, a), {
            onClose: () => {
                var e;
                return Promise.resolve(null == (e = a.onClose) ? void 0 : e.call(a));
            },
            children: [
                i
                    ? null
                    : (0, r.jsx)(s.rQ0, {
                          title: null != (t = a.title) ? t : "",
                          subtitle: a.subtitle,
                      }),
                (0, r.jsx)(s.cwr, {
                    controls: a.input,
                    children: a.children,
                }),
                (0, r.jsx)(s.jlY, { children: a.preview }),
                (0, r.jsx)(s.H7u, {
                    leading: a.actionBarInput,
                    actions: null != (n = a.actions) ? n : [],
                    actionsFullWidth: null == a.actionBarInput,
                }),
            ],
        }),
    );
}
