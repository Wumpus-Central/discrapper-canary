n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(149765),
    d = n(866442),
    u = n(442837),
    h = n(481060),
    p = n(787014),
    m = n(911969),
    f = n(933557),
    g = n(605436),
    _ = n(185413),
    C = n(42311),
    x = n(626786),
    v = n(434404),
    E = n(454585),
    I = n(430824),
    b = n(496675),
    Z = n(594174),
    N = n(700785),
    T = n(51144),
    S = n(396769),
    j = n(967128),
    y = n(318374),
    A = n(981631),
    P = n(388032),
    R = n(600320);
function M(e) {
    let { channel: t } = e,
        [n, a] = l.useState(!1),
        s = (0, f.ZP)(t, !0),
        M = t.guild_id,
        L = (0, u.e7)([I.Z], () => (null != M ? I.Z.getRoles(M) : void 0)),
        k = (0, u.e7)([Z.default, I.Z], () => {
            var e;
            return Z.default.getUser(null === (e = I.Z.getGuild(M)) || void 0 === e ? void 0 : e.ownerId);
        }),
        O = l.useMemo(
            () =>
                null != M
                    ? o()(L)
                          .sortBy((e) => -e.position)
                          .filter((e) => !(0, g.pM)(M, e.id))
                          .value()
                    : [],
            [M, L]
        ),
        D = l.useMemo(
            () =>
                o()(O)
                    .filter((e) => {
                        if (null == M) return !1;
                        let n = N.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.e$(n, A.Plq.ADMINISTRATOR) || c.e$(n, A.Plq.VIEW_CHANNEL);
                    })
                    .value(),
            [t, M, O]
        ),
        w = (0, u.Wu)(
            [Z.default],
            () => {
                let e = {};
                for (let n of (null != k && (e[k.id] = k), Object.values(t.permissionOverwrites))) {
                    if (n.type !== m.BN.MEMBER || null != e[n.id]) continue;
                    let t = Z.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return o()(e)
                    .filter((e) => {
                        var n;
                        let i = N.BT({
                                permission: A.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            l = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : N.Hn,
                            a = c.e$(l.allow, A.Plq.VIEW_CHANNEL);
                        return i || a;
                    })
                    .value();
            },
            [t, k]
        ),
        U = b.Z.can(A.Plq.MANAGE_CHANNELS, t) || b.Z.can(A.Plq.MANAGE_ROLES, t),
        B = l.useCallback(() => a(!1), []);
    return (0, i.jsxs)(j.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(j.Kq, {
                locked: !0,
                channelType: t.type
            }),
            (0, i.jsx)(j.Ot, { children: P.intl.format(P.t.I3R7Vl, { channelName: s }) }),
            (0, i.jsx)(j.jz, {
                children: P.intl.format(P.t.QuwqjI, {
                    channelName: s,
                    topicHook: () => E.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            U
                ? (0, i.jsxs)('div', {
                      className: R.channelSettingButtons,
                      children: [
                          (0, i.jsx)(S.Z, {
                              label: P.intl.string(P.t.dMJ3Y2),
                              onClick: () => a(!0),
                              icon: (0, i.jsx)(h.BFJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                          (0, i.jsx)(S.Z, {
                              label: P.intl.string(P.t['3gUsJS']),
                              onClick: function () {
                                  p.ZP.open(t.id);
                              },
                              icon: (0, i.jsx)(h.vdY, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: R.members,
                children: [
                    (function () {
                        if (1 !== w.length || D.length > 0)
                            return (0, i.jsx)(y.Z, {
                                guildId: t.guild_id,
                                className: R.avatars,
                                maxUsers: 5,
                                users: w
                            });
                        let e = w[0],
                            n = T.ZP.getName(e);
                        return (0, i.jsxs)('div', {
                            className: R.avatars,
                            children: [
                                (0, i.jsx)(h.qEK, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    'aria-label': n,
                                    size: h.EFr.SIZE_24
                                }),
                                (0, i.jsx)(h.Text, {
                                    tag: 'span',
                                    className: R.singleUserName,
                                    variant: 'text-md/normal',
                                    children: n
                                }),
                                '\xA0',
                                (0, i.jsx)(h.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: P.intl.string(P.t.rt0ERU)
                                })
                            ]
                        });
                    })(),
                    D.map((e, n) => {
                        var l, a;
                        let s = null !== (a = e.colorString) && void 0 !== a ? a : (0, d.Rf)(A.p6O),
                            o = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== void 0;
                        return U
                            ? (0, i.jsx)(
                                  C.Z,
                                  {
                                      className: r()(R.role, { [R.last]: n === D.length - 1 }),
                                      roleName: e.name,
                                      roleColor: s,
                                      disabled: !U,
                                      verified: o,
                                      onClick: () => {
                                          v.Z.open(t.guild_id, A.pNK.MEMBERS), v.Z.selectRole(e.id);
                                      }
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  x.Z,
                                  {
                                      className: r()(R.role, { [R.last]: n === D.length - 1 }),
                                      roleName: e.name,
                                      roleColor: s,
                                      verified: o
                                  },
                                  e.id
                              );
                    })
                ]
            }),
            n
                ? (0, i.jsx)(h.u_l, {
                      renderModal: (e) =>
                          (0, i.jsx)(_.default, {
                              ...e,
                              onClose: () => (B(), e.onClose()),
                              channelId: t.id
                          }),
                      onCloseRequest: () => a(!1)
                  })
                : null
        ]
    });
}
