r.d(n, {
    e: function () {
        return V;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(115911),
    s = r(442837),
    l = r(278323),
    u = r(224706),
    c = r(287734),
    d = r(2052),
    f = r(774226),
    p = r(317381),
    h = r(638880),
    _ = r(255621),
    m = r(16609),
    g = r(452634),
    E = r(527805),
    v = r(620662),
    y = r(841784),
    b = r(275920),
    I = r(906732),
    T = r(835473),
    S = r(592745),
    A = r(592125),
    C = r(757266),
    N = r(650774),
    R = r(430824),
    O = r(283595),
    D = r(496675),
    L = r(699516),
    x = r(944486),
    w = r(594174),
    P = r(979651),
    M = r(181106),
    k = r(417363),
    U = r(358085),
    B = r(804739),
    G = r(981631),
    Z = r(701488),
    F = r(388032);
function V(e) {
    var n, r;
    let i;
    let { activity: V, embeddedActivity: j, user: H, onGameJoin: Y, onClose: W } = e,
        { analyticsLocations: K } = (0, I.ZP)(),
        [z, q] = a.useState(!1),
        Q = null !== (n = null == j ? void 0 : j.applicationId) && void 0 !== n ? n : null == V ? void 0 : V.application_id,
        X = null != j || (0, y.Z)(V),
        J = (0, s.e7)([w.default], () => w.default.getCurrentUser()),
        $ = H.id === (null == J ? void 0 : J.id),
        ee = (0, g.Z)({
            channelId: (0, m.p)(null == j ? void 0 : j.location),
            userId: H.id,
            activity: V
        }),
        et = (0, s.e7)(
            [O.Z, S.Z, k.Z, C.Z],
            () =>
                X ||
                (null != Q &&
                    (0, B.t)({
                        LibraryApplicationStore: O.Z,
                        LaunchableGameStore: S.Z,
                        DispatchApplicationStore: k.Z,
                        ConnectedAppsStore: C.Z,
                        applicationId: Q
                    }))
        ),
        en = (0, s.e7)([p.ZP], () =>
            Array.from(p.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: n, location: r } = e;
                return (n === (null == V ? void 0 : V.application_id) || n === (null == j ? void 0 : j.applicationId)) && (0, m.p)(r) === ee;
            })
        ),
        er = (0, s.e7)([M.Z], () => null != V && null != V.application_id && M.Z.getState(V.application_id, G.mFx.JOIN) === G.OcF.LOADING),
        [ei] = (0, T.Z)(null != Q ? [Q] : []),
        ea = (0, E.s5)({
            userId: H.id,
            activity: V,
            channelId: ee,
            application: ei
        }),
        eo = (0, f.GK)(),
        es = (0, s.e7)([A.Z, R.Z, N.Z, L.Z, x.Z, P.Z, D.Z], () =>
            null != j
                ? ea === E.Fw.CAN_JOIN
                : (0, _.Z)({
                      user: H,
                      activity: V,
                      application: ei,
                      channelId: ee,
                      currentUser: J,
                      isEmbedded: X,
                      ChannelStore: A.Z,
                      GuildStore: R.Z,
                      GuildMemberCountStore: N.Z,
                      RelationshipStore: L.Z,
                      SelectedChannelStore: x.Z,
                      VoiceStateStore: P.Z,
                      PermissionStore: D.Z
                  })
        ),
        el = (0, s.e7)([p.ZP], () => {
            if (Array.from(p.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == j ? void 0 : j.applicationId) && e.location.id === (null == j ? void 0 : j.location.id))) return !0;
            let e = p.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == V ? void 0 : V.application_id) && e.location.kind === o.X.CONTEXTLESS;
        }),
        eu = (0, d.O)(),
        ec = !U.isPlatformEmbedded,
        ed = (0, v.Z)(V, G.xjy.JOIN) || X,
        ef = (0, v.Z)(V, G.xjy.CONTEXTLESS) && X;
    if (!ed || null == Q) return null;
    let ep = !$ || (X && !el),
        eh = ep && (ec || et) && !z && !en;
    ep ? !ec && !et && null != V && (i = F.intl.formatToPlainString(F.t.SqJBnJ, { name: V.name })) : (i = F.intl.string(F.t['0OiwfH']));
    let e_ = null !== (r = null == j ? void 0 : j.launchId) && void 0 !== r ? r : null == V ? void 0 : V.session_id,
        em = async (e, n) => {
            var r, i;
            if (null == e_ || null == Q) return;
            let a = (0, v.Z)(n, G.xjy.EMBEDDED),
                o = x.Z.getVoiceChannelId(),
                s = A.Z.getChannel(o);
            await u.Z.join({
                userId: e.id,
                sessionId: e_,
                applicationId: Q,
                channelId: o,
                messageId: null,
                intent: Z.Ws.PLAY,
                embedded: a,
                partyId: null != n ? (null == n ? void 0 : null === (r = n.party) || void 0 === r ? void 0 : r.id) : '',
                locationObject: eu.location,
                analyticsLocations: K
            }),
                !a &&
                    (0, b.Z)({
                        type: G.q5t.JOIN,
                        userId: e.id,
                        guildId: null == s ? void 0 : s.guild_id,
                        channelId: o,
                        channelType: null == s ? void 0 : s.type,
                        applicationId: Q,
                        partyId: null != n ? (null == n ? void 0 : null === (i = n.party) || void 0 === i ? void 0 : i.id) : '',
                        locationObject: eu.location,
                        analyticsLocations: K
                    });
        },
        eg = async () => {
            let e = !1;
            async function n() {
                let e;
                q(!0),
                    null != V &&
                        (e = await l.Z.sendActivityInviteUser({
                            type: G.mFx.JOIN_REQUEST,
                            userId: H.id,
                            activity: V,
                            location: G.Sbl.PROFILE_POPOUT
                        })),
                    null != e && c.default.selectPrivateChannel(e.id);
            }
            if (X) {
                if (null == Q) return;
                if (!es) return n();
                if (
                    (e = await (0, h.Z)({
                        applicationId: Q,
                        activityChannelId: ee,
                        locationObject: eu.location,
                        analyticsLocations: K,
                        joinUserId: H.id,
                        joinSessionId: null == V ? void 0 : V.session_id,
                        isContextlessActivity: ef
                    }))
                ) {
                    null == W || W();
                    return;
                }
            }
            if (!e) {
                if (es) {
                    null == Y || Y(), em(H, V);
                    return;
                }
                await n();
            }
        },
        eE = es ? F.intl.string(F.t.VJlc0d) : F.intl.string(F.t.OKsSCQ);
    return (
        X && !eo && (eE = F.intl.string(F.t['4i2vj4'])),
        el && (eE = F.intl.string(F.t.DPfdsr)),
        {
            buttonCTA: eE,
            tooltip: i,
            handleJoinRequest: eg,
            isEnabled: eh,
            isJoining: er,
            isEmbedded: X
        }
    );
}
