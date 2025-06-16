n.d(t, {
    Z: () => R,
    a: () => P
});
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    c = n(442837),
    u = n(573385),
    d = n(865672),
    h = n(481060),
    g = n(607070),
    p = n(100527),
    m = n(906732),
    f = n(385499),
    _ = n(372900),
    x = n(172751),
    E = n(606318),
    b = n(402235),
    v = n(477734),
    I = n(670188),
    O = n(768581),
    S = n(585483),
    y = n(463396),
    j = n(935910),
    N = n(981631),
    C = n(848697);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
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
var P = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
function Z(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? C.botTagCompact : C.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function R(e) {
    var t;
    let { author: n, message: r, channel: a, userOverride: f, compact: P = !1, withMentionPrefix: R = !1, showPopout: w = !1, hideGuildTag: L = !1, hideSystemTag: D = !1, className: k, onClick: M, onContextMenu: U, onPopoutRequestClose: B, renderPopout: G, renderRemixTag: F = !1, decorations: z, previewGuildId: V, subscribeToGroupId: H } = e,
        K = l.useRef(null),
        W = l.useContext(_.Z),
        q = null != (t = null == a ? void 0 : a.guild_id) ? t : W,
        { analyticsLocations: Y } = (0, m.ZP)(p.Z.USERNAME),
        J = R ? '@' : '',
        { nick: X, colorString: Q, colorStrings: $, colorRoleName: ee } = n,
        et = (0, c.e7)([g.Z], () => g.Z.roleStyle),
        en = 'username' === et,
        er = (0, v.X$)(),
        ei = (0, b.Z)(null != V ? V : q, 'BaseUsername'),
        el = (0, j.Z)(r),
        ea = l.useContext(u.d),
        eo = ei && (0, E.S2)(n),
        es = en && eo;
    l.useEffect(() => {
        if (null == H || !es || null == ea) return;
        let { setAnimate: e } = ea;
        return S.S.subscribeKeyed(N.LPv.ANIMATE_CHAT_AVATAR, ''.concat(H, ':').concat(r.author.id), e), () => void S.S.unsubscribeKeyed(N.LPv.ANIMATE_CHAT_AVATAR, ''.concat(H, ':').concat(r.author.id), e);
    }, [r.author.id, H, es, ea]);
    let { gradientStyle: ec, gradientClassname: eu } = (0, h.Icv)({
            primaryColor: null == $ ? void 0 : $.primaryColor,
            secondaryColor: null == $ ? void 0 : $.secondaryColor,
            tertiaryColor: null == $ ? void 0 : $.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == ea ? void 0 : ea.animate
        }),
        ed = (0, d.EJ)(J + X),
        eh = {
            className: o()([C.username, es && eu]),
            style: (() => {
                if (en) return es && null != $ ? A(T({}, ec), { textDecorationColor: null == $ ? void 0 : $.primaryColor }) : null != Q ? { color: Q } : void 0;
            })(),
            onClick: M,
            onContextMenu: U,
            children: ed,
            'data-text': J + X
        },
        eg = l.useMemo(
            () =>
                P && !L
                    ? (0, i.jsx)(x.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: q,
                          className: C.clanTagChiplet
                      })
                    : null,
            [P, n.primaryGuild, q, r.author.id, L]
        ),
        ep = null != f ? f : r.author,
        em =
            null != G && null != w
                ? (0, i.jsx)(I.Z, {
                      targetElementRef: K,
                      user: ep,
                      renderPopout: G,
                      shouldShow: w,
                      shouldPreload: el,
                      position: s.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != n.guildMemberAvatar && null != q
                              ? (0, O.JM)({
                                    guildId: q,
                                    userId: ep.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: B,
                      clickTrap: w,
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
                                      for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, ['onClick']);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(
                                      h.P3F,
                                      A(
                                          T(
                                              {
                                                  tag: 'span',
                                                  innerRef: K
                                              },
                                              n,
                                              eh
                                          ),
                                          { className: o()(eh.className, C.clickable, k) }
                                      )
                                  ),
                                  eg
                              ]
                          });
                      }
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(h.P3F, A(T({}, eh), { className: o()(eh.className, k) })), eg]
                  }),
        ef = null != z ? z[0] : null,
        e_ = null != z ? z[1] : null;
    return (0, i.jsxs)(m.Gt, {
        value: Y,
        children: [
            null != ef && !D && P
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', ef, ' ']
                  })
                : null,
            'dot' === et
                ? (0, i.jsx)(h.FhE, {
                      color: Q,
                      colors: eo ? $ : null,
                      name: ee,
                      className: C.roleDot,
                      hoverOverride: null == ea ? void 0 : ea.animate
                  })
                : null,
            em,
            !P &&
                !L &&
                (0, i.jsx)(x.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: r.author.id,
                    contextGuildId: q,
                    className: C.clanTagChiplet
                }),
            null != e_ ? e_ : null,
            null == ef || D || P ? null : ef,
            null != r && (0, y.f)(r) && er && F ? (0, i.jsx)(Z, {}) : null
        ]
    });
}
