"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(827734),
    d = n(990078),
    _ = n(582754),
    f = n(421380),
    p = n(397927),
    h = n(686956),
    m = n(730134),
    g = n(736653),
    E = n(573648),
    A = n(58149),
    I = n(688810),
    T = n(709066),
    y = n(657331),
    S = n(427157),
    v = n(696451),
    C = n(954571),
    b = n(370480),
    N = n(633452),
    R = n(600260),
    O = n(63104),
    D = n(355971),
    L = n(293260),
    w = n(783419),
    x = n(652215),
    P = n(518477),
    M = n(985018),
    k = n(628972);
function U(e) {
    let t,
        { connectionType: n, connectionMetadataField: i, operator: a, value: s, description: o } = e;
    if (null != o)
        switch (a) {
            case w.so.LESS_THAN:
                t = M.intl.format(M.t["2p7dA3"], { description: o, count: Math.max(0, Number(s) - 1) });
                break;
            case w.so.GREATER_THAN:
                t = M.intl.format(M.t["2p7dA3"], { description: o, count: Math.max(0, Number(s) + 1) });
                break;
            default:
                t = o;
        }
    else t = (0, b.RP)({ connectionType: n, connectionMetadataField: i, operator: a, value: s });
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: k.wL,
              children: [
                  (0, r.jsx)(p.A9s, { size: "md", color: "currentColor", className: k.D$ }),
                  (0, r.jsx)(p.Text, { variant: "text-xs/medium", color: "text-strong", children: t }),
              ],
          });
}
function G(e) {
    let { eligibilityStates: t } = e,
        n = (0, g.Ay)(),
        i = (0, p.rdh)(c.A.unsafe_rawColors.GREEN_330).hex(),
        a = l().groupBy(t, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map((e) => {
            let t,
                o = a[e],
                l = o.filter((e) => null != e.operator),
                u = o.find((e) => null != e.application),
                c = E.A.get(e),
                d = u?.application,
                f = d?.bot != null ? new S.A(d.bot) : null;
            return (
                b.iC.includes(d?.id ?? "")
                    ? (t = (0, r.jsx)(D.A, { className: k.AO, color: i, size: 16 }))
                    : null != f && (t = (0, r.jsx)(T.A, { className: k.AO, verified: f.isVerifiedBot() })),
                (0, r.jsxs)(
                    "div",
                    {
                        className: k.sV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: k.ei,
                                children: [
                                    null != c
                                        ? (0, r.jsx)("img", {
                                              src: (0, _.Mw)(n) ? c.icon.darkSVG : c.icon.lightSVG,
                                              alt: "",
                                              className: k.j$,
                                          })
                                        : null,
                                    null != f
                                        ? (0, r.jsx)(m.A, { user: f, size: p._3J.SIZE_20, className: k.j$ })
                                        : null,
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        color: "interactive-text-active",
                                        children: c?.name ?? d?.name,
                                    }),
                                    t,
                                ],
                            }),
                            l.map((e) => {
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
                                        U,
                                        {
                                            connectionType: t,
                                            connectionMetadataField: n,
                                            operator: i,
                                            value: a,
                                            description: o,
                                        },
                                        `${t}:${n}:${i}:${a}`,
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
            eligibilityStates: s,
            userId: o,
            roleId: l,
            channelId: c,
            guildId: d,
        } = e;
    i.useEffect(() => {
        C.default.track(x.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: o,
            role_id: l,
            ...(0, A.Ou)(c),
            ...(0, A.H$)(d),
        });
    }, [o, l, c, d]);
    let _ = (0, u.bG)([v.Ay], () => v.Ay.getSelfMember(d)?.roles.includes(l) ?? !1, [d, l]);
    return (
        (t =
            1 === s.length && 1 === s[0].length
                ? M.intl.string(M.t.jDym4E)
                : 1 === s.length
                  ? M.intl.format(M.t["0eBj3x"], {})
                  : M.intl.format(M.t.D7uftB, {})),
        (0, r.jsxs)("div", {
            className: k.SW,
            children: [
                (0, r.jsx)("div", {
                    className: k.oT,
                    children: (0, r.jsx)(p.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: k.Io,
                        children: t,
                    }),
                }),
                (0, r.jsx)("div", { className: k.jf, children: (0, r.jsx)(G, { eligibilityStates: s.flat() }) }),
                (0, r.jsxs)("div", {
                    className: k.UD,
                    children: [
                        _
                            ? null
                            : (0, r.jsx)(f.$n, { className: k.wz, onClick: n, children: M.intl.string(M.t.T1t1WV) }),
                        (0, r.jsx)(f.$n, {
                            className: k.lQ,
                            color: f.$n.Colors.PRIMARY,
                            onClick: a,
                            children: M.intl.string(M.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function F(e) {
    let { userId: t, messageId: n, guild: a, channel: o } = e,
        { analyticsLocations: l } = (0, I.Ay)(),
        c = (0, R.A)(a, t, o.id, !0),
        _ = (0, u.bG)([N.A], () => N.A.getGuildRoleConnectionEligibility(c?.id)),
        [f, m] = i.useState(null == _),
        g = i.useRef(null);
    if (null == c) return null;
    async function E() {
        s()(null != c, "visibleConnectionsRole is null"),
            f && null == _ && (await h.A.fetchGuildRoleConnectionsEligibility(a.id, c.id), m(!1));
    }
    function A() {
        return Promise.resolve((e) => {
            let { closePopout: i } = e;
            return null == _
                ? (0, r.jsx)(r.Fragment, {})
                : (s()(null != c, "visibleConnectionsRole is null"),
                  (0, r.jsx)(V, {
                      eligibilityStates: _,
                      userId: t,
                      roleId: c.id,
                      channelId: o.id,
                      guildId: a.id,
                      onGetRolesClicked: () => {
                          (0, L.c0)(a.id);
                      },
                      onOpenProfile: () => {
                          (0, y.openUserProfileModal)({
                              userId: t,
                              messageId: n,
                              guildId: a.id,
                              channelId: o.id,
                              roleId: c.id,
                              scrollTarget: P.bk.CONNECTIONS,
                              sourceAnalyticsLocations: l,
                          }),
                              i();
                      },
                  }));
        });
    }
    return (0, r.jsx)(p.QCx, {
        targetElementRef: g,
        onRequestOpen: E,
        renderPopout: A,
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, r.jsx)(d.m, {
                text: M.intl.string(M.t.Wpsnar),
                children: (0, r.jsxs)("div", {
                    ref: g,
                    className: k.qS,
                    ...e,
                    children: [
                        (0, r.jsx)(O.A, { className: k.f7, size: 16, color: c.colorString }),
                        (0, r.jsx)(p.Text, {
                            variant: "text-xs/bold",
                            color: "text-strong",
                            className: k.S3,
                            children: c.name,
                        }),
                    ],
                }),
            }),
    });
}
