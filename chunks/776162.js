n.d(t, { Ay: () => R, i2: () => N, t3: () => _ });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(193249),
    a = n(331322),
    o = n(297264),
    d = n(834730),
    u = n(866665),
    c = n(408278),
    h = n(789645),
    m = n(627363),
    g = n(114994),
    p = n(522265),
    f = n(649045),
    x = n(32584),
    A = n(486020),
    E = n(302614),
    S = n(667419),
    I = n(81684),
    v = n(661943),
    j = n(652215),
    C = n(254821),
    T = n(105292),
    y = n(255324);
let _ = [
    j.uss.VOICE_V3,
    j.uss.QUICK_ACTIONS,
    j.uss.NOTIFICATIONS,
    j.uss.TEXT_CHAT_V3,
    j.uss.FRIENDS,
    j.uss.ACTIVITY,
    j.uss.VIDEO,
    j.uss.GO_LIVE,
];
function b(e) {
    let { icon: t, label: n, description: r, checked: l, onChange: a } = e;
    return (0, i.jsxs)("div", {
        className: y.nM,
        children: [
            (0, i.jsx)("div", { className: y.aL, children: t }),
            (0, i.jsx)("div", {
                className: y.L6,
                children: (0, i.jsx)(s.d, { label: n, description: r, checked: l, onChange: a }),
            }),
        ],
    });
}
function w(e) {
    let { type: t, Icon: n, label: r, description: s } = e,
        a = (0, l.bG)([x.A], () => (0, S.$e)(t, x.A), [t]);
    return (0, i.jsx)(b, {
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
    return (0, i.jsx)(b, {
        icon:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: y.Z2 })
                : (0, i.jsx)(f.A, {
                      applicationId: n,
                      name: t.name,
                      glyphSize: (0, p.w)(32).glyphSize,
                      className: y.Z2,
                  }),
        label: t.name,
        description: T.intl.string(C.default["P7TOO/"]),
        checked: !r,
        onChange: (e) => (0, v.ht)(n, !e),
    });
}
function R(e) {
    let t,
        n,
        { onClose: s } = e,
        m = r.useMemo(
            () =>
                _.flatMap((e) => {
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
        f = T.intl.string(T.t.cpT0Cq);
    return (0, i.jsx)(E.A, {
        className: y.nd,
        children: (0, i.jsxs)("section", {
            className: y.SV,
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
                                    children: T.intl.string(C.default["Qk/rJB"]),
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: T.intl.string(C.default.HUjIgu),
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
                            variant: "heading-sm/semibold",
                            color: "text-muted",
                            children: T.intl.string(T.t["/7xJCF"]),
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
                                  variant: "heading-sm/semibold",
                                  color: "text-muted",
                                  children: T.intl.string(C.default["pbu+Yx"]),
                              }),
                              p.map((e) => (0, i.jsx)(N, { project: e }, e.id)),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
