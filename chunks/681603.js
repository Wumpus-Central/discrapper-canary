var n = i(192379),
    l = i(149765),
    o = i(442837),
    s = i(367907),
    r = i(731429),
    a = i(188471),
    u = i(318885),
    d = i(592125),
    c = i(984933),
    h = i(271383),
    f = i(430824),
    p = i(496675),
    E = i(944486),
    m = i(914010),
    v = i(594174),
    g = i(237997),
    S = i(145597),
    _ = i(981631);
class C extends n.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: i, isMemberPending: n, hasPreviewEnabled: l, postableChannelCount: o } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (n && !e.isMemberPending)) &&
                ((0, u.Q)(_.rMx.GUILD_VIEWED, {
                    ...(n
                        ? {
                              is_pending: n,
                              preview_enabled: l
                          }
                        : {}),
                    postable_channels: o
                }),
                (0, a.a)(_.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != i && i !== e.selectedChannel)
        ) {
            let e = (0, r.K)(d.Z.getChannel(i), !0);
            (0, u.Q)(_.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, s.$H)(i)
            }),
                (0, a.a)(_.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: i });
        }
    }
    render() {
        return null;
    }
}
t.Z = o.ZP.connectStores([m.Z, E.Z, f.Z, v.default, g.Z, c.ZP, p.Z, h.ZP], () => {
    var e, t, i;
    let n = m.Z.getGuildId(),
        o = E.Z.getChannelId(n),
        s = f.Z.getGuild(n),
        r = v.default.getCurrentUser(),
        a = null !== (t = c.ZP.getChannels(null == s ? void 0 : s.id)[c.sH]) && void 0 !== t ? t : [],
        u =
            a.length > 0
                ? a.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(l.$e(_.Plq.SEND_MESSAGES, _.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        d = null != r && null != n && null !== (i = null === (e = h.ZP.getMember(n, r.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
    return {
        selectedGuild: n,
        selectedChannel: o,
        locked: g.Z.isLocked((0, S.QF)()),
        hasPreviewEnabled: null == s ? void 0 : s.features.has(_.oNc.PREVIEW_ENABLED),
        isMemberPending: d,
        postableChannelCount: u
    };
})(C);
