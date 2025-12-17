n.d(t, { Z: () => b });
var r = n(913527),
    i = n.n(r),
    l = n(704215),
    a = n(951716),
    o = n(266454),
    s = n(605236),
    c = n(972830),
    u = n(430824),
    d = n(594174),
    p = n(374023),
    f = n(709054),
    g = n(645792),
    h = n(981631),
    m = n(921944);
let b = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        p.s.isDisallowPopupsSet() ||
            (0, c.h)(() => {
                if ((0, a.Z)()) return;
                let e = d.default.getCurrentUser(),
                    r = null != e && 7 > i()().diff(i()(f.default.extractTimestamp(e.id)), "days"),
                    c = null != u.Z.getGuildsArray().find((e) => e.features.has(h.GuildFeatures.HUB)),
                    p = !(0, o.zu)(l.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(r || t() || c || !p) &&
                    (0, g.b)() &&
                    (g.Z.trackExposure({ location: "8b792a_1" }), n(), (0, s.kk)(l.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, o.Q3)(l.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: m.L.AUTO });
    },
};
