n.d(t, { A: () => b });
var i = n(64700),
    a = n(136722),
    r = n(311907),
    l = n(58149),
    s = n(237774),
    o = n(885437),
    d = n(973854),
    c = n(815706),
    u = n(808728),
    _ = n(696451),
    h = n(71393),
    m = n(576705),
    f = n(309010),
    g = n(967198),
    p = n(287809),
    A = n(256415),
    E = n(9302),
    I = n(652215);
class x extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: a,
            postableChannelCount: r,
        } = this.props;
        null != t &&
            (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
            ((0, c.z)(I.HAw.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: a } : {}),
                postable_channels: r,
            }),
            (0, s.k)(I.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: t })),
            null != n &&
                n !== e.selectedChannel &&
                ((0, c.z)(I.HAw.CHANNEL_OPENED, { ...(0, o.p)(n), ...(0, l.qL)(n) }), (0, d.A)({ channelId: n }));
    }
    render() {
        return null;
    }
}
let b = r.Ay.connectStores([g.A, f.A, h.A, p.default, A.default, u.Ay, m.A, _.Ay], () => {
    let e = g.A.getGuildId(),
        t = f.A.getChannelId(e),
        n = h.A.getGuild(e),
        i = p.default.getCurrentUser(),
        r = u.Ay.getChannels(n?.id)[u.I6] ?? [],
        l =
            r.length > 0
                ? r.filter((e) => {
                      let { channel: t } = e;
                      return m.A.can(a.kg(I.xBc.SEND_MESSAGES, I.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        s = null != i && null != e && (_.Ay.getMember(e, i.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: A.default.isLocked((0, E.getPID)()),
        hasPreviewEnabled: n?.features.has(I.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: s,
        postableChannelCount: l,
    };
})(x);
