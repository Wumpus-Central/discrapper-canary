n.d(t, { Z: () => G }), n(953529), n(472816), n(794429), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(512722),
    i = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(780384),
    p = n(481060),
    m = n(749210),
    g = n(99690),
    f = n(410030),
    b = n(726542),
    h = n(367907),
    O = n(906732),
    y = n(385499),
    j = n(892001),
    v = n(598077),
    P = n(271383),
    x = n(626135),
    C = n(275759),
    w = n(107484),
    S = n(977392),
    N = n(134433),
    E = n(753194),
    T = n(458034),
    R = n(856651),
    Z = n(981631),
    _ = n(228168),
    k = n(388032),
    I = n(933466);
function M(e) {
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
function D(e) {
    let t,
        { connectionType: n, connectionMetadataField: o, operator: l, value: i, description: s } = e;
    if (null != s)
        switch (l) {
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
        t = (0, C.n_)({
            connectionType: n,
            connectionMetadataField: o,
            operator: l,
            value: i
        });
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: I.popoutCheck,
              children: [
                  (0, r.jsx)(p.dz2, {
                      size: 'md',
                      color: 'currentColor',
                      className: I.popoutCheckIcon
                  }),
                  (0, r.jsx)(p.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function A(e) {
    let { eligibilityStates: t } = e,
        n = (0, f.ZP)(),
        o = (0, p.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(),
        l = a().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(l).map((e) => {
            var t, s;
            let a,
                c = l[e],
                u = c.filter((e) => null != e.operator),
                m = c.find((e) => null != e.application),
                f = b.Z.get(e),
                h = null == m ? void 0 : m.application,
                O = (null == h ? void 0 : h.bot) != null ? new v.Z(h.bot) : null;
            return (
                C.SJ.includes(null != (t = null == h ? void 0 : h.id) ? t : '')
                    ? (a = (0, r.jsx)(E.Z, {
                          className: I.botTag,
                          color: o,
                          size: 16
                      }))
                    : null != O &&
                      (a = (0, r.jsx)(y.Z, {
                          className: I.botTag,
                          verified: O.isVerifiedBot()
                      })),
                (0, r.jsxs)(
                    'div',
                    {
                        className: I.popoutChecksGroup,
                        children: [
                            (0, r.jsxs)('div', {
                                className: I.popoutCheckGroupName,
                                children: [
                                    null != f
                                        ? (0, r.jsx)('img', {
                                              src: (0, d.wj)(n) ? f.icon.darkSVG : f.icon.lightSVG,
                                              alt: '',
                                              className: I.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != O
                                        ? (0, r.jsx)(g.Z, {
                                              user: O,
                                              size: p.EFr.SIZE_20,
                                              className: I.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null != (s = null == f ? void 0 : f.name) ? s : null == h ? void 0 : h.name
                                    }),
                                    a
                                ]
                            }),
                            u.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: o, value: l, description: s } = e;
                                return (
                                    i()(null != n, 'connectionMetadataField is null'),
                                    i()(null != o, 'operator is null'),
                                    i()(null != l, 'value is null'),
                                    (0, r.jsx)(
                                        D,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: o,
                                            value: l,
                                            description: s
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
function L(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: l, eligibilityStates: i, userId: s, roleId: a, channelId: u, guildId: d } = e;
    o.useEffect(() => {
        x.default.track(
            Z.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            M(
                {
                    other_user_id: s,
                    role_id: a
                },
                (0, h.JS)(u),
                (0, h.hH)(d)
            )
        );
    }, [s, a, u, d]);
    let m = (0, c.e7)(
        [P.ZP],
        () => {
            var e, t;
            return null != (t = null == (e = P.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(a)) && t;
        },
        [d, a]
    );
    return (
        (t = 1 === i.length && 1 === i[0].length ? k.intl.string(k.t.jDym4O) : 1 === i.length ? k.intl.format(k.t['0eBj39'], {}) : k.intl.format(k.t.D7uftL, {})),
        (0, r.jsxs)('div', {
            className: I.popout,
            children: [
                (0, r.jsx)('div', {
                    className: I.popoutHeaderContainer,
                    children: (0, r.jsx)(p.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: I.popoutHeaderText,
                        children: t
                    })
                }),
                (0, r.jsx)('div', {
                    className: I.popoutChecks,
                    children: (0, r.jsx)(A, { eligibilityStates: i.flat() })
                }),
                (0, r.jsxs)('div', {
                    className: I.buttonContainer,
                    children: [
                        m
                            ? null
                            : (0, r.jsx)(p.zxk, {
                                  className: I.getRolesButton,
                                  onClick: n,
                                  children: k.intl.string(k.t.T1t1WV)
                              }),
                        (0, r.jsx)(p.zxk, {
                            className: I.viewConnectionsButton,
                            color: p.zxk.Colors.PRIMARY,
                            onClick: l,
                            children: k.intl.string(k.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function G(e) {
    let { userId: t, messageId: n, guild: l, channel: s } = e,
        { analyticsLocations: a } = (0, O.ZP)(),
        u = (0, S.Z)(l, t, s.id, !0),
        d = (0, c.e7)([w.Z], () => w.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [g, f] = o.useState(null == d),
        b = o.useRef(null);
    if (null == u) return null;
    async function h() {
        i()(null != u, 'visibleConnectionsRole is null'), g && null == d && (await m.Z.fetchGuildRoleConnectionsEligibility(l.id, u.id), f(!1));
    }
    return (0, r.jsx)(p.KeG, {
        targetElementRef: b,
        onRequestOpen: h,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: o } = e;
                return null == d
                    ? (0, r.jsx)(r.Fragment, {})
                    : (i()(null != u, 'visibleConnectionsRole is null'),
                      (0, r.jsx)(L, {
                          eligibilityStates: d,
                          userId: t,
                          roleId: u.id,
                          channelId: s.id,
                          guildId: l.id,
                          onGetRolesClicked: () => {
                              (0, T.Am)(l.id);
                          },
                          onOpenProfile: () => {
                              (0, j.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: l.id,
                                  channelId: s.id,
                                  roleId: u.id,
                                  subsection: _.Tb.CONNECTIONS,
                                  sourceAnalyticsLocations: a
                              }),
                                  o();
                          }
                      }));
            });
        },
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(p.ua7, {
                text: k.intl.string(k.t.Wpsnam),
                children: (t) => {
                    var n, o;
                    return (0, r.jsxs)(
                        'div',
                        ((n = M(
                            {
                                ref: b,
                                className: I.badge
                            },
                            t,
                            e
                        )),
                        (o = o =
                            {
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        className: I.badgeVerifiedIcon,
                                        size: 16,
                                        color: u.colorString
                                    }),
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-xs/bold',
                                        color: 'header-primary',
                                        className: I.roleName,
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
