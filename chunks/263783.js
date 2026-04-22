s.d(t, { default: () => h });
var i = s(627968),
    r = s(64700),
    a = s(935462),
    l = s(793574),
    n = s(688810),
    C = s(954571),
    d = s(326084),
    o = s(995572),
    c = s(606865),
    x = s(652215);
let h = (e) => {
    let t,
        { transitionState: s, onClose: h, sourceAnalyticsLocations: p } = e,
        [_, f] = r.useState(1),
        [u, j] = r.useState(new Set()),
        [m, g] = r.useState(new Map()),
        { analyticsLocations: L } = (0, n.Ay)([...p, l.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (_) {
        case 1:
            t = (0, i.jsx)(o.Ay, {
                onShare: async (e) => {
                    try {
                        C.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, d.xm)(e.map((e) => e.id));
                        f(2), j(new Set(e)), g(t);
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
    return (0, i.jsx)(a.EO, {
        "data-migration-pending": !0,
        transitionState: s,
        parentComponent: "ReferralProgramShareModal",
        children: t,
    });
};
