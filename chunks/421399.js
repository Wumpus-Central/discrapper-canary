r.d(t, {
    Z: () => A,
    a: () => R
}),
    r(388685);
var n,
    l = r(200651),
    o = r(192379),
    i = r(120356),
    a = r.n(i),
    c = r(873546),
    s = r(442837),
    u = r(481060),
    m = r(607070),
    p = r(100527),
    d = r(906732),
    f = r(385499),
    b = r(372900),
    y = r(172751),
    O = r(477747),
    g = r(477734),
    j = r(670188),
    v = r(768581),
    h = r(585483),
    x = r(463396),
    P = r(935910),
    S = r(981631),
    N = r(848697);
function T(e) {
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
function w(e, t) {
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
var R = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function C(e) {
    let { compact: t } = e;
    return (0, l.jsx)(f.Z, {
        className: t ? N.botTagCompact : N.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function A(e) {
    var t;
    let { author: r, message: n, channel: i, userOverride: f, compact: R = !1, withMentionPrefix: A = !1, showPopout: E = !1, className: Z, onClick: I, onContextMenu: k, onPopoutRequestClose: M, renderPopout: _, renderRemixTag: D = !1, decorations: L, previewGuildId: F, subscribeToGroupId: G } = e,
        B = o.useRef(null),
        [z, U] = o.useState(!1),
        H = o.useContext(b.Z),
        V = null != (t = null == i ? void 0 : i.guild_id) ? t : H,
        { analyticsLocations: J } = (0, d.ZP)(p.Z.USERNAME),
        X = A ? '@' : '',
        { nick: Y, colorString: W, colorStrings: $, colorRoleName: q } = r,
        K = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        Q = 'username' === K,
        ee = (0, g.X$)(),
        et = (0, O.Z)(null != F ? F : V, 'BaseUsername'),
        er = (0, P.Z)(n),
        en = et && null != $ && null != $.primaryColor && null != $.secondaryColor,
        el = Q && en;
    o.useEffect(() => {
        if (null != G && el) return h.S.subscribeKeyed(S.LPv.ANIMATE_CHAT_AVATAR, ''.concat(G, ':').concat(n.author.id), U), () => void h.S.unsubscribeKeyed(S.LPv.ANIMATE_CHAT_AVATAR, ''.concat(G, ':').concat(n.author.id), U);
    }, [n.author.id, G, el]);
    let { gradientStyle: eo, gradientClassname: ei } = (0, u.Icv)({
            primaryColor: null == $ ? void 0 : $.primaryColor,
            secondaryColor: null == $ ? void 0 : $.secondaryColor,
            tertiaryColor: null == $ ? void 0 : $.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null != G && z
        }),
        ea = {
            className: a()([N.username, el && ei]),
            style: (() => {
                if (Q) return el && null != $ ? w(T({}, eo), { textDecorationColor: null == $ ? void 0 : $.primaryColor }) : null != W ? { color: W } : void 0;
            })(),
            onClick: I,
            onContextMenu: k,
            children: X + Y,
            'data-text': X + Y
        },
        ec = o.useMemo(
            () =>
                R
                    ? (0, l.jsx)(y.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: V,
                          className: N.clanTagChiplet
                      })
                    : null,
            [R, r.primaryGuild, V, n.author.id]
        ),
        es = null != f ? f : n.author,
        eu =
            null != _ && null != E
                ? (0, l.jsx)(j.Z, {
                      targetElementRef: B,
                      user: es,
                      renderPopout: _,
                      shouldShow: E,
                      shouldPreload: er,
                      position: c.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != r.guildMemberAvatar && null != V
                              ? (0, v.JM)({
                                    guildId: V,
                                    userId: es.id,
                                    avatar: r.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: M,
                      clickTrap: E,
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
                                      u.P3F,
                                      w(
                                          T(
                                              {
                                                  tag: 'span',
                                                  innerRef: B
                                              },
                                              r,
                                              ea
                                          ),
                                          { className: a()(ea.className, N.clickable, Z) }
                                      )
                                  ),
                                  ec
                              ]
                          });
                      }
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(u.P3F, w(T({}, ea), { className: a()(ea.className, Z) })), ec]
                  }),
        em = null != L ? L[0] : null,
        ep = null != L ? L[1] : null;
    return (0, l.jsxs)(d.Gt, {
        value: J,
        children: [
            null != em && R
                ? (0, l.jsxs)(l.Fragment, {
                      children: [' ', em, ' ']
                  })
                : null,
            'dot' === K
                ? (0, l.jsx)(u.FhE, {
                      color: W,
                      colors: en ? $ : null,
                      name: q,
                      className: N.roleDot
                  })
                : null,
            eu,
            !R &&
                (0, l.jsx)(y.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: V,
                    className: N.clanTagChiplet
                }),
            null != ep ? ep : null,
            null == em || R ? null : em,
            null != n && (0, x.f)(n) && ee && D ? (0, l.jsx)(C, {}) : null
        ]
    });
}
