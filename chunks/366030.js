n.d(t, { Z: () => G }), n(536091), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(692547),
    d = n(780384),
    f = n(481060),
    _ = n(749210),
    p = n(99690),
    h = n(410030),
    m = n(726542),
    g = n(367907),
    E = n(906732),
    v = n(385499),
    y = n(171368),
    I = n(598077),
    b = n(271383),
    T = n(626135),
    S = n(275759),
    A = n(107484),
    N = n(977392),
    C = n(134433),
    R = n(753194),
    O = n(458034),
    D = n(856651),
    x = n(981631),
    L = n(228168),
    P = n(388032),
    w = n(383077);
function M(e) {
    let t,
        { connectionType: n, connectionMetadataField: r, operator: a, value: s, description: o } = e;
    if (null != o)
        switch (a) {
            case D.iO.LESS_THAN:
                t = P.intl.format(P.t['2p7dAw'], {
                    description: o,
                    count: Math.max(0, Number(s) - 1)
                });
                break;
            case D.iO.GREATER_THAN:
                t = P.intl.format(P.t['2p7dAw'], {
                    description: o,
                    count: Math.max(0, Number(s) + 1)
                });
                break;
            default:
                t = o;
        }
    else
        t = (0, S.n_)({
            connectionType: n,
            connectionMetadataField: r,
            operator: a,
            value: s
        });
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: w.popoutCheck,
              children: [
                  (0, i.jsx)(f.dz2, {
                      size: 'md',
                      color: 'currentColor',
                      className: w.popoutCheckIcon
                  }),
                  (0, i.jsx)(f.Text, {
                      variant: 'text-xs/medium',
                      color: 'header-primary',
                      children: t
                  })
              ]
          });
}
function k(e) {
    let { eligibilityStates: t } = e,
        n = (0, h.ZP)(),
        r = (0, f.dQu)(c.Z.unsafe_rawColors.GREEN_330).hex(),
        a = l().groupBy(t, (e) => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : ''));
    return (0, i.jsx)(i.Fragment, {
        children: Object.keys(a).map((e) => {
            var t, o;
            let l;
            let u = a[e],
                c = u.filter((e) => null != e.operator),
                _ = u.find((e) => null != e.application),
                h = m.Z.get(e),
                g = null == _ ? void 0 : _.application,
                E = (null == g ? void 0 : g.bot) != null ? new I.Z(g.bot) : null;
            return (
                S.SJ.includes(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : '')
                    ? (l = (0, i.jsx)(R.Z, {
                          className: w.botTag,
                          color: r,
                          size: 16
                      }))
                    : null != E &&
                      (l = (0, i.jsx)(v.Z, {
                          className: w.botTag,
                          verified: E.isVerifiedBot()
                      })),
                (0, i.jsxs)(
                    'div',
                    {
                        className: w.popoutChecksGroup,
                        children: [
                            (0, i.jsxs)('div', {
                                className: w.popoutCheckGroupName,
                                children: [
                                    null != h
                                        ? (0, i.jsx)('img', {
                                              src: (0, d.wj)(n) ? h.icon.darkSVG : h.icon.lightSVG,
                                              alt: '',
                                              className: w.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    null != E
                                        ? (0, i.jsx)(p.Z, {
                                              user: E,
                                              size: f.EFr.SIZE_20,
                                              className: w.popoutCheckGroupPlatformIcon
                                          })
                                        : null,
                                    (0, i.jsx)(f.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'interactive-active',
                                        children: null !== (o = null == h ? void 0 : h.name) && void 0 !== o ? o : null == g ? void 0 : g.name
                                    }),
                                    l
                                ]
                            }),
                            c.map((e) => {
                                let { connection_type: t, connection_metadata_field: n, operator: r, value: a, description: o } = e;
                                return (
                                    s()(null != n, 'connectionMetadataField is null'),
                                    s()(null != r, 'operator is null'),
                                    s()(null != a, 'value is null'),
                                    (0, i.jsx)(
                                        M,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: r,
                                            value: a,
                                            description: o
                                        },
                                        ''.concat(t, ':').concat(n, ':').concat(r, ':').concat(a)
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
function U(e) {
    let t,
        { onGetRolesClicked: n, onOpenProfile: a, eligibilityStates: s, userId: o, roleId: l, channelId: c, guildId: d } = e;
    r.useEffect(() => {
        T.default.track(x.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: o,
            role_id: l,
            ...(0, g.JS)(c),
            ...(0, g.hH)(d)
        });
    }, [o, l, c, d]);
    let _ = (0, u.e7)(
        [b.ZP],
        () => {
            var e, t;
            return null !== (t = null === (e = b.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t;
        },
        [d, l]
    );
    return (
        (t = 1 === s.length && 1 === s[0].length ? P.intl.string(P.t.jDym4O) : 1 === s.length ? P.intl.format(P.t['0eBj39'], {}) : P.intl.format(P.t.D7uftL, {})),
        (0, i.jsxs)('div', {
            className: w.popout,
            children: [
                (0, i.jsx)('div', {
                    className: w.popoutHeaderContainer,
                    children: (0, i.jsx)(f.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        className: w.popoutHeaderText,
                        children: t
                    })
                }),
                (0, i.jsx)('div', {
                    className: w.popoutChecks,
                    children: (0, i.jsx)(k, { eligibilityStates: s.flat() })
                }),
                (0, i.jsxs)('div', {
                    className: w.buttonContainer,
                    children: [
                        _
                            ? null
                            : (0, i.jsx)(f.zxk, {
                                  className: w.getRolesButton,
                                  onClick: n,
                                  children: P.intl.string(P.t.T1t1WV)
                              }),
                        (0, i.jsx)(f.zxk, {
                            className: w.viewConnectionsButton,
                            color: f.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: P.intl.string(P.t.hgKDnJ)
                        })
                    ]
                })
            ]
        })
    );
}
function G(e) {
    let { userId: t, messageId: n, guild: a, channel: o } = e,
        { analyticsLocations: l } = (0, E.ZP)(),
        c = (0, N.Z)(a, t, o.id, !0),
        d = (0, u.e7)([A.Z], () => A.Z.getGuildRoleConnectionEligibility(null == c ? void 0 : c.id)),
        [p, h] = r.useState(null == d);
    if (null == c) return null;
    async function m() {
        s()(null != c, 'visibleConnectionsRole is null'), p && null == d && (await _.Z.fetchGuildRoleConnectionsEligibility(a.id, c.id), h(!1));
    }
    function g() {
        return Promise.resolve((e) => {
            let { closePopout: r } = e;
            return null == d
                ? (0, i.jsx)(i.Fragment, {})
                : (s()(null != c, 'visibleConnectionsRole is null'),
                  (0, i.jsx)(U, {
                      eligibilityStates: d,
                      userId: t,
                      roleId: c.id,
                      channelId: o.id,
                      guildId: a.id,
                      onGetRolesClicked: () => {
                          (0, O.Am)(a.id);
                      },
                      onOpenProfile: () => {
                          (0, y.openUserProfileModal)({
                              userId: t,
                              messageId: n,
                              guildId: a.id,
                              channelId: o.id,
                              roleId: c.id,
                              subsection: L.Tb.CONNECTIONS,
                              sourceAnalyticsLocations: l,
                              analyticsLocation: { section: x.jXE.CHANNEL }
                          }),
                              r();
                      }
                  }));
        });
    }
    return (0, i.jsx)(f.KeG, {
        onRequestOpen: m,
        renderPopout: g,
        align: 'top',
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, i.jsx)(f.ua7, {
                text: P.intl.string(P.t.Wpsnam),
                children: (t) =>
                    (0, i.jsxs)('div', {
                        className: w.badge,
                        ...t,
                        ...e,
                        children: [
                            (0, i.jsx)(C.Z, {
                                className: w.badgeVerifiedIcon,
                                size: 16,
                                color: c.colorString
                            }),
                            (0, i.jsx)(f.Text, {
                                variant: 'text-xs/bold',
                                color: 'header-primary',
                                className: w.roleName,
                                children: c.name
                            })
                        ]
                    })
            })
    });
}
