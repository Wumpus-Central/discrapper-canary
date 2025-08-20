n.d(t, { Z: () => F }), n(953529), n(472816), n(794429), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
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
    C = n(977392),
    N = n(134433),
    R = n(753194),
    P = n(458034),
    w = n(856651),
    D = n(981631),
    x = n(228168),
    L = n(388032),
    j = n(852529);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
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
        { connectionType: n, connectionMetadataField: i, operator: a, value: o, description: s } = e;
    if (null != s)
        switch (a) {
            case w.iO.LESS_THAN:
                t = L.intl.format(L.t["2p7dAw"], {
                    description: s,
                    count: Math.max(0, Number(o) - 1),
                });
                break;
            case w.iO.GREATER_THAN:
                t = L.intl.format(L.t["2p7dAw"], {
                    description: s,
                    count: Math.max(0, Number(o) + 1),
                });
                break;
            default:
                t = s;
        }
    else
        t = (0, S.n_)({
            connectionType: n,
            connectionMetadataField: i,
            operator: a,
            value: o,
        });
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: j.popoutCheck,
              children: [
                  (0, r.jsx)(_.dz2, {
                      size: "md",
                      color: "currentColor",
                      className: j.popoutCheckIcon,
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
        a = l().groupBy(t, (e) =>
            "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
        );
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map((e) => {
            var t, s;
            let l,
                c = a[e],
                u = c.filter((e) => null != e.operator),
                f = c.find((e) => null != e.application),
                p = g.Z.get(e),
                m = null == f ? void 0 : f.application,
                E = (null == m ? void 0 : m.bot) != null ? new v.Z(m.bot) : null;
            return (
                S.SJ.includes(null != (t = null == m ? void 0 : m.id) ? t : "")
                    ? (l = (0, r.jsx)(R.Z, {
                          className: j.botTag,
                          color: i,
                          size: 16,
                      }))
                    : null != E &&
                      (l = (0, r.jsx)(y.Z, {
                          className: j.botTag,
                          verified: E.isVerifiedBot(),
                      })),
                (0, r.jsxs)(
                    "div",
                    {
                        className: j.popoutChecksGroup,
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.popoutCheckGroupName,
                                children: [
                                    null != p
                                        ? (0, r.jsx)("img", {
                                              src: (0, d.wj)(n) ? p.icon.darkSVG : p.icon.lightSVG,
                                              alt: "",
                                              className: j.popoutCheckGroupPlatformIcon,
                                          })
                                        : null,
                                    null != E
                                        ? (0, r.jsx)(h.Z, {
                                              user: E,
                                              size: _.EFr.SIZE_20,
                                              className: j.popoutCheckGroupPlatformIcon,
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
                                    value: a,
                                    description: s,
                                } = e;
                                return (
                                    o()(null != n, "connectionMetadataField is null"),
                                    o()(null != i, "operator is null"),
                                    o()(null != a, "value is null"),
                                    (0, r.jsx)(
                                        B,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: i,
                                            value: a,
                                            description: s,
                                        },
                                        "".concat(t, ":").concat(n, ":").concat(i, ":").concat(a),
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
function V(e) {
    let t,
        {
            onGetRolesClicked: n,
            onOpenProfile: a,
            eligibilityStates: o,
            userId: s,
            roleId: l,
            channelId: u,
            guildId: d,
        } = e;
    i.useEffect(() => {
        T.default.track(
            D.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            k(
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
            1 === o.length && 1 === o[0].length
                ? L.intl.string(L.t.jDym4O)
                : 1 === o.length
                  ? L.intl.format(L.t["0eBj39"], {})
                  : L.intl.format(L.t.D7uftL, {})),
        (0, r.jsxs)("div", {
            className: j.popout,
            children: [
                (0, r.jsx)("div", {
                    className: j.popoutHeaderContainer,
                    children: (0, r.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: j.popoutHeaderText,
                        children: t,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: j.popoutChecks,
                    children: (0, r.jsx)(Z, { eligibilityStates: o.flat() }),
                }),
                (0, r.jsxs)("div", {
                    className: j.buttonContainer,
                    children: [
                        p
                            ? null
                            : (0, r.jsx)(f.zx, {
                                  className: j.getRolesButton,
                                  onClick: n,
                                  children: L.intl.string(L.t.T1t1WV),
                              }),
                        (0, r.jsx)(f.zx, {
                            className: j.viewConnectionsButton,
                            color: f.zx.Colors.PRIMARY,
                            onClick: a,
                            children: L.intl.string(L.t.hgKDnJ),
                        }),
                    ],
                }),
            ],
        })
    );
}
function F(e) {
    let { userId: t, messageId: n, guild: a, channel: s } = e,
        { analyticsLocations: l } = (0, b.ZP)(),
        u = (0, C.Z)(a, t, s.id, !0),
        d = (0, c.e7)([A.Z], () => A.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [f, h] = i.useState(null == d),
        m = i.useRef(null);
    if (null == u) return null;
    async function g() {
        o()(null != u, "visibleConnectionsRole is null"),
            f && null == d && (await p.Z.fetchGuildRoleConnectionsEligibility(a.id, u.id), h(!1));
    }
    function E() {
        return Promise.resolve((e) => {
            let { closePopout: i } = e;
            return null == d
                ? (0, r.jsx)(r.Fragment, {})
                : (o()(null != u, "visibleConnectionsRole is null"),
                  (0, r.jsx)(V, {
                      eligibilityStates: d,
                      userId: t,
                      roleId: u.id,
                      channelId: s.id,
                      guildId: a.id,
                      onGetRolesClicked: () => {
                          (0, P.Am)(a.id);
                      },
                      onOpenProfile: () => {
                          (0, O.openUserProfileModal)({
                              userId: t,
                              messageId: n,
                              guildId: a.id,
                              channelId: s.id,
                              roleId: u.id,
                              subsection: x.Tb.CONNECTIONS,
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
                text: L.intl.string(L.t.Wpsnam),
                children: (t) =>
                    (0, r.jsxs)(
                        "div",
                        G(
                            k(
                                {
                                    ref: m,
                                    className: j.badge,
                                },
                                t,
                                e,
                            ),
                            {
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        className: j.badgeVerifiedIcon,
                                        size: 16,
                                        color: u.colorString,
                                    }),
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-xs/bold",
                                        color: "header-primary",
                                        className: j.roleName,
                                        children: u.name,
                                    }),
                                ],
                            },
                        ),
                    ),
            }),
    });
}
