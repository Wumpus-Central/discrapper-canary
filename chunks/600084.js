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
    f = n(736052),
    h = n(86203),
    m = n(189156),
    g = n(621853),
    b = n(484459),
    C = n(131704),
    y = n(881998),
    v = n(984933),
    x = n(496675),
    O = n(594174),
    E = n(51144),
    j = n(7782),
    S = n(967128),
    _ = n(320781),
    P = n(269203),
    I = n(86863),
    Z = n(558756),
    T = n(753898),
    N = n(734386),
    A = n(438306),
    w = n(544142),
    M = n(128557),
    R = n(981631),
    L = n(176505),
    D = n(388032),
    k = n(701766),
    U = n(478411);
function V(e) {
    let { canManageRoles: t, channel: n } = e,
        r = t && (0, p.Yk)(n),
        a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, f.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(_.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, i.jsx)(w.Z, { channel: n });
    if (a) return (0, i.jsx)(M.Z, { channel: n });
    if (r) return (0, i.jsx)(N.Z, { channel: n });
    return (0, i.jsx)(A.Z, { channel: n });
}
function F(e) {
    var t;
    let { channel: n, showingBanner: p } = e,
        f = (0, d.ZP)(n),
        { type: C } = n,
        v = (0, l.e7)([O.default], () => (n.isPrivate() ? O.default.getUser(n.getRecipientId()) : null)),
        _ = E.ZP.useUserTag(v),
        { canManageRoles: N, canReadMessageHistory: A } = (0, l.cj)([x.Z], () => ({
            canManageRoles: x.Z.can(R.Plq.MANAGE_ROLES, n),
            canReadMessageHistory: x.Z.can(R.Plq.READ_MESSAGE_HISTORY, n),
        })),
        w = (0, l.e7)([g.Z], () => (C === R.d4z.DM ? g.Z.getMutualGuilds(n.getRecipientId()) : null), [n, C]),
        M = (0, u.Z)(null != (t = null == v ? void 0 : v.id) ? t : R.lds),
        { authorizedAppToken: F, authorizedAppsFetchState: H } = (0, l.cj)([y.default], () => ({
            authorizedAppToken: y.default.getNewestTokenForApplication(null == M ? void 0 : M.id),
            authorizedAppsFetchState: y.default.getFetchState(),
        })),
        B = c.Z.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (r.useEffect(() => {
            C === R.d4z.DM &&
                null == w &&
                null != v &&
                o.Z.wait(() => (0, b.Z)(n.getRecipientId(), v.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [w, C, n, v]),
        r.useEffect(() => {
            (null == v ? void 0 : v.bot) && H === y.FetchState.NOT_FETCHED && s.Z.fetch();
        }, [null == v ? void 0 : v.bot, H]),
        n.isSystemDM())
    )
        return (0, i.jsx)(T.Z, {
            channel: n,
            children: D.intl.string(D.t.Rzvnig),
        });
    if (C === R.d4z.DM) {
        let e;
        return (
            null != v && null != M
                ? null != F &&
                  (e = (0, i.jsxs)("div", {
                      className: k.buttonContainer,
                      children: [
                          (0, i.jsx)(Z.W, {
                              channel: n,
                              user: v,
                          }),
                          (0, i.jsx)(I.n, {
                              user: v,
                              application: M,
                              channel: n,
                              oauth2Token: F,
                          }),
                          B && (0, i.jsx)(h.Z, { channel: n }),
                      ],
                  }))
                : (e = (0, i.jsx)(j.Z, {
                      userId: n.getRecipientId(),
                      channel: n,
                      showingBanner: p,
                  })),
            (0, i.jsxs)(T.Z, {
                channel: n,
                user: v,
                children: [
                    null != v &&
                        !v.isProvisional &&
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-xl/medium",
                            className: U.marginBottom20,
                            children: _,
                        }),
                    D.intl.format(D.t["Qvg+6+"], { username: f }),
                    (null == v ? void 0 : v.isProvisional) && (0, i.jsx)(m.q, { userId: v.id }),
                    e,
                ],
            })
        );
    }
    if (n.isMultiUserDM())
        if (n.isManaged())
            return (0, i.jsxs)(S.ZP, {
                channelId: n.id,
                children: [
                    (0, i.jsx)(S.Ot, { children: D.intl.format(D.t.I3R7Vn, { channelName: f }) }),
                    (0, i.jsx)(S.jz, { children: D.intl.string(D.t.M8Ao6I) }),
                ],
            });
        else if (n.hasFlag(L.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(P.Z, { channel: n });
        else
            return (0, i.jsx)(T.Z, {
                channel: n,
                children: D.intl.format(D.t.MFwcqO, { name: f }),
            });
    return A
        ? (0, i.jsx)(V, {
              channel: n,
              canManageRoles: N,
          })
        : (0, i.jsx)(S.ZP, {
              channelId: n.id,
              children: (0, i.jsx)(S.jz, { children: D.intl.format(D.t.hPVEQG, { channelName: f }) }),
          });
}
