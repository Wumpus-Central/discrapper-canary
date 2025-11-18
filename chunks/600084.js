n.d(t, { Z: () => F });
var i = n(54381),
    r = n(473749),
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
    v = n(881998),
    _ = n(984933),
    x = n(496675),
    j = n(594174),
    O = n(51144),
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
    L = n(128557),
    k = n(981631),
    D = n(176505),
    U = n(388032),
    B = n(40036),
    H = n(10198);
function V(e) {
    let { canManageRoles: t, channel: n } = e,
        r = t && (0, p.Yk)(n),
        a = (0, l.e7)([_.ZP], () => null != n.guild_id && n === _.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(P.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, i.jsx)(R.Z, { channel: n });
    if (a) return (0, i.jsx)(L.Z, { channel: n });
    if (r) return (0, i.jsx)(A.Z, { channel: n });
    return (0, i.jsx)(M.Z, { channel: n });
}
function F(e) {
    var t, n;
    let { channel: p, showingBanner: h } = e,
        C = (0, d.ZP)(p),
        { type: _ } = p,
        P = (0, l.e7)([j.default], () => (p.isPrivate() ? j.default.getUser(p.getRecipientId()) : null)),
        A = O.ZP.useUserTag(P),
        { canManageRoles: M, canReadMessageHistory: R } = (0, l.cj)([x.Z], () => ({
            canManageRoles: x.Z.can(k.Plq.MANAGE_ROLES, p),
            canReadMessageHistory: x.Z.can(k.Plq.READ_MESSAGE_HISTORY, p),
        })),
        L = (0, l.e7)([b.Z], () => (_ === k.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null), [p, _]),
        { systemDMRedesignEnabled: F } = g.Z.useExperiment(
            { location: "bf1a4f_1" },
            { autoTrackExposure: null != (t = p.isSystemDM()) && t },
        ),
        G = (0, u.Z)(null != (n = null == P ? void 0 : P.id) ? n : k.lds),
        { authorizedAppToken: z, authorizedAppsFetchState: W } = (0, l.cj)([v.default], () => ({
            authorizedAppToken: v.default.getNewestTokenForApplication(null == G ? void 0 : G.id),
            authorizedAppsFetchState: v.default.getFetchState(),
        })),
        q = c.Z.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (r.useEffect(() => {
            _ === k.d4z.DM &&
                null == L &&
                null != P &&
                o.Z.wait(() => (0, y.Z)(p.getRecipientId(), P.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [L, _, p, P]),
        r.useEffect(() => {
            (null == P ? void 0 : P.bot) && W === v.FetchState.NOT_FETCHED && s.Z.fetch();
        }, [null == P ? void 0 : P.bot, W]),
        p.isSystemDM())
    )
        return F
            ? (0, i.jsx)(w.Z, { channel: p })
            : (0, i.jsx)(N.Z, {
                  channel: p,
                  children: U.intl.string(U.t.Rzvnig),
              });
    if (_ === k.d4z.DM) {
        let e;
        return (
            null != P && null != G
                ? null != z &&
                  (e = (0, i.jsxs)("div", {
                      className: B.buttonContainer,
                      children: [
                          (0, i.jsx)(T.W, {
                              channel: p,
                              user: P,
                          }),
                          (0, i.jsx)(Z.n, {
                              user: P,
                              application: G,
                              channel: p,
                              oauth2Token: z,
                          }),
                          q && (0, i.jsx)(f.Z, { channel: p }),
                      ],
                  }))
                : (e = (0, i.jsx)(E.Z, {
                      userId: p.getRecipientId(),
                      channel: p,
                      showingBanner: h,
                  })),
            (0, i.jsxs)(N.Z, {
                channel: p,
                user: P,
                children: [
                    null != P &&
                        !P.isProvisional &&
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-xl/medium",
                            className: H.marginBottom20,
                            children: A,
                        }),
                    U.intl.format(U.t["Qvg+6+"], { username: C }),
                    (null == P ? void 0 : P.isProvisional) && (0, i.jsx)(m.q, { userId: P.id }),
                    e,
                ],
            })
        );
    }
    if (p.isMultiUserDM())
        if (p.isManaged())
            return (0, i.jsxs)(S.ZP, {
                channelId: p.id,
                children: [
                    (0, i.jsx)(S.Ot, { children: U.intl.format(U.t.I3R7Vn, { channelName: C }) }),
                    (0, i.jsx)(S.jz, { children: U.intl.string(U.t.M8Ao6I) }),
                ],
            });
        else if (p.hasFlag(D.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(I.Z, { channel: p });
        else
            return (0, i.jsx)(N.Z, {
                channel: p,
                children: U.intl.format(U.t.MFwcqO, { name: C }),
            });
    return R
        ? (0, i.jsx)(V, {
              channel: p,
              canManageRoles: M,
          })
        : (0, i.jsx)(S.ZP, {
              channelId: p.id,
              children: (0, i.jsx)(S.jz, { children: U.intl.format(U.t.hPVEQG, { channelName: C }) }),
          });
}
