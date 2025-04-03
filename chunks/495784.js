n.d(t, { Z: () => _ });
var l = n(913527),
    r = n.n(l),
    i = n(704215),
    s = n(951716),
    a = n(605236),
    o = n(972830),
    c = n(430824),
    d = n(594174),
    u = n(374023),
    m = n(709054),
    N = n(645792),
    x = n(981631),
    h = n(921944);
let _ = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        u.s.isDisallowPopupsSet() ||
            (0, o.h)(() => {
                if ((0, s.Z)()) return;
                let e = d.default.getCurrentUser(),
                    l = null != e && 7 > r()().diff(r()(m.default.extractTimestamp(e.id)), 'days'),
                    o = null != Object.values(c.Z.getGuilds()).find((e) => e.hasFeature(x.oNc.HUB)),
                    u = !(0, a.un)(i.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(l || t() || o || !u) && (0, N.b)() && (N.Z.trackExposure({ location: '8b792a_1' }), n(), (0, a.kk)(i.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, a.EW)(i.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: h.L.AUTO });
    }
};
