(n.d(t, { default: () => y }), n(953529));
var r = n(255367),
    i = n(73800),
    c = n(82659),
    l = n(481060),
    o = n(651711),
    s = n(434404),
    a = n(202858),
    u = n(587431),
    b = n(400842),
    d = n(271267),
    h = n(981631),
    p = n(388032);
function f(e) {
    let { eligibility: t, eligibilityLoading: n, eligibilityError: c, guildId: p, onEligibilityBecameStale: f } = e,
        y = i.useMemo(
            () => ({
                onEligibilityBecameStale: f,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: a.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        ((0, l.Mr3)(d.Q), s.Z.open(p, h.pNK.SAFETY, void 0, h.KsC.SAFETY_PERMISSIONS));
                    }
                }
            }),
            [p, f]
        ),
        j = (0, o.Z)(t, y);
    return null != c
        ? (0, r.jsx)('div', { children: (0, r.jsx)(u.Z, { children: c.message }) })
        : null == j || n
          ? (0, r.jsx)('div', { children: (0, r.jsx)(l.$jN, {}) })
          : (0, r.jsx)('div', {
                children: j.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(b.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler
                                }),
                                t < j.length - 1 ? (0, r.jsx)(l.$i$, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function y(e) {
    let { eligibility: t, eligibilityLoading: n, eligibilityError: i, refreshEligibility: o, guildId: s, transitionState: a } = e;
    return (0, r.jsx)(c.Modal, {
        transitionState: a,
        title: p.intl.string(p.t['3s47iI']),
        actions: [],
        onClose: async () => {
            await (0, l.Mr3)(d.Q);
        },
        children: (0, r.jsx)(f, {
            eligibility: t,
            eligibilityLoading: n,
            eligibilityError: i,
            guildId: s,
            onEligibilityBecameStale: o
        })
    });
}
