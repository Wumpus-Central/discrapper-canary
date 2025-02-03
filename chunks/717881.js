n.d(t, {
    P: () => A,
    Z: () => w
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(620662),
    c = n(387903),
    u = n(850827),
    d = n(812206),
    m = n(202458),
    f = n(220779),
    p = n(142550),
    h = n(954017),
    g = n(314091),
    v = n(159244),
    _ = n(952164),
    I = n(199902),
    S = n(592125),
    x = n(430824),
    E = n(979651),
    C = n(626135),
    Z = n(153066),
    y = n(981631),
    b = n(388032),
    N = n(243718);
function T(e) {
    let { type: t, source: n, activity: l, applicationStream: a, user: r, guildId: o, channelId: c, onAction: d, actionColor: m } = e;
    return (0, i.jsx)(u.Z, {
        className: (0, Z.l)(N, 'actions', t),
        type: t,
        source: n,
        activity: l,
        applicationStream: a,
        user: r,
        guildId: o,
        look: s.zxk.Looks.FILLED,
        color: null != m ? m : s.zxk.Colors.PRIMARY,
        channelId: c,
        onAction: d
    });
}
let A = c.Z.Types,
    w = function (e) {
        let { activity: t, user: n, useStoreStream: l = !0, showActions: s = !0, hideHeader: u = !1, showChannelDetails: Z = !1, analyticsParams: A, ...w } = e,
            P = (0, r.e7)([E.Z, S.Z], () => {
                var e;
                return S.Z.getChannel(null === (e = E.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
            }),
            j = (0, r.e7)([I.Z], () => (l ? I.Z.getAnyStreamForUser(n.id) : null)),
            R = (0, r.e7)([x.Z, E.Z, S.Z], () => {
                var e, i;
                return (0, o.Z)(t, y.xjy.EMBEDDED) ? x.Z.getGuild(null === (e = S.Z.getChannel(null === (i = E.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null;
            }),
            k = (0, r.e7)([x.Z], () => (null != j ? x.Z.getGuild(j.guildId) : null)),
            L = (0, r.e7)([d.Z], () => (null != t ? (null != t.application_id ? d.Z.getApplication(t.application_id) : d.Z.getApplicationByName(t.name)) : null)),
            O = (0, m.Z)(),
            M = (0, v.Z)(n),
            D = O && null != t && M;
        return (null == t ? void 0 : t.type) === y.IIU.HANG_STATUS
            ? null
            : (0, i.jsx)(c.Z, {
                  ...w,
                  activity: t,
                  user: n,
                  application: L,
                  hideHeader: u,
                  activityGuild: null != R ? R : k,
                  showReactions: D,
                  showChannelDetails: Z,
                  channel: Z ? P : void 0,
                  renderActions: s
                      ? () =>
                            (0, i.jsxs)('div', {
                                className: a()(D && N.actionsWrapper),
                                children: [
                                    (0, i.jsx)(T, {
                                        ...w,
                                        applicationStream: j,
                                        activity: t,
                                        user: n
                                    }),
                                    D &&
                                        (0, i.jsx)(f.ZP, {
                                            showReact: !0,
                                            showReply: !0,
                                            popoutProps: {
                                                replyHeaderText: b.intl.formatToPlainString(b.t['1JSA19'], { activity: t.name }),
                                                replyPlaceholder: b.intl.formatToPlainString(b.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                            },
                                            onInteraction: (e) => {
                                                let { interactionType: i, emoji: l, reply: a } = e;
                                                C.default.track(y.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                    application_id: t.application_id,
                                                    interaction_type: i,
                                                    ...A
                                                }),
                                                    i === p.L.ReactSubmit &&
                                                        null != l &&
                                                        (0, h.H)({
                                                            reaction: l,
                                                            user: n,
                                                            activity: t,
                                                            application: L,
                                                            altText: (0, g.xC)(n, t),
                                                            stream: j
                                                        }),
                                                    i === p.L.ReplySubmit &&
                                                        null != a &&
                                                        (0, h.R)({
                                                            reply: a,
                                                            user: n,
                                                            activity: t,
                                                            application: L,
                                                            altText: (0, g.xC)(n, t),
                                                            stream: j
                                                        });
                                            }
                                        })
                                ]
                            })
                      : null,
                  onOpenSpotifyTrack: _.aG,
                  onOpenSpotifyArtist: _.d$,
                  onOpenSpotifyAlbum: _.Z5
              });
    };
