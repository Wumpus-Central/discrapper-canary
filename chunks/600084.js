n.d(t, { Z: () => H });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(570140),
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
    _ = n(484459),
    y = n(131704),
    C = n(881998),
    x = n(984933),
    v = n(496675),
    j = n(594174),
    O = n(51144),
    E = n(7782),
    I = n(967128),
    S = n(320781),
    P = n(269203),
    Z = n(86863),
    N = n(558756),
    T = n(753898),
    A = n(734386),
    w = n(184279),
    R = n(438306),
    k = n(544142),
    M = n(128557),
    L = n(981631),
    D = n(176505),
    U = n(388032),
    B = n(906667),
    G = n(20493);
function F(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, p.Yk)(n),
        o = (0, l.e7)([x.ZP], () => null != n.guild_id && n === x.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(S.Z, { channel: n });
    if (y.Ec.has(n.type)) return (0, r.jsx)(k.Z, { channel: n });
    if (o) return (0, r.jsx)(M.Z, { channel: n });
    if (i) return (0, r.jsx)(A.Z, { channel: n });
    return (0, r.jsx)(R.Z, { channel: n });
}
function H(e) {
    var t, n;
    let { channel: p, showingBanner: h } = e,
        y = (0, d.ZP)(p),
        { type: x } = p,
        S = (0, l.e7)([j.default], () => (p.isPrivate() ? j.default.getUser(p.getRecipientId()) : null)),
        A = O.ZP.useUserTag(S),
        { canManageRoles: R, canReadMessageHistory: k } = (0, l.cj)([v.Z], () => ({
            canManageRoles: v.Z.can(L.Plq.MANAGE_ROLES, p),
            canReadMessageHistory: v.Z.can(L.Plq.READ_MESSAGE_HISTORY, p)
        })),
        M = (0, l.e7)([b.Z], () => (x === L.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null), [p, x]),
        { systemDMRedesignEnabled: H } = g.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null != (t = p.isSystemDM()) && t }),
        V = (0, u.Z)(null != (n = null == S ? void 0 : S.id) ? n : L.lds),
        { authorizedAppToken: z, authorizedAppsFetchState: W } = (0, l.cj)([C.Z], () => {
            var e;
            return {
                authorizedAppToken: null != V ? (null == (e = C.Z.getApps()) ? void 0 : e.find((e) => e.application.id === V.id)) : void 0,
                authorizedAppsFetchState: C.Z.getFetchState()
            };
        }),
        Y = c.Z.useExperiment({ location: 'EmptyMessages' }).enabledDesktop;
    if (
        (i.useEffect(() => {
            x === L.d4z.DM && null == M && null != S && a.Z.wait(() => (0, _.Z)(p.getRecipientId(), S.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [M, x, p, S]),
        i.useEffect(() => {
            (null == S ? void 0 : S.bot) && W === C.M.NOT_FETCHED && s.Z.fetch();
        }, [null == S ? void 0 : S.bot, W]),
        p.isSystemDM())
    )
        return H
            ? (0, r.jsx)(w.Z, { channel: p })
            : (0, r.jsx)(T.Z, {
                  channel: p,
                  children: U.intl.string(U.t.Rzvnio)
              });
    if (x === L.d4z.DM) {
        let e;
        return (
            null != S && null != V
                ? null != z &&
                  (e = (0, r.jsxs)('div', {
                      className: B.buttonContainer,
                      children: [
                          (0, r.jsx)(N.W, {
                              className: B.button,
                              channel: p,
                              user: S
                          }),
                          (0, r.jsx)(Z.n, {
                              className: B.button,
                              user: S,
                              application: V,
                              channel: p,
                              oauth2Token: z
                          }),
                          Y &&
                              (0, r.jsx)(f.Z, {
                                  buttonSize: o.PhG.SMALL,
                                  color: o.zxk.Colors.PRIMARY,
                                  channel: p
                              })
                      ]
                  }))
                : (e = (0, r.jsx)(E.Z, {
                      userId: p.getRecipientId(),
                      channel: p,
                      showingBanner: h
                  })),
            (0, r.jsxs)(T.Z, {
                channel: p,
                user: S,
                children: [
                    null != S &&
                        !S.isProvisional &&
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/medium',
                            className: G.marginBottom20,
                            children: A
                        }),
                    U.intl.format(U.t['Qvg+6+'], { username: y }),
                    (null == S ? void 0 : S.isProvisional) && (0, r.jsx)(m.qE, { userId: S.id }),
                    e
                ]
            })
        );
    }
    if (p.isMultiUserDM())
        if (p.isManaged())
            return (0, r.jsxs)(I.ZP, {
                channelId: p.id,
                children: [(0, r.jsx)(I.Ot, { children: U.intl.format(U.t.I3R7Vl, { channelName: y }) }), (0, r.jsx)(I.jz, { children: U.intl.string(U.t.M8Ao6O) })]
            });
        else if (p.hasFlag(D.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(P.Z, { channel: p });
        else
            return (0, r.jsx)(T.Z, {
                channel: p,
                children: U.intl.format(U.t.MFwcqK, { name: y })
            });
    return k
        ? (0, r.jsx)(F, {
              channel: p,
              canManageRoles: R
          })
        : (0, r.jsx)(I.ZP, {
              channelId: p.id,
              children: (0, r.jsx)(I.jz, { children: U.intl.format(U.t.hPVEQE, { channelName: y }) })
          });
}
