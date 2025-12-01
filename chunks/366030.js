n.d(t, { Z: () => H }), n(953529), n(472816), n(794429), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(28664),
    f = n(780384),
    p = n(755721),
    _ = n(481060),
    m = n(749210),
    h = n(99690),
    g = n(410030),
    E = n(726542),
    b = n(367907),
    y = n(906732),
    O = n(385499),
    v = n(892001),
    S = n(598077),
    I = n(271383),
    T = n(626135),
    A = n(275759),
    C = n(107484),
    N = n(977392),
    P = n(134433),
    R = n(753194),
    w = n(458034),
    D = n(856651),
    x = n(981631),
    L = n(228168),
    j = n(388032),
    M = n(852529);
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
function U(e) {
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
function G(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
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
            case D.iO.LESS_THAN:
                t = j.intl.format(j.t["2p7dA3"], {
                    description: s,
                    count: Math.max(0, Number(o) - 1),
                });
                break;
            case D.iO.GREATER_THAN:
                t = j.intl.format(j.t["2p7dA3"], {
                    description: s,
                    count: Math.max(0, Number(o) + 1),
                });
                break;
            default:
                t = s;
        }
    else
        t = (0, A.n_)({
            connectionType: n,
            connectionMetadataField: i,
            operator: a,
            value: o,
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
function F(e) {
    let { eligibilityStates: t } = e,
        n = (0, g.ZP)(),
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
                d = c.find((e) => null != e.application),
                p = E.Z.get(e),
                m = null == d ? void 0 : d.application,
                g = (null == m ? void 0 : m.bot) != null ? new S.Z(m.bot) : null;
            return (
                A.SJ.includes(null != (t = null == m ? void 0 : m.id) ? t : "")
                    ? (l = (0, r.jsx)(R.Z, {
                          className: M.botTag,
                          color: i,
                          size: 16,
                      }))
                    : null != g &&
                      (l = (0, r.jsx)(O.Z, {
                          className: M.botTag,
                          verified: g.isVerifiedBot(),
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
                                              src: (0, f.wj)(n) ? p.icon.darkSVG : p.icon.lightSVG,
                                              alt: "",
                                              className: M.popoutCheckGroupPlatformIcon,
                                          })
                                        : null,
                                    null != g
                                        ? (0, r.jsx)(h.Z, {
                                              user: g,
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
            x.rMx.PASSPORT_ROLE_POPOUT_VIEWED,
            U(
                {
                    other_user_id: s,
                    role_id: l,
                },
                (0, b.JS)(u),
                (0, b.hH)(d),
            ),
        );
    }, [s, l, u, d]);
    let f = (0, c.e7)([I.ZP], () => {
        var e, t;
        return null != (t = null == (e = I.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(l)) && t;
    }, [d, l]);
    return (
        (t =
            1 === o.length && 1 === o[0].length
                ? j.intl.string(j.t.jDym4E)
                : 1 === o.length
                  ? j.intl.format(j.t["0eBj3x"], {})
                  : j.intl.format(j.t.D7uftB, {})),
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
                    children: (0, r.jsx)(F, { eligibilityStates: o.flat() }),
                }),
                (0, r.jsxs)("div", {
                    className: M.buttonContainer,
                    children: [
                        f
                            ? null
                            : (0, r.jsx)(p.zx, {
                                  className: M.getRolesButton,
                                  onClick: n,
                                  children: j.intl.string(j.t.T1t1WV),
                              }),
                        (0, r.jsx)(p.zx, {
                            className: M.viewConnectionsButton,
                            color: p.zx.Colors.PRIMARY,
                            onClick: a,
                            children: j.intl.string(j.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function H(e) {
    let { userId: t, messageId: n, guild: a, channel: s } = e,
        { analyticsLocations: l } = (0, y.ZP)(),
        u = (0, N.Z)(a, t, s.id, !0),
        f = (0, c.e7)([C.Z], () => C.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [p, h] = i.useState(null == f),
        g = i.useRef(null);
    if (null == u) return null;
    async function E() {
        o()(null != u, "visibleConnectionsRole is null"),
            p && null == f && (await m.Z.fetchGuildRoleConnectionsEligibility(a.id, u.id), h(!1));
    }
    function b() {
        return Promise.resolve((e) => {
            let { closePopout: i } = e;
            return null == f
                ? (0, r.jsx)(r.Fragment, {})
                : (o()(null != u, "visibleConnectionsRole is null"),
                  (0, r.jsx)(V, {
                      eligibilityStates: f,
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
                              subsection: L.Tb.CONNECTIONS,
                              sourceAnalyticsLocations: l,
                          }),
                              i();
                      },
                  }));
        });
    }
    return (0, r.jsx)(_.KeG, {
        targetElementRef: g,
        onRequestOpen: E,
        renderPopout: b,
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(d.u, {
                text: j.intl.string(j.t.Wpsnar),
                children: (0, r.jsxs)(
                    "div",
                    Z(
                        U(
                            {
                                ref: g,
                                className: M.badge,
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, r.jsx)(P.Z, {
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
