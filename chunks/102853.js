"use strict";
n.d(t, { l: () => j });
var i = n(64700),
    r = n(17928),
    s = n(308368),
    a = n(780907),
    o = n(730852),
    l = n(212245),
    u = n(933958),
    c = n(62583),
    d = n(969151),
    _ = n(95701),
    h = n(734057),
    f = n(977997),
    p = n(776677),
    E = n(550151),
    m = n(55730),
    g = n(765379),
    A = n(946255),
    I = n(688810),
    T = n(429913),
    S = n(20015),
    y = n(207371),
    C = n(651743),
    N = n(134861),
    v = n(498642),
    R = n(71393),
    O = n(189081),
    b = n(480595),
    D = n(576705),
    L = n(994500),
    w = n(309010),
    M = n(461213),
    P = n(287809),
    x = n(689168),
    k = n(340829),
    U = n(723702),
    G = n(144914),
    F = n(652215),
    V = n(360469),
    B = n(375708);
function j(e) {
    let t,
        {
            activity: n,
            embeddedActivity: j,
            user: H,
            onGameJoin: Y,
            onClose: W,
            location: K,
            supportsAskToJoin: $ = !0,
        } = e,
        { analyticsLocations: z } = (0, I.Ay)(K ?? []),
        [q, Z] = i.useState(!1),
        X = j?.applicationId ?? n?.application_id,
        Q = null != j || (0, g.A)(n),
        J = (0, r.bG)([P.default], () => P.default.getCurrentUser()),
        ee = H.id === J?.id,
        et = (function (e) {
            let { channelId: t, userId: n, activity: i } = e,
                r = h.A.getChannel(t);
            return (
                (i?.session_id == null || (null != r && (0, _.pQ)(r.type))
                    ? t
                    : f.A.getVoiceStateForSession(n, i?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(j?.location), userId: H.id, activity: n }),
        en = (0, r.bG)(
            [O.A, C.A, k.A, N.A],
            () =>
                Q ||
                (0, m.A)(n, F.jUm.SUPPORTS_JOIN_URL) ||
                (null != X &&
                    (0, G.A)({
                        LibraryApplicationStore: O.A,
                        LaunchableGameStore: C.A,
                        DispatchApplicationStore: k.A,
                        ConnectedAppsStore: N.A,
                        applicationId: X,
                    })),
        ),
        ei = (0, r.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: i } = e;
                return (t === n?.application_id || t === j?.applicationId) && (0, d.H)(i) === et;
            }),
        ),
        er = (0, r.bG)(
            [x.A],
            () => null != n && null != n.application_id && x.A.getState(n.application_id, F.xL.JOIN) === F.eAD.LOADING,
        ),
        es = (0, T.h)(X),
        ea = (0, y.x)(es),
        eo = (0, E.vG)({ userId: H.id, activity: n, channelId: et, application: es }),
        el = (0, r.bG)([h.A, R.A, v.A, L.A, w.A, f.A, D.A, b.A, M.A, u.Ay], () =>
            null != j
                ? eo === E.Gy.CAN_JOIN
                    ? p.o.CAN_JOIN
                    : p.o.CANNOT_JOIN
                : (0, p.A)({
                      user: H,
                      activity: n,
                      application: es,
                      channelId: et,
                      currentUser: J,
                      isEmbedded: Q,
                      ChannelStore: h.A,
                      GuildStore: R.A,
                      GuildMemberCountStore: v.A,
                      RelationshipStore: L.A,
                      SelectedChannelStore: w.A,
                      VoiceStateStore: f.A,
                      PermissionStore: D.A,
                      LocalActivityStore: b.A,
                      SelfPresenceStore: M.A,
                      EmbeddedActivitiesStore: u.Ay,
                  }),
        ),
        eu = (0, r.bG)(
            [u.Ay],
            () =>
                !!Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === j?.applicationId && e.location.id === j?.location.id,
                ),
        ),
        ec = (0, l.p)();
    if (Q && null == j && (null == n || !(0, m.A)(n, F.jUm.CONTEXTLESS))) return null;
    let ed = !U.isPlatformEmbedded;
    if (!((0, m.A)(n, F.jUm.JOIN) || Q) || null == X) return null;
    let e_ = (!Q && el === p.o.JOINED) || (Q && eu),
        eh = !ee || Q,
        ef = eh && !e_ && (ed || en) && !q && !ei;
    e_
        ? (t = B.intl.string(B.t.TYSymS))
        : eh
          ? ed || en || null == n || (t = B.intl.formatToPlainString(B.t.SqJBnN, { name: n.name }))
          : (t = B.intl.string(B.t["0OiwfH"]));
    let ep = j?.launchId ?? n?.session_id,
        eE = async (e, t) => {
            if (null == ep || null == X) return;
            let n = (0, m.A)(t, F.jUm.EMBEDDED),
                i = w.A.getVoiceChannelId(),
                r = h.A.getChannel(i);
            await a.Ay.join({
                userId: e.id,
                sessionId: ep,
                applicationId: X,
                channelId: i,
                messageId: null,
                intent: V.W9.PLAY,
                embedded: n,
                locationObject: ec.location,
                analyticsLocations: z,
            }),
                n ||
                    (0, A.A)({
                        type: F.UqL.JOIN,
                        userId: e.id,
                        guildId: r?.guild_id,
                        channelId: i,
                        channelType: r?.type,
                        applicationId: X,
                        partyId: null != t ? t?.party?.id : "",
                        locationObject: ec.location,
                        analyticsLocations: z,
                    });
        },
        em = async () => {
            let e = !1;
            async function t() {
                let e;
                Z(!0),
                    null != n &&
                        (e = await s.A.sendActivityInviteUser({
                            type: F.xL.JOIN_REQUEST,
                            userId: H.id,
                            activity: n,
                            location: F.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && o.default.selectPrivateChannel(e.id);
            }
            if (Q && !ea) {
                if (null == X) return;
                if (el !== p.o.CAN_JOIN) return t();
                if (
                    (e = await (0, c.A)({
                        applicationId: X,
                        activityChannelId: et,
                        locationObject: ec.location,
                        analyticsLocations: z,
                    }))
                )
                    return void W?.();
            }
            if (!e) {
                if (el === p.o.CAN_JOIN) {
                    Y?.(), eE(H, n), W?.();
                    return;
                }
                await t();
            }
        };
    if (
        (el === p.o.CANNOT_JOIN && !$) ||
        (el === p.o.CANNOT_JOIN && (0, S.n)(es, F.gfo.EMBEDDED)) ||
        (!ef && !q && null == t)
    )
        return null;
    let eg = el === p.o.CAN_JOIN ? B.intl.string(B.t.VJlc0S) : B.intl.string(B.t.OKsSCR);
    return (
        e_ && (eg = B.intl.string(B.t.DPfdsq)),
        { buttonCTA: eg, tooltip: t, handleJoinRequest: em, isEnabled: ef, isJoining: er, isEmbedded: Q }
    );
}
