"use strict";
n.d(t, { l: () => H });
var l = n(582128),
    i = n(17928),
    s = n(308368),
    r = n(183208),
    a = n(730852),
    o = n(212245),
    u = n(933958),
    c = n(62583),
    d = n(969151),
    h = n(95701),
    m = n(734057),
    f = n(977997),
    p = n(776677),
    g = n(550151),
    x = n(55730),
    A = n(765379),
    E = n(946255),
    C = n(688810),
    I = n(429913),
    y = n(20015),
    S = n(207371),
    v = n(651743),
    _ = n(134861),
    N = n(498642),
    T = n(71393),
    j = n(189081),
    b = n(480595),
    R = n(576705),
    L = n(994500),
    O = n(309010),
    M = n(461213),
    w = n(287809),
    k = n(689168),
    P = n(340829),
    D = n(723702),
    U = n(144914),
    G = n(652215),
    V = n(360469),
    F = n(375708);
function H(e) {
    let t,
        {
            activity: n,
            embeddedActivity: H,
            user: B,
            onGameJoin: W,
            onClose: K,
            location: z,
            supportsAskToJoin: Z = !0,
        } = e,
        { analyticsLocations: Y } = (0, C.Ay)(z ?? []),
        [q, $] = l.useState(!1),
        J = H?.applicationId ?? n?.application_id,
        X = null != H || (0, A.A)(n),
        Q = (0, i.bG)([w.default], () => w.default.getCurrentUser()),
        ee = B.id === Q?.id,
        et = (function (e) {
            let { channelId: t, userId: n, activity: l } = e,
                i = m.A.getChannel(t);
            return (
                (l?.session_id == null || (null != i && (0, h.pQ)(i.type))
                    ? t
                    : f.A.getVoiceStateForSession(n, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(H?.location), userId: B.id, activity: n }),
        en = (0, i.bG)(
            [j.A, v.A, P.A, _.A],
            () =>
                X ||
                (0, x.A)(n, G.jUm.SUPPORTS_JOIN_URL) ||
                (null != J &&
                    (0, U.A)({
                        LibraryApplicationStore: j.A,
                        LaunchableGameStore: v.A,
                        DispatchApplicationStore: P.A,
                        ConnectedAppsStore: _.A,
                        applicationId: J,
                    })),
        ),
        el = (0, i.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: l } = e;
                return (t === n?.application_id || t === H?.applicationId) && (0, d.H)(l) === et;
            }),
        ),
        ei = (0, i.bG)(
            [k.A],
            () => null != n && null != n.application_id && k.A.getState(n.application_id, G.xL.JOIN) === G.eAD.LOADING,
        ),
        es = (0, I.h)(J),
        er = (0, S.x)(es),
        ea = (0, g.vG)({ userId: B.id, activity: n, channelId: et, application: es }),
        eo = (0, i.bG)([m.A, T.A, N.A, L.A, O.Ay, f.A, R.A, b.A, M.A, u.Ay], () =>
            null != H
                ? ea === g.Gy.CAN_JOIN
                    ? p.o.CAN_JOIN
                    : p.o.CANNOT_JOIN
                : (0, p.A)({
                      user: B,
                      activity: n,
                      application: es,
                      channelId: et,
                      currentUser: Q,
                      isEmbedded: X,
                      ChannelStore: m.A,
                      GuildStore: T.A,
                      GuildMemberCountStore: N.A,
                      RelationshipStore: L.A,
                      SelectedChannelStore: O.Ay,
                      VoiceStateStore: f.A,
                      PermissionStore: R.A,
                      LocalActivityStore: b.A,
                      SelfPresenceStore: M.A,
                      EmbeddedActivitiesStore: u.Ay,
                  }),
        ),
        eu = (0, i.bG)(
            [u.Ay],
            () =>
                !!Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === H?.applicationId && e.location.id === H?.location.id,
                ),
        ),
        ec = (0, o.p)();
    if (X && null == H && (null == n || !(0, x.A)(n, G.jUm.CONTEXTLESS))) return null;
    let ed = !D.isPlatformEmbedded;
    if (!((0, x.A)(n, G.jUm.JOIN) || X) || null == J) return null;
    let eh = (!X && eo === p.o.JOINED) || (X && eu),
        em = !ee || X,
        ef = em && !eh && (ed || en) && !q && !el;
    eh
        ? (t = F.intl.string(F.t.TYSymS))
        : em
          ? ed || en || null == n || (t = F.intl.formatToPlainString(F.t.SqJBnN, { name: n.name }))
          : (t = F.intl.string(F.t["0OiwfH"]));
    let ep = H?.launchId ?? n?.session_id;
    async function eg(e, t) {
        if (null == ep || null == J) return;
        let n = (0, x.A)(t, G.jUm.EMBEDDED),
            l = O.Ay.getVoiceChannelId(),
            i = m.A.getChannel(l);
        await r.Ay.join({
            userId: e.id,
            sessionId: ep,
            applicationId: J,
            channelId: l,
            messageId: null,
            intent: V.W9.PLAY,
            embedded: n,
            locationObject: ec.location,
            analyticsLocations: Y,
        }),
            n ||
                (0, E.A)({
                    type: G.UqL.JOIN,
                    userId: e.id,
                    guildId: i?.guild_id,
                    channelId: l,
                    channelType: i?.type,
                    applicationId: J,
                    partyId: null != t ? t?.party?.id : "",
                    locationObject: ec.location,
                    analyticsLocations: Y,
                });
    }
    async function ex() {
        let e = !1;
        async function t() {
            let e;
            $(!0),
                null != n &&
                    (e = await s.A.sendActivityInviteUser({
                        type: G.xL.JOIN_REQUEST,
                        userId: B.id,
                        activity: n,
                        location: G.ThZ.USER_ACTIVITY_ACTIONS,
                    })),
                null != e && a.default.selectPrivateChannel(e.id);
        }
        if (X && !er) {
            if (null == J) return;
            if (eo !== p.o.CAN_JOIN) return t();
            if (
                (e = await (0, c.A)({
                    applicationId: J,
                    activityChannelId: et,
                    locationObject: ec.location,
                    analyticsLocations: Y,
                }))
            )
                return void K?.();
        }
        if (!e) {
            if (eo === p.o.CAN_JOIN) {
                W?.(), eg(B, n), K?.();
                return;
            }
            await t();
        }
    }
    if (
        (eo === p.o.CANNOT_JOIN && !Z) ||
        (eo === p.o.CANNOT_JOIN && (0, y.n)(es, G.gfo.EMBEDDED)) ||
        (!ef && !q && null == t)
    )
        return null;
    let eA = eo === p.o.CAN_JOIN ? F.intl.string(F.t.VJlc0S) : F.intl.string(F.t.OKsSCR);
    return (
        eh && (eA = F.intl.string(F.t.DPfdsq)),
        { buttonCTA: eA, tooltip: t, handleJoinRequest: ex, isEnabled: ef, isJoining: ei, isEmbedded: X }
    );
}
