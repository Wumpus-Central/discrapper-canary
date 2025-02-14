n.d(t, {
    P: () => j,
    Z: () => w
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
    f = n(220779),
    h = n(142550),
    g = n(954017),
    p = n(314091),
    v = n(159244),
    S = n(952164),
    I = n(199902),
    x = n(592125),
    E = n(430824),
    T = n(979651),
    Z = n(626135),
    N = n(153066),
    y = n(981631),
    A = n(388032),
    C = n(965758);
function P(e) {
    let { type: t, source: n, activity: i, applicationStream: r, user: a, guildId: o, channelId: u, onAction: d, actionColor: m } = e;
    return (0, l.jsx)(c.Z, {
        className: (0, N.l)(C, 'actions', t),
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
let j = u.Z.Types,
    w = function (e) {
        let { activity: t, user: n, useStoreStream: i = !0, showActions: s = !0, hideHeader: c = !1, showChannelDetails: N = !1, analyticsParams: j, ...w } = e,
            _ = (0, a.e7)([T.Z, x.Z], () => {
                var e;
                return x.Z.getChannel(null === (e = T.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
            }),
            b = (0, a.e7)([I.Z], () => (i ? I.Z.getAnyStreamForUser(n.id) : null)),
            R = (0, a.e7)([E.Z, T.Z, x.Z], () => {
                var e, l;
                return (0, o.Z)(t, y.xjy.EMBEDDED) ? E.Z.getGuild(null === (e = x.Z.getChannel(null === (l = T.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null;
            }),
            L = (0, a.e7)([E.Z], () => (null != b ? E.Z.getGuild(b.guildId) : null)),
            M = (0, a.e7)([d.Z], () => (null != t ? (null != t.application_id ? d.Z.getApplication(t.application_id) : d.Z.getApplicationByName(t.name)) : null)),
            O = (0, m.Z)(),
            D = (0, v.Z)(n),
            U = O && null != t && D;
        return (null == t ? void 0 : t.type) === y.IIU.HANG_STATUS
            ? null
            : (0, l.jsx)(u.Z, {
                  ...w,
                  activity: t,
                  user: n,
                  application: M,
                  hideHeader: c,
                  activityGuild: null != R ? R : L,
                  showReactions: U,
                  showChannelDetails: N,
                  channel: N ? _ : void 0,
                  renderActions: s
                      ? () =>
                            (0, l.jsxs)('div', {
                                className: r()(U && C.actionsWrapper),
                                children: [
                                    (0, l.jsx)(P, {
                                        ...w,
                                        applicationStream: b,
                                        activity: t,
                                        user: n
                                    }),
                                    U &&
                                        (0, l.jsx)(f.ZP, {
                                            showReact: !0,
                                            showReply: !0,
                                            popoutProps: {
                                                replyHeaderText: A.intl.formatToPlainString(A.t['1JSA19'], { activity: t.name }),
                                                replyPlaceholder: A.intl.formatToPlainString(A.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                            },
                                            onInteraction: (e) => {
                                                let { interactionType: l, emoji: i, reply: r } = e;
                                                Z.default.track(y.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                    application_id: t.application_id,
                                                    interaction_type: l,
                                                    ...j
                                                }),
                                                    l === h.L.ReactSubmit &&
                                                        null != i &&
                                                        (0, g.H)({
                                                            reaction: i,
                                                            user: n,
                                                            activity: t,
                                                            application: M,
                                                            altText: (0, p.xC)(n, t),
                                                            stream: b
                                                        }),
                                                    l === h.L.ReplySubmit &&
                                                        null != r &&
                                                        (0, g.R)({
                                                            reply: r,
                                                            user: n,
                                                            activity: t,
                                                            application: M,
                                                            altText: (0, p.xC)(n, t),
                                                            stream: b
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
