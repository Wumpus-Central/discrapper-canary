n.d(t, { A: () => g });
var i = n(989349),
    r = n.n(i),
    a = n(554146),
    l = n(45143),
    s = n(826673),
    o = n(367727),
    d = n(507263),
    c = n(71393),
    u = n(287809),
    A = n(536194),
    h = n(661191),
    _ = n(664531),
    m = n(652215),
    p = n(49999);
let g = {
    init(e) {
        let { hasModalOpen: t, openModal: n } = e;
        A.P.isDisallowPopupsSet() ||
            (0, d.B)(() => {
                if ((0, l.A)()) return;
                let e = u.default.getCurrentUser(),
                    i = null != e && 7 > r()().diff(r()(h.default.extractTimestamp(e.id)), "days"),
                    d = null != c.A.getGuildsArray().find((e) => e.features.has(m.GuildFeatures.HUB)),
                    A = !(0, s.k8)(a.M.HUB_BACK_TO_SCHOOL_UPSELL);
                !(i || t() || d || !A) &&
                    (0, _.a)() &&
                    (_.A.trackExposure({ location: "8b792a_1" }), n(), (0, o.Vh)(a.M.HUB_BACK_TO_SCHOOL_UPSELL));
            });
    },
    hideHubUpsell() {
        (0, s.Dr)(a.M.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: p.i.AUTO });
    },
};
