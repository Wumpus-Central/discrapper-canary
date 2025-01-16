n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(185413),
    x = n(42311),
    v = n(626786),
    _ = n(434404),
    I = n(454585),
    E = n(430824),
    b = n(496675),
    Z = n(594174),
    N = n(700785),
    S = n(51144),
    T = n(396769),
    j = n(967128),
    A = n(318374),
    y = n(981631),
    P = n(388032),
    M = n(840822);
function R(e) {
    let { channel: t } = e,
        [n, r] = l.useState(!1),
        s = (0, f.ZP)(t, !0),
        R = t.guild_id,
        L = (0, u.e7)([E.Z], () => (null != R ? E.Z.getRoles(R) : void 0)),
        k = (0, u.e7)([Z.default, E.Z], () => {
            var e;
            return Z.default.getUser(null === (e = E.Z.getGuild(R)) || void 0 === e ? void 0 : e.ownerId);
        }),
        O = l.useMemo(
            () =>
                null != R
                    ? o()(L)
                          .sortBy((e) => -e.position)
                          .filter((e) => !(0, g.pM)(R, e.id))
                          .value()
                    : [],
            [R, L]
        ),
        D = l.useMemo(
            () =>
                o()(O)
                    .filter((e) => {
                        if (null == R) return !1;
                        let n = N.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.e$(n, y.Plq.ADMINISTRATOR) || c.e$(n, y.Plq.VIEW_CHANNEL);
                    })
                    .value(),
            [t, R, O]
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
                                permission: y.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            l = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : N.Hn,
                            r = c.e$(l.allow, y.Plq.VIEW_CHANNEL);
                        return i || r;
                    })
                    .value();
            },
            [t, k]
        ),
        B = b.Z.can(y.Plq.MANAGE_CHANNELS, t) || b.Z.can(y.Plq.MANAGE_ROLES, t);
    function U() {
        p.ZP.open(t.id);
    }
    let H = l.useCallback(() => r(!1), []);
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
                    topicHook: () => I.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            B
                ? (0, i.jsxs)('div', {
                      className: M.channelSettingButtons,
                      children: [
                          (0, i.jsx)(T.Z, {
                              label: P.intl.string(P.t.dMJ3Y2),
                              onClick: () => r(!0),
                              icon: (0, i.jsx)(h.GroupIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                          (0, i.jsx)(T.Z, {
                              label: P.intl.string(P.t['3gUsJS']),
                              onClick: U,
                              icon: (0, i.jsx)(h.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: M.members,
                children: [
                    (function () {
                        if (1 !== w.length || D.length > 0)
                            return (0, i.jsx)(A.Z, {
                                guildId: t.guild_id,
                                className: M.avatars,
                                maxUsers: 5,
                                users: w
                            });
                        let e = w[0],
                            n = S.ZP.getName(e);
                        return (0, i.jsxs)('div', {
                            className: M.avatars,
                            children: [
                                (0, i.jsx)(h.Avatar, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    'aria-label': n,
                                    size: h.AvatarSizes.SIZE_24
                                }),
                                (0, i.jsx)(h.Text, {
                                    tag: 'span',
                                    className: M.singleUserName,
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
                        var l, r;
                        let s = null !== (r = e.colorString) && void 0 !== r ? r : (0, d.Rf)(y.p6O),
                            o = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== void 0;
                        return B
                            ? (0, i.jsx)(
                                  x.Z,
                                  {
                                      className: a()(M.role, { [M.last]: n === D.length - 1 }),
                                      roleName: e.name,
                                      roleColor: s,
                                      disabled: !B,
                                      verified: o,
                                      onClick: () => {
                                          _.Z.open(t.guild_id, y.pNK.MEMBERS), _.Z.selectRole(e.id);
                                      }
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  v.Z,
                                  {
                                      className: a()(M.role, { [M.last]: n === D.length - 1 }),
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
                ? (0, i.jsx)(h.Modal, {
                      renderModal: (e) =>
                          (0, i.jsx)(C.default, {
                              ...e,
                              onClose: () => (H(), e.onClose()),
                              channelId: t.id
                          }),
                      onCloseRequest: () => r(!1)
                  })
                : null
        ]
    });
}
