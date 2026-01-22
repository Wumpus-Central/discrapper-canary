s.d(t, {
    default: () => p,
}),
    s(896048);
var i = s(627968),
    a = s(64700),
    l = s(397927),
    r = s(793574),
    n = s(688810),
    C = s(954571),
    d = s(326084),
    o = s(484217),
    c = s(353174),
    x = s(652215);
let p = (e) => {
    let t,
        { transitionState: s, onClose: p, sourceAnalyticsLocations: h } = e,
        [f, u] = a.useState(1),
        [j, _] = a.useState(new Set()),
        [m, g] = a.useState(new Map()),
        { analyticsLocations: L } = (0, n.Ay)([...h, r.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (f) {
        case 1:
            t = (0, i.jsx)(o.Ay, {
                onShare: async (e) => {
                    try {
                        C.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
                            location_stack: L,
                        });
                        let t = await (0, d.xm)(e.map((e) => e.id));
                        u(2), _(new Set(e)), g(t);
                    } catch (e) {}
                },
                onClose: p,
            });
            break;
        case 2:
            t = (0, i.jsx)(c.A, {
                selectedUsers: j,
                trialCreationResult: m,
                onClose: p,
            });
            break;
        default:
            p();
    }
    return (0, i.jsx)(l.EOs, {
        "data-migration-pending": !0,
        transitionState: s,
        parentComponent: "ReferralProgramShareModal",
        children: t,
    });
};
