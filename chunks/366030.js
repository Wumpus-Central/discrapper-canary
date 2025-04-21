n.d(t, { Z: () => B }), n(953529), n(472816), n(794429), n(388685);
var r = n(200651),
    o = n(192379),
    a = n(512722),
    i = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(780384),
    p = n(481060),
    g = n(749210),
    m = n(99690),
    f = n(410030),
    b = n(726542),
    h = n(367907),
    y = n(906732),
    _ = n(385499),
    O = n(171368),
    v = n(598077),
    j = n(271383),
    x = n(626135),
    C = n(275759),
    P = n(107484),
    T = n(977392),
    w = n(134433),
    S = n(753194),
    I = n(458034),
    N = n(856651),
    k = n(981631),
    M = n(228168),
    R = n(388032),
    E = n(933466);
function Z(e) {
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
function A(e) {
    let t,
        { connectionType: n, connectionMetadataField: o, operator: a, value: i, description: s } = e;
    if (null != s)
        switch (a) {
            case N.iO.LESS_THAN:
                t = R.intl.format(R.t['2p7dAw'], {
                    description: s,
                    count: Math.max(0, Number(i) - 1)
                });
                break;
            case N.iO.GREATER_THAN:
                t = R.intl.format(R.t['2p7dAw'], {
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
            operator: a,
            value: i
        });
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: E.popoutCheck,
              children: [
                  (0, r.jsx)(p.dz2, {
                      size: 'md',
                      color: 'currentColor',
                      className: E.popoutCheckIcon
                  }),
                  (0, r.jsx)(p.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function D(e) {
    let { eligibilityStates: t } = e,
        n = (0, f.ZP)(),
        o = (0, p.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(),
        a = l().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map((e) => {
            var t, s;
            let l,
                c = a[e],
                u = c.filter((e) => null != e.operator),
                g = c.find((e) => null != e.application),
                f = b.Z.get(e),
                h = null == g ? void 0 : g.application,
                y = (null == h ? void 0 : h.bot) != null ? new v.Z(h.bot) : null;
            return (
                C.SJ.includes(null != (t = null == h ? void 0 : h.id) ? t : '')
                    ? (l = (0, r.jsx)(S.Z, {
                          className: E.botTag,
                          color: o,
                          size: 16
                      }))
                    : null != y &&
                      (l = (0, r.jsx)(_.Z, {
                          className: E.botTag,
                          verified: y.isVerifiedBot()
                      })),
                (0, r.jsxs)(
                    'div',
                    {
                        className: E.popoutChecksGroup,
                        children: [
                            (0, r.jsxs)('div', {
                                className: E.popoutCheckGroupName,
                                children: [
                                    null != f
                                        ? (0, r.jsx)('img', {
                                              src: (0, d.wj)(n) ? f.icon.darkSVG : f.icon.lightSVG,
                                              alt: '',
                                              className: E.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != y
                                        ? (0, r.jsx)(m.Z, {
                                              user: y,
                                              size: p.EFr.SIZE_20,
                                              className: E.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null != (s = null == f ? void 0 : f.name) ? s : null == h ? void 0 : h.name
                                    }),
                                    l
                                ]
                            }),
                            u.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: o, value: a, description: s } = e;
                                return (
                                    i()(null != n, 'connectionMetadataField is null'),
                                    i()(null != o, 'operator is null'),
                                    i()(null != a, 'value is null'),
                                    (0, r.jsx)(
                                        A,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: o,
                                            value: a,
                                            description: s
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(o, ':').concat(a)
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
        { onGetRolesClicked: n, onOpenProfile: a, eligibilityStates: i, userId: s, roleId: l, channelId: u, guildId: d } = e;
    o.useEffect(() => {
        x.default.track(
            k.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            Z(
                {
                    other_user_id: s,
                    role_id: l
                },
                (0, h.JS)(u),
                (0, h.hH)(d)
            )
        );
    }, [s, l, u, d]);
    let g = (0, c.e7)(
        [j.ZP],
        () => {
            var e, t;
            return null != (t = null == (e = j.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(l)) && t;
        },
        [d, l]
    );
    return (
        (t = 1 === i.length && 1 === i[0].length ? R.intl.string(R.t.jDym4O) : 1 === i.length ? R.intl.format(R.t['0eBj39'], {}) : R.intl.format(R.t.D7uftL, {})),
        (0, r.jsxs)('div', {
            className: E.popout,
            children: [
                (0, r.jsx)('div', {
                    className: E.popoutHeaderContainer,
                    children: (0, r.jsx)(p.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: E.popoutHeaderText,
                        children: t
                    })
                }),
                (0, r.jsx)('div', {
                    className: E.popoutChecks,
                    children: (0, r.jsx)(D, { eligibilityStates: i.flat() })
                }),
                (0, r.jsxs)('div', {
                    className: E.buttonContainer,
                    children: [
                        g
                            ? null
                            : (0, r.jsx)(p.zxk, {
                                  className: E.getRolesButton,
                                  onClick: n,
                                  children: R.intl.string(R.t.T1t1WV)
                              }),
                        (0, r.jsx)(p.zxk, {
                            className: E.viewConnectionsButton,
                            color: p.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: R.intl.string(R.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function B(e) {
    let { userId: t, messageId: n, guild: a, channel: s } = e,
        { analyticsLocations: l } = (0, y.ZP)(),
        u = (0, T.Z)(a, t, s.id, !0),
        d = (0, c.e7)([P.Z], () => P.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [m, f] = o.useState(null == d);
    if (null == u) return null;
    async function b() {
        i()(null != u, 'visibleConnectionsRole is null'), m && null == d && (await g.Z.fetchGuildRoleConnectionsEligibility(a.id, u.id), f(!1));
    }
    return (0, r.jsx)(p.KeG, {
        onRequestOpen: b,
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
                          guildId: a.id,
                          onGetRolesClicked: () => {
                              (0, I.Am)(a.id);
                          },
                          onOpenProfile: () => {
                              (0, O.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: a.id,
                                  channelId: s.id,
                                  roleId: u.id,
                                  subsection: M.Tb.CONNECTIONS,
                                  sourceAnalyticsLocations: l,
                                  analyticsLocation: { section: k.jXE.CHANNEL }
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
                text: R.intl.string(R.t.Wpsnam),
                children: (t) => {
                    var n, o;
                    return (0, r.jsxs)(
                        'div',
                        ((n = Z({ className: E.badge }, t, e)),
                        (o = o =
                            {
                                children: [
                                    (0, r.jsx)(w.Z, {
                                        className: E.badgeVerifiedIcon,
                                        size: 16,
                                        color: u.colorString
                                    }),
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-xs/bold',
                                        color: 'header-primary',
                                        className: E.roleName,
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
