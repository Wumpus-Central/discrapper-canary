n.d(t, { Z: () => L }), n(266796), n(86693), n(536091), n(47120);
var r = n(200651),
    o = n(192379),
    a = n(512722),
    i = n.n(a),
    s = n(392711),
    c = n.n(s),
    l = n(442837),
    u = n(692547),
    d = n(780384),
    p = n(481060),
    g = n(749210),
    m = n(99690),
    f = n(410030),
    _ = n(726542),
    b = n(367907),
    h = n(906732),
    y = n(385499),
    v = n(171368),
    O = n(598077),
    x = n(271383),
    C = n(626135),
    j = n(275759),
    P = n(107484),
    T = n(977392),
    N = n(134433),
    I = n(753194),
    w = n(458034),
    S = n(856651),
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
            case S.iO.LESS_THAN:
                t = R.NW.format(R.t['2p7dAw'], {
                    description: s,
                    count: Math.max(0, Number(i) - 1)
                });
                break;
            case S.iO.GREATER_THAN:
                t = R.NW.format(R.t['2p7dAw'], {
                    description: s,
                    count: Math.max(0, Number(i) + 1)
                });
                break;
            default:
                t = s;
        }
    else
        t = (0, j.n_)({
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
        a = c().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map((e) => {
            var t, s;
            let c,
                l = a[e],
                u = l.filter((e) => null != e.operator),
                g = l.find((e) => null != e.application),
                f = _.Z.get(e),
                b = null == g ? void 0 : g.application,
                h = (null == b ? void 0 : b.bot) != null ? new O.Z(b.bot) : null;
            return (
                j.SJ.includes(null != (t = null == b ? void 0 : b.id) ? t : '')
                    ? (c = (0, r.jsx)(I.Z, {
                          className: E.botTag,
                          color: o,
                          size: 16
                      }))
                    : null != h &&
                      (c = (0, r.jsx)(y.Z, {
                          className: E.botTag,
                          verified: h.isVerifiedBot()
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
                                    null != h
                                        ? (0, r.jsx)(m.Z, {
                                              user: h,
                                              size: p.EFr.SIZE_20,
                                              className: E.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null != (s = null == f ? void 0 : f.name) ? s : null == b ? void 0 : b.name
                                    }),
                                    c
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
function B(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: a, eligibilityStates: i, userId: s, roleId: c, channelId: u, guildId: d } = e;
    o.useEffect(() => {
        C.default.track(
            k.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            Z(
                {
                    other_user_id: s,
                    role_id: c
                },
                (0, b.JS)(u),
                (0, b.hH)(d)
            )
        );
    }, [s, c, u, d]);
    let g = (0, l.e7)(
        [x.ZP],
        () => {
            var e, t;
            return null != (t = null == (e = x.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(c)) && t;
        },
        [d, c]
    );
    return (
        (t = 1 === i.length && 1 === i[0].length ? R.NW.string(R.t.jDym4O) : 1 === i.length ? R.NW.format(R.t['0eBj39'], {}) : R.NW.format(R.t.D7uftL, {})),
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
                                  children: R.NW.string(R.t.T1t1WV)
                              }),
                        (0, r.jsx)(p.zxk, {
                            className: E.viewConnectionsButton,
                            color: p.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: R.NW.string(R.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function L(e) {
    let { userId: t, messageId: n, guild: a, channel: s } = e,
        { analyticsLocations: c } = (0, h.ZP)(),
        u = (0, T.Z)(a, t, s.id, !0),
        d = (0, l.e7)([P.Z], () => P.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [m, f] = o.useState(null == d);
    if (null == u) return null;
    async function _() {
        i()(null != u, 'visibleConnectionsRole is null'), m && null == d && (await g.Z.fetchGuildRoleConnectionsEligibility(a.id, u.id), f(!1));
    }
    return (0, r.jsx)(p.KeG, {
        onRequestOpen: _,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: o } = e;
                return null == d
                    ? (0, r.jsx)(r.Fragment, {})
                    : (i()(null != u, 'visibleConnectionsRole is null'),
                      (0, r.jsx)(B, {
                          eligibilityStates: d,
                          userId: t,
                          roleId: u.id,
                          channelId: s.id,
                          guildId: a.id,
                          onGetRolesClicked: () => {
                              (0, w.Am)(a.id);
                          },
                          onOpenProfile: () => {
                              (0, v.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: a.id,
                                  channelId: s.id,
                                  roleId: u.id,
                                  subsection: M.Tb.CONNECTIONS,
                                  sourceAnalyticsLocations: c,
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
                text: R.NW.string(R.t.Wpsnam),
                children: (t) => {
                    var n, o;
                    return (0, r.jsxs)(
                        'div',
                        ((n = Z({ className: E.badge }, t, e)),
                        (o = o =
                            {
                                children: [
                                    (0, r.jsx)(N.Z, {
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
