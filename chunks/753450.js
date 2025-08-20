n.d(t, { Q: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(375316),
    o = n(267603),
    s = n(993365),
    l = n(481060),
    c = n(636280);
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
function _(e, t) {
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
function p(e, t) {
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
    var { label: t, layout: n } = e,
        i = p(e, ["label", "layout"]);
    return (0, r.jsx)(
        a.Vp,
        _(
            d(
                {
                    className: c.tag,
                    textValue: t,
                },
                i,
            ),
            {
                children: (e) => {
                    let { allowsRemoving: i } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.x, {
                                variant: "inline" === n ? "text-sm/normal" : "text-md/normal",
                                children: t,
                            }),
                            i &&
                                (0, r.jsx)(o.z, {
                                    slot: "remove",
                                    children: (0, r.jsx)(l.Dio, {
                                        size: "inline" === n ? "xs" : "sm",
                                        color: l.TVs.colors.ICON_DEFAULT,
                                    }),
                                }),
                        ],
                    });
                },
            },
        ),
    );
}
function g(e) {
    let { label: t, selectionMode: n = "none", layout: o = "default", items: s, onRemove: l, children: u } = e,
        [d, f] = i.useState(() => new Set());
    return (0, r.jsxs)(a.QS, {
        "aria-label": t,
        "data-layout": o,
        className: c.tagGroup,
        selectionMode: n,
        selectedKeys: d,
        onSelectionChange: f,
        onRemove: l,
        children: [
            (0, r.jsx)(a.PS, {
                items: s,
                className: c.tagList,
                children: (e) =>
                    (0, r.jsx)(
                        m,
                        {
                            id: e.id,
                            label: e.label,
                            layout: o,
                        },
                        e.id,
                    ),
            }),
            u,
        ],
    });
}
