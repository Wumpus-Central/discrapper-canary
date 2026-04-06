n.d(t, { A: () => f });
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(311907),
    r = n(397927),
    o = n(382483),
    d = n(385113),
    c = n(526845);
function u(e) {
    let { config: t } = e,
        n = Object.entries(t.surfaces ?? {});
    return (0, a.jsxs)(s.BJc, {
        gap: 8,
        padding: 8,
        className: c.lt,
        children: [
            (0, a.jsx)(s.EYj, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, a.jsxs)(s.EYj, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, a.jsxs)(s.EYj, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, a.jsxs)(s.EYj, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, a.jsxs)(s.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, a.jsxs)(s.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, a.jsx)(s.cGx, {}),
            (0, a.jsxs)(s.EYj, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", n.length, ")"],
            }),
            0 === n.length
                ? (0, a.jsx)(s.EYj, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : n.map((e) => {
                      let [t, n] = e;
                      return (0, a.jsxs)(
                          s.BJc,
                          {
                              gap: 4,
                              padding: 4,
                              className: c.YL,
                              children: [
                                  (0, a.jsx)(s.EYj, {
                                      variant: "text-xs/semibold",
                                      color: "text-default",
                                      children: t,
                                  }),
                                  (0, a.jsxs)(s.EYj, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ["Layout: ", n.layout],
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
        ],
    });
}
function m(e) {
    let { config: t, isSelected: n, onSelect: i } = e;
    return (0, a.jsxs)(s.BJc, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: n ? c.FM : c.gt,
        children: [
            (0, a.jsx)(s.DUT, {
                className: c.Av,
                onClick: i,
                children: (0, a.jsxs)(s.BJc, {
                    gap: 4,
                    children: [
                        (0, a.jsx)(s.EYj, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: t.display_name,
                        }),
                        (0, a.jsxs)(s.EYj, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(s.$nd, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, o.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function h() {
    let e = (0, l.bG)([d.A], () => d.A.getFeaturedFetchState());
    return (0, a.jsxs)(s.BJc, {
        gap: 8,
        children: [
            (0, a.jsxs)(s.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, a.jsx)(s.EYj, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, a.jsxs)(s.EYj, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, a.jsx)(s.$nd, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, o.Wq)({ force: !0 }),
            }),
        ],
    });
}
function x() {
    let e = (0, l.bG)([d.A], () => d.A.getDeveloperFetchState());
    return (0, a.jsxs)(s.BJc, {
        gap: 8,
        children: [
            (0, a.jsxs)(s.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, a.jsx)(s.EYj, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, a.jsxs)(s.EYj, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, a.jsx)(s.$nd, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, o.i$)({ force: !0 }),
            }),
        ],
    });
}
function p() {
    let [e, t] = i.useState(""),
        n = (0, l.bG)([d.A], () => (e.length > 0 ? d.A.getFetchState(e) : null)),
        c = (0, l.bG)([d.A], () => (e.length > 0 ? d.A.getConfigs(e) : null));
    return (0, a.jsxs)(s.BJc, {
        gap: 8,
        children: [
            (0, a.jsx)(s.EYj, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: "Fetch by Application ID",
            }),
            (0, a.jsx)(r.ksK, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, a.jsx)(s.$nd, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, o.un)(e, { force: !0 }),
            }),
            null != n &&
                (0, a.jsxs)(s.EYj, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", n] }),
            null != c &&
                c.length > 0 &&
                (0, a.jsx)(s.BJc, { gap: 4, children: c.map((e) => (0, a.jsx)(u, { config: e }, e.config_id)) }),
        ],
    });
}
function g(e) {
    let { configs: t, selectedConfigId: n, onSelectConfig: i } = e,
        r = (0, l.bG)([d.A], () => d.A.getFeaturedFetchState());
    return (0, a.jsxs)(s.BJc, {
        gap: 8,
        children: [
            (0, a.jsxs)(s.EYj, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            r === d.e.FETCHING &&
                (0, a.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, a.jsx)(
                    m,
                    {
                        config: e,
                        isSelected: n === e.config_id,
                        onSelect: () => i(n === e.config_id ? null : e.config_id),
                    },
                    e.config_id,
                ),
            ),
        ],
    });
}
function _(e) {
    let { config: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.cGx, {}),
            (0, a.jsxs)(s.BJc, {
                gap: 8,
                children: [
                    (0, a.jsx)(s.EYj, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Config Details",
                    }),
                    (0, a.jsx)(u, { config: t }),
                ],
            }),
        ],
    });
}
function f() {
    let [e, t] = i.useState(null),
        n = Object.values((0, l.bG)([d.A], () => d.A.getAllConfigsByApplication())).flat(),
        r = null != e ? n.find((t) => t.config_id === e) : null;
    return (0, a.jsx)(s.ArX, {
        children: (0, a.jsxs)(s.BJc, {
            gap: 16,
            padding: 8,
            className: c.zr,
            children: [
                (0, a.jsx)(s.DZT, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, a.jsx)(h, {}),
                (0, a.jsx)(s.cGx, {}),
                (0, a.jsx)(x, {}),
                (0, a.jsx)(s.cGx, {}),
                (0, a.jsx)(p, {}),
                (0, a.jsx)(s.cGx, {}),
                (0, a.jsx)(g, { configs: n, selectedConfigId: e, onSelectConfig: t }),
                null != r && (0, a.jsx)(_, { config: r }),
            ],
        }),
    });
}
