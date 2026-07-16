"use strict";
n.d(t, { l: () => H });
var i = n(64700),
    r = n(17928),
    a = n(308368),
    s = n(780907),
    l = n(730852),
    o = n(212245),
    d = n(933958),
    c = n(62583),
    u = n(969151),
    _ = n(95701),
    E = n(734057),
    A = n(977997),
    h = n(776677),
    I = n(550151),
    f = n(55730),
    p = n(765379),
    T = n(946255),
    m = n(688810),
    g = n(429913),
    S = n(20015),
    N = n(207371),
    C = n(651743),
    R = n(134861),
    O = n(498642),
    L = n(71393),
    y = n(189081),
    D = n(480595),
    v = n(576705),
    b = n(994500),
    M = n(309010),
    P = n(461213),
    U = n(287809),
    w = n(689168),
    G = n(340829),
    x = n(723702),
    k = n(144914),
    F = n(652215),
    V = n(360469),
    B = n(375708);
function H(e) {
    let t,
        {
            activity: n,
            embeddedActivity: H,
            user: j,
            onGameJoin: W,
            onClose: Y,
            location: K,
            supportsAskToJoin: $ = !0,
        } = e,
        { analyticsLocations: z } = (0, m.Ay)(K ?? []),
        [q, Z] = i.useState(!1),
        X = H?.applicationId ?? n?.application_id,
        Q = null != H || (0, p.A)(n),
        J = (0, r.bG)([U.default], () => U.default.getCurrentUser()),
        ee = j.id === J?.id,
        et = (function (e) {
            let { channelId: t, userId: n, activity: i } = e,
                r = E.A.getChannel(t);
            return (
                (i?.session_id == null || (null != r && (0, _.pQ)(r.type))
                    ? t
                    : A.A.getVoiceStateForSession(n, i?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, u.H)(H?.location), userId: j.id, activity: n }),
        en = (0, r.bG)(
            [y.A, C.A, G.A, R.A],
            () =>
                Q ||
                (0, f.A)(n, F.jUm.SUPPORTS_JOIN_URL) ||
                (null != X &&
                    (0, k.A)({
                        LibraryApplicationStore: y.A,
                        LaunchableGameStore: C.A,
                        DispatchApplicationStore: G.A,
                        ConnectedAppsStore: R.A,
                        applicationId: X,
                    })),
        ),
        ei = (0, r.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: i } = e;
                return (t === n?.application_id || t === H?.applicationId) && (0, u.H)(i) === et;
            }),
        ),
        er = (0, r.bG)(
            [w.A],
            () => null != n && null != n.application_id && w.A.getState(n.application_id, F.xL.JOIN) === F.eAD.LOADING,
        ),
        ea = (0, g.h)(X),
        es = (0, N.x)(ea),
        el = (0, I.vG)({ userId: j.id, activity: n, channelId: et, application: ea }),
        eo = (0, r.bG)([E.A, L.A, O.A, b.A, M.Ay, A.A, v.A, D.A, P.A, d.Ay], () =>
            null != H
                ? el === I.Gy.CAN_JOIN
                    ? h.o.CAN_JOIN
                    : h.o.CANNOT_JOIN
                : (0, h.A)({
                      user: j,
                      activity: n,
                      application: ea,
                      channelId: et,
                      currentUser: J,
                      isEmbedded: Q,
                      ChannelStore: E.A,
                      GuildStore: L.A,
                      GuildMemberCountStore: O.A,
                      RelationshipStore: b.A,
                      SelectedChannelStore: M.Ay,
                      VoiceStateStore: A.A,
                      PermissionStore: v.A,
                      LocalActivityStore: D.A,
                      SelfPresenceStore: P.A,
                      EmbeddedActivitiesStore: d.Ay,
                  }),
        ),
        ed = (0, r.bG)(
            [d.Ay],
            () =>
                !!Array.from(d.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === H?.applicationId && e.location.id === H?.location.id,
                ),
        ),
        ec = (0, o.p)();
    if (Q && null == H && (null == n || !(0, f.A)(n, F.jUm.CONTEXTLESS))) return null;
    let eu = !x.isPlatformEmbedded;
    if (!((0, f.A)(n, F.jUm.JOIN) || Q) || null == X) return null;
    let e_ = (!Q && eo === h.o.JOINED) || (Q && ed),
        eE = !ee || Q,
        eA = eE && !e_ && (eu || en) && !q && !ei;
    e_
        ? (t = B.intl.string(B.t.TYSymS))
        : eE
          ? eu || en || null == n || (t = B.intl.formatToPlainString(B.t.SqJBnN, { name: n.name }))
          : (t = B.intl.string(B.t["0OiwfH"]));
    let eh = H?.launchId ?? n?.session_id;
    async function eI(e, t) {
        if (null == eh || null == X) return;
        let n = (0, f.A)(t, F.jUm.EMBEDDED),
            i = M.Ay.getVoiceChannelId(),
            r = E.A.getChannel(i);
        await s.Ay.join({
            userId: e.id,
            sessionId: eh,
            applicationId: X,
            channelId: i,
            messageId: null,
            intent: V.W9.PLAY,
            embedded: n,
            locationObject: ec.location,
            analyticsLocations: z,
        }),
            n ||
                (0, T.A)({
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
    }
    async function ef() {
        let e = !1;
        async function t() {
            let e;
            Z(!0),
                null != n &&
                    (e = await a.A.sendActivityInviteUser({
                        type: F.xL.JOIN_REQUEST,
                        userId: j.id,
                        activity: n,
                        location: F.ThZ.USER_ACTIVITY_ACTIONS,
                    })),
                null != e && l.default.selectPrivateChannel(e.id);
        }
        if (Q && !es) {
            if (null == X) return;
            if (eo !== h.o.CAN_JOIN) return t();
            if (
                (e = await (0, c.A)({
                    applicationId: X,
                    activityChannelId: et,
                    locationObject: ec.location,
                    analyticsLocations: z,
                }))
            )
                return void Y?.();
        }
        if (!e) {
            if (eo === h.o.CAN_JOIN) {
                W?.(), eI(j, n), Y?.();
                return;
            }
            await t();
        }
    }
    if (
        (eo === h.o.CANNOT_JOIN && !$) ||
        (eo === h.o.CANNOT_JOIN && (0, S.n)(ea, F.gfo.EMBEDDED)) ||
        (!eA && !q && null == t)
    )
        return null;
    let ep = eo === h.o.CAN_JOIN ? B.intl.string(B.t.VJlc0S) : B.intl.string(B.t.OKsSCR);
    return (
        e_ && (ep = B.intl.string(B.t.DPfdsq)),
        { buttonCTA: ep, tooltip: t, handleJoinRequest: ef, isEnabled: eA, isJoining: er, isEmbedded: Q }
    );
}
