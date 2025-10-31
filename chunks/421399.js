n.d(t, {
    Z: () => B,
    a: () => U,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(573385),
    u = n(865672),
    d = n(481060),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(385499),
    m = n(821795),
    g = n(892567),
    E = n(7284),
    b = n(372900),
    y = n(172751),
    O = n(606318),
    v = n(402235),
    I = n(477734),
    T = n(670188),
    S = n(485386),
    A = n(768581),
    C = n(463396),
    N = n(935910),
    R = n(392819),
    P = n(131085),
    w = n(724913);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var U = (function (e) {
    return (e[(e.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (e[(e.BADGES = 1)] = "BADGES"), e;
})({});
function G(e) {
    let { compact: t } = e;
    return (0, r.jsx)(h.Z, {
        className: t ? w.botTagCompact : w.botTagCozy,
        type: h.Z.Types.REMIX,
        useRemSizes: !0,
    });
}
function B(e) {
    var t;
    let {
            author: n,
            message: a,
            channel: h,
            userOverride: D,
            compact: L = !1,
            withMentionPrefix: k = !1,
            showPopout: U = !1,
            hideGuildTag: B = !1,
            hideSystemTag: Z = !1,
            className: F,
            onClick: V,
            onContextMenu: H,
            onPopoutRequestClose: Y,
            renderPopout: W,
            renderRemixTag: K = !1,
            decorations: z,
            previewGuildId: q,
            subscribeToGroupId: X,
        } = e,
        Q = i.useRef(null),
        J = i.useContext(b.Z),
        $ = null != (t = null == h ? void 0 : h.guild_id) ? t : J,
        { analyticsLocations: ee } = (0, p.ZP)(_.Z.USERNAME),
        et = k ? "@" : "",
        { nick: en, colorString: er, colorStrings: ei, colorRoleName: ea, displayNameStyles: eo } = n,
        es = (0, l.e7)([f.Z], () => f.Z.roleStyle),
        el = "username" === es,
        ec = "dot" === es,
        eu = (0, I.X$)(),
        ed = (0, E.j)({ displayNameStyles: eo }),
        ef = (0, l.e7)([S.Z], () =>
            null == n.guildId || null == n.colorRoleId ? null : S.Z.getRole(n.guildId, n.colorRoleId),
        ),
        e_ = (0, v.yH)(null != q ? q : $, ef),
        ep = (0, N.Z)(a),
        eh = i.useContext(c.d),
        em = (null == eh ? void 0 : eh.animate) || U,
        eg = e_ && (0, O.S2)(n),
        eE = el && eg,
        eb = (null == h ? void 0 : h.isPrivate()) && null != eo;
    (0, R.Z)({
        shouldSubscribe: eb || eE,
        subscribeToGroupId: X,
        authorId: a.author.id,
    });
    let { gradientStyle: ey, gradientClassname: eO } = (0, d.Icv)({
            colorStrings: ei,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: em,
        }),
        ev = () => {
            if (el) {
                if (eE && null != ei) {
                    var e;
                    return M(x({}, ey), {
                        textDecorationColor: null != (e = null == ei ? void 0 : ei.primaryColor) ? e : void 0,
                    });
                }
                return null != er ? { color: er } : void 0;
            }
        },
        eI = (0, u.EJ)(et + en),
        eT = {
            className: o()(w.username, ed, {
                [eO]: eE,
                [w.usernameColorOnName]: "username" === es && null != er,
            }),
            style: ev(),
            onClick: V,
            onContextMenu: H,
            children: eb
                ? (0, r.jsx)(g.Z, {
                      userName: eI,
                      displayNameStyles: eo,
                      effectDisplayType: em ? m.F.ANIMATED : m.F.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != V,
                  })
                : eI,
            "data-text": et + en,
        },
        eS = i.useMemo(
            () =>
                L && !B
                    ? (0, r.jsx)(y.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: a.author.id,
                          contextGuildId: $,
                          className: w.clanTagChiplet,
                          badgeSize: P.Gg.SIZE_12,
                      })
                    : null,
            [L, n.primaryGuild, $, a.author.id, B],
        ),
        eA = null != D ? D : a.author,
        eC =
            null != W && null != U
                ? (0, r.jsx)(T.Z, {
                      targetElementRef: Q,
                      user: eA,
                      renderPopout: W,
                      shouldShow: U,
                      shouldPreload: ep,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl:
                          null != n.guildMemberAvatar && null != $
                              ? (0, A.JM)({
                                    guildId: $,
                                    userId: eA.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80,
                                })
                              : void 0,
                      onRequestClose: Y,
                      clickTrap: U,
                      children: (e) => {
                          var { onClick: t } = e,
                              n = j(e, ["onClick"]);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(
                                      d.P3F,
                                      M(
                                          x(
                                              {
                                                  tag: "span",
                                                  innerRef: Q,
                                              },
                                              n,
                                              eT,
                                          ),
                                          { className: o()(eT.className, w.clickable, F) },
                                      ),
                                  ),
                                  eS,
                              ],
                          });
                      },
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(d.P3F, M(x({}, eT), { className: o()(eT.className, F) })), eS],
                  }),
        eN = null != z ? z[0] : null,
        eR = null != z ? z[1] : null;
    return (0, r.jsxs)(p.Gt, {
        value: ee,
        children: [
            null != eN && !Z && L
                ? (0, r.jsxs)(r.Fragment, {
                      children: [" ", eN, " "],
                  })
                : null,
            ec
                ? (0, r.jsx)(d.FhE, {
                      color: er,
                      colors: eg ? ei : null,
                      name: ea,
                      className: w.roleDot,
                      hoverOverride: em,
                  })
                : null,
            eC,
            !L &&
                !B &&
                (0, r.jsx)(y.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: a.author.id,
                    contextGuildId: $,
                    className: w.clanTagChiplet,
                }),
            null != eR ? eR : null,
            null == eN || Z || L ? null : eN,
            null != a && (0, C.f)(a) && eu && K ? (0, r.jsx)(G, {}) : null,
        ],
    });
}
