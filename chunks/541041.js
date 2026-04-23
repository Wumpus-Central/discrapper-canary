n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(926466),
    s = n(509536),
    o = n(498642),
    d = n(652215),
    u = n(49999),
    c = n(985018),
    A = n(98100);
class h extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, s.K4)({ guildId: e.id, location: { section: d.JJy.CHANNEL_NOTICE, object: d.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, i.jsx)(l.A, {
            guild: e,
            onDismissed: () => n(u.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? c.intl.string(c.t.hlitVQ) : c.intl.string(c.t.XHtaDD),
            cta: c.intl.string(c.t["vqb+H1"]),
            trackingSource: d.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: d.n5X.GUILD_BOOSTING,
            image: A,
            imageMarginX: 26,
        });
    }
}
let _ = a.Ay.connectStores([o.A], (e) => {
    let { guild: t } = e;
    return { memberCount: o.A.getMemberCount(t.id) };
})(h);
