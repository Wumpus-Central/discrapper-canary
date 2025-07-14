(n.d(t, { Z: () => B }), n(953529), n(472816), n(794429), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(512722),
    i = n.n(l),
    a = n(392711),
    s = n.n(a),
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
    Z = n(753194),
    T = n(458034),
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
        { connectionType: n, connectionMetadataField: o, operator: l, value: i, description: a } = e;
    if (null != a)
        switch (l) {
            case R.iO.LESS_THAN:
                t = k.intl.format(k.t['2p7dAw'], {
                    description: a,
                    count: Math.max(0, Number(i) - 1)
                });
                break;
            case R.iO.GREATER_THAN:
                t = k.intl.format(k.t['2p7dAw'], {
                    description: a,
                    count: Math.max(0, Number(i) + 1)
                });
                break;
            default:
                t = a;
        }
    else
        t = (0, w.n_)({
            connectionType: n,
            connectionMetadataField: o,
            operator: l,
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
        o = (0, m.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(),
        l = s().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(l).map((e) => {
            var t, a;
            let s,
                c = l[e],
                u = c.filter((e) => null != e.operator),
                p = c.find((e) => null != e.application),
                g = h.Z.get(e),
                b = null == p ? void 0 : p.application,
                O = (null == b ? void 0 : b.bot) != null ? new P.Z(b.bot) : null;
            return (
                w.SJ.includes(null != (t = null == b ? void 0 : b.id) ? t : '')
                    ? (s = (0, r.jsx)(Z.Z, {
                          className: M.botTag,
                          color: o,
                          size: 16
                      }))
                    : null != O &&
                      (s = (0, r.jsx)(v.Z, {
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
                                        children: null != (a = null == g ? void 0 : g.name) ? a : null == b ? void 0 : b.name
                                    }),
                                    s
                                ]
                            }),
                            u.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: o, value: l, description: a } = e;
                                return (
                                    i()(null != n, 'connectionMetadataField is null'),
                                    i()(null != o, 'operator is null'),
                                    i()(null != l, 'value is null'),
                                    (0, r.jsx)(
                                        A,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: o,
                                            value: l,
                                            description: a
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(o, ':').concat(l)
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
        { onGetRolesClicked: n, onOpenProfile: l, eligibilityStates: i, userId: a, roleId: s, channelId: u, guildId: d } = e;
    o.useEffect(() => {
        C.default.track(
            _.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            D(
                {
                    other_user_id: a,
                    role_id: s
                },
                (0, O.JS)(u),
                (0, O.hH)(d)
            )
        );
    }, [a, s, u, d]);
    let g = (0, c.e7)(
        [x.ZP],
        () => {
            var e, t;
            return null != (t = null == (e = x.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(s)) && t;
        },
        [d, s]
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
                            onClick: l,
                            children: k.intl.string(k.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function B(e) {
    let { userId: t, messageId: n, guild: l, channel: a } = e,
        { analyticsLocations: s } = (0, y.ZP)(),
        u = (0, E.Z)(l, t, a.id, !0),
        d = (0, c.e7)([S.Z], () => S.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [p, f] = o.useState(null == d),
        b = o.useRef(null);
    if (null == u) return null;
    async function h() {
        (i()(null != u, 'visibleConnectionsRole is null'), p && null == d && (await g.Z.fetchGuildRoleConnectionsEligibility(l.id, u.id), f(!1)));
    }
    return (0, r.jsx)(m.KeG, {
        targetElementRef: b,
        onRequestOpen: h,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: o } = e;
                return null == d
                    ? (0, r.jsx)(r.Fragment, {})
                    : (i()(null != u, 'visibleConnectionsRole is null'),
                      (0, r.jsx)(G, {
                          eligibilityStates: d,
                          userId: t,
                          roleId: u.id,
                          channelId: a.id,
                          guildId: l.id,
                          onGetRolesClicked: () => {
                              (0, T.Am)(l.id);
                          },
                          onOpenProfile: () => {
                              ((0, j.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: l.id,
                                  channelId: a.id,
                                  roleId: u.id,
                                  subsection: I.Tb.CONNECTIONS,
                                  sourceAnalyticsLocations: s
                              }),
                                  o());
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
                    var n, o;
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
                        (o = o =
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
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        n)
                    );
                }
            })
    });
}
