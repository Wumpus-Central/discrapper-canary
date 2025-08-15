r.d(t, { default: () => h }), r(388685);
var a = r(951288),
    i = r(647438),
    s = r(481060),
    l = r(100527),
    n = r(906732),
    o = r(626135),
    C = r(281494),
    d = r(687555),
    p = r(596583),
    c = r(981631);
let h = (e) => {
    let t,
        { transitionState: r, onClose: h, sourceAnalyticsLocations: u } = e,
        [f, x] = i.useState(1),
        [_, g] = i.useState(new Set()),
        [j, L] = i.useState(new Map()),
        { analyticsLocations: m } = (0, n.ZP)([...u, l.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (f) {
        case 1:
            t = (0, a.jsx)(d.ZP, {
                onShare: async (e) => {
                    try {
                        o.default.track(c.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: m });
                        let t = await (0, C.jy)(e.map((e) => e.id));
                        x(2), g(new Set(e)), L(t);
                    } catch (e) {}
                },
                onClose: h,
            });
            break;
        case 2:
            t = (0, a.jsx)(p.Z, {
                selectedUsers: _,
                trialCreationResult: j,
                onClose: h,
            });
            break;
        default:
            h();
    }
    return (0, a.jsx)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: r,
        parentComponent: "ReferralProgramShareModal",
        children: t,
    });
};
