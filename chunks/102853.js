"use strict";
n.d(t, { l: () => B });
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
    f = n(734057),
    h = n(977997),
    p = n(776677),
    E = n(550151),
    m = n(55730),
    g = n(765379),
    A = n(946255),
    I = n(688810),
    T = n(429913),
    S = n(375802),
    N = n(651743),
    y = n(134861),
    C = n(498642),
    v = n(71393),
    O = n(189081),
    R = n(480595),
    b = n(576705),
    D = n(994500),
    L = n(309010),
    w = n(461213),
    M = n(287809),
    P = n(689168),
    x = n(340829),
    U = n(723702),
    k = n(144914),
    G = n(652215),
    F = n(360469),
    V = n(375708);
function B(e) {
    let t,
        {
            activity: n,
            embeddedActivity: B,
            user: H,
            onGameJoin: j,
            onClose: Y,
            location: W,
            supportsAskToJoin: K = !0,
        } = e,
        { analyticsLocations: z } = (0, I.Ay)(W ?? []),
        [$, q] = i.useState(!1),
        Z = B?.applicationId ?? n?.application_id,
        X = null != B || (0, g.A)(n),
        Q = (0, r.bG)([M.default], () => M.default.getCurrentUser()),
        J = H.id === Q?.id,
        ee = (function (e) {
            let { channelId: t, userId: n, activity: i } = e,
                r = f.A.getChannel(t);
            return (
                (i?.session_id == null || (null != r && (0, _.pQ)(r.type))
                    ? t
                    : h.A.getVoiceStateForSession(n, i?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(B?.location), userId: H.id, activity: n }),
        et = (0, r.bG)(
            [O.A, N.A, x.A, y.A],
            () =>
                X ||
                (0, m.A)(n, G.jUm.SUPPORTS_JOIN_URL) ||
                (null != Z &&
                    (0, k.A)({
                        LibraryApplicationStore: O.A,
                        LaunchableGameStore: N.A,
                        DispatchApplicationStore: x.A,
                        ConnectedAppsStore: y.A,
                        applicationId: Z,
                    })),
        ),
        en = (0, r.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: i } = e;
                return (t === n?.application_id || t === B?.applicationId) && (0, d.H)(i) === ee;
            }),
        ),
        ei = (0, r.bG)(
            [P.A],
            () => null != n && null != n.application_id && P.A.getState(n.application_id, G.xL.JOIN) === G.eAD.LOADING,
        ),
        er = (0, T.h)(Z),
        es = (0, S.e)(er),
        ea = (0, E.vG)({ userId: H.id, activity: n, channelId: ee, application: er }),
        eo = (0, r.bG)([f.A, v.A, C.A, D.A, L.A, h.A, b.A, R.A, w.A, u.Ay], () =>
            null != B
                ? ea === E.Gy.CAN_JOIN
                    ? p.o.CAN_JOIN
                    : p.o.CANNOT_JOIN
                : (0, p.A)({
                      user: H,
                      activity: n,
                      application: er,
                      channelId: ee,
                      currentUser: Q,
                      isEmbedded: X,
                      ChannelStore: f.A,
                      GuildStore: v.A,
                      GuildMemberCountStore: C.A,
                      RelationshipStore: D.A,
                      SelectedChannelStore: L.A,
                      VoiceStateStore: h.A,
                      PermissionStore: b.A,
                      LocalActivityStore: R.A,
                      SelfPresenceStore: w.A,
                      EmbeddedActivitiesStore: u.Ay,
                  }),
        ),
        el = (0, r.bG)(
            [u.Ay],
            () =>
                !!Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === B?.applicationId && e.location.id === B?.location.id,
                ),
        ),
        eu = (0, l.p)();
    if (X && null == B && (null == n || !(0, m.A)(n, G.jUm.CONTEXTLESS))) return null;
    let ec = !U.isPlatformEmbedded;
    if (!((0, m.A)(n, G.jUm.JOIN) || X) || null == Z) return null;
    let ed = (!X && eo === p.o.JOINED) || (X && el),
        e_ = !J || X,
        ef = e_ && !ed && (ec || et) && !$ && !en;
    ed
        ? (t = V.intl.string(V.t.TYSymS))
        : e_
          ? ec || et || null == n || (t = V.intl.formatToPlainString(V.t.SqJBnN, { name: n.name }))
          : (t = V.intl.string(V.t["0OiwfH"]));
    let eh = B?.launchId ?? n?.session_id,
        ep = async (e, t) => {
            if (null == eh || null == Z) return;
            let n = (0, m.A)(t, G.jUm.EMBEDDED),
                i = L.A.getVoiceChannelId(),
                r = f.A.getChannel(i);
            await a.Ay.join({
                userId: e.id,
                sessionId: eh,
                applicationId: Z,
                channelId: i,
                messageId: null,
                intent: F.W9.PLAY,
                embedded: n,
                locationObject: eu.location,
                analyticsLocations: z,
            }),
                n ||
                    (0, A.A)({
                        type: G.UqL.JOIN,
                        userId: e.id,
                        guildId: r?.guild_id,
                        channelId: i,
                        channelType: r?.type,
                        applicationId: Z,
                        partyId: null != t ? t?.party?.id : "",
                        locationObject: eu.location,
                        analyticsLocations: z,
                    });
        },
        eE = async () => {
            let e = !1;
            async function t() {
                let e;
                q(!0),
                    null != n &&
                        (e = await s.A.sendActivityInviteUser({
                            type: G.xL.JOIN_REQUEST,
                            userId: H.id,
                            activity: n,
                            location: G.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && o.default.selectPrivateChannel(e.id);
            }
            if (X && !es) {
                if (null == Z) return;
                if (eo !== p.o.CAN_JOIN) return t();
                if (
                    (e = await (0, c.A)({
                        applicationId: Z,
                        activityChannelId: ee,
                        locationObject: eu.location,
                        analyticsLocations: z,
                    }))
                )
                    return void Y?.();
            }
            if (!e) {
                if (eo === p.o.CAN_JOIN) {
                    j?.(), ep(H, n), Y?.();
                    return;
                }
                await t();
            }
        };
    if ((eo === p.o.CANNOT_JOIN && !K) || (!ef && !$ && null == t)) return null;
    let em = eo === p.o.CAN_JOIN ? V.intl.string(V.t.VJlc0S) : V.intl.string(V.t.OKsSCR);
    return (
        ed && (em = V.intl.string(V.t.DPfdsq)),
        { buttonCTA: em, tooltip: t, handleJoinRequest: eE, isEnabled: ef, isJoining: ei, isEmbedded: X }
    );
}
