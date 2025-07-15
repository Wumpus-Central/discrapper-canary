n.d(t, {
    Z: () => L,
    a: () => R
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
    _ = n(7284),
    x = n(372900),
    b = n(172751),
    E = n(606318),
    v = n(402235),
    I = n(477734),
    j = n(670188),
    O = n(485386),
    y = n(768581),
    S = n(585483),
    N = n(463396),
    C = n(935910),
    A = n(981631),
    T = n(848697);
function P(e) {
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
function Z(e, t) {
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
var R = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
function w(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? T.botTagCompact : T.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function L(e) {
    var t;
    let { author: n, message: r, channel: s, userOverride: f, compact: R = !1, withMentionPrefix: L = !1, showPopout: D = !1, hideGuildTag: k = !1, hideSystemTag: M = !1, className: B, onClick: G, onContextMenu: F, onPopoutRequestClose: U, renderPopout: z, renderRemixTag: V = !1, decorations: K, previewGuildId: H, subscribeToGroupId: W } = e,
        q = l.useRef(null),
        Y = l.useContext(x.Z),
        J = null != (t = null == s ? void 0 : s.guild_id) ? t : Y,
        { analyticsLocations: X } = (0, m.ZP)(g.Z.USERNAME),
        Q = L ? '@' : '',
        { nick: $, colorString: ee, colorStrings: et, colorRoleName: en, displayNameStyles: er } = n,
        ei = (0, c.e7)([p.Z], () => p.Z.roleStyle),
        el = 'username' === ei,
        es = (0, I.X$)(),
        ea = (0, _.j)({ displayNameStyles: er }),
        eo = (0, c.e7)([O.Z], () => (null == n.guildId || null == n.colorRoleId ? null : O.Z.getRole(n.guildId, n.colorRoleId))),
        ec = (0, v.yH)(null != H ? H : J, eo),
        eu = (0, C.Z)(r),
        ed = l.useContext(u.d),
        eh = ec && (0, E.S2)(n),
        ep = el && eh;
    l.useEffect(() => {
        if (null == W || !ep || null == ed) return;
        let { setAnimate: e } = ed;
        return (S.S.subscribeKeyed(A.LPv.ANIMATE_CHAT_AVATAR, ''.concat(W, ':').concat(r.author.id), e), () => void S.S.unsubscribeKeyed(A.LPv.ANIMATE_CHAT_AVATAR, ''.concat(W, ':').concat(r.author.id), e));
    }, [r.author.id, W, ep, ed]);
    let { gradientStyle: eg, gradientClassname: em } = (0, h.Icv)({
            primaryColor: null == et ? void 0 : et.primaryColor,
            secondaryColor: null == et ? void 0 : et.secondaryColor,
            tertiaryColor: null == et ? void 0 : et.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == ed ? void 0 : ed.animate
        }),
        ef = (0, d.EJ)(Q + $),
        e_ = {
            className: a()([T.username, ep && em, ea]),
            style: (() => {
                if (el) return ep && null != et ? Z(P({}, eg), { textDecorationColor: null == et ? void 0 : et.primaryColor }) : null != ee ? { color: ee } : void 0;
            })(),
            onClick: G,
            onContextMenu: F,
            children: ef,
            'data-text': Q + $
        },
        ex = l.useMemo(
            () =>
                R && !k
                    ? (0, i.jsx)(b.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: J,
                          className: T.clanTagChiplet
                      })
                    : null,
            [R, n.primaryGuild, J, r.author.id, k]
        ),
        eb = null != f ? f : r.author,
        eE =
            null != z && null != D
                ? (0, i.jsx)(j.Z, {
                      targetElementRef: q,
                      user: eb,
                      renderPopout: z,
                      shouldShow: D,
                      shouldPreload: eu,
                      position: o.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != n.guildMemberAvatar && null != J
                              ? (0, y.JM)({
                                    guildId: J,
                                    userId: eb.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: U,
                      clickTrap: D,
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
                                      Z(
                                          P(
                                              {
                                                  tag: 'span',
                                                  innerRef: q
                                              },
                                              n,
                                              e_
                                          ),
                                          { className: a()(e_.className, T.clickable, B) }
                                      )
                                  ),
                                  ex
                              ]
                          });
                      }
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(h.P3F, Z(P({}, e_), { className: a()(e_.className, B) })), ex]
                  }),
        ev = null != K ? K[0] : null,
        eI = null != K ? K[1] : null;
    return (0, i.jsxs)(m.Gt, {
        value: X,
        children: [
            null != ev && !M && R
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', ev, ' ']
                  })
                : null,
            'dot' === ei
                ? (0, i.jsx)(h.FhE, {
                      color: ee,
                      colors: eh ? et : null,
                      name: en,
                      className: T.roleDot,
                      hoverOverride: null == ed ? void 0 : ed.animate
                  })
                : null,
            eE,
            !R &&
                !k &&
                (0, i.jsx)(b.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: r.author.id,
                    contextGuildId: J,
                    className: T.clanTagChiplet
                }),
            null != eI ? eI : null,
            null == ev || M || R ? null : ev,
            null != r && (0, N.f)(r) && es && V ? (0, i.jsx)(w, {}) : null
        ]
    });
}
