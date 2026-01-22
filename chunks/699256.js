n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(219504),
    c = n(975571),
    o = n(923121),
    d = n(352821),
    u = n(949034),
    f = n(250006),
    g = n(652215),
    b = n(539916),
    m = n(985018),
    p = n(902973);
function x(e) {
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
function h(e) {
    let { guildId: t } = e,
        h = (0, l.bG)([d.A], () => d.A.getEditedConnections()),
        j = (0, l.bG)([d.A], () => d.A.isSubmitting()),
        O = i.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                return (t) => (0, r.jsx)(e, x({}, t));
            });
        }, []),
        y = i.useMemo(
            () =>
                h.map((e) => {
                    var t, n;
                    return (
                        (t = x({}, e)),
                        (n = n = { id: (0, b.Sq)(e) }),
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
            [h],
        ),
        v = i.useCallback((e) => {
            let t = e.map((e) => {
                let { id: t } = e;
                return (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i,
                        l = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                        return l;
                    }
                    if (
                        ((l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.getOwnPropertyNames(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                            return i;
                        })(e, t)),
                        Object.getOwnPropertySymbols)
                    )
                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                    return l;
                })(e, ["id"]);
            });
            (0, o.Bq)(t);
        }, []),
        { handleDragStart: A, handleDragReset: E, handleDragComplete: N, draggingId: _ } = (0, a.A)(y, v),
        { enabled: S } = u.A.useExperiment(
            {
                guildId: t,
                location: "guild_settings",
            },
            { autoTrackExposure: !0 },
        );
    if (!S) return null;
    let T = h.length < b.pA;
    return (0, r.jsxs)("div", {
        className: p.jx,
        children: [
            (0, r.jsxs)("div", {
                className: p.G6,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        children: m.intl.string(m.t.Cl8F8H),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: m.intl.format(m.t.vqgyJR, {
                            linkedRolesUrl: c.A.getArticleURL(g.MVz.CONNECTION_DETAILS_ADMIN),
                        }),
                    }),
                    !T &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: m.intl.format(m.t.Nc7guW, { max: b.pA }),
                        }),
                ],
            }),
            h.length > 0 &&
                (0, r.jsx)("div", {
                    className: p.eF,
                    children: y.map((e, t) =>
                        (0, r.jsx)(
                            f.A,
                            {
                                connection: e,
                                index: t,
                                onDragStart: A,
                                onDragReset: E,
                                onDragComplete: N,
                                draggingId: _,
                            },
                            e.id,
                        ),
                    ),
                }),
            (0, r.jsxs)("button", {
                className: p.qG,
                onClick: O,
                disabled: !T || j,
                type: "button",
                children: [
                    (0, r.jsx)(s.U1e, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/semibold",
                        color: "text-brand",
                        children: m.intl.string(m.t["03EqaC"]),
                    }),
                ],
            }),
        ],
    });
}
