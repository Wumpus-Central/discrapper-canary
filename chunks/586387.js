n.d(t, {
    Ay: () => U,
});
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(417597),
    s = n(990078),
    o = n(397927),
    c = n(308528),
    u = n(688810),
    E = n(316031),
    d = n(991982),
    _ = n(838111),
    g = n(351001),
    A = n(504049),
    T = n(534400),
    f = n(961350),
    h = n(696451),
    I = n(71393),
    O = n(576705),
    N = n(290863),
    m = n(461213),
    S = n(287809),
    p = n(957565),
    b = n(562153),
    G = n(427262),
    R = n(743981),
    D = n(985018),
    L = n(186891);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function M(e) {
    let { user: t, guildId: n, onClose: r } = e,
        a = t.id,
        s = (0, i.bG)([m.A, N.A, f.default], () => (a === f.default.getId() ? m.A.getStatus() : N.A.getStatus(a, n)), [
            a,
            n,
        ]);
    return (0, l.jsxs)("div", {
        className: L.mY,
        children: [
            (0, l.jsxs)("div", {
                className: L.FD,
                children: [
                    (0, l.jsx)("div", {
                        className: L.Wn,
                        children: (0, l.jsx)(o.euF, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: o._3J.SIZE_48,
                            status: s,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: L.oS,
                        children: [
                            (0, l.jsxs)("div", {
                                className: L.K$,
                                children: [
                                    (0, l.jsx)(o.Text, {
                                        variant: "text-lg/medium",
                                        children: (0, l.jsx)(o.gyj, {
                                            name: b.Ay.getName(n, null, t),
                                            colorString: o.LU0.colors.TEXT_STRONG.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, l.jsx)(T.Ay, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: R.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: L.Dz,
                                        containerClassName: L.UL,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: G.Ay.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, l.jsx)(o.DUT, {
                    className: L.d4,
                    onClick: r,
                    children: (0, l.jsx)(o.PGe, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            }),
        ],
    });
}

function v(e) {
    let { tag: t = "div", text: n, disabled: r, children: i, onClick: c } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.getOwnPropertyNames(e);
                    for (l = 0; l < a.length; l++)
                        (n = a[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
            return a;
        })(e, ["tag", "text", "disabled", "children", "onClick"]);
    return (0, l.jsx)(s.m, {
        text: n,
        children: (0, l.jsx)(
            o.DUT,
            C(x({}, u), {
                tag: t,
                "aria-label": n,
                className: a()(L.YB, {
                    [L.aA]: r,
                }),
                onClick: r ? void 0 : c,
                children: (0, l.jsx)("div", {
                    className: L.MU,
                    children: i,
                }),
            }),
        ),
    });
}

function j(e) {
    let { user: t, member: r, guildId: a, moderatorReportId: s } = e,
        T = (0, i.bG)([I.A], () => I.A.getGuild(a)),
        {
            canKickUser: h,
            canBanUser: N,
            canModerateMembers: m,
        } = (0, i.cf)(
            [O.A, S.default, I.A],
            () => ({
                canKickUser: (0, g.L7)(t, T),
                canBanUser: (0, g.EZ)(t, T),
                canModerateMembers: null != T && (0, _.b)(T.id, t.id, [S.default, I.A, O.A]),
            }),
            [t, T],
        ),
        b = (0, E.Z)(r),
        { analyticsLocations: G, newestAnalyticsLocation: R } = (0, u.Ay)(),
        M = (0, A.$9)(a, {
            targetUserId: t.id,
            location: R,
            locations: G,
        }),
        j = (0, i.bG)([f.default], () => f.default.getId() === (null == t ? void 0 : t.id));
    return (0, l.jsxs)("div", {
        className: L.E_,
        children: [
            (0, l.jsx)(v, {
                disabled: j,
                text: D.intl.string(D.t["g33r/P"]),
                onClick: () => {
                    c.A.openPrivateChannel({
                        recipientIds: t.id,
                    });
                },
                children: (0, l.jsx)(o.oyn, {
                    size: "custom",
                    color: "currentColor",
                    width: 24,
                    height: 24,
                }),
            }),
            (0, l.jsx)(v, {
                disabled: !h,
                text: D.intl.string(D.t["3glT6Z"]),
                onClick: () => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await n.e("40243").then(n.bind(n, 324785));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                C(x({}, n), {
                                    location: R,
                                    guildId: a,
                                    user: t,
                                    modReportId: s,
                                }),
                            );
                    });
                },
                children: (0, l.jsx)(o.Nxw, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(v, {
                disabled: !N,
                text: D.intl.string(D.t["5MBJ5M"]),
                onClick: () => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await n.e("2504").then(n.bind(n, 333179));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                C(x({}, n), {
                                    location: R,
                                    guildId: a,
                                    user: t,
                                    modReportId: s,
                                }),
                            );
                    });
                },
                children: (0, l.jsx)(o.wI0, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(v, {
                disabled: !m,
                text: b ? D.intl.string(D.t.N86XcP) : D.intl.string(D.t.kTlLrz),
                onClick: () => {
                    b
                        ? (0, d.Y)({
                              guildId: r.guildId,
                              userId: r.userId,
                              anaylticsLocations: G,
                          })
                        : (0, d.R)({
                              guildId: r.guildId,
                              userId: r.userId,
                              anaylticsLocations: G,
                              modReportId: s,
                          });
                },
                children: (0, l.jsx)(o.gQi, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(v, {
                text: D.intl.string(D.t.IHTjzA),
                onClick: () => {
                    M(A.Nj.COPY_ID), (0, p.C)(t.id);
                },
                disabled: !p.p5,
                children: (0, l.jsx)(o.L9S, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}

function U(e) {
    let { userId: t, guildId: n, onClose: r, moderatorReportId: a } = e,
        s = (0, i.bG)([S.default], () => S.default.getUser(t), [t]),
        o = (0, i.bG)([h.Ay], () => h.Ay.getMember(n, t), [n, t]);
    return null == s || null == o
        ? null
        : (0, l.jsxs)("div", {
              className: L.kL,
              children: [
                  (0, l.jsx)(M, {
                      user: s,
                      guildId: n,
                      onClose: r,
                  }),
                  (0, l.jsx)(j, {
                      user: s,
                      member: o,
                      guildId: n,
                      moderatorReportId: a,
                  }),
              ],
          });
}
