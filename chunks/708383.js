n.d(t, { Z: () => h }), n(35282);
var i = n(54381),
    r = n(473749),
    a = n(828700),
    s = n(749210),
    o = n(287734),
    l = n(765717),
    c = n(893607),
    d = n(703656),
    u = n(981631);
class f extends r.Component {
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
        (0, c.Ss)(t) && (0, c.cq)(n)
            ? (s.Z.selectGuild(t),
              o.default.selectChannel({
                  guildId: t,
                  channelId: n,
                  messageId: i,
              }))
            : (0, d.dL)(u.Z5c.ME);
    }
    render() {
        return null;
    }
}
let h = () =>
    (0, i.jsxs)(a.rs, {
        children: [
            (0, i.jsx)(l.Z, {
                path: u.Z5c.CHANNEL(c.Hw.guildId(), c.Hw.channelId({ optional: !0 }), ":messageId?"),
                component: f,
            }),
            (0, i.jsx)(l.Z, { component: f }),
        ],
    });
