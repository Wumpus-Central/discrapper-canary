n.d(t, {
    A: () => M,
    w: () => j,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(311907),
    c = n(473193),
    u = n(36075),
    d = n(397927),
    f = n(775602),
    p = n(793574),
    _ = n(688810),
    h = n(922301),
    m = n(750112),
    g = n(73392),
    E = n(386467),
    b = n(534400),
    y = n(176201),
    O = n(676608),
    A = n(342296),
    v = n(317525),
    S = n(486020),
    I = n(109054),
    T = n(560936),
    C = n(743981),
    N = n(679740);
function R(e, t, n) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = L(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
            channel: R,
            userOverride: P,
            compact: L = !1,
            withMentionPrefix: j = !1,
            showPopout: M = !1,
            hideGuildTag: k = !1,
            hideSystemTag: U = !1,
            className: G,
            onClick: V,
            onContextMenu: F,
            onPopoutRequestClose: B,
            renderPopout: H,
            decorations: Y,
            previewGuildId: W,
            subscribeToGroupId: K,
        } = e,
        z = i.useRef(null),
        q = i.useContext(E.A),
        X = null != (t = null == R ? void 0 : R.guild_id) ? t : q,
        { analyticsLocations: Z } = (0, _.Ay)(p.A.USERNAME),
        Q = j ? "@" : "",
        { nick: $, colorString: J, colorStrings: ee, colorRoleName: et, displayNameStyles: en } = n,
        er = (0, l.bG)([f.A], () => f.A.roleStyle),
        ei = "username" === er,
        ea = "dot" === er,
        es = (0, g.a)({ displayNameStyles: en }),
        eo = (0, l.bG)([v.A], () =>
            null == n.guildId || null == n.colorRoleId ? null : v.A.getRole(n.guildId, n.colorRoleId),
        ),
        el = (0, O.jV)(null != W ? W : X, eo),
        ec = (0, I.A)(a),
        eu = i.useContext(c.C),
        ed = (null == eu ? void 0 : eu.animate) || M,
        ef = el && (0, y.kz)(n),
        ep = ei && ef,
        e_ = (null == R ? void 0 : R.isPrivate()) && null != en;
    (0, T.A)({
        shouldSubscribe: e_ || ep,
        subscribeToGroupId: K,
        authorId: a.author.id,
    });
    let { gradientStyle: eh, gradientClassname: em } = (0, d.v5K)({
            colorStrings: ee,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: ed,
        }),
        eg = () => {
            if (ei) {
                if (ep && null != ee) {
                    var e;
                    return D(w({}, eh), {
                        textDecorationColor: null != (e = null == ee ? void 0 : ee.primaryColor) ? e : void 0,
                    });
                }
                return null != J ? { color: J } : void 0;
            }
        },
        eE = (0, u.CR)(Q + $),
        eb = {
            className: s()(N.oF, es, {
                [em]: ep,
                [N.IW]: "username" === er && null != J,
            }),
            style: eg(),
            onClick: V,
            onContextMenu: F,
            children: e_
                ? (0, r.jsx)(m.A, {
                      userName: eE,
                      displayNameStyles: en,
                      effectDisplayType: ed ? h.G.ANIMATED : h.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != V,
                  })
                : eE,
            "data-text": Q + $,
        },
        ey = i.useMemo(
            () =>
                L && !k
                    ? (0, r.jsx)(b.Ay, {
                          primaryGuild: n.primaryGuild,
                          userId: a.author.id,
                          contextGuildId: X,
                          className: N.s4,
                          badgeSize: C.Sl.SIZE_12,
                      })
                    : null,
            [L, n.primaryGuild, X, a.author.id, k],
        ),
        eO = null != P ? P : a.author,
        eA =
            null != H && null != M
                ? (0, r.jsx)(A.A, {
                      targetElementRef: z,
                      user: eO,
                      renderPopout: H,
                      shouldShow: M,
                      shouldPreload: ec,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != n.guildMemberAvatar && null != X
                              ? (0, S.s7)({
                                    guildId: X,
                                    userId: eO.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80,
                                })
                              : void 0,
                      onRequestClose: B,
                      clickTrap: M,
                      children: (e) => {
                          let { onClick: t } = e,
                              n = x(e, ["onClick"]);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(
                                      d.DUT,
                                      D(
                                          w(
                                              {
                                                  tag: "span",
                                                  innerRef: z,
                                              },
                                              n,
                                              eb,
                                          ),
                                          { className: s()(eb.className, N.vk, G) },
                                      ),
                                  ),
                                  ey,
                              ],
                          });
                      },
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(d.DUT, D(w({}, eb), { className: s()(eb.className, G) })), ey],
                  }),
        ev = null != Y ? Y[0] : null,
        eS = null != Y ? Y[1] : null;
    return (0, r.jsxs)(_.f5, {
        value: Z,
        children: [
            null != ev && !U && L
                ? (0, r.jsxs)(r.Fragment, {
                      children: [" ", ev, " "],
                  })
                : null,
            ea
                ? (0, r.jsx)(d.WYI, {
                      color: J,
                      colors: ef ? ee : null,
                      name: et,
                      className: N.m4,
                      hoverOverride: ed,
                  })
                : null,
            eA,
            !L &&
                !k &&
                (0, r.jsx)(b.Ay, {
                    primaryGuild: n.primaryGuild,
                    userId: a.author.id,
                    contextGuildId: X,
                    className: N.s4,
                }),
            null != eS ? eS : null,
            null == ev || U || L ? null : ev,
        ],
    });
}
