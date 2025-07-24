(n.d(t, {
    default: () => Z,
    g: () => A
}),
    n(388685),
    n(472816),
    n(794429),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(435935),
    s = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(239091),
    p = n(749210),
    h = n(410030),
    f = n(726542),
    g = n(884338),
    m = n(367907),
    b = n(313201),
    _ = n(598077),
    O = n(314897),
    E = n(271383),
    y = n(485386),
    v = n(626135),
    I = n(63063),
    C = n(134433),
    S = n(225104),
    N = n(981631),
    T = n(388032),
    P = n(739587),
    j = n(472840);
function x(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function A(e, t) {
    (0, u.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('82412'), n.e('80993')]).then(n.bind(n, 107807));
        return (n) =>
            (0, r.jsx)(
                i,
                x(
                    {
                        role: e,
                        guildId: t
                    },
                    n
                )
            );
    });
}
let Z = function (e) {
    let { guildId: t, transitionState: l, onClose: Z } = e,
        w = (0, s.e7)([y.Z], () => y.Z.getRoles(t)),
        L = (0, s.e7)([O.default], () => O.default.getId()),
        R = (0, s.e7)([E.ZP], () => E.ZP.getMember(t, L)),
        [D, k] = i.useState([]),
        M = (0, h.ZP)(),
        U = (0, b.Dt)();
    if (
        (i.useEffect(() => {
            0 !== D.length &&
                v.default.track(
                    N.rMx.PASSPORT_ENTRY_VIEWED,
                    x(
                        {
                            role_ids: D.map((e) => {
                                let { role_id: t } = e;
                                return t;
                            })
                        },
                        (0, m.hH)(t)
                    )
                );
        }, [t, D]),
        i.useEffect(() => {
            p.Z.getGuildRoleConnectionsConfigurations(t).then((e) => k(e));
        }, [t]),
        null == R)
    )
        return null;
    let G = Object.values(w).filter((e) => {
        var t;
        return (null == (t = e.tags) ? void 0 : t.guild_connections) === null;
    });
    return (0, r.jsxs)(u.Y0X, {
        transitionState: l,
        'aria-labelledby': U,
        className: P.modal,
        parentComponent: 'GuildRoleConnectionsModal',
        children: [
            (0, r.jsxs)(u.xBx, {
                separator: !1,
                justify: o.k.Justify.BETWEEN,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.header,
                        children: [
                            (0, r.jsx)(C.Z, {
                                className: P.headerIcon,
                                size: 24
                            }),
                            (0, r.jsx)(u.X6q, {
                                variant: 'text-lg/semibold',
                                children: T.intl.string(T.t.ghtnsr)
                            })
                        ]
                    }),
                    (0, r.jsx)(u.olH, { onClick: Z })
                ]
            }),
            (0, r.jsxs)(u.hzk, {
                className: P.container,
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/medium',
                        children: T.intl.format(T.t['Y+TsER'], { helpdeskArticleUrl: I.Z.getArticleURL(N.BhN.CONNECTION_DETAILS) })
                    }),
                    (0, r.jsx)('div', {
                        className: P.verifiedRoles,
                        children: G.map((e) => {
                            let l = R.roles.includes(e.id),
                                o = (function (e) {
                                    let n = D.find((t) => {
                                        let { role_id: n } = t;
                                        return n === e;
                                    });
                                    if (null == n) return [];
                                    let i = {};
                                    for (let e of n.rules.flat()) {
                                        let o;
                                        if (null != e.application_id) {
                                            var l;
                                            let i = null == (l = n.applications) ? void 0 : l[e.application_id];
                                            o =
                                                (null == i ? void 0 : i.bot) != null
                                                    ? (0, r.jsx)('img', {
                                                          src: new _.Z(i.bot).getAvatarURL(t, 24),
                                                          alt: '',
                                                          className: a()(P.botAvatar, j.avatar)
                                                      })
                                                    : null;
                                        } else {
                                            let t = f.Z.get(e.connection_type);
                                            o = (0, r.jsx)('img', {
                                                src: (0, c.ap)(M) ? t.icon.lightSVG : t.icon.darkSVG,
                                                alt: '',
                                                className: j.avatar
                                            });
                                        }
                                        null != o && (i[''.concat(e.connection_type, ':').concat(e.application_id)] = o);
                                    }
                                    return Object.values(i);
                                })(e.id);
                            return (0, r.jsxs)(
                                u.P3F,
                                {
                                    className: a()(P.verifiedRole, l ? P.verifiedRoleHasRole : null),
                                    onClick: l ? void 0 : () => A(e, t),
                                    onContextMenu: l
                                        ? (i) => {
                                              var l;
                                              return (
                                                  (l = e.id),
                                                  void (0, d.jW)(i, async () => {
                                                      let { default: e } = await n.e('60079').then(n.bind(n, 850902));
                                                      return (n) => {
                                                          var i, a;
                                                          return (0, r.jsx)(
                                                              e,
                                                              ((i = x({}, n)),
                                                              (a = a =
                                                                  {
                                                                      roleId: l,
                                                                      onLeaveRole: () => p.Z.unassignGuildRoleConnection(t, l)
                                                                  }),
                                                              Object.getOwnPropertyDescriptors
                                                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                                                  : (function (e, t) {
                                                                        var n = Object.keys(e);
                                                                        if (Object.getOwnPropertySymbols) {
                                                                            var r = Object.getOwnPropertySymbols(e);
                                                                            n.push.apply(n, r);
                                                                        }
                                                                        return n;
                                                                    })(Object(a)).forEach(function (e) {
                                                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                                                    }),
                                                              i)
                                                          );
                                                      };
                                                  })
                                              );
                                          }
                                        : void 0,
                                    children: [
                                        l
                                            ? (0, r.jsx)('div', {
                                                  className: P.roleCheckmark,
                                                  children: (0, r.jsx)(u.kmB, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  })
                                              })
                                            : null,
                                        (0, r.jsx)(S.Z, {
                                            guildId: t,
                                            role: e,
                                            size: 24
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: P.verifiedRoleNameDescriptionContainer,
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'header-primary',
                                                    className: P.verifiedRoleName,
                                                    children: e.name
                                                }),
                                                void 0 !== e.description
                                                    ? (0, r.jsx)(u.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'header-secondary',
                                                          className: P.verifiedRoleDescription,
                                                          children: e.description
                                                      })
                                                    : null
                                            ]
                                        }),
                                        (0, r.jsx)(g.ZP, {
                                            showUserPopout: !1,
                                            guildId: t,
                                            users: o.map(() => null),
                                            renderUser: (e, t, n) => (0, r.jsx)(i.Fragment, { children: o[n] }, n),
                                            max: 3
                                        })
                                    ]
                                },
                                e.id
                            );
                        })
                    })
                ]
            })
        ]
    });
};
