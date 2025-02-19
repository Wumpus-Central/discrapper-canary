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
    m = r(607070),
    p = r(100527),
    d = r(906732),
    f = r(385499),
    b = r(979264),
    y = r(372900),
    g = r(477734),
    O = r(184301),
    j = r(768581),
    h = r(463396),
    x = r(981631),
    v = r(456536);
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
        { author: n, message: l, channel: f, userOverride: w, compact: T = !1, withMentionPrefix: R = !1, showPopout: I = !1, className: A, onClick: E, onContextMenu: k, onPopoutRequestClose: C, renderPopout: Z, renderRemixTag: F = !1, decorations: D } = e,
        L = a.useContext(y.Z),
        _ = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : L,
        { analyticsLocations: M } = (0, d.ZP)(p.Z.USERNAME),
        { nick: G, colorString: B, colorRoleName: z } = n,
        U = null != l.messageReference && null != l.webhookId && l.hasFlag(x.iLy.IS_CROSSPOST),
        V = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        W = (0, g.X$)(),
        H = a.useMemo(
            () => ({
                source: x.jXE.CHANNEL,
                messageId: l.id,
                tagUserId: l.author.id
            }),
            [l.id, l.author.id]
        ),
        X = {
            className: v.username,
            style: 'username' === V && null != B ? { color: B } : void 0,
            onClick: E,
            onContextMenu: k,
            children: (0, i.jsx)(i.Fragment, { children: (R ? '@' : '') + G })
        },
        J = a.useMemo(
            () =>
                T
                    ? (0, i.jsx)(b.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: l.author.id,
                          contextGuildId: _,
                          className: v.clanTagChiplet,
                          profileViewedAnalytics: H
                      })
                    : null,
            [T, H, n.primaryGuild, _, l.author.id]
        );
    r =
        null != Z && null != I
            ? (0, i.jsx)(u.yRy, {
                  preload: U
                      ? void 0
                      : function () {
                            let e = null != w ? w : l.author;
                            return (0, O.Z)(
                                e.id,
                                null != n.guildMemberAvatar && null != _
                                    ? (0, j.JM)({
                                          guildId: _,
                                          userId: e.id,
                                          avatar: n.guildMemberAvatar,
                                          size: 80
                                      })
                                    : e.getAvatarURL(_, 80),
                                {
                                    guildId: _,
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
                          children: [(0, i.jsx)(u.P3F, S(P({ tag: 'span' }, r, X), { className: o()(X.className, v.clickable, A) })), J]
                      });
                  }
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(u.P3F, S(P({}, X), { className: o()(X.className, A) })), J]
              });
    let Y = null != D ? D[0] : null,
        $ = null != D ? D[1] : null;
    return (0, i.jsxs)(d.Gt, {
        value: M,
        children: [
            null != Y && T
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', Y, ' ']
                  })
                : null,
            'dot' === V
                ? (0, i.jsx)(u.FhE, {
                      color: B,
                      name: z,
                      className: v.roleDot
                  })
                : null,
            r,
            !T &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(b.ZP, {
                        primaryGuild: n.primaryGuild,
                        userId: l.author.id,
                        contextGuildId: _,
                        className: v.clanTagChiplet,
                        profileViewedAnalytics: H
                    })
                }),
            null != $ ? (0, i.jsx)(i.Fragment, { children: $ }) : null,
            null == Y || T ? null : Y,
            null != l && (0, h.f)(l) && W && F ? (0, i.jsx)(N, {}) : null
        ]
    });
}
