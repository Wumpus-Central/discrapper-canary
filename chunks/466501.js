i.d(t, { default: () => f }), i(953529);
var n = i(951288),
    r = i(647438),
    c = i(793030),
    l = i(481060),
    o = i(651711),
    s = i(434404),
    a = i(202858),
    d = i(587431),
    h = i(400842),
    u = i(271267),
    b = i(981631),
    p = i(388032);
function j(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: c, guildId: p, onEligibilityBecameStale: j } = e,
        f = r.useMemo(
            () => ({
                onEligibilityBecameStale: j,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: a.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, l.Mr3)(u.Q), s.Z.open(p, b.pNK.SAFETY, void 0, b.KsC.SAFETY_PERMISSIONS);
                    },
                },
            }),
            [p, j],
        ),
        g = (0, o.Z)(t, f);
    return null != c
        ? (0, n.jsx)("div", { children: (0, n.jsx)(d.Z, { children: c.message }) })
        : null == g || i
          ? (0, n.jsx)("div", { children: (0, n.jsx)(l.$jN, {}) })
          : (0, n.jsx)("div", {
                children: g.map((e, t) =>
                    (0, n.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                (0, n.jsx)(h.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                t < g.length - 1 ? (0, n.jsx)(l.izJ, {}) : null,
                            ],
                        },
                        e.checkedLabel,
                    ),
                ),
            });
}
function f(e) {
    let {
        eligibility: t,
        eligibilityLoading: i,
        eligibilityError: r,
        refreshEligibility: o,
        guildId: s,
        transitionState: a,
    } = e;
    return (0, n.jsx)(c.Modal, {
        transitionState: a,
        title: p.intl.string(p.t["3s47iI"]),
        actions: [],
        onClose: async () => {
            await (0, l.Mr3)(u.Q);
        },
        children: (0, n.jsx)(j, {
            eligibility: t,
            eligibilityLoading: i,
            eligibilityError: r,
            guildId: s,
            onEligibilityBecameStale: o,
        }),
    });
}
