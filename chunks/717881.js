n.d(t, {
    P: function () {
        return P;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    S = n(159244),
    I = n(574176),
    x = n(952164),
    _ = n(199902),
    C = n(592125),
    b = n(430824),
    E = n(496675),
    y = n(979651),
    Z = n(626135),
    T = n(153066),
    N = n(981631),
    A = n(388032),
    j = n(243718);
function w(e) {
    let { type: t, source: n, activity: l, applicationStream: r, user: a, guildId: s, channelId: c, onAction: u, actionColor: m } = e;
    return (0, i.jsx)(d.Z, {
        className: (0, T.l)(j, 'actions', t),
        type: t,
        source: n,
        activity: l,
        applicationStream: r,
        user: a,
        guildId: s,
        look: o.Button.Looks.FILLED,
        color: null != m ? m : o.Button.Colors.PRIMARY,
        channelId: c,
        onAction: u
    });
}
let P = u.Z.Types;
t.Z = function (e) {
    let { activity: t, user: n, useStoreStream: r = !0, showActions: o = !0, hideHeader: d = !1, showChannelDetails: T = !1, analyticsParams: P, ...R } = e,
        O = (0, s.e7)([y.Z, C.Z], () => {
            var e;
            return C.Z.getChannel(null === (e = y.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: M } = I.n.useExperiment(
            {
                guildId: null == O ? void 0 : O.guild_id,
                location: 'UserActivityContainer'
            },
            { autoTrackExposure: !1 }
        ),
        k = (0, s.e7)([_.Z], () => (r ? _.Z.getAnyStreamForUser(n.id) : null)),
        L = M && E.Z.can(N.Plq.CONNECT, O),
        D = (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS && L ? O : null,
        U = (0, s.e7)([b.Z, y.Z, C.Z], () => {
            var e, i;
            return (0, c.Z)(t, N.xjy.EMBEDDED) ? b.Z.getGuild(null === (e = C.Z.getChannel(null === (i = y.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != D ? b.Z.getGuild(D.getGuildId()) : null;
        }),
        V = (0, s.e7)([b.Z], () => (null != k ? b.Z.getGuild(k.guildId) : null)),
        F = (0, s.e7)([m.Z], () => {
            if (null != t) return null != t.application_id ? m.Z.getApplication(t.application_id) : m.Z.getApplicationByName(t.name);
            return null;
        }),
        z = (0, f.Z)(),
        B = (0, S.Z)(n),
        W = z && null != t && B;
    return (l.useEffect(() => {
        (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS &&
            L &&
            Z.default.track(N.rMx.VIEW_HANG_STATUS, {
                source: 'UserProfilePopout',
                guild_id: null == D ? void 0 : D.guild_id,
                channel_id: null == D ? void 0 : D.id
            });
    }, [null == t ? void 0 : t.type, L, D]),
    (null == t ? void 0 : t.type) !== N.IIU.HANG_STATUS || L)
        ? (0, i.jsx)(u.Z, {
              ...R,
              activity: t,
              user: n,
              application: F,
              hideHeader: d,
              activityGuild: null != U ? U : V,
              showReactions: W,
              showChannelDetails: T,
              channel: T ? O : void 0,
              renderActions: o
                  ? () =>
                        (0, i.jsxs)('div', {
                            className: a()(W && j.actionsWrapper),
                            children: [
                                (0, i.jsx)(w, {
                                    ...R,
                                    applicationStream: k,
                                    activity: t,
                                    user: n
                                }),
                                W &&
                                    (0, i.jsx)(p.ZP, {
                                        showReact: !0,
                                        showReply: !0,
                                        popoutProps: {
                                            replyHeaderText: A.intl.formatToPlainString(A.t['1JSA19'], { activity: t.name }),
                                            replyPlaceholder: A.intl.formatToPlainString(A.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                        },
                                        onInteraction: (e) => {
                                            let { interactionType: i, emoji: l, reply: r } = e;
                                            Z.default.track(N.rMx.ACTIVITY_REACTOR_INTERACTED, {
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
                                                        stream: k
                                                    }),
                                                i === h.L.ReplySubmit &&
                                                    null != r &&
                                                    (0, g.sendReplyToActivity)({
                                                        reply: r,
                                                        user: n,
                                                        activity: t,
                                                        application: F,
                                                        altText: (0, v.xC)(n, t),
                                                        stream: k
                                                    });
                                        }
                                    })
                            ]
                        })
                  : null,
              onOpenSpotifyTrack: x.aG,
              onOpenSpotifyArtist: x.d$,
              onOpenSpotifyAlbum: x.Z5
          })
        : null;
};
