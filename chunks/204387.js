a.d(t, { default: () => p }), a(388685);
var r = a(54381),
    i = a(473749),
    s = a(481060),
    n = a(100527),
    l = a(906732),
    d = a(626135),
    o = a(281494),
    C = a(687555),
    c = a(596583),
    x = a(981631);
let p = (e) => {
    let t,
        { transitionState: a, onClose: p, sourceAnalyticsLocations: f } = e,
        [h, u] = i.useState(1),
        [j, m] = i.useState(new Set()),
        [_, g] = i.useState(new Map()),
        { analyticsLocations: L } = (0, l.ZP)([...f, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (h) {
        case 1:
            t = (0, r.jsx)(C.ZP, {
                onShare: async (e) => {
                    try {
                        d.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, o.jy)(e.map((e) => e.id));
                        u(2), m(new Set(e)), g(t);
                    } catch (e) {}
                },
                onClose: p,
            });
            break;
        case 2:
            t = (0, r.jsx)(c.Z, {
                selectedUsers: j,
                trialCreationResult: _,
                onClose: p,
            });
            break;
        default:
            p();
    }
    return (0, r.jsx)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: a,
        parentComponent: "ReferralProgramShareModal",
        children: t,
    });
};
