n.d(t, {
    P: () => O,
    Z: () => j
});
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(620662),
    o = n(387903),
    s = n(850827),
    c = n(812206),
    u = n(952164),
    d = n(199902),
    f = n(592125),
    p = n(430824),
    m = n(979651),
    g = n(153066),
    _ = n(981631),
    b = n(66569);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
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
function y(e) {
    let { type: t, source: n, activity: i, applicationStream: a, user: o, guildId: c, channelId: u, onAction: d, actionColor: f } = e;
    return (0, r.jsx)(s.Z, {
        className: (0, g.l)(b, 'actions', t),
        type: t,
        source: n,
        activity: i,
        applicationStream: a,
        user: o,
        guildId: c,
        look: l.zxk.Looks.FILLED,
        color: null != f ? f : l.zxk.Colors.PRIMARY,
        channelId: u,
        onAction: d
    });
}
let O = o.Z.Types,
    j = function (e) {
        var { activity: t, user: n, useStoreStream: l = !0, showActions: s = !0, hideHeader: g = !1, showChannelDetails: b = !1 } = e,
            O = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['activity', 'user', 'useStoreStream', 'showActions', 'hideHeader', 'showChannelDetails']);
        let j = (0, i.e7)([m.Z, f.Z], () => {
                var e;
                return f.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
            }),
            S = (0, i.e7)([d.Z], () => (l ? d.Z.getAnyStreamForUser(n.id) : null)),
            x = (0, i.e7)([p.Z, m.Z, f.Z], () => {
                var e, r;
                return (0, a.Z)(t, _.xjy.EMBEDDED) ? p.Z.getGuild(null == (e = f.Z.getChannel(null == (r = m.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) ? void 0 : r.channelId)) ? void 0 : e.getGuildId()) : null;
            }),
            I = (0, i.e7)([p.Z], () => (null != S ? p.Z.getGuild(S.guildId) : null)),
            C = (0, i.e7)([c.Z], () => {
                if (null != t)
                    if (null != t.application_id) return c.Z.getApplication(t.application_id);
                    else return c.Z.getApplicationByName(t.name);
                return null;
            });
        return (null == t ? void 0 : t.type) === _.IIU.HANG_STATUS
            ? null
            : (0, r.jsx)(
                  o.Z,
                  h(v({}, O), {
                      activity: t,
                      user: n,
                      application: C,
                      hideHeader: g,
                      activityGuild: null != x ? x : I,
                      showChannelDetails: b,
                      channel: b ? j : void 0,
                      renderActions: s
                          ? () =>
                                (0, r.jsx)(
                                    y,
                                    h(v({}, O), {
                                        applicationStream: S,
                                        activity: t,
                                        user: n
                                    })
                                )
                          : null,
                      onOpenSpotifyTrack: u.aG,
                      onOpenSpotifyArtist: u.d$,
                      onOpenSpotifyAlbum: u.Z5
                  })
              );
    };
