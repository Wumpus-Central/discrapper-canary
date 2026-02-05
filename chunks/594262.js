"use strict";
n.d(t, { l: () => V });
var r = n(64700),
    i = n(311907),
    a = n(308368),
    s = n(544420),
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
    g = n(946255),
    E = n(688810),
    A = n(429913),
    I = n(207371),
    T = n(651743),
    y = n(734057),
    S = n(134861),
    v = n(498642),
    C = n(71393),
    b = n(189081),
    N = n(576705),
    R = n(994500),
    O = n(309010),
    D = n(287809),
    L = n(977997),
    w = n(689168),
    x = n(194871),
    P = n(723702),
    M = n(144914),
    k = n(652215),
    U = n(360469),
    G = n(985018);
function V(e) {
    let t,
        {
            activity: n,
            embeddedActivity: V,
            user: F,
            onGameJoin: B,
            onClose: j,
            location: H,
            supportsAskToJoin: Y = !0,
        } = e,
        { analyticsLocations: W } = (0, E.Ay)(H ?? []),
        [K, z] = r.useState(!1),
        $ = V?.applicationId ?? n?.application_id,
        q = null != V || (0, m.A)(n),
        Z = (0, i.bG)([D.default], () => D.default.getCurrentUser()),
        Q = F.id === Z?.id,
        X = (0, f.A)({ channelId: (0, _.H)(V?.location), userId: F.id, activity: n }),
        J = (0, i.bG)(
            [b.A, T.A, x.A, S.A],
            () =>
                q ||
                (null != $ &&
                    (0, M.A)({
                        LibraryApplicationStore: b.A,
                        LaunchableGameStore: T.A,
                        DispatchApplicationStore: x.A,
                        ConnectedAppsStore: S.A,
                        applicationId: $,
                    })),
        ),
        ee = (0, i.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: r } = e;
                return (t === n?.application_id || t === V?.applicationId) && (0, _.H)(r) === X;
            }),
        ),
        et = (0, i.bG)(
            [w.A],
            () => null != n && null != n.application_id && w.A.getState(n.application_id, k.xL.JOIN) === k.eAD.LOADING,
        ),
        en = (0, A.h)($),
        er = (0, I.e)(en),
        ei = (0, p.vG)({ userId: F.id, activity: n, channelId: X, application: en }),
        ea = (0, i.bG)([y.A, C.A, v.A, R.A, O.A, L.A, N.A], () =>
            null != V
                ? ei === p.Gy.CAN_JOIN
                : (0, d.A)({
                      user: F,
                      activity: n,
                      application: en,
                      channelId: X,
                      currentUser: Z,
                      isEmbedded: q,
                      ChannelStore: y.A,
                      GuildStore: C.A,
                      GuildMemberCountStore: v.A,
                      RelationshipStore: R.A,
                      SelectedChannelStore: O.A,
                      VoiceStateStore: L.A,
                      PermissionStore: N.A,
                  }),
        ),
        es = (0, i.bG)([u.Ay], () => {
            if (
                Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === V?.applicationId && e.location.id === V?.location.id,
                )
            )
                return !0;
            let e = u.Ay.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === n?.application_id;
        }),
        eo = (0, l.p)();
    if (q && null == V && (null == n || !(0, h.A)(n, k.jUm.CONTEXTLESS))) return null;
    let el = !P.isPlatformEmbedded;
    if (!((0, h.A)(n, k.jUm.JOIN) || q) || null == $) return null;
    let eu = !Q || (q && !es),
        ec = eu && (el || J) && !K && !ee;
    eu
        ? el || J || null == n || (t = G.intl.formatToPlainString(G.t.SqJBnN, { name: n.name }))
        : (t = G.intl.string(G.t["0OiwfH"]));
    let ed = V?.launchId ?? n?.session_id,
        e_ = async (e, t) => {
            if (null == ed || null == $) return;
            let n = (0, h.A)(t, k.jUm.EMBEDDED),
                r = O.A.getVoiceChannelId(),
                i = y.A.getChannel(r);
            await s.A.join({
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
                    (0, g.A)({
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
                        (e = await a.A.sendActivityInviteUser({
                            type: k.xL.JOIN_REQUEST,
                            userId: F.id,
                            activity: n,
                            location: k.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && o.default.selectPrivateChannel(e.id);
            }
            if (q && !er) {
                if (null == $) return;
                if (!ea) return t();
                if (
                    (e = await (0, c.A)({
                        applicationId: $,
                        activityChannelId: X,
                        locationObject: eo.location,
                        analyticsLocations: W,
                    }))
                )
                    return void j?.();
            }
            if (!e) {
                if (ea) {
                    B?.(), e_(F, n), j?.();
                    return;
                }
                await t();
            }
        };
    if ((!ea && !Y) || (!ec && null == t)) return null;
    let ep = ea ? G.intl.string(G.t.VJlc0S) : G.intl.string(G.t.OKsSCR);
    return (
        es && (ep = G.intl.string(G.t.DPfdsq)),
        { buttonCTA: ep, tooltip: t, handleJoinRequest: ef, isEnabled: ec, isJoining: et, isEmbedded: q }
    );
}
