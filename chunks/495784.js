n.d(t, { Z: () => N });
var l = n(913527),
    i = n.n(l),
    s = n(704215),
    a = n(951716),
    r = n(605236),
    o = n(972830),
    c = n(430824),
    d = n(594174),
    u = n(374023),
    m = n(709054),
    x = n(645792),
    h = n(981631),
    v = n(921944);
let N = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        !u.s.isDisallowPopupsSet() &&
            (0, o.h)(() => {
                if ((0, a.Z)()) return;
                let e = d.default.getCurrentUser(),
                    l = null != e && 7 > i()().diff(i()(m.default.extractTimestamp(e.id)), 'days'),
                    o = null != Object.values(c.Z.getGuilds()).find((e) => e.hasFeature(h.oNc.HUB)),
                    u = !(0, r.un)(s.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(l || t() || o || !u) && (0, x.b)() && (x.Z.trackExposure({ location: '8b792a_1' }), n(), (0, r.kk)(s.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, r.EW)(s.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: v.L.AUTO });
    }
};
