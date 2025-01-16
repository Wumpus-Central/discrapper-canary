n.d(t, {
    P: function () {
        return R;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(620662),
    u = n(841784),
    d = n(387903),
    m = n(850827),
    f = n(812206),
    p = n(202458),
    h = n(220779),
    g = n(142550),
    v = n(954017),
    S = n(314091),
    I = n(159244),
    _ = n(574176),
    x = n(952164),
    E = n(199902),
    C = n(592125),
    y = n(430824),
    Z = n(496675),
    b = n(979651),
    T = n(626135),
    A = n(153066),
    N = n(981631),
    w = n(388032),
    j = n(243718);
function P(e) {
    let { type: t, source: n, activity: l, applicationStream: a, user: r, guildId: s, channelId: c, onAction: d, isEmbedded: f = (0, u.Z)(l), actionColor: p } = e;
    return (0, i.jsx)(m.Z, {
        className: (0, A.l)(j, 'actions', t),
        type: t,
        source: n,
        activity: l,
        applicationStream: a,
        user: r,
        guildId: s,
        look: o.Button.Looks.FILLED,
        color: null != p ? p : o.Button.Colors.PRIMARY,
        channelId: c,
        onAction: d,
        isEmbedded: f
    });
}
let R = d.Z.Types;
t.Z = function (e) {
    let { activity: t, user: n, useStoreStream: a = !0, showActions: o = !0, hideHeader: u = !1, showChannelDetails: m = !1, analyticsParams: A, ...R } = e,
        M = (0, s.e7)([b.Z, C.Z], () => {
            var e;
            return C.Z.getChannel(null === (e = b.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: O } = _.n.useExperiment(
            {
                guildId: null == M ? void 0 : M.guild_id,
                location: 'UserActivityContainer'
            },
            { autoTrackExposure: !1 }
        ),
        L = (0, s.e7)([E.Z], () => (a ? E.Z.getAnyStreamForUser(n.id) : null)),
        k = O && Z.Z.can(N.Plq.CONNECT, M),
        D = (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS && k ? M : null,
        U = (0, s.e7)([y.Z, b.Z, C.Z], () => {
            var e, i;
            return (0, c.Z)(t, N.xjy.EMBEDDED) ? y.Z.getGuild(null === (e = C.Z.getChannel(null === (i = b.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != D ? y.Z.getGuild(D.getGuildId()) : null;
        }),
        V = (0, s.e7)([y.Z], () => (null != L ? y.Z.getGuild(L.guildId) : null)),
        F = (0, s.e7)([f.Z], () => {
            if (null != t) return null != t.application_id ? f.Z.getApplication(t.application_id) : f.Z.getApplicationByName(t.name);
            return null;
        }),
        W = (0, p.Z)(),
        B = (0, I.Z)(n),
        G = W && null != t && B;
    return (l.useEffect(() => {
        (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS &&
            k &&
            T.default.track(N.rMx.VIEW_HANG_STATUS, {
                source: 'UserProfilePopout',
                guild_id: null == D ? void 0 : D.guild_id,
                channel_id: null == D ? void 0 : D.id
            });
    }, [null == t ? void 0 : t.type, k, D]),
    (null == t ? void 0 : t.type) !== N.IIU.HANG_STATUS || k)
        ? (0, i.jsx)(d.Z, {
              ...R,
              activity: t,
              user: n,
              application: F,
              hideHeader: u,
              activityGuild: null != U ? U : V,
              showReactions: G,
              showChannelDetails: m,
              channel: m ? M : void 0,
              renderActions: o
                  ? () =>
                        (0, i.jsxs)('div', {
                            className: r()(G && j.actionsWrapper),
                            children: [
                                (0, i.jsx)(P, {
                                    ...R,
                                    applicationStream: L,
                                    activity: t,
                                    user: n
                                }),
                                G &&
                                    (0, i.jsx)(h.ZP, {
                                        showReact: !0,
                                        showReply: !0,
                                        popoutProps: {
                                            replyHeaderText: w.intl.formatToPlainString(w.t['1JSA19'], { activity: t.name }),
                                            replyPlaceholder: w.intl.formatToPlainString(w.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                        },
                                        onInteraction: (e) => {
                                            let { interactionType: i, emoji: l, reply: a } = e;
                                            T.default.track(N.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                application_id: t.application_id,
                                                interaction_type: i,
                                                ...A
                                            }),
                                                i === g.L.ReactSubmit &&
                                                    null != l &&
                                                    (0, v.sendReactionToActivity)({
                                                        reaction: l,
                                                        user: n,
                                                        activity: t,
                                                        application: F,
                                                        altText: (0, S.xC)(n, t),
                                                        stream: L
                                                    }),
                                                i === g.L.ReplySubmit &&
                                                    null != a &&
                                                    (0, v.sendReplyToActivity)({
                                                        reply: a,
                                                        user: n,
                                                        activity: t,
                                                        application: F,
                                                        altText: (0, S.xC)(n, t),
                                                        stream: L
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
