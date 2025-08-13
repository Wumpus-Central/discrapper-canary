n.d(t, { Z: () => V });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(570140),
    l = n(384275),
    c = n(82906),
    u = n(763762),
    d = n(933557),
    f = n(605436),
    _ = n(736052),
    p = n(86203),
    h = n(189156),
    m = n(878857),
    g = n(621853),
    E = n(484459),
    b = n(131704),
    y = n(881998),
    O = n(984933),
    v = n(496675),
    I = n(594174),
    T = n(51144),
    S = n(7782),
    A = n(967128),
    N = n(320781),
    C = n(269203),
    R = n(86863),
    P = n(558756),
    w = n(753898),
    D = n(734386),
    L = n(184279),
    x = n(438306),
    M = n(544142),
    j = n(128557),
    k = n(981631),
    U = n(176505),
    G = n(388032),
    B = n(152131),
    Z = n(881488);
function F(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, f.Yk)(n),
        a = (0, o.e7)([O.ZP], () => null != n.guild_id && n === O.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, _.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(N.Z, { channel: n });
    if (b.Ec.has(n.type)) return (0, r.jsx)(M.Z, { channel: n });
    if (a) return (0, r.jsx)(j.Z, { channel: n });
    if (i) return (0, r.jsx)(D.Z, { channel: n });
    return (0, r.jsx)(x.Z, { channel: n });
}
function V(e) {
    var t, n;
    let { channel: f, showingBanner: _ } = e,
        b = (0, d.ZP)(f),
        { type: O } = f,
        N = (0, o.e7)([I.default], () => (f.isPrivate() ? I.default.getUser(f.getRecipientId()) : null)),
        D = T.ZP.useUserTag(N),
        { canManageRoles: x, canReadMessageHistory: M } = (0, o.cj)([v.Z], () => ({
            canManageRoles: v.Z.can(k.Plq.MANAGE_ROLES, f),
            canReadMessageHistory: v.Z.can(k.Plq.READ_MESSAGE_HISTORY, f),
        })),
        j = (0, o.e7)([g.Z], () => (O === k.d4z.DM ? g.Z.getMutualGuilds(f.getRecipientId()) : null), [f, O]),
        { systemDMRedesignEnabled: V } = m.Z.useExperiment(
            { location: "bf1a4f_1" },
            { autoTrackExposure: null != (t = f.isSystemDM()) && t },
        ),
        H = (0, u.Z)(null != (n = null == N ? void 0 : N.id) ? n : k.lds),
        { authorizedAppToken: Y, authorizedAppsFetchState: W } = (0, o.cj)([y.Z], () => ({
            authorizedAppToken: y.Z.getNewestTokenForApplication(null == H ? void 0 : H.id),
            authorizedAppsFetchState: y.Z.getFetchState(),
        })),
        K = c.Z.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (i.useEffect(() => {
            O === k.d4z.DM &&
                null == j &&
                null != N &&
                s.Z.wait(() => (0, E.Z)(f.getRecipientId(), N.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [j, O, f, N]),
        i.useEffect(() => {
            (null == N ? void 0 : N.bot) && W === y.M.NOT_FETCHED && l.Z.fetch();
        }, [null == N ? void 0 : N.bot, W]),
        f.isSystemDM())
    )
        return V
            ? (0, r.jsx)(L.Z, { channel: f })
            : (0, r.jsx)(w.Z, {
                  channel: f,
                  children: G.intl.string(G.t.Rzvnio),
              });
    if (O === k.d4z.DM) {
        let e;
        return (
            null != N && null != H
                ? null != Y &&
                  (e = (0, r.jsxs)("div", {
                      className: B.buttonContainer,
                      children: [
                          (0, r.jsx)(P.W, {
                              className: B.button,
                              channel: f,
                              user: N,
                          }),
                          (0, r.jsx)(R.n, {
                              className: B.button,
                              user: N,
                              application: H,
                              channel: f,
                              oauth2Token: Y,
                          }),
                          K && (0, r.jsx)(p.Z, { channel: f }),
                      ],
                  }))
                : (e = (0, r.jsx)(S.Z, {
                      userId: f.getRecipientId(),
                      channel: f,
                      showingBanner: _,
                  })),
            (0, r.jsxs)(w.Z, {
                channel: f,
                user: N,
                children: [
                    null != N &&
                        !N.isProvisional &&
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-xl/medium",
                            className: Z.marginBottom20,
                            children: D,
                        }),
                    G.intl.format(G.t["Qvg+6+"], { username: b }),
                    (null == N ? void 0 : N.isProvisional) && (0, r.jsx)(h.q, { userId: N.id }),
                    e,
                ],
            })
        );
    }
    if (f.isMultiUserDM())
        if (f.isManaged())
            return (0, r.jsxs)(A.ZP, {
                channelId: f.id,
                children: [
                    (0, r.jsx)(A.Ot, { children: G.intl.format(G.t.I3R7Vl, { channelName: b }) }),
                    (0, r.jsx)(A.jz, { children: G.intl.string(G.t.M8Ao6O) }),
                ],
            });
        else if (f.hasFlag(U.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(C.Z, { channel: f });
        else
            return (0, r.jsx)(w.Z, {
                channel: f,
                children: G.intl.format(G.t.MFwcqK, { name: b }),
            });
    return M
        ? (0, r.jsx)(F, {
              channel: f,
              canManageRoles: x,
          })
        : (0, r.jsx)(A.ZP, {
              channelId: f.id,
              children: (0, r.jsx)(A.jz, { children: G.intl.format(G.t.hPVEQE, { channelName: b }) }),
          });
}
