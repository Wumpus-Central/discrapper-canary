n.d(e, { l: () => Y });
var l = n(582128),
    i = n(17928),
    a = n(308368),
    r = n(780907),
    s = n(730852),
    o = n(212245),
    c = n(933958),
    u = n(62583),
    d = n(969151),
    A = n(95701),
    f = n(734057),
    p = n(977997),
    g = n(776677),
    m = n(550151),
    x = n(55730),
    _ = n(765379),
    I = n(946255),
    N = n(688810),
    E = n(429913),
    h = n(20015),
    T = n(207371),
    C = n(498642),
    S = n(71393),
    v = n(480595),
    y = n(576705),
    O = n(994500),
    j = n(309010),
    P = n(461213),
    R = n(287809),
    L = n(689168),
    b = n(723702),
    M = n(928550),
    U = n(652215),
    D = n(818023),
    G = n(375708);
function Y(t) {
    let e,
        {
            activity: n,
            embeddedActivity: Y,
            user: V,
            onGameJoin: w,
            onClose: k,
            location: B,
            supportsAskToJoin: W = !0,
        } = t,
        { analyticsLocations: H } = (0, N.Ay)(B ?? []),
        [z, X] = l.useState(!1),
        $ = Y?.applicationId ?? n?.application_id,
        F = null != Y || (0, _.A)(n),
        Q = (0, i.bG)([R.default], () => R.default.getCurrentUser()),
        J = V.id === Q?.id,
        q = (function (t) {
            let { channelId: e, userId: n, activity: l } = t,
                i = f.A.getChannel(e);
            return (
                (l?.session_id == null || (null != i && (0, A.pQ)(i.type))
                    ? e
                    : p.A.getVoiceStateForSession(n, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(Y?.location), userId: V.id, activity: n }),
        Z = (0, M.au)($),
        K = F || (0, x.A)(n, U.jUm.SUPPORTS_JOIN_URL) || null != Z,
        tt = (0, i.bG)([c.Ay], () =>
            Array.from(c.Ay.getSelfEmbeddedActivities().values()).some((t) => {
                let { applicationId: e, location: l } = t;
                return (e === n?.application_id || e === Y?.applicationId) && (0, d.H)(l) === q;
            }),
        ),
        te = (0, i.bG)(
            [L.A],
            () => null != n && null != n.application_id && L.A.getState(n.application_id, U.xL.JOIN) === U.eAD.LOADING,
        ),
        tn = (0, E.h)($),
        tl = (0, T.x)(tn),
        ti = (0, m.vG)({ userId: V.id, activity: n, channelId: q, application: tn }),
        ta = (0, i.bG)([f.A, S.A, C.A, O.A, j.Ay, p.A, y.A, v.A, P.A, c.Ay], () =>
            null != Y
                ? ti === m.Gy.CAN_JOIN
                    ? g.o.CAN_JOIN
                    : g.o.CANNOT_JOIN
                : (0, g.A)({
                      user: V,
                      activity: n,
                      application: tn,
                      channelId: q,
                      currentUser: Q,
                      isEmbedded: F,
                      ChannelStore: f.A,
                      GuildStore: S.A,
                      GuildMemberCountStore: C.A,
                      RelationshipStore: O.A,
                      SelectedChannelStore: j.Ay,
                      VoiceStateStore: p.A,
                      PermissionStore: y.A,
                      LocalActivityStore: v.A,
                      SelfPresenceStore: P.A,
                      EmbeddedActivitiesStore: c.Ay,
                  }),
        ),
        tr = (0, i.bG)(
            [c.Ay],
            () =>
                !!Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(
                    (t) => t.applicationId === Y?.applicationId && t.location.id === Y?.location.id,
                ),
        ),
        ts = (0, o.p)();
    if (F && null == Y && (null == n || !(0, x.A)(n, U.jUm.CONTEXTLESS))) return null;
    let to = !b.isPlatformEmbedded;
    if (!((0, x.A)(n, U.jUm.JOIN) || F) || null == $) return null;
    let tc = (!F && ta === g.o.JOINED) || (F && tr),
        tu = !J || F,
        td = tu && !tc && (to || K) && !z && !tt;
    tc
        ? (e = G.intl.string(G.t.TYSymS))
        : tu
          ? to || K || null == n || (e = G.intl.formatToPlainString(G.t.SqJBnN, { name: n.name }))
          : (e = G.intl.string(G.t["0OiwfH"]));
    let tA = Y?.launchId ?? n?.session_id;
    async function tf(t, e) {
        if (null == tA || null == $) return;
        let n = (0, x.A)(e, U.jUm.EMBEDDED),
            l = j.Ay.getVoiceChannelId(),
            i = f.A.getChannel(l);
        (await r.Ay.join({
            userId: t.id,
            sessionId: tA,
            applicationId: $,
            channelId: l,
            messageId: null,
            intent: D.W9.PLAY,
            embedded: n,
            locationObject: ts.location,
            analyticsLocations: H,
        }),
            n ||
                (0, I.A)({
                    type: U.UqL.JOIN,
                    userId: t.id,
                    guildId: i?.guild_id,
                    channelId: l,
                    channelType: i?.type,
                    applicationId: $,
                    partyId: null != e ? e?.party?.id : "",
                    locationObject: ts.location,
                    analyticsLocations: H,
                }));
    }
    async function tp() {
        let t = !1;
        async function e() {
            let t;
            (X(!0),
                null != n &&
                    (t = await a.A.sendActivityInviteUser({
                        type: U.xL.JOIN_REQUEST,
                        userId: V.id,
                        activity: n,
                        location: U.ThZ.USER_ACTIVITY_ACTIONS,
                    })),
                null != t && s.default.selectPrivateChannel(t.id));
        }
        if (F && !tl) {
            if (null == $) return;
            if (ta !== g.o.CAN_JOIN) return e();
            if (
                (t = await (0, u.A)({
                    applicationId: $,
                    activityChannelId: q,
                    locationObject: ts.location,
                    analyticsLocations: H,
                }))
            )
                return void k?.();
        }
        if (!t) {
            if (ta === g.o.CAN_JOIN) {
                (w?.(), tf(V, n), k?.());
                return;
            }
            await e();
        }
    }
    if (
        (ta === g.o.CANNOT_JOIN && !W) ||
        (ta === g.o.CANNOT_JOIN && (0, h.n)(tn, U.gfo.EMBEDDED)) ||
        (!td && !z && null == e)
    )
        return null;
    let tg = ta === g.o.CAN_JOIN ? G.intl.string(G.t.VJlc0S) : G.intl.string(G.t.OKsSCR);
    return (
        tc && (tg = G.intl.string(G.t.DPfdsq)),
        { buttonCTA: tg, tooltip: e, handleJoinRequest: tp, isEnabled: td, isJoining: te, isEmbedded: F }
    );
}
