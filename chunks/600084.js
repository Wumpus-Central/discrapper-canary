n.d(t, { Z: () => G });
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
    g = n(878857),
    b = n(621853),
    y = n(484459),
    _ = n(131704),
    C = n(881998),
    x = n(984933),
    v = n(496675),
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
    R = n(438306),
    M = n(544142),
    k = n(128557),
    D = n(981631),
    L = n(176505),
    U = n(388032),
    B = n(963392),
    F = n(197571);
function H(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, p.Yk)(n),
        a = (0, l.e7)([x.ZP], () => null != n.guild_id && n === x.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(P.Z, { channel: n });
    if (_.Ec.has(n.type)) return (0, r.jsx)(M.Z, { channel: n });
    if (a) return (0, r.jsx)(k.Z, { channel: n });
    if (i) return (0, r.jsx)(A.Z, { channel: n });
    return (0, r.jsx)(R.Z, { channel: n });
}
function G(e) {
    var t, n;
    let { channel: p, showingBanner: h } = e,
        _ = (0, d.ZP)(p),
        { type: x } = p,
        P = (0, l.e7)([O.default], () => (p.isPrivate() ? O.default.getUser(p.getRecipientId()) : null)),
        A = j.ZP.useUserTag(P),
        { canManageRoles: R, canReadMessageHistory: M } = (0, l.cj)([v.Z], () => ({
            canManageRoles: v.Z.can(D.Plq.MANAGE_ROLES, p),
            canReadMessageHistory: v.Z.can(D.Plq.READ_MESSAGE_HISTORY, p),
        })),
        k = (0, l.e7)([b.Z], () => (x === D.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null), [p, x]),
        { systemDMRedesignEnabled: G } = g.Z.useExperiment(
            { location: "bf1a4f_1" },
            { autoTrackExposure: null != (t = p.isSystemDM()) && t },
        ),
        V = (0, u.Z)(null != (n = null == P ? void 0 : P.id) ? n : D.lds),
        { authorizedAppToken: z, authorizedAppsFetchState: W } = (0, l.cj)([C.Z], () => ({
            authorizedAppToken: C.Z.getNewestTokenForApplication(null == V ? void 0 : V.id),
            authorizedAppsFetchState: C.Z.getFetchState(),
        })),
        q = c.Z.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (i.useEffect(() => {
            x === D.d4z.DM &&
                null == k &&
                null != P &&
                o.Z.wait(() => (0, y.Z)(p.getRecipientId(), P.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [k, x, p, P]),
        i.useEffect(() => {
            (null == P ? void 0 : P.bot) && W === C.M.NOT_FETCHED && s.Z.fetch();
        }, [null == P ? void 0 : P.bot, W]),
        p.isSystemDM())
    )
        return G
            ? (0, r.jsx)(w.Z, { channel: p })
            : (0, r.jsx)(N.Z, {
                  channel: p,
                  children: U.intl.string(U.t.Rzvnio),
              });
    if (x === D.d4z.DM) {
        let e;
        return (
            null != P && null != V
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
                              application: V,
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
                            className: F.marginBottom20,
                            children: A,
                        }),
                    U.intl.format(U.t["Qvg+6+"], { username: _ }),
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
                    (0, r.jsx)(S.Ot, { children: U.intl.format(U.t.I3R7Vl, { channelName: _ }) }),
                    (0, r.jsx)(S.jz, { children: U.intl.string(U.t.M8Ao6O) }),
                ],
            });
        else if (p.hasFlag(L.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(I.Z, { channel: p });
        else
            return (0, r.jsx)(N.Z, {
                channel: p,
                children: U.intl.format(U.t.MFwcqK, { name: _ }),
            });
    return M
        ? (0, r.jsx)(H, {
              channel: p,
              canManageRoles: R,
          })
        : (0, r.jsx)(S.ZP, {
              channelId: p.id,
              children: (0, r.jsx)(S.jz, { children: U.intl.format(U.t.hPVEQE, { channelName: _ }) }),
          });
}
