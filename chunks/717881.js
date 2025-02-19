n.d(t, {
    P: () => A,
    Z: () => C
});
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(620662),
    c = n(387903),
    u = n(850827),
    d = n(812206),
    f = n(202458),
    p = n(220779),
    m = n(142550),
    g = n(954017),
    y = n(314091),
    b = n(159244),
    h = n(952164),
    v = n(199902),
    O = n(592125),
    j = n(430824),
    S = n(979651),
    N = n(626135),
    P = n(153066),
    I = n(981631),
    x = n(388032),
    E = n(243982);
function w(e) {
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
function Z(e, t) {
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
function T(e) {
    let { type: t, source: n, activity: l, applicationStream: i, user: a, guildId: s, channelId: c, onAction: d, actionColor: f } = e;
    return (0, r.jsx)(u.Z, {
        className: (0, P.l)(E, 'actions', t),
        type: t,
        source: n,
        activity: l,
        applicationStream: i,
        user: a,
        guildId: s,
        look: o.zxk.Looks.FILLED,
        color: null != f ? f : o.zxk.Colors.PRIMARY,
        channelId: c,
        onAction: d
    });
}
let A = c.Z.Types,
    C = function (e) {
        var { activity: t, user: n, useStoreStream: l = !0, showActions: o = !0, hideHeader: u = !1, showChannelDetails: P = !1, analyticsParams: A } = e,
            C = (function (e, t) {
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
            })(e, ['activity', 'user', 'useStoreStream', 'showActions', 'hideHeader', 'showChannelDetails', 'analyticsParams']);
        let D = (0, a.e7)([S.Z, O.Z], () => {
                var e;
                return O.Z.getChannel(null === (e = S.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
            }),
            _ = (0, a.e7)([v.Z], () => (l ? v.Z.getAnyStreamForUser(n.id) : null)),
            k = (0, a.e7)([j.Z, S.Z, O.Z], () => {
                var e, r;
                return (0, s.Z)(t, I.xjy.EMBEDDED) ? j.Z.getGuild(null === (e = O.Z.getChannel(null === (r = S.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === r ? void 0 : r.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null;
            }),
            W = (0, a.e7)([j.Z], () => (null != _ ? j.Z.getGuild(_.guildId) : null)),
            R = (0, a.e7)([d.Z], () => (null != t ? (null != t.application_id ? d.Z.getApplication(t.application_id) : d.Z.getApplicationByName(t.name)) : null)),
            M = (0, f.Z)(),
            L = (0, b.Z)(n),
            U = M && null != t && L;
        return (null == t ? void 0 : t.type) === I.IIU.HANG_STATUS
            ? null
            : (0, r.jsx)(
                  c.Z,
                  Z(w({}, C), {
                      activity: t,
                      user: n,
                      application: R,
                      hideHeader: u,
                      activityGuild: null != k ? k : W,
                      showReactions: U,
                      showChannelDetails: P,
                      channel: P ? D : void 0,
                      renderActions: o
                          ? () =>
                                (0, r.jsxs)('div', {
                                    className: i()(U && E.actionsWrapper),
                                    children: [
                                        (0, r.jsx)(
                                            T,
                                            Z(w({}, C), {
                                                applicationStream: _,
                                                activity: t,
                                                user: n
                                            })
                                        ),
                                        U &&
                                            (0, r.jsx)(p.ZP, {
                                                showReact: !0,
                                                showReply: !0,
                                                popoutProps: {
                                                    replyHeaderText: x.NW.formatToPlainString(x.t['1JSA19'], { activity: t.name }),
                                                    replyPlaceholder: x.NW.formatToPlainString(x.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                                },
                                                onInteraction: (e) => {
                                                    let { interactionType: r, emoji: l, reply: i } = e;
                                                    N.default.track(
                                                        I.rMx.ACTIVITY_REACTOR_INTERACTED,
                                                        w(
                                                            {
                                                                application_id: t.application_id,
                                                                interaction_type: r
                                                            },
                                                            A
                                                        )
                                                    ),
                                                        r === m.L.ReactSubmit &&
                                                            null != l &&
                                                            (0, g.H)({
                                                                reaction: l,
                                                                user: n,
                                                                activity: t,
                                                                application: R,
                                                                altText: (0, y.xC)(n, t),
                                                                stream: _
                                                            }),
                                                        r === m.L.ReplySubmit &&
                                                            null != i &&
                                                            (0, g.R)({
                                                                reply: i,
                                                                user: n,
                                                                activity: t,
                                                                application: R,
                                                                altText: (0, y.xC)(n, t),
                                                                stream: _
                                                            });
                                                }
                                            })
                                    ]
                                })
                          : null,
                      onOpenSpotifyTrack: h.aG,
                      onOpenSpotifyArtist: h.d$,
                      onOpenSpotifyAlbum: h.Z5
                  })
              );
    };
