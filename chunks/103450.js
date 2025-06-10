n.d(t, { e: () => U }), n(388685);
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
    y = n(592745),
    O = n(592125),
    v = n(757266),
    I = n(650774),
    S = n(430824),
    T = n(283595),
    A = n(496675),
    N = n(699516),
    C = n(944486),
    R = n(594174),
    P = n(979651),
    w = n(181106),
    D = n(417363),
    L = n(358085),
    x = n(804739),
    k = n(981631),
    M = n(701488),
    j = n(388032);
function U(e) {
    var t, n;
    let U,
        { activity: G, embeddedActivity: B, user: F, onGameJoin: V, onClose: Z, location: H } = e,
        { analyticsLocations: Y } = (0, E.ZP)(null != H ? H : []),
        [W, K] = r.useState(!1),
        z = null != (t = null == B ? void 0 : B.applicationId) ? t : null == G ? void 0 : G.application_id,
        q = null != B || (0, m.Z)(G),
        X = (0, i.e7)([R.default], () => R.default.getCurrentUser()),
        Q = F.id === (null == X ? void 0 : X.id),
        J = (0, _.Z)({
            channelId: (0, f.p)(null == B ? void 0 : B.location),
            userId: F.id,
            activity: G
        }),
        $ = (0, i.e7)(
            [T.Z, y.Z, D.Z, v.Z],
            () =>
                q ||
                (null != z &&
                    (0, x.t)({
                        LibraryApplicationStore: T.Z,
                        LaunchableGameStore: y.Z,
                        DispatchApplicationStore: D.Z,
                        ConnectedAppsStore: v.Z,
                        applicationId: z
                    }))
        ),
        ee = (0, i.e7)([c.ZP], () =>
            Array.from(c.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (t === (null == G ? void 0 : G.application_id) || t === (null == B ? void 0 : B.applicationId)) && (0, f.p)(n) === J;
            })
        ),
        et = (0, i.e7)([w.Z], () => null != G && null != G.application_id && w.Z.getState(G.application_id, k.mFx.JOIN) === k.OcF.LOADING),
        en = (0, b.q)(z),
        er = (0, p.s5)({
            userId: F.id,
            activity: G,
            channelId: J,
            application: en
        }),
        ei = (0, i.e7)([O.Z, S.Z, I.Z, N.Z, C.Z, P.Z, A.Z], () =>
            null != B
                ? er === p.Fw.CAN_JOIN
                : (0, d.Z)({
                      user: F,
                      activity: G,
                      application: en,
                      channelId: J,
                      currentUser: X,
                      isEmbedded: q,
                      ChannelStore: O.Z,
                      GuildStore: S.Z,
                      GuildMemberCountStore: I.Z,
                      RelationshipStore: N.Z,
                      SelectedChannelStore: C.Z,
                      VoiceStateStore: P.Z,
                      PermissionStore: A.Z
                  })
        ),
        ea = (0, i.e7)([c.ZP], () => {
            if (Array.from(c.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == B ? void 0 : B.applicationId) && e.location.id === (null == B ? void 0 : B.location.id))) return !0;
            let e = c.ZP.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == G ? void 0 : G.application_id);
        }),
        eo = (0, l.O)();
    if (q && null == B && (null == G || !(0, h.Z)(G, k.xjy.CONTEXTLESS))) return null;
    let es = !L.isPlatformEmbedded;
    if (!((0, h.Z)(G, k.xjy.JOIN) || q) || null == z) return null;
    let el = !Q || (q && !ea),
        ec = el && (es || $) && !W && !ee;
    el ? es || $ || null == G || (U = j.intl.formatToPlainString(j.t.SqJBnJ, { name: G.name })) : (U = j.intl.string(j.t['0OiwfH']));
    let eu = null != (n = null == B ? void 0 : B.launchId) ? n : null == G ? void 0 : G.session_id,
        ed = async (e, t) => {
            if (null == eu || null == z) return;
            let n = (0, h.Z)(t, k.xjy.EMBEDDED),
                r = C.Z.getVoiceChannelId(),
                i = O.Z.getChannel(r);
            if (
                (await o.Z.join({
                    userId: e.id,
                    sessionId: eu,
                    applicationId: z,
                    channelId: r,
                    messageId: null,
                    intent: M.Ws.PLAY,
                    embedded: n,
                    locationObject: eo.location,
                    analyticsLocations: Y
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
                    applicationId: z,
                    partyId: null != t ? (null == t || null == (a = t.party) ? void 0 : a.id) : '',
                    locationObject: eo.location,
                    analyticsLocations: Y
                });
            }
        },
        ef = async () => {
            let e = !1;
            async function t() {
                let e;
                K(!0),
                    null != G &&
                        (e = await a.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: F.id,
                            activity: G,
                            location: k.Sbl.USER_ACTIVITY_ACTIONS
                        })),
                    null != e && s.default.selectPrivateChannel(e.id);
            }
            if (q) {
                if (null == z) return;
                if (!ei) return t();
                if (
                    (e = await (0, u.Z)({
                        applicationId: z,
                        activityChannelId: J,
                        locationObject: eo.location,
                        analyticsLocations: Y
                    }))
                ) {
                    null == Z || Z();
                    return;
                }
            }
            if (!e) {
                if (ei) {
                    null == V || V(), ed(F, G);
                    return;
                }
                await t();
            }
        },
        e_ = ei ? j.intl.string(j.t.VJlc0d) : j.intl.string(j.t.OKsSCQ);
    return (
        ea && (e_ = j.intl.string(j.t.DPfdsr)),
        {
            buttonCTA: e_,
            tooltip: U,
            handleJoinRequest: ef,
            isEnabled: ec,
            isJoining: et,
            isEmbedded: q
        }
    );
}
