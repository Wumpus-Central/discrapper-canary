i.d(l, {
    default: () => A,
    g: () => D
}),
    i(47120),
    i(536091);
var r = i(200651),
    t = i(192379),
    a = i(120356),
    n = i.n(a),
    o = i(442837),
    s = i(780384),
    d = i(481060),
    c = i(239091),
    u = i(749210),
    m = i(410030),
    v = i(726542),
    f = i(884338),
    h = i(367907),
    p = i(313201),
    x = i(598077),
    R = i(314897),
    j = i(271383),
    N = i(430824),
    _ = i(626135),
    g = i(63063),
    C = i(134433),
    k = i(225104),
    Z = i(981631),
    b = i(388032),
    I = i(698948),
    y = i(795661);
function D(e, l) {
    (0, d.ZDy)(async () => {
        let { default: t } = await Promise.all([i.e('82412'), i.e('83953')]).then(i.bind(i, 107807));
        return (i) =>
            (0, r.jsx)(t, {
                role: e,
                guildId: l,
                ...i
            });
    });
}
let A = function (e) {
    let { guildId: l, transitionState: a, onClose: A } = e,
        E = (0, o.e7)([N.Z], () => N.Z.getRoles(l)),
        P = (0, o.e7)([R.default], () => R.default.getId()),
        S = (0, o.e7)([j.ZP], () => j.ZP.getMember(l, P)),
        [T, w] = t.useState([]),
        B = (0, m.ZP)(),
        O = (0, p.Dt)();
    if (
        (t.useEffect(() => {
            0 !== T.length &&
                _.default.track(Z.rMx.PASSPORT_ENTRY_VIEWED, {
                    role_ids: T.map((e) => {
                        let { role_id: l } = e;
                        return l;
                    }),
                    ...(0, h.hH)(l)
                });
        }, [l, T]),
        t.useEffect(() => {
            u.Z.getGuildRoleConnectionsConfigurations(l).then((e) => w(e));
        }, [l]),
        null == S)
    )
        return null;
    let z = Object.values(E).filter((e) => {
        var l;
        return (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null;
    });
    return (0, r.jsxs)(d.Y0X, {
        transitionState: a,
        'aria-labelledby': O,
        className: I.modal,
        children: [
            (0, r.jsxs)(d.xBx, {
                separator: !1,
                children: [
                    (0, r.jsx)(C.Z, {
                        className: I.headerIcon,
                        size: 24
                    }),
                    (0, r.jsx)(d.X6q, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: b.intl.string(b.t.ghtnsr)
                    }),
                    (0, r.jsx)(d.olH, {
                        className: I.modalCloseButton,
                        onClick: A
                    })
                ]
            }),
            (0, r.jsxs)(d.hzk, {
                className: I.container,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: b.intl.format(b.t['Y+TsER'], { helpdeskArticleUrl: g.Z.getArticleURL(Z.BhN.CONNECTION_DETAILS) })
                    }),
                    (0, r.jsx)('div', {
                        className: I.verifiedRoles,
                        children: z.map((e) => {
                            let a = S.roles.includes(e.id),
                                o = (function (e) {
                                    let i = T.find((l) => {
                                        let { role_id: i } = l;
                                        return i === e;
                                    });
                                    if (null == i) return [];
                                    let t = {};
                                    for (let e of i.rules.flat()) {
                                        let o;
                                        if (null != e.application_id) {
                                            var a;
                                            let t = null === (a = i.applications) || void 0 === a ? void 0 : a[e.application_id];
                                            o =
                                                (null == t ? void 0 : t.bot) != null
                                                    ? (0, r.jsx)('img', {
                                                          src: new x.Z(t.bot).getAvatarURL(l, 24),
                                                          alt: '',
                                                          className: n()(I.botAvatar, y.avatar)
                                                      })
                                                    : null;
                                        } else {
                                            let l = v.Z.get(e.connection_type);
                                            o = (0, r.jsx)('img', {
                                                src: (0, s.ap)(B) ? l.icon.lightSVG : l.icon.darkSVG,
                                                alt: '',
                                                className: y.avatar
                                            });
                                        }
                                        null != o && (t[''.concat(e.connection_type, ':').concat(e.application_id)] = o);
                                    }
                                    return Object.values(t);
                                })(e.id);
                            return (0, r.jsxs)(
                                d.P3F,
                                {
                                    className: n()(I.verifiedRole, a ? I.verifiedRoleHasRole : null),
                                    onClick: a ? void 0 : () => D(e, l),
                                    onContextMenu: a
                                        ? (t) => {
                                              var a;
                                              return (
                                                  (a = e.id),
                                                  void (0, c.jW)(t, async () => {
                                                      let { default: e } = await i.e('60079').then(i.bind(i, 850902));
                                                      return (i) =>
                                                          (0, r.jsx)(e, {
                                                              ...i,
                                                              roleId: a,
                                                              onLeaveRole: () => u.Z.unassignGuildRoleConnection(l, a)
                                                          });
                                                  })
                                              );
                                          }
                                        : void 0,
                                    children: [
                                        a
                                            ? (0, r.jsx)('div', {
                                                  className: I.roleCheckmark,
                                                  children: (0, r.jsx)(d.kmB, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  })
                                              })
                                            : null,
                                        (0, r.jsx)(k.Z, {
                                            guildId: l,
                                            role: e,
                                            size: 24
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: I.verifiedRoleNameDescriptionContainer,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'header-primary',
                                                    className: I.verifiedRoleName,
                                                    children: e.name
                                                }),
                                                void 0 !== e.description
                                                    ? (0, r.jsx)(d.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'header-secondary',
                                                          className: I.verifiedRoleDescription,
                                                          children: e.description
                                                      })
                                                    : null
                                            ]
                                        }),
                                        (0, r.jsx)(f.Z, {
                                            showUserPopout: !1,
                                            guildId: l,
                                            users: o.map(() => null),
                                            renderUser: (e, l, i) => (0, r.jsx)(t.Fragment, { children: o[i] }, i),
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
