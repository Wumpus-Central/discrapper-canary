"use strict";
n.d(t, { l: () => B });
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
    R = n(375492),
    O = n(576705),
    b = n(994500),
    D = n(309010),
    L = n(461213),
    w = n(287809),
    M = n(977997),
    x = n(689168),
    P = n(194871),
    k = n(723702),
    U = n(144914),
    G = n(652215),
    F = n(360469),
    V = n(985018);
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
        { analyticsLocations: $ } = (0, g.Ay)(W ?? []),
        [z, q] = r.useState(!1),
        Z = B?.applicationId ?? n?.application_id,
        X = null != B || (0, m.A)(n),
        Q = (0, i.bG)([w.default], () => w.default.getCurrentUser()),
        J = H.id === Q?.id,
        ee = (0, f.A)({ channelId: (0, _.H)(B?.location), userId: H.id, activity: n }),
        et = (0, i.bG)(
            [C.A, T.A, P.A, y.A],
            () =>
                X ||
                (null != Z &&
                    (0, U.A)({
                        LibraryApplicationStore: C.A,
                        LaunchableGameStore: T.A,
                        DispatchApplicationStore: P.A,
                        ConnectedAppsStore: y.A,
                        applicationId: Z,
                    })),
        ),
        en = (0, i.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: r } = e;
                return (t === n?.application_id || t === B?.applicationId) && (0, _.H)(r) === ee;
            }),
        ),
        er = (0, i.bG)(
            [x.A],
            () => null != n && null != n.application_id && x.A.getState(n.application_id, G.xL.JOIN) === G.eAD.LOADING,
        ),
        ei = (0, A.h)(Z),
        es = (0, I.e)(ei),
        ea = (0, p.vG)({ userId: H.id, activity: n, channelId: ee, application: ei }),
        eo = (0, i.bG)([S.A, N.A, v.A, b.A, D.A, M.A, O.A, R.A, L.A], () =>
            null != B
                ? ea === p.Gy.CAN_JOIN
                : (0, d.A)({
                      user: H,
                      activity: n,
                      application: ei,
                      channelId: ee,
                      currentUser: Q,
                      isEmbedded: X,
                      ChannelStore: S.A,
                      GuildStore: N.A,
                      GuildMemberCountStore: v.A,
                      RelationshipStore: b.A,
                      SelectedChannelStore: D.A,
                      VoiceStateStore: M.A,
                      PermissionStore: O.A,
                      LocalActivityStore: R.A,
                      SelfPresenceStore: L.A,
                  }),
        ),
        el = (0, i.bG)([u.Ay], () => {
            if (
                Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === B?.applicationId && e.location.id === B?.location.id,
                )
            )
                return !0;
            let e = u.Ay.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === n?.application_id;
        }),
        eu = (0, l.p)();
    if (X && null == B && (null == n || !(0, h.A)(n, G.jUm.CONTEXTLESS))) return null;
    let ec = !k.isPlatformEmbedded;
    if (!((0, h.A)(n, G.jUm.JOIN) || X) || null == Z) return null;
    let ed = !J || (X && !el),
        e_ = ed && (ec || et) && !z && !en;
    ed
        ? ec || et || null == n || (t = V.intl.formatToPlainString(V.t.SqJBnN, { name: n.name }))
        : (t = V.intl.string(V.t["0OiwfH"]));
    let ef = B?.launchId ?? n?.session_id,
        ep = async (e, t) => {
            if (null == ef || null == Z) return;
            let n = (0, h.A)(t, G.jUm.EMBEDDED),
                r = D.A.getVoiceChannelId(),
                i = S.A.getChannel(r);
            await a.A.join({
                userId: e.id,
                sessionId: ef,
                applicationId: Z,
                channelId: r,
                messageId: null,
                intent: F.W9.PLAY,
                embedded: n,
                locationObject: eu.location,
                analyticsLocations: $,
            }),
                n ||
                    (0, E.A)({
                        type: G.UqL.JOIN,
                        userId: e.id,
                        guildId: i?.guild_id,
                        channelId: r,
                        channelType: i?.type,
                        applicationId: Z,
                        partyId: null != t ? t?.party?.id : "",
                        locationObject: eu.location,
                        analyticsLocations: $,
                    });
        },
        eh = async () => {
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
                if (!eo) return t();
                if (
                    (e = await (0, c.A)({
                        applicationId: Z,
                        activityChannelId: ee,
                        locationObject: eu.location,
                        analyticsLocations: $,
                    }))
                )
                    return void Y?.();
            }
            if (!e) {
                if (eo) {
                    j?.(), ep(H, n), Y?.();
                    return;
                }
                await t();
            }
        };
    if ((!eo && !K) || (!e_ && null == t)) return null;
    let em = eo ? V.intl.string(V.t.VJlc0S) : V.intl.string(V.t.OKsSCR);
    return (
        el && (em = V.intl.string(V.t.DPfdsq)),
        { buttonCTA: em, tooltip: t, handleJoinRequest: eh, isEnabled: e_, isJoining: er, isEmbedded: X }
    );
}
