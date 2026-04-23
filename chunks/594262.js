"use strict";
n.d(t, { l: () => B });
var i = n(64700),
    r = n(17928),
    s = n(308368),
    a = n(780907),
    o = n(956793),
    l = n(212245),
    d = n(933958),
    _ = n(62583),
    u = n(969151),
    c = n(3861),
    E = n(776677),
    h = n(550151),
    m = n(833349),
    f = n(765379),
    g = n(946255),
    p = n(688810),
    A = n(429913),
    I = n(375802),
    T = n(651743),
    S = n(734057),
    N = n(134861),
    C = n(498642),
    R = n(71393),
    O = n(189081),
    y = n(375492),
    v = n(576705),
    D = n(994500),
    L = n(309010),
    b = n(461213),
    w = n(287809),
    P = n(977997),
    k = n(689168),
    M = n(340829),
    U = n(723702),
    x = n(144914),
    G = n(652215),
    V = n(360469),
    F = n(985018);
function B(e) {
    let t,
        {
            activity: n,
            embeddedActivity: B,
            user: H,
            onGameJoin: j,
            onClose: W,
            location: Y,
            supportsAskToJoin: K = !0,
        } = e,
        { analyticsLocations: z } = (0, p.Ay)(Y ?? []),
        [$, q] = i.useState(!1),
        X = B?.applicationId ?? n?.application_id,
        Z = null != B || (0, f.A)(n),
        Q = (0, r.bG)([w.default], () => w.default.getCurrentUser()),
        J = H.id === Q?.id,
        ee = (0, c.A)({ channelId: (0, u.H)(B?.location), userId: H.id, activity: n }),
        et = (0, r.bG)(
            [O.A, T.A, M.A, N.A],
            () =>
                Z ||
                (null != X &&
                    (0, x.A)({
                        LibraryApplicationStore: O.A,
                        LaunchableGameStore: T.A,
                        DispatchApplicationStore: M.A,
                        ConnectedAppsStore: N.A,
                        applicationId: X,
                    })),
        ),
        en = (0, r.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: i } = e;
                return (t === n?.application_id || t === B?.applicationId) && (0, u.H)(i) === ee;
            }),
        ),
        ei = (0, r.bG)(
            [k.A],
            () => null != n && null != n.application_id && k.A.getState(n.application_id, G.xL.JOIN) === G.eAD.LOADING,
        ),
        er = (0, A.h)(X),
        es = (0, I.e)(er),
        ea = (0, h.vG)({ userId: H.id, activity: n, channelId: ee, application: er }),
        eo = (0, r.bG)([S.A, R.A, C.A, D.A, L.A, P.A, v.A, y.A, b.A, d.Ay], () =>
            null != B
                ? ea === h.Gy.CAN_JOIN
                    ? E.o.CAN_JOIN
                    : E.o.CANNOT_JOIN
                : (0, E.A)({
                      user: H,
                      activity: n,
                      application: er,
                      channelId: ee,
                      currentUser: Q,
                      isEmbedded: Z,
                      ChannelStore: S.A,
                      GuildStore: R.A,
                      GuildMemberCountStore: C.A,
                      RelationshipStore: D.A,
                      SelectedChannelStore: L.A,
                      VoiceStateStore: P.A,
                      PermissionStore: v.A,
                      LocalActivityStore: y.A,
                      SelfPresenceStore: b.A,
                      EmbeddedActivitiesStore: d.Ay,
                  }),
        ),
        el = (0, r.bG)(
            [d.Ay],
            () =>
                !!Array.from(d.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === B?.applicationId && e.location.id === B?.location.id,
                ),
        ),
        ed = (0, l.p)();
    if (Z && null == B && (null == n || !(0, m.A)(n, G.jUm.CONTEXTLESS))) return null;
    let e_ = !U.isPlatformEmbedded;
    if (!((0, m.A)(n, G.jUm.JOIN) || Z) || null == X) return null;
    let eu = (!Z && eo === E.o.JOINED) || (Z && el),
        ec = !J || Z,
        eE = ec && !eu && (e_ || et) && !$ && !en;
    eu
        ? (t = F.intl.string(F.t.TYSymS))
        : ec
          ? e_ || et || null == n || (t = F.intl.formatToPlainString(F.t.SqJBnN, { name: n.name }))
          : (t = F.intl.string(F.t["0OiwfH"]));
    let eh = B?.launchId ?? n?.session_id,
        em = async (e, t) => {
            if (null == eh || null == X) return;
            let n = (0, m.A)(t, G.jUm.EMBEDDED),
                i = L.A.getVoiceChannelId(),
                r = S.A.getChannel(i);
            await a.Ay.join({
                userId: e.id,
                sessionId: eh,
                applicationId: X,
                channelId: i,
                messageId: null,
                intent: V.W9.PLAY,
                embedded: n,
                locationObject: ed.location,
                analyticsLocations: z,
            }),
                n ||
                    (0, g.A)({
                        type: G.UqL.JOIN,
                        userId: e.id,
                        guildId: r?.guild_id,
                        channelId: i,
                        channelType: r?.type,
                        applicationId: X,
                        partyId: null != t ? t?.party?.id : "",
                        locationObject: ed.location,
                        analyticsLocations: z,
                    });
        },
        ef = async () => {
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
            if (Z && !es) {
                if (null == X) return;
                if (eo !== E.o.CAN_JOIN) return t();
                if (
                    (e = await (0, _.A)({
                        applicationId: X,
                        activityChannelId: ee,
                        locationObject: ed.location,
                        analyticsLocations: z,
                    }))
                )
                    return void W?.();
            }
            if (!e) {
                if (eo === E.o.CAN_JOIN) {
                    j?.(), em(H, n), W?.();
                    return;
                }
                await t();
            }
        };
    if ((eo === E.o.CANNOT_JOIN && !K) || (!eE && !$ && null == t)) return null;
    let eg = eo === E.o.CAN_JOIN ? F.intl.string(F.t.VJlc0S) : F.intl.string(F.t.OKsSCR);
    return (
        eu && (eg = F.intl.string(F.t.DPfdsq)),
        { buttonCTA: eg, tooltip: t, handleJoinRequest: ef, isEnabled: eE, isJoining: ei, isEmbedded: Z }
    );
}
