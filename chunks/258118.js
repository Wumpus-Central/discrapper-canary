l.d(i, { default: () => L });
var n = l(627968),
    a = l(64700),
    t = l(189213),
    s = l(192308),
    c = l(683071),
    d = l(289873),
    r = l(404778),
    o = l(178315),
    h = l(997509),
    u = l(407186),
    x = l(503698),
    m = l.n(x),
    j = l(661531),
    b = l(285796),
    g = l(534514),
    v = l(834730),
    A = l(821609),
    _ = l(953727);
function C(e) {
    let {
        width: i = 24,
        height: l = 24,
        color: a = j.A.unsafe_rawColors.WHITE.css,
        backgroundColor: t = j.A.unsafe_rawColors.BRAND_500.css,
        ...s
    } = e;
    return (0, n.jsxs)("svg", {
        ...(0, _.A)(s),
        width: i,
        height: l,
        viewBox: "0 0 14 14",
        children: [
            (0, n.jsx)("path", {
                fill: t,
                d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, n.jsx)("path", { d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z", fill: a }),
        ],
    });
}
var p = l(985018),
    k = l(487160);
l(848887);
let y = (e) => {
    let { name: i, description: l, checked: a, actionLabel: t, actionHandler: s } = e,
        c = null;
    return (
        (c = a
            ? (0, n.jsx)(C, { width: 20, height: 20 })
            : (0, n.jsx)(b.a, { size: "custom", color: j.A.colors.ICON_FEEDBACK_CRITICAL, width: 20, height: 20 })),
        (0, n.jsxs)("div", {
            className: k.gd,
            children: [
                (0, n.jsx)("div", { className: k.aV, children: c }),
                (0, n.jsxs)("div", {
                    className: m()(k.__invalid_checklistText, a && k.lu),
                    children: [
                        (0, n.jsx)(g.D, { variant: "heading-md/semibold", className: k.LA, children: i }),
                        (0, n.jsx)(v.E, { color: "interactive-text-default", variant: "text-sm/normal", children: l }),
                    ],
                }),
                null != t &&
                    (0, n.jsx)("div", {
                        className: k.dT,
                        children: (0, n.jsx)(A.$, { variant: "primary", onClick: s, text: t, size: "sm" }),
                    }),
            ],
        })
    );
};
var w = l(413611),
    M = l(652215);
function f(e) {
    let { eligibility: i, eligibilityLoading: l, eligibilityError: t, guildId: x, onEligibilityBecameStale: m } = e,
        j = a.useMemo(
            () => ({
                onEligibilityBecameStale: m,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: u.Ay.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, s.closeModal)(w.m), h.A.open(x, M.BEX.SAFETY, void 0, M.nd0.SAFETY_PERMISSIONS);
                    },
                },
            }),
            [x, m],
        ),
        b = (0, o.A)(i, j);
    return null != t
        ? (0, n.jsx)("div", { children: (0, n.jsx)(c.w, { type: "critical", children: t.message }) })
        : null == b || l
          ? (0, n.jsx)("div", { children: (0, n.jsx)(d.y, {}) })
          : (0, n.jsx)("div", {
                children: b.map((e, i) =>
                    (0, n.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                (0, n.jsx)(y, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                i < b.length - 1 ? (0, n.jsx)(r.c, {}) : null,
                            ],
                        },
                        e.checkedLabel,
                    ),
                ),
            });
}
function L(e) {
    let {
        eligibility: i,
        eligibilityLoading: l,
        eligibilityError: a,
        refreshEligibility: c,
        guildId: d,
        transitionState: r,
    } = e;
    return (0, n.jsx)(t.Modal, {
        transitionState: r,
        title: p.intl.string(p.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, s.closeModal)(w.m);
        },
        children: (0, n.jsx)(f, {
            eligibility: i,
            eligibilityLoading: l,
            eligibilityError: a,
            guildId: d,
            onEligibilityBecameStale: c,
        }),
    });
}
