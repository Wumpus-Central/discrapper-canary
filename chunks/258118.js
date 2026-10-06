l.d(i, { default: () => y });
var s = l(477900),
    a = l(582128),
    n = l(189213),
    t = l(192308),
    c = l(683071),
    d = l(289873),
    r = l(404778),
    o = l(178315),
    h = l(468689),
    u = l(466034),
    x = l(503698),
    j = l.n(x),
    m = l(661531),
    g = l(285796),
    v = l(297264),
    C = l(834730),
    b = l(821609),
    p = l(953727);
function A(e) {
    let {
        width: i = 24,
        height: l = 24,
        color: a = m.A.unsafe_rawColors.WHITE.css,
        backgroundColor: n = m.A.unsafe_rawColors.BRAND_500.css,
        ...t
    } = e;
    return (0, s.jsxs)("svg", {
        ...(0, p.A)(t),
        width: i,
        height: l,
        viewBox: "0 0 14 14",
        children: [
            (0, s.jsx)("path", {
                fill: n,
                d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, s.jsx)("path", { d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z", fill: a }),
        ],
    });
}
var k = l(375708),
    f = l(916423);
function E(e) {
    let { name: i, description: l, checked: a, actionLabel: n, actionHandler: t } = e,
        c = null;
    return (
        (c = a
            ? (0, s.jsx)(A, { width: 20, height: 20 })
            : (0, s.jsx)(g.a, { size: "custom", color: m.A.colors.ICON_FEEDBACK_CRITICAL, width: 20, height: 20 })),
        (0, s.jsxs)("div", {
            className: f.gd,
            children: [
                (0, s.jsx)("div", { className: f.aV, children: c }),
                (0, s.jsxs)("div", {
                    className: j()(f.__invalid_checklistText, a && f.lu),
                    children: [
                        (0, s.jsx)(v.D, { variant: "heading-md/semibold", className: f.LA, children: i }),
                        (0, s.jsx)(C.E, { color: "interactive-text-default", variant: "text-sm/normal", children: l }),
                    ],
                }),
                null != n &&
                    (0, s.jsx)("div", {
                        className: f.dT,
                        children: (0, s.jsx)(b.$, { variant: "primary", onClick: t, text: n, size: "sm" }),
                    }),
            ],
        })
    );
}
l(848887);
var M = l(413611),
    _ = l(652215);
function w(e) {
    let { eligibility: i, eligibilityLoading: l, eligibilityError: n, guildId: x, onEligibilityBecameStale: j } = e,
        m = a.useMemo(
            () => ({
                onEligibilityBecameStale: j,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: u.Ay.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        ((0, t.closeModal)(M.m), h.default.open(x, _.BEX.SAFETY, void 0, _.nd0.SAFETY_PERMISSIONS));
                    },
                },
            }),
            [x, j],
        ),
        g = (0, o.A)(i, m);
    return null != n
        ? (0, s.jsx)("div", { children: (0, s.jsx)(c.w, { type: "critical", message: n.message, role: "alert" }) })
        : null == g || l
          ? (0, s.jsx)("div", { children: (0, s.jsx)(d.y, {}) })
          : (0, s.jsx)("div", {
                children: g.map((e, i) =>
                    (0, s.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                (0, s.jsx)(E, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                i < g.length - 1 ? (0, s.jsx)(r.c, {}) : null,
                            ],
                        },
                        e.checkedLabel,
                    ),
                ),
            });
}
function y(e) {
    let {
        eligibility: i,
        eligibilityLoading: l,
        eligibilityError: a,
        refreshEligibility: c,
        guildId: d,
        transitionState: r,
    } = e;
    return (0, s.jsx)(n.a, {
        transitionState: r,
        title: k.intl.string(k.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, t.closeModal)(M.m);
        },
        children: (0, s.jsx)(w, {
            eligibility: i,
            eligibilityLoading: l,
            eligibilityError: a,
            guildId: d,
            onEligibilityBecameStale: c,
        }),
    });
}
