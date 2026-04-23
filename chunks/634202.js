"use strict";
n.d(t, { A: () => $ });
var l = n(627968),
    a = n(64700),
    s = n(284009),
    i = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    m = n(462887),
    g = n(862482),
    h = n(933832),
    p = n(834730),
    A = n(602853),
    _ = n(778712),
    f = n(265872),
    v = n(686956),
    x = n(730134),
    C = n(736653),
    I = n(573648),
    N = n(58149),
    E = n(688810),
    b = n(709066),
    T = n(657331),
    S = n(427157),
    y = n(696451),
    j = n(954571),
    R = n(370480),
    M = n(633452),
    w = n(600260),
    O = n(63104),
    D = n(355971),
    L = n(293260),
    k = n(783419),
    G = n(652215),
    U = n(518477),
    P = n(985018),
    V = n(969565);
function F(e) {
    let t,
        { connectionType: n, connectionMetadataField: a, operator: s, value: i, description: r } = e;
    if (null != r)
        switch (s) {
            case k.so.LESS_THAN:
                t = P.intl.format(P.t["2p7dA3"], { description: r, count: Math.max(0, Number(i) - 1) });
                break;
            case k.so.GREATER_THAN:
                t = P.intl.format(P.t["2p7dA3"], { description: r, count: Math.max(0, Number(i) + 1) });
                break;
            default:
                t = r;
        }
    else t = (0, R.RP)({ connectionType: n, connectionMetadataField: a, operator: s, value: i });
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: V.wL,
              children: [
                  (0, l.jsx)(h.A, { size: "md", color: "currentColor", className: V.D$ }),
                  (0, l.jsx)(p.E, { variant: "text-xs/medium", color: "text-strong", children: t }),
              ],
          });
}
function H(e) {
    let { eligibilityStates: t } = e,
        n = (0, C.Ay)(),
        a = (0, A.r)(u.A.unsafe_rawColors.GREEN_330).hex(),
        s = o().groupBy(t, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, l.jsx)(l.Fragment, {
        children: Object.keys(s).map((e) => {
            let t,
                r = s[e],
                o = r.filter((e) => null != e.operator),
                c = r.find((e) => null != e.application),
                u = I.A.get(e),
                d = c?.application,
                g = d?.bot != null ? new S.A(d.bot) : null;
            return (
                R.iC.includes(d?.id ?? "")
                    ? (t = (0, l.jsx)(D.A, { className: V.AO, color: a, size: 16 }))
                    : null != g && (t = (0, l.jsx)(b.A, { className: V.AO, verified: g.isVerifiedBot() })),
                (0, l.jsxs)(
                    "div",
                    {
                        className: V.sV,
                        children: [
                            (0, l.jsxs)("div", {
                                className: V.ei,
                                children: [
                                    null != u
                                        ? (0, l.jsx)("img", {
                                              src: (0, m.M)(n) ? u.icon.darkSVG : u.icon.lightSVG,
                                              alt: "",
                                              className: V.j$,
                                          })
                                        : null,
                                    null != g
                                        ? (0, l.jsx)(x.A, { user: g, size: _._3.SIZE_20, className: V.j$ })
                                        : null,
                                    (0, l.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        color: "interactive-text-active",
                                        children: u?.name ?? d?.name,
                                    }),
                                    t,
                                ],
                            }),
                            o.map((e) => {
                                let {
                                    connection_type: t,
                                    connection_metadata_field: n,
                                    operator: a,
                                    value: s,
                                    description: r,
                                } = e;
                                return (
                                    i()(null != n, "connectionMetadataField is null"),
                                    i()(null != a, "operator is null"),
                                    i()(null != s, "value is null"),
                                    (0, l.jsx)(
                                        F,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: a,
                                            value: s,
                                            description: r,
                                        },
                                        `${t}:${n}:${a}:${s}`,
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
function B(e) {
    let t,
        {
            onGetRolesClicked: n,
            onOpenProfile: s,
            eligibilityStates: i,
            userId: r,
            roleId: o,
            channelId: u,
            guildId: d,
        } = e;
    a.useEffect(() => {
        j.default.track(G.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: r,
            role_id: o,
            ...(0, N.Ou)(u),
            ...(0, N.H$)(d),
        });
    }, [r, o, u, d]);
    let m = (0, c.bG)([y.Ay], () => y.Ay.getSelfMember(d)?.roles.includes(o) ?? !1, [d, o]);
    return (
        (t =
            1 === i.length && 1 === i[0].length
                ? P.intl.string(P.t.jDym4E)
                : 1 === i.length
                  ? P.intl.format(P.t["0eBj3x"], {})
                  : P.intl.format(P.t.D7uftB, {})),
        (0, l.jsxs)("div", {
            className: V.SW,
            children: [
                (0, l.jsx)("div", {
                    className: V.oT,
                    children: (0, l.jsx)(p.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: V.Io,
                        children: t,
                    }),
                }),
                (0, l.jsx)("div", { className: V.jf, children: (0, l.jsx)(H, { eligibilityStates: i.flat() }) }),
                (0, l.jsxs)("div", {
                    className: V.UD,
                    children: [
                        m
                            ? null
                            : (0, l.jsx)(g.$n, { className: V.wz, onClick: n, children: P.intl.string(P.t.T1t1WV) }),
                        (0, l.jsx)(g.$n, {
                            className: V.lQ,
                            color: g.$n.Colors.PRIMARY,
                            onClick: s,
                            children: P.intl.string(P.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function $(e) {
    let { userId: t, messageId: n, guild: s, channel: r } = e,
        { analyticsLocations: o } = (0, E.Ay)(),
        u = (0, w.A)(s, t, r.id, !0),
        m = (0, c.bG)([M.A], () => M.A.getGuildRoleConnectionEligibility(u?.id)),
        [g, h] = a.useState(null == m),
        A = a.useRef(null);
    if (null == u) return null;
    async function _() {
        i()(null != u, "visibleConnectionsRole is null"),
            g && null == m && (await v.A.fetchGuildRoleConnectionsEligibility(s.id, u.id), h(!1));
    }
    return (0, l.jsx)(f.Q, {
        targetElementRef: A,
        onRequestOpen: _,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: a } = e;
                return null == m
                    ? (0, l.jsx)(l.Fragment, {})
                    : (i()(null != u, "visibleConnectionsRole is null"),
                      (0, l.jsx)(B, {
                          eligibilityStates: m,
                          userId: t,
                          roleId: u.id,
                          channelId: r.id,
                          guildId: s.id,
                          onGetRolesClicked: () => {
                              (0, L.c0)(s.id);
                          },
                          onOpenProfile: () => {
                              (0, T.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: s.id,
                                  channelId: r.id,
                                  roleId: u.id,
                                  scrollTarget: U.bk.CONNECTIONS,
                                  sourceAnalyticsLocations: o,
                              }),
                                  a();
                          },
                      }));
            });
        },
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, l.jsx)(d.m, {
                text: P.intl.string(P.t.Wpsnar),
                children: (0, l.jsxs)("div", {
                    ref: A,
                    className: V.qS,
                    ...e,
                    children: [
                        (0, l.jsx)(O.A, { className: V.f7, size: 16, color: u.colorString }),
                        (0, l.jsx)(p.E, {
                            variant: "text-xs/bold",
                            color: "text-strong",
                            className: V.S3,
                            children: u.name,
                        }),
                    ],
                }),
            }),
    });
}
