n.d(t, {
    Z: () => M,
    a: () => j,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(573385),
    u = n(865672),
    d = n(481060),
    f = n(607070),
    p = n(100527),
    _ = n(906732),
    m = n(821795),
    h = n(892567),
    g = n(7284),
    E = n(372900),
    b = n(172751),
    y = n(606318),
    O = n(402235),
    v = n(670188),
    S = n(485386),
    I = n(768581),
    T = n(935910),
    A = n(392819),
    C = n(131085),
    N = n(724913);
function P(e, t, n) {
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
function R(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var j = (function (e) {
    return (e[(e.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (e[(e.BADGES = 1)] = "BADGES"), e;
})({});
function M(e) {
    var t;
    let {
            author: n,
            message: a,
            channel: P,
            userOverride: w,
            compact: L = !1,
            withMentionPrefix: j = !1,
            showPopout: M = !1,
            hideGuildTag: k = !1,
            hideSystemTag: U = !1,
            className: G,
            onClick: Z,
            onContextMenu: B,
            onPopoutRequestClose: F,
            renderPopout: V,
            decorations: H,
            previewGuildId: Y,
            subscribeToGroupId: W,
        } = e,
        K = i.useRef(null),
        z = i.useContext(E.Z),
        q = null != (t = null == P ? void 0 : P.guild_id) ? t : z,
        { analyticsLocations: Q } = (0, _.ZP)(p.Z.USERNAME),
        X = j ? "@" : "",
        { nick: J, colorString: $, colorStrings: ee, colorRoleName: et, displayNameStyles: en } = n,
        er = (0, l.e7)([f.Z], () => f.Z.roleStyle),
        ei = "username" === er,
        ea = "dot" === er,
        eo = (0, g.j)({ displayNameStyles: en }),
        es = (0, l.e7)([S.Z], () =>
            null == n.guildId || null == n.colorRoleId ? null : S.Z.getRole(n.guildId, n.colorRoleId),
        ),
        el = (0, O.yH)(null != Y ? Y : q, es),
        ec = (0, T.Z)(a),
        eu = i.useContext(c.d),
        ed = (null == eu ? void 0 : eu.animate) || M,
        ef = el && (0, y.S2)(n),
        ep = ei && ef,
        e_ = (null == P ? void 0 : P.isPrivate()) && null != en;
    (0, A.Z)({
        shouldSubscribe: e_ || ep,
        subscribeToGroupId: W,
        authorId: a.author.id,
    });
    let { gradientStyle: em, gradientClassname: eh } = (0, d.Icv)({
            colorStrings: ee,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: ed,
        }),
        eg = () => {
            if (ei) {
                if (ep && null != ee) {
                    var e;
                    return D(R({}, em), {
                        textDecorationColor: null != (e = null == ee ? void 0 : ee.primaryColor) ? e : void 0,
                    });
                }
                return null != $ ? { color: $ } : void 0;
            }
        },
        eE = (0, u.EJ)(X + J),
        eb = {
            className: o()(N.username, eo, {
                [eh]: ep,
                [N.usernameColorOnName]: "username" === er && null != $,
            }),
            style: eg(),
            onClick: Z,
            onContextMenu: B,
            children: e_
                ? (0, r.jsx)(h.Z, {
                      userName: eE,
                      displayNameStyles: en,
                      effectDisplayType: ed ? m.F.ANIMATED : m.F.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != Z,
                  })
                : eE,
            "data-text": X + J,
        },
        ey = i.useMemo(
            () =>
                L && !k
                    ? (0, r.jsx)(b.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: a.author.id,
                          contextGuildId: q,
                          className: N.clanTagChiplet,
                          badgeSize: C.Gg.SIZE_12,
                      })
                    : null,
            [L, n.primaryGuild, q, a.author.id, k],
        ),
        eO = null != w ? w : a.author,
        ev =
            null != V && null != M
                ? (0, r.jsx)(v.Z, {
                      targetElementRef: K,
                      user: eO,
                      renderPopout: V,
                      shouldShow: M,
                      shouldPreload: ec,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl:
                          null != n.guildMemberAvatar && null != q
                              ? (0, I.JM)({
                                    guildId: q,
                                    userId: eO.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80,
                                })
                              : void 0,
                      onRequestClose: F,
                      clickTrap: M,
                      children: (e) => {
                          var { onClick: t } = e,
                              n = x(e, ["onClick"]);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(
                                      d.P3F,
                                      D(
                                          R(
                                              {
                                                  tag: "span",
                                                  innerRef: K,
                                              },
                                              n,
                                              eb,
                                          ),
                                          { className: o()(eb.className, N.clickable, G) },
                                      ),
                                  ),
                                  ey,
                              ],
                          });
                      },
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(d.P3F, D(R({}, eb), { className: o()(eb.className, G) })), ey],
                  }),
        eS = null != H ? H[0] : null,
        eI = null != H ? H[1] : null;
    return (0, r.jsxs)(_.Gt, {
        value: Q,
        children: [
            null != eS && !U && L
                ? (0, r.jsxs)(r.Fragment, {
                      children: [" ", eS, " "],
                  })
                : null,
            ea
                ? (0, r.jsx)(d.FhE, {
                      color: $,
                      colors: ef ? ee : null,
                      name: et,
                      className: N.roleDot,
                      hoverOverride: ed,
                  })
                : null,
            ev,
            !L &&
                !k &&
                (0, r.jsx)(b.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: a.author.id,
                    contextGuildId: q,
                    className: N.clanTagChiplet,
                }),
            null != eI ? eI : null,
            null == eS || U || L ? null : eS,
        ],
    });
}
