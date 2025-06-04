n.d(t, { Z: () => x });
var i = n(73800),
    r = n(149765),
    o = n(442837),
    s = n(367907),
    l = n(731429),
    a = n(188471),
    c = n(318885),
    d = n(592125),
    u = n(984933),
    h = n(271383),
    p = n(430824),
    f = n(496675),
    g = n(944486),
    m = n(914010),
    y = n(594174),
    _ = n(237997),
    v = n(145597),
    O = n(981631);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
class E extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: r, postableChannelCount: o } = this.props;
        if (null != t && (t !== e.selectedGuild || (i && !e.isMemberPending))) {
            var u, h;
            (0, c.Q)(
                O.rMx.GUILD_VIEWED,
                ((u = b(
                    {},
                    i
                        ? {
                              is_pending: i,
                              preview_enabled: r
                          }
                        : {}
                )),
                (h = h = { postable_channels: o }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(h)).forEach(function (e) {
                          Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(h, e));
                      }),
                u)
            ),
                (0, a.a)(O.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t });
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, l.K)(d.Z.getChannel(n), !0);
            (0, c.Q)(O.rMx.CHANNEL_OPENED, b({}, e, (0, s.$H)(n))), (0, a.a)(O.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let x = o.ZP.connectStores([m.Z, g.Z, p.Z, y.default, _.default, u.ZP, f.Z, h.ZP], () => {
    var e, t, n;
    let i = m.Z.getGuildId(),
        o = g.Z.getChannelId(i),
        s = p.Z.getGuild(i),
        l = y.default.getCurrentUser(),
        a = null != (t = u.ZP.getChannels(null == s ? void 0 : s.id)[u.sH]) ? t : [],
        c =
            a.length > 0
                ? a.filter((e) => {
                      let { channel: t } = e;
                      return f.Z.can(r.$e(O.Plq.SEND_MESSAGES, O.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        d = null != l && null != i && null != (n = null == (e = h.ZP.getMember(i, l.id)) ? void 0 : e.isPending) && n;
    return {
        selectedGuild: i,
        selectedChannel: o,
        locked: _.default.isLocked((0, v.getPID)()),
        hasPreviewEnabled: null == s ? void 0 : s.features.has(O.oNc.PREVIEW_ENABLED),
        isMemberPending: d,
        postableChannelCount: c
    };
})(E);
