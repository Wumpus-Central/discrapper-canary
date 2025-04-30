n.d(t, {
    default: () => Z,
    g: () => A
}),
    n(388685),
    n(472816),
    n(794429),
    n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(780384),
    c = n(481060),
    u = n(239091),
    d = n(749210),
    p = n(410030),
    h = n(726542),
    f = n(884338),
    g = n(367907),
    m = n(313201),
    b = n(598077),
    _ = n(314897),
    E = n(271383),
    O = n(430824),
    y = n(626135),
    I = n(63063),
    v = n(134433),
    C = n(225104),
    S = n(981631),
    N = n(388032),
    T = n(739587),
    P = n(472840);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    (0, c.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('82412'), n.e('80993')]).then(n.bind(n, 107807));
        return (n) =>
            (0, r.jsx)(
                i,
                j(
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
        x = (0, o.e7)([O.Z], () => O.Z.getRoles(t)),
        w = (0, o.e7)([_.default], () => _.default.getId()),
        L = (0, o.e7)([E.ZP], () => E.ZP.getMember(t, w)),
        [R, D] = i.useState([]),
        k = (0, p.ZP)(),
        M = (0, m.Dt)();
    if (
        (i.useEffect(() => {
            0 !== R.length &&
                y.default.track(
                    S.rMx.PASSPORT_ENTRY_VIEWED,
                    j(
                        {
                            role_ids: R.map((e) => {
                                let { role_id: t } = e;
                                return t;
                            })
                        },
                        (0, g.hH)(t)
                    )
                );
        }, [t, R]),
        i.useEffect(() => {
            d.Z.getGuildRoleConnectionsConfigurations(t).then((e) => D(e));
        }, [t]),
        null == L)
    )
        return null;
    let U = Object.values(x).filter((e) => {
        var t;
        return (null == (t = e.tags) ? void 0 : t.guild_connections) === null;
    });
    return (0, r.jsxs)(c.Y0X, {
        transitionState: l,
        'aria-labelledby': M,
        className: T.modal,
        children: [
            (0, r.jsxs)(c.xBx, {
                separator: !1,
                children: [
                    (0, r.jsx)(v.Z, {
                        className: T.headerIcon,
                        size: 24
                    }),
                    (0, r.jsx)(c.X6q, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: N.intl.string(N.t.ghtnsr)
                    }),
                    (0, r.jsx)(c.olH, {
                        className: T.modalCloseButton,
                        onClick: Z
                    })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: T.container,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: N.intl.format(N.t['Y+TsER'], { helpdeskArticleUrl: I.Z.getArticleURL(S.BhN.CONNECTION_DETAILS) })
                    }),
                    (0, r.jsx)('div', {
                        className: T.verifiedRoles,
                        children: U.map((e) => {
                            let l = L.roles.includes(e.id),
                                o = (function (e) {
                                    let n = R.find((t) => {
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
                                                          src: new b.Z(i.bot).getAvatarURL(t, 24),
                                                          alt: '',
                                                          className: a()(T.botAvatar, P.avatar)
                                                      })
                                                    : null;
                                        } else {
                                            let t = h.Z.get(e.connection_type);
                                            o = (0, r.jsx)('img', {
                                                src: (0, s.ap)(k) ? t.icon.lightSVG : t.icon.darkSVG,
                                                alt: '',
                                                className: P.avatar
                                            });
                                        }
                                        null != o && (i[''.concat(e.connection_type, ':').concat(e.application_id)] = o);
                                    }
                                    return Object.values(i);
                                })(e.id);
                            return (0, r.jsxs)(
                                c.P3F,
                                {
                                    className: a()(T.verifiedRole, l ? T.verifiedRoleHasRole : null),
                                    onClick: l ? void 0 : () => A(e, t),
                                    onContextMenu: l
                                        ? (i) => {
                                              var l;
                                              return (
                                                  (l = e.id),
                                                  void (0, u.jW)(i, async () => {
                                                      let { default: e } = await n.e('60079').then(n.bind(n, 850902));
                                                      return (n) => {
                                                          var i, a;
                                                          return (0, r.jsx)(
                                                              e,
                                                              ((i = j({}, n)),
                                                              (a = a =
                                                                  {
                                                                      roleId: l,
                                                                      onLeaveRole: () => d.Z.unassignGuildRoleConnection(t, l)
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
                                                  className: T.roleCheckmark,
                                                  children: (0, r.jsx)(c.kmB, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  })
                                              })
                                            : null,
                                        (0, r.jsx)(C.Z, {
                                            guildId: t,
                                            role: e,
                                            size: 24
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: T.verifiedRoleNameDescriptionContainer,
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'header-primary',
                                                    className: T.verifiedRoleName,
                                                    children: e.name
                                                }),
                                                void 0 !== e.description
                                                    ? (0, r.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'header-secondary',
                                                          className: T.verifiedRoleDescription,
                                                          children: e.description
                                                      })
                                                    : null
                                            ]
                                        }),
                                        (0, r.jsx)(f.Z, {
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
