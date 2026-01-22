n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(64983),
    s = n(509536),
    o = n(498642),
    c = n(652215),
    u = n(49999),
    d = n(985018),
    p = n(98100);
class f extends i.PureComponent {
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, r.jsx)(a.A, {
            guild: e,
            onDismissed: () => n(u.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? d.intl.string(d.t.hlitVQ) : d.intl.string(d.t.XHtaDD),
            cta: d.intl.string(d.t["vqb+H1"]),
            trackingSource: c.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: c.n5X.GUILD_BOOSTING,
            image: p,
            imageMarginX: 26,
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleButtonClick", () => {
                let { guild: e } = this.props;
                (0, s.K)({
                    guildId: e.id,
                    location: {
                        section: c.JJy.CHANNEL_NOTICE,
                        object: c.ZSU.SERVER_STATUS_CTA,
                    },
                });
            });
    }
}
let h = l.Ay.connectStores([o.A], (e) => {
    let { guild: t } = e;
    return {
        memberCount: o.A.getMemberCount(t.id),
    };
})(f);
