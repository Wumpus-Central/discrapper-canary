n.d(t, {
    Z: function () {
        return F;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
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
    C = n(621853),
    x = n(484459),
    v = n(131704),
    _ = n(881998),
    I = n(984933),
    E = n(496675),
    b = n(594174),
    Z = n(51144),
    S = n(7782),
    N = n(967128),
    T = n(320781),
    j = n(269203),
    A = n(86863),
    y = n(558756),
    P = n(753898),
    M = n(734386),
    R = n(184279),
    L = n(438306),
    k = n(544142),
    O = n(128557),
    D = n(981631),
    w = n(176505),
    B = n(388032),
    U = n(948861),
    H = n(232186);
function G(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, h.Yk)(n),
        a = (0, r.e7)([I.ZP], () => null != n.guild_id && n === I.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, p.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(T.Z, { channel: n });
    if (v.Ec.has(n.type)) return (0, i.jsx)(k.Z, { channel: n });
    else if (a) return (0, i.jsx)(O.Z, { channel: n });
    else if (l) return (0, i.jsx)(M.Z, { channel: n });
    return (0, i.jsx)(L.Z, { channel: n });
}
function F(e) {
    var t, n;
    let { channel: h, showingBanner: p } = e,
        v = (0, u.ZP)(h),
        { type: I } = h,
        T = (0, r.e7)([b.default], () => (h.isPrivate() ? b.default.getUser(h.getRecipientId()) : null)),
        M = Z.ZP.useUserTag(T),
        { canManageRoles: L, canReadMessageHistory: k } = (0, r.cj)([E.Z], () => ({
            canManageRoles: E.Z.can(D.Plq.MANAGE_ROLES, h),
            canReadMessageHistory: E.Z.can(D.Plq.READ_MESSAGE_HISTORY, h)
        })),
        O = (0, r.e7)([C.Z], () => (I === D.d4z.DM ? C.Z.getMutualGuilds(h.getRecipientId()) : null), [h, I]),
        { systemDMRedesignEnabled: F } = g.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = h.isSystemDM()) && void 0 !== t && t }),
        V = (0, d.Z)(null !== (n = null == T ? void 0 : T.id) && void 0 !== n ? n : D.lds),
        { authorizedAppToken: z, authorizedAppsFetchState: W } = (0, r.cj)([_.Z], () => {
            var e;
            return {
                authorizedAppToken: null != V ? (null === (e = _.Z.getApps()) || void 0 === e ? void 0 : e.find((e) => e.application.id === V.id)) : void 0,
                authorizedAppsFetchState: _.Z.getFetchState()
            };
        }),
        K = c.Z.useExperiment({ location: 'EmptyMessages' }).enabledDesktop;
    if (
        (l.useEffect(() => {
            I === D.d4z.DM && null == O && null != T && s.Z.wait(() => (0, x.Z)(h.getRecipientId(), T.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [O, I, h, T]),
        l.useEffect(() => {
            (null == T ? void 0 : T.bot) && W === _.M.NOT_FETCHED && o.Z.fetch();
        }, [null == T ? void 0 : T.bot, W]),
        h.isSystemDM())
    )
        return F
            ? (0, i.jsx)(R.Z, { channel: h })
            : (0, i.jsx)(P.Z, {
                  channel: h,
                  children: B.intl.string(B.t.Rzvnio)
              });
    if (I === D.d4z.DM) {
        let e;
        return (
            null != T && null != V
                ? null != z &&
                  (e = (0, i.jsxs)('div', {
                      className: U.buttonContainer,
                      children: [
                          (0, i.jsx)(y.W, {
                              className: U.button,
                              channel: h,
                              user: T
                          }),
                          (0, i.jsx)(A.n, {
                              className: U.button,
                              user: T,
                              application: V,
                              channel: h,
                              oauth2Token: z
                          }),
                          K &&
                              (0, i.jsx)(m.Z, {
                                  buttonSize: a.ButtonSizes.SMALL,
                                  color: a.Button.Colors.PRIMARY,
                                  channel: h
                              })
                      ]
                  }))
                : (e = (0, i.jsx)(S.Z, {
                      userId: h.getRecipientId(),
                      channel: h,
                      showingBanner: p
                  })),
            (0, i.jsxs)(P.Z, {
                channel: h,
                user: T,
                children: [
                    null != T &&
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-xl/medium',
                            className: H.marginBottom20,
                            children: M
                        }),
                    B.intl.format(B.t['Qvg+6+'], { username: v }),
                    (null == T ? void 0 : T.isProvisional) && (0, i.jsx)(f.Z, { look: 'channel_header' }),
                    e
                ]
            })
        );
    }
    if (h.isMultiUserDM())
        return h.isManaged()
            ? (0, i.jsxs)(N.ZP, {
                  channelId: h.id,
                  children: [(0, i.jsx)(N.Ot, { children: B.intl.format(B.t.I3R7Vl, { channelName: v }) }), (0, i.jsx)(N.jz, { children: B.intl.string(B.t.M8Ao6O) })]
              })
            : h.hasFlag(w.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(j.Z, { channel: h })
              : (0, i.jsx)(P.Z, {
                    channel: h,
                    children: B.intl.format(B.t.MFwcqK, { name: v })
                });
    return k
        ? (0, i.jsx)(G, {
              channel: h,
              canManageRoles: L
          })
        : (0, i.jsx)(N.ZP, {
              channelId: h.id,
              children: (0, i.jsx)(N.jz, { children: B.intl.format(B.t.hPVEQE, { channelName: v }) })
          });
}
