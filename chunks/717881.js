n.d(t, {
    P: () => j,
    Z: () => S
});
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(620662),
    a = n(387903),
    s = n(850827),
    c = n(812206),
    u = n(952164),
    d = n(199902),
    p = n(592125),
    f = n(430824),
    m = n(979651),
    g = n(153066),
    b = n(981631),
    O = n(66569);
function y(e) {
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
function v(e) {
    let { type: t, source: n, activity: l, applicationStream: o, user: a, guildId: c, channelId: u, onAction: d, actionColor: p } = e;
    return (0, r.jsx)(s.Z, {
        className: (0, g.l)(O, 'actions', t),
        type: t,
        source: n,
        activity: l,
        applicationStream: o,
        user: a,
        guildId: c,
        look: i.zxk.Looks.FILLED,
        color: null != p ? p : i.zxk.Colors.PRIMARY,
        channelId: u,
        onAction: d
    });
}
let j = a.Z.Types,
    S = function (e) {
        var { activity: t, user: n, useStoreStream: i = !0, showActions: s = !0, hideHeader: g = !1, showChannelDetails: O = !1 } = e,
            j = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ['activity', 'user', 'useStoreStream', 'showActions', 'hideHeader', 'showChannelDetails']);
        let S = (0, l.e7)([m.Z, p.Z], () => {
                var e;
                return p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
            }),
            P = (0, l.e7)([d.Z], () => (i ? d.Z.getAnyStreamForUser(n.id) : null)),
            N = (0, l.e7)([f.Z, m.Z, p.Z], () => {
                var e, r;
                return (0, o.Z)(t, b.xjy.EMBEDDED) ? f.Z.getGuild(null == (e = p.Z.getChannel(null == (r = m.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) ? void 0 : r.channelId)) ? void 0 : e.getGuildId()) : null;
            }),
            I = (0, l.e7)([f.Z], () => (null != P ? f.Z.getGuild(P.guildId) : null)),
            E = (0, l.e7)([c.Z], () => {
                if (null != t)
                    if (null != t.application_id) return c.Z.getApplication(t.application_id);
                    else return c.Z.getApplicationByName(t.name);
                return null;
            });
        return (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS
            ? null
            : (0, r.jsx)(
                  a.Z,
                  h(y({}, j), {
                      activity: t,
                      user: n,
                      application: E,
                      hideHeader: g,
                      activityGuild: null != N ? N : I,
                      showChannelDetails: O,
                      channel: O ? S : void 0,
                      renderActions: s
                          ? () =>
                                (0, r.jsx)(
                                    v,
                                    h(y({}, j), {
                                        applicationStream: P,
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
