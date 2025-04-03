r.d(t, { default: () => f }), r(47120);
var a = r(200651),
    s = r(192379),
    i = r(481060),
    n = r(100527),
    l = r(906732),
    o = r(626135),
    C = r(281494),
    d = r(687555),
    c = r(596583),
    x = r(981631);
let f = (e) => {
    let t,
        { transitionState: r, onClose: f, sourceAnalyticsLocations: p } = e,
        [u, h] = s.useState(1),
        [m, j] = s.useState(new Set()),
        [_, g] = s.useState(new Map()),
        { analyticsLocations: L } = (0, l.ZP)([...p, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (u) {
        case 1:
            t = (0, a.jsx)(d.Z, {
                onShare: async (e) => {
                    try {
                        o.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, C.jy)(e.map((e) => e.id));
                        h(2), j(new Set(e)), g(t);
                    } catch (e) {}
                },
                onClose: f
            });
            break;
        case 2:
            t = (0, a.jsx)(c.Z, {
                selectedUsers: m,
                trialCreationResult: _,
                onClose: f
            });
            break;
        default:
            f();
    }
    return (0, a.jsx)(i.Y0X, {
        transitionState: r,
        children: t
    });
};
