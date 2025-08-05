(n.d(t, { Z: () => G }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(149765),
    u = n(442837),
    d = n(481060),
    f = n(787014),
    _ = n(911969),
    p = n(933557),
    h = n(185413),
    m = n(42311),
    g = n(626786),
    E = n(434404),
    b = n(454585),
    y = n(345162),
    O = n(485386),
    v = n(430824),
    I = n(496675),
    T = n(594174),
    S = n(700785),
    A = n(51144),
    N = n(396769),
    C = n(967128),
    w = n(318374),
    R = n(981631),
    P = n(388032),
    D = n(279078),
    L = n(73433);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            }));
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = 5;
function G(e) {
    let { channel: t } = e,
        [n, a] = i.useState(!1),
        s = (0, p.ZP)(t, !0),
        x = t.guild_id,
        j = (0, u.e7)([O.Z], () => (null != x ? O.Z.getSortedRoles(x) : void 0)),
        G = (0, u.e7)([T.default, v.Z], () => {
            var e;
            return T.default.getUser(null == (e = v.Z.getGuild(x)) ? void 0 : e.ownerId);
        }),
        B = i.useMemo(() => (null != j ? j.filter((e) => !(0, y.fI)(e)) : []), [j]),
        Z = i.useMemo(
            () =>
                l()(B)
                    .filter((e) => {
                        if (null == x) return !1;
                        let n = S.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.Db(n, c.$e(R.Plq.ADMINISTRATOR, R.Plq.VIEW_CHANNEL));
                    })
                    .value(),
            [t, x, B]
        ),
        F = (0, u.Wu)(
            [T.default],
            () => {
                let e = {};
                for (let n of (null != G && (e[G.id] = G), Object.values(t.permissionOverwrites))) {
                    if (n.type !== _.BN.MEMBER || null != e[n.id]) continue;
                    let t = T.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return l()(e)
                    .filter((e) => {
                        var n;
                        let r = S.BT({
                                permission: R.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            i = null != (n = t.permissionOverwrites[e.id]) ? n : S.Hn,
                            a = c.e$(i.allow, R.Plq.VIEW_CHANNEL);
                        return r || a;
                    })
                    .value();
            },
            [t, G]
        ),
        V = I.Z.can(R.Plq.MANAGE_CHANNELS, t) || I.Z.can(R.Plq.MANAGE_ROLES, t);
    function H() {
        if (1 !== F.length || Z.length > 0)
            return (0, r.jsx)(w.Z, {
                guildId: t.guild_id,
                className: D.avatars,
                maxUsers: U,
                users: F
            });
        let e = F[0],
            n = A.ZP.getName(e);
        return (0, r.jsxs)('div', {
            className: D.avatars,
            children: [
                (0, r.jsx)(d.qEK, {
                    src: e.getAvatarURL(t.guild_id, 24),
                    'aria-label': n,
                    size: d.EFr.SIZE_24
                }),
                (0, r.jsx)(d.Text, {
                    tag: 'span',
                    className: D.singleUserName,
                    variant: 'text-md/normal',
                    children: n
                }),
                '\xA0',
                (0, r.jsx)(d.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: P.intl.string(P.t.rt0ERU)
                })
            ]
        });
    }
    function Y() {
        return Z.map((e, n) => {
            var i, a;
            let s = null != (a = e.colorString) ? a : R.Pbq,
                l = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
            return V
                ? (0, r.jsx)(
                      m.Z,
                      {
                          className: o()(D.role, { [D.last]: n === Z.length - 1 }),
                          roleName: e.name,
                          roleColor: s,
                          disabled: !V,
                          verified: l,
                          onClick: () => {
                              (E.Z.open(t.guild_id, R.pNK.MEMBERS), E.Z.selectRole(e.id));
                          }
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      g.Z,
                      {
                          className: o()(D.role, { [D.last]: n === Z.length - 1 }),
                          roleName: e.name,
                          roleColor: s,
                          verified: l
                      },
                      e.id
                  );
        });
    }
    function W() {
        f.ZP.open(t.id);
    }
    function K() {
        return V
            ? (0, r.jsxs)('div', {
                  className: D.channelSettingButtons,
                  children: [
                      (0, r.jsx)(N.Z, {
                          label: P.intl.string(P.t.dMJ3Y2),
                          onClick: () => a(!0),
                          icon: (0, r.jsx)(d.BFJ, {
                              size: 'xs',
                              color: 'currentColor'
                          })
                      }),
                      (0, r.jsx)(N.Z, {
                          label: P.intl.string(P.t['3gUsJS']),
                          onClick: W,
                          icon: (0, r.jsx)(d.vdY, {
                              size: 'xs',
                              color: 'currentColor'
                          })
                      })
                  ]
              })
            : null;
    }
    let z = i.useCallback(() => a(!1), []);
    function q() {
        return n
            ? (0, r.jsx)(d.u_l, {
                  renderModal: (e) =>
                      (0, r.jsx)(
                          h.default,
                          M(k({}, e), {
                              onClose: () => (z(), e.onClose()),
                              channelId: t.id
                          })
                      ),
                  onCloseRequest: () => a(!1)
              })
            : null;
    }
    return (0, r.jsxs)(C.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(C.Kq, {
                locked: !0,
                channelType: t.type
            }),
            (0, r.jsx)(C.Ot, { children: P.intl.format(P.t.I3R7Vl, { channelName: s }) }),
            (0, r.jsx)(C.jz, {
                className: L.markup,
                children: P.intl.format(P.t.QuwqjI, {
                    channelName: s,
                    topicHook: () => b.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            K(),
            (0, r.jsxs)('div', {
                className: D.members,
                children: [H(), Y()]
            }),
            q()
        ]
    });
}
