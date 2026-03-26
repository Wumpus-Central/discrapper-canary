n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(64983),
    s = n(509536),
    o = n(498642),
    d = n(652215),
    c = n(49999),
    u = n(985018),
    A = n(98100);
class h extends a.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, s.K4)({ guildId: e.id, location: { section: d.JJy.CHANNEL_NOTICE, object: d.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, i.jsx)(r.A, {
            guild: e,
            onDismissed: () => n(c.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? u.intl.string(u.t.hlitVQ) : u.intl.string(u.t.XHtaDD),
            cta: u.intl.string(u.t["vqb+H1"]),
            trackingSource: d.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: d.n5X.GUILD_BOOSTING,
            image: A,
            imageMarginX: 26,
        });
    }
}
let _ = l.Ay.connectStores([o.A], (e) => {
    let { guild: t } = e;
    return { memberCount: o.A.getMemberCount(t.id) };
})(h);
