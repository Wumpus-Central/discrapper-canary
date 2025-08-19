i.d(t, { default: () => c }), i(388685);
var r = i(951288),
    C = i(647438),
    s = i(481060),
    a = i(100527),
    l = i(906732),
    n = i(626135),
    o = i(281494),
    d = i(687555),
    p = i(596583),
    x = i(981631);
let c = (e) => {
    let t,
        { transitionState: i, onClose: c, sourceAnalyticsLocations: f } = e,
        [h, _] = C.useState(1),
        [u, j] = C.useState(new Set()),
        [L, m] = C.useState(new Map()),
        { analyticsLocations: y } = (0, l.ZP)([...f, a.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (h) {
        case 1:
            t = (0, r.jsx)(d.ZP, {
                onShare: async (e) => {
                    try {
                        n.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: y });
                        let t = await (0, o.jy)(e.map((e) => e.id));
                        _(2), j(new Set(e)), m(t);
                    } catch (e) {}
                },
                onClose: c,
            });
            break;
        case 2:
            t = (0, r.jsx)(p.Z, {
                selectedUsers: u,
                trialCreationResult: L,
                onClose: c,
            });
            break;
        default:
            c();
    }
    return (0, r.jsx)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: i,
        parentComponent: "ReferralProgramShareModal",
        children: t,
    });
};
