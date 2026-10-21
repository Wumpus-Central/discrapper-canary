n.d(t, { Ay: () => _, i2: () => N, t3: () => y });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(193249),
    a = n(323384),
    o = n(331322),
    d = n(297264),
    u = n(834730),
    c = n(866665),
    h = n(408278),
    m = n(789645),
    g = n(627363),
    p = n(114994),
    f = n(32584),
    x = n(486020),
    A = n(302614),
    E = n(667419),
    S = n(85395),
    I = n(661943),
    v = n(652215),
    j = n(671210),
    C = n(105292),
    T = n(255324);
let y = [
    v.uss.VOICE_V3,
    v.uss.QUICK_ACTIONS,
    v.uss.NOTIFICATIONS,
    v.uss.TEXT_CHAT_V3,
    v.uss.FRIENDS,
    v.uss.ACTIVITY,
    v.uss.VIDEO,
    v.uss.GO_LIVE,
];
function b(e) {
    let { icon: t, label: n, description: l, checked: r, onChange: a } = e;
    return (0, i.jsxs)("div", {
        className: T.nM,
        children: [
            (0, i.jsx)("div", { className: T.aL, children: t }),
            (0, i.jsx)("div", {
                className: T.L6,
                children: (0, i.jsx)(s.d, { label: n, description: l, checked: r, onChange: a }),
            }),
        ],
    });
}
function w(e) {
    let { type: t, Icon: n, label: l, description: s } = e,
        a = (0, r.bG)([f.A], () => (0, E.$e)(t, f.A), [t]);
    return (0, i.jsx)(b, {
        icon: (0, i.jsx)(n, { size: "md", color: "currentColor" }),
        label: l,
        description: s,
        checked: a,
        onChange: (e) => (0, E.JA)(t, !e),
    });
}
function N(e) {
    let { project: t } = e,
        n = t.application_id,
        l = (0, r.bG)([f.A], () => (0, I.$5)(n, f.A), [n]),
        { data: s } = (0, g.YY)(n),
        o = null != s ? x.Ay.getApplicationIconURL({ id: n, icon: s.icon, size: 32 }) : null;
    return (0, i.jsx)(b, {
        icon:
            null != o
                ? (0, i.jsx)("img", { src: o, alt: "", className: T.Z2 })
                : (0, i.jsx)(a.k, { size: "md", color: "currentColor" }),
        label: t.name,
        description: C.intl.string(j.default["P7TOO/"]),
        checked: !l,
        onChange: (e) => (0, I.ht)(n, !e),
    });
}
function _(e) {
    let t,
        n,
        { onClose: s } = e,
        a = l.useMemo(
            () =>
                y.flatMap((e) => {
                    let t = S.A[e];
                    return t?.label != null &&
                        null != t.description &&
                        null != t.icon &&
                        (null == t.predicate || t.predicate())
                        ? [{ type: e, Icon: t.icon, label: t.label(), description: t.description() }]
                        : [];
                }),
            [],
        ),
        g =
            ((t = l.useMemo(() => S.A[v.uss.CONJURE]?.predicate?.() ?? !1, [])),
            (n = (0, r.bG)([p.A], () => p.A.getProjects())),
            t ? n : []),
        f = C.intl.string(C.t.cpT0Cq);
    return (0, i.jsx)(A.A, {
        className: T.nd,
        children: (0, i.jsxs)("section", {
            className: T.SV,
            "aria-labelledby": "overlay-widgets-panel-title",
            "data-testid": "overlay-widgets-panel",
            children: [
                (0, i.jsxs)(o.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "start",
                    gap: 8,
                    children: [
                        (0, i.jsxs)(o.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(d.D, {
                                    id: "overlay-widgets-panel-title",
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: C.intl.string(j.default["Qk/rJB"]),
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: C.intl.string(j.default.HUjIgu),
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.m, {
                            text: f,
                            children: (0, i.jsx)(h.K, {
                                icon: m.P,
                                variant: "icon-only",
                                size: "sm",
                                "aria-label": f,
                                onClick: s,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(o.B, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(d.D, {
                            variant: "heading-sm/semibold",
                            color: "text-muted",
                            children: C.intl.string(C.t["/7xJCF"]),
                        }),
                        a.map((e) => {
                            let { type: t, Icon: n, label: l, description: r } = e;
                            return (0, i.jsx)(w, { type: t, Icon: n, label: l, description: r }, t);
                        }),
                    ],
                }),
                g.length > 0
                    ? (0, i.jsxs)(o.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(d.D, {
                                  variant: "heading-sm/semibold",
                                  color: "text-muted",
                                  children: C.intl.string(j.default["pbu+Yx"]),
                              }),
                              g.map((e) => (0, i.jsx)(N, { project: e }, e.id)),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
