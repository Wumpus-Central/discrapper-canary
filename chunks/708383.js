n.d(t, { Z: () => p }), n(301563);
var i = n(200651),
    r = n(192379),
    s = n(512969),
    o = n(749210),
    l = n(287734),
    a = n(765717),
    c = n(893607),
    u = n(703656),
    d = n(981631);
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
            messageId: i
        } = (function (e) {
            let { guildId: t, channelId: n, messageId: i } = e.params;
            return {
                guildId: null != t && '' !== t ? t : d.ME,
                channelId: n,
                messageId: i
            };
        })(e);
        (0, c.Ss)(t) && (0, c.cq)(n)
            ? (o.Z.selectGuild(t),
              l.default.selectChannel({
                  guildId: t,
                  channelId: n,
                  messageId: i
              }))
            : (0, u.dL)(d.Z5c.ME);
    }
    render() {
        return null;
    }
}
let p = () =>
    (0, i.jsxs)(s.rs, {
        children: [
            (0, i.jsx)(a.Z, {
                path: d.Z5c.CHANNEL(c.Hw.guildId(), c.Hw.channelId({ optional: !0 }), ':messageId?'),
                component: h
            }),
            (0, i.jsx)(a.Z, { component: h })
        ]
    });
