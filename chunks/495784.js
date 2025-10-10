n.d(t, { Z: () => v });
var r = n(913527),
    l = n.n(r),
    i = n(704215),
    a = n(951716),
    s = n(266454),
    o = n(605236),
    c = n(972830),
    d = n(430824),
    u = n(594174),
    m = n(374023),
    f = n(709054),
    p = n(645792),
    h = n(981631),
    g = n(921944);
let v = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        m.s.isDisallowPopupsSet() ||
            (0, c.h)(() => {
                if ((0, a.Z)()) return;
                let e = u.default.getCurrentUser(),
                    r = null != e && 7 > l()().diff(l()(f.default.extractTimestamp(e.id)), "days"),
                    c = null != d.Z.getGuildsArray().find((e) => e.features.has(h.oNc.HUB)),
                    m = !(0, s.zu)(i.z.HUB_BACK_TO_SCHOOL_UPSELL);
                !(r || t() || c || !m) &&
                    (0, p.b)() &&
                    (p.Z.trackExposure({ location: "8b792a_1" }), n(), (0, o.kk)(i.z.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, s.Q3)(i.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: g.L.AUTO });
    },
};
