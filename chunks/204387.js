r.d(t, { default: () => p }), r(388685);
var a = r(54381),
    i = r(473749),
    s = r(481060),
    n = r(100527),
    l = r(906732),
    o = r(626135),
    C = r(281494),
    d = r(687555),
    c = r(258104),
    x = r(981631);
let p = (e) => {
    let t,
        { transitionState: r, onClose: p, sourceAnalyticsLocations: f } = e,
        [h, u] = i.useState(1),
        [m, j] = i.useState(new Set()),
        [_, g] = i.useState(new Map()),
        { analyticsLocations: L } = (0, l.ZP)([...f, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (h) {
        case 1:
            t = (0, a.jsx)(d.ZP, {
                onShare: async (e) => {
                    try {
                        o.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, C.jy)(e.map((e) => e.id));
                        u(2), j(new Set(e)), g(t);
                    } catch (e) {}
                },
                onClose: p,
            });
            break;
        case 2:
            t = (0, a.jsx)(c.Z, {
                selectedUsers: m,
                trialCreationResult: _,
                onClose: p,
            });
            break;
        default:
            p();
    }
    return (0, a.jsx)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: r,
        parentComponent: "ReferralProgramShareModal",
        children: t,
    });
};
