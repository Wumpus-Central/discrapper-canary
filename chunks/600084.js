n.d(t, { Z: () => H });
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
    f = n(736052),
    h = n(86203),
    m = n(189156),
    g = n(986081),
    b = n(621853),
    _ = n(484459),
    y = n(131704),
    C = n(881998),
    v = n(984933),
    O = n(496675),
    x = n(594174),
    E = n(51144),
    j = n(7782),
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
    D = n(128557),
    L = n(981631),
    k = n(176505),
    U = n(388032),
    B = n(40036),
    F = n(10198);
function V(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, p.Yk)(n),
        a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, f.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(P.Z, { channel: n });
    if (y.Ec.has(n.type)) return (0, r.jsx)(R.Z, { channel: n });
    if (a) return (0, r.jsx)(D.Z, { channel: n });
    if (i) return (0, r.jsx)(A.Z, { channel: n });
    return (0, r.jsx)(M.Z, { channel: n });
}
function H(e) {
    var t, n;
    let { channel: p, showingBanner: f } = e,
        y = (0, d.ZP)(p),
        { type: v } = p,
        P = (0, l.e7)([x.default], () => (p.isPrivate() ? x.default.getUser(p.getRecipientId()) : null)),
        A = E.ZP.useUserTag(P),
        { canManageRoles: M, canReadMessageHistory: R } = (0, l.cj)([O.Z], () => ({
            canManageRoles: O.Z.can(L.Plq.MANAGE_ROLES, p),
            canReadMessageHistory: O.Z.can(L.Plq.READ_MESSAGE_HISTORY, p),
        })),
        D = (0, l.e7)([b.Z], () => (v === L.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null), [p, v]),
        { systemDMRedesignEnabled: H } = g.Z.useExperiment(
            { location: "bf1a4f_1" },
            { autoTrackExposure: null != (t = p.isSystemDM()) && t },
        ),
        G = (0, u.Z)(null != (n = null == P ? void 0 : P.id) ? n : L.lds),
        { authorizedAppToken: W, authorizedAppsFetchState: z } = (0, l.cj)([C.Z], () => ({
            authorizedAppToken: C.Z.getNewestTokenForApplication(null == G ? void 0 : G.id),
            authorizedAppsFetchState: C.Z.getFetchState(),
        })),
        q = c.Z.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (i.useEffect(() => {
            v === L.d4z.DM &&
                null == D &&
                null != P &&
                o.Z.wait(() => (0, _.Z)(p.getRecipientId(), P.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [D, v, p, P]),
        i.useEffect(() => {
            (null == P ? void 0 : P.bot) && z === C.M.NOT_FETCHED && s.Z.fetch();
        }, [null == P ? void 0 : P.bot, z]),
        p.isSystemDM())
    )
        return H
            ? (0, r.jsx)(w.Z, { channel: p })
            : (0, r.jsx)(N.Z, {
                  channel: p,
                  children: U.intl.string(U.t.Rzvnig),
              });
    if (v === L.d4z.DM) {
        let e;
        return (
            null != P && null != G
                ? null != W &&
                  (e = (0, r.jsxs)("div", {
                      className: B.buttonContainer,
                      children: [
                          (0, r.jsx)(T.W, {
                              channel: p,
                              user: P,
                          }),
                          (0, r.jsx)(Z.n, {
                              user: P,
                              application: G,
                              channel: p,
                              oauth2Token: W,
                          }),
                          q && (0, r.jsx)(h.Z, { channel: p }),
                      ],
                  }))
                : (e = (0, r.jsx)(j.Z, {
                      userId: p.getRecipientId(),
                      channel: p,
                      showingBanner: f,
                  })),
            (0, r.jsxs)(N.Z, {
                channel: p,
                user: P,
                children: [
                    null != P &&
                        !P.isProvisional &&
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-xl/medium",
                            className: F.marginBottom20,
                            children: A,
                        }),
                    U.intl.format(U.t["Qvg+6+"], { username: y }),
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
                    (0, r.jsx)(S.Ot, { children: U.intl.format(U.t.I3R7Vn, { channelName: y }) }),
                    (0, r.jsx)(S.jz, { children: U.intl.string(U.t.M8Ao6I) }),
                ],
            });
        else if (p.hasFlag(k.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(I.Z, { channel: p });
        else
            return (0, r.jsx)(N.Z, {
                channel: p,
                children: U.intl.format(U.t.MFwcqO, { name: y }),
            });
    return R
        ? (0, r.jsx)(V, {
              channel: p,
              canManageRoles: M,
          })
        : (0, r.jsx)(S.ZP, {
              channelId: p.id,
              children: (0, r.jsx)(S.jz, { children: U.intl.format(U.t.hPVEQG, { channelName: y }) }),
          });
}
