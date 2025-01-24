var i = n(192379),
    o = n(149765),
    r = n(442837),
    a = n(367907),
    l = n(731429),
    s = n(188471),
    d = n(318885),
    c = n(592125),
    u = n(984933),
    p = n(271383),
    h = n(430824),
    _ = n(496675),
    v = n(944486),
    m = n(914010),
    f = n(594174),
    y = n(237997),
    E = n(145597),
    b = n(981631);
class Z extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: o, postableChannelCount: r } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, d.Q)(b.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: o
                          }
                        : {}),
                    postable_channels: r
                }),
                (0, s.a)(b.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, l.K)(c.Z.getChannel(n), !0);
            (0, d.Q)(b.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, a.$H)(n)
            }),
                (0, s.a)(b.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
t.Z = r.ZP.connectStores([m.Z, v.Z, h.Z, f.default, y.Z, u.ZP, _.Z, p.ZP], () => {
    var e, t, n;
    let i = m.Z.getGuildId(),
        r = v.Z.getChannelId(i),
        a = h.Z.getGuild(i),
        l = f.default.getCurrentUser(),
        s = null !== (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) && void 0 !== t ? t : [],
        d =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return _.Z.can(o.$e(b.Plq.SEND_MESSAGES, b.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        c = null != l && null != i && null !== (n = null === (e = p.ZP.getMember(i, l.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: r,
        locked: y.Z.isLocked((0, E.QF)()),
        hasPreviewEnabled: null == a ? void 0 : a.features.has(b.oNc.PREVIEW_ENABLED),
        isMemberPending: c,
        postableChannelCount: d
    };
})(Z);
