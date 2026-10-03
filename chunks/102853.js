n.d(e, { l: () => V });
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
    h = n(429913),
    E = n(878014),
    T = n(25451),
    C = n(796306),
    S = n(498642),
    v = n(71393),
    y = n(480595),
    O = n(576705),
    j = n(994500),
    P = n(309010),
    R = n(461213),
    L = n(287809),
    b = n(689168),
    M = n(723702),
    U = n(928550),
    D = n(652215),
    G = n(818023),
    Y = n(375708);
function V(t) {
    let e,
        {
            activity: n,
            embeddedActivity: V,
            user: w,
            onGameJoin: k,
            onClose: H,
            location: W,
            supportsAskToJoin: B = !0,
        } = t,
        { analyticsLocations: z } = (0, N.Ay)(W ?? []),
        [X, $] = l.useState(!1),
        F = V?.applicationId ?? n?.application_id,
        J = null != V || (0, _.A)(n),
        Q = (0, i.bG)([L.default], () => L.default.getCurrentUser()),
        q = w.id === Q?.id,
        Z = (function (t) {
            let { channelId: e, userId: n, activity: l } = t,
                i = f.A.getChannel(e);
            return (
                (l?.session_id == null || (null != i && (0, A.pQ)(i.type))
                    ? e
                    : p.A.getVoiceStateForSession(n, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(V?.location), userId: w.id, activity: n }),
        K = (0, U.au)(F),
        tt = J || (0, x.A)(n, D.jUm.SUPPORTS_JOIN_URL) || null != K,
        te = (0, i.bG)([c.Ay], () =>
            Array.from(c.Ay.getSelfEmbeddedActivities().values()).some((t) => {
                let { applicationId: e, location: l } = t;
                return (e === n?.application_id || e === V?.applicationId) && (0, d.H)(l) === Z;
            }),
        ),
        tn = (0, i.bG)(
            [b.A],
            () => null != n && null != n.application_id && b.A.getState(n.application_id, D.xL.JOIN) === D.eAD.LOADING,
        ),
        tl = (0, h.h)(F),
        ti = (0, C.XT)(n, w.id),
        ta = (0, T.X)(tl),
        tr = (0, m.vG)({ userId: w.id, activity: n, channelId: Z, application: tl }),
        ts = (0, i.bG)([f.A, v.A, S.A, j.A, P.Ay, p.A, O.A, y.A, R.A, c.Ay], () =>
            null != V
                ? tr === m.Gy.CAN_JOIN
                    ? g.o.CAN_JOIN
                    : g.o.CANNOT_JOIN
                : (0, g.A)({
                      user: w,
                      activity: n,
                      application: tl,
                      channelId: Z,
                      currentUser: Q,
                      isEmbedded: J,
                      ChannelStore: f.A,
                      GuildStore: v.A,
                      GuildMemberCountStore: S.A,
                      RelationshipStore: j.A,
                      SelectedChannelStore: P.Ay,
                      VoiceStateStore: p.A,
                      PermissionStore: O.A,
                      LocalActivityStore: y.A,
                      SelfPresenceStore: R.A,
                      EmbeddedActivitiesStore: c.Ay,
                  }),
        ),
        to = (0, i.bG)(
            [c.Ay],
            () =>
                !!Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(
                    (t) => t.applicationId === V?.applicationId && t.location.id === V?.location.id,
                ),
        ),
        tc = (0, o.p)();
    if (ti.isConjuredApp && null == V) {
        let t = ti.channelId;
        return null == t
            ? null
            : {
                  buttonCTA: Y.intl.string(Y.t.VJlc0S),
                  tooltip: void 0,
                  handleJoinRequest: () => {
                      (k?.(), (0, C.nm)(t), H?.());
                  },
                  isEnabled: !0,
                  isJoining: !1,
                  isEmbedded: !0,
              };
    }
    if (J && null == V && (null == n || !(0, x.A)(n, D.jUm.CONTEXTLESS))) return null;
    let tu = !M.isPlatformEmbedded;
    if (!((0, x.A)(n, D.jUm.JOIN) || J) || null == F) return null;
    let td = (!J && ts === g.o.JOINED) || (J && to),
        tA = !q || J,
        tf = tA && !td && (tu || tt) && !X && !te;
    td
        ? (e = Y.intl.string(Y.t.TYSymS))
        : tA
          ? tu || tt || null == n || (e = Y.intl.formatToPlainString(Y.t.SqJBnN, { name: n.name }))
          : (e = Y.intl.string(Y.t["0OiwfH"]));
    let tp = V?.launchId ?? n?.session_id;
    async function tg(t, e) {
        if (null == tp || null == F) return;
        let n = (0, x.A)(e, D.jUm.EMBEDDED),
            l = P.Ay.getVoiceChannelId(),
            i = f.A.getChannel(l);
        (await r.Ay.join({
            userId: t.id,
            sessionId: tp,
            applicationId: F,
            channelId: l,
            messageId: null,
            intent: G.W9.PLAY,
            embedded: n,
            locationObject: tc.location,
            analyticsLocations: z,
        }),
            n ||
                (0, I.A)({
                    type: D.UqL.JOIN,
                    userId: t.id,
                    guildId: i?.guild_id,
                    channelId: l,
                    channelType: i?.type,
                    applicationId: F,
                    partyId: null != e ? e?.party?.id : "",
                    locationObject: tc.location,
                    analyticsLocations: z,
                }));
    }
    async function tm() {
        let t = !1;
        async function e() {
            let t;
            ($(!0),
                null != n &&
                    (t = await a.A.sendActivityInviteUser({
                        type: D.xL.JOIN_REQUEST,
                        userId: w.id,
                        activity: n,
                        location: D.ThZ.USER_ACTIVITY_ACTIONS,
                    })),
                null != t && s.default.selectPrivateChannel(t.id));
        }
        if (J && !ta) {
            if (null == F) return;
            if (ts !== g.o.CAN_JOIN) return e();
            if (
                (t = await (0, u.A)({
                    applicationId: F,
                    activityChannelId: Z,
                    locationObject: tc.location,
                    analyticsLocations: z,
                }))
            )
                return void H?.();
        }
        if (!t) {
            if (ts === g.o.CAN_JOIN) {
                (k?.(), tg(w, n), H?.());
                return;
            }
            await e();
        }
    }
    if ((ts === g.o.CANNOT_JOIN && !B) || (ts === g.o.CANNOT_JOIN && (0, E.D)(tl)) || (!tf && !X && null == e))
        return null;
    let tx = ts === g.o.CAN_JOIN ? Y.intl.string(Y.t.VJlc0S) : Y.intl.string(Y.t.OKsSCR);
    return (
        td && (tx = Y.intl.string(Y.t.DPfdsq)),
        { buttonCTA: tx, tooltip: e, handleJoinRequest: tm, isEnabled: tf, isJoining: tn, isEmbedded: J }
    );
}
