n.d(t, { Z: () => F });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(570140),
    s = n(384275),
    c = n(82906),
    u = n(763762),
    d = n(933557),
    p = n(605436),
    h = n(736052),
    f = n(86203),
    m = n(189156),
    g = n(986081),
    b = n(621853),
    y = n(484459),
    C = n(131704),
    _ = n(881998),
    v = n(984933),
    x = n(496675),
    O = n(594174),
    j = n(51144),
    E = n(7782),
    S = n(967128),
    P = n(320781),
    I = n(269203),
    Z = n(86863),
    T = n(558756),
    N = n(753898),
    A = n(734386),
    w = n(184279),
    M = n(438306),
    R = n(544142),
    k = n(128557),
    L = n(981631),
    D = n(176505),
    U = n(388032),
    B = n(40036),
    V = n(10198);
function H(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, p.Yk)(n),
        a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(P.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, r.jsx)(R.Z, { channel: n });
    if (a) return (0, r.jsx)(k.Z, { channel: n });
    if (i) return (0, r.jsx)(A.Z, { channel: n });
    return (0, r.jsx)(M.Z, { channel: n });
}
function F(e) {
    var t, n;
    let { channel: p, showingBanner: h } = e,
        C = (0, d.ZP)(p),
        { type: v } = p,
        P = (0, l.e7)([O.default], () => (p.isPrivate() ? O.default.getUser(p.getRecipientId()) : null)),
        A = j.ZP.useUserTag(P),
        { canManageRoles: M, canReadMessageHistory: R } = (0, l.cj)([x.Z], () => ({
            canManageRoles: x.Z.can(L.Plq.MANAGE_ROLES, p),
            canReadMessageHistory: x.Z.can(L.Plq.READ_MESSAGE_HISTORY, p),
        })),
        k = (0, l.e7)([b.Z], () => (v === L.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null), [p, v]),
        { systemDMRedesignEnabled: F } = g.Z.useExperiment(
            { location: "bf1a4f_1" },
            { autoTrackExposure: null != (t = p.isSystemDM()) && t },
        ),
        G = (0, u.Z)(null != (n = null == P ? void 0 : P.id) ? n : L.lds),
        { authorizedAppToken: z, authorizedAppsFetchState: W } = (0, l.cj)([_.Z], () => ({
            authorizedAppToken: _.Z.getNewestTokenForApplication(null == G ? void 0 : G.id),
            authorizedAppsFetchState: _.Z.getFetchState(),
        })),
        q = c.Z.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (i.useEffect(() => {
            v === L.d4z.DM &&
                null == k &&
                null != P &&
                o.Z.wait(() => (0, y.Z)(p.getRecipientId(), P.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [k, v, p, P]),
        i.useEffect(() => {
            (null == P ? void 0 : P.bot) && W === _.M.NOT_FETCHED && s.Z.fetch();
        }, [null == P ? void 0 : P.bot, W]),
        p.isSystemDM())
    )
        return F
            ? (0, r.jsx)(w.Z, { channel: p })
            : (0, r.jsx)(N.Z, {
                  channel: p,
                  children: U.intl.string(U.t.Rzvnio),
              });
    if (v === L.d4z.DM) {
        let e;
        return (
            null != P && null != G
                ? null != z &&
                  (e = (0, r.jsxs)("div", {
                      className: B.buttonContainer,
                      children: [
                          (0, r.jsx)(T.W, {
                              className: B.button,
                              channel: p,
                              user: P,
                          }),
                          (0, r.jsx)(Z.n, {
                              className: B.button,
                              user: P,
                              application: G,
                              channel: p,
                              oauth2Token: z,
                          }),
                          q && (0, r.jsx)(f.Z, { channel: p }),
                      ],
                  }))
                : (e = (0, r.jsx)(E.Z, {
                      userId: p.getRecipientId(),
                      channel: p,
                      showingBanner: h,
                  })),
            (0, r.jsxs)(N.Z, {
                channel: p,
                user: P,
                children: [
                    null != P &&
                        !P.isProvisional &&
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-xl/medium",
                            className: V.marginBottom20,
                            children: A,
                        }),
                    U.intl.format(U.t["Qvg+6+"], { username: C }),
                    (null == P ? void 0 : P.isProvisional) && (0, r.jsx)(m.q, { userId: P.id }),
                    e,
                ],
            })
        );
    }
    if (p.isMultiUserDM())
        if (p.isManaged())
            return (0, r.jsxs)(S.ZP, {
                channelId: p.id,
                children: [
                    (0, r.jsx)(S.Ot, { children: U.intl.format(U.t.I3R7Vl, { channelName: C }) }),
                    (0, r.jsx)(S.jz, { children: U.intl.string(U.t.M8Ao6O) }),
                ],
            });
        else if (p.hasFlag(D.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(I.Z, { channel: p });
        else
            return (0, r.jsx)(N.Z, {
                channel: p,
                children: U.intl.format(U.t.MFwcqK, { name: C }),
            });
    return R
        ? (0, r.jsx)(H, {
              channel: p,
              canManageRoles: M,
          })
        : (0, r.jsx)(S.ZP, {
              channelId: p.id,
              children: (0, r.jsx)(S.jz, { children: U.intl.format(U.t.hPVEQE, { channelName: C }) }),
          });
}
