i.d(t, { default: () => f }), i(953529);
var n = i(54381),
    r = i(473749),
    c = i(793030),
    l = i(481060),
    o = i(651711),
    s = i(434404),
    a = i(202858),
    d = i(400842),
    h = i(271267),
    u = i(981631),
    b = i(388032);
function p(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: c, guildId: b, onEligibilityBecameStale: p } = e,
        f = r.useMemo(
            () => ({
                onEligibilityBecameStale: p,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: a.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, l.Mr3)(h.Q), s.Z.open(b, u.pNK.SAFETY, void 0, u.KsC.SAFETY_PERMISSIONS);
                    },
                },
            }),
            [b, p],
        ),
        j = (0, o.Z)(t, f);
    return null != c
        ? (0, n.jsx)("div", {
              children: (0, n.jsx)(l.M14, {
                  type: "critical",
                  children: c.message,
              }),
          })
        : null == j || i
          ? (0, n.jsx)("div", { children: (0, n.jsx)(l.$jN, {}) })
          : (0, n.jsx)("div", {
                children: j.map((e, t) =>
                    (0, n.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                (0, n.jsx)(d.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                t < j.length - 1 ? (0, n.jsx)(l.izJ, {}) : null,
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
        title: b.intl.string(b.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, l.Mr3)(h.Q);
        },
        children: (0, n.jsx)(p, {
            eligibility: t,
            eligibilityLoading: i,
            eligibilityError: r,
            guildId: s,
            onEligibilityBecameStale: o,
        }),
    });
}
