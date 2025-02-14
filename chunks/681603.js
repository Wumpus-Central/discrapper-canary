n.d(t, { Z: () => C });
var i = n(192379),
    l = n(149765),
    r = n(442837),
    o = n(367907),
    a = n(731429),
    s = n(188471),
    d = n(318885),
    u = n(592125),
    c = n(984933),
    h = n(271383),
    _ = n(430824),
    p = n(496675),
    f = n(944486),
    g = n(914010),
    m = n(594174),
    v = n(237997),
    E = n(145597),
    I = n(981631);
class x extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: l, postableChannelCount: r } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, d.Q)(I.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: l
                          }
                        : {}),
                    postable_channels: r
                }),
                (0, s.a)(I.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, a.K)(u.Z.getChannel(n), !0);
            (0, d.Q)(I.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, o.$H)(n)
            }),
                (0, s.a)(I.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let C = r.ZP.connectStores([g.Z, f.Z, _.Z, m.default, v.Z, c.ZP, p.Z, h.ZP], () => {
    var e, t, n;
    let i = g.Z.getGuildId(),
        r = f.Z.getChannelId(i),
        o = _.Z.getGuild(i),
        a = m.default.getCurrentUser(),
        s = null !== (t = c.ZP.getChannels(null == o ? void 0 : o.id)[c.sH]) && void 0 !== t ? t : [],
        d =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(l.$e(I.Plq.SEND_MESSAGES, I.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        u = null != a && null != i && null !== (n = null === (e = h.ZP.getMember(i, a.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: r,
        locked: v.Z.isLocked((0, E.QF)()),
        hasPreviewEnabled: null == o ? void 0 : o.features.has(I.oNc.PREVIEW_ENABLED),
        isMemberPending: u,
        postableChannelCount: d
    };
})(x);
