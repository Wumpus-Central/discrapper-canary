l.d(i, { default: () => b });
var a = l(627968),
    t = l(64700),
    n = l(189213),
    s = l(192308),
    c = l(683071),
    r = l(289873),
    d = l(404778),
    o = l(748112),
    h = l(997509),
    u = l(407186),
    x = l(167084),
    m = l(584508),
    v = l(652215),
    j = l(985018);
function A(e) {
    let { eligibility: i, eligibilityLoading: l, eligibilityError: n, guildId: j, onEligibilityBecameStale: A } = e,
        b = t.useMemo(
            () => ({
                onEligibilityBecameStale: A,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: u.Ay.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, s.closeModal)(m.m), h.A.open(j, v.BEX.SAFETY, void 0, v.nd0.SAFETY_PERMISSIONS);
                    },
                },
            }),
            [j, A],
        ),
        g = (0, o.A)(i, b);
    return null != n
        ? (0, a.jsx)("div", { children: (0, a.jsx)(c.w, { type: "critical", children: n.message }) })
        : null == g || l
          ? (0, a.jsx)("div", { children: (0, a.jsx)(r.y, {}) })
          : (0, a.jsx)("div", {
                children: g.map((e, i) =>
                    (0, a.jsxs)(
                        t.Fragment,
                        {
                            children: [
                                (0, a.jsx)(x.e, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                i < g.length - 1 ? (0, a.jsx)(d.c, {}) : null,
                            ],
                        },
                        e.checkedLabel,
                    ),
                ),
            });
}
function b(e) {
    let {
        eligibility: i,
        eligibilityLoading: l,
        eligibilityError: t,
        refreshEligibility: c,
        guildId: r,
        transitionState: d,
    } = e;
    return (0, a.jsx)(n.Modal, {
        transitionState: d,
        title: j.intl.string(j.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, s.closeModal)(m.m);
        },
        children: (0, a.jsx)(A, {
            eligibility: i,
            eligibilityLoading: l,
            eligibilityError: t,
            guildId: r,
            onEligibilityBecameStale: c,
        }),
    });
}
