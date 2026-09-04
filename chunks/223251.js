l.d(n, { A: () => f });
var t = l(582128),
    d = l(136722),
    s = l(17928),
    r = l(95561),
    i = l(885437),
    u = l(973854),
    a = l(840364),
    A = l(815706),
    c = l(808728),
    p = l(696451),
    h = l(71393),
    E = l(576705),
    g = l(309010),
    o = l(967198),
    I = l(287809),
    _ = l(184809),
    C = l(9302),
    k = l(652215);
class b extends t.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: n,
            selectedChannel: l,
            isMemberPending: t,
            hasPreviewEnabled: d,
            postableChannelCount: s,
        } = this.props;
        null != n &&
            (n !== e.selectedGuild || (t && !e.isMemberPending)) &&
            ((0, A.z)(k.HAw.GUILD_VIEWED, {
                ...(t ? { is_pending: t, preview_enabled: d } : {}),
                postable_channels: s,
            }),
            (0, a.A)({ guildId: n })),
            null != l &&
                l !== e.selectedChannel &&
                ((0, A.z)(k.HAw.CHANNEL_OPENED, { ...(0, i.p)(l), ...(0, r.qL)(l) }), (0, u.A)({ channelId: l }));
    }
    render() {
        return null;
    }
}
let f = s.Ay.connectStores([o.A, g.Ay, h.A, I.default, _.default, c.Ay, E.A, p.Ay], () => {
    let e = o.A.getGuildId(),
        n = g.Ay.getChannelId(e),
        l = h.A.getGuild(e),
        t = I.default.getCurrentUser(),
        s = c.Ay.getChannels(l?.id)[c.I6] ?? [],
        r =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: n } = e;
                      return E.A.can(d.kg(k.xBc.SEND_MESSAGES, k.xBc.VIEW_CHANNEL), n);
                  }).length
                : 0,
        i = null != t && null != e && (p.Ay.getMember(e, t.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: n,
        locked: _.default.isLocked((0, C.getPID)()),
        hasPreviewEnabled: l?.features.has(k.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: i,
        postableChannelCount: r,
    };
})(b);
