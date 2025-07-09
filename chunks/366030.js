(n.d(t, { Z: () => B }), n(953529), n(472816), n(794429), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(512722),
    i = n.n(o),
    s = n(392711),
    a = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(780384),
    p = n(755721),
    m = n(481060),
    g = n(749210),
    f = n(99690),
    b = n(410030),
    h = n(726542),
    O = n(367907),
    y = n(906732),
    v = n(385499),
    j = n(892001),
    P = n(598077),
    x = n(271383),
    C = n(626135),
    w = n(275759),
    S = n(107484),
    E = n(977392),
    N = n(134433),
    T = n(753194),
    Z = n(458034),
    R = n(856651),
    _ = n(981631),
    I = n(228168),
    k = n(388032),
    M = n(933466);
function D(e) {
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
function A(e) {
    let t,
        { connectionType: n, connectionMetadataField: l, operator: o, value: i, description: s } = e;
    if (null != s)
        switch (o) {
            case R.iO.LESS_THAN:
                t = k.intl.format(k.t['2p7dAw'], {
                    description: s,
                    count: Math.max(0, Number(i) - 1)
                });
                break;
            case R.iO.GREATER_THAN:
                t = k.intl.format(k.t['2p7dAw'], {
                    description: s,
                    count: Math.max(0, Number(i) + 1)
                });
                break;
            default:
                t = s;
        }
    else
        t = (0, w.n_)({
            connectionType: n,
            connectionMetadataField: l,
            operator: o,
            value: i
        });
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: M.popoutCheck,
              children: [
                  (0, r.jsx)(m.dz2, {
                      size: 'md',
                      color: 'currentColor',
                      className: M.popoutCheckIcon
                  }),
                  (0, r.jsx)(m.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function L(e) {
    let { eligibilityStates: t } = e,
        n = (0, b.ZP)(),
        l = (0, m.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(),
        o = a().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(o).map((e) => {
            var t, s;
            let a,
                c = o[e],
                u = c.filter((e) => null != e.operator),
                p = c.find((e) => null != e.application),
                g = h.Z.get(e),
                b = null == p ? void 0 : p.application,
                O = (null == b ? void 0 : b.bot) != null ? new P.Z(b.bot) : null;
            return (
                w.SJ.includes(null != (t = null == b ? void 0 : b.id) ? t : '')
                    ? (a = (0, r.jsx)(T.Z, {
                          className: M.botTag,
                          color: l,
                          size: 16
                      }))
                    : null != O &&
                      (a = (0, r.jsx)(v.Z, {
                          className: M.botTag,
                          verified: O.isVerifiedBot()
                      })),
                (0, r.jsxs)(
                    'div',
                    {
                        className: M.popoutChecksGroup,
                        children: [
                            (0, r.jsxs)('div', {
                                className: M.popoutCheckGroupName,
                                children: [
                                    null != g
                                        ? (0, r.jsx)('img', {
                                              src: (0, d.wj)(n) ? g.icon.darkSVG : g.icon.lightSVG,
                                              alt: '',
                                              className: M.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != O
                                        ? (0, r.jsx)(f.Z, {
                                              user: O,
                                              size: m.EFr.SIZE_20,
                                              className: M.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, r.jsx)(m.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null != (s = null == g ? void 0 : g.name) ? s : null == b ? void 0 : b.name
                                    }),
                                    a
                                ]
                            }),
                            u.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: l, value: o, description: s } = e;
                                return (
                                    i()(null != n, 'connectionMetadataField is null'),
                                    i()(null != l, 'operator is null'),
                                    i()(null != o, 'value is null'),
                                    (0, r.jsx)(
                                        A,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: l,
                                            value: o,
                                            description: s
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(l, ':').concat(o)
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
function G(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: o, eligibilityStates: i, userId: s, roleId: a, channelId: u, guildId: d } = e;
    l.useEffect(() => {
        C.default.track(
            _.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            D(
                {
                    other_user_id: s,
                    role_id: a
                },
                (0, O.JS)(u),
                (0, O.hH)(d)
            )
        );
    }, [s, a, u, d]);
    let g = (0, c.e7)(
        [x.ZP],
        () => {
            var e, t;
            return null != (t = null == (e = x.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(a)) && t;
        },
        [d, a]
    );
    return (
        (t = 1 === i.length && 1 === i[0].length ? k.intl.string(k.t.jDym4O) : 1 === i.length ? k.intl.format(k.t['0eBj39'], {}) : k.intl.format(k.t.D7uftL, {})),
        (0, r.jsxs)('div', {
            className: M.popout,
            children: [
                (0, r.jsx)('div', {
                    className: M.popoutHeaderContainer,
                    children: (0, r.jsx)(m.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-default',
                        className: M.popoutHeaderText,
                        children: t
                    })
                }),
                (0, r.jsx)('div', {
                    className: M.popoutChecks,
                    children: (0, r.jsx)(L, { eligibilityStates: i.flat() })
                }),
                (0, r.jsxs)('div', {
                    className: M.buttonContainer,
                    children: [
                        g
                            ? null
                            : (0, r.jsx)(p.zx, {
                                  className: M.getRolesButton,
                                  onClick: n,
                                  children: k.intl.string(k.t.T1t1WV)
                              }),
                        (0, r.jsx)(p.zx, {
                            className: M.viewConnectionsButton,
                            color: p.zx.Colors.PRIMARY,
                            onClick: o,
                            children: k.intl.string(k.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function B(e) {
    let { userId: t, messageId: n, guild: o, channel: s } = e,
        { analyticsLocations: a } = (0, y.ZP)(),
        u = (0, E.Z)(o, t, s.id, !0),
        d = (0, c.e7)([S.Z], () => S.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [p, f] = l.useState(null == d),
        b = l.useRef(null);
    if (null == u) return null;
    async function h() {
        (i()(null != u, 'visibleConnectionsRole is null'), p && null == d && (await g.Z.fetchGuildRoleConnectionsEligibility(o.id, u.id), f(!1)));
    }
    return (0, r.jsx)(m.KeG, {
        targetElementRef: b,
        onRequestOpen: h,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: l } = e;
                return null == d
                    ? (0, r.jsx)(r.Fragment, {})
                    : (i()(null != u, 'visibleConnectionsRole is null'),
                      (0, r.jsx)(G, {
                          eligibilityStates: d,
                          userId: t,
                          roleId: u.id,
                          channelId: s.id,
                          guildId: o.id,
                          onGetRolesClicked: () => {
                              (0, Z.Am)(o.id);
                          },
                          onOpenProfile: () => {
                              ((0, j.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: o.id,
                                  channelId: s.id,
                                  roleId: u.id,
                                  subsection: I.Tb.CONNECTIONS,
                                  sourceAnalyticsLocations: a
                              }),
                                  l());
                          }
                      }));
            });
        },
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(m.ua7, {
                text: k.intl.string(k.t.Wpsnam),
                children: (t) => {
                    var n, l;
                    return (0, r.jsxs)(
                        'div',
                        ((n = D(
                            {
                                ref: b,
                                className: M.badge
                            },
                            t,
                            e
                        )),
                        (l = l =
                            {
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        className: M.badgeVerifiedIcon,
                                        size: 16,
                                        color: u.colorString
                                    }),
                                    (0, r.jsx)(m.Text, {
                                        variant: 'text-xs/bold',
                                        color: 'header-primary',
                                        className: M.roleName,
                                        children: u.name
                                    })
                                ]
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n)
                    );
                }
            })
    });
}
