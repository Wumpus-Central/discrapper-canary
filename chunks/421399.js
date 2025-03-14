r.d(t, {
    Z: () => T,
    a: () => w
});
var n,
    i = r(200651),
    a = r(192379),
    l = r(120356),
    o = r.n(l),
    c = r(873546),
    s = r(442837),
    u = r(481060),
    p = r(607070),
    m = r(100527),
    d = r(906732),
    f = r(385499),
    b = r(979264),
    y = r(372900),
    O = r(477734),
    g = r(184301),
    j = r(768581),
    h = r(463396),
    x = r(981631),
    v = r(432957);
function P(e) {
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
function S(e, t) {
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
function N(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? v.botTagCompact : v.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function T(e) {
    var t;
    let r,
        { author: n, message: l, channel: f, userOverride: w, compact: T = !1, withMentionPrefix: R = !1, showPopout: I = !1, className: E, onClick: k, onContextMenu: A, onPopoutRequestClose: C, renderPopout: Z, renderRemixTag: D = !1, decorations: F } = e,
        _ = a.useContext(y.Z),
        L = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : _,
        { analyticsLocations: M } = (0, d.ZP)(m.Z.USERNAME),
        { nick: G, colorString: B, colorRoleName: z } = n,
        U = null != l.messageReference && null != l.webhookId && l.hasFlag(x.iLy.IS_CROSSPOST),
        W = (0, s.e7)([p.Z], () => p.Z.roleStyle),
        H = (0, O.X$)(),
        J = {
            className: v.username,
            style: 'username' === W && null != B ? { color: B } : void 0,
            onClick: k,
            onContextMenu: A,
            children: (R ? '@' : '') + G
        },
        V = a.useMemo(
            () =>
                T
                    ? (0, i.jsx)(b.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: l.author.id,
                          contextGuildId: L,
                          className: v.clanTagChiplet
                      })
                    : null,
            [T, n.primaryGuild, L, l.author.id]
        );
    r =
        null != Z && null != I
            ? (0, i.jsx)(u.yRy, {
                  preload: U
                      ? void 0
                      : function () {
                            let e = null != w ? w : l.author;
                            return (0, g.Z)(
                                e.id,
                                null != n.guildMemberAvatar && null != L
                                    ? (0, j.JM)({
                                          guildId: L,
                                          userId: e.id,
                                          avatar: n.guildMemberAvatar,
                                          size: 80
                                      })
                                    : e.getAvatarURL(L, 80),
                                {
                                    guildId: L,
                                    channelId: l.channel_id
                                }
                            );
                        },
                  renderPopout: Z,
                  shouldShow: I,
                  position: c.tq ? 'window_center' : 'right',
                  onRequestClose: C,
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
                                          a = Object.keys(e);
                                      for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                              }
                              return i;
                          })(e, ['onClick']);
                      return (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(u.P3F, S(P({ tag: 'span' }, r, J), { className: o()(J.className, v.clickable, E) })), V]
                      });
                  }
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(u.P3F, S(P({}, J), { className: o()(J.className, E) })), V]
              });
    let X = null != F ? F[0] : null,
        Y = null != F ? F[1] : null;
    return (0, i.jsxs)(d.Gt, {
        value: M,
        children: [
            null != X && T
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', X, ' ']
                  })
                : null,
            'dot' === W
                ? (0, i.jsx)(u.FhE, {
                      color: B,
                      name: z,
                      className: v.roleDot
                  })
                : null,
            r,
            !T &&
                (0, i.jsx)(b.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: l.author.id,
                    contextGuildId: L,
                    className: v.clanTagChiplet
                }),
            null != Y ? Y : null,
            null == X || T ? null : X,
            null != l && (0, h.f)(l) && H && D ? (0, i.jsx)(N, {}) : null
        ]
    });
}
