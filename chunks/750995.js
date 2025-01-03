var i = n(200651);
n(192379);
var r = n(704215),
    l = n(481060),
    a = n(570140),
    s = n(317770),
    o = n(605236),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    h = n(228392),
    m = n(981631),
    p = n(921944);
let g = (e) => {
    var t;
    let n = d.Z.getGuild(e),
        i = !!(null == n ? void 0 : n.hasFeature(m.oNc.COMMUNITY)),
        l = u.Z.can(m.Plq.MANAGE_CHANNELS, n),
        a = (0, o.un)(r.z.FORUM_CHANNEL_UPSELL_MODAL),
        s = null !== (t = c.Z.getMemberCount(e)) && void 0 !== t ? t : 0;
    return i && l && !a && s >= 200;
};
class f extends s.Z {
    _initialize() {
        a.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect);
    }
    _terminate() {
        a.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null == t || !g(t)) return;
        (0, h.qz)(), (0, o.kk)(r.z.FORUM_CHANNEL_UPSELL_MODAL);
        let a = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.L.DISMISS;
            (0, o.EW)(r.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        onClose: (e) => {
                            a(e), n.onClose();
                        },
                        guildId: t,
                        shouldUpsellCreation: !0
                    });
            },
            {
                onCloseCallback: () => (0, o.EW)(r.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: p.L.DISMISS }),
                onCloseRequest: m.VqG
            }
        );
    }
}
t.Z = new f();
