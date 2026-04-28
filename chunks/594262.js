"use strict";
n.d(t, { l: () => F });
var l = n(64700),
    i = n(17928),
    s = n(308368),
    a = n(780907),
    r = n(956793),
    o = n(212245),
    c = n(933958),
    u = n(62583),
    d = n(969151),
    h = n(3861),
    m = n(776677),
    p = n(550151),
    f = n(833349),
    g = n(765379),
    _ = n(946255),
    x = n(688810),
    C = n(429913),
    A = n(375802),
    E = n(651743),
    I = n(734057),
    v = n(134861),
    y = n(498642),
    b = n(71393),
    S = n(189081),
    N = n(375492),
    j = n(576705),
    T = n(994500),
    w = n(309010),
    R = n(461213),
    L = n(287809),
    k = n(977997),
    O = n(689168),
    M = n(340829),
    P = n(723702),
    D = n(144914),
    U = n(652215),
    V = n(360469),
    G = n(985018);
function F(e) {
    let t,
        {
            activity: n,
            embeddedActivity: F,
            user: B,
            onGameJoin: H,
            onClose: W,
            location: K,
            supportsAskToJoin: z = !0,
        } = e,
        { analyticsLocations: Z } = (0, x.Ay)(K ?? []),
        [q, J] = l.useState(!1),
        Y = F?.applicationId ?? n?.application_id,
        $ = null != F || (0, g.A)(n),
        X = (0, i.bG)([L.default], () => L.default.getCurrentUser()),
        Q = B.id === X?.id,
        ee = (0, h.A)({ channelId: (0, d.H)(F?.location), userId: B.id, activity: n }),
        et = (0, i.bG)(
            [S.A, E.A, M.A, v.A],
            () =>
                $ ||
                (null != Y &&
                    (0, D.A)({
                        LibraryApplicationStore: S.A,
                        LaunchableGameStore: E.A,
                        DispatchApplicationStore: M.A,
                        ConnectedAppsStore: v.A,
                        applicationId: Y,
                    })),
        ),
        en = (0, i.bG)([c.Ay], () =>
            Array.from(c.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: l } = e;
                return (t === n?.application_id || t === F?.applicationId) && (0, d.H)(l) === ee;
            }),
        ),
        el = (0, i.bG)(
            [O.A],
            () => null != n && null != n.application_id && O.A.getState(n.application_id, U.xL.JOIN) === U.eAD.LOADING,
        ),
        ei = (0, C.h)(Y),
        es = (0, A.e)(ei),
        ea = (0, p.vG)({ userId: B.id, activity: n, channelId: ee, application: ei }),
        er = (0, i.bG)([I.A, b.A, y.A, T.A, w.A, k.A, j.A, N.A, R.A, c.Ay], () =>
            null != F
                ? ea === p.Gy.CAN_JOIN
                    ? m.o.CAN_JOIN
                    : m.o.CANNOT_JOIN
                : (0, m.A)({
                      user: B,
                      activity: n,
                      application: ei,
                      channelId: ee,
                      currentUser: X,
                      isEmbedded: $,
                      ChannelStore: I.A,
                      GuildStore: b.A,
                      GuildMemberCountStore: y.A,
                      RelationshipStore: T.A,
                      SelectedChannelStore: w.A,
                      VoiceStateStore: k.A,
                      PermissionStore: j.A,
                      LocalActivityStore: N.A,
                      SelfPresenceStore: R.A,
                      EmbeddedActivitiesStore: c.Ay,
                  }),
        ),
        eo = (0, i.bG)(
            [c.Ay],
            () =>
                !!Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === F?.applicationId && e.location.id === F?.location.id,
                ),
        ),
        ec = (0, o.p)();
    if ($ && null == F && (null == n || !(0, f.A)(n, U.jUm.CONTEXTLESS))) return null;
    let eu = !P.isPlatformEmbedded;
    if (!((0, f.A)(n, U.jUm.JOIN) || $) || null == Y) return null;
    let ed = (!$ && er === m.o.JOINED) || ($ && eo),
        eh = !Q || $,
        em = eh && !ed && (eu || et) && !q && !en;
    ed
        ? (t = G.intl.string(G.t.TYSymS))
        : eh
          ? eu || et || null == n || (t = G.intl.formatToPlainString(G.t.SqJBnN, { name: n.name }))
          : (t = G.intl.string(G.t["0OiwfH"]));
    let ep = F?.launchId ?? n?.session_id,
        ef = async (e, t) => {
            if (null == ep || null == Y) return;
            let n = (0, f.A)(t, U.jUm.EMBEDDED),
                l = w.A.getVoiceChannelId(),
                i = I.A.getChannel(l);
            await a.Ay.join({
                userId: e.id,
                sessionId: ep,
                applicationId: Y,
                channelId: l,
                messageId: null,
                intent: V.W9.PLAY,
                embedded: n,
                locationObject: ec.location,
                analyticsLocations: Z,
            }),
                n ||
                    (0, _.A)({
                        type: U.UqL.JOIN,
                        userId: e.id,
                        guildId: i?.guild_id,
                        channelId: l,
                        channelType: i?.type,
                        applicationId: Y,
                        partyId: null != t ? t?.party?.id : "",
                        locationObject: ec.location,
                        analyticsLocations: Z,
                    });
        },
        eg = async () => {
            let e = !1;
            async function t() {
                let e;
                J(!0),
                    null != n &&
                        (e = await s.A.sendActivityInviteUser({
                            type: U.xL.JOIN_REQUEST,
                            userId: B.id,
                            activity: n,
                            location: U.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && r.default.selectPrivateChannel(e.id);
            }
            if ($ && !es) {
                if (null == Y) return;
                if (er !== m.o.CAN_JOIN) return t();
                if (
                    (e = await (0, u.A)({
                        applicationId: Y,
                        activityChannelId: ee,
                        locationObject: ec.location,
                        analyticsLocations: Z,
                    }))
                )
                    return void W?.();
            }
            if (!e) {
                if (er === m.o.CAN_JOIN) {
                    H?.(), ef(B, n), W?.();
                    return;
                }
                await t();
            }
        };
    if ((er === m.o.CANNOT_JOIN && !z) || (!em && !q && null == t)) return null;
    let e_ = er === m.o.CAN_JOIN ? G.intl.string(G.t.VJlc0S) : G.intl.string(G.t.OKsSCR);
    return (
        ed && (e_ = G.intl.string(G.t.DPfdsq)),
        { buttonCTA: e_, tooltip: t, handleJoinRequest: eg, isEnabled: em, isJoining: el, isEmbedded: $ }
    );
}
