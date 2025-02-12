n.d(t, { Z: () => G });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(570140),
    o = n(384275),
    c = n(82906),
    d = n(763762),
    u = n(933557),
    h = n(605436),
    p = n(736052),
    m = n(86203),
    f = n(189156),
    g = n(878857),
    _ = n(621853),
    C = n(484459),
    x = n(131704),
    v = n(881998),
    E = n(984933),
    I = n(496675),
    b = n(594174),
    Z = n(51144),
    N = n(7782),
    T = n(967128),
    S = n(320781),
    j = n(269203),
    y = n(86863),
    A = n(558756),
    P = n(753898),
    R = n(734386),
    M = n(184279),
    L = n(438306),
    k = n(544142),
    O = n(128557),
    D = n(981631),
    w = n(176505),
    U = n(388032),
    B = n(387013),
    F = n(814632);
function H(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, h.Yk)(n),
        r = (0, a.e7)([E.ZP], () => null != n.guild_id && n === E.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, p.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(S.Z, { channel: n });
    if (x.Ec.has(n.type)) return (0, i.jsx)(k.Z, { channel: n });
    if (r) return (0, i.jsx)(O.Z, { channel: n });
    if (l) return (0, i.jsx)(R.Z, { channel: n });
    return (0, i.jsx)(L.Z, { channel: n });
}
function G(e) {
    var t, n;
    let { channel: h, showingBanner: p } = e,
        x = (0, u.ZP)(h),
        { type: E } = h,
        S = (0, a.e7)([b.default], () => (h.isPrivate() ? b.default.getUser(h.getRecipientId()) : null)),
        R = Z.ZP.useUserTag(S),
        { canManageRoles: L, canReadMessageHistory: k } = (0, a.cj)([I.Z], () => ({
            canManageRoles: I.Z.can(D.Plq.MANAGE_ROLES, h),
            canReadMessageHistory: I.Z.can(D.Plq.READ_MESSAGE_HISTORY, h)
        })),
        O = (0, a.e7)([_.Z], () => (E === D.d4z.DM ? _.Z.getMutualGuilds(h.getRecipientId()) : null), [h, E]),
        { systemDMRedesignEnabled: G } = g.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = h.isSystemDM()) && void 0 !== t && t }),
        V = (0, d.Z)(null !== (n = null == S ? void 0 : S.id) && void 0 !== n ? n : D.lds),
        { authorizedAppToken: z, authorizedAppsFetchState: W } = (0, a.cj)([v.Z], () => {
            var e;
            return {
                authorizedAppToken: null != V ? (null === (e = v.Z.getApps()) || void 0 === e ? void 0 : e.find((e) => e.application.id === V.id)) : void 0,
                authorizedAppsFetchState: v.Z.getFetchState()
            };
        }),
        Y = c.Z.useExperiment({ location: 'EmptyMessages' }).enabledDesktop;
    if (
        (l.useEffect(() => {
            E === D.d4z.DM && null == O && null != S && s.Z.wait(() => (0, C.Z)(h.getRecipientId(), S.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [O, E, h, S]),
        l.useEffect(() => {
            (null == S ? void 0 : S.bot) && W === v.M.NOT_FETCHED && o.Z.fetch();
        }, [null == S ? void 0 : S.bot, W]),
        h.isSystemDM())
    )
        return G
            ? (0, i.jsx)(M.Z, { channel: h })
            : (0, i.jsx)(P.Z, {
                  channel: h,
                  children: U.intl.string(U.t.Rzvnio)
              });
    if (E === D.d4z.DM) {
        let e;
        return (
            null != S && null != V
                ? null != z &&
                  (e = (0, i.jsxs)('div', {
                      className: B.buttonContainer,
                      children: [
                          (0, i.jsx)(A.W, {
                              className: B.button,
                              channel: h,
                              user: S
                          }),
                          (0, i.jsx)(y.n, {
                              className: B.button,
                              user: S,
                              application: V,
                              channel: h,
                              oauth2Token: z
                          }),
                          Y &&
                              (0, i.jsx)(m.Z, {
                                  buttonSize: r.PhG.SMALL,
                                  color: r.zxk.Colors.PRIMARY,
                                  channel: h
                              })
                      ]
                  }))
                : (e = (0, i.jsx)(N.Z, {
                      userId: h.getRecipientId(),
                      channel: h,
                      showingBanner: p
                  })),
            (0, i.jsxs)(P.Z, {
                channel: h,
                user: S,
                children: [
                    null != S &&
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-xl/medium',
                            className: F.marginBottom20,
                            children: R
                        }),
                    U.intl.format(U.t['Qvg+6+'], { username: x }),
                    (null == S ? void 0 : S.isProvisional) && (0, i.jsx)(f.qE, { userId: S.id }),
                    e
                ]
            })
        );
    }
    return h.isMultiUserDM()
        ? h.isManaged()
            ? (0, i.jsxs)(T.ZP, {
                  channelId: h.id,
                  children: [(0, i.jsx)(T.Ot, { children: U.intl.format(U.t.I3R7Vl, { channelName: x }) }), (0, i.jsx)(T.jz, { children: U.intl.string(U.t.M8Ao6O) })]
              })
            : h.hasFlag(w.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(j.Z, { channel: h })
              : (0, i.jsx)(P.Z, {
                    channel: h,
                    children: U.intl.format(U.t.MFwcqK, { name: x })
                })
        : k
          ? (0, i.jsx)(H, {
                channel: h,
                canManageRoles: L
            })
          : (0, i.jsx)(T.ZP, {
                channelId: h.id,
                children: (0, i.jsx)(T.jz, { children: U.intl.format(U.t.hPVEQE, { channelName: x }) })
            });
}
