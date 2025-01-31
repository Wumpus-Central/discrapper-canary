r.d(t, { default: () => h }), r(47120);
var a = r(200651),
    s = r(192379),
    i = r(481060),
    n = r(100527),
    l = r(906732),
    C = r(626135),
    o = r(281494),
    d = r(687555),
    c = r(596583),
    x = r(981631);
let h = (e) => {
    let t,
        { transitionState: r, onClose: h, sourceAnalyticsLocations: p } = e,
        [f, u] = s.useState(1),
        [m, _] = s.useState(new Set()),
        [j, g] = s.useState(new Map()),
        { analyticsLocations: L } = (0, l.ZP)([...p, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (f) {
        case 1:
            t = (0, a.jsx)(d.Z, {
                onShare: async (e) => {
                    try {
                        C.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, o.jy)(e.map((e) => e.id));
                        u(2), _(new Set(e)), g(t);
                    } catch {}
                },
                onClose: h
            });
            break;
        case 2:
            t = (0, a.jsx)(c.Z, {
                selectedUsers: m,
                trialCreationResult: j,
                onClose: h
            });
            break;
        default:
            h();
    }
    return (0, a.jsx)(i.Y0X, {
        transitionState: r,
        children: t
    });
};
