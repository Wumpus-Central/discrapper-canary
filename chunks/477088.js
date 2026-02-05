s.d(t, { default: () => h });
var i = s(627968),
    a = s(64700),
    r = s(397927),
    l = s(793574),
    n = s(688810),
    C = s(954571),
    d = s(326084),
    o = s(484217),
    c = s(353174),
    x = s(652215);
let h = (e) => {
    let t,
        { transitionState: s, onClose: h, sourceAnalyticsLocations: p } = e,
        [f, _] = a.useState(1),
        [u, j] = a.useState(new Set()),
        [m, g] = a.useState(new Map()),
        { analyticsLocations: L } = (0, n.Ay)([...p, l.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (f) {
        case 1:
            t = (0, i.jsx)(o.Ay, {
                onShare: async (e) => {
                    try {
                        C.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, d.xm)(e.map((e) => e.id));
                        _(2), j(new Set(e)), g(t);
                    } catch {}
                },
                onClose: h,
            });
            break;
        case 2:
            t = (0, i.jsx)(c.A, { selectedUsers: u, trialCreationResult: m, onClose: h });
            break;
        default:
            h();
    }
    return (0, i.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: s,
        parentComponent: "ReferralProgramShareModal",
        children: t,
    });
};
