n.d(t, { Z: () => b });
var i = n(192379),
    r = n(149765),
    a = n(442837),
    o = n(367907),
    s = n(731429),
    d = n(188471),
    c = n(318885),
    l = n(592125),
    u = n(984933),
    _ = n(271383),
    f = n(430824),
    p = n(496675),
    h = n(944486),
    v = n(914010),
    g = n(594174),
    m = n(237997),
    E = n(145597),
    x = n(981631);
class Z extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: r, postableChannelCount: a } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, c.Q)(x.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: r
                          }
                        : {}),
                    postable_channels: a
                }),
                (0, d.a)(x.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, s.K)(l.Z.getChannel(n), !0);
            (0, c.Q)(x.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, o.$H)(n)
            }),
                (0, d.a)(x.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let b = a.ZP.connectStores([v.Z, h.Z, f.Z, g.default, m.Z, u.ZP, p.Z, _.ZP], () => {
    var e, t, n;
    let i = v.Z.getGuildId(),
        a = h.Z.getChannelId(i),
        o = f.Z.getGuild(i),
        s = g.default.getCurrentUser(),
        d = null !== (t = u.ZP.getChannels(null == o ? void 0 : o.id)[u.sH]) && void 0 !== t ? t : [],
        c =
            d.length > 0
                ? d.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(r.$e(x.Plq.SEND_MESSAGES, x.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        l = null != s && null != i && null !== (n = null === (e = _.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: a,
        locked: m.Z.isLocked((0, E.QF)()),
        hasPreviewEnabled: null == o ? void 0 : o.features.has(x.oNc.PREVIEW_ENABLED),
        isMemberPending: l,
        postableChannelCount: c
    };
})(Z);
