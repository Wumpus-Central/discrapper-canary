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
    C = n(496675),
    N = n(699516),
    R = n(944486),
    P = n(594174),
    D = n(979651),
    w = n(181106),
    L = n(417363),
    x = n(358085),
    M = n(804739),
    k = n(981631),
    j = n(701488),
    U = n(388032);
function G(e) {
    var t, n;
    let G,
        {
            activity: B,
            embeddedActivity: Z,
            user: F,
            onGameJoin: V,
            onClose: H,
            location: Y,
            supportsAskToJoin: W = !0,
        } = e,
        { analyticsLocations: K } = (0, E.ZP)(null != Y ? Y : []),
        [z, q] = r.useState(!1),
        X = null != (t = null == Z ? void 0 : Z.applicationId) ? t : null == B ? void 0 : B.application_id,
        Q = null != Z || (0, m.Z)(B),
        J = (0, i.e7)([P.default], () => P.default.getCurrentUser()),
        $ = F.id === (null == J ? void 0 : J.id),
        ee = (0, _.Z)({
            channelId: (0, f.p)(null == Z ? void 0 : Z.location),
            userId: F.id,
            activity: B,
        }),
        et = (0, i.e7)(
            [A.Z, O.Z, L.Z, I.Z],
            () =>
                Q ||
                (null != X &&
                    (0, M.t)({
                        LibraryApplicationStore: A.Z,
                        LaunchableGameStore: O.Z,
                        DispatchApplicationStore: L.Z,
                        ConnectedAppsStore: I.Z,
                        applicationId: X,
                    })),
        ),
        en = (0, i.e7)([c.ZP], () =>
            Array.from(c.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (
                    (t === (null == B ? void 0 : B.application_id) || t === (null == Z ? void 0 : Z.applicationId)) &&
                    (0, f.p)(n) === ee
                );
            }),
        ),
        er = (0, i.e7)(
            [w.Z],
            () => null != B && null != B.application_id && w.Z.getState(B.application_id, k.mFx.JOIN) === k.OcF.LOADING,
        ),
        ei = (0, b.q)(X),
        ea = (0, y.A)(ei),
        eo = (0, p.s5)({
            userId: F.id,
            activity: B,
            channelId: ee,
            application: ei,
        }),
        es = (0, i.e7)([v.Z, S.Z, T.Z, N.Z, R.Z, D.Z, C.Z], () =>
            null != Z
                ? eo === p.Fw.CAN_JOIN
                : (0, d.Z)({
                      user: F,
                      activity: B,
                      application: ei,
                      channelId: ee,
                      currentUser: J,
                      isEmbedded: Q,
                      ChannelStore: v.Z,
                      GuildStore: S.Z,
                      GuildMemberCountStore: T.Z,
                      RelationshipStore: N.Z,
                      SelectedChannelStore: R.Z,
                      VoiceStateStore: D.Z,
                      PermissionStore: C.Z,
                  }),
        ),
        el = (0, i.e7)([c.ZP], () => {
            if (
                Array.from(c.ZP.getSelfEmbeddedActivities().values()).some(
                    (e) =>
                        e.applicationId === (null == Z ? void 0 : Z.applicationId) &&
                        e.location.id === (null == Z ? void 0 : Z.location.id),
                )
            )
                return !0;
            let e = c.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == B ? void 0 : B.application_id);
        }),
        ec = (0, l.O)();
    if (Q && null == Z && (null == B || !(0, h.Z)(B, k.xjy.CONTEXTLESS))) return null;
    let eu = !x.isPlatformEmbedded;
    if (!((0, h.Z)(B, k.xjy.JOIN) || Q) || null == X) return null;
    let ed = !$ || (Q && !el),
        ef = ed && (eu || et) && !z && !en;
    ed
        ? eu || et || null == B || (G = U.intl.formatToPlainString(U.t.SqJBnN, { name: B.name }))
        : (G = U.intl.string(U.t["0OiwfH"]));
    let e_ = null != (n = null == Z ? void 0 : Z.launchId) ? n : null == B ? void 0 : B.session_id,
        ep = async (e, t) => {
            if (null == e_ || null == X) return;
            let n = (0, h.Z)(t, k.xjy.EMBEDDED),
                r = R.Z.getVoiceChannelId(),
                i = v.Z.getChannel(r);
            if (
                (await o.Z.join({
                    userId: e.id,
                    sessionId: e_,
                    applicationId: X,
                    channelId: r,
                    messageId: null,
                    intent: j.Ws.PLAY,
                    embedded: n,
                    locationObject: ec.location,
                    analyticsLocations: K,
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
                    applicationId: X,
                    partyId: null != t ? (null == t || null == (a = t.party) ? void 0 : a.id) : "",
                    locationObject: ec.location,
                    analyticsLocations: K,
                });
            }
        },
        eh = async () => {
            let e = !1;
            async function t() {
                let e;
                q(!0),
                    null != B &&
                        (e = await a.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: F.id,
                            activity: B,
                            location: k.Sbl.USER_ACTIVITY_ACTIONS,
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
                    null == V || V(), ep(F, B), null == H || H();
                    return;
                }
                await t();
            }
        };
    if ((!es && !W) || (!ef && null == G)) return null;
    let em = es ? U.intl.string(U.t.VJlc0S) : U.intl.string(U.t.OKsSCR);
    return (
        el && (em = U.intl.string(U.t.DPfdsq)),
        {
            buttonCTA: em,
            tooltip: G,
            handleJoinRequest: eh,
            isEnabled: ef,
            isJoining: er,
            isEmbedded: Q,
        }
    );
}
