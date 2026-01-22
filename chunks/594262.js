n.d(t, {
    l: () => G,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(308368),
    s = n(544420),
    o = n(956793),
    l = n(212245),
    c = n(933958),
    u = n(447031),
    d = n(902169),
    f = n(969151),
    p = n(3861),
    _ = n(550151),
    h = n(833349),
    m = n(765379),
    g = n(946255),
    E = n(688810),
    b = n(429913),
    y = n(207371),
    O = n(651743),
    A = n(734057),
    v = n(134861),
    S = n(498642),
    I = n(71393),
    T = n(189081),
    C = n(576705),
    N = n(994500),
    R = n(309010),
    w = n(287809),
    P = n(977997),
    D = n(689168),
    x = n(194871),
    L = n(723702),
    j = n(144914),
    M = n(652215),
    k = n(360469),
    U = n(985018);

function G(e) {
    var t, n;
    let G,
        {
            activity: V,
            embeddedActivity: F,
            user: B,
            onGameJoin: H,
            onClose: Y,
            location: W,
            supportsAskToJoin: K = !0,
        } = e,
        { analyticsLocations: z } = (0, E.Ay)(null != W ? W : []),
        [q, X] = r.useState(!1),
        Z = null != (t = null == F ? void 0 : F.applicationId) ? t : null == V ? void 0 : V.application_id,
        Q = null != F || (0, m.A)(V),
        $ = (0, i.bG)([w.default], () => w.default.getCurrentUser()),
        J = B.id === (null == $ ? void 0 : $.id),
        ee = (0, p.A)({
            channelId: (0, f.H)(null == F ? void 0 : F.location),
            userId: B.id,
            activity: V,
        }),
        et = (0, i.bG)(
            [T.A, O.A, x.A, v.A],
            () =>
                Q ||
                (null != Z &&
                    (0, j.A)({
                        LibraryApplicationStore: T.A,
                        LaunchableGameStore: O.A,
                        DispatchApplicationStore: x.A,
                        ConnectedAppsStore: v.A,
                        applicationId: Z,
                    })),
        ),
        en = (0, i.bG)([c.Ay], () =>
            Array.from(c.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: n } = e;
                return (
                    (t === (null == V ? void 0 : V.application_id) || t === (null == F ? void 0 : F.applicationId)) &&
                    (0, f.H)(n) === ee
                );
            }),
        ),
        er = (0, i.bG)(
            [D.A],
            () => null != V && null != V.application_id && D.A.getState(V.application_id, M.xL.JOIN) === M.eAD.LOADING,
        ),
        ei = (0, b.h)(Z),
        ea = (0, y.e)(ei),
        es = (0, _.vG)({
            userId: B.id,
            activity: V,
            channelId: ee,
            application: ei,
        }),
        eo = (0, i.bG)([A.A, I.A, S.A, N.A, R.A, P.A, C.A], () =>
            null != F
                ? es === _.Gy.CAN_JOIN
                : (0, d.A)({
                      user: B,
                      activity: V,
                      application: ei,
                      channelId: ee,
                      currentUser: $,
                      isEmbedded: Q,
                      ChannelStore: A.A,
                      GuildStore: I.A,
                      GuildMemberCountStore: S.A,
                      RelationshipStore: N.A,
                      SelectedChannelStore: R.A,
                      VoiceStateStore: P.A,
                      PermissionStore: C.A,
                  }),
        ),
        el = (0, i.bG)([c.Ay], () => {
            if (
                Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) =>
                        e.applicationId === (null == F ? void 0 : F.applicationId) &&
                        e.location.id === (null == F ? void 0 : F.location.id),
                )
            )
                return !0;
            let e = c.Ay.getCurrentEmbeddedActivity();
            return null != e && e.applicationId === (null == V ? void 0 : V.application_id);
        }),
        ec = (0, l.p)();
    if (Q && null == F && (null == V || !(0, h.A)(V, M.jUm.CONTEXTLESS))) return null;
    let eu = !L.isPlatformEmbedded;
    if (!((0, h.A)(V, M.jUm.JOIN) || Q) || null == Z) return null;
    let ed = !J || (Q && !el),
        ef = ed && (eu || et) && !q && !en;
    ed
        ? eu ||
          et ||
          null == V ||
          (G = U.intl.formatToPlainString(U.t.SqJBnN, {
              name: V.name,
          }))
        : (G = U.intl.string(U.t["0OiwfH"]));
    let ep = null != (n = null == F ? void 0 : F.launchId) ? n : null == V ? void 0 : V.session_id,
        e_ = async (e, t) => {
            if (null == ep || null == Z) return;
            let n = (0, h.A)(t, M.jUm.EMBEDDED),
                r = R.A.getVoiceChannelId(),
                i = A.A.getChannel(r);
            if (
                (await s.A.join({
                    userId: e.id,
                    sessionId: ep,
                    applicationId: Z,
                    channelId: r,
                    messageId: null,
                    intent: k.W9.PLAY,
                    embedded: n,
                    locationObject: ec.location,
                    analyticsLocations: z,
                }),
                !n)
            ) {
                var a;
                (0, g.A)({
                    type: M.UqL.JOIN,
                    userId: e.id,
                    guildId: null == i ? void 0 : i.guild_id,
                    channelId: r,
                    channelType: null == i ? void 0 : i.type,
                    applicationId: Z,
                    partyId: null != t ? (null == t || null == (a = t.party) ? void 0 : a.id) : "",
                    locationObject: ec.location,
                    analyticsLocations: z,
                });
            }
        },
        eh = async () => {
            let e = !1;
            async function t() {
                let e;
                X(!0),
                    null != V &&
                        (e = await a.A.sendActivityInviteUser({
                            type: M.xL.JOIN_REQUEST,
                            userId: B.id,
                            activity: V,
                            location: M.ThZ.USER_ACTIVITY_ACTIONS,
                        })),
                    null != e && o.default.selectPrivateChannel(e.id);
            }
            if (Q && !ea) {
                if (null == Z) return;
                if (!eo) return t();
                if (
                    (e = await (0, u.A)({
                        applicationId: Z,
                        activityChannelId: ee,
                        locationObject: ec.location,
                        analyticsLocations: z,
                    }))
                ) {
                    null == Y || Y();
                    return;
                }
            }
            if (!e) {
                if (eo) {
                    null == H || H(), e_(B, V), null == Y || Y();
                    return;
                }
                await t();
            }
        };
    if ((!eo && !K) || (!ef && null == G)) return null;
    let em = eo ? U.intl.string(U.t.VJlc0S) : U.intl.string(U.t.OKsSCR);
    return (
        el && (em = U.intl.string(U.t.DPfdsq)),
        {
            buttonCTA: em,
            tooltip: G,
            handleJoinRequest: eh,
            isEnabled: ef,
            isJoining: er,
            isEmbedded: Q,
        }
    );
}
