l.d(i, { default: () => y });
var s = l(627968),
    n = l(64700),
    a = l(189213),
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
    v = l(285796),
    g = l(297264),
    A = l(834730),
    C = l(821609),
    b = l(953727);
function p(e) {
    let {
        width: i = 24,
        height: l = 24,
        color: n = m.A.unsafe_rawColors.WHITE.css,
        backgroundColor: a = m.A.unsafe_rawColors.BRAND_500.css,
        ...t
    } = e;
    return (0, s.jsxs)("svg", {
        ...(0, b.A)(t),
        width: i,
        height: l,
        viewBox: "0 0 14 14",
        children: [
            (0, s.jsx)("path", {
                fill: a,
                d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, s.jsx)("path", { d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z", fill: n }),
        ],
    });
}
var k = l(375708),
    M = l(487160);
function E(e) {
    let { name: i, description: l, checked: n, actionLabel: a, actionHandler: t } = e,
        c = null;
    return (
        (c = n
            ? (0, s.jsx)(p, { width: 20, height: 20 })
            : (0, s.jsx)(v.a, { size: "custom", color: m.A.colors.ICON_FEEDBACK_CRITICAL, width: 20, height: 20 })),
        (0, s.jsxs)("div", {
            className: M.gd,
            children: [
                (0, s.jsx)("div", { className: M.aV, children: c }),
                (0, s.jsxs)("div", {
                    className: j()(M.__invalid_checklistText, n && M.lu),
                    children: [
                        (0, s.jsx)(g.D, { variant: "heading-md/semibold", className: M.LA, children: i }),
                        (0, s.jsx)(A.E, { color: "interactive-text-default", variant: "text-sm/normal", children: l }),
                    ],
                }),
                null != a &&
                    (0, s.jsx)("div", {
                        className: M.dT,
                        children: (0, s.jsx)(C.$, { variant: "primary", onClick: t, text: a, size: "sm" }),
                    }),
            ],
        })
    );
}
l(848887);
var _ = l(413611),
    f = l(652215);
function w(e) {
    let { eligibility: i, eligibilityLoading: l, eligibilityError: a, guildId: x, onEligibilityBecameStale: j } = e,
        m = n.useMemo(
            () => ({
                onEligibilityBecameStale: j,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: u.Ay.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, t.closeModal)(_.m), h.A.open(x, f.BEX.SAFETY, void 0, f.nd0.SAFETY_PERMISSIONS);
                    },
                },
            }),
            [x, j],
        ),
        v = (0, o.A)(i, m);
    return null != a
        ? (0, s.jsx)("div", { children: (0, s.jsx)(c.w, { type: "critical", children: a.message }) })
        : null == v || l
          ? (0, s.jsx)("div", { children: (0, s.jsx)(d.y, {}) })
          : (0, s.jsx)("div", {
                children: v.map((e, i) =>
                    (0, s.jsxs)(
                        n.Fragment,
                        {
                            children: [
                                (0, s.jsx)(E, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                i < v.length - 1 ? (0, s.jsx)(r.c, {}) : null,
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
        eligibilityError: n,
        refreshEligibility: c,
        guildId: d,
        transitionState: r,
    } = e;
    return (0, s.jsx)(a.Modal, {
        transitionState: r,
        title: k.intl.string(k.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, t.closeModal)(_.m);
        },
        children: (0, s.jsx)(w, {
            eligibility: i,
            eligibilityLoading: l,
            eligibilityError: n,
            guildId: d,
            onEligibilityBecameStale: c,
        }),
    });
}
