n.d(t, { Z: () => g });
var l = n(913527),
    i = n.n(l),
    r = n(704215),
    s = n(951716),
    a = n(605236),
    o = n(972830),
    c = n(430824),
    d = n(594174),
    u = n(374023),
    m = n(709054),
    x = n(645792),
    h = n(981631),
    _ = n(921944);
let g = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        u.s.isDisallowPopupsSet() ||
            (0, o.h)(() => {
                if ((0, s.Z)()) return;
                let e = d.default.getCurrentUser(),
                    l = null != e && 7 > i()().diff(i()(m.default.extractTimestamp(e.id)), 'days'),
                    o = null != Object.values(c.Z.getGuilds()).find((e) => e.hasFeature(h.oNc.HUB)),
                    u = !(0, a.un)(r.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(l || t() || o || !u) && (0, x.b)() && (x.Z.trackExposure({ location: '8b792a_1' }), n(), (0, a.kk)(r.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, a.EW)(r.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: _.L.AUTO });
    }
};
