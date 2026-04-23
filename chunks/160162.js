"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(873263),
    a = n(686956),
    r = n(956793),
    o = n(549711),
    d = n(463347),
    c = n(976860),
    u = n(652215);
class h extends s.Component {
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
            return { guildId: null != t && "" !== t ? t : u.ME, channelId: n, messageId: i };
        })(e);
        (0, d.nn)(t) && (0, d.ts)(n)
            ? (a.A.selectGuild(t), r.default.selectChannel({ guildId: t, channelId: n, messageId: i }))
            : (0, c.bG)(u.BVt.ME);
    }
    render() {
        return null;
    }
}
let p = () =>
    (0, i.jsxs)(l.dO, {
        children: [
            (0, i.jsx)(o.A, {
                path: u.BVt.CHANNEL(d.pv.guildId(), d.pv.channelId({ optional: !0 }), ":messageId?"),
                component: h,
            }),
            (0, i.jsx)(o.A, { component: h }),
        ],
    });
