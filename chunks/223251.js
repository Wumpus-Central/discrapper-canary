n.d(t, { A: () => I });
var i = n(64700),
    l = n(136722),
    a = n(311907),
    s = n(58149),
    r = n(332456),
    o = n(237774),
    d = n(815706),
    u = n(734057),
    c = n(808728),
    h = n(696451),
    A = n(71393),
    m = n(576705),
    g = n(309010),
    p = n(967198),
    f = n(287809),
    _ = n(256415),
    E = n(9302),
    x = n(652215);
class S extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: l,
            postableChannelCount: a,
        } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, d.z)(x.HAw.GUILD_VIEWED, {
                    ...(i ? { is_pending: i, preview_enabled: l } : {}),
                    postable_channels: a,
                }),
                (0, o.k)(x.HAw.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, r.C)(u.A.getChannel(n), !0);
            (0, d.z)(x.HAw.CHANNEL_OPENED, { ...e, ...(0, s.qL)(n) }),
                (0, o.k)(x.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let I = a.Ay.connectStores([p.A, g.A, A.A, f.default, _.default, c.Ay, m.A, h.Ay], () => {
    let e = p.A.getGuildId(),
        t = g.A.getChannelId(e),
        n = A.A.getGuild(e),
        i = f.default.getCurrentUser(),
        a = c.Ay.getChannels(n?.id)[c.I6] ?? [],
        s =
            a.length > 0
                ? a.filter((e) => {
                      let { channel: t } = e;
                      return m.A.can(l.kg(x.xBc.SEND_MESSAGES, x.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        r = null != i && null != e && (h.Ay.getMember(e, i.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: _.default.isLocked((0, E.getPID)()),
        hasPreviewEnabled: n?.features.has(x.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: r,
        postableChannelCount: s,
    };
})(S);
