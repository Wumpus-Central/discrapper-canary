var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(143129),
    a = n(331322),
    o = n(534514),
    d = n(834730),
    u = n(866665),
    c = n(408278),
    h = n(789645),
    m = n(627363),
    g = n(191827),
    p = n(522265),
    f = n(104299),
    x = n(83880),
    A = n(486020),
    E = n(302614),
    S = n(667419),
    I = n(415173),
    v = n(661943),
    j = n(652215),
    y = n(361729),
    C = n(792996),
    T = n(255324);
let b = [
    j.uss.VOICE_V3,
    j.uss.QUICK_ACTIONS,
    j.uss.NOTIFICATIONS,
    j.uss.TEXT_CHAT_V3,
    j.uss.FRIENDS,
    j.uss.ACTIVITY,
    j.uss.VIDEO,
    j.uss.GO_LIVE,
];
function _(e) {
    let { icon: t, label: n, description: r, checked: l, onChange: a } = e;
    return (0, i.jsxs)("div", {
        className: T.nM,
        children: [
            (0, i.jsx)("div", { className: T.aL, children: t }),
            (0, i.jsx)("div", {
                className: T.L6,
                children: (0, i.jsx)(s.d, { label: n, description: r, checked: l, onChange: a }),
            }),
        ],
    });
}
function w(e) {
    let { type: t, Icon: n, label: r, description: s } = e,
        a = (0, l.bG)([x.A], () => (0, S.$e)(t, x.A), [t]);
    return (0, i.jsx)(_, {
        icon: (0, i.jsx)(n, { size: "md", color: "currentColor" }),
        label: r,
        description: s,
        checked: a,
        onChange: (e) => (0, S.JA)(t, !e),
    });
}
function N(e) {
    let { project: t } = e,
        n = t.application_id,
        r = (0, l.bG)([x.A], () => (0, v.$5)(n, x.A), [n]),
        { data: s } = (0, m.YY)(n),
        a = s?.icon != null ? A.Ay.getApplicationIconURL({ id: n, icon: s.icon, size: 32 }) : null;
    return (0, i.jsx)(_, {
        icon:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: T.Z2 })
                : (0, i.jsx)(f.A, {
                      applicationId: n,
                      name: t.name,
                      glyphSize: (0, p.w)(32).glyphSize,
                      className: T.Z2,
                  }),
        label: t.name,
        description: C.intl.string(y.default["P7TOO/"]),
        checked: !r,
        onChange: (e) => (0, v.ht)(n, !e),
    });
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let t,
                n,
                { onClose: s } = e,
                m = r.useMemo(
                    () =>
                        b.flatMap((e) => {
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
                p =
                    ((t = r.useMemo(() => I.A[j.uss.CONJURE]?.predicate?.() ?? !1, [])),
                    (n = (0, l.bG)([g.A], () => g.A.getProjects())),
                    t ? n : []),
                f = C.intl.string(C.t.cpT0Cq);
            return (0, i.jsx)(E.A, {
                className: T.nd,
                children: (0, i.jsxs)("section", {
                    className: T.SV,
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
                                        (0, i.jsx)(o.D, {
                                            id: "overlay-widgets-panel-title",
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: C.intl.string(y.default["Qk/rJB"]),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: C.intl.string(y.default.HUjIgu),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(u.m, {
                                    text: f,
                                    children: (0, i.jsx)(c.K, {
                                        icon: h.P,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": f,
                                        onClick: s,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(a.B, {
                            gap: 8,
                            children: [
                                (0, i.jsx)(o.D, {
                                    variant: "heading-xs/semibold",
                                    color: "text-muted",
                                    children: C.intl.string(C.t["/7xJCF"]),
                                }),
                                m.map((e) => {
                                    let { type: t, Icon: n, label: r, description: l } = e;
                                    return (0, i.jsx)(w, { type: t, Icon: n, label: r, description: l }, t);
                                }),
                            ],
                        }),
                        p.length > 0
                            ? (0, i.jsxs)(a.B, {
                                  gap: 8,
                                  children: [
                                      (0, i.jsx)(o.D, {
                                          variant: "heading-xs/semibold",
                                          color: "text-muted",
                                          children: C.intl.string(y.default["pbu+Yx"]),
                                      }),
                                      p.map((e) => (0, i.jsx)(N, { project: e }, e.id)),
                                  ],
                              })
                            : null,
                    ],
                }),
            });
        },
        i2: N,
        t3: b,
    },
);
