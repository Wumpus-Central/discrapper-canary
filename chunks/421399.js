r.d(t, {
    Z: () => Z,
    a: () => A
});
var n,
    l = r(255367),
    o = r(73800),
    i = r(120356),
    a = r.n(i),
    c = r(873546),
    s = r(442837),
    u = r(573385),
    m = r(865672),
    p = r(481060),
    d = r(607070),
    f = r(100527),
    b = r(906732),
    y = r(385499),
    O = r(372900),
    g = r(172751),
    j = r(477747),
    v = r(477734),
    h = r(670188),
    x = r(768581),
    P = r(585483),
    S = r(463396),
    N = r(935910),
    T = r(981631),
    w = r(848697);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
var A = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function E(e) {
    let { compact: t } = e;
    return (0, l.jsx)(y.Z, {
        className: t ? w.botTagCompact : w.botTagCozy,
        type: y.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function Z(e) {
    var t;
    let { author: r, message: n, channel: i, userOverride: y, compact: A = !1, withMentionPrefix: Z = !1, showPopout: I = !1, className: k, onClick: M, onContextMenu: _, onPopoutRequestClose: D, renderPopout: L, renderRemixTag: F = !1, decorations: G, previewGuildId: B, subscribeToGroupId: z } = e,
        U = o.useRef(null),
        H = o.useContext(O.Z),
        V = null != (t = null == i ? void 0 : i.guild_id) ? t : H,
        { analyticsLocations: J } = (0, b.ZP)(f.Z.USERNAME),
        X = Z ? '@' : '',
        { nick: Y, colorString: W, colorStrings: $, colorRoleName: q } = r,
        K = (0, s.e7)([d.Z], () => d.Z.roleStyle),
        Q = 'username' === K,
        ee = (0, v.X$)(),
        et = (0, j.Z)(null != B ? B : V, 'BaseUsername'),
        er = (0, N.Z)(n),
        en = o.useContext(u.d),
        el = et && null != $ && null != $.primaryColor && null != $.secondaryColor,
        eo = Q && el;
    o.useEffect(() => {
        if (null == z || !eo || null == en) return;
        let { setAnimate: e } = en;
        return P.S.subscribeKeyed(T.LPv.ANIMATE_CHAT_AVATAR, ''.concat(z, ':').concat(n.author.id), e), () => void P.S.unsubscribeKeyed(T.LPv.ANIMATE_CHAT_AVATAR, ''.concat(z, ':').concat(n.author.id), e);
    }, [n.author.id, z, eo, en]);
    let { gradientStyle: ei, gradientClassname: ea } = (0, p.Icv)({
            primaryColor: null == $ ? void 0 : $.primaryColor,
            secondaryColor: null == $ ? void 0 : $.secondaryColor,
            tertiaryColor: null == $ ? void 0 : $.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == en ? void 0 : en.animate
        }),
        ec = (0, m.EJ)(X + Y),
        es = {
            className: a()([w.username, eo && ea]),
            style: (() => {
                if (Q) return eo && null != $ ? R(C({}, ei), { textDecorationColor: null == $ ? void 0 : $.primaryColor }) : null != W ? { color: W } : void 0;
            })(),
            onClick: M,
            onContextMenu: _,
            children: ec,
            'data-text': X + Y
        },
        eu = o.useMemo(
            () =>
                A
                    ? (0, l.jsx)(g.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: V,
                          className: w.clanTagChiplet
                      })
                    : null,
            [A, r.primaryGuild, V, n.author.id]
        ),
        em = null != y ? y : n.author,
        ep =
            null != L && null != I
                ? (0, l.jsx)(h.Z, {
                      targetElementRef: U,
                      user: em,
                      renderPopout: L,
                      shouldShow: I,
                      shouldPreload: er,
                      position: c.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != r.guildMemberAvatar && null != V
                              ? (0, x.JM)({
                                    guildId: V,
                                    userId: em.id,
                                    avatar: r.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: D,
                      clickTrap: I,
                      children: (e) => {
                          var { onClick: t } = e,
                              r = (function (e, t) {
                                  if (null == e) return {};
                                  var r,
                                      n,
                                      l = (function (e, t) {
                                          if (null == e) return {};
                                          var r,
                                              n,
                                              l = {},
                                              o = Object.keys(e);
                                          for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                                          return l;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var o = Object.getOwnPropertySymbols(e);
                                      for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                                  }
                                  return l;
                              })(e, ['onClick']);
                          return (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(
                                      p.P3F,
                                      R(
                                          C(
                                              {
                                                  tag: 'span',
                                                  innerRef: U
                                              },
                                              r,
                                              es
                                          ),
                                          { className: a()(es.className, w.clickable, k) }
                                      )
                                  ),
                                  eu
                              ]
                          });
                      }
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(p.P3F, R(C({}, es), { className: a()(es.className, k) })), eu]
                  }),
        ed = null != G ? G[0] : null,
        ef = null != G ? G[1] : null;
    return (0, l.jsxs)(b.Gt, {
        value: J,
        children: [
            null != ed && A
                ? (0, l.jsxs)(l.Fragment, {
                      children: [' ', ed, ' ']
                  })
                : null,
            'dot' === K
                ? (0, l.jsx)(p.FhE, {
                      color: W,
                      colors: el ? $ : null,
                      name: q,
                      className: w.roleDot
                  })
                : null,
            ep,
            !A &&
                (0, l.jsx)(g.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: V,
                    className: w.clanTagChiplet
                }),
            null != ef ? ef : null,
            null == ed || A ? null : ed,
            null != n && (0, S.f)(n) && ee && F ? (0, l.jsx)(E, {}) : null
        ]
    });
}
