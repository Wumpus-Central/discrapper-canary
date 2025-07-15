(r.d(t, { default: () => p }), r(388685));
var a = r(255367),
    s = r(73800),
    i = r(481060),
    n = r(100527),
    l = r(906732),
    o = r(626135),
    d = r(281494),
    C = r(687555),
    c = r(596583),
    u = r(981631);
let p = (e) => {
    let t,
        { transitionState: r, onClose: p, sourceAnalyticsLocations: h } = e,
        [f, x] = s.useState(1),
        [g, m] = s.useState(new Set()),
        [_, j] = s.useState(new Map()),
        { analyticsLocations: y } = (0, l.ZP)([...h, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (f) {
        case 1:
            t = (0, a.jsx)(C.Z, {
                onShare: async (e) => {
                    try {
                        o.default.track(u.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: y });
                        let t = await (0, d.jy)(e.map((e) => e.id));
                        (x(2), m(new Set(e)), j(t));
                    } catch (e) {}
                },
                onClose: p
            });
            break;
        case 2:
            t = (0, a.jsx)(c.Z, {
                selectedUsers: g,
                trialCreationResult: _,
                onClose: p
            });
            break;
        default:
            p();
    }
    return (0, a.jsx)(i.Y0X, {
        transitionState: r,
        parentComponent: 'ReferralProgramShareModal',
        children: t
    });
};
