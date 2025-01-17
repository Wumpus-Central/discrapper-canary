r.d(n, {
    Z: function () {
        return F;
    }
});
var i = r(536091);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(512722),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    _ = r(692547),
    h = r(780384),
    p = r(481060),
    m = r(749210),
    g = r(99690),
    E = r(410030),
    v = r(726542),
    I = r(367907),
    T = r(906732),
    b = r(385499),
    y = r(171368),
    S = r(598077),
    A = r(271383),
    N = r(626135),
    C = r(275759),
    R = r(107484),
    O = r(977392),
    D = r(134433),
    L = r(753194),
    x = r(458034),
    w = r(856651),
    P = r(981631),
    M = r(228168),
    k = r(388032),
    U = r(383077);
function B(e) {
    let n,
        { connectionType: r, connectionMetadataField: i, operator: a, value: o, description: l } = e;
    if (null != l)
        switch (a) {
            case w.iO.LESS_THAN:
                n = k.intl.format(k.t['2p7dAw'], {
                    description: l,
                    count: Math.max(0, Number(o) - 1)
                });
                break;
            case w.iO.GREATER_THAN:
                n = k.intl.format(k.t['2p7dAw'], {
                    description: l,
                    count: Math.max(0, Number(o) + 1)
                });
                break;
            default:
                n = l;
        }
    else
        n = (0, C.n_)({
            connectionType: r,
            connectionMetadataField: i,
            operator: a,
            value: o
        });
    return null == n
        ? null
        : (0, s.jsxs)('div', {
              className: U.popoutCheck,
              children: [
                  (0, s.jsx)(p.CheckmarkLargeIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: U.popoutCheckIcon
                  }),
                  (0, s.jsx)(p.Text, {
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
        i = (0, p.useToken)(_.Z.unsafe_rawColors.GREEN_330).hex(),
        a = d().groupBy(n, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, s.jsx)(s.Fragment, {
        children: Object.keys(a).map((e) => {
            var n, o;
            let l;
            let c = a[e],
                d = c.filter((e) => null != e.operator),
                f = c.find((e) => null != e.application),
                _ = v.Z.get(e),
                m = null == f ? void 0 : f.application,
                E = (null == m ? void 0 : m.bot) != null ? new S.Z(m.bot) : null;
            return (
                C.SJ.includes(null !== (n = null == m ? void 0 : m.id) && void 0 !== n ? n : '')
                    ? (l = (0, s.jsx)(L.Z, {
                          className: U.botTag,
                          color: i,
                          size: 16
                      }))
                    : null != E &&
                      (l = (0, s.jsx)(b.Z, {
                          className: U.botTag,
                          verified: E.isVerifiedBot()
                      })),
                (0, s.jsxs)(
                    'div',
                    {
                        className: U.popoutChecksGroup,
                        children: [
                            (0, s.jsxs)('div', {
                                className: U.popoutCheckGroupName,
                                children: [
                                    null != _
                                        ? (0, s.jsx)('img', {
                                              src: (0, h.wj)(r) ? _.icon.darkSVG : _.icon.lightSVG,
                                              alt: '',
                                              className: U.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != E
                                        ? (0, s.jsx)(g.Z, {
                                              user: E,
                                              size: p.AvatarSizes.SIZE_20,
                                              className: U.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, s.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null !== (o = null == _ ? void 0 : _.name) && void 0 !== o ? o : null == m ? void 0 : m.name
                                    }),
                                    l
                                ]
                            }),
                            d.map((e) => {
                                let { connection_type: n, connection_metadata_field: r, operator: i, value: a, description: o } = e;
                                return (
                                    u()(null != r, 'connectionMetadataField is null'),
                                    u()(null != i, 'operator is null'),
                                    u()(null != a, 'value is null'),
                                    (0, s.jsx)(
                                        B,
                                        {
                                            connectionType: n,
                                            connectionMetadataField: r,
                                            operator: i,
                                            value: a,
                                            description: o
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
    o.useEffect(() => {
        N.default.track(P.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: l,
            role_id: u,
            ...(0, I.JS)(c),
            ...(0, I.hH)(d)
        });
    }, [l, u, c, d]);
    let _ = (0, f.e7)(
        [A.ZP],
        () => {
            var e, n;
            return null !== (n = null === (e = A.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(u)) && void 0 !== n && n;
        },
        [d, u]
    );
    return (
        (n = 1 === a.length && 1 === a[0].length ? k.intl.string(k.t.jDym4O) : 1 === a.length ? k.intl.format(k.t['0eBj39'], {}) : k.intl.format(k.t.D7uftL, {})),
        (0, s.jsxs)('div', {
            className: U.popout,
            children: [
                (0, s.jsx)('div', {
                    className: U.popoutHeaderContainer,
                    children: (0, s.jsx)(p.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: U.popoutHeaderText,
                        children: n
                    })
                }),
                (0, s.jsx)('div', {
                    className: U.popoutChecks,
                    children: (0, s.jsx)(G, { eligibilityStates: a.flat() })
                }),
                (0, s.jsxs)('div', {
                    className: U.buttonContainer,
                    children: [
                        _
                            ? null
                            : (0, s.jsx)(p.Button, {
                                  className: U.getRolesButton,
                                  onClick: r,
                                  children: k.intl.string(k.t.T1t1WV)
                              }),
                        (0, s.jsx)(p.Button, {
                            className: U.viewConnectionsButton,
                            color: p.Button.Colors.PRIMARY,
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
        { analyticsLocations: l } = (0, T.ZP)(),
        c = (0, O.Z)(i, n, a.id, !0),
        d = (0, f.e7)([R.Z], () => R.Z.getGuildRoleConnectionEligibility(null == c ? void 0 : c.id)),
        [_, h] = o.useState(null == d);
    if (null == c) return null;
    async function g() {
        if ((u()(null != c, 'visibleConnectionsRole is null'), !!_ && null == d)) await m.Z.fetchGuildRoleConnectionsEligibility(i.id, c.id), h(!1);
    }
    function E() {
        return Promise.resolve((e) => {
            let { closePopout: o } = e;
            return null == d
                ? (0, s.jsx)(s.Fragment, {})
                : (u()(null != c, 'visibleConnectionsRole is null'),
                  (0, s.jsx)(Z, {
                      eligibilityStates: d,
                      userId: n,
                      roleId: c.id,
                      channelId: a.id,
                      guildId: i.id,
                      onGetRolesClicked: () => {
                          (0, x.Am)(i.id);
                      },
                      onOpenProfile: () => {
                          (0, y.openUserProfileModal)({
                              userId: n,
                              messageId: r,
                              guildId: i.id,
                              channelId: a.id,
                              roleId: c.id,
                              subsection: M.Tb.CONNECTIONS,
                              sourceAnalyticsLocations: l,
                              analyticsLocation: { section: P.jXE.CHANNEL }
                          }),
                              o();
                      }
                  }));
        });
    }
    return (0, s.jsx)(p.LazyPopout, {
        onRequestOpen: g,
        renderPopout: E,
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, s.jsx)(p.Tooltip, {
                text: k.intl.string(k.t.Wpsnam),
                children: (n) =>
                    (0, s.jsxs)('div', {
                        className: U.badge,
                        ...n,
                        ...e,
                        children: [
                            (0, s.jsx)(D.Z, {
                                className: U.badgeVerifiedIcon,
                                size: 16,
                                color: c.colorString
                            }),
                            (0, s.jsx)(p.Text, {
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
