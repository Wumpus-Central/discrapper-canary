n.d(t, { e: () => G }), n(388685);
var r = n(192379),
    i = n(252258),
    a = n(442837),
    o = n(278323),
    s = n(224706),
    l = n(287734),
    c = n(2052),
    u = n(317381),
    d = n(638880),
    f = n(255621),
    _ = n(16609),
    p = n(452634),
    h = n(527805),
    m = n(620662),
    g = n(841784),
    E = n(275920),
    b = n(906732),
    y = n(835473),
    v = n(592745),
    O = n(592125),
    I = n(757266),
    S = n(650774),
    T = n(430824),
    N = n(283595),
    A = n(496675),
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
        { activity: B, embeddedActivity: F, user: V, onGameJoin: Z, onClose: H, location: W } = e,
        { analyticsLocations: Y } = (0, b.ZP)(null != W ? W : []),
        [K, z] = r.useState(!1),
        q = null != (t = null == F ? void 0 : F.applicationId) ? t : null == B ? void 0 : B.application_id,
        Q = null != F || (0, g.Z)(B),
        X = (0, a.e7)([P.default], () => P.default.getCurrentUser()),
        J = V.id === (null == X ? void 0 : X.id),
        $ = (0, p.Z)({
            channelId: (0, _.pY)(null == F ? void 0 : F.location),
            userId: V.id,
            activity: B
        }),
        ee = (0, a.e7)(
            [N.Z, v.Z, L.Z, I.Z],
            () =>
                Q ||
                (null != q &&
                    (0, M.t)({
                        LibraryApplicationStore: N.Z,
                        LaunchableGameStore: v.Z,
                        DispatchApplicationStore: L.Z,
                        ConnectedAppsStore: I.Z,
                        applicationId: q
                    }))
        ),
        et = (0, a.e7)([u.ZP], () =>
            Array.from(u.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (t === (null == B ? void 0 : B.application_id) || t === (null == F ? void 0 : F.applicationId)) && (0, _.pY)(n) === $;
            })
        ),
        en = (0, a.e7)([D.Z], () => null != B && null != B.application_id && D.Z.getState(B.application_id, k.mFx.JOIN) === k.OcF.LOADING),
        er = (0, y.q)(q),
        ei = ((0, m.Z)(B, k.xjy.CONTEXTLESS) || (null == F ? void 0 : F.location.kind) === i.E.CONTEXTLESS) && Q,
        ea = (0, h.s5)({
            userId: V.id,
            activity: B,
            channelId: $,
            application: er
        }),
        eo = (0, a.e7)([O.Z, T.Z, S.Z, C.Z, R.Z, w.Z, A.Z], () =>
            null == F || ei
                ? (0, f.Z)({
                      user: V,
                      activity: B,
                      application: er,
                      channelId: ei ? void 0 : $,
                      currentUser: X,
                      isEmbedded: Q,
                      ChannelStore: O.Z,
                      GuildStore: T.Z,
                      GuildMemberCountStore: S.Z,
                      RelationshipStore: C.Z,
                      SelectedChannelStore: R.Z,
                      VoiceStateStore: w.Z,
                      PermissionStore: A.Z
                  })
                : ea === h.Fw.CAN_JOIN
        ),
        es = (0, a.e7)([u.ZP], () => {
            if (Array.from(u.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == F ? void 0 : F.applicationId) && e.location.id === (null == F ? void 0 : F.location.id))) return !0;
            let e = u.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == B ? void 0 : B.application_id) && e.location.kind === i.E.CONTEXTLESS;
        }),
        el = (0, c.O)();
    if (Q && null == F && (null == B || !(0, m.Z)(B, k.xjy.CONTEXTLESS))) return null;
    let ec = !x.isPlatformEmbedded;
    if (!((0, m.Z)(B, k.xjy.JOIN) || Q) || null == q) return null;
    let eu = !J || (Q && !es),
        ed = eu && (ec || ee) && !K && !et;
    eu ? ec || ee || null == B || (G = U.NW.formatToPlainString(U.t.SqJBnJ, { name: B.name })) : (G = U.NW.string(U.t['0OiwfH']));
    let ef = null != (n = null == F ? void 0 : F.launchId) ? n : null == B ? void 0 : B.session_id,
        e_ = async (e, t) => {
            var n, r;
            if (null == ef || null == q) return;
            let i = (0, m.Z)(t, k.xjy.EMBEDDED),
                a = R.Z.getVoiceChannelId(),
                o = O.Z.getChannel(a);
            await s.Z.join({
                userId: e.id,
                sessionId: ef,
                applicationId: q,
                channelId: a,
                messageId: null,
                intent: j.Ws.PLAY,
                embedded: i,
                partyId: null != t ? (null == t || null == (n = t.party) ? void 0 : n.id) : '',
                locationObject: el.location,
                analyticsLocations: Y,
                activity: null != t ? t : void 0
            }),
                i ||
                    (0, E.Z)({
                        type: k.q5t.JOIN,
                        userId: e.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: a,
                        channelType: null == o ? void 0 : o.type,
                        applicationId: q,
                        partyId: null != t ? (null == t || null == (r = t.party) ? void 0 : r.id) : '',
                        locationObject: el.location,
                        analyticsLocations: Y
                    });
        },
        ep = async () => {
            let e = !1;
            async function t() {
                let e;
                z(!0),
                    null != B &&
                        (e = await o.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: V.id,
                            activity: B,
                            location: k.Sbl.PROFILE_POPOUT
                        })),
                    null != e && l.default.selectPrivateChannel(e.id);
            }
            if (Q) {
                if (null == q) return;
                if (!eo) return t();
                if (
                    (e = await (0, d.Z)({
                        applicationId: q,
                        activityChannelId: $,
                        locationObject: el.location,
                        analyticsLocations: Y,
                        joinUserId: V.id,
                        joinSessionId: null == B ? void 0 : B.session_id,
                        instanceId: null == F ? void 0 : F.compositeInstanceId,
                        isContextlessActivity: ei
                    }))
                ) {
                    null == H || H();
                    return;
                }
            }
            if (!e) {
                if (eo) {
                    null == Z || Z(), e_(V, B);
                    return;
                }
                await t();
            }
        },
        eh = eo ? U.NW.string(U.t.VJlc0d) : U.NW.string(U.t.OKsSCQ);
    return (
        es && (eh = U.NW.string(U.t.DPfdsr)),
        {
            buttonCTA: eh,
            tooltip: G,
            handleJoinRequest: ep,
            isEnabled: ed,
            isJoining: en,
            isEmbedded: Q
        }
    );
}
