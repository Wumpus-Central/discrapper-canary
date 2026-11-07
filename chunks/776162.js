n(321073);
var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(143129),
    a = n(331322),
    o = n(834730),
    d = n(821609),
    u = n(534514),
    c = n(866665),
    h = n(408278),
    m = n(789645),
    g = n(192308),
    p = n(934058),
    f = n(630398),
    x = n(71393),
    A = n(83880),
    E = n(302614),
    S = n(667419),
    I = n(415173),
    v = n(427589),
    j = n(312130),
    C = n(661943),
    y = n(490630),
    T = n(652215),
    b = n(361729),
    _ = n(792996),
    N = n(191850),
    w = n(255324);
let R = [
    T.uss.VOICE_V3,
    T.uss.QUICK_ACTIONS,
    T.uss.NOTIFICATIONS,
    T.uss.TEXT_CHAT_V3,
    T.uss.FRIENDS,
    T.uss.ACTIVITY,
    T.uss.VIDEO,
    T.uss.GO_LIVE,
];
function O(e) {
    let { icon: t, label: n, description: r, checked: l, onChange: a } = e;
    return (0, i.jsxs)("div", {
        className: w.nM,
        children: [
            (0, i.jsx)("div", { className: w.aL, children: t }),
            (0, i.jsx)("div", {
                className: w.L6,
                children: (0, i.jsx)(s.d, { label: n, description: r, checked: l, onChange: a }),
            }),
        ],
    });
}
function M(e) {
    let { type: t, Icon: n, label: r, description: s } = e,
        a = (0, l.bG)([A.A], () => (0, S.$e)(t, A.A), [t]);
    return (0, i.jsx)(O, {
        icon: (0, i.jsx)(n, { size: "md", color: "currentColor" }),
        label: r,
        description: s,
        checked: a,
        onChange: (e) => (0, S.JA)(t, !e),
    });
}
function D(e) {
    let { project: t } = e;
    return (0, i.jsx)(v.A, { project: t, size: 32, className: w.Z2 });
}
function k(e) {
    return (0, l.bG)([A.A], () => (0, C.$5)(e, A.A), [e]);
}
function z(e) {
    let { project: t } = e,
        n = t.application_id,
        r = k(n);
    return (0, i.jsx)(O, {
        icon: (0, i.jsx)(D, { project: t }),
        label: t.name,
        description: _.intl.string(b.default["P7TOO/"]),
        checked: !r,
        onChange: (e) => (0, C.ht)(n, !e),
    });
}
function P(e) {
    let { project: t, modalContextKey: n } = e,
        r = t.application_id,
        s = (0, l.bG)([p.A], () => p.A.isServerProjectEnabled(r), [r]),
        u = k(r),
        c = _.intl.string(b.default["S/jd3c"]);
    return s
        ? (0, i.jsx)(O, {
              icon: (0, i.jsx)(D, { project: t }),
              label: t.name,
              description: c,
              checked: !u,
              onChange: (e) => (0, y.R)(t, e, { modalContextKey: n }),
          })
        : (0, i.jsxs)("div", {
              className: w.nM,
              children: [
                  (0, i.jsx)("div", { className: w.aL, children: (0, i.jsx)(D, { project: t }) }),
                  (0, i.jsxs)(a.B, {
                      gap: 0,
                      className: w.L6,
                      children: [
                          (0, i.jsx)(o.E, {
                              variant: "body-md/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: t.name,
                          }),
                          (0, i.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: c }),
                      ],
                  }),
                  (0, i.jsx)(d.$, {
                      size: "sm",
                      variant: "primary",
                      text: _.intl.string(N.default.IHEjZ9),
                      "aria-label": _.intl.formatToPlainString(N.default["i/Jaco"], { appName: t.name }),
                      onClick: () => (0, y.default)(t, { modalContextKey: n }),
                  }),
              ],
          });
}
function V(e) {
    let { guildId: t, projects: n, modalContextKey: r } = e,
        s = (0, l.bG)([x.A], () => x.A.getGuild(t)?.name, [t]);
    return null == s
        ? null
        : (0, i.jsxs)(a.B, {
              gap: 8,
              children: [
                  (0, i.jsx)(u.D, { variant: "heading-xs/semibold", color: "text-muted", children: s }),
                  n.map((e) => (0, i.jsx)(P, { project: e, modalContextKey: r }, e.id)),
              ],
          });
}
function L(e) {
    let { projects: t, modalContextKey: n } = e,
        l = r.useMemo(() => {
            let e = new Map();
            for (let n of t) {
                if (null == n.guild_id) continue;
                let t = e.get(n.guild_id);
                null != t ? t.push(n) : e.set(n.guild_id, [n]);
            }
            return [...e];
        }, [t]);
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e) => {
            let [t, r] = e;
            return (0, i.jsx)(V, { guildId: t, projects: r, modalContextKey: n }, t);
        }),
    });
}
let G = [];
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let t,
                n,
                { onClose: s } = e,
                d = r.useMemo(
                    () =>
                        R.flatMap((e) => {
                            let t = I.A[e];
                            return t?.label != null &&
                                null != t.description &&
                                null != t.icon &&
                                (null == t.predicate || t.predicate())
                                ? [{ type: e, Icon: t.icon, label: t.label(), description: t.description() }]
                                : [];
                        }),
                    [],
                ),
                x =
                    ((0, f.A)({ refetchOnMount: !0 }),
                    (t = (0, j.H)()),
                    (n = (0, l.bG)([p.A], () => p.A.getOwnedProjects())),
                    { owned: t ? n : G, server: (0, l.bG)([p.A], () => p.A.getServerProjects()) }),
                A = _.intl.string(_.t.cpT0Cq);
            return (0, i.jsx)(E.A, {
                className: w.nd,
                children: (0, i.jsxs)("section", {
                    className: w.SV,
                    "aria-labelledby": "overlay-widgets-panel-title",
                    "data-testid": "overlay-widgets-panel",
                    children: [
                        (0, i.jsxs)(a.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            gap: 8,
                            children: [
                                (0, i.jsxs)(a.B, {
                                    gap: 4,
                                    children: [
                                        (0, i.jsx)(u.D, {
                                            id: "overlay-widgets-panel-title",
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: _.intl.string(b.default["Qk/rJB"]),
                                        }),
                                        (0, i.jsx)(o.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: _.intl.string(b.default.HUjIgu),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(c.m, {
                                    text: A,
                                    children: (0, i.jsx)(h.K, {
                                        icon: m.XSmallIcon,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": A,
                                        onClick: s,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(a.B, {
                            gap: 8,
                            children: [
                                (0, i.jsx)(u.D, {
                                    variant: "heading-xs/semibold",
                                    color: "text-muted",
                                    children: _.intl.string(_.t["/7xJCF"]),
                                }),
                                d.map((e) => {
                                    let { type: t, Icon: n, label: r, description: l } = e;
                                    return (0, i.jsx)(M, { type: t, Icon: n, label: r, description: l }, t);
                                }),
                            ],
                        }),
                        x.owned.length > 0
                            ? (0, i.jsxs)(a.B, {
                                  gap: 8,
                                  children: [
                                      (0, i.jsx)(u.D, {
                                          variant: "heading-xs/semibold",
                                          color: "text-muted",
                                          children: _.intl.string(b.default["pbu+Yx"]),
                                      }),
                                      x.owned.map((e) => (0, i.jsx)(z, { project: e }, e.id)),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(L, { projects: x.server, modalContextKey: (0, g.TI)(T.BRT.OVERLAY) }),
                    ],
                }),
            });
        },
        R: L,
        i2: z,
        t3: R,
    },
);
