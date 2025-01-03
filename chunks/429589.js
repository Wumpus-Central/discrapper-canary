t.d(n, {
    Z: function () {
        return k;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    o = t(481060),
    a = t(278323),
    u = t(224706),
    s = t(287734),
    d = t(2052),
    c = t(906732),
    p = t(835473),
    f = t(592745),
    v = t(592125),
    m = t(757266),
    h = t(650774),
    g = t(430824),
    Z = t(283595),
    x = t(496675),
    P = t(699516),
    E = t(944486),
    I = t(594174),
    C = t(979651),
    S = t(181106),
    b = t(417363),
    y = t(358085),
    j = t(804739),
    w = t(317381),
    O = t(638880),
    A = t(255621),
    L = t(16609),
    R = t(452634),
    T = t(527805),
    U = t(620662),
    _ = t(275920),
    N = t(915863),
    D = t(701488),
    F = t(981631),
    M = t(388032);
function k(e) {
    var n, t;
    let { activity: k, embeddedActivity: B, user: G, onAction: H, isEmbedded: J = !1, ButtonComponent: z = N.Z, ...Q } = e,
        { analyticsLocations: V } = (0, c.ZP)(),
        [W, q] = i.useState(!1),
        Y = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
        K = G.id === (null == Y ? void 0 : Y.id),
        $ = null !== (n = null == B ? void 0 : B.applicationId) && void 0 !== n ? n : null == k ? void 0 : k.application_id,
        X = (0, R.Z)({
            channelId: (0, L.p)(null == B ? void 0 : B.location),
            userId: G.id,
            activity: k
        }),
        ee = (0, r.e7)(
            [Z.Z, f.Z, b.Z, m.Z],
            () =>
                J ||
                (null != $ &&
                    (0, j.t)({
                        LibraryApplicationStore: Z.Z,
                        LaunchableGameStore: f.Z,
                        DispatchApplicationStore: b.Z,
                        ConnectedAppsStore: m.Z,
                        applicationId: $
                    }))
        ),
        en = (0, r.e7)([w.ZP], () =>
            Array.from(w.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: n, location: t } = e;
                return (n === (null == k ? void 0 : k.application_id) || n === (null == B ? void 0 : B.applicationId)) && (0, L.p)(t) === X;
            })
        ),
        et = (0, r.e7)([S.Z], () => null != k && null != k.application_id && S.Z.getState(k.application_id, F.mFx.JOIN) === F.OcF.LOADING),
        [el] = (0, p.Z)((null == B ? void 0 : B.applicationId) != null ? [null == B ? void 0 : B.applicationId] : (null == k ? void 0 : k.application_id) != null ? [null == k ? void 0 : k.application_id] : []),
        ei = (0, T.s5)({
            userId: G.id,
            activity: k,
            channelId: X,
            application: el
        }),
        er = (0, r.e7)([v.Z, g.Z, h.Z, P.Z, E.Z, C.Z, x.Z], () =>
            null != B
                ? ei === T.Fw.CAN_JOIN
                : null != k
                  ? (0, A.Z)({
                        user: G,
                        activity: k,
                        application: el,
                        channelId: X,
                        currentUser: Y,
                        isEmbedded: J,
                        ChannelStore: v.Z,
                        GuildStore: g.Z,
                        GuildMemberCountStore: h.Z,
                        RelationshipStore: P.Z,
                        SelectedChannelStore: E.Z,
                        VoiceStateStore: C.Z,
                        PermissionStore: x.Z
                    })
                  : void 0
        ),
        eo = (0, r.e7)([w.ZP], () => Array.from(w.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == B ? void 0 : B.applicationId) && e.location.id === (null == B ? void 0 : B.location.id))),
        ea = (0, d.O)(),
        eu = !y.isPlatformEmbedded;
    if (!((0, U.Z)(k, F.xjy.JOIN) || J) || null == $) return null;
    let es = !K || (J && !eo),
        ed = es && (eu || ee) && !W && !en && (!J || er),
        ec = null;
    es ? !eu && !ee && null != k && (ec = M.intl.formatToPlainString(M.t.SqJBnJ, { name: k.name })) : (ec = M.intl.string(M.t['0OiwfH']));
    let ep = null !== (t = null == B ? void 0 : B.launchId) && void 0 !== t ? t : null == k ? void 0 : k.session_id,
        ef = async (e, n) => {
            var t, l;
            if (null == ep || null == $) return;
            let i = (0, U.Z)(n, F.xjy.EMBEDDED),
                r = E.Z.getVoiceChannelId(),
                o = v.Z.getChannel(r);
            await u.Z.join({
                userId: e.id,
                sessionId: ep,
                applicationId: $,
                channelId: r,
                messageId: null,
                intent: D.Ws.PLAY,
                embedded: i,
                partyId: null != n ? (null == n ? void 0 : null === (t = n.party) || void 0 === t ? void 0 : t.id) : '',
                locationObject: ea.location,
                analyticsLocations: V
            }),
                !i &&
                    (0, _.Z)({
                        type: F.q5t.JOIN,
                        userId: e.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: r,
                        channelType: null == o ? void 0 : o.type,
                        applicationId: $,
                        partyId: null != n ? (null == n ? void 0 : null === (l = n.party) || void 0 === l ? void 0 : l.id) : '',
                        locationObject: ea.location,
                        analyticsLocations: V
                    });
        },
        ev = async () => {
            let e = !1;
            if (J) {
                if (!er || null == X || null == $) return;
                e = await (0, O.Z)({
                    applicationId: $,
                    activityChannelId: X,
                    locationObject: ea.location,
                    analyticsLocations: V
                });
            }
            if (!e) {
                let e;
                if (er) {
                    null == H || H(), ef(G, k);
                    return;
                }
                q(!0),
                    null != k &&
                        (e = await a.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN_REQUEST,
                            userId: G.id,
                            activity: k,
                            location: F.Sbl.PROFILE_POPOUT
                        })),
                    null != e && s.default.selectPrivateChannel(e.id);
            }
        },
        em = er ? M.intl.string(M.t.VJlc0d) : M.intl.string(M.t.OKsSCQ);
    return (
        J && (em = M.intl.string(M.t['4i2vj4'])),
        eo && (em = M.intl.string(M.t.DPfdsr)),
        (0, l.jsx)(
            o.Tooltip,
            {
                text: ec,
                children: (e) => {
                    let { onMouseEnter: n, onMouseLeave: t } = e;
                    return (0, l.jsx)(z, {
                        onClick: ev,
                        onMouseEnter: n,
                        onMouseLeave: t,
                        disabled: !ed,
                        submitting: et,
                        fullWidth: !0,
                        ...Q,
                        children: em
                    });
                }
            },
            'join'
        )
    );
}
