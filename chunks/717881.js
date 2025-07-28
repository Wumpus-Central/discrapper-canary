n.d(t, {
    P: () => j,
    Z: () => x
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
    h = n(979651),
    b = n(626135),
    _ = n(153066),
    v = n(981631),
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
function S(e, t) {
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
function I(e) {
    let { type: t, source: n, activity: i, applicationStream: l, user: o, guildId: s, channelId: u, onAction: d, actionColor: f } = e;
    return (0, r.jsx)(c.Z, {
        className: (0, _.l)(y, 'actions', t),
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
let j = s.Z.Types,
    x = function (e) {
        var { activity: t, user: n, useStoreStream: a = !0, showActions: c = !0, hideHeader: _ = !1, showChannelDetails: y = !1 } = e,
            j = (function (e, t) {
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
        let x = (0, l.e7)([h.Z, m.Z], () => {
                var e;
                return m.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
            }),
            E = (0, d.E)('UserActivityContainer', x),
            P = (0, l.e7)([p.Z], () => (a ? p.Z.getAnyStreamForUser(n.id) : null)),
            C = (null == t ? void 0 : t.type) === v.IIU.HANG_STATUS && E ? x : null,
            T = (0, l.e7)([g.Z, h.Z, m.Z], () => {
                var e, r;
                return (0, o.Z)(t, v.xjy.EMBEDDED) ? g.Z.getGuild(null == (e = m.Z.getChannel(null == (r = h.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) ? void 0 : r.channelId)) ? void 0 : e.getGuildId()) : null != C ? g.Z.getGuild(C.getGuildId()) : null;
            }),
            N = (0, l.e7)([g.Z], () => (null != P ? g.Z.getGuild(P.guildId) : null)),
            A = (0, l.e7)([u.Z], () => {
                if (null != t)
                    if (null != t.application_id) return u.Z.getApplication(t.application_id);
                    else return u.Z.getApplicationByName(t.name);
                return null;
            });
        return (i.useEffect(() => {
            (null == t ? void 0 : t.type) === v.IIU.HANG_STATUS &&
                E &&
                b.default.track(v.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == C ? void 0 : C.guild_id,
                    channel_id: null == C ? void 0 : C.id
                });
        }, [null == t ? void 0 : t.type, E, C]),
        (null == t ? void 0 : t.type) !== v.IIU.HANG_STATUS || E)
            ? (0, r.jsx)(
                  s.Z,
                  S(O({}, j), {
                      activity: t,
                      user: n,
                      application: A,
                      hideHeader: _,
                      activityGuild: null != T ? T : N,
                      showChannelDetails: y,
                      channel: y ? x : void 0,
                      renderActions: c
                          ? () =>
                                (0, r.jsx)(
                                    I,
                                    S(O({}, j), {
                                        applicationStream: P,
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
