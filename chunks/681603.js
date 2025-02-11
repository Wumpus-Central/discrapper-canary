n.d(t, { Z: () => E });
var i = n(192379),
    o = n(149765),
    r = n(442837),
    a = n(367907),
    c = n(731429),
    s = n(188471),
    l = n(318885),
    d = n(592125),
    u = n(984933),
    _ = n(271383),
    f = n(430824),
    p = n(496675),
    h = n(944486),
    m = n(914010),
    v = n(594174),
    b = n(237997),
    x = n(145597),
    g = n(981631);
class y extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: o, postableChannelCount: r } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, l.Q)(g.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: o
                          }
                        : {}),
                    postable_channels: r
                }),
                (0, s.a)(g.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, c.K)(d.Z.getChannel(n), !0);
            (0, l.Q)(g.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, a.$H)(n)
            }),
                (0, s.a)(g.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let E = r.ZP.connectStores([m.Z, h.Z, f.Z, v.default, b.Z, u.ZP, p.Z, _.ZP], () => {
    var e, t, n;
    let i = m.Z.getGuildId(),
        r = h.Z.getChannelId(i),
        a = f.Z.getGuild(i),
        c = v.default.getCurrentUser(),
        s = null !== (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) && void 0 !== t ? t : [],
        l =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(o.$e(g.Plq.SEND_MESSAGES, g.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        d = null != c && null != i && null !== (n = null === (e = _.ZP.getMember(i, c.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: r,
        locked: b.Z.isLocked((0, x.QF)()),
        hasPreviewEnabled: null == a ? void 0 : a.features.has(g.oNc.PREVIEW_ENABLED),
        isMemberPending: d,
        postableChannelCount: l
    };
})(y);
