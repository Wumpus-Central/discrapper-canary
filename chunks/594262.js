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
    h = n(550151),
    p = n(833349),
    g = n(765379),
    E = n(946255),
    A = n(688810),
    I = n(429913),
    T = n(207371),
    y = n(651743),
    S = n(734057),
    v = n(134861),
    C = n(498642),
    b = n(71393),
    N = n(189081),
    R = n(576705),
    O = n(994500),
    D = n(309010),
    L = n(287809),
    w = n(977997),
    x = n(689168),
    P = n(194871),
    M = n(723702),
    k = n(144914),
    U = n(652215),
    G = n(360469),
    F = n(985018);
function V(e) {
    let t,
        {
            activity: n,
            embeddedActivity: V,
            user: B,
            onGameJoin: j,
            onClose: H,
            location: Y,
            supportsAskToJoin: W = !0,
        } = e,
        { analyticsLocations: K } = (0, A.Ay)(Y ?? []),
        [$, z] = r.useState(!1),
        q = V?.applicationId ?? n?.application_id,
        X = null != V || (0, g.A)(n),
        Z = (0, i.bG)([L.default], () => L.default.getCurrentUser()),
        Q = B.id === Z?.id,
        J = (0, f.A)({ channelId: (0, _.H)(V?.location), userId: B.id, activity: n }),
        ee = (0, i.bG)(
            [N.A, y.A, P.A, v.A],
            () =>
                X ||
                (null != q &&
                    (0, k.A)({
                        LibraryApplicationStore: N.A,
                        LaunchableGameStore: y.A,
                        DispatchApplicationStore: P.A,
                        ConnectedAppsStore: v.A,
                        applicationId: q,
                    })),
        ),
        et = (0, i.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: r } = e;
                return (t === n?.application_id || t === V?.applicationId) && (0, _.H)(r) === J;
            }),
        ),
        en = (0, i.bG)(
            [x.A],
            () => null != n && null != n.application_id && x.A.getState(n.application_id, U.xL.JOIN) === U.eAD.LOADING,
        ),
        er = (0, I.h)(q),
        ei = (0, T.e)(er),
        ea = (0, h.vG)({ userId: B.id, activity: n, channelId: J, application: er }),
        es = (0, i.bG)([S.A, b.A, C.A, O.A, D.A, w.A, R.A], () =>
            null != V
                ? ea === h.Gy.CAN_JOIN
                : (0, d.A)({
                      user: B,
                      activity: n,
                      application: er,
                      channelId: J,
                      currentUser: Z,
                      isEmbedded: X,
                      ChannelStore: S.A,
                      GuildStore: b.A,
                      GuildMemberCountStore: C.A,
                      RelationshipStore: O.A,
                      SelectedChannelStore: D.A,
                      VoiceStateStore: w.A,
                      PermissionStore: R.A,
                  }),
        ),
        eo = (0, i.bG)([u.Ay], () => {
            if (
                Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === V?.applicationId && e.location.id === V?.location.id,
                )
            )
                return !0;
            let e = u.Ay.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === n?.application_id;
        }),
        el = (0, l.p)();
    if (X && null == V && (null == n || !(0, p.A)(n, U.jUm.CONTEXTLESS))) return null;
    let eu = !M.isPlatformEmbedded;
    if (!((0, p.A)(n, U.jUm.JOIN) || X) || null == q) return null;
    let ec = !Q || (X && !eo),
        ed = ec && (eu || ee) && !$ && !et;
    ec
        ? eu || ee || null == n || (t = F.intl.formatToPlainString(F.t.SqJBnN, { name: n.name }))
        : (t = F.intl.string(F.t["0OiwfH"]));
    let e_ = V?.launchId ?? n?.session_id,
        ef = async (e, t) => {
            if (null == e_ || null == q) return;
            let n = (0, p.A)(t, U.jUm.EMBEDDED),
                r = D.A.getVoiceChannelId(),
                i = S.A.getChannel(r);
            await s.A.join({
                userId: e.id,
                sessionId: e_,
                applicationId: q,
                channelId: r,
                messageId: null,
                intent: G.W9.PLAY,
                embedded: n,
                locationObject: el.location,
                analyticsLocations: K,
            }),
                n ||
                    (0, E.A)({
                        type: U.UqL.JOIN,
                        userId: e.id,
                        guildId: i?.guild_id,
                        channelId: r,
                        channelType: i?.type,
                        applicationId: q,
                        partyId: null != t ? t?.party?.id : "",
                        locationObject: el.location,
                        analyticsLocations: K,
                    });
        },
        eh = async () => {
            let e = !1;
            async function t() {
                let e;
                z(!0),
                    null != n &&
                        (e = await a.A.sendActivityInviteUser({
                            type: U.xL.JOIN_REQUEST,
                            userId: B.id,
                            activity: n,
                            location: U.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && o.default.selectPrivateChannel(e.id);
            }
            if (X && !ei) {
                if (null == q) return;
                if (!es) return t();
                if (
                    (e = await (0, c.A)({
                        applicationId: q,
                        activityChannelId: J,
                        locationObject: el.location,
                        analyticsLocations: K,
                    }))
                )
                    return void H?.();
            }
            if (!e) {
                if (es) {
                    j?.(), ef(B, n), H?.();
                    return;
                }
                await t();
            }
        };
    if ((!es && !W) || (!ed && null == t)) return null;
    let ep = es ? F.intl.string(F.t.VJlc0S) : F.intl.string(F.t.OKsSCR);
    return (
        eo && (ep = F.intl.string(F.t.DPfdsq)),
        { buttonCTA: ep, tooltip: t, handleJoinRequest: eh, isEnabled: ed, isJoining: en, isEmbedded: X }
    );
}
