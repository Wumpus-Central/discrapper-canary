n.d(t, { Z: () => b });
var i = n(192379),
    a = n(149765),
    o = n(442837),
    r = n(367907),
    s = n(731429),
    l = n(188471),
    d = n(318885),
    c = n(592125),
    _ = n(984933),
    u = n(271383),
    h = n(430824),
    f = n(496675),
    p = n(944486),
    v = n(914010),
    m = n(594174),
    g = n(237997),
    E = n(145597),
    Z = n(981631);
class y extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: a, postableChannelCount: o } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, d.Q)(Z.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: a
                          }
                        : {}),
                    postable_channels: o
                }),
                (0, l.a)(Z.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, s.K)(c.Z.getChannel(n), !0);
            (0, d.Q)(Z.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, r.$H)(n)
            }),
                (0, l.a)(Z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let b = o.ZP.connectStores([v.Z, p.Z, h.Z, m.default, g.Z, _.ZP, f.Z, u.ZP], () => {
    var e, t, n;
    let i = v.Z.getGuildId(),
        o = p.Z.getChannelId(i),
        r = h.Z.getGuild(i),
        s = m.default.getCurrentUser(),
        l = null !== (t = _.ZP.getChannels(null == r ? void 0 : r.id)[_.sH]) && void 0 !== t ? t : [],
        d =
            l.length > 0
                ? l.filter((e) => {
                      let { channel: t } = e;
                      return f.Z.can(a.$e(Z.Plq.SEND_MESSAGES, Z.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        c = null != s && null != i && null !== (n = null === (e = u.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: o,
        locked: g.Z.isLocked((0, E.QF)()),
        hasPreviewEnabled: null == r ? void 0 : r.features.has(Z.oNc.PREVIEW_ENABLED),
        isMemberPending: c,
        postableChannelCount: d
    };
})(y);
