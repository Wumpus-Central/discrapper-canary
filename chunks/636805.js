n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(554146),
    a = n(397927),
    l = n(73153),
    s = n(272355),
    o = n(826673),
    d = n(367727),
    c = n(498642),
    u = n(71393),
    A = n(576705),
    h = n(853742),
    _ = n(652215),
    m = n(49999);
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
            g,
            { guildId: E } = e;
        if (
            null == E ||
            ((t = u.A.getGuild(E)),
            (l = !!t?.features.has(_.GuildFeatures.COMMUNITY)),
            (s = A.A.can(_.xBc.MANAGE_CHANNELS, t)),
            (p = (0, o.k8)(r.M.FORUM_CHANNEL_UPSELL_MODAL)),
            (g = c.A.getMemberCount(E) ?? 0),
            !l || !s || p || !(g >= 200))
        )
            return;
        (0, h.zd)(), (0, d.Vh)(r.M.FORUM_CHANNEL_UPSELL_MODAL);
        let f = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.i.DISMISS;
            (0, o.Dr)(r.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, a.mMO)(
            async () => {
                let { default: e } = await n.e("7937").then(n.bind(n, 420472));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onClose: (e) => {
                            f(e), t.onClose();
                        },
                        guildId: E,
                        shouldUpsellCreation: !0,
                    });
            },
            {
                onCloseCallback: () => (0, o.Dr)(r.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: m.i.DISMISS }),
                onCloseRequest: _.FXj,
            },
        );
    }
}
let g = new p();
