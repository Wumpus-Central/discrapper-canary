n.d(t, { Q: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(375316),
    o = n(891958),
    s = n(636280);
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
function f(e) {
    let {
            label: t,
            disabledKeys: n,
            selectionMode: l = "none",
            layout: u = "default",
            items: f,
            onRemove: _,
            children: p,
        } = e,
        [h, m] = i.useState(() => new Set());
    return (0, r.jsxs)(a.QS, {
        "aria-label": t,
        "data-layout": u,
        className: s.tagGroup,
        selectionMode: l,
        selectedKeys: h,
        onSelectionChange: m,
        disabledKeys: n,
        onRemove: _,
        children: [
            (0, r.jsx)(a.PS, {
                className: s.tagList,
                children: f.map((e) =>
                    (0, i.createElement)(
                        o.V,
                        d(c({}, e), {
                            key: e.id,
                            layout: u,
                        }),
                    ),
                ),
            }),
            p,
        ],
    });
}
