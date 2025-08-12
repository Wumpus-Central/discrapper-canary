n.d(t, { Z: () => V }), n(953529), n(472816), n(794429), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(780384),
    f = n(755721),
    _ = n(481060),
    p = n(749210),
    h = n(99690),
    m = n(410030),
    g = n(726542),
    E = n(367907),
    b = n(906732),
    y = n(385499),
    O = n(892001),
    v = n(598077),
    I = n(271383),
    T = n(626135),
    S = n(275759),
    A = n(107484),
    N = n(977392),
    C = n(134433),
    R = n(753194),
    P = n(458034),
    w = n(856651),
    D = n(981631),
    L = n(228168),
    x = n(388032),
    M = n(887496);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let t,
        { connectionType: n, connectionMetadataField: i, operator: o, value: a, description: s } = e;
    if (null != s)
        switch (o) {
            case w.iO.LESS_THAN:
                t = x.intl.format(x.t["2p7dAw"], {
                    description: s,
                    count: Math.max(0, Number(a) - 1),
                });
                break;
            case w.iO.GREATER_THAN:
                t = x.intl.format(x.t["2p7dAw"], {
                    description: s,
                    count: Math.max(0, Number(a) + 1),
                });
                break;
            default:
                t = s;
        }
    else
        t = (0, S.n_)({
            connectionType: n,
            connectionMetadataField: i,
            operator: o,
            value: a,
        });
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: M.popoutCheck,
              children: [
                  (0, r.jsx)(_.dz2, {
                      size: "md",
                      color: "currentColor",
                      className: M.popoutCheckIcon,
                  }),
                  (0, r.jsx)(_.Text, {
                      variant: "text-xs/medium",
                      color: "header-primary",
                      children: t,
                  }),
              ],
          });
}
function Z(e) {
    let { eligibilityStates: t } = e,
        n = (0, m.ZP)(),
        i = (0, _.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(),
        o = l().groupBy(t, (e) =>
            "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
        );
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(o).map((e) => {
            var t, s;
            let l,
                c = o[e],
                u = c.filter((e) => null != e.operator),
                f = c.find((e) => null != e.application),
                p = g.Z.get(e),
                m = null == f ? void 0 : f.application,
                E = (null == m ? void 0 : m.bot) != null ? new v.Z(m.bot) : null;
            return (
                S.SJ.includes(null != (t = null == m ? void 0 : m.id) ? t : "")
                    ? (l = (0, r.jsx)(R.Z, {
                          className: M.botTag,
                          color: i,
                          size: 16,
                      }))
                    : null != E &&
                      (l = (0, r.jsx)(y.Z, {
                          className: M.botTag,
                          verified: E.isVerifiedBot(),
                      })),
                (0, r.jsxs)(
                    "div",
                    {
                        className: M.popoutChecksGroup,
                        children: [
                            (0, r.jsxs)("div", {
                                className: M.popoutCheckGroupName,
                                children: [
                                    null != p
                                        ? (0, r.jsx)("img", {
                                              src: (0, d.wj)(n) ? p.icon.darkSVG : p.icon.lightSVG,
                                              alt: "",
                                              className: M.popoutCheckGroupPlatformIcon,
                                          })
                                        : null,
                                    null != E
                                        ? (0, r.jsx)(h.Z, {
                                              user: E,
                                              size: _.EFr.SIZE_20,
                                              className: M.popoutCheckGroupPlatformIcon,
                                          })
                                        : null,
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/medium",
                                        color: "interactive-active",
                                        children:
                                            null != (s = null == p ? void 0 : p.name) ? s : null == m ? void 0 : m.name,
                                    }),
                                    l,
                                ],
                            }),
                            u.map((e) => {
                                let {
                                    connection_type: t,
                                    connection_metadata_field: n,
                                    operator: i,
                                    value: o,
                                    description: s,
                                } = e;
                                return (
                                    a()(null != n, "connectionMetadataField is null"),
                                    a()(null != i, "operator is null"),
                                    a()(null != o, "value is null"),
                                    (0, r.jsx)(
                                        B,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: i,
                                            value: o,
                                            description: s,
                                        },
                                        "".concat(t, ":").concat(n, ":").concat(i, ":").concat(o),
                                    )
                                );
                            }),
                        ],
                    },
                    e,
                )
            );
        }),
    });
}
function F(e) {
    let t,
        {
            onGetRolesClicked: n,
            onOpenProfile: o,
            eligibilityStates: a,
            userId: s,
            roleId: l,
            channelId: u,
            guildId: d,
        } = e;
    i.useEffect(() => {
        T.default.track(
            D.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            j(
                {
                    other_user_id: s,
                    role_id: l,
                },
                (0, E.JS)(u),
                (0, E.hH)(d),
            ),
        );
    }, [s, l, u, d]);
    let p = (0, c.e7)([I.ZP], () => {
        var e, t;
        return null != (t = null == (e = I.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(l)) && t;
    }, [d, l]);
    return (
        (t =
            1 === a.length && 1 === a[0].length
                ? x.intl.string(x.t.jDym4O)
                : 1 === a.length
                  ? x.intl.format(x.t["0eBj39"], {})
                  : x.intl.format(x.t.D7uftL, {})),
        (0, r.jsxs)("div", {
            className: M.popout,
            children: [
                (0, r.jsx)("div", {
                    className: M.popoutHeaderContainer,
                    children: (0, r.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: M.popoutHeaderText,
                        children: t,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: M.popoutChecks,
                    children: (0, r.jsx)(Z, { eligibilityStates: a.flat() }),
                }),
                (0, r.jsxs)("div", {
                    className: M.buttonContainer,
                    children: [
                        p
                            ? null
                            : (0, r.jsx)(f.zx, {
                                  className: M.getRolesButton,
                                  onClick: n,
                                  children: x.intl.string(x.t.T1t1WV),
                              }),
                        (0, r.jsx)(f.zx, {
                            className: M.viewConnectionsButton,
                            color: f.zx.Colors.PRIMARY,
                            onClick: o,
                            children: x.intl.string(x.t.hgKDnJ),
                        }),
                    ],
                }),
            ],
        })
    );
}
function V(e) {
    let { userId: t, messageId: n, guild: o, channel: s } = e,
        { analyticsLocations: l } = (0, b.ZP)(),
        u = (0, N.Z)(o, t, s.id, !0),
        d = (0, c.e7)([A.Z], () => A.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [f, h] = i.useState(null == d),
        m = i.useRef(null);
    if (null == u) return null;
    async function g() {
        a()(null != u, "visibleConnectionsRole is null"),
            f && null == d && (await p.Z.fetchGuildRoleConnectionsEligibility(o.id, u.id), h(!1));
    }
    function E() {
        return Promise.resolve((e) => {
            let { closePopout: i } = e;
            return null == d
                ? (0, r.jsx)(r.Fragment, {})
                : (a()(null != u, "visibleConnectionsRole is null"),
                  (0, r.jsx)(F, {
                      eligibilityStates: d,
                      userId: t,
                      roleId: u.id,
                      channelId: s.id,
                      guildId: o.id,
                      onGetRolesClicked: () => {
                          (0, P.Am)(o.id);
                      },
                      onOpenProfile: () => {
                          (0, O.openUserProfileModal)({
                              userId: t,
                              messageId: n,
                              guildId: o.id,
                              channelId: s.id,
                              roleId: u.id,
                              subsection: L.Tb.CONNECTIONS,
                              sourceAnalyticsLocations: l,
                          }),
                              i();
                      },
                  }));
        });
    }
    return (0, r.jsx)(_.KeG, {
        targetElementRef: m,
        onRequestOpen: g,
        renderPopout: E,
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(_.ua7, {
                text: x.intl.string(x.t.Wpsnam),
                children: (t) =>
                    (0, r.jsxs)(
                        "div",
                        G(
                            j(
                                {
                                    ref: m,
                                    className: M.badge,
                                },
                                t,
                                e,
                            ),
                            {
                                children: [
                                    (0, r.jsx)(C.Z, {
                                        className: M.badgeVerifiedIcon,
                                        size: 16,
                                        color: u.colorString,
                                    }),
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-xs/bold",
                                        color: "header-primary",
                                        className: M.roleName,
                                        children: u.name,
                                    }),
                                ],
                            },
                        ),
                    ),
            }),
    });
}
