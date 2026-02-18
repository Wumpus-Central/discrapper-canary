"use strict";
n.d(t, { l: () => F });
var r = n(64700),
    i = n(311907),
    s = n(308368),
    a = n(544420),
    o = n(956793),
    l = n(212245),
    u = n(933958),
    c = n(447031),
    d = n(902169),
    _ = n(969151),
    f = n(3861),
    p = n(550151),
    h = n(833349),
    m = n(765379),
    E = n(946255),
    g = n(688810),
    A = n(429913),
    I = n(207371),
    T = n(651743),
    S = n(734057),
    y = n(134861),
    v = n(498642),
    N = n(71393),
    C = n(189081),
    b = n(576705),
    R = n(994500),
    O = n(309010),
    D = n(287809),
    L = n(977997),
    w = n(689168),
    x = n(194871),
    M = n(723702),
    P = n(144914),
    k = n(652215),
    U = n(360469),
    G = n(985018);
function F(e) {
    let t,
        {
            activity: n,
            embeddedActivity: F,
            user: V,
            onGameJoin: B,
            onClose: H,
            location: j,
            supportsAskToJoin: Y = !0,
        } = e,
        { analyticsLocations: W } = (0, g.Ay)(j ?? []),
        [K, z] = r.useState(!1),
        $ = F?.applicationId ?? n?.application_id,
        q = null != F || (0, m.A)(n),
        Z = (0, i.bG)([D.default], () => D.default.getCurrentUser()),
        X = V.id === Z?.id,
        Q = (0, f.A)({ channelId: (0, _.H)(F?.location), userId: V.id, activity: n }),
        J = (0, i.bG)(
            [C.A, T.A, x.A, y.A],
            () =>
                q ||
                (null != $ &&
                    (0, P.A)({
                        LibraryApplicationStore: C.A,
                        LaunchableGameStore: T.A,
                        DispatchApplicationStore: x.A,
                        ConnectedAppsStore: y.A,
                        applicationId: $,
                    })),
        ),
        ee = (0, i.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: r } = e;
                return (t === n?.application_id || t === F?.applicationId) && (0, _.H)(r) === Q;
            }),
        ),
        et = (0, i.bG)(
            [w.A],
            () => null != n && null != n.application_id && w.A.getState(n.application_id, k.xL.JOIN) === k.eAD.LOADING,
        ),
        en = (0, A.h)($),
        er = (0, I.e)(en),
        ei = (0, p.vG)({ userId: V.id, activity: n, channelId: Q, application: en }),
        es = (0, i.bG)([S.A, N.A, v.A, R.A, O.A, L.A, b.A], () =>
            null != F
                ? ei === p.Gy.CAN_JOIN
                : (0, d.A)({
                      user: V,
                      activity: n,
                      application: en,
                      channelId: Q,
                      currentUser: Z,
                      isEmbedded: q,
                      ChannelStore: S.A,
                      GuildStore: N.A,
                      GuildMemberCountStore: v.A,
                      RelationshipStore: R.A,
                      SelectedChannelStore: O.A,
                      VoiceStateStore: L.A,
                      PermissionStore: b.A,
                  }),
        ),
        ea = (0, i.bG)([u.Ay], () => {
            if (
                Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === F?.applicationId && e.location.id === F?.location.id,
                )
            )
                return !0;
            let e = u.Ay.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === n?.application_id;
        }),
        eo = (0, l.p)();
    if (q && null == F && (null == n || !(0, h.A)(n, k.jUm.CONTEXTLESS))) return null;
    let el = !M.isPlatformEmbedded;
    if (!((0, h.A)(n, k.jUm.JOIN) || q) || null == $) return null;
    let eu = !X || (q && !ea),
        ec = eu && (el || J) && !K && !ee;
    eu
        ? el || J || null == n || (t = G.intl.formatToPlainString(G.t.SqJBnN, { name: n.name }))
        : (t = G.intl.string(G.t["0OiwfH"]));
    let ed = F?.launchId ?? n?.session_id,
        e_ = async (e, t) => {
            if (null == ed || null == $) return;
            let n = (0, h.A)(t, k.jUm.EMBEDDED),
                r = O.A.getVoiceChannelId(),
                i = S.A.getChannel(r);
            await a.A.join({
                userId: e.id,
                sessionId: ed,
                applicationId: $,
                channelId: r,
                messageId: null,
                intent: U.W9.PLAY,
                embedded: n,
                locationObject: eo.location,
                analyticsLocations: W,
            }),
                n ||
                    (0, E.A)({
                        type: k.UqL.JOIN,
                        userId: e.id,
                        guildId: i?.guild_id,
                        channelId: r,
                        channelType: i?.type,
                        applicationId: $,
                        partyId: null != t ? t?.party?.id : "",
                        locationObject: eo.location,
                        analyticsLocations: W,
                    });
        },
        ef = async () => {
            let e = !1;
            async function t() {
                let e;
                z(!0),
                    null != n &&
                        (e = await s.A.sendActivityInviteUser({
                            type: k.xL.JOIN_REQUEST,
                            userId: V.id,
                            activity: n,
                            location: k.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && o.default.selectPrivateChannel(e.id);
            }
            if (q && !er) {
                if (null == $) return;
                if (!es) return t();
                if (
                    (e = await (0, c.A)({
                        applicationId: $,
                        activityChannelId: Q,
                        locationObject: eo.location,
                        analyticsLocations: W,
                    }))
                )
                    return void H?.();
            }
            if (!e) {
                if (es) {
                    B?.(), e_(V, n), H?.();
                    return;
                }
                await t();
            }
        };
    if ((!es && !Y) || (!ec && null == t)) return null;
    let ep = es ? G.intl.string(G.t.VJlc0S) : G.intl.string(G.t.OKsSCR);
    return (
        ea && (ep = G.intl.string(G.t.DPfdsq)),
        { buttonCTA: ep, tooltip: t, handleJoinRequest: ef, isEnabled: ec, isJoining: et, isEmbedded: q }
    );
}
