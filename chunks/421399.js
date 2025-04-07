r.d(t, {
    Z: () => C,
    a: () => T
});
var n,
    l = r(200651),
    i = r(192379),
    o = r(120356),
    a = r.n(o),
    c = r(873546),
    s = r(442837),
    u = r(481060),
    p = r(607070),
    m = r(100527),
    d = r(906732),
    f = r(385499),
    b = r(979264),
    y = r(372900),
    g = r(142375),
    O = r(477747),
    j = r(477734),
    h = r(823415),
    v = r(670188),
    x = r(768581),
    P = r(463396),
    S = r(935910),
    N = r(848697);
function w(e) {
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
var T = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function E(e) {
    let { compact: t } = e;
    return (0, l.jsx)(f.Z, {
        className: t ? N.botTagCompact : N.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function C(e) {
    var t;
    let { author: r, message: n, channel: o, userOverride: f, compact: T = !1, withMentionPrefix: C = !1, showPopout: Z = !1, className: k, onClick: A, onContextMenu: I, onPopoutRequestClose: _, renderPopout: D, renderRemixTag: F = !1, decorations: L } = e,
        M = i.useRef(null),
        G = i.useContext(y.Z),
        B = null != (t = null == o ? void 0 : o.guild_id) ? t : G,
        { analyticsLocations: z } = (0, d.ZP)(m.Z.USERNAME),
        U = C ? '@' : '',
        { nick: H, colorString: W, colorStrings: J, colorRoleName: V } = r,
        X = (0, s.e7)([p.Z], () => p.Z.roleStyle),
        Y = 'username' === X,
        $ = (0, j.X$)(),
        q = (0, O.Z)(B, 'BaseUsername'),
        Q = (0, h.ic)({ location: 'BaseUsername' }),
        K = (0, S.Z)(n),
        ee = Y && q && null != J && null != J.primaryColor && null != J.secondaryColor,
        et = (0, g.N)(null == J ? void 0 : J.primaryColor, null == J ? void 0 : J.secondaryColor, null == J ? void 0 : J.tertiaryColor),
        { text: er, gradient: en } = ee
            ? et
            : {
                  text: {},
                  gradient: {}
              },
        el = {
            className: a()([N.username, ee && er.gradientClassName, ee && en.gradientClassName]),
            style: (() => {
                if (Y) return ee && null != J ? w({}, er.gradientStyle) : null != W ? { color: W } : void 0;
            })(),
            onClick: A,
            onContextMenu: I,
            children: U + H,
            'data-text': U + H
        },
        ei = i.useMemo(
            () =>
                T
                    ? (0, l.jsx)(b.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: B,
                          className: N.clanTagChiplet
                      })
                    : null,
            [T, r.primaryGuild, B, n.author.id]
        ),
        eo = null != f ? f : n.author,
        ea =
            null != D && null != Z
                ? (0, l.jsx)(v.Z, {
                      targetElementRef: M,
                      user: eo,
                      renderPopout: D,
                      shouldShow: Z,
                      shouldShowOnHover: K && Q,
                      shouldPreload: K,
                      position: c.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != r.guildMemberAvatar && null != B
                              ? (0, x.JM)({
                                    guildId: B,
                                    userId: eo.id,
                                    avatar: r.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: _,
                      clickTrap: Z,
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
                                      R(
                                          w(
                                              {
                                                  tag: 'span',
                                                  innerRef: M
                                              },
                                              r,
                                              el
                                          ),
                                          { className: a()(el.className, N.clickable, k) }
                                      )
                                  ),
                                  ei
                              ]
                          });
                      }
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(u.P3F, R(w({}, el), { className: a()(el.className, k) })), ei]
                  }),
        ec = null != L ? L[0] : null,
        es = null != L ? L[1] : null;
    return (0, l.jsxs)(d.Gt, {
        value: z,
        children: [
            null != ec && T
                ? (0, l.jsxs)(l.Fragment, {
                      children: [' ', ec, ' ']
                  })
                : null,
            'dot' === X
                ? (0, l.jsx)(u.FhE, {
                      color: W,
                      name: V,
                      className: N.roleDot
                  })
                : null,
            ea,
            !T &&
                (0, l.jsx)(b.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: B,
                    className: N.clanTagChiplet
                }),
            null != es ? es : null,
            null == ec || T ? null : ec,
            null != n && (0, P.f)(n) && $ && F ? (0, l.jsx)(E, {}) : null
        ]
    });
}
