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
    I = n(967128),
    P = n(320781),
    Z = n(269203),
    T = n(86863),
    N = n(558756),
    A = n(753898),
    w = n(734386),
    R = n(184279),
    M = n(438306),
    D = n(544142),
    k = n(128557),
    L = n(981631),
    U = n(176505),
    B = n(388032),
    F = n(906667),
    H = n(20493);
function G(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, h.Yk)(n),
        a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, f.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(P.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, r.jsx)(D.Z, { channel: n });
    if (a) return (0, r.jsx)(k.Z, { channel: n });
    if (i) return (0, r.jsx)(w.Z, { channel: n });
    return (0, r.jsx)(M.Z, { channel: n });
}
function V(e) {
    var t, n;
    let { channel: h, showingBanner: f } = e,
        C = (0, p.ZP)(h),
        { type: v } = h,
        P = (0, l.e7)([O.default], () => (h.isPrivate() ? O.default.getUser(h.getRecipientId()) : null)),
        w = E.ZP.useUserTag(P),
        { canManageRoles: M, canReadMessageHistory: D } = (0, l.cj)([j.Z], () => ({
            canManageRoles: j.Z.can(L.Plq.MANAGE_ROLES, h),
            canReadMessageHistory: j.Z.can(L.Plq.READ_MESSAGE_HISTORY, h)
        })),
        k = (0, l.e7)([_.Z], () => (v === L.d4z.DM ? _.Z.getMutualGuilds(h.getRecipientId()) : null), [h, v]),
        { systemDMRedesignEnabled: V } = b.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null != (t = h.isSystemDM()) && t }),
        z = (0, d.Z)(null != (n = null == P ? void 0 : P.id) ? n : L.lds),
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
            v === L.d4z.DM && null == k && null != P && s.Z.wait(() => (0, y.Z)(h.getRecipientId(), P.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [k, v, h, P]),
        i.useEffect(() => {
            (null == P ? void 0 : P.bot) && Y === x.M.NOT_FETCHED && c.Z.fetch();
        }, [null == P ? void 0 : P.bot, Y]),
        h.isSystemDM())
    )
        return V
            ? (0, r.jsx)(R.Z, { channel: h })
            : (0, r.jsx)(A.Z, {
                  channel: h,
                  children: B.intl.string(B.t.Rzvnio)
              });
    if (v === L.d4z.DM) {
        let e;
        return (
            null != P && null != z
                ? null != W &&
                  (e = (0, r.jsxs)('div', {
                      className: F.buttonContainer,
                      children: [
                          (0, r.jsx)(N.W, {
                              className: F.button,
                              channel: h,
                              user: P
                          }),
                          (0, r.jsx)(T.n, {
                              className: F.button,
                              user: P,
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
                user: P,
                children: [
                    null != P &&
                        !P.isProvisional &&
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/medium',
                            className: H.marginBottom20,
                            children: w
                        }),
                    B.intl.format(B.t['Qvg+6+'], { username: C }),
                    (null == P ? void 0 : P.isProvisional) && (0, r.jsx)(g.q, { userId: P.id }),
                    e
                ]
            })
        );
    }
    if (h.isMultiUserDM())
        if (h.isManaged())
            return (0, r.jsxs)(I.ZP, {
                channelId: h.id,
                children: [(0, r.jsx)(I.Ot, { children: B.intl.format(B.t.I3R7Vl, { channelName: C }) }), (0, r.jsx)(I.jz, { children: B.intl.string(B.t.M8Ao6O) })]
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
        : (0, r.jsx)(I.ZP, {
              channelId: h.id,
              children: (0, r.jsx)(I.jz, { children: B.intl.format(B.t.hPVEQE, { channelName: C }) })
          });
}
