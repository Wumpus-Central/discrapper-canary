n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(554146),
    a = n(192308),
    l = n(73153),
    s = n(272355),
    o = n(826673),
    d = n(367727),
    u = n(498642),
    c = n(71393),
    A = n(576705),
    h = n(853742),
    _ = n(652215),
    E = n(49999);
class p extends s.A {
    _initialize() {
        l.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    _terminate() {
        l.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        let t,
            l,
            s,
            p,
            m,
            { guildId: g } = e;
        if (
            null == g ||
            ((t = c.A.getGuild(g)),
            (l = !!t?.features.has(_.GuildFeatures.COMMUNITY)),
            (s = A.A.can(_.xBc.MANAGE_CHANNELS, t)),
            (p = (0, o.k8)(r.M.FORUM_CHANNEL_UPSELL_MODAL)),
            (m = u.A.getMemberCount(g) ?? 0),
            !l || !s || p || !(m >= 200))
        )
            return;
        (0, h.zd)(), (0, d.Vh)(r.M.FORUM_CHANNEL_UPSELL_MODAL);
        let I = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.i.DISMISS;
            (0, o.Dr)(r.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("7937"), n.e("43051")]).then(n.bind(n, 420472));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onClose: (e) => {
                            I(e), t.onClose();
                        },
                        guildId: g,
                        shouldUpsellCreation: !0,
                    });
            },
            {
                onCloseCallback: () => (0, o.Dr)(r.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: E.i.DISMISS }),
                onCloseRequest: _.FXj,
            },
        );
    }
}
let m = new p();
