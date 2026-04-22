a.d(t, { A: () => C });
var n = a(627968),
    l = a(64700),
    i = a(331322),
    s = a(834730),
    r = a(404778),
    o = a(939249),
    d = a(821609),
    c = a(573613),
    u = a(534514),
    m = a(311907),
    h = a(292666),
    p = a(382483),
    x = a(385113),
    g = a(315117);
function v(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, n.jsxs)(i.B, {
        gap: 8,
        padding: 8,
        className: g.lt,
        children: [
            (0, n.jsx)(s.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, n.jsxs)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, n.jsxs)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, n.jsxs)(s.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, n.jsxs)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, n.jsxs)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, n.jsx)(r.c, {}),
            (0, n.jsxs)(s.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, n.jsx)(s.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, n.jsxs)(
                          i.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: g.YL,
                              children: [
                                  (0, n.jsx)(s.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, n.jsxs)(s.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ["Layout: ", a.layout],
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
        ],
    });
}
function b(e) {
    let { config: t, isSelected: a, onSelect: l } = e;
    return (0, n.jsxs)(i.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? g.FM : g.gt,
        children: [
            (0, n.jsx)(o.D, {
                className: g.Av,
                onClick: l,
                children: (0, n.jsxs)(i.B, {
                    gap: 4,
                    children: [
                        (0, n.jsx)(s.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, n.jsxs)(s.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, p.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function _() {
    let e = (0, m.bG)([x.A], () => x.A.getFeaturedFetchState());
    return (0, n.jsxs)(i.B, {
        gap: 8,
        children: [
            (0, n.jsxs)(i.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, n.jsxs)(s.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, n.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, p.Wq)({ force: !0 }),
            }),
        ],
    });
}
function f() {
    let e = (0, m.bG)([x.A], () => x.A.getDeveloperFetchState());
    return (0, n.jsxs)(i.B, {
        gap: 8,
        children: [
            (0, n.jsxs)(i.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, n.jsxs)(s.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, n.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, p.i$)({ force: !0 }),
            }),
        ],
    });
}
function j() {
    let [e, t] = l.useState(""),
        a = (0, m.bG)([x.A], () => (e.length > 0 ? x.A.getFetchState(e) : null)),
        r = (0, m.bG)([x.A], () => (e.length > 0 ? x.A.getConfigs(e) : null));
    return (0, n.jsxs)(i.B, {
        gap: 8,
        children: [
            (0, n.jsx)(s.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, n.jsx)(h.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, n.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, p.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, n.jsxs)(s.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != r &&
                r.length > 0 &&
                (0, n.jsx)(i.B, { gap: 4, children: r.map((e) => (0, n.jsx)(v, { config: e }, e.config_id)) }),
        ],
    });
}
function A(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: l } = e,
        r = (0, m.bG)([x.A], () => x.A.getFeaturedFetchState());
    return (0, n.jsxs)(i.B, {
        gap: 8,
        children: [
            (0, n.jsxs)(s.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            r === x.e.FETCHING &&
                (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, n.jsx)(
                    b,
                    {
                        config: e,
                        isSelected: a === e.config_id,
                        onSelect: () => l(a === e.config_id ? null : e.config_id),
                    },
                    e.config_id,
                ),
            ),
        ],
    });
}
function y(e) {
    let { config: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.c, {}),
            (0, n.jsxs)(i.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(s.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, n.jsx)(v, { config: t }),
                ],
            }),
        ],
    });
}
function C() {
    let [e, t] = l.useState(null),
        a = Object.values((0, m.bG)([x.A], () => x.A.getAllConfigsByApplication())).flat(),
        s = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, n.jsx)(c.Ar, {
        children: (0, n.jsxs)(i.B, {
            gap: 16,
            padding: 8,
            className: g.zr,
            children: [
                (0, n.jsx)(u.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, n.jsx)(_, {}),
                (0, n.jsx)(r.c, {}),
                (0, n.jsx)(f, {}),
                (0, n.jsx)(r.c, {}),
                (0, n.jsx)(j, {}),
                (0, n.jsx)(r.c, {}),
                (0, n.jsx)(A, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != s && (0, n.jsx)(y, { config: s }),
            ],
        }),
    });
}
