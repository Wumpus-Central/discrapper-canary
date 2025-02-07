n.d(t, {
    P: () => P,
    Z: () => b
});
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(620662),
    u = n(387903),
    c = n(850827),
    d = n(812206),
    m = n(202458),
    h = n(220779),
    g = n(142550),
    f = n(954017),
    p = n(314091),
    v = n(159244),
    S = n(952164),
    I = n(199902),
    x = n(592125),
    T = n(430824),
    Z = n(979651),
    y = n(626135),
    N = n(153066),
    E = n(981631),
    C = n(388032),
    A = n(243718);
function j(e) {
    let { type: t, source: n, activity: i, applicationStream: r, user: a, guildId: o, channelId: u, onAction: d, actionColor: m } = e;
    return (0, l.jsx)(c.Z, {
        className: (0, N.l)(A, 'actions', t),
        type: t,
        source: n,
        activity: i,
        applicationStream: r,
        user: a,
        guildId: o,
        look: s.zxk.Looks.FILLED,
        color: null != m ? m : s.zxk.Colors.PRIMARY,
        channelId: u,
        onAction: d
    });
}
let P = u.Z.Types,
    b = function (e) {
        let { activity: t, user: n, useStoreStream: i = !0, showActions: s = !0, hideHeader: c = !1, showChannelDetails: N = !1, analyticsParams: P, ...b } = e,
            w = (0, a.e7)([Z.Z, x.Z], () => {
                var e;
                return x.Z.getChannel(null === (e = Z.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
            }),
            _ = (0, a.e7)([I.Z], () => (i ? I.Z.getAnyStreamForUser(n.id) : null)),
            R = (0, a.e7)([T.Z, Z.Z, x.Z], () => {
                var e, l;
                return (0, o.Z)(t, E.xjy.EMBEDDED) ? T.Z.getGuild(null === (e = x.Z.getChannel(null === (l = Z.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null;
            }),
            L = (0, a.e7)([T.Z], () => (null != _ ? T.Z.getGuild(_.guildId) : null)),
            M = (0, a.e7)([d.Z], () => (null != t ? (null != t.application_id ? d.Z.getApplication(t.application_id) : d.Z.getApplicationByName(t.name)) : null)),
            O = (0, m.Z)(),
            U = (0, v.Z)(n),
            D = O && null != t && U;
        return (null == t ? void 0 : t.type) === E.IIU.HANG_STATUS
            ? null
            : (0, l.jsx)(u.Z, {
                  ...b,
                  activity: t,
                  user: n,
                  application: M,
                  hideHeader: c,
                  activityGuild: null != R ? R : L,
                  showReactions: D,
                  showChannelDetails: N,
                  channel: N ? w : void 0,
                  renderActions: s
                      ? () =>
                            (0, l.jsxs)('div', {
                                className: r()(D && A.actionsWrapper),
                                children: [
                                    (0, l.jsx)(j, {
                                        ...b,
                                        applicationStream: _,
                                        activity: t,
                                        user: n
                                    }),
                                    D &&
                                        (0, l.jsx)(h.ZP, {
                                            showReact: !0,
                                            showReply: !0,
                                            popoutProps: {
                                                replyHeaderText: C.intl.formatToPlainString(C.t['1JSA19'], { activity: t.name }),
                                                replyPlaceholder: C.intl.formatToPlainString(C.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                            },
                                            onInteraction: (e) => {
                                                let { interactionType: l, emoji: i, reply: r } = e;
                                                y.default.track(E.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                    application_id: t.application_id,
                                                    interaction_type: l,
                                                    ...P
                                                }),
                                                    l === g.L.ReactSubmit &&
                                                        null != i &&
                                                        (0, f.H)({
                                                            reaction: i,
                                                            user: n,
                                                            activity: t,
                                                            application: M,
                                                            altText: (0, p.xC)(n, t),
                                                            stream: _
                                                        }),
                                                    l === g.L.ReplySubmit &&
                                                        null != r &&
                                                        (0, f.R)({
                                                            reply: r,
                                                            user: n,
                                                            activity: t,
                                                            application: M,
                                                            altText: (0, p.xC)(n, t),
                                                            stream: _
                                                        });
                                            }
                                        })
                                ]
                            })
                      : null,
                  onOpenSpotifyTrack: S.aG,
                  onOpenSpotifyArtist: S.d$,
                  onOpenSpotifyAlbum: S.Z5
              });
    };
