n.d(t, { Z: () => x });
var i = n(473749),
    r = n(149765),
    l = n(442837),
    o = n(367907),
    a = n(731429),
    s = n(188471),
    u = n(318885),
    c = n(592125),
    d = n(984933),
    h = n(271383),
    p = n(430824),
    f = n(496675),
    m = n(944486),
    g = n(914010),
    O = n(594174),
    y = n(237997),
    E = n(145597),
    v = n(981631);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
class S extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: r,
            postableChannelCount: l,
        } = this.props;
        if (null != t && (t !== e.selectedGuild || (i && !e.isMemberPending))) {
            var d, h;
            (0, u.Q)(
                v.rMx.GUILD_VIEWED,
                ((d = b(
                    {},
                    i
                        ? {
                              is_pending: i,
                              preview_enabled: r,
                          }
                        : {},
                )),
                (h = h = { postable_channels: l }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(h))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(h)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(h, e));
                      }),
                d),
            ),
                (0, s.a)(v.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t });
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, a.K)(c.Z.getChannel(n), !0);
            (0, u.Q)(v.rMx.CHANNEL_OPENED, b({}, e, (0, o.$H)(n))),
                (0, s.a)(v.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let x = l.ZP.connectStores([g.Z, m.Z, p.Z, O.default, y.default, d.ZP, f.Z, h.ZP], () => {
    var e, t, n;
    let i = g.Z.getGuildId(),
        l = m.Z.getChannelId(i),
        o = p.Z.getGuild(i),
        a = O.default.getCurrentUser(),
        s = null != (t = d.ZP.getChannels(null == o ? void 0 : o.id)[d.sH]) ? t : [],
        u =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return f.Z.can(r.$e(v.Plq.SEND_MESSAGES, v.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        c = null != a && null != i && null != (n = null == (e = h.ZP.getMember(i, a.id)) ? void 0 : e.isPending) && n;
    return {
        selectedGuild: i,
        selectedChannel: l,
        locked: y.default.isLocked((0, E.getPID)()),
        hasPreviewEnabled: null == o ? void 0 : o.features.has(v.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: c,
        postableChannelCount: u,
    };
})(S);
