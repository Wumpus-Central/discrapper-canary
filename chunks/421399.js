n.d(t, {
    Z: () => w,
    a: () => Z
});
var r,
    i = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(873546),
    c = n(442837),
    u = n(573385),
    d = n(865672),
    h = n(481060),
    p = n(607070),
    g = n(100527),
    m = n(906732),
    f = n(385499),
    _ = n(372900),
    x = n(172751),
    b = n(606318),
    E = n(402235),
    v = n(477734),
    I = n(670188),
    j = n(485386),
    O = n(768581),
    y = n(585483),
    S = n(463396),
    N = n(935910),
    C = n(981631),
    A = n(848697);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function P(e, t) {
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
var Z = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
function R(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? A.botTagCompact : A.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function w(e) {
    var t;
    let { author: n, message: r, channel: s, userOverride: f, compact: Z = !1, withMentionPrefix: w = !1, showPopout: L = !1, hideGuildTag: D = !1, hideSystemTag: k = !1, className: M, onClick: B, onContextMenu: G, onPopoutRequestClose: F, renderPopout: U, renderRemixTag: z = !1, decorations: V, previewGuildId: K, subscribeToGroupId: H } = e,
        W = l.useRef(null),
        q = l.useContext(_.Z),
        Y = null != (t = null == s ? void 0 : s.guild_id) ? t : q,
        { analyticsLocations: J } = (0, m.ZP)(g.Z.USERNAME),
        X = w ? '@' : '',
        { nick: Q, colorString: $, colorStrings: ee, colorRoleName: et } = n,
        en = (0, c.e7)([p.Z], () => p.Z.roleStyle),
        er = 'username' === en,
        ei = (0, v.X$)(),
        el = (0, c.e7)([j.Z], () => (null == n.guildId || null == n.colorRoleId ? null : j.Z.getRole(n.guildId, n.colorRoleId))),
        es = (0, E.yH)(null != K ? K : Y, el),
        ea = (0, N.Z)(r),
        eo = l.useContext(u.d),
        ec = es && (0, b.S2)(n),
        eu = er && ec;
    l.useEffect(() => {
        if (null == H || !eu || null == eo) return;
        let { setAnimate: e } = eo;
        return (y.S.subscribeKeyed(C.LPv.ANIMATE_CHAT_AVATAR, ''.concat(H, ':').concat(r.author.id), e), () => void y.S.unsubscribeKeyed(C.LPv.ANIMATE_CHAT_AVATAR, ''.concat(H, ':').concat(r.author.id), e));
    }, [r.author.id, H, eu, eo]);
    let { gradientStyle: ed, gradientClassname: eh } = (0, h.Icv)({
            primaryColor: null == ee ? void 0 : ee.primaryColor,
            secondaryColor: null == ee ? void 0 : ee.secondaryColor,
            tertiaryColor: null == ee ? void 0 : ee.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == eo ? void 0 : eo.animate
        }),
        ep = (0, d.EJ)(X + Q),
        eg = {
            className: a()([A.username, eu && eh]),
            style: (() => {
                if (er) return eu && null != ee ? P(T({}, ed), { textDecorationColor: null == ee ? void 0 : ee.primaryColor }) : null != $ ? { color: $ } : void 0;
            })(),
            onClick: B,
            onContextMenu: G,
            children: ep,
            'data-text': X + Q
        },
        em = l.useMemo(
            () =>
                Z && !D
                    ? (0, i.jsx)(x.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: Y,
                          className: A.clanTagChiplet
                      })
                    : null,
            [Z, n.primaryGuild, Y, r.author.id, D]
        ),
        ef = null != f ? f : r.author,
        e_ =
            null != U && null != L
                ? (0, i.jsx)(I.Z, {
                      targetElementRef: W,
                      user: ef,
                      renderPopout: U,
                      shouldShow: L,
                      shouldPreload: ea,
                      position: o.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != n.guildMemberAvatar && null != Y
                              ? (0, O.JM)({
                                    guildId: Y,
                                    userId: ef.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: F,
                      clickTrap: L,
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
                                          for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                  }
                                  return i;
                              })(e, ['onClick']);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(
                                      h.P3F,
                                      P(
                                          T(
                                              {
                                                  tag: 'span',
                                                  innerRef: W
                                              },
                                              n,
                                              eg
                                          ),
                                          { className: a()(eg.className, A.clickable, M) }
                                      )
                                  ),
                                  em
                              ]
                          });
                      }
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(h.P3F, P(T({}, eg), { className: a()(eg.className, M) })), em]
                  }),
        ex = null != V ? V[0] : null,
        eb = null != V ? V[1] : null;
    return (0, i.jsxs)(m.Gt, {
        value: J,
        children: [
            null != ex && !k && Z
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', ex, ' ']
                  })
                : null,
            'dot' === en
                ? (0, i.jsx)(h.FhE, {
                      color: $,
                      colors: ec ? ee : null,
                      name: et,
                      className: A.roleDot,
                      hoverOverride: null == eo ? void 0 : eo.animate
                  })
                : null,
            e_,
            !Z &&
                !D &&
                (0, i.jsx)(x.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: r.author.id,
                    contextGuildId: Y,
                    className: A.clanTagChiplet
                }),
            null != eb ? eb : null,
            null == ex || k || Z ? null : ex,
            null != r && (0, S.f)(r) && ei && z ? (0, i.jsx)(R, {}) : null
        ]
    });
}
