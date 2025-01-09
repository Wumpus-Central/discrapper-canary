n.d(t, {
    P: function () {
        return c;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(594174),
    o = n(981631);
function c(e) {
    let t = (null == e ? void 0 : e.hasFeature(o.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === !0,
        c = (null == e ? void 0 : e.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
        d = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        u = (null == e ? void 0 : e.isOwner(d)) === !0;
    r.useEffect(() => {
        null != e &&
            t &&
            u &&
            (0, s.openModalLazy)(async () => {
                let { default: t } = await n.e('710').then(n.bind(n, 32342));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: e.id,
                        requireTeamSetup: c
                    });
            });
    }, [t, c, e, u]);
}
