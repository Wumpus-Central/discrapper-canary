n.d(t, {
    P: function () {
        return P;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(620662),
    u = n(387903),
    d = n(850827),
    m = n(812206),
    f = n(202458),
    p = n(220779),
    h = n(142550),
    g = n(954017),
    v = n(314091),
    I = n(159244),
    S = n(574176),
    _ = n(952164),
    x = n(199902),
    E = n(592125),
    C = n(430824),
    y = n(496675),
    Z = n(979651),
    b = n(626135),
    T = n(153066),
    N = n(981631),
    A = n(388032),
    j = n(243718);
function w(e) {
    let { type: t, source: n, activity: l, applicationStream: a, user: r, guildId: s, channelId: c, onAction: u, actionColor: m } = e;
    return (0, i.jsx)(d.Z, {
        className: (0, T.l)(j, 'actions', t),
        type: t,
        source: n,
        activity: l,
        applicationStream: a,
        user: r,
        guildId: s,
        look: o.Button.Looks.FILLED,
        color: null != m ? m : o.Button.Colors.PRIMARY,
        channelId: c,
        onAction: u
    });
}
let P = u.Z.Types;
t.Z = function (e) {
    let { activity: t, user: n, useStoreStream: a = !0, showActions: o = !0, hideHeader: d = !1, showChannelDetails: T = !1, analyticsParams: P, ...R } = e,
        M = (0, s.e7)([Z.Z, E.Z], () => {
            var e;
            return E.Z.getChannel(null === (e = Z.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: O } = S.n.useExperiment(
            {
                guildId: null == M ? void 0 : M.guild_id,
                location: 'UserActivityContainer'
            },
            { autoTrackExposure: !1 }
        ),
        L = (0, s.e7)([x.Z], () => (a ? x.Z.getAnyStreamForUser(n.id) : null)),
        k = O && y.Z.can(N.Plq.CONNECT, M),
        D = (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS && k ? M : null,
        U = (0, s.e7)([C.Z, Z.Z, E.Z], () => {
            var e, i;
            return (0, c.Z)(t, N.xjy.EMBEDDED) ? C.Z.getGuild(null === (e = E.Z.getChannel(null === (i = Z.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != D ? C.Z.getGuild(D.getGuildId()) : null;
        }),
        V = (0, s.e7)([C.Z], () => (null != L ? C.Z.getGuild(L.guildId) : null)),
        F = (0, s.e7)([m.Z], () => {
            if (null != t) return null != t.application_id ? m.Z.getApplication(t.application_id) : m.Z.getApplicationByName(t.name);
            return null;
        }),
        B = (0, f.Z)(),
        W = (0, I.Z)(n),
        z = B && null != t && W;
    return (l.useEffect(() => {
        (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS &&
            k &&
            b.default.track(N.rMx.VIEW_HANG_STATUS, {
                source: 'UserProfilePopout',
                guild_id: null == D ? void 0 : D.guild_id,
                channel_id: null == D ? void 0 : D.id
            });
    }, [null == t ? void 0 : t.type, k, D]),
    (null == t ? void 0 : t.type) !== N.IIU.HANG_STATUS || k)
        ? (0, i.jsx)(u.Z, {
              ...R,
              activity: t,
              user: n,
              application: F,
              hideHeader: d,
              activityGuild: null != U ? U : V,
              showReactions: z,
              showChannelDetails: T,
              channel: T ? M : void 0,
              renderActions: o
                  ? () =>
                        (0, i.jsxs)('div', {
                            className: r()(z && j.actionsWrapper),
                            children: [
                                (0, i.jsx)(w, {
                                    ...R,
                                    applicationStream: L,
                                    activity: t,
                                    user: n
                                }),
                                z &&
                                    (0, i.jsx)(p.ZP, {
                                        showReact: !0,
                                        showReply: !0,
                                        popoutProps: {
                                            replyHeaderText: A.intl.formatToPlainString(A.t['1JSA19'], { activity: t.name }),
                                            replyPlaceholder: A.intl.formatToPlainString(A.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                        },
                                        onInteraction: (e) => {
                                            let { interactionType: i, emoji: l, reply: a } = e;
                                            b.default.track(N.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                application_id: t.application_id,
                                                interaction_type: i,
                                                ...P
                                            }),
                                                i === h.L.ReactSubmit &&
                                                    null != l &&
                                                    (0, g.sendReactionToActivity)({
                                                        reaction: l,
                                                        user: n,
                                                        activity: t,
                                                        application: F,
                                                        altText: (0, v.xC)(n, t),
                                                        stream: L
                                                    }),
                                                i === h.L.ReplySubmit &&
                                                    null != a &&
                                                    (0, g.sendReplyToActivity)({
                                                        reply: a,
                                                        user: n,
                                                        activity: t,
                                                        application: F,
                                                        altText: (0, v.xC)(n, t),
                                                        stream: L
                                                    });
                                        }
                                    })
                            ]
                        })
                  : null,
              onOpenSpotifyTrack: _.aG,
              onOpenSpotifyArtist: _.d$,
              onOpenSpotifyAlbum: _.Z5
          })
        : null;
};
