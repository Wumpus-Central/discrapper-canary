n.d(t, {
    A: () => Y,
}),
    n(228524),
    n(864466),
    n(443073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    f = n(582754),
    p = n(421380),
    _ = n(397927),
    h = n(686956),
    m = n(730134),
    g = n(736653),
    E = n(573648),
    b = n(58149),
    y = n(688810),
    O = n(709066),
    A = n(657331),
    v = n(427157),
    S = n(696451),
    I = n(954571),
    T = n(370480),
    C = n(633452),
    N = n(600260),
    R = n(63104),
    w = n(355971),
    P = n(293260),
    D = n(783419),
    x = n(652215),
    L = n(518477),
    j = n(985018),
    M = n(628972);

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

function V(e, t) {
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

function F(e) {
    let t,
        { connectionType: n, connectionMetadataField: i, operator: a, value: s, description: o } = e;
    if (null != o)
        switch (a) {
            case D.so.LESS_THAN:
                t = j.intl.format(j.t["2p7dA3"], {
                    description: o,
                    count: Math.max(0, Number(s) - 1),
                });
                break;
            case D.so.GREATER_THAN:
                t = j.intl.format(j.t["2p7dA3"], {
                    description: o,
                    count: Math.max(0, Number(s) + 1),
                });
                break;
            default:
                t = o;
        }
    else
        t = (0, T.RP)({
            connectionType: n,
            connectionMetadataField: i,
            operator: a,
            value: s,
        });
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: M.wL,
              children: [
                  (0, r.jsx)(_.A9s, {
                      size: "md",
                      color: "currentColor",
                      className: M.D$,
                  }),
                  (0, r.jsx)(_.Text, {
                      variant: "text-xs/medium",
                      color: "text-strong",
                      children: t,
                  }),
              ],
          });
}

