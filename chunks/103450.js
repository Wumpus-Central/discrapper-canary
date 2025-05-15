n.d(t, { e: () => G }), n(388685);
var r = n(73800),
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
    O = n(592745),
    v = n(592125),
    I = n(757266),
    S = n(650774),
    T = n(430824),
    A = n(283595),
    N = n(496675),
    C = n(699516),
    P = n(944486),
    R = n(594174),
    w = n(979651),
    D = n(181106),
    L = n(417363),
    x = n(358085),
    k = n(804739),
    M = n(981631),
    j = n(701488),
    U = n(388032);
function G(e) {
    var t, n;
    let G,
        { activity: B, embeddedActivity: F, user: V, onGameJoin: Z, onClose: H, location: Y } = e,
        { analyticsLocations: W } = (0, b.ZP)(null != Y ? Y : []),
        [K, z] = r.useState(!1),
        q = null != (t = null == F ? void 0 : F.applicationId) ? t : null == B ? void 0 : B.application_id,
        Q = null != F || (0, g.Z)(B),
        X = (0, a.e7)([R.default], () => R.default.getCurrentUser()),
        J = V.id === (null == X ? void 0 : X.id),
        $ = (0, p.Z)({
            channelId: (0, _.pY)(null == F ? void 0 : F.location),
            userId: V.id,
            activity: B
        }),
        ee = (0, a.e7)(
            [A.Z, O.Z, L.Z, I.Z],
            () =>
                Q ||
                (null != q &&
                    (0, k.t)({
                        LibraryApplicationStore: A.Z,
                        LaunchableGameStore: O.Z,
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
        en = (0, a.e7)([D.Z], () => null != B && null != B.application_id && D.Z.getState(B.application_id, M.mFx.JOIN) === M.OcF.LOADING),
        er = (0, y.q)(q),
        ei = (0, h.s5)({
            userId: V.id,
            activity: B,
            channelId: $,
            application: er
        }),
        ea = (0, a.e7)([v.Z, T.Z, S.Z, C.Z, P.Z, w.Z, N.Z], () =>
            null != F
                ? ei === h.Fw.CAN_JOIN
                : (0, f.Z)({
                      user: V,
                      activity: B,
                      application: er,
                      channelId: $,
                      currentUser: X,
                      isEmbedded: Q,
                      ChannelStore: v.Z,
                      GuildStore: T.Z,
                      GuildMemberCountStore: S.Z,
                      RelationshipStore: C.Z,
                      SelectedChannelStore: P.Z,
                      VoiceStateStore: w.Z,
                      PermissionStore: N.Z
                  })
        ),
        eo = (0, a.e7)([u.ZP], () => {
            if (Array.from(u.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == F ? void 0 : F.applicationId) && e.location.id === (null == F ? void 0 : F.location.id))) return !0;
            let e = u.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == B ? void 0 : B.application_id) && e.location.kind === i.E.CONTEXTLESS;
        }),
        es = (0, c.O)();
    if (Q && null == F && (null == B || !(0, m.Z)(B, M.xjy.CONTEXTLESS))) return null;
    let el = !x.isPlatformEmbedded;
    if (!((0, m.Z)(B, M.xjy.JOIN) || Q) || null == q) return null;
    let ec = !J || (Q && !eo),
        eu = ec && (el || ee) && !K && !et;
    ec ? el || ee || null == B || (G = U.intl.formatToPlainString(U.t.SqJBnJ, { name: B.name })) : (G = U.intl.string(U.t['0OiwfH']));
    let ed = null != (n = null == F ? void 0 : F.launchId) ? n : null == B ? void 0 : B.session_id,
        ef = async (e, t) => {
            if (null == ed || null == q) return;
            let n = (0, m.Z)(t, M.xjy.EMBEDDED),
                r = P.Z.getVoiceChannelId(),
                i = v.Z.getChannel(r);
            if (
                (await s.Z.join({
                    userId: e.id,
                    sessionId: ed,
                    applicationId: q,
                    channelId: r,
                    messageId: null,
                    intent: j.Ws.PLAY,
                    embedded: n,
                    locationObject: es.location,
                    analyticsLocations: W
                }),
                !n)
            ) {
                var a;
                (0, E.Z)({
                    type: M.q5t.JOIN,
                    userId: e.id,
                    guildId: null == i ? void 0 : i.guild_id,
                    channelId: r,
                    channelType: null == i ? void 0 : i.type,
                    applicationId: q,
                    partyId: null != t ? (null == t || null == (a = t.party) ? void 0 : a.id) : '',
                    locationObject: es.location,
                    analyticsLocations: W
                });
            }
        },
        e_ = async () => {
            let e = !1;
            async function t() {
                let e;
                z(!0),
                    null != B &&
                        (e = await o.Z.sendActivityInviteUser({
                            type: M.mFx.JOIN_REQUEST,
                            userId: V.id,
                            activity: B,
                            location: M.Sbl.USER_ACTIVITY_ACTIONS
                        })),
                    null != e && l.default.selectPrivateChannel(e.id);
            }
            if (Q) {
                if (null == q) return;
                if (!ea) return t();
                if (
                    (e = await (0, d.Z)({
                        applicationId: q,
                        activityChannelId: $,
                        locationObject: es.location,
                        analyticsLocations: W
                    }))
                ) {
                    null == H || H();
                    return;
                }
            }
            if (!e) {
                if (ea) {
                    null == Z || Z(), ef(V, B);
                    return;
                }
                await t();
            }
        },
        ep = ea ? U.intl.string(U.t.VJlc0d) : U.intl.string(U.t.OKsSCQ);
    return (
        eo && (ep = U.intl.string(U.t.DPfdsr)),
        {
            buttonCTA: ep,
            tooltip: G,
            handleJoinRequest: e_,
            isEnabled: eu,
            isJoining: en,
            isEmbedded: Q
        }
    );
}
