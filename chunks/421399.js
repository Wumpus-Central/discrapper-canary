n.d(t, {
    Z: () => M,
    a: () => D,
});
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    c = n(442837),
    u = n(573385),
    d = n(865672),
    h = n(481060),
    p = n(607070),
    m = n(100527),
    f = n(906732),
    g = n(385499),
    _ = n(821795),
    x = n(892567),
    b = n(7284),
    v = n(372900),
    E = n(172751),
    j = n(606318),
    I = n(402235),
    y = n(477734),
    O = n(670188),
    N = n(485386),
    S = n(768581),
    C = n(585483),
    T = n(463396),
    A = n(935910),
    Z = n(981631),
    P = n(131085),
    R = n(724913);
function w(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var D = (((r = {})[(r.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (r[(r.BADGES = 1)] = "BADGES"), r);
function k(e) {
    let { compact: t } = e;
    return (0, i.jsx)(g.Z, {
        className: t ? R.botTagCompact : R.botTagCozy,
        type: g.Z.Types.REMIX,
        useRemSizes: !0,
    });
}
function M(e) {
    var t;
    let {
            author: n,
            message: r,
            channel: a,
            userOverride: g,
            compact: D = !1,
            withMentionPrefix: M = !1,
            showPopout: B = !1,
            hideGuildTag: U = !1,
            hideSystemTag: F = !1,
            className: G,
            onClick: z,
            onContextMenu: V,
            onPopoutRequestClose: H,
            renderPopout: K,
            renderRemixTag: W = !1,
            decorations: q,
            previewGuildId: Y,
            subscribeToGroupId: J,
        } = e,
        X = l.useRef(null),
        Q = l.useContext(v.Z),
        $ = null != (t = null == a ? void 0 : a.guild_id) ? t : Q,
        { analyticsLocations: ee } = (0, f.ZP)(m.Z.USERNAME),
        et = M ? "@" : "",
        { nick: en, colorString: er, colorStrings: ei, colorRoleName: el, displayNameStyles: ea } = n,
        es = (0, c.e7)([p.Z], () => p.Z.roleStyle),
        eo = "username" === es,
        ec = (0, y.X$)(),
        eu = (0, b.j)({ displayNameStyles: ea }),
        ed = (0, c.e7)([N.Z], () =>
            null == n.guildId || null == n.colorRoleId ? null : N.Z.getRole(n.guildId, n.colorRoleId),
        ),
        eh = (0, I.yH)(null != Y ? Y : $, ed),
        ep = (0, A.Z)(r),
        em = l.useContext(u.d),
        ef = eh && (0, j.S2)(n),
        eg = eo && ef;
    l.useEffect(() => {
        if (null == J || !eg || null == em) return;
        let { setAnimate: e } = em;
        return (
            C.S.subscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(J, ":").concat(r.author.id), e),
            () => void C.S.unsubscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(J, ":").concat(r.author.id), e)
        );
    }, [r.author.id, J, eg, em]);
    let { gradientStyle: e_, gradientClassname: ex } = (0, h.Icv)({
            colorStrings: ei,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: null == em ? void 0 : em.animate,
        }),
        eb = (0, d.EJ)(et + en),
        ev = (null == a ? void 0 : a.isPrivate()) && null != ea,
        eE = {
            className: s()([R.username, eg && ex, eu]),
            style: (() => {
                if (eo) {
                    if (eg && null != ei) {
                        var e;
                        return L(w({}, e_), {
                            textDecorationColor: null != (e = null == ei ? void 0 : ei.primaryColor) ? e : void 0,
                        });
                    }
                    return null != er ? { color: er } : void 0;
                }
            })(),
            onClick: z,
            onContextMenu: V,
            children: ev
                ? (0, i.jsx)(x.Z, {
                      userName: eb,
                      displayNameStyles: ea,
                      effectDisplayType: _.F.PLAIN,
                      loop: !0,
                  })
                : eb,
            "data-text": et + en,
        },
        ej = l.useMemo(
            () =>
                D && !U
                    ? (0, i.jsx)(E.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: $,
                          className: R.clanTagChiplet,
                          badgeSize: P.Gg.SIZE_12,
                      })
                    : null,
            [D, n.primaryGuild, $, r.author.id, U],
        ),
        eI = null != g ? g : r.author,
        ey =
            null != K && null != B
                ? (0, i.jsx)(O.Z, {
                      targetElementRef: X,
                      user: eI,
                      renderPopout: K,
                      shouldShow: B,
                      shouldPreload: ep,
                      position: o.tq ? "window_center" : "right",
                      avatarUrl:
                          null != n.guildMemberAvatar && null != $
                              ? (0, S.JM)({
                                    guildId: $,
                                    userId: eI.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80,
                                })
                              : void 0,
                      onRequestClose: H,
                      clickTrap: B,
                      children: (e) => {
                          var { onClick: t } = e,
                              n = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              i = {},
                                              l = Object.keys(e);
                                          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++)
                                          (n = l[r]),
                                              !(t.indexOf(n) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                  (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, ["onClick"]);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(
                                      h.P3F,
                                      L(
                                          w(
                                              {
                                                  tag: "span",
                                                  innerRef: X,
                                              },
                                              n,
                                              eE,
                                          ),
                                          { className: s()(eE.className, R.clickable, G) },
                                      ),
                                  ),
                                  ej,
                              ],
                          });
                      },
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(h.P3F, L(w({}, eE), { className: s()(eE.className, G) })), ej],
                  }),
        eO = null != q ? q[0] : null,
        eN = null != q ? q[1] : null;
    return (0, i.jsxs)(f.Gt, {
        value: ee,
        children: [
            null != eO && !F && D
                ? (0, i.jsxs)(i.Fragment, {
                      children: [" ", eO, " "],
                  })
                : null,
            "dot" === es
                ? (0, i.jsx)(h.FhE, {
                      color: er,
                      colors: ef ? ei : null,
                      name: el,
                      className: R.roleDot,
                      hoverOverride: null == em ? void 0 : em.animate,
                  })
                : null,
            ey,
            !D &&
                !U &&
                (0, i.jsx)(E.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: r.author.id,
                    contextGuildId: $,
                    className: R.clanTagChiplet,
                }),
            null != eN ? eN : null,
            null == eO || F || D ? null : eO,
            null != r && (0, T.f)(r) && ec && W ? (0, i.jsx)(k, {}) : null,
        ],
    });
}
