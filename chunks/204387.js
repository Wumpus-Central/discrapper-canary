t.d(r, { default: () => x }), t(388685);
var a = t(255367),
    i = t(73800),
    C = t(481060),
    s = t(100527),
    l = t(906732),
    n = t(626135),
    o = t(281494),
    d = t(687555),
    p = t(596583),
    c = t(981631);
let x = (e) => {
    let r,
        { transitionState: t, onClose: x, sourceAnalyticsLocations: f } = e,
        [_, h] = i.useState(1),
        [u, j] = i.useState(new Set()),
        [L, m] = i.useState(new Map()),
        { analyticsLocations: y } = (0, l.ZP)([...f, s.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (_) {
        case 1:
            r = (0, a.jsx)(d.ZP, {
                onShare: async (e) => {
                    try {
                        n.default.track(c.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: y });
                        let r = await (0, o.jy)(e.map((e) => e.id));
                        h(2), j(new Set(e)), m(r);
                    } catch (e) {}
                },
                onClose: x,
            });
            break;
        case 2:
            r = (0, a.jsx)(p.Z, {
                selectedUsers: u,
                trialCreationResult: L,
                onClose: x,
            });
            break;
        default:
            x();
    }
    return (0, a.jsx)(C.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        parentComponent: "ReferralProgramShareModal",
        children: r,
    });
};
