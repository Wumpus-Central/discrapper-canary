n.d(t, { Modal: () => m });
var r = n(54381);
n(473749);
var i = n(987153),
    a = n(144771),
    o = n(166935),
    s = n(383074),
    l = n(575118),
    c = n(880521);
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
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    var {
            size: t,
            title: n,
            subtitle: u,
            input: f,
            preview: h,
            actions: m,
            actionBarInput: g,
            actionBarInputLayout: E = "default",
            listProps: b,
            notice: y,
            onScroll: O,
            scrollerRef: v,
            children: S,
        } = e,
        I = _(e, [
            "size",
            "title",
            "subtitle",
            "input",
            "preview",
            "actions",
            "actionBarInput",
            "actionBarInputLayout",
            "listProps",
            "notice",
            "onScroll",
            "scrollerRef",
            "children",
        ]);
    let T = null != t ? t : null != f || null != g || (0, o.G)(S) || null != b ? "md" : "sm";
    return (0, r.jsxs)(
        i.I,
        p(d({}, I), {
            size: T,
            children: [
                (0, r.jsx)(l.xB, {
                    title: n,
                    subtitle: u,
                }),
                (0, r.jsx)(c.Y, {
                    message: null == y ? void 0 : y.message,
                    type: null == y ? void 0 : y.type,
                }),
                (0, r.jsx)(o.f, {
                    controls: f,
                    listProps: b,
                    onScroll: O,
                    scrollerRef: v,
                    children: S,
                }),
                (0, r.jsx)(s.m, { children: h }),
                (0, r.jsx)(a.G, {
                    leading: g,
                    leadingLayout: E,
                    actions: m,
                    actionsFullWidth: null == g,
                }),
            ],
        }),
    );
}
n(971513);
