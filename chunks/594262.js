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
    x = n(946255),
    C = n(688810),
    A = n(429913),
    E = n(375802),
    I = n(651743),
    y = n(734057),
    v = n(134861),
    S = n(498642),
    N = n(71393),
    j = n(189081),
    _ = n(375492),
    T = n(576705),
    b = n(994500),
    R = n(309010),
    O = n(461213),
    L = n(287809),
    w = n(977997),
    M = n(689168),
    k = n(340829),
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
            user: H,
            onGameJoin: W,
            onClose: B,
            location: K,
            supportsAskToJoin: z = !0,
        } = e,
        { analyticsLocations: Z } = (0, C.Ay)(K ?? []),
        [q, J] = l.useState(!1),
        Y = F?.applicationId ?? n?.application_id,
        X = null != F || (0, g.A)(n),
        $ = (0, i.bG)([L.default], () => L.default.getCurrentUser()),
        Q = H.id === $?.id,
        ee = (0, h.A)({ channelId: (0, d.H)(F?.location), userId: H.id, activity: n }),
        et = (0, i.bG)(
            [j.A, I.A, k.A, v.A],
            () =>
                X ||
                (null != Y &&
                    (0, D.A)({
                        LibraryApplicationStore: j.A,
                        LaunchableGameStore: I.A,
                        DispatchApplicationStore: k.A,
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
            [M.A],
            () => null != n && null != n.application_id && M.A.getState(n.application_id, U.xL.JOIN) === U.eAD.LOADING,
        ),
        ei = (0, A.h)(Y),
        es = (0, E.e)(ei),
        ea = (0, p.vG)({ userId: H.id, activity: n, channelId: ee, application: ei }),
        er = (0, i.bG)([y.A, N.A, S.A, b.A, R.A, w.A, T.A, _.A, O.A, c.Ay], () =>
            null != F
                ? ea === p.Gy.CAN_JOIN
                    ? m.o.CAN_JOIN
                    : m.o.CANNOT_JOIN
                : (0, m.A)({
                      user: H,
                      activity: n,
                      application: ei,
                      channelId: ee,
                      currentUser: $,
                      isEmbedded: X,
                      ChannelStore: y.A,
                      GuildStore: N.A,
                      GuildMemberCountStore: S.A,
                      RelationshipStore: b.A,
                      SelectedChannelStore: R.A,
                      VoiceStateStore: w.A,
                      PermissionStore: T.A,
                      LocalActivityStore: _.A,
                      SelfPresenceStore: O.A,
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
    if (X && null == F && (null == n || !(0, f.A)(n, U.jUm.CONTEXTLESS))) return null;
    let eu = !P.isPlatformEmbedded;
    if (!((0, f.A)(n, U.jUm.JOIN) || X) || null == Y) return null;
    let ed = (!X && er === m.o.JOINED) || (X && eo),
        eh = !Q || X,
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
                l = R.A.getVoiceChannelId(),
                i = y.A.getChannel(l);
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
                    (0, x.A)({
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
                            userId: H.id,
                            activity: n,
                            location: U.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && r.default.selectPrivateChannel(e.id);
            }
            if (X && !es) {
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
                    return void B?.();
            }
            if (!e) {
                if (er === m.o.CAN_JOIN) {
                    W?.(), ef(H, n), B?.();
                    return;
                }
                await t();
            }
        };
    if ((er === m.o.CANNOT_JOIN && !z) || (!em && !q && null == t)) return null;
    let ex = er === m.o.CAN_JOIN ? G.intl.string(G.t.VJlc0S) : G.intl.string(G.t.OKsSCR);
    return (
        ed && (ex = G.intl.string(G.t.DPfdsq)),
        { buttonCTA: ex, tooltip: t, handleJoinRequest: eg, isEnabled: em, isJoining: el, isEmbedded: X }
    );
}
