n.d(t, { Z: () => V });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(570140),
    c = n(384275),
    u = n(82906),
    d = n(763762),
    p = n(933557),
    h = n(605436),
    f = n(736052),
    m = n(86203),
    g = n(189156),
    b = n(878857),
    _ = n(621853),
    y = n(484459),
    C = n(131704),
    x = n(881998),
    v = n(984933),
    j = n(496675),
    O = n(594174),
    E = n(51144),
    S = n(7782),
    P = n(967128),
    I = n(320781),
    Z = n(269203),
    T = n(86863),
    N = n(558756),
    A = n(753898),
    w = n(734386),
    R = n(184279),
    M = n(438306),
    D = n(544142),
    L = n(128557),
    k = n(981631),
    U = n(176505),
    B = n(388032),
    F = n(906667),
    H = n(20493);
function G(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, h.Yk)(n),
        a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, f.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(I.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, r.jsx)(D.Z, { channel: n });
    if (a) return (0, r.jsx)(L.Z, { channel: n });
    if (i) return (0, r.jsx)(w.Z, { channel: n });
    return (0, r.jsx)(M.Z, { channel: n });
}
function V(e) {
    var t, n;
    let { channel: h, showingBanner: f } = e,
        C = (0, p.ZP)(h),
        { type: v } = h,
        I = (0, l.e7)([O.default], () => (h.isPrivate() ? O.default.getUser(h.getRecipientId()) : null)),
        w = E.ZP.useUserTag(I),
        { canManageRoles: M, canReadMessageHistory: D } = (0, l.cj)([j.Z], () => ({
            canManageRoles: j.Z.can(k.Plq.MANAGE_ROLES, h),
            canReadMessageHistory: j.Z.can(k.Plq.READ_MESSAGE_HISTORY, h)
        })),
        L = (0, l.e7)([_.Z], () => (v === k.d4z.DM ? _.Z.getMutualGuilds(h.getRecipientId()) : null), [h, v]),
        { systemDMRedesignEnabled: V } = b.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null != (t = h.isSystemDM()) && t }),
        z = (0, d.Z)(null != (n = null == I ? void 0 : I.id) ? n : k.lds),
        { authorizedAppToken: W, authorizedAppsFetchState: Y } = (0, l.cj)([x.Z], () => {
            var e;
            return {
                authorizedAppToken: null != z ? (null == (e = x.Z.getApps()) ? void 0 : e.find((e) => e.application.id === z.id)) : void 0,
                authorizedAppsFetchState: x.Z.getFetchState()
            };
        }),
        q = u.Z.useExperiment({ location: 'EmptyMessages' }).enabledDesktop;
    if (
        (i.useEffect(() => {
            v === k.d4z.DM && null == L && null != I && s.Z.wait(() => (0, y.Z)(h.getRecipientId(), I.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [L, v, h, I]),
        i.useEffect(() => {
            (null == I ? void 0 : I.bot) && Y === x.M.NOT_FETCHED && c.Z.fetch();
        }, [null == I ? void 0 : I.bot, Y]),
        h.isSystemDM())
    )
        return V
            ? (0, r.jsx)(R.Z, { channel: h })
            : (0, r.jsx)(A.Z, {
                  channel: h,
                  children: B.intl.string(B.t.Rzvnio)
              });
    if (v === k.d4z.DM) {
        let e;
        return (
            null != I && null != z
                ? null != W &&
                  (e = (0, r.jsxs)('div', {
                      className: F.buttonContainer,
                      children: [
                          (0, r.jsx)(N.W, {
                              className: F.button,
                              channel: h,
                              user: I
                          }),
                          (0, r.jsx)(T.n, {
                              className: F.button,
                              user: I,
                              application: z,
                              channel: h,
                              oauth2Token: W
                          }),
                          q &&
                              (0, r.jsx)(m.Z, {
                                  buttonSize: a.Ph.SMALL,
                                  color: a.zx.Colors.PRIMARY,
                                  channel: h
                              })
                      ]
                  }))
                : (e = (0, r.jsx)(S.Z, {
                      userId: h.getRecipientId(),
                      channel: h,
                      showingBanner: f
                  })),
            (0, r.jsxs)(A.Z, {
                channel: h,
                user: I,
                children: [
                    null != I &&
                        !I.isProvisional &&
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/medium',
                            className: H.marginBottom20,
                            children: w
                        }),
                    B.intl.format(B.t['Qvg+6+'], { username: C }),
                    (null == I ? void 0 : I.isProvisional) && (0, r.jsx)(g.q, { userId: I.id }),
                    e
                ]
            })
        );
    }
    if (h.isMultiUserDM())
        if (h.isManaged())
            return (0, r.jsxs)(P.ZP, {
                channelId: h.id,
                children: [(0, r.jsx)(P.Ot, { children: B.intl.format(B.t.I3R7Vl, { channelName: C }) }), (0, r.jsx)(P.jz, { children: B.intl.string(B.t.M8Ao6O) })]
            });
        else if (h.hasFlag(U.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(Z.Z, { channel: h });
        else
            return (0, r.jsx)(A.Z, {
                channel: h,
                children: B.intl.format(B.t.MFwcqK, { name: C })
            });
    return D
        ? (0, r.jsx)(G, {
              channel: h,
              canManageRoles: M
          })
        : (0, r.jsx)(P.ZP, {
              channelId: h.id,
              children: (0, r.jsx)(P.jz, { children: B.intl.format(B.t.hPVEQE, { channelName: C }) })
          });
}
