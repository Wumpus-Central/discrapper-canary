r.d(t, {
    Z: () => T,
    a: () => w
});
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
    h = r(463396),
    x = r(935910),
    P = r(848697);
function S(e) {
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
function N(e, t) {
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
var w = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function R(e) {
    let { compact: t } = e;
    return (0, l.jsx)(f.Z, {
        className: t ? P.botTagCompact : P.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function T(e) {
    var t;
    let { author: r, message: n, channel: i, userOverride: f, compact: w = !1, withMentionPrefix: T = !1, showPopout: C = !1, className: E, onClick: Z, onContextMenu: k, onPopoutRequestClose: I, renderPopout: A, renderRemixTag: D = !1, decorations: M, previewGuildId: _ } = e,
        F = o.useRef(null),
        L = o.useContext(b.Z),
        G = null != (t = null == i ? void 0 : i.guild_id) ? t : L,
        { analyticsLocations: B } = (0, d.ZP)(p.Z.USERNAME),
        z = T ? '@' : '',
        { nick: U, colorString: H, colorStrings: J, colorRoleName: V } = r,
        X = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        Y = 'username' === X,
        W = (0, g.X$)(),
        $ = (0, O.Z)(null != _ ? _ : G, 'BaseUsername'),
        q = (0, x.Z)(n),
        Q = $ && null != J && null != J.primaryColor && null != J.secondaryColor,
        K = Y && Q,
        { gradientStyle: ee, gradientClassname: et } = (0, u.Icv)({
            primaryColor: null == J ? void 0 : J.primaryColor,
            secondaryColor: null == J ? void 0 : J.secondaryColor,
            tertiaryColor: null == J ? void 0 : J.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0
        }),
        er = {
            className: a()([P.username, K && et]),
            style: (() => {
                if (Y) return K && null != J ? N(S({}, ee), { textDecorationColor: null == J ? void 0 : J.primaryColor }) : null != H ? { color: H } : void 0;
            })(),
            onClick: Z,
            onContextMenu: k,
            children: z + U,
            'data-text': z + U
        },
        en = o.useMemo(
            () =>
                w
                    ? (0, l.jsx)(y.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: G,
                          className: P.clanTagChiplet
                      })
                    : null,
            [w, r.primaryGuild, G, n.author.id]
        ),
        el = null != f ? f : n.author,
        eo =
            null != A && null != C
                ? (0, l.jsx)(j.Z, {
                      targetElementRef: F,
                      user: el,
                      renderPopout: A,
                      shouldShow: C,
                      shouldPreload: q,
                      position: c.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != r.guildMemberAvatar && null != G
                              ? (0, v.JM)({
                                    guildId: G,
                                    userId: el.id,
                                    avatar: r.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: I,
                      clickTrap: C,
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
                                      N(
                                          S(
                                              {
                                                  tag: 'span',
                                                  innerRef: F
                                              },
                                              r,
                                              er
                                          ),
                                          { className: a()(er.className, P.clickable, E) }
                                      )
                                  ),
                                  en
                              ]
                          });
                      }
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(u.P3F, N(S({}, er), { className: a()(er.className, E) })), en]
                  }),
        ei = null != M ? M[0] : null,
        ea = null != M ? M[1] : null;
    return (0, l.jsxs)(d.Gt, {
        value: B,
        children: [
            null != ei && w
                ? (0, l.jsxs)(l.Fragment, {
                      children: [' ', ei, ' ']
                  })
                : null,
            'dot' === X
                ? (0, l.jsx)(u.FhE, {
                      color: H,
                      colors: Q ? J : null,
                      name: V,
                      className: P.roleDot
                  })
                : null,
            eo,
            !w &&
                (0, l.jsx)(y.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: G,
                    className: P.clanTagChiplet
                }),
            null != ea ? ea : null,
            null == ei || w ? null : ei,
            null != n && (0, h.f)(n) && W && D ? (0, l.jsx)(R, {}) : null
        ]
    });
}
