(n.d(t, { e: () => G }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(278323),
    o = n(224706),
    s = n(287734),
    l = n(2052),
    c = n(317381),
    u = n(638880),
    d = n(255621),
    f = n(16609),
    _ = n(452634),
    p = n(527805),
    h = n(620662),
    m = n(841784),
    g = n(275920),
    E = n(906732),
    b = n(835473),
    y = n(813370),
    O = n(592745),
    v = n(592125),
    I = n(757266),
    T = n(650774),
    S = n(430824),
    A = n(283595),
    N = n(496675),
    C = n(699516),
    R = n(944486),
    P = n(594174),
    w = n(979651),
    D = n(181106),
    L = n(417363),
    x = n(358085),
    M = n(804739),
    k = n(981631),
    j = n(701488),
    U = n(388032);
function G(e) {
    var t, n;
    let G,
        { activity: B, embeddedActivity: V, user: F, onGameJoin: Z, onClose: H, location: Y } = e,
        { analyticsLocations: W } = (0, E.ZP)(null != Y ? Y : []),
        [K, z] = r.useState(!1),
        q = null != (t = null == V ? void 0 : V.applicationId) ? t : null == B ? void 0 : B.application_id,
        X = null != V || (0, m.Z)(B),
        Q = (0, i.e7)([P.default], () => P.default.getCurrentUser()),
        J = F.id === (null == Q ? void 0 : Q.id),
        $ = (0, _.Z)({
            channelId: (0, f.p)(null == V ? void 0 : V.location),
            userId: F.id,
            activity: B
        }),
        ee = (0, i.e7)(
            [A.Z, O.Z, L.Z, I.Z],
            () =>
                X ||
                (null != q &&
                    (0, M.t)({
                        LibraryApplicationStore: A.Z,
                        LaunchableGameStore: O.Z,
                        DispatchApplicationStore: L.Z,
                        ConnectedAppsStore: I.Z,
                        applicationId: q
                    }))
        ),
        et = (0, i.e7)([c.ZP], () =>
            Array.from(c.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (t === (null == B ? void 0 : B.application_id) || t === (null == V ? void 0 : V.applicationId)) && (0, f.p)(n) === $;
            })
        ),
        en = (0, i.e7)([D.Z], () => null != B && null != B.application_id && D.Z.getState(B.application_id, k.mFx.JOIN) === k.OcF.LOADING),
        er = (0, b.q)(q),
        ei = (0, y.A)(er),
        ea = (0, p.s5)({
            userId: F.id,
            activity: B,
            channelId: $,
            application: er
        }),
        eo = (0, i.e7)([v.Z, S.Z, T.Z, C.Z, R.Z, w.Z, N.Z], () =>
            null != V
                ? ea === p.Fw.CAN_JOIN
                : (0, d.Z)({
                      user: F,
                      activity: B,
                      application: er,
                      channelId: $,
                      currentUser: Q,
                      isEmbedded: X,
                      ChannelStore: v.Z,
                      GuildStore: S.Z,
                      GuildMemberCountStore: T.Z,
                      RelationshipStore: C.Z,
                      SelectedChannelStore: R.Z,
                      VoiceStateStore: w.Z,
                      PermissionStore: N.Z
                  })
        ),
        es = (0, i.e7)([c.ZP], () => {
            if (Array.from(c.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == V ? void 0 : V.applicationId) && e.location.id === (null == V ? void 0 : V.location.id))) return !0;
            let e = c.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == B ? void 0 : B.application_id);
        }),
        el = (0, l.O)();
    if (X && null == V && (null == B || !(0, h.Z)(B, k.xjy.CONTEXTLESS))) return null;
    let ec = !x.isPlatformEmbedded;
    if (!((0, h.Z)(B, k.xjy.JOIN) || X) || null == q) return null;
    let eu = !J || (X && !es),
        ed = eu && (ec || ee) && !K && !et;
    eu ? ec || ee || null == B || (G = U.intl.formatToPlainString(U.t.SqJBnJ, { name: B.name })) : (G = U.intl.string(U.t['0OiwfH']));
    let ef = null != (n = null == V ? void 0 : V.launchId) ? n : null == B ? void 0 : B.session_id,
        e_ = async (e, t) => {
            if (null == ef || null == q) return;
            let n = (0, h.Z)(t, k.xjy.EMBEDDED),
                r = R.Z.getVoiceChannelId(),
                i = v.Z.getChannel(r);
            if (
                (await o.Z.join({
                    userId: e.id,
                    sessionId: ef,
                    applicationId: q,
                    channelId: r,
                    messageId: null,
                    intent: j.Ws.PLAY,
                    embedded: n,
                    locationObject: el.location,
                    analyticsLocations: W
                }),
                !n)
            ) {
                var a;
                (0, g.Z)({
                    type: k.q5t.JOIN,
                    userId: e.id,
                    guildId: null == i ? void 0 : i.guild_id,
                    channelId: r,
                    channelType: null == i ? void 0 : i.type,
                    applicationId: q,
                    partyId: null != t ? (null == t || null == (a = t.party) ? void 0 : a.id) : '',
                    locationObject: el.location,
                    analyticsLocations: W
                });
            }
        },
        ep = async () => {
            let e = !1;
            async function t() {
                let e;
                (z(!0),
                    null != B &&
                        (e = await a.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: F.id,
                            activity: B,
                            location: k.Sbl.USER_ACTIVITY_ACTIONS
                        })),
                    null != e && s.default.selectPrivateChannel(e.id));
            }
            if (X && !ei) {
                if (null == q) return;
                if (!eo) return t();
                if (
                    (e = await (0, u.Z)({
                        applicationId: q,
                        activityChannelId: $,
                        locationObject: el.location,
                        analyticsLocations: W
                    }))
                ) {
                    null == H || H();
                    return;
                }
            }
            if (!e) {
                if (eo) {
                    (null == Z || Z(), e_(F, B), null == H || H());
                    return;
                }
                await t();
            }
        },
        eh = eo ? U.intl.string(U.t.VJlc0d) : U.intl.string(U.t.OKsSCQ);
    return (
        es && (eh = U.intl.string(U.t.DPfdsr)),
        {
            buttonCTA: eh,
            tooltip: G,
            handleJoinRequest: ep,
            isEnabled: ed,
            isJoining: en,
            isEmbedded: X
        }
    );
}
