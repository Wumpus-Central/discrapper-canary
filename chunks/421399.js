r.d(t, {
    Z: () => C,
    a: () => R
});
var n,
    l = r(200651),
    i = r(192379),
    a = r(120356),
    o = r.n(a),
    c = r(873546),
    s = r(442837),
    u = r(481060),
    m = r(607070),
    p = r(100527),
    d = r(906732),
    f = r(385499),
    b = r(979264),
    y = r(372900),
    O = r(477747),
    g = r(477734),
    j = r(823415),
    v = r(670188),
    h = r(768581),
    x = r(463396),
    P = r(935910),
    S = r(848697);
function N(e) {
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
function T(e) {
    let { compact: t } = e;
    return (0, l.jsx)(f.Z, {
        className: t ? S.botTagCompact : S.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function C(e) {
    var t;
    let { author: r, message: n, channel: a, userOverride: f, compact: R = !1, withMentionPrefix: C = !1, showPopout: E = !1, className: Z, onClick: k, onContextMenu: A, onPopoutRequestClose: I, renderPopout: D, renderRemixTag: _ = !1, decorations: F, previewGuildId: L } = e,
        M = i.useRef(null),
        G = i.useContext(y.Z),
        B = null != (t = null == a ? void 0 : a.guild_id) ? t : G,
        { analyticsLocations: z } = (0, d.ZP)(p.Z.USERNAME),
        U = C ? '@' : '',
        { nick: H, colorString: W, colorStrings: J, colorRoleName: V } = r,
        X = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        Y = 'username' === X,
        $ = (0, g.X$)(),
        q = (0, O.Z)(null != L ? L : B, 'BaseUsername'),
        Q = (0, j.ic)({ location: 'BaseUsername' }),
        K = (0, P.Z)(n),
        ee = Y && q && null != J && null != J.primaryColor && null != J.secondaryColor,
        et = (0, u.Nv7)(null == J ? void 0 : J.primaryColor, null == J ? void 0 : J.secondaryColor, null == J ? void 0 : J.tertiaryColor),
        { text: er, gradient: en } = ee
            ? et
            : {
                  text: {},
                  gradient: {}
              },
        el = {
            className: o()([S.username, ee && er.gradientClassName, ee && en.gradientClassName]),
            style: (() => {
                if (Y) return ee && null != J ? N({}, er.gradientStyle) : null != W ? { color: W } : void 0;
            })(),
            onClick: k,
            onContextMenu: A,
            children: U + H,
            'data-text': U + H
        },
        ei = i.useMemo(
            () =>
                R
                    ? (0, l.jsx)(b.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: B,
                          className: S.clanTagChiplet
                      })
                    : null,
            [R, r.primaryGuild, B, n.author.id]
        ),
        ea = null != f ? f : n.author,
        eo =
            null != D && null != E
                ? (0, l.jsx)(v.Z, {
                      targetElementRef: M,
                      user: ea,
                      renderPopout: D,
                      shouldShow: E,
                      shouldShowOnHover: K && Q,
                      shouldPreload: K,
                      position: c.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != r.guildMemberAvatar && null != B
                              ? (0, h.JM)({
                                    guildId: B,
                                    userId: ea.id,
                                    avatar: r.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: I,
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
                                              i = Object.keys(e);
                                          for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                                          return l;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                                  }
                                  return l;
                              })(e, ['onClick']);
                          return (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(
                                      u.P3F,
                                      w(
                                          N(
                                              {
                                                  tag: 'span',
                                                  innerRef: M
                                              },
                                              r,
                                              el
                                          ),
                                          { className: o()(el.className, S.clickable, Z) }
                                      )
                                  ),
                                  ei
                              ]
                          });
                      }
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(u.P3F, w(N({}, el), { className: o()(el.className, Z) })), ei]
                  }),
        ec = null != F ? F[0] : null,
        es = null != F ? F[1] : null;
    return (0, l.jsxs)(d.Gt, {
        value: z,
        children: [
            null != ec && R
                ? (0, l.jsxs)(l.Fragment, {
                      children: [' ', ec, ' ']
                  })
                : null,
            'dot' === X
                ? (0, l.jsx)(u.FhE, {
                      color: W,
                      name: V,
                      className: S.roleDot
                  })
                : null,
            eo,
            !R &&
                (0, l.jsx)(b.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: B,
                    className: S.clanTagChiplet
                }),
            null != es ? es : null,
            null == ec || R ? null : ec,
            null != n && (0, x.f)(n) && $ && _ ? (0, l.jsx)(T, {}) : null
        ]
    });
}
