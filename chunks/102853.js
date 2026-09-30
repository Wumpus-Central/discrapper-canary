n.d(t, { l: () => U });
var l = n(582128),
    i = n(17928),
    s = n(308368),
    r = n(780907),
    a = n(730852),
    o = n(212245),
    u = n(933958),
    c = n(62583),
    d = n(969151),
    m = n(95701),
    h = n(734057),
    p = n(977997),
    f = n(776677),
    g = n(550151),
    x = n(55730),
    A = n(765379),
    C = n(946255),
    E = n(688810),
    I = n(429913),
    y = n(20015),
    S = n(207371),
    v = n(498642),
    N = n(71393),
    _ = n(480595),
    j = n(576705),
    b = n(994500),
    T = n(309010),
    R = n(461213),
    O = n(287809),
    L = n(689168),
    M = n(723702),
    k = n(928550),
    w = n(652215),
    P = n(818023),
    D = n(375708);
function U(e) {
    let t,
        {
            activity: n,
            embeddedActivity: U,
            user: V,
            onGameJoin: G,
            onClose: F,
            location: H,
            supportsAskToJoin: B = !0,
        } = e,
        { analyticsLocations: W } = (0, E.Ay)(H ?? []),
        [K, z] = l.useState(!1),
        Z = U?.applicationId ?? n?.application_id,
        Y = null != U || (0, A.A)(n),
        q = (0, i.bG)([O.default], () => O.default.getCurrentUser()),
        J = V.id === q?.id,
        $ = (function (e) {
            let { channelId: t, userId: n, activity: l } = e,
                i = h.A.getChannel(t);
            return (
                (l?.session_id == null || (null != i && (0, m.pQ)(i.type))
                    ? t
                    : p.A.getVoiceStateForSession(n, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(U?.location), userId: V.id, activity: n }),
        X = (0, k.au)(Z),
        Q = Y || (0, x.A)(n, w.jUm.SUPPORTS_JOIN_URL) || null != X,
        ee = (0, i.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: l } = e;
                return (t === n?.application_id || t === U?.applicationId) && (0, d.H)(l) === $;
            }),
        ),
        et = (0, i.bG)(
            [L.A],
            () => null != n && null != n.application_id && L.A.getState(n.application_id, w.xL.JOIN) === w.eAD.LOADING,
        ),
        en = (0, I.h)(Z),
        el = (0, S.x)(en),
        ei = (0, g.vG)({ userId: V.id, activity: n, channelId: $, application: en }),
        es = (0, i.bG)([h.A, N.A, v.A, b.A, T.Ay, p.A, j.A, _.A, R.A, u.Ay], () =>
            null != U
                ? ei === g.Gy.CAN_JOIN
                    ? f.o.CAN_JOIN
                    : f.o.CANNOT_JOIN
                : (0, f.A)({
                      user: V,
                      activity: n,
                      application: en,
                      channelId: $,
                      currentUser: q,
                      isEmbedded: Y,
                      ChannelStore: h.A,
                      GuildStore: N.A,
                      GuildMemberCountStore: v.A,
                      RelationshipStore: b.A,
                      SelectedChannelStore: T.Ay,
                      VoiceStateStore: p.A,
                      PermissionStore: j.A,
                      LocalActivityStore: _.A,
                      SelfPresenceStore: R.A,
                      EmbeddedActivitiesStore: u.Ay,
                  }),
        ),
        er = (0, i.bG)(
            [u.Ay],
            () =>
                !!Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === U?.applicationId && e.location.id === U?.location.id,
                ),
        ),
        ea = (0, o.p)();
    if (Y && null == U && (null == n || !(0, x.A)(n, w.jUm.CONTEXTLESS))) return null;
    let eo = !M.isPlatformEmbedded;
    if (!((0, x.A)(n, w.jUm.JOIN) || Y) || null == Z) return null;
    let eu = (!Y && es === f.o.JOINED) || (Y && er),
        ec = !J || Y,
        ed = ec && !eu && (eo || Q) && !K && !ee;
    eu
        ? (t = D.intl.string(D.t.TYSymS))
        : ec
          ? eo || Q || null == n || (t = D.intl.formatToPlainString(D.t.SqJBnN, { name: n.name }))
          : (t = D.intl.string(D.t["0OiwfH"]));
    let em = U?.launchId ?? n?.session_id;
    async function eh(e, t) {
        if (null == em || null == Z) return;
        let n = (0, x.A)(t, w.jUm.EMBEDDED),
            l = T.Ay.getVoiceChannelId(),
            i = h.A.getChannel(l);
        (await r.Ay.join({
            userId: e.id,
            sessionId: em,
            applicationId: Z,
            channelId: l,
            messageId: null,
            intent: P.W9.PLAY,
            embedded: n,
            locationObject: ea.location,
            analyticsLocations: W,
        }),
            n ||
                (0, C.A)({
                    type: w.UqL.JOIN,
                    userId: e.id,
                    guildId: i?.guild_id,
                    channelId: l,
                    channelType: i?.type,
                    applicationId: Z,
                    partyId: null != t ? t?.party?.id : "",
                    locationObject: ea.location,
                    analyticsLocations: W,
                }));
    }
    async function ep() {
        let e = !1;
        async function t() {
            let e;
            (z(!0),
                null != n &&
                    (e = await s.A.sendActivityInviteUser({
                        type: w.xL.JOIN_REQUEST,
                        userId: V.id,
                        activity: n,
                        location: w.ThZ.USER_ACTIVITY_ACTIONS,
                    })),
                null != e && a.default.selectPrivateChannel(e.id));
        }
        if (Y && !el) {
            if (null == Z) return;
            if (es !== f.o.CAN_JOIN) return t();
            if (
                (e = await (0, c.A)({
                    applicationId: Z,
                    activityChannelId: $,
                    locationObject: ea.location,
                    analyticsLocations: W,
                }))
            )
                return void F?.();
        }
        if (!e) {
            if (es === f.o.CAN_JOIN) {
                (G?.(), eh(V, n), F?.());
                return;
            }
            await t();
        }
    }
    if (
        (es === f.o.CANNOT_JOIN && !B) ||
        (es === f.o.CANNOT_JOIN && (0, y.n)(en, w.gfo.EMBEDDED)) ||
        (!ed && !K && null == t)
    )
        return null;
    let ef = es === f.o.CAN_JOIN ? D.intl.string(D.t.VJlc0S) : D.intl.string(D.t.OKsSCR);
    return (
        eu && (ef = D.intl.string(D.t.DPfdsq)),
        { buttonCTA: ef, tooltip: t, handleJoinRequest: ep, isEnabled: ed, isJoining: et, isEmbedded: Y }
    );
}
