r.d(t, { default: () => f }), r(228524);
var n = r(627968),
    i = r(64700),
    l = r(158954),
    c = r(397927),
    o = r(748112),
    a = r(997509),
    s = r(179690),
    d = r(167084),
    u = r(584508),
    b = r(652215),
    p = r(985018);
function h(e) {
    let { eligibility: t, eligibilityLoading: r, eligibilityError: l, guildId: p, onEligibilityBecameStale: h } = e,
        f = i.useMemo(
            () => ({
                onEligibilityBecameStale: h,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: s.Ay.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, c.OoC)(u.m), a.A.open(p, b.BEX.SAFETY, void 0, b.nd0.SAFETY_PERMISSIONS);
                    },
                },
            }),
            [p, h],
        ),
        y = (0, o.A)(t, f);
    return null != l
        ? (0, n.jsx)("div", {
              children: (0, n.jsx)(c.wx6, {
                  type: "critical",
                  children: l.message,
              }),
          })
        : null == y || r
          ? (0, n.jsx)("div", { children: (0, n.jsx)(c.y$y, {}) })
          : (0, n.jsx)("div", {
                children: y.map((e, t) =>
                    (0, n.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, n.jsx)(d.e, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler,
                                }),
                                t < y.length - 1 ? (0, n.jsx)(c.cGx, {}) : null,
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
        eligibilityLoading: r,
        eligibilityError: i,
        refreshEligibility: o,
        guildId: a,
        transitionState: s,
    } = e;
    return (0, n.jsx)(l.Modal, {
        transitionState: s,
        title: p.intl.string(p.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, c.OoC)(u.m);
        },
        children: (0, n.jsx)(h, {
            eligibility: t,
            eligibilityLoading: r,
            eligibilityError: i,
            guildId: a,
            onEligibilityBecameStale: o,
        }),
    });
}
