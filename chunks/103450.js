n.d(t, { e: () => G }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(278323),
    o = n(224706),
    s = n(287734),
    l = n(2052),
    c = n(317381),
    u = n(638880),
    d = n(255621),
    f = n(16609),
    p = n(452634),
    _ = n(527805),
    m = n(620662),
    h = n(841784),
    g = n(275920),
    E = n(906732),
    b = n(835473),
    y = n(813370),
    O = n(592745),
    v = n(592125),
    S = n(757266),
    I = n(650774),
    T = n(430824),
    A = n(283595),
    C = n(496675),
    N = n(699516),
    P = n(944486),
    R = n(594174),
    w = n(979651),
    D = n(181106),
    x = n(417363),
    L = n(358085),
    j = n(804739),
    M = n(981631),
    k = n(701488),
    U = n(388032);
function G(e) {
    var t, n;
    let G,
        {
            activity: Z,
            embeddedActivity: B,
            user: F,
            onGameJoin: V,
            onClose: H,
            location: Y,
            supportsAskToJoin: W = !0,
        } = e,
        { analyticsLocations: K } = (0, E.ZP)(null != Y ? Y : []),
        [z, q] = r.useState(!1),
        X = null != (t = null == B ? void 0 : B.applicationId) ? t : null == Z ? void 0 : Z.application_id,
        Q = null != B || (0, h.Z)(Z),
        J = (0, i.e7)([R.default], () => R.default.getCurrentUser()),
        $ = F.id === (null == J ? void 0 : J.id),
        ee = (0, p.Z)({
            channelId: (0, f.p)(null == B ? void 0 : B.location),
            userId: F.id,
            activity: Z,
        }),
        et = (0, i.e7)(
            [A.Z, O.Z, x.Z, S.Z],
            () =>
                Q ||
                (null != X &&
                    (0, j.t)({
                        LibraryApplicationStore: A.Z,
                        LaunchableGameStore: O.Z,
                        DispatchApplicationStore: x.Z,
                        ConnectedAppsStore: S.Z,
                        applicationId: X,
                    })),
        ),
        en = (0, i.e7)([c.ZP], () =>
            Array.from(c.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (
                    (t === (null == Z ? void 0 : Z.application_id) || t === (null == B ? void 0 : B.applicationId)) &&
                    (0, f.p)(n) === ee
                );
            }),
        ),
        er = (0, i.e7)(
            [D.Z],
            () => null != Z && null != Z.application_id && D.Z.getState(Z.application_id, M.mFx.JOIN) === M.OcF.LOADING,
        ),
        ei = (0, b.q)(X),
        ea = (0, y.A)(ei),
        eo = (0, _.s5)({
            userId: F.id,
            activity: Z,
            channelId: ee,
            application: ei,
        }),
        es = (0, i.e7)([v.Z, T.Z, I.Z, N.Z, P.Z, w.Z, C.Z], () =>
            null != B
                ? eo === _.Fw.CAN_JOIN
                : (0, d.Z)({
                      user: F,
                      activity: Z,
                      application: ei,
                      channelId: ee,
                      currentUser: J,
                      isEmbedded: Q,
                      ChannelStore: v.Z,
                      GuildStore: T.Z,
                      GuildMemberCountStore: I.Z,
                      RelationshipStore: N.Z,
                      SelectedChannelStore: P.Z,
                      VoiceStateStore: w.Z,
                      PermissionStore: C.Z,
                  }),
        ),
        el = (0, i.e7)([c.ZP], () => {
            if (
                Array.from(c.ZP.getSelfEmbeddedActivities().values()).some(
                    (e) =>
                        e.applicationId === (null == B ? void 0 : B.applicationId) &&
                        e.location.id === (null == B ? void 0 : B.location.id),
                )
            )
                return !0;
            let e = c.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == Z ? void 0 : Z.application_id);
        }),
        ec = (0, l.O)();
    if (Q && null == B && (null == Z || !(0, m.Z)(Z, M.xjy.CONTEXTLESS))) return null;
    let eu = !L.isPlatformEmbedded;
    if (!((0, m.Z)(Z, M.xjy.JOIN) || Q) || null == X) return null;
    let ed = !$ || (Q && !el),
        ef = ed && (eu || et) && !z && !en;
    ed
        ? eu || et || null == Z || (G = U.intl.formatToPlainString(U.t.SqJBnN, { name: Z.name }))
        : (G = U.intl.string(U.t["0OiwfH"]));
    let ep = null != (n = null == B ? void 0 : B.launchId) ? n : null == Z ? void 0 : Z.session_id,
        e_ = async (e, t) => {
            if (null == ep || null == X) return;
            let n = (0, m.Z)(t, M.xjy.EMBEDDED),
                r = P.Z.getVoiceChannelId(),
                i = v.Z.getChannel(r);
            if (
                (await o.Z.join({
                    userId: e.id,
                    sessionId: ep,
                    applicationId: X,
                    channelId: r,
                    messageId: null,
                    intent: k.Ws.PLAY,
                    embedded: n,
                    locationObject: ec.location,
                    analyticsLocations: K,
                }),
                !n)
            ) {
                var a;
                (0, g.Z)({
                    type: M.q5t.JOIN,
                    userId: e.id,
                    guildId: null == i ? void 0 : i.guild_id,
                    channelId: r,
                    channelType: null == i ? void 0 : i.type,
                    applicationId: X,
                    partyId: null != t ? (null == t || null == (a = t.party) ? void 0 : a.id) : "",
                    locationObject: ec.location,
                    analyticsLocations: K,
                });
            }
        },
        em = async () => {
            let e = !1;
            async function t() {
                let e;
                q(!0),
                    null != Z &&
                        (e = await a.Z.sendActivityInviteUser({
                            type: M.mFx.JOIN_REQUEST,
                            userId: F.id,
                            activity: Z,
                            location: M.Sbl.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && s.default.selectPrivateChannel(e.id);
            }
            if (Q && !ea) {
                if (null == X) return;
                if (!es) return t();
                if (
                    (e = await (0, u.Z)({
                        applicationId: X,
                        activityChannelId: ee,
                        locationObject: ec.location,
                        analyticsLocations: K,
                    }))
                ) {
                    null == H || H();
                    return;
                }
            }
            if (!e) {
                if (es) {
                    null == V || V(), e_(F, Z), null == H || H();
                    return;
                }
                await t();
            }
        };
    if ((!es && !W) || (!ef && null == G)) return null;
    let eh = es ? U.intl.string(U.t.VJlc0S) : U.intl.string(U.t.OKsSCR);
    return (
        el && (eh = U.intl.string(U.t.DPfdsq)),
        {
            buttonCTA: eh,
            tooltip: G,
            handleJoinRequest: em,
            isEnabled: ef,
            isJoining: er,
            isEmbedded: Q,
        }
    );
}
