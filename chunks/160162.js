n.d(t, { A: () => p }), n(747238);
var i = n(627968),
    r = n(64700),
    s = n(960488),
    l = n(686956),
    o = n(956793),
    a = n(549711),
    c = n(463347),
    d = n(976860),
    u = n(652215);
class h extends r.Component {
    componentDidUpdate(e) {
        let { location: t } = this.props;
        t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel();
    }
    checkGuildAndChannel() {
        let { match: e } = this.props;
        if (null == e) return;
        let {
            guildId: t,
            channelId: n,
            messageId: i,
        } = (function (e) {
            let { guildId: t, channelId: n, messageId: i } = e.params;
            return {
                guildId: null != t && "" !== t ? t : u.ME,
                channelId: n,
                messageId: i,
            };
        })(e);
        (0, c.nn)(t) && (0, c.ts)(n)
            ? (l.A.selectGuild(t),
              o.default.selectChannel({
                  guildId: t,
                  channelId: n,
                  messageId: i,
              }))
            : (0, d.bG)(u.BVt.ME);
    }
    render() {
        return null;
    }
}
let p = () =>
    (0, i.jsxs)(s.dO, {
        children: [
            (0, i.jsx)(a.A, {
                path: u.BVt.CHANNEL(c.pv.guildId(), c.pv.channelId({ optional: !0 }), ":messageId?"),
                component: h,
            }),
            (0, i.jsx)(a.A, { component: h }),
        ],
    });
