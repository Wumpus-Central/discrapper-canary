n.d(t, { A: () => S });
var i = n(64700),
    r = n(136722),
    l = n(311907),
    a = n(58149),
    o = n(332456),
    s = n(237774),
    c = n(815706),
    u = n(734057),
    d = n(808728),
    p = n(696451),
    h = n(71393),
    f = n(576705),
    m = n(309010),
    g = n(967198),
    y = n(287809),
    A = n(256415),
    O = n(9302),
    E = n(652215);
function v(e) {
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
class b extends i.Component {
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
            var d, p;
            (0, c.z)(
                E.HAw.GUILD_VIEWED,
                ((d = v(
                    {},
                    i
                        ? {
                              is_pending: i,
                              preview_enabled: r,
                          }
                        : {},
                )),
                (p = p = { postable_channels: l }),
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
                d),
            ),
                (0, s.k)(E.HAw.GUILD_VIEWED_CLICKSTREAM, { guildId: t });
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, o.C)(u.A.getChannel(n), !0);
            (0, c.z)(E.HAw.CHANNEL_OPENED, v({}, e, (0, a.qL)(n))),
                (0, s.k)(E.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
let S = l.Ay.connectStores([g.A, m.A, h.A, y.default, A.default, d.Ay, f.A, p.Ay], () => {
    var e, t, n;
    let i = g.A.getGuildId(),
        l = m.A.getChannelId(i),
        a = h.A.getGuild(i),
        o = y.default.getCurrentUser(),
        s = null != (e = d.Ay.getChannels(null == a ? void 0 : a.id)[d.I6]) ? e : [],
        c =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return f.A.can(r.kg(E.xBc.SEND_MESSAGES, E.xBc.VIEW_CHANNEL), t);
                  }).length
                : 0,
        u = null != o && null != i && null != (t = null == (n = p.Ay.getMember(i, o.id)) ? void 0 : n.isPending) && t;
    return {
        selectedGuild: i,
        selectedChannel: l,
        locked: A.default.isLocked((0, O.getPID)()),
        hasPreviewEnabled: null == a ? void 0 : a.features.has(E.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: u,
        postableChannelCount: c,
    };
})(b);
