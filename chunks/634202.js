"use strict";
n.d(t, { A: () => $ });
var l = n(627968),
    s = n(64700),
    i = n(284009),
    r = n.n(i),
    a = n(735438),
    o = n.n(a),
    u = n(311907),
    c = n(827734),
    d = n(990078),
    m = n(582754),
    h = n(421380),
    g = n(397927),
    p = n(686956),
    A = n(730134),
    f = n(736653),
    x = n(573648),
    v = n(58149),
    N = n(688810),
    b = n(709066),
    j = n(657331),
    C = n(427157),
    E = n(696451),
    R = n(954571),
    I = n(370480),
    T = n(633452),
    y = n(600260),
    _ = n(63104),
    S = n(355971),
    M = n(293260),
    k = n(783419),
    O = n(652215),
    w = n(518477),
    P = n(985018),
    G = n(628972);
function D(e) {
    let t,
        { connectionType: n, connectionMetadataField: s, operator: i, value: r, description: a } = e;
    if (null != a)
        switch (i) {
            case k.so.LESS_THAN:
                t = P.intl.format(P.t["2p7dA3"], { description: a, count: Math.max(0, Number(r) - 1) });
                break;
            case k.so.GREATER_THAN:
                t = P.intl.format(P.t["2p7dA3"], { description: a, count: Math.max(0, Number(r) + 1) });
                break;
            default:
                t = a;
        }
    else t = (0, I.RP)({ connectionType: n, connectionMetadataField: s, operator: i, value: r });
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: G.wL,
              children: [
                  (0, l.jsx)(g.A9s, { size: "md", color: "currentColor", className: G.D$ }),
                  (0, l.jsx)(g.Text, { variant: "text-xs/medium", color: "text-strong", children: t }),
              ],
          });
}
function L(e) {
    let { eligibilityStates: t } = e,
        n = (0, f.Ay)(),
        s = (0, g.rdh)(c.A.unsafe_rawColors.GREEN_330).hex(),
        i = o().groupBy(t, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, l.jsx)(l.Fragment, {
        children: Object.keys(i).map((e) => {
            let t,
                a = i[e],
                o = a.filter((e) => null != e.operator),
                u = a.find((e) => null != e.application),
                c = x.A.get(e),
                d = u?.application,
                h = d?.bot != null ? new C.A(d.bot) : null;
            return (
                I.iC.includes(d?.id ?? "")
                    ? (t = (0, l.jsx)(S.A, { className: G.AO, color: s, size: 16 }))
                    : null != h && (t = (0, l.jsx)(b.A, { className: G.AO, verified: h.isVerifiedBot() })),
                (0, l.jsxs)(
                    "div",
                    {
                        className: G.sV,
                        children: [
                            (0, l.jsxs)("div", {
                                className: G.ei,
                                children: [
                                    null != c
                                        ? (0, l.jsx)("img", {
                                              src: (0, m.Mw)(n) ? c.icon.darkSVG : c.icon.lightSVG,
                                              alt: "",
                                              className: G.j$,
                                          })
                                        : null,
                                    null != h
                                        ? (0, l.jsx)(A.A, { user: h, size: g._3J.SIZE_20, className: G.j$ })
                                        : null,
                                    (0, l.jsx)(g.Text, {
                                        variant: "text-sm/medium",
                                        color: "interactive-text-active",
                                        children: c?.name ?? d?.name,
                                    }),
                                    t,
                                ],
                            }),
                            o.map((e) => {
                                let {
                                    connection_type: t,
                                    connection_metadata_field: n,
                                    operator: s,
                                    value: i,
                                    description: a,
                                } = e;
                                return (
                                    r()(null != n, "connectionMetadataField is null"),
                                    r()(null != s, "operator is null"),
                                    r()(null != i, "value is null"),
                                    (0, l.jsx)(
                                        D,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: s,
                                            value: i,
                                            description: a,
                                        },
                                        `${t}:${n}:${s}:${i}`,
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
function U(e) {
    let t,
        {
            onGetRolesClicked: n,
            onOpenProfile: i,
            eligibilityStates: r,
            userId: a,
            roleId: o,
            channelId: c,
            guildId: d,
        } = e;
    s.useEffect(() => {
        R.default.track(O.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: a,
            role_id: o,
            ...(0, v.Ou)(c),
            ...(0, v.H$)(d),
        });
    }, [a, o, c, d]);
    let m = (0, u.bG)([E.Ay], () => E.Ay.getSelfMember(d)?.roles.includes(o) ?? !1, [d, o]);
    return (
        (t =
            1 === r.length && 1 === r[0].length
                ? P.intl.string(P.t.jDym4E)
                : 1 === r.length
                  ? P.intl.format(P.t["0eBj3x"], {})
                  : P.intl.format(P.t.D7uftB, {})),
        (0, l.jsxs)("div", {
            className: G.SW,
            children: [
                (0, l.jsx)("div", {
                    className: G.oT,
                    children: (0, l.jsx)(g.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: G.Io,
                        children: t,
                    }),
                }),
                (0, l.jsx)("div", { className: G.jf, children: (0, l.jsx)(L, { eligibilityStates: r.flat() }) }),
                (0, l.jsxs)("div", {
                    className: G.UD,
                    children: [
                        m
                            ? null
                            : (0, l.jsx)(h.$n, { className: G.wz, onClick: n, children: P.intl.string(P.t.T1t1WV) }),
                        (0, l.jsx)(h.$n, {
                            className: G.lQ,
                            color: h.$n.Colors.PRIMARY,
                            onClick: i,
                            children: P.intl.string(P.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function $(e) {
    let { userId: t, messageId: n, guild: i, channel: a } = e,
        { analyticsLocations: o } = (0, N.Ay)(),
        c = (0, y.A)(i, t, a.id, !0),
        m = (0, u.bG)([T.A], () => T.A.getGuildRoleConnectionEligibility(c?.id)),
        [h, A] = s.useState(null == m),
        f = s.useRef(null);
    if (null == c) return null;
    async function x() {
        r()(null != c, "visibleConnectionsRole is null"),
            h && null == m && (await p.A.fetchGuildRoleConnectionsEligibility(i.id, c.id), A(!1));
    }
    return (0, l.jsx)(g.QCx, {
        targetElementRef: f,
        onRequestOpen: x,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: s } = e;
                return null == m
                    ? (0, l.jsx)(l.Fragment, {})
                    : (r()(null != c, "visibleConnectionsRole is null"),
                      (0, l.jsx)(U, {
                          eligibilityStates: m,
                          userId: t,
                          roleId: c.id,
                          channelId: a.id,
                          guildId: i.id,
                          onGetRolesClicked: () => {
                              (0, M.c0)(i.id);
                          },
                          onOpenProfile: () => {
                              (0, j.openUserProfileModal)({
                                  userId: t,
                                  messageId: n,
                                  guildId: i.id,
                                  channelId: a.id,
                                  roleId: c.id,
                                  scrollTarget: w.bk.CONNECTIONS,
                                  sourceAnalyticsLocations: o,
                              }),
                                  s();
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
                    ref: f,
                    className: G.qS,
                    ...e,
                    children: [
                        (0, l.jsx)(_.A, { className: G.f7, size: 16, color: c.colorString }),
                        (0, l.jsx)(g.Text, {
                            variant: "text-xs/bold",
                            color: "text-strong",
                            className: G.S3,
                            children: c.name,
                        }),
                    ],
                }),
            }),
    });
}
