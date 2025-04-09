r.d(t, {
    Z: () => E,
    a: () => T
});
var n,
    i = r(200651),
    l = r(192379),
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
    O = r(142375),
    g = r(477747),
    j = r(477734),
    v = r(823415),
    h = r(670188),
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
function C(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? N.botTagCompact : N.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function E(e) {
    var t;
    let { author: r, message: n, channel: a, userOverride: f, compact: T = !1, withMentionPrefix: E = !1, showPopout: Z = !1, className: k, onClick: A, onContextMenu: I, onPopoutRequestClose: D, renderPopout: _, renderRemixTag: F = !1, decorations: L } = e,
        M = l.useRef(null),
        G = l.useContext(y.Z),
        B = null != (t = null == a ? void 0 : a.guild_id) ? t : G,
        { analyticsLocations: z } = (0, d.ZP)(p.Z.USERNAME),
        U = E ? '@' : '',
        { nick: H, colorString: W, colorStrings: J, colorRoleName: V } = r,
        X = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        Y = 'username' === X,
        $ = (0, j.X$)(),
        q = (0, g.Z)(B, 'BaseUsername'),
        Q = (0, v.ic)({ location: 'BaseUsername' }),
        K = (0, S.Z)(n),
        ee = Y && q && null != J && null != J.primaryColor && null != J.secondaryColor,
        et = (0, O.N)(null == J ? void 0 : J.primaryColor, null == J ? void 0 : J.secondaryColor, null == J ? void 0 : J.tertiaryColor),
        { text: er, gradient: en } = ee
            ? et
            : {
                  text: {},
                  gradient: {}
              },
        ei = {
            className: o()([N.username, ee && er.gradientClassName, ee && en.gradientClassName]),
            style: (() => {
                if (Y) return ee && null != J ? w({}, er.gradientStyle) : null != W ? { color: W } : void 0;
            })(),
            onClick: A,
            onContextMenu: I,
            children: U + H,
            'data-text': U + H
        },
        el = l.useMemo(
            () =>
                T
                    ? (0, i.jsx)(b.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: B,
                          className: N.clanTagChiplet
                      })
                    : null,
            [T, r.primaryGuild, B, n.author.id]
        ),
        ea = null != f ? f : n.author,
        eo =
            null != _ && null != Z
                ? (0, i.jsx)(h.Z, {
                      targetElementRef: M,
                      user: ea,
                      renderPopout: _,
                      shouldShow: Z,
                      shouldShowOnHover: K && Q,
                      shouldPreload: K,
                      position: c.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != r.guildMemberAvatar && null != B
                              ? (0, x.JM)({
                                    guildId: B,
                                    userId: ea.id,
                                    avatar: r.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: D,
                      clickTrap: Z,
                      children: (e) => {
                          var { onClick: t } = e,
                              r = (function (e, t) {
                                  if (null == e) return {};
                                  var r,
                                      n,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var r,
                                              n,
                                              i = {},
                                              l = Object.keys(e);
                                          for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                                  }
                                  return i;
                              })(e, ['onClick']);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(
                                      u.P3F,
                                      R(
                                          w(
                                              {
                                                  tag: 'span',
                                                  innerRef: M
                                              },
                                              r,
                                              ei
                                          ),
                                          { className: o()(ei.className, N.clickable, k) }
                                      )
                                  ),
                                  el
                              ]
                          });
                      }
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(u.P3F, R(w({}, ei), { className: o()(ei.className, k) })), el]
                  }),
        ec = null != L ? L[0] : null,
        es = null != L ? L[1] : null;
    return (0, i.jsxs)(d.Gt, {
        value: z,
        children: [
            null != ec && T
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', ec, ' ']
                  })
                : null,
            'dot' === X
                ? (0, i.jsx)(u.FhE, {
                      color: W,
                      name: V,
                      className: N.roleDot
                  })
                : null,
            eo,
            !T &&
                (0, i.jsx)(b.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: B,
                    className: N.clanTagChiplet
                }),
            null != es ? es : null,
            null == ec || T ? null : ec,
            null != n && (0, P.f)(n) && $ && F ? (0, i.jsx)(C, {}) : null
        ]
    });
}
