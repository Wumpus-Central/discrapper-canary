n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(710344),
    o = n(63063),
    c = n(190007),
    d = n(926958),
    u = n(964821),
    g = n(981631),
    m = n(290511),
    p = n(388032),
    f = n(407810);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b() {
    let e = (0, l.e7)([d.Z], () => d.Z.getEditedConnections()),
        t = (0, l.e7)([d.Z], () => d.Z.isSubmitting()),
        b = i.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e("11798").then(n.bind(n, 8656));
                return (t) => (0, r.jsx)(e, h({}, t));
            });
        }, []),
        x = i.useMemo(
            () =>
                e.map((e) => {
                    var t, n;
                    return (
                        (t = h({}, e)),
                        (n = n = { id: (0, m.a4)(e) }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t
                    );
                }),
            [e],
        ),
        j = i.useCallback((e) => {
            let t = e.map((e) => {
                var { id: t } = e;
                return (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(e, ["id"]);
            });
            (0, c.l_)(t);
        }, []),
        { handleDragStart: _, handleDragReset: v, handleDragComplete: O, draggingId: C } = (0, s.Z)(x, j),
        y = e.length < m.yx;
    return (0, r.jsxs)("div", {
        className: f.connectionsSection,
        children: [
            (0, r.jsxs)("div", {
                className: f.connectionsSectionHeader,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/bold",
                        children: p.intl.string(p.t.Cl8F8H),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        children: p.intl.format(p.t.vqgyJR, {
                            linkedRolesUrl: o.Z.getArticleURL(g.BhN.CONNECTION_DETAILS_ADMIN),
                        }),
                    }),
                    !y &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: p.intl.format(p.t.Nc7guW, { max: m.yx }),
                        }),
                ],
            }),
            e.length > 0 &&
                (0, r.jsx)("div", {
                    className: f.connectionsList,
                    children: x.map((e, t) =>
                        (0, r.jsx)(
                            u.Z,
                            {
                                connection: e,
                                index: t,
                                onDragStart: _,
                                onDragReset: v,
                                onDragComplete: O,
                                draggingId: C,
                            },
                            e.id,
                        ),
                    ),
                }),
            (0, r.jsxs)("button", {
                className: f.addConnectionButton,
                onClick: b,
                disabled: !y || t,
                type: "button",
                children: [
                    (0, r.jsx)(a.oFk, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "text-brand",
                        children: p.intl.string(p.t["03EqaC"]),
                    }),
                ],
            }),
        ],
    });
}
