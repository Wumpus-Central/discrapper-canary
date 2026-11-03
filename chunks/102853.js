e.d(n, { l: () => V });
var l = e(582128),
    i = e(17928),
    a = e(308368),
    r = e(691426),
    s = e(730852),
    o = e(212245),
    c = e(933958),
    u = e(62583),
    d = e(969151),
    A = e(95701),
    f = e(734057),
    g = e(977997),
    m = e(776677),
    p = e(550151),
    x = e(55730),
    _ = e(765379),
    I = e(946255),
    N = e(323073),
    E = e(688810),
    T = e(429913),
    h = e(878014),
    C = e(366430),
    S = e(498642),
    y = e(71393),
    v = e(480595),
    O = e(576705),
    j = e(994500),
    P = e(309010),
    L = e(842018),
    R = e(287809),
    b = e(689168),
    M = e(723702),
    U = e(928550),
    G = e(652215),
    D = e(917550),
    Y = e(105292);
function V(t) {
    let n,
        {
            activity: e,
            embeddedActivity: V,
            user: w,
            onGameJoin: k,
            onClose: W,
            location: B,
            supportsAskToJoin: H = !0,
        } = t,
        { analyticsLocations: z } = (0, E.Ay)(B ?? []),
        [X, $] = l.useState(!1),
        F = V?.applicationId ?? e?.application_id,
        Q = null != V || (0, _.A)(e),
        J = (0, i.bG)([R.default], () => R.default.getCurrentUser()),
        q = w.id === J?.id,
        Z = (function (t) {
            let { channelId: n, userId: e, activity: l } = t,
                i = f.A.getChannel(n);
            return (
                (l?.session_id == null || (null != i && (0, A.pQ)(i.type))
                    ? n
                    : g.A.getVoiceStateForSession(e, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(V?.location), userId: w.id, activity: e }),
        K = (0, U.au)(F),
        tt = Q || (0, x.A)(e, G.jUm.SUPPORTS_JOIN_URL) || null != K,
        tn = (0, i.bG)([c.Ay], () =>
            Array.from(c.Ay.getSelfEmbeddedActivities().values()).some((t) => {
                let { applicationId: n, location: l } = t;
                return (n === e?.application_id || n === V?.applicationId) && (0, d.H)(l) === Z;
            }),
        ),
        te = (0, i.bG)(
            [b.A],
            () => null != e && null != e.application_id && b.A.getState(e.application_id, G.xL.JOIN) === G.eAD.LOADING,
        ),
        tl = (0, T.h)(F),
        ti = (0, C.VS)(tl),
        ta = (0, p.vG)({ userId: w.id, activity: e, channelId: Z, application: tl }),
        tr = (0, i.bG)([f.A], () => f.A.getChannel(Z), [Z]),
        ts = (0, N.vL)(tr),
        to = (0, i.bG)([f.A, y.A, S.A, j.A, P.Ay, g.A, O.A, v.A, L.A, c.Ay], () =>
            null != V
                ? ta === p.Gy.CAN_JOIN
                    ? m.o.CAN_JOIN
                    : m.o.CANNOT_JOIN
                : (0, m.A)({
                      user: w,
                      activity: e,
                      application: tl,
                      channelId: Z,
                      currentUser: J,
                      isContentGated: ts,
                      isEmbedded: Q,
                      ChannelStore: f.A,
                      GuildStore: y.A,
                      GuildMemberCountStore: S.A,
                      RelationshipStore: j.A,
                      SelectedChannelStore: P.Ay,
                      VoiceStateStore: g.A,
                      PermissionStore: O.A,
                      LocalActivityStore: v.A,
                      SelfPresenceStore: L.A,
                      EmbeddedActivitiesStore: c.Ay,
                  }),
        ),
        tc = (0, i.bG)(
            [c.Ay],
            () =>
                !!Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(
                    (t) => t.applicationId === V?.applicationId && t.location.id === V?.location.id,
                ),
        ),
        tu = (0, o.p)();
    if (Q && null == V && (null == e || !(0, x.A)(e, G.jUm.CONTEXTLESS))) return null;
    let td = !M.isPlatformEmbedded;
    if (!((0, x.A)(e, G.jUm.JOIN) || Q) || null == F) return null;
    let tA = (!Q && to === m.o.JOINED) || (Q && tc),
        tf = !q || Q,
        tg = tf && !tA && (td || tt) && !X && !tn;
    tA
        ? (n = Y.intl.string(Y.t.TYSymS))
        : tf
          ? td || tt || null == e || (n = Y.intl.formatToPlainString(Y.t.SqJBnN, { name: e.name }))
          : (n = Y.intl.string(Y.t["0OiwfH"]));
    let tm = V?.launchId ?? e?.session_id;
    async function tp(t, n) {
        if (null == tm || null == F) return;
        let e = (0, x.A)(n, G.jUm.EMBEDDED),
            l = P.Ay.getVoiceChannelId(),
            i = f.A.getChannel(l);
        (await r.A.join({
            userId: t.id,
            sessionId: tm,
            applicationId: F,
            channelId: l,
            messageId: null,
            intent: D.W.PLAY,
            embedded: e,
            locationObject: tu.location,
            analyticsLocations: z,
        }),
            e ||
                (0, I.A)({
                    type: G.UqL.JOIN,
                    userId: t.id,
                    guildId: i?.guild_id,
                    channelId: l,
                    channelType: i?.type,
                    applicationId: F,
                    partyId: null != n ? n?.party?.id : "",
                    locationObject: tu.location,
                    analyticsLocations: z,
                }));
    }
    async function tx() {
        let t = !1;
        async function n() {
            let t;
            ($(!0),
                null != e &&
                    (t = await a.A.sendActivityInviteUser({
                        type: G.xL.JOIN_REQUEST,
                        userId: w.id,
                        activity: e,
                        location: G.ThZ.USER_ACTIVITY_ACTIONS,
                    })),
                null != t && s.default.selectPrivateChannel(t.id));
        }
        if (Q && !ti) {
            if (null == F) return;
            if (to !== m.o.CAN_JOIN) return n();
            if (
                (t = await (0, u.A)({
                    applicationId: F,
                    activityChannelId: Z,
                    locationObject: tu.location,
                    analyticsLocations: z,
                }))
            )
                return void W?.();
        }
        if (!t) {
            if (to === m.o.CAN_JOIN) {
                (k?.(), tp(w, e), W?.());
                return;
            }
            await n();
        }
    }
    if ((to === m.o.CANNOT_JOIN && !H) || (to === m.o.CANNOT_JOIN && (0, h.D)(tl)) || (!tg && !X && null == n))
        return null;
    let t_ = to === m.o.CAN_JOIN ? Y.intl.string(Y.t.VJlc0S) : Y.intl.string(Y.t.OKsSCR);
    return (
        tA && (t_ = Y.intl.string(Y.t.DPfdsq)),
        { buttonCTA: t_, tooltip: n, handleJoinRequest: tx, isEnabled: tg, isJoining: te, isEmbedded: Q }
    );
}
