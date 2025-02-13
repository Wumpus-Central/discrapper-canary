n.d(t, { Z: () => O }), n(536091), n(47120);
var a = n(200651),
    o = n(192379),
    i = n(512722),
    r = n.n(i),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(780384),
    p = n(481060),
    m = n(749210),
    g = n(99690),
    _ = n(410030),
    h = n(726542),
    f = n(367907),
    C = n(906732),
    x = n(385499),
    v = n(171368),
    b = n(598077),
    T = n(271383),
    I = n(626135),
    y = n(275759),
    N = n(107484),
    M = n(977392),
    k = n(134433),
    R = n(753194),
    j = n(458034),
    P = n(856651),
    S = n(981631),
    Z = n(228168),
    A = n(388032),
    E = n(539312);
function B(e) {
    let t,
        { connectionType: n, connectionMetadataField: o, operator: i, value: r, description: s } = e;
    if (null != s)
        switch (i) {
            case P.iO.LESS_THAN:
                t = A.intl.format(A.t['2p7dAw'], {
                    description: s,
                    count: Math.max(0, Number(r) - 1)
                });
                break;
            case P.iO.GREATER_THAN:
                t = A.intl.format(A.t['2p7dAw'], {
                    description: s,
                    count: Math.max(0, Number(r) + 1)
                });
                break;
            default:
                t = s;
        }
    else
        t = (0, y.n_)({
            connectionType: n,
            connectionMetadataField: o,
            operator: i,
            value: r
        });
    return null == t
        ? null
        : (0, a.jsxs)('div', {
              className: E.popoutCheck,
              children: [
                  (0, a.jsx)(p.dz2, {
                      size: 'md',
                      color: 'currentColor',
                      className: E.popoutCheckIcon
                  }),
                  (0, a.jsx)(p.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function L(e) {
    let { eligibilityStates: t } = e,
        n = (0, _.ZP)(),
        o = (0, p.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(),
        i = l().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, a.jsx)(a.Fragment, {
        children: Object.keys(i).map((e) => {
            var t, s;
            let l;
            let c = i[e],
                u = c.filter((e) => null != e.operator),
                m = c.find((e) => null != e.application),
                _ = h.Z.get(e),
                f = null == m ? void 0 : m.application,
                C = (null == f ? void 0 : f.bot) != null ? new b.Z(f.bot) : null;
            return (
                y.SJ.includes(null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : '')
                    ? (l = (0, a.jsx)(R.Z, {
                          className: E.botTag,
                          color: o,
                          size: 16
                      }))
                    : null != C &&
                      (l = (0, a.jsx)(x.Z, {
                          className: E.botTag,
                          verified: C.isVerifiedBot()
                      })),
                (0, a.jsxs)(
                    'div',
                    {
                        className: E.popoutChecksGroup,
                        children: [
                            (0, a.jsxs)('div', {
                                className: E.popoutCheckGroupName,
                                children: [
                                    null != _
                                        ? (0, a.jsx)('img', {
                                              src: (0, d.wj)(n) ? _.icon.darkSVG : _.icon.lightSVG,
                                              alt: '',
                                              className: E.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != C
                                        ? (0, a.jsx)(g.Z, {
                                              user: C,
                                              size: p.EFr.SIZE_20,
                                              className: E.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, a.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null !== (s = null == _ ? void 0 : _.name) && void 0 !== s ? s : null == f ? void 0 : f.name
                                    }),
                                    l
                                ]
                            }),
                            u.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: o, value: i, description: s } = e;
                                return (
                                    r()(null != n, 'connectionMetadataField is null'),
                                    r()(null != o, 'operator is null'),
                                    r()(null != i, 'value is null'),
                                    (0, a.jsx)(
                                        B,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: o,
                                            value: i,
                                            description: s
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(o, ':').concat(i)
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
function w(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: i, eligibilityStates: r, userId: s, roleId: l, channelId: u, guildId: d } = e;
    o.useEffect(() => {
        I.default.track(S.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: s,
            role_id: l,
            ...(0, f.JS)(u),
            ...(0, f.hH)(d)
        });
    }, [s, l, u, d]);
    let m = (0, c.e7)(
        [T.ZP],
        () => {
            var e, t;
            return null !== (t = null === (e = T.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t;
        },
        [d, l]
    );
    return (
        (t = 1 === r.length && 1 === r[0].length ? A.intl.string(A.t.jDym4O) : 1 === r.length ? A.intl.format(A.t['0eBj39'], {}) : A.intl.format(A.t.D7uftL, {})),
        (0, a.jsxs)('div', {
            className: E.popout,
            children: [
                (0, a.jsx)('div', {
                    className: E.popoutHeaderContainer,
                    children: (0, a.jsx)(p.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: E.popoutHeaderText,
                        children: t
                    })
                }),
                (0, a.jsx)('div', {
                    className: E.popoutChecks,
                    children: (0, a.jsx)(L, { eligibilityStates: r.flat() })
                }),
                (0, a.jsxs)('div', {
                    className: E.buttonContainer,
                    children: [
                        m
                            ? null
                            : (0, a.jsx)(p.zxk, {
                                  className: E.getRolesButton,
                                  onClick: n,
                                  children: A.intl.string(A.t.T1t1WV)
                              }),
                        (0, a.jsx)(p.zxk, {
                            className: E.viewConnectionsButton,
                            color: p.zxk.Colors.PRIMARY,
                            onClick: i,
                            children: A.intl.string(A.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function O(e) {
    let { userId: t, messageId: n, guild: i, channel: s } = e,
        { analyticsLocations: l } = (0, C.ZP)(),
        u = (0, M.Z)(i, t, s.id, !0),
        d = (0, c.e7)([N.Z], () => N.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [g, _] = o.useState(null == d);
    if (null == u) return null;
    async function h() {
        r()(null != u, 'visibleConnectionsRole is null'), g && null == d && (await m.Z.fetchGuildRoleConnectionsEligibility(i.id, u.id), _(!1));
    }
    return (0, a.jsx)(p.KeG, {
        onRequestOpen: h,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: o } = e;
                return null == d
                    ? (0, a.jsx)(a.Fragment, {})
                    : (r()(null != u, 'visibleConnectionsRole is null'),
                      (0, a.jsx)(w, {
                          eligibilityStates: d,
                          userId: t,
                          roleId: u.id,
                          channelId: s.id,
                          guildId: i.id,
                          onGetRolesClicked: () => {
                              (0, j.Am)(i.id);
                          },
                          onOpenProfile: () => {
                              (0, v.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: i.id,
                                  channelId: s.id,
                                  roleId: u.id,
                                  subsection: Z.Tb.CONNECTIONS,
                                  sourceAnalyticsLocations: l,
                                  analyticsLocation: { section: S.jXE.CHANNEL }
                              }),
                                  o();
                          }
                      }));
            });
        },
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, a.jsx)(p.ua7, {
                text: A.intl.string(A.t.Wpsnam),
                children: (t) =>
                    (0, a.jsxs)('div', {
                        className: E.badge,
                        ...t,
                        ...e,
                        children: [
                            (0, a.jsx)(k.Z, {
                                className: E.badgeVerifiedIcon,
                                size: 16,
                                color: u.colorString
                            }),
                            (0, a.jsx)(p.Text, {
                                variant: 'text-xs/bold',
                                color: 'header-primary',
                                className: E.roleName,
                                children: u.name
                            })
                        ]
                    })
            })
    });
}
