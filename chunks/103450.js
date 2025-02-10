n.d(t, { e: () => Z }), n(47120);
var i = n(192379),
    r = n(115911),
    a = n(442837),
    s = n(278323),
    o = n(224706),
    l = n(287734),
    u = n(2052),
    c = n(774226),
    d = n(317381),
    f = n(638880),
    _ = n(255621),
    p = n(16609),
    h = n(452634),
    m = n(527805),
    g = n(620662),
    E = n(841784),
    v = n(275920),
    y = n(906732),
    I = n(835473),
    T = n(592745),
    b = n(592125),
    S = n(757266),
    A = n(650774),
    N = n(430824),
    C = n(283595),
    R = n(496675),
    O = n(699516),
    D = n(944486),
    L = n(594174),
    x = n(979651),
    P = n(181106),
    w = n(417363),
    M = n(358085),
    k = n(804739),
    U = n(981631),
    G = n(701488),
    B = n(388032);
function Z(e) {
    var t, n;
    let Z;
    let { activity: F, embeddedActivity: V, user: j, onGameJoin: H, onClose: Y } = e,
        { analyticsLocations: W } = (0, y.ZP)(),
        [K, z] = i.useState(!1),
        q = null !== (t = null == V ? void 0 : V.applicationId) && void 0 !== t ? t : null == F ? void 0 : F.application_id,
        Q = null != V || (0, E.Z)(F),
        X = (0, a.e7)([L.default], () => L.default.getCurrentUser()),
        J = j.id === (null == X ? void 0 : X.id),
        $ = (0, h.Z)({
            channelId: (0, p.pY)(null == V ? void 0 : V.location),
            userId: j.id,
            activity: F
        }),
        ee = (0, a.e7)(
            [C.Z, T.Z, w.Z, S.Z],
            () =>
                Q ||
                (null != q &&
                    (0, k.t)({
                        LibraryApplicationStore: C.Z,
                        LaunchableGameStore: T.Z,
                        DispatchApplicationStore: w.Z,
                        ConnectedAppsStore: S.Z,
                        applicationId: q
                    }))
        ),
        et = (0, a.e7)([d.ZP], () =>
            Array.from(d.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (t === (null == F ? void 0 : F.application_id) || t === (null == V ? void 0 : V.applicationId)) && (0, p.pY)(n) === $;
            })
        ),
        en = (0, a.e7)([P.Z], () => null != F && null != F.application_id && P.Z.getState(F.application_id, U.mFx.JOIN) === U.OcF.LOADING),
        ei = (0, I.q)(q),
        er = (0, m.s5)({
            userId: j.id,
            activity: F,
            channelId: $,
            application: ei
        }),
        ea = (0, c.GK)(),
        es = (0, a.e7)([b.Z, N.Z, A.Z, O.Z, D.Z, x.Z, R.Z], () =>
            null != V
                ? er === m.Fw.CAN_JOIN
                : (0, _.Z)({
                      user: j,
                      activity: F,
                      application: ei,
                      channelId: $,
                      currentUser: X,
                      isEmbedded: Q,
                      ChannelStore: b.Z,
                      GuildStore: N.Z,
                      GuildMemberCountStore: A.Z,
                      RelationshipStore: O.Z,
                      SelectedChannelStore: D.Z,
                      VoiceStateStore: x.Z,
                      PermissionStore: R.Z
                  })
        ),
        eo = (0, a.e7)([d.ZP], () => {
            if (Array.from(d.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == V ? void 0 : V.applicationId) && e.location.id === (null == V ? void 0 : V.location.id))) return !0;
            let e = d.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == F ? void 0 : F.application_id) && e.location.kind === r.X.CONTEXTLESS;
        }),
        el = (0, u.O)(),
        eu = !M.isPlatformEmbedded,
        ec = (0, g.Z)(F, U.xjy.JOIN) || Q,
        ed = (0, g.Z)(F, U.xjy.CONTEXTLESS) && Q;
    if (!ec || null == q) return null;
    let ef = !J || (Q && !eo),
        e_ = ef && (eu || ee) && !K && !et;
    ef ? eu || ee || null == F || (Z = B.intl.formatToPlainString(B.t.SqJBnJ, { name: F.name })) : (Z = B.intl.string(B.t['0OiwfH']));
    let ep = null !== (n = null == V ? void 0 : V.launchId) && void 0 !== n ? n : null == F ? void 0 : F.session_id,
        eh = async (e, t) => {
            var n, i;
            if (null == ep || null == q) return;
            let r = (0, g.Z)(t, U.xjy.EMBEDDED),
                a = D.Z.getVoiceChannelId(),
                s = b.Z.getChannel(a);
            await o.Z.join({
                userId: e.id,
                sessionId: ep,
                applicationId: q,
                channelId: a,
                messageId: null,
                intent: G.Ws.PLAY,
                embedded: r,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: el.location,
                analyticsLocations: W
            }),
                r ||
                    (0, v.Z)({
                        type: U.q5t.JOIN,
                        userId: e.id,
                        guildId: null == s ? void 0 : s.guild_id,
                        channelId: a,
                        channelType: null == s ? void 0 : s.type,
                        applicationId: q,
                        partyId: null != t ? (null == t ? void 0 : null === (i = t.party) || void 0 === i ? void 0 : i.id) : '',
                        locationObject: el.location,
                        analyticsLocations: W
                    });
        },
        em = async () => {
            let e = !1;
            async function t() {
                let e;
                z(!0),
                    null != F &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: U.mFx.JOIN_REQUEST,
                            userId: j.id,
                            activity: F,
                            location: U.Sbl.PROFILE_POPOUT
                        })),
                    null != e && l.default.selectPrivateChannel(e.id);
            }
            if (Q) {
                if (null == q) return;
                if (!es) return t();
                if (
                    (e = await (0, f.Z)({
                        applicationId: q,
                        activityChannelId: $,
                        locationObject: el.location,
                        analyticsLocations: W,
                        joinUserId: j.id,
                        joinSessionId: null == F ? void 0 : F.session_id,
                        isContextlessActivity: ed
                    }))
                ) {
                    null == Y || Y();
                    return;
                }
            }
            if (!e) {
                if (es) {
                    null == H || H(), eh(j, F);
                    return;
                }
                await t();
            }
        },
        eg = es ? B.intl.string(B.t.VJlc0d) : B.intl.string(B.t.OKsSCQ);
    return (
        Q && !ea && (eg = B.intl.string(B.t['4i2vj4'])),
        eo && (eg = B.intl.string(B.t.DPfdsr)),
        {
            buttonCTA: eg,
            tooltip: Z,
            handleJoinRequest: em,
            isEnabled: e_,
            isJoining: en,
            isEmbedded: Q
        }
    );
}
