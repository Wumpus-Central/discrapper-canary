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
    h = n(481060),
    g = n(607070),
    p = n(100527),
    m = n(906732),
    f = n(385499),
    _ = n(372900),
    x = n(172751),
    E = n(477747),
    b = n(477734),
    v = n(670188),
    I = n(768581),
    O = n(585483),
    S = n(463396),
    y = n(935910),
    j = n(981631),
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
    let { author: n, message: r, channel: a, userOverride: f, compact: A = !1, withMentionPrefix: Z = !1, showPopout: R = !1, hideGuildTag: w = !1, hideSystemTag: L = !1, className: D, onClick: k, onContextMenu: M, onPopoutRequestClose: U, renderPopout: B, renderRemixTag: G = !1, decorations: F, previewGuildId: z, subscribeToGroupId: V } = e,
        H = l.useRef(null),
        K = l.useContext(_.Z),
        W = null != (t = null == a ? void 0 : a.guild_id) ? t : K,
        { analyticsLocations: q } = (0, m.ZP)(p.Z.USERNAME),
        Y = Z ? '@' : '',
        { nick: J, colorString: X, colorStrings: Q, colorRoleName: $ } = n,
        ee = (0, c.e7)([g.Z], () => g.Z.roleStyle),
        et = 'username' === ee,
        en = (0, b.X$)(),
        er = (0, E.Z)(null != z ? z : W, 'BaseUsername'),
        ei = (0, y.Z)(r),
        el = l.useContext(u.d),
        ea = er && null != Q && null != Q.primaryColor && null != Q.secondaryColor,
        eo = et && ea;
    l.useEffect(() => {
        if (null == V || !eo || null == el) return;
        let { setAnimate: e } = el;
        return O.S.subscribeKeyed(j.LPv.ANIMATE_CHAT_AVATAR, ''.concat(V, ':').concat(r.author.id), e), () => void O.S.unsubscribeKeyed(j.LPv.ANIMATE_CHAT_AVATAR, ''.concat(V, ':').concat(r.author.id), e);
    }, [r.author.id, V, eo, el]);
    let { gradientStyle: es, gradientClassname: ec } = (0, h.Icv)({
            primaryColor: null == Q ? void 0 : Q.primaryColor,
            secondaryColor: null == Q ? void 0 : Q.secondaryColor,
            tertiaryColor: null == Q ? void 0 : Q.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == el ? void 0 : el.animate
        }),
        eu = (0, d.EJ)(Y + J),
        ed = {
            className: o()([N.username, eo && ec]),
            style: (() => {
                if (et) return eo && null != Q ? T(C({}, es), { textDecorationColor: null == Q ? void 0 : Q.primaryColor }) : null != X ? { color: X } : void 0;
            })(),
            onClick: k,
            onContextMenu: M,
            children: eu,
            'data-text': Y + J
        },
        eh = l.useMemo(
            () =>
                A && !w
                    ? (0, i.jsx)(x.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: W,
                          className: N.clanTagChiplet
                      })
                    : null,
            [A, n.primaryGuild, W, r.author.id, w]
        ),
        eg = null != f ? f : r.author,
        ep =
            null != B && null != R
                ? (0, i.jsx)(v.Z, {
                      targetElementRef: H,
                      user: eg,
                      renderPopout: B,
                      shouldShow: R,
                      shouldPreload: ei,
                      position: s.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != n.guildMemberAvatar && null != W
                              ? (0, I.JM)({
                                    guildId: W,
                                    userId: eg.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: U,
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
                                      h.P3F,
                                      T(
                                          C(
                                              {
                                                  tag: 'span',
                                                  innerRef: H
                                              },
                                              n,
                                              ed
                                          ),
                                          { className: o()(ed.className, N.clickable, D) }
                                      )
                                  ),
                                  eh
                              ]
                          });
                      }
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(h.P3F, T(C({}, ed), { className: o()(ed.className, D) })), eh]
                  }),
        em = null != F ? F[0] : null,
        ef = null != F ? F[1] : null;
    return (0, i.jsxs)(m.Gt, {
        value: q,
        children: [
            null != em && !L && A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', em, ' ']
                  })
                : null,
            'dot' === ee
                ? (0, i.jsx)(h.FhE, {
                      color: X,
                      colors: ea ? Q : null,
                      name: $,
                      className: N.roleDot,
                      hoverOverride: null == el ? void 0 : el.animate
                  })
                : null,
            ep,
            !A &&
                !w &&
                (0, i.jsx)(x.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: r.author.id,
                    contextGuildId: W,
                    className: N.clanTagChiplet
                }),
            null != ef ? ef : null,
            null == em || L || A ? null : em,
            null != r && (0, S.f)(r) && en && G ? (0, i.jsx)(P, {}) : null
        ]
    });
}
