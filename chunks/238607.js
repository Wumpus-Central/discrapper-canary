r.d(n, {
    Z: function () {
        return Z;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(278323),
    c = r(224706),
    d = r(287734),
    f = r(566620),
    _ = r(317381),
    h = r(638880),
    p = r(255621),
    m = r(452634),
    g = r(620662),
    E = r(841784),
    v = r(275920),
    I = r(906732),
    T = r(835473),
    b = r(592745),
    y = r(592125),
    S = r(757266),
    A = r(650774),
    N = r(430824),
    C = r(283595),
    R = r(496675),
    O = r(699516),
    D = r(944486),
    L = r(979651),
    x = r(181106),
    w = r(417363),
    P = r(358085),
    M = r(804739),
    k = r(475413),
    U = r(981631),
    B = r(701488),
    G = r(388032);
function Z(e) {
    let { user: n, currentUser: r, activity: i, onAction: Z, onClose: F } = e,
        { analyticsLocations: V, newestAnalyticsLocation: j } = (0, I.ZP)(),
        [H] = (0, T.Z)([null == i ? void 0 : i.application_id]),
        Y = (0, E.Z)(i),
        W = null == i ? void 0 : i.application_id,
        K = null == i ? void 0 : i.session_id,
        z = (0, m.Z)({
            activity: i,
            userId: n.id,
            channelId: void 0
        }),
        q =
            (0, o.e7)(
                [C.Z, b.Z, w.Z, S.Z],
                () =>
                    null != W &&
                    (0, M.t)({
                        applicationId: W,
                        LibraryApplicationStore: C.Z,
                        LaunchableGameStore: b.Z,
                        DispatchApplicationStore: w.Z,
                        ConnectedAppsStore: S.Z
                    })
            ) || Y,
        Q = (0, o.e7)([_.ZP], () => null != _.ZP.getSelfEmbeddedActivityForChannel(z)),
        X = (0, o.e7)([x.Z], () => null != W && x.Z.getState(W, U.mFx.JOIN) === U.OcF.LOADING),
        J = (0, o.e7)([y.Z, N.Z, A.Z, O.Z, D.Z, L.Z, R.Z], () =>
            (0, p.Z)({
                user: n,
                activity: i,
                application: H,
                channelId: z,
                currentUser: r,
                isEmbedded: Y,
                ChannelStore: y.Z,
                GuildStore: N.Z,
                GuildMemberCountStore: A.Z,
                RelationshipStore: O.Z,
                SelectedChannelStore: D.Z,
                VoiceStateStore: L.Z,
                PermissionStore: R.Z
            })
        ),
        [$, ee] = s.useState(!1),
        et = $ || Q || (P.isPlatformEmbedded && !q);
    if (null == W || !J || (!(0, g.Z)(i, U.xjy.JOIN) && !Y)) return null;
    let en = async () => {
            if (
                Y &&
                J &&
                null != z &&
                null != W &&
                (await (0, h.Z)({
                    applicationId: W,
                    activityChannelId: z,
                    locationObject: { page: U.ZY5.USER_PROFILE },
                    analyticsLocations: V
                }))
            ) {
                null == F || F();
                return;
            }
            if (J && null != W && null != K) {
                var e, r;
                let a = D.Z.getVoiceChannelId(),
                    s = y.Z.getChannel(a);
                await c.Z.join({
                    userId: n.id,
                    sessionId: K,
                    applicationId: W,
                    channelId: a,
                    messageId: null,
                    intent: B.Ws.PLAY,
                    embedded: Y,
                    partyId: null == i ? void 0 : null === (e = i.party) || void 0 === e ? void 0 : e.id,
                    locationObject: { page: U.ZY5.USER_PROFILE },
                    analyticsLocations: V
                }),
                    !Y &&
                        (0, v.Z)({
                            type: U.q5t.JOIN,
                            userId: n.id,
                            guildId: null == s ? void 0 : s.guild_id,
                            channelId: a,
                            channelType: null == s ? void 0 : s.type,
                            partyId: null == i ? void 0 : null === (r = i.party) || void 0 === r ? void 0 : r.id,
                            applicationId: W,
                            analyticsLocations: V
                        });
            }
            if ((ee(!0), null != z && null != W))
                return f.pu({
                    channelId: z,
                    applicationId: W,
                    userId: n.id,
                    location: j
                });
            if (null != i) {
                let e = await u.Z.sendActivityInviteUser({
                    type: U.mFx.JOIN_REQUEST,
                    userId: n.id,
                    activity: i,
                    location: U.Sbl.PROFILE_POPOUT
                });
                null != e && d.default.selectPrivateChannel(e.id);
            }
        },
        er = () => (n.id === r.id ? G.intl.string(G.t['0OiwfH']) : P.isPlatformEmbedded && !q && null != i ? G.intl.formatToPlainString(G.t.SqJBnJ, { name: i.name }) : null);
    return Y
        ? (0, a.jsx)(l.Tooltip, {
              text: er(),
              children: (e) =>
                  (0, a.jsx)(k.tG, {
                      ...e,
                      icon: l.ActivitiesIcon,
                      text: G.intl.string(G.t['4i2vj4']),
                      disabled: et,
                      submitting: X,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == Z || Z({ action: 'PRESS_JOIN_BUTTON' }), en();
                      }
                  })
          })
        : (0, a.jsx)(l.Tooltip, {
              text: er(),
              children: (e) =>
                  (0, a.jsx)(k.tG, {
                      ...e,
                      icon: l.GameControllerIcon,
                      text: J ? G.intl.string(G.t.VJlc0d) : G.intl.string(G.t.OKsSCQ),
                      disabled: et,
                      submitting: X,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == Z || Z({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), en();
                      }
                  })
          });
}
