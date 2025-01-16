r.r(t),
    r.d(t, {
        Steps: function () {
            return s;
        }
    }),
    r(47120);
var s,
    i,
    a = r(200651),
    n = r(192379),
    l = r(481060),
    C = r(100527),
    o = r(906732),
    d = r(626135),
    c = r(281494),
    x = r(687555),
    f = r(596583),
    h = r(981631);
((i = s || (s = {}))[(i.SELECT_FRIENDS = 1)] = 'SELECT_FRIENDS'), (i[(i.CONFIRMATION = 2)] = 'CONFIRMATION');
t.default = (e) => {
    let t,
        { transitionState: r, onClose: s, sourceAnalyticsLocations: i } = e,
        [p, u] = n.useState(1),
        [m, _] = n.useState(new Set()),
        [j, g] = n.useState(new Map()),
        { analyticsLocations: L } = (0, o.ZP)([...i, C.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (p) {
        case 1:
            t = (0, a.jsx)(x.Z, {
                onShare: async (e) => {
                    try {
                        d.default.track(h.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, c.jy)(e.map((e) => e.id));
                        u(2), _(new Set(e)), g(t);
                    } catch {}
                },
                onClose: s
            });
            break;
        case 2:
            t = (0, a.jsx)(f.Z, {
                selectedUsers: m,
                trialCreationResult: j,
                onClose: s
            });
            break;
        default:
            s();
    }
    return (0, a.jsx)(l.ModalRoot, {
        transitionState: r,
        children: t
    });
};
