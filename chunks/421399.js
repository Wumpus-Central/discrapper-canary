n.d(t, {
    Z: () => Z,
    a: () => G,
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
    C = n(585483),
    N = n(463396),
    R = n(935910),
    P = n(981631),
    w = n(131085),
    D = n(724913);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = U(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var G = (function (e) {
    return (e[(e.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (e[(e.BADGES = 1)] = "BADGES"), e;
})({});
function B(e) {
    let { compact: t } = e;
    return (0, r.jsx)(h.Z, {
        className: t ? D.botTagCompact : D.botTagCozy,
        type: h.Z.Types.REMIX,
        useRemSizes: !0,
    });
}
function Z(e) {
    var t;
    let {
            author: n,
            message: a,
            channel: h,
            userOverride: x,
            compact: j = !1,
            withMentionPrefix: U = !1,
            showPopout: G = !1,
            hideGuildTag: Z = !1,
            hideSystemTag: V = !1,
            className: F,
            onClick: H,
            onContextMenu: Y,
            onPopoutRequestClose: W,
            renderPopout: K,
            renderRemixTag: z = !1,
            decorations: q,
            previewGuildId: X,
            subscribeToGroupId: Q,
        } = e,
        J = i.useRef(null),
        $ = i.useContext(b.Z),
        ee = null != (t = null == h ? void 0 : h.guild_id) ? t : $,
        { analyticsLocations: et } = (0, p.ZP)(_.Z.USERNAME),
        en = U ? "@" : "",
        { nick: er, colorString: ei, colorStrings: ea, colorRoleName: eo, displayNameStyles: es } = n,
        el = (0, l.e7)([f.Z], () => f.Z.roleStyle),
        ec = "username" === el,
        eu = "dot" === el,
        ed = (0, I.X$)(),
        ef = (0, E.j)({ displayNameStyles: es }),
        e_ = (0, l.e7)([S.Z], () =>
            null == n.guildId || null == n.colorRoleId ? null : S.Z.getRole(n.guildId, n.colorRoleId),
        ),
        ep = (0, v.yH)(null != X ? X : ee, e_),
        eh = (0, R.Z)(a),
        em = i.useContext(c.d),
        eg = ep && (0, O.S2)(n),
        eE = ec && eg,
        eb = (null == h ? void 0 : h.isPrivate()) && null != es;
    i.useEffect(() => {
        if (null == Q || (!eE && !eb) || null == em) return;
        let { setAnimate: e } = em;
        return (
            C.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(Q, ":").concat(a.author.id), e),
            () => void C.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(Q, ":").concat(a.author.id), e)
        );
    }, [a.author.id, Q, eE, eb, em]);
    let { gradientStyle: ey, gradientClassname: eO } = (0, d.Icv)({
            colorStrings: ea,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: null == em ? void 0 : em.animate,
        }),
        ev = () => {
            if (ec) {
                if (eE && null != ea) {
                    var e;
                    return M(L({}, ey), {
                        textDecorationColor: null != (e = null == ea ? void 0 : ea.primaryColor) ? e : void 0,
                    });
                }
                return null != ei ? { color: ei } : void 0;
            }
        },
        eI = (0, u.EJ)(en + er),
        eT = {
            className: o()([D.username, eE && eO, ef]),
            style: ev(),
            onClick: H,
            onContextMenu: Y,
            children: eb
                ? (0, r.jsx)(g.Z, {
                      userName: eI,
                      displayNameStyles: es,
                      effectDisplayType: (null == em ? void 0 : em.animate) ? m.F.ANIMATED : m.F.PLAIN,
                      loop: !0,
                  })
                : eI,
            "data-text": en + er,
        },
        eS = i.useMemo(
            () =>
                j && !Z
                    ? (0, r.jsx)(y.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: a.author.id,
                          contextGuildId: ee,
                          className: D.clanTagChiplet,
                          badgeSize: w.Gg.SIZE_12,
                      })
                    : null,
            [j, n.primaryGuild, ee, a.author.id, Z],
        ),
        eA = null != x ? x : a.author,
        eC =
            null != K && null != G
                ? (0, r.jsx)(T.Z, {
                      targetElementRef: J,
                      user: eA,
                      renderPopout: K,
                      shouldShow: G,
                      shouldPreload: eh,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl:
                          null != n.guildMemberAvatar && null != ee
                              ? (0, A.JM)({
                                    guildId: ee,
                                    userId: eA.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80,
                                })
                              : void 0,
                      onRequestClose: W,
                      clickTrap: G,
                      children: (e) => {
                          var { onClick: t } = e,
                              n = k(e, ["onClick"]);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(
                                      d.P3F,
                                      M(
                                          L(
                                              {
                                                  tag: "span",
                                                  innerRef: J,
                                              },
                                              n,
                                              eT,
                                          ),
                                          { className: o()(eT.className, D.clickable, F) },
                                      ),
                                  ),
                                  eS,
                              ],
                          });
                      },
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(d.P3F, M(L({}, eT), { className: o()(eT.className, F) })), eS],
                  }),
        eN = null != q ? q[0] : null,
        eR = null != q ? q[1] : null;
    return (0, r.jsxs)(p.Gt, {
        value: et,
        children: [
            null != eN && !V && j
                ? (0, r.jsxs)(r.Fragment, {
                      children: [" ", eN, " "],
                  })
                : null,
            eu
                ? (0, r.jsx)(d.FhE, {
                      color: ei,
                      colors: eg ? ea : null,
                      name: eo,
                      className: D.roleDot,
                      hoverOverride: null == em ? void 0 : em.animate,
                  })
                : null,
            eC,
            !j &&
                !Z &&
                (0, r.jsx)(y.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: a.author.id,
                    contextGuildId: ee,
                    className: D.clanTagChiplet,
                }),
            null != eR ? eR : null,
            null == eN || V || j ? null : eN,
            null != a && (0, N.f)(a) && ed && z ? (0, r.jsx)(B, {}) : null,
        ],
    });
}
