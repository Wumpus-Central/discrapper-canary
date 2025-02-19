n.d(t, { Z: () => O });
var i = n(192379),
    r = n(149765),
    o = n(442837),
    a = n(367907),
    s = n(731429),
    c = n(188471),
    d = n(318885),
    l = n(592125),
    u = n(984933),
    _ = n(271383),
    f = n(430824),
    p = n(496675),
    h = n(944486),
    v = n(914010),
    m = n(594174),
    g = n(237997),
    x = n(145597),
    b = n(981631);
function y(e) {
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
            var u, _;
            (0, d.Q)(
                b.rMx.GUILD_VIEWED,
                ((u = y(
                    {},
                    i
                        ? {
                              is_pending: i,
                              preview_enabled: r
                          }
                        : {}
                )),
                (_ = _ = { postable_channels: o }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(_))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(_)).forEach(function (e) {
                          Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(_, e));
                      }),
                u)
            ),
                (0, c.a)(b.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t });
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, s.K)(l.Z.getChannel(n), !0);
            (0, d.Q)(b.rMx.CHANNEL_OPENED, y({}, e, (0, a.$H)(n))), (0, c.a)(b.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let O = o.ZP.connectStores([v.Z, h.Z, f.Z, m.default, g.Z, u.ZP, p.Z, _.ZP], () => {
    var e, t, n;
    let i = v.Z.getGuildId(),
        o = h.Z.getChannelId(i),
        a = f.Z.getGuild(i),
        s = m.default.getCurrentUser(),
        c = null !== (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) && void 0 !== t ? t : [],
        d =
            c.length > 0
                ? c.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(r.$e(b.Plq.SEND_MESSAGES, b.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        l = null != s && null != i && null !== (n = null === (e = _.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: o,
        locked: g.Z.isLocked((0, x.QF)()),
        hasPreviewEnabled: null == a ? void 0 : a.features.has(b.oNc.PREVIEW_ENABLED),
        isMemberPending: l,
        postableChannelCount: d
    };
})(E);
