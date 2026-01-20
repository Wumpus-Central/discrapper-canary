n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(710344),
    o = n(63063),
    c = n(190007),
    d = n(926958),
    u = n(641938),
    g = n(964821),
    f = n(981631),
    m = n(290511),
    b = n(388032),
    p = n(163022);
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
function x(e) {
    let { guildId: t } = e,
        x = (0, l.e7)([d.Z], () => d.Z.getEditedConnections()),
        j = (0, l.e7)([d.Z], () => d.Z.isSubmitting()),
        v = i.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e("11798").then(n.bind(n, 8656));
                return (t) => (0, r.jsx)(e, h({}, t));
            });
        }, []),
        O = i.useMemo(
            () =>
                x.map((e) => {
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
            [x],
        ),
        y = i.useCallback((e) => {
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
        { handleDragStart: C, handleDragReset: N, handleDragComplete: E, draggingId: I } = (0, s.Z)(O, y),
        { enabled: S } = u.Z.useExperiment(
            {
                guildId: t,
                location: "guild_settings",
            },
            { autoTrackExposure: !0 },
        );
    if (!S) return null;
    let _ = x.length < m.yx;
    return (0, r.jsxs)("div", {
        className: p.connectionsSection,
        children: [
            (0, r.jsxs)("div", {
                className: p.connectionsSectionHeader,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/bold",
                        children: b.intl.string(b.t.Cl8F8H),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: b.intl.format(b.t.vqgyJR, {
                            linkedRolesUrl: o.Z.getArticleURL(f.BhN.CONNECTION_DETAILS_ADMIN),
                        }),
                    }),
                    !_ &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: b.intl.format(b.t.Nc7guW, { max: m.yx }),
                        }),
                ],
            }),
            x.length > 0 &&
                (0, r.jsx)("div", {
                    className: p.connectionsList,
                    children: O.map((e, t) =>
                        (0, r.jsx)(
                            g.Z,
                            {
                                connection: e,
                                index: t,
                                onDragStart: C,
                                onDragReset: N,
                                onDragComplete: E,
                                draggingId: I,
                            },
                            e.id,
                        ),
                    ),
                }),
            (0, r.jsxs)("button", {
                className: p.addConnectionButton,
                onClick: v,
                disabled: !_ || j,
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
                        children: b.intl.string(b.t["03EqaC"]),
                    }),
                ],
            }),
        ],
    });
}
