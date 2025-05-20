n.d(t, {
    Z: () => Z,
    a: () => A
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
    g = n(481060),
    h = n(607070),
    p = n(100527),
    m = n(906732),
    f = n(385499),
    _ = n(372900),
    x = n(172751),
    E = n(477747),
    b = n(477734),
    v = n(670188),
    O = n(768581),
    I = n(585483),
    S = n(463396),
    j = n(935910),
    y = n(981631),
    N = n(848697);
function C(e) {
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
function T(e, t) {
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
var A = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
function P(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? N.botTagCompact : N.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function Z(e) {
    var t;
    let { author: n, message: r, channel: a, userOverride: f, compact: A = !1, withMentionPrefix: Z = !1, showPopout: R = !1, hideGuildTag: w = !1, className: L, onClick: D, onContextMenu: k, onPopoutRequestClose: M, renderPopout: U, renderRemixTag: G = !1, decorations: B, previewGuildId: F, subscribeToGroupId: z } = e,
        V = l.useRef(null),
        H = l.useContext(_.Z),
        K = null != (t = null == a ? void 0 : a.guild_id) ? t : H,
        { analyticsLocations: W } = (0, m.ZP)(p.Z.USERNAME),
        q = Z ? '@' : '',
        { nick: Y, colorString: J, colorStrings: X, colorRoleName: Q } = n,
        $ = (0, c.e7)([h.Z], () => h.Z.roleStyle),
        ee = 'username' === $,
        et = (0, b.X$)(),
        en = (0, E.Z)(null != F ? F : K, 'BaseUsername'),
        er = (0, j.Z)(r),
        ei = l.useContext(u.d),
        el = en && null != X && null != X.primaryColor && null != X.secondaryColor,
        ea = ee && el;
    l.useEffect(() => {
        if (null == z || !ea || null == ei) return;
        let { setAnimate: e } = ei;
        return I.S.subscribeKeyed(y.LPv.ANIMATE_CHAT_AVATAR, ''.concat(z, ':').concat(r.author.id), e), () => void I.S.unsubscribeKeyed(y.LPv.ANIMATE_CHAT_AVATAR, ''.concat(z, ':').concat(r.author.id), e);
    }, [r.author.id, z, ea, ei]);
    let { gradientStyle: eo, gradientClassname: es } = (0, g.Icv)({
            primaryColor: null == X ? void 0 : X.primaryColor,
            secondaryColor: null == X ? void 0 : X.secondaryColor,
            tertiaryColor: null == X ? void 0 : X.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == ei ? void 0 : ei.animate
        }),
        ec = (0, d.EJ)(q + Y),
        eu = {
            className: o()([N.username, ea && es]),
            style: (() => {
                if (ee) return ea && null != X ? T(C({}, eo), { textDecorationColor: null == X ? void 0 : X.primaryColor }) : null != J ? { color: J } : void 0;
            })(),
            onClick: D,
            onContextMenu: k,
            children: ec,
            'data-text': q + Y
        },
        ed = l.useMemo(
            () =>
                A && !w
                    ? (0, i.jsx)(x.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: K,
                          className: N.clanTagChiplet
                      })
                    : null,
            [A, n.primaryGuild, K, r.author.id, w]
        ),
        eg = null != f ? f : r.author,
        eh =
            null != U && null != R
                ? (0, i.jsx)(v.Z, {
                      targetElementRef: V,
                      user: eg,
                      renderPopout: U,
                      shouldShow: R,
                      shouldPreload: er,
                      position: s.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != n.guildMemberAvatar && null != K
                              ? (0, O.JM)({
                                    guildId: K,
                                    userId: eg.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: M,
                      clickTrap: R,
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
                                      g.P3F,
                                      T(
                                          C(
                                              {
                                                  tag: 'span',
                                                  innerRef: V
                                              },
                                              n,
                                              eu
                                          ),
                                          { className: o()(eu.className, N.clickable, L) }
                                      )
                                  ),
                                  ed
                              ]
                          });
                      }
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(g.P3F, T(C({}, eu), { className: o()(eu.className, L) })), ed]
                  }),
        ep = null != B ? B[0] : null,
        em = null != B ? B[1] : null;
    return (0, i.jsxs)(m.Gt, {
        value: W,
        children: [
            null != ep && A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', ep, ' ']
                  })
                : null,
            'dot' === $
                ? (0, i.jsx)(g.FhE, {
                      color: J,
                      colors: el ? X : null,
                      name: Q,
                      className: N.roleDot
                  })
                : null,
            eh,
            !A &&
                !w &&
                (0, i.jsx)(x.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: r.author.id,
                    contextGuildId: K,
                    className: N.clanTagChiplet
                }),
            null != em ? em : null,
            null == ep || A ? null : ep,
            null != r && (0, S.f)(r) && et && G ? (0, i.jsx)(P, {}) : null
        ]
    });
}
