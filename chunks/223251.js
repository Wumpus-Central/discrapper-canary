"use strict";
n.d(t, { A: () => v });
var i = n(64700),
    s = n(136722),
    a = n(311907),
    l = n(58149),
    r = n(237774),
    o = n(885437),
    d = n(973854),
    c = n(815706),
    u = n(808728),
    h = n(696451),
    p = n(71393),
    f = n(576705),
    A = n(309010),
    _ = n(967198),
    g = n(287809),
    m = n(256415),
    x = n(9302),
    E = n(652215);
class y extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: s,
            postableChannelCount: a,
        } = this.props;
        null != t &&
            (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
            ((0, c.z)(E.HAw.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: s } : {}),
                postable_channels: a,
            }),
            (0, r.k)(E.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: t })),
            null != n &&
                n !== e.selectedChannel &&
                ((0, c.z)(E.HAw.CHANNEL_OPENED, { ...(0, o.p)(n), ...(0, l.qL)(n) }), (0, d.A)({ channelId: n }));
    }
    render() {
        return null;
    }
}
let v = a.Ay.connectStores([_.A, A.A, p.A, g.default, m.default, u.Ay, f.A, h.Ay], () => {
    let e = _.A.getGuildId(),
        t = A.A.getChannelId(e),
        n = p.A.getGuild(e),
        i = g.default.getCurrentUser(),
        a = u.Ay.getChannels(n?.id)[u.I6] ?? [],
        l =
            a.length > 0
                ? a.filter((e) => {
                      let { channel: t } = e;
                      return f.A.can(s.kg(E.xBc.SEND_MESSAGES, E.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        r = null != i && null != e && (h.Ay.getMember(e, i.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: m.default.isLocked((0, x.getPID)()),
        hasPreviewEnabled: n?.features.has(E.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: r,
        postableChannelCount: l,
    };
})(y);
