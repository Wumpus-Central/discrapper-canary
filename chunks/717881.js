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
    c = n(387903),
    u = n(850827),
    d = n(812206),
    m = n(202458),
    p = n(220779),
    h = n(142550),
    g = n(954017),
    f = n(314091),
    v = n(159244),
    S = n(952164),
    x = n(199902),
    I = n(592125),
    y = n(430824),
    T = n(979651),
    N = n(626135),
    A = n(153066),
    E = n(981631),
    Z = n(388032),
    C = n(243718);
function j(e) {
    let { type: t, source: n, activity: i, applicationStream: r, user: a, guildId: o, channelId: c, onAction: d, actionColor: m } = e;
    return (0, l.jsx)(u.Z, {
        className: (0, A.l)(C, 'actions', t),
        type: t,
        source: n,
        activity: i,
        applicationStream: r,
        user: a,
        guildId: o,
        look: s.zxk.Looks.FILLED,
        color: null != m ? m : s.zxk.Colors.PRIMARY,
        channelId: c,
        onAction: d
    });
}
let P = c.Z.Types,
    b = function (e) {
        let { activity: t, user: n, useStoreStream: i = !0, showActions: s = !0, hideHeader: u = !1, showChannelDetails: A = !1, analyticsParams: P, ...b } = e,
            w = (0, a.e7)([T.Z, I.Z], () => {
                var e;
                return I.Z.getChannel(null === (e = T.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
            }),
            _ = (0, a.e7)([x.Z], () => (i ? x.Z.getAnyStreamForUser(n.id) : null)),
            R = (0, a.e7)([y.Z, T.Z, I.Z], () => {
                var e, l;
                return (0, o.Z)(t, E.xjy.EMBEDDED) ? y.Z.getGuild(null === (e = I.Z.getChannel(null === (l = T.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null;
            }),
            L = (0, a.e7)([y.Z], () => (null != _ ? y.Z.getGuild(_.guildId) : null)),
            M = (0, a.e7)([d.Z], () => (null != t ? (null != t.application_id ? d.Z.getApplication(t.application_id) : d.Z.getApplicationByName(t.name)) : null)),
            U = (0, m.Z)(),
            k = (0, v.Z)(n),
            O = U && null != t && k;
        return (null == t ? void 0 : t.type) === E.IIU.HANG_STATUS
            ? null
            : (0, l.jsx)(c.Z, {
                  ...b,
                  activity: t,
                  user: n,
                  application: M,
                  hideHeader: u,
                  activityGuild: null != R ? R : L,
                  showReactions: O,
                  showChannelDetails: A,
                  channel: A ? w : void 0,
                  renderActions: s
                      ? () =>
                            (0, l.jsxs)('div', {
                                className: r()(O && C.actionsWrapper),
                                children: [
                                    (0, l.jsx)(j, {
                                        ...b,
                                        applicationStream: _,
                                        activity: t,
                                        user: n
                                    }),
                                    O &&
                                        (0, l.jsx)(p.ZP, {
                                            showReact: !0,
                                            showReply: !0,
                                            popoutProps: {
                                                replyHeaderText: Z.intl.formatToPlainString(Z.t['1JSA19'], { activity: t.name }),
                                                replyPlaceholder: Z.intl.formatToPlainString(Z.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                            },
                                            onInteraction: (e) => {
                                                let { interactionType: l, emoji: i, reply: r } = e;
                                                N.default.track(E.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                    application_id: t.application_id,
                                                    interaction_type: l,
                                                    ...P
                                                }),
                                                    l === h.L.ReactSubmit &&
                                                        null != i &&
                                                        (0, g.H)({
                                                            reaction: i,
                                                            user: n,
                                                            activity: t,
                                                            application: M,
                                                            altText: (0, f.xC)(n, t),
                                                            stream: _
                                                        }),
                                                    l === h.L.ReplySubmit &&
                                                        null != r &&
                                                        (0, g.R)({
                                                            reply: r,
                                                            user: n,
                                                            activity: t,
                                                            application: M,
                                                            altText: (0, f.xC)(n, t),
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
