n.d(t, { Z: () => x });
var i = n(473749),
    r = n(149765),
    a = n(442837),
    l = n(367907),
    o = n(731429),
    s = n(188471),
    c = n(318885),
    u = n(592125),
    d = n(984933),
    f = n(271383),
    h = n(430824),
    p = n(496675),
    m = n(944486),
    g = n(914010),
    b = n(594174),
    y = n(237997),
    O = n(145597),
    v = n(981631);
function E(e) {
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
            postableChannelCount: a,
        } = this.props;
        if (null != t && (t !== e.selectedGuild || (i && !e.isMemberPending))) {
            var d, f;
            (0, c.Q)(
                v.rMx.GUILD_VIEWED,
                ((d = E(
                    {},
                    i
                        ? {
                              is_pending: i,
                              preview_enabled: r,
                          }
                        : {},
                )),
                (f = f = { postable_channels: a }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(f)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(f, e));
                      }),
                d),
            ),
                (0, s.a)(v.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t });
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, o.K)(u.Z.getChannel(n), !0);
            (0, c.Q)(v.rMx.CHANNEL_OPENED, E({}, e, (0, l.$H)(n))),
                (0, s.a)(v.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let x = a.ZP.connectStores([g.Z, m.Z, h.Z, b.default, y.default, d.ZP, p.Z, f.ZP], () => {
    var e, t, n;
    let i = g.Z.getGuildId(),
        a = m.Z.getChannelId(i),
        l = h.Z.getGuild(i),
        o = b.default.getCurrentUser(),
        s = null != (t = d.ZP.getChannels(null == l ? void 0 : l.id)[d.sH]) ? t : [],
        c =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(r.$e(v.Plq.SEND_MESSAGES, v.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        u = null != o && null != i && null != (n = null == (e = f.ZP.getMember(i, o.id)) ? void 0 : e.isPending) && n;
    return {
        selectedGuild: i,
        selectedChannel: a,
        locked: y.default.isLocked((0, O.getPID)()),
        hasPreviewEnabled: null == l ? void 0 : l.features.has(v.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: u,
        postableChannelCount: c,
    };
})(S);
