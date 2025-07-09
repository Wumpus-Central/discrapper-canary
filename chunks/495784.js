n.d(t, { Z: () => f });
var l = n(913527),
    i = n.n(l),
    r = n(704215),
    a = n(951716),
    s = n(266454),
    o = n(605236),
    c = n(972830),
    d = n(430824),
    u = n(594174),
    m = n(374023),
    h = n(709054),
    x = n(645792),
    _ = n(981631),
    g = n(921944);
let f = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        m.s.isDisallowPopupsSet() ||
            (0, c.h)(() => {
                if ((0, a.Z)()) return;
                let e = u.default.getCurrentUser(),
                    l = null != e && 7 > i()().diff(i()(h.default.extractTimestamp(e.id)), 'days'),
                    c = null != d.Z.getGuildsArray().find((e) => e.features.has(_.oNc.HUB)),
                    m = !(0, s.zu)(r.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(l || t() || c || !m) && (0, x.b)() && (x.Z.trackExposure({ location: '8b792a_1' }), n(), (0, o.kk)(r.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, s.Q3)(r.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: g.L.AUTO });
    }
};
