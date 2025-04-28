n.d(t, { Z: () => x });
var i = n(192379),
    r = n(149765),
    o = n(442837),
    l = n(367907),
    a = n(731429),
    s = n(188471),
    c = n(318885),
    u = n(592125),
    d = n(984933),
    p = n(271383),
    h = n(430824),
    f = n(496675),
    m = n(944486),
    g = n(914010),
    y = n(594174),
    O = n(237997),
    v = n(145597),
    b = n(981631);
function _(e) {
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
            var d, p;
            (0, c.Q)(
                b.rMx.GUILD_VIEWED,
                ((d = _(
                    {},
                    i
                        ? {
                              is_pending: i,
                              preview_enabled: r
                          }
                        : {}
                )),
                (p = p = { postable_channels: o }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(p)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                      }),
                d)
            ),
                (0, s.a)(b.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t });
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, a.K)(u.Z.getChannel(n), !0);
            (0, c.Q)(b.rMx.CHANNEL_OPENED, _({}, e, (0, l.$H)(n))), (0, s.a)(b.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let x = o.ZP.connectStores([g.Z, m.Z, h.Z, y.default, O.default, d.ZP, f.Z, p.ZP], () => {
    var e, t, n;
    let i = g.Z.getGuildId(),
        o = m.Z.getChannelId(i),
        l = h.Z.getGuild(i),
        a = y.default.getCurrentUser(),
        s = null != (t = d.ZP.getChannels(null == l ? void 0 : l.id)[d.sH]) ? t : [],
        c =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return f.Z.can(r.$e(b.Plq.SEND_MESSAGES, b.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        u = null != a && null != i && null != (n = null == (e = p.ZP.getMember(i, a.id)) ? void 0 : e.isPending) && n;
    return {
        selectedGuild: i,
        selectedChannel: o,
        locked: O.default.isLocked((0, v.getPID)()),
        hasPreviewEnabled: null == l ? void 0 : l.features.has(b.oNc.PREVIEW_ENABLED),
        isMemberPending: u,
        postableChannelCount: c
    };
})(E);
