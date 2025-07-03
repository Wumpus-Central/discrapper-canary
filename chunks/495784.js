n.d(t, { Z: () => f });
var l = n(913527),
    i = n.n(l),
    r = n(704215),
    s = n(951716),
    a = n(266454),
    o = n(605236),
    c = n(972830),
    d = n(430824),
    u = n(594174),
    m = n(374023),
    x = n(709054),
    h = n(645792),
    _ = n(981631),
    g = n(921944);
let f = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        m.s.isDisallowPopupsSet() ||
            (0, c.h)(() => {
                if ((0, s.Z)()) return;
                let e = u.default.getCurrentUser(),
                    l = null != e && 7 > i()().diff(i()(x.default.extractTimestamp(e.id)), 'days'),
                    c = null != d.Z.getGuildsArray().find((e) => e.features.has(_.oNc.HUB)),
                    m = !(0, a.zu)(r.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(l || t() || c || !m) && (0, h.b)() && (h.Z.trackExposure({ location: '8b792a_1' }), n(), (0, o.kk)(r.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, a.Q3)(r.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: g.L.AUTO });
    }
};
