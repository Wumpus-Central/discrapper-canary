n.d(t, { e: () => B }), n(47120);
var r = n(192379),
    i = n(115911),
    o = n(442837),
    a = n(278323),
    s = n(224706),
    l = n(287734),
    c = n(2052),
    u = n(774226),
    d = n(317381),
    f = n(638880),
    p = n(255621),
    _ = n(16609),
    h = n(452634),
    m = n(527805),
    g = n(620662),
    E = n(841784),
    v = n(275920),
    b = n(906732),
    y = n(835473),
    O = n(592745),
    S = n(592125),
    I = n(757266),
    T = n(650774),
    N = n(430824),
    A = n(283595),
    C = n(496675),
    R = n(699516),
    P = n(944486),
    w = n(594174),
    D = n(979651),
    x = n(181106),
    L = n(417363),
    M = n(358085),
    k = n(804739),
    j = n(981631),
    U = n(701488),
    G = n(388032);
function B(e) {
    var t, n;
    let B;
    let { activity: Z, embeddedActivity: F, user: V, onGameJoin: H, onClose: W } = e,
        { analyticsLocations: Y } = (0, b.ZP)(),
        [K, z] = r.useState(!1),
        q = null !== (t = null == F ? void 0 : F.applicationId) && void 0 !== t ? t : null == Z ? void 0 : Z.application_id,
        Q = null != F || (0, E.Z)(Z),
        X = (0, o.e7)([w.default], () => w.default.getCurrentUser()),
        J = V.id === (null == X ? void 0 : X.id),
        $ = (0, h.Z)({
            channelId: (0, _.pY)(null == F ? void 0 : F.location),
            userId: V.id,
            activity: Z
        }),
        ee = (0, o.e7)(
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
        et = (0, o.e7)([d.ZP], () =>
            Array.from(d.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (t === (null == Z ? void 0 : Z.application_id) || t === (null == F ? void 0 : F.applicationId)) && (0, _.pY)(n) === $;
            })
        ),
        en = (0, o.e7)([x.Z], () => null != Z && null != Z.application_id && x.Z.getState(Z.application_id, j.mFx.JOIN) === j.OcF.LOADING),
        er = (0, y.q)(q),
        ei = (0, m.s5)({
            userId: V.id,
            activity: Z,
            channelId: $,
            application: er
        }),
        eo = (0, u.GK)(),
        ea = (0, o.e7)([S.Z, N.Z, T.Z, R.Z, P.Z, D.Z, C.Z], () =>
            null != F
                ? ei === m.Fw.CAN_JOIN
                : (0, p.Z)({
                      user: V,
                      activity: Z,
                      application: er,
                      channelId: $,
                      currentUser: X,
                      isEmbedded: Q,
                      ChannelStore: S.Z,
                      GuildStore: N.Z,
                      GuildMemberCountStore: T.Z,
                      RelationshipStore: R.Z,
                      SelectedChannelStore: P.Z,
                      VoiceStateStore: D.Z,
                      PermissionStore: C.Z
                  })
        ),
        es = (0, o.e7)([d.ZP], () => {
            if (Array.from(d.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == F ? void 0 : F.applicationId) && e.location.id === (null == F ? void 0 : F.location.id))) return !0;
            let e = d.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == Z ? void 0 : Z.application_id) && e.location.kind === i.X.CONTEXTLESS;
        }),
        el = (0, c.O)(),
        ec = !M.isPlatformEmbedded,
        eu = (0, g.Z)(Z, j.xjy.JOIN) || Q,
        ed = (0, g.Z)(Z, j.xjy.CONTEXTLESS) && Q;
    if (!eu || null == q) return null;
    let ef = !J || (Q && !es),
        ep = ef && (ec || ee) && !K && !et;
    ef ? ec || ee || null == Z || (B = G.NW.formatToPlainString(G.t.SqJBnJ, { name: Z.name })) : (B = G.NW.string(G.t['0OiwfH']));
    let e_ = null !== (n = null == F ? void 0 : F.launchId) && void 0 !== n ? n : null == Z ? void 0 : Z.session_id,
        eh = async (e, t) => {
            var n, r;
            if (null == e_ || null == q) return;
            let i = (0, g.Z)(t, j.xjy.EMBEDDED),
                o = P.Z.getVoiceChannelId(),
                a = S.Z.getChannel(o);
            await s.Z.join({
                userId: e.id,
                sessionId: e_,
                applicationId: q,
                channelId: o,
                messageId: null,
                intent: U.Ws.PLAY,
                embedded: i,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: el.location,
                analyticsLocations: Y
            }),
                i ||
                    (0, v.Z)({
                        type: j.q5t.JOIN,
                        userId: e.id,
                        guildId: null == a ? void 0 : a.guild_id,
                        channelId: o,
                        channelType: null == a ? void 0 : a.type,
                        applicationId: q,
                        partyId: null != t ? (null == t ? void 0 : null === (r = t.party) || void 0 === r ? void 0 : r.id) : '',
                        locationObject: el.location,
                        analyticsLocations: Y
                    });
        },
        em = async () => {
            let e = !1;
            async function t() {
                let e;
                z(!0),
                    null != Z &&
                        (e = await a.Z.sendActivityInviteUser({
                            type: j.mFx.JOIN_REQUEST,
                            userId: V.id,
                            activity: Z,
                            location: j.Sbl.PROFILE_POPOUT
                        })),
                    null != e && l.default.selectPrivateChannel(e.id);
            }
            if (Q) {
                if (null == q) return;
                if (!ea) return t();
                if (
                    (e = await (0, f.Z)({
                        applicationId: q,
                        activityChannelId: $,
                        locationObject: el.location,
                        analyticsLocations: Y,
                        joinUserId: V.id,
                        joinSessionId: null == Z ? void 0 : Z.session_id,
                        isContextlessActivity: ed
                    }))
                ) {
                    null == W || W();
                    return;
                }
            }
            if (!e) {
                if (ea) {
                    null == H || H(), eh(V, Z);
                    return;
                }
                await t();
            }
        },
        eg = ea ? G.NW.string(G.t.VJlc0d) : G.NW.string(G.t.OKsSCQ);
    return (
        Q && !eo && (eg = G.NW.string(G.t['4i2vj4'])),
        es && (eg = G.NW.string(G.t.DPfdsr)),
        {
            buttonCTA: eg,
            tooltip: B,
            handleJoinRequest: em,
            isEnabled: ep,
            isJoining: en,
            isEmbedded: Q
        }
    );
}