function B(e) {
    let { eligibilityStates: t } = e,
        n = (0, g.Ay)(),
        i = (0, _.rdh)(u.A.unsafe_rawColors.GREEN_330).hex(),
        a = l().groupBy(t, (e) =>
            "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""),
        );
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map((e) => {
            var t, o;
            let l,
                c = a[e],
                u = c.filter((e) => null != e.operator),
                d = c.find((e) => null != e.application),
                p = E.A.get(e),
                h = null == d ? void 0 : d.application,
                g = (null == h ? void 0 : h.bot) != null ? new v.A(h.bot) : null;
            return (
                T.iC.includes(null != (t = null == h ? void 0 : h.id) ? t : "")
                    ? (l = (0, r.jsx)(w.A, {
                          className: M.AO,
                          color: i,
                          size: 16,
                      }))
                    : null != g &&
                      (l = (0, r.jsx)(O.A, {
                          className: M.AO,
                          verified: g.isVerifiedBot(),
                      })),
                (0, r.jsxs)(
                    "div",
                    {
                        className: M.sV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: M.ei,
                                children: [
                                    null != p
                                        ? (0, r.jsx)("img", {
                                              src: (0, f.Mw)(n) ? p.icon.darkSVG : p.icon.lightSVG,
                                              alt: "",
                                              className: M.j$,
                                          })
                                        : null,
                                    null != g
                                        ? (0, r.jsx)(m.A, {
                                              user: g,
                                              size: _._3J.SIZE_20,
                                              className: M.j$,
                                          })
                                        : null,
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/medium",
                                        color: "interactive-text-active",
                                        children:
                                            null != (o = null == p ? void 0 : p.name) ? o : null == h ? void 0 : h.name,
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
                                    description: o,
                                } = e;
                                return (
                                    s()(null != n, "connectionMetadataField is null"),
                                    s()(null != i, "operator is null"),
                                    s()(null != a, "value is null"),
                                    (0, r.jsx)(
                                        F,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: i,
                                            value: a,
                                            description: o,
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

function H(e) {
    let t,
        {
            onGetRolesClicked: n,
            onOpenProfile: a,
            eligibilityStates: s,
            userId: o,
            roleId: l,
            channelId: u,
            guildId: d,
        } = e;
    i.useEffect(() => {
        I.default.track(
            x.HAw.PASSPORT_ROLE_POPOUT_VIEWED,
            U(
                {
                    other_user_id: o,
                    role_id: l,
                },
                (0, b.Ou)(u),
                (0, b.H$)(d),
            ),
        );
    }, [o, l, u, d]);
    let f = (0, c.bG)([S.Ay], () => {
        var e, t;
        return null != (e = null == (t = S.Ay.getSelfMember(d)) ? void 0 : t.roles.includes(l)) && e;
    }, [d, l]);
    return (
        (t =
            1 === s.length && 1 === s[0].length
                ? j.intl.string(j.t.jDym4E)
                : 1 === s.length
                  ? j.intl.format(j.t["0eBj3x"], {})
                  : j.intl.format(j.t.D7uftB, {})),
        (0, r.jsxs)("div", {
            className: M.SW,
            children: [
                (0, r.jsx)("div", {
                    className: M.oT,
                    children: (0, r.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: M.Io,
                        children: t,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: M.jf,
                    children: (0, r.jsx)(B, {
                        eligibilityStates: s.flat(),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: M.UD,
                    children: [
                        f
                            ? null
                            : (0, r.jsx)(p.$n, {
                                  className: M.wz,
                                  onClick: n,
                                  children: j.intl.string(j.t.T1t1WV),
                              }),
                        (0, r.jsx)(p.$n, {
                            className: M.lQ,
                            color: p.$n.Colors.PRIMARY,
                            onClick: a,
                            children: j.intl.string(j.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}

function Y(e) {
    let { userId: t, messageId: n, guild: a, channel: o } = e,
        { analyticsLocations: l } = (0, y.Ay)(),
        u = (0, N.A)(a, t, o.id, !0),
        f = (0, c.bG)([C.A], () => C.A.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)),
        [p, m] = i.useState(null == f),
        g = i.useRef(null);
    if (null == u) return null;
    async function E() {
        s()(null != u, "visibleConnectionsRole is null"),
            p && null == f && (await h.A.fetchGuildRoleConnectionsEligibility(a.id, u.id), m(!1));
    }

    function b() {
        return Promise.resolve((e) => {
            let { closePopout: i } = e;
            return null == f
                ? (0, r.jsx)(r.Fragment, {})
                : (s()(null != u, "visibleConnectionsRole is null"),
                  (0, r.jsx)(H, {
                      eligibilityStates: f,
                      userId: t,
                      roleId: u.id,
                      channelId: o.id,
                      guildId: a.id,
                      onGetRolesClicked: () => {
                          (0, P.c0)(a.id);
                      },
                      onOpenProfile: () => {
                          (0, A.openUserProfileModal)({
                              userId: t,
                              messageId: n,
                              guildId: a.id,
                              channelId: o.id,
                              roleId: u.id,
                              scrollTarget: L.bk.CONNECTIONS,
                              sourceAnalyticsLocations: l,
                          }),
                              i();
                      },
                  }));
        });
    }
    return (0, r.jsx)(_.QCx, {
        targetElementRef: g,
        onRequestOpen: E,
        renderPopout: b,
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(d.m, {
                text: j.intl.string(j.t.Wpsnar),
                children: (0, r.jsxs)(
                    "div",
                    V(
                        U(
                            {
                                ref: g,
                                className: M.qS,
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, r.jsx)(R.A, {
                                    className: M.f7,
                                    size: 16,
                                    color: u.colorString,
                                }),
                                (0, r.jsx)(_.Text, {
                                    variant: "text-xs/bold",
                                    color: "text-strong",
                                    className: M.S3,
                                    children: u.name,
                                }),
                            ],
                        },
                    ),
                ),
            }),
    });
}
