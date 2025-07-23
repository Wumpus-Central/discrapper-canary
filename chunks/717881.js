n.d(t, {
    P: () => x,
    Z: () => I
});
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    o = n(620662),
    s = n(387903),
    c = n(850827),
    u = n(812206),
    d = n(741570),
    f = n(952164),
    p = n(199902),
    m = n(592125),
    g = n(430824),
    _ = n(979651),
    v = n(626135),
    h = n(153066),
    b = n(981631),
    y = n(66569);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { type: t, source: n, activity: i, applicationStream: l, user: o, guildId: s, channelId: u, onAction: d, actionColor: f } = e;
    return (0, r.jsx)(c.Z, {
        className: (0, h.l)(y, 'actions', t),
        type: t,
        source: n,
        activity: i,
        applicationStream: l,
        user: o,
        guildId: s,
        look: a.zx.Looks.FILLED,
        color: null != f ? f : a.zx.Colors.PRIMARY,
        channelId: u,
        onAction: d
    });
}
let x = s.Z.Types,
    I = function (e) {
        var { activity: t, user: n, useStoreStream: a = !0, showActions: c = !0, hideHeader: h = !1, showChannelDetails: y = !1 } = e,
            x = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['activity', 'user', 'useStoreStream', 'showActions', 'hideHeader', 'showChannelDetails']);
        let I = (0, l.e7)([_.Z, m.Z], () => {
                var e;
                return m.Z.getChannel(null == (e = _.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
            }),
            P = (0, d.E)('UserActivityContainer', I),
            C = (0, l.e7)([p.Z], () => (a ? p.Z.getAnyStreamForUser(n.id) : null)),
            E = (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS && P ? I : null,
            w = (0, l.e7)([g.Z, _.Z, m.Z], () => {
                var e, r;
                return (0, o.Z)(t, b.xjy.EMBEDDED) ? g.Z.getGuild(null == (e = m.Z.getChannel(null == (r = _.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) ? void 0 : r.channelId)) ? void 0 : e.getGuildId()) : null != E ? g.Z.getGuild(E.getGuildId()) : null;
            }),
            T = (0, l.e7)([g.Z], () => (null != C ? g.Z.getGuild(C.guildId) : null)),
            N = (0, l.e7)([u.Z], () => {
                if (null != t)
                    if (null != t.application_id) return u.Z.getApplication(t.application_id);
                    else return u.Z.getApplicationByName(t.name);
                return null;
            });
        return (i.useEffect(() => {
            (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS &&
                P &&
                v.default.track(b.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == E ? void 0 : E.guild_id,
                    channel_id: null == E ? void 0 : E.id
                });
        }, [null == t ? void 0 : t.type, P, E]),
        (null == t ? void 0 : t.type) !== b.IIU.HANG_STATUS || P)
            ? (0, r.jsx)(
                  s.Z,
                  j(O({}, x), {
                      activity: t,
                      user: n,
                      application: N,
                      hideHeader: h,
                      activityGuild: null != w ? w : T,
                      showChannelDetails: y,
                      channel: y ? I : void 0,
                      renderActions: c
                          ? () =>
                                (0, r.jsx)(
                                    S,
                                    j(O({}, x), {
                                        applicationStream: C,
                                        activity: t,
                                        user: n
                                    })
                                )
                          : null,
                      onOpenSpotifyTrack: f.aG,
                      onOpenSpotifyArtist: f.d$,
                      onOpenSpotifyAlbum: f.Z5
                  })
              )
            : null;
    };
