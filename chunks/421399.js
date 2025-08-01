n.d(t, {
    Z: () => k,
    a: () => L
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
    _ = n(821795),
    x = n(892567),
    b = n(7284),
    E = n(372900),
    v = n(172751),
    I = n(606318),
    j = n(402235),
    O = n(477734),
    S = n(670188),
    y = n(485386),
    N = n(768581),
    C = n(585483),
    T = n(463396),
    A = n(935910),
    P = n(981631),
    Z = n(848697);
function R(e) {
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
function w(e, t) {
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
var L = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
function D(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? Z.botTagCompact : Z.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function k(e) {
    var t;
    let { author: n, message: r, channel: s, userOverride: f, compact: L = !1, withMentionPrefix: k = !1, showPopout: M = !1, hideGuildTag: B = !1, hideSystemTag: U = !1, className: G, onClick: F, onContextMenu: z, onPopoutRequestClose: V, renderPopout: H, renderRemixTag: K = !1, decorations: W, previewGuildId: q, subscribeToGroupId: Y } = e,
        J = l.useRef(null),
        X = l.useContext(E.Z),
        Q = null != (t = null == s ? void 0 : s.guild_id) ? t : X,
        { analyticsLocations: $ } = (0, m.ZP)(g.Z.USERNAME),
        ee = k ? '@' : '',
        { nick: et, colorString: en, colorStrings: er, colorRoleName: ei, displayNameStyles: el } = n,
        es = (0, c.e7)([p.Z], () => p.Z.roleStyle),
        ea = 'username' === es,
        eo = (0, O.X$)(),
        ec = (0, b.j)({ displayNameStyles: el }),
        eu = (0, c.e7)([y.Z], () => (null == n.guildId || null == n.colorRoleId ? null : y.Z.getRole(n.guildId, n.colorRoleId))),
        ed = (0, j.yH)(null != q ? q : Q, eu),
        eh = (0, A.Z)(r),
        ep = l.useContext(u.d),
        eg = ed && (0, I.S2)(n),
        em = ea && eg;
    l.useEffect(() => {
        if (null == Y || !em || null == ep) return;
        let { setAnimate: e } = ep;
        return (C.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, ''.concat(Y, ':').concat(r.author.id), e), () => void C.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, ''.concat(Y, ':').concat(r.author.id), e));
    }, [r.author.id, Y, em, ep]);
    let { gradientStyle: ef, gradientClassname: e_ } = (0, h.Icv)({
            colorStrings: er,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == ep ? void 0 : ep.animate
        }),
        ex = (0, d.EJ)(ee + et),
        eb = (null == s ? void 0 : s.isPrivate()) && null != el,
        eE = {
            className: a()([Z.username, em && e_, ec]),
            style: (() => {
                if (ea) {
                    if (em && null != er) {
                        var e;
                        return w(R({}, ef), { textDecorationColor: null != (e = null == er ? void 0 : er.primaryColor) ? e : void 0 });
                    }
                    return null != en ? { color: en } : void 0;
                }
            })(),
            onClick: F,
            onContextMenu: z,
            children: eb
                ? (0, i.jsx)(x.Z, {
                      userName: ex,
                      displayNameStyles: el,
                      effectDisplayType: _.F.PLAIN,
                      loop: !0
                  })
                : ex,
            'data-text': ee + et
        },
        ev = l.useMemo(
            () =>
                L && !B
                    ? (0, i.jsx)(v.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: Q,
                          className: Z.clanTagChiplet
                      })
                    : null,
            [L, n.primaryGuild, Q, r.author.id, B]
        ),
        eI = null != f ? f : r.author,
        ej =
            null != H && null != M
                ? (0, i.jsx)(S.Z, {
                      targetElementRef: J,
                      user: eI,
                      renderPopout: H,
                      shouldShow: M,
                      shouldPreload: eh,
                      position: o.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != n.guildMemberAvatar && null != Q
                              ? (0, N.JM)({
                                    guildId: Q,
                                    userId: eI.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: V,
                      clickTrap: M,
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
                                      w(
                                          R(
                                              {
                                                  tag: 'span',
                                                  innerRef: J
                                              },
                                              n,
                                              eE
                                          ),
                                          { className: a()(eE.className, Z.clickable, G) }
                                      )
                                  ),
                                  ev
                              ]
                          });
                      }
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(h.P3F, w(R({}, eE), { className: a()(eE.className, G) })), ev]
                  }),
        eO = null != W ? W[0] : null,
        eS = null != W ? W[1] : null;
    return (0, i.jsxs)(m.Gt, {
        value: $,
        children: [
            null != eO && !U && L
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', eO, ' ']
                  })
                : null,
            'dot' === es
                ? (0, i.jsx)(h.FhE, {
                      color: en,
                      colors: eg ? er : null,
                      name: ei,
                      className: Z.roleDot,
                      hoverOverride: null == ep ? void 0 : ep.animate
                  })
                : null,
            ej,
            !L &&
                !B &&
                (0, i.jsx)(v.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: r.author.id,
                    contextGuildId: Q,
                    className: Z.clanTagChiplet
                }),
            null != eS ? eS : null,
            null == eO || U || L ? null : eO,
            null != r && (0, T.f)(r) && eo && K ? (0, i.jsx)(D, {}) : null
        ]
    });
}
