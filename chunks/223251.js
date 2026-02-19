n.d(t, { A: () => T });
var i = n(64700),
    l = n(136722),
    a = n(311907),
    s = n(58149),
    r = n(332456),
    o = n(237774),
    d = n(973854),
    u = n(815706),
    c = n(734057),
    h = n(808728),
    A = n(696451),
    m = n(71393),
    p = n(576705),
    g = n(309010),
    f = n(967198),
    _ = n(287809),
    E = n(256415),
    x = n(9302),
    S = n(652215);
class I extends i.Component {
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
                ((0, u.z)(S.HAw.GUILD_VIEWED, {
                    ...(i ? { is_pending: i, preview_enabled: l } : {}),
                    postable_channels: a,
                }),
                (0, o.k)(S.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, r.C)(c.A.getChannel(n), !0);
            (0, u.z)(S.HAw.CHANNEL_OPENED, { ...e, ...(0, s.qL)(n) }), (0, d.A)({ channelId: n });
        }
    }
    render() {
        return null;
    }
}
let T = a.Ay.connectStores([f.A, g.A, m.A, _.default, E.default, h.Ay, p.A, A.Ay], () => {
    let e = f.A.getGuildId(),
        t = g.A.getChannelId(e),
        n = m.A.getGuild(e),
        i = _.default.getCurrentUser(),
        a = h.Ay.getChannels(n?.id)[h.I6] ?? [],
        s =
            a.length > 0
                ? a.filter((e) => {
                      let { channel: t } = e;
                      return p.A.can(l.kg(S.xBc.SEND_MESSAGES, S.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        r = null != i && null != e && (A.Ay.getMember(e, i.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: E.default.isLocked((0, x.getPID)()),
        hasPreviewEnabled: n?.features.has(S.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: r,
        postableChannelCount: s,
    };
})(I);
