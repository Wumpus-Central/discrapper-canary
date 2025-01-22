r.d(n, {
    Z: function () {
        return F;
    }
});
var i = r(536091);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(512722),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    p = r(692547),
    h = r(780384),
    _ = r(481060),
    m = r(749210),
    g = r(99690),
    E = r(410030),
    v = r(726542),
    y = r(367907),
    b = r(906732),
    I = r(385499),
    T = r(171368),
    S = r(598077),
    A = r(271383),
    C = r(626135),
    N = r(275759),
    R = r(107484),
    O = r(977392),
    D = r(134433),
    x = r(753194),
    L = r(458034),
    w = r(856651),
    P = r(981631),
    M = r(228168),
    k = r(388032),
    U = r(383077);
function B(e) {
    let n,
        { connectionType: r, connectionMetadataField: i, operator: a, value: s, description: l } = e;
    if (null != l)
        switch (a) {
            case w.iO.LESS_THAN:
                n = k.intl.format(k.t['2p7dAw'], {
                    description: l,
                    count: Math.max(0, Number(s) - 1)
                });
                break;
            case w.iO.GREATER_THAN:
                n = k.intl.format(k.t['2p7dAw'], {
                    description: l,
                    count: Math.max(0, Number(s) + 1)
                });
                break;
            default:
                n = l;
        }
    else
        n = (0, N.n_)({
            connectionType: r,
            connectionMetadataField: i,
            operator: a,
            value: s
        });
    return null == n
        ? null
        : (0, o.jsxs)('div', {
              className: U.popoutCheck,
              children: [
                  (0, o.jsx)(_.CheckmarkLargeIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: U.popoutCheckIcon
                  }),
                  (0, o.jsx)(_.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: n
                  })
              ]
          });
}
function G(e) {
    let { eligibilityStates: n } = e,
        r = (0, E.ZP)(),
        i = (0, _.useToken)(p.Z.unsafe_rawColors.GREEN_330).hex(),
        a = d().groupBy(n, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, o.jsx)(o.Fragment, {
        children: Object.keys(a).map((e) => {
            var n, s;
            let l;
            let c = a[e],
                d = c.filter((e) => null != e.operator),
                f = c.find((e) => null != e.application),
                p = v.Z.get(e),
                m = null == f ? void 0 : f.application,
                E = (null == m ? void 0 : m.bot) != null ? new S.Z(m.bot) : null;
            return (
                N.SJ.includes(null !== (n = null == m ? void 0 : m.id) && void 0 !== n ? n : '')
                    ? (l = (0, o.jsx)(x.Z, {
                          className: U.botTag,
                          color: i,
                          size: 16
                      }))
                    : null != E &&
                      (l = (0, o.jsx)(I.Z, {
                          className: U.botTag,
                          verified: E.isVerifiedBot()
                      })),
                (0, o.jsxs)(
                    'div',
                    {
                        className: U.popoutChecksGroup,
                        children: [
                            (0, o.jsxs)('div', {
                                className: U.popoutCheckGroupName,
                                children: [
                                    null != p
                                        ? (0, o.jsx)('img', {
                                              src: (0, h.wj)(r) ? p.icon.darkSVG : p.icon.lightSVG,
                                              alt: '',
                                              className: U.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != E
                                        ? (0, o.jsx)(g.Z, {
                                              user: E,
                                              size: _.AvatarSizes.SIZE_20,
                                              className: U.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, o.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null !== (s = null == p ? void 0 : p.name) && void 0 !== s ? s : null == m ? void 0 : m.name
                                    }),
                                    l
                                ]
                            }),
                            d.map((e) => {
                                let { connection_type: n, connection_metadata_field: r, operator: i, value: a, description: s } = e;
                                return (
                                    u()(null != r, 'connectionMetadataField is null'),
                                    u()(null != i, 'operator is null'),
                                    u()(null != a, 'value is null'),
                                    (0, o.jsx)(
                                        B,
                                        {
                                            connectionType: n,
                                            connectionMetadataField: r,
                                            operator: i,
                                            value: a,
                                            description: s
                                        },
                                        ''.concat(n, ':').concat(r, ':').concat(i, ':').concat(a)
                                    )
                                );
                            })
                        ]
                    },
                    e
                )
            );
        })
    });
}
function Z(e) {
    let n,
        { onGetRolesClicked: r, onOpenProfile: i, eligibilityStates: a, userId: l, roleId: u, channelId: c, guildId: d } = e;
    s.useEffect(() => {
        C.default.track(P.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: l,
            role_id: u,
            ...(0, y.JS)(c),
            ...(0, y.hH)(d)
        });
    }, [l, u, c, d]);
    let p = (0, f.e7)(
        [A.ZP],
        () => {
            var e, n;
            return null !== (n = null === (e = A.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(u)) && void 0 !== n && n;
        },
        [d, u]
    );
    return (
        (n = 1 === a.length && 1 === a[0].length ? k.intl.string(k.t.jDym4O) : 1 === a.length ? k.intl.format(k.t['0eBj39'], {}) : k.intl.format(k.t.D7uftL, {})),
        (0, o.jsxs)('div', {
            className: U.popout,
            children: [
                (0, o.jsx)('div', {
                    className: U.popoutHeaderContainer,
                    children: (0, o.jsx)(_.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: U.popoutHeaderText,
                        children: n
                    })
                }),
                (0, o.jsx)('div', {
                    className: U.popoutChecks,
                    children: (0, o.jsx)(G, { eligibilityStates: a.flat() })
                }),
                (0, o.jsxs)('div', {
                    className: U.buttonContainer,
                    children: [
                        p
                            ? null
                            : (0, o.jsx)(_.Button, {
                                  className: U.getRolesButton,
                                  onClick: r,
                                  children: k.intl.string(k.t.T1t1WV)
                              }),
                        (0, o.jsx)(_.Button, {
                            className: U.viewConnectionsButton,
                            color: _.Button.Colors.PRIMARY,
                            onClick: i,
                            children: k.intl.string(k.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function F(e) {
    let { userId: n, messageId: r, guild: i, channel: a } = e,
        { analyticsLocations: l } = (0, b.ZP)(),
        c = (0, O.Z)(i, n, a.id, !0),
        d = (0, f.e7)([R.Z], () => R.Z.getGuildRoleConnectionEligibility(null == c ? void 0 : c.id)),
        [p, h] = s.useState(null == d);
    if (null == c) return null;
    async function g() {
        if ((u()(null != c, 'visibleConnectionsRole is null'), !!p && null == d)) await m.Z.fetchGuildRoleConnectionsEligibility(i.id, c.id), h(!1);
    }
    function E() {
        return Promise.resolve((e) => {
            let { closePopout: s } = e;
            return null == d
                ? (0, o.jsx)(o.Fragment, {})
                : (u()(null != c, 'visibleConnectionsRole is null'),
                  (0, o.jsx)(Z, {
                      eligibilityStates: d,
                      userId: n,
                      roleId: c.id,
                      channelId: a.id,
                      guildId: i.id,
                      onGetRolesClicked: () => {
                          (0, L.Am)(i.id);
                      },
                      onOpenProfile: () => {
                          (0, T.openUserProfileModal)({
                              userId: n,
                              messageId: r,
                              guildId: i.id,
                              channelId: a.id,
                              roleId: c.id,
                              subsection: M.Tb.CONNECTIONS,
                              sourceAnalyticsLocations: l,
                              analyticsLocation: { section: P.jXE.CHANNEL }
                          }),
                              s();
                      }
                  }));
        });
    }
    return (0, o.jsx)(_.LazyPopout, {
        onRequestOpen: g,
        renderPopout: E,
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, o.jsx)(_.Tooltip, {
                text: k.intl.string(k.t.Wpsnam),
                children: (n) =>
                    (0, o.jsxs)('div', {
                        className: U.badge,
                        ...n,
                        ...e,
                        children: [
                            (0, o.jsx)(D.Z, {
                                className: U.badgeVerifiedIcon,
                                size: 16,
                                color: c.colorString
                            }),
                            (0, o.jsx)(_.Text, {
                                variant: 'text-xs/bold',
                                color: 'header-primary',
                                className: U.roleName,
                                children: c.name
                            })
                        ]
                    })
            })
    });
}
