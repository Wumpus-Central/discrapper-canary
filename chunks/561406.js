l.d(i, { default: () => v });
var t = l(627968),
    n = l(64700),
    a = l(158954),
    s = l(397927),
    c = l(748112),
    r = l(997509),
    d = l(179690),
    o = l(167084),
    h = l(584508),
    u = l(652215),
    x = l(985018);
function m(e) {
    let { eligibility: i, eligibilityLoading: l, eligibilityError: a, guildId: x, onEligibilityBecameStale: m } = e,
        v = n.useMemo(
            () => ({
                onEligibilityBecameStale: m,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: d.Ay.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, s.OoC)(h.m), r.A.open(x, u.BEX.SAFETY, void 0, u.nd0.SAFETY_PERMISSIONS);
                    },
                },
            }),
            [x, m],
        ),
        j = (0, c.A)(i, v);
    return null != a
        ? (0, t.jsx)("div", { children: (0, t.jsx)(s.wx6, { type: "critical", children: a.message }) })
        : null == j || l
          ? (0, t.jsx)("div", { children: (0, t.jsx)(s.y$y, {}) })
          : (0, t.jsx)("div", {
                children: j.map((e, i) =>
                    (0, t.jsxs)(
                        n.Fragment,
                        {
                            children: [
                                (0, t.jsx)(o.e, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                i < j.length - 1 ? (0, t.jsx)(s.cGx, {}) : null,
                            ],
                        },
                        e.checkedLabel,
                    ),
                ),
            });
}
function v(e) {
    let {
        eligibility: i,
        eligibilityLoading: l,
        eligibilityError: n,
        refreshEligibility: c,
        guildId: r,
        transitionState: d,
    } = e;
    return (0, t.jsx)(a.Modal, {
        transitionState: d,
        title: x.intl.string(x.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, s.OoC)(h.m);
        },
        children: (0, t.jsx)(m, {
            eligibility: i,
            eligibilityLoading: l,
            eligibilityError: n,
            guildId: r,
            onEligibilityBecameStale: c,
        }),
    });
}
