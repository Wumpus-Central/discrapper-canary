r.d(t, {
    Z: () => E,
    a: () => C
}),
    r(388685);
var n,
    l = r(255367),
    o = r(73800),
    i = r(120356),
    a = r.n(i),
    c = r(873546),
    s = r(442837),
    u = r(865672),
    m = r(481060),
    p = r(607070),
    d = r(100527),
    f = r(906732),
    b = r(385499),
    y = r(372900),
    O = r(172751),
    g = r(477747),
    j = r(477734),
    v = r(670188),
    h = r(768581),
    x = r(585483),
    P = r(463396),
    S = r(935910),
    N = r(981631),
    T = r(848697);
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
var C = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function A(e) {
    let { compact: t } = e;
    return (0, l.jsx)(b.Z, {
        className: t ? T.botTagCompact : T.botTagCozy,
        type: b.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function E(e) {
    var t;
    let { author: r, message: n, channel: i, userOverride: b, compact: C = !1, withMentionPrefix: E = !1, showPopout: Z = !1, className: I, onClick: k, onContextMenu: M, onPopoutRequestClose: _, renderPopout: D, renderRemixTag: L = !1, decorations: F, previewGuildId: G, subscribeToGroupId: B } = e,
        z = o.useRef(null),
        [U, H] = o.useState(!1),
        V = o.useContext(y.Z),
        J = null != (t = null == i ? void 0 : i.guild_id) ? t : V,
        { analyticsLocations: X } = (0, f.ZP)(d.Z.USERNAME),
        Y = E ? '@' : '',
        { nick: W, colorString: $, colorStrings: q, colorRoleName: K } = r,
        Q = (0, s.e7)([p.Z], () => p.Z.roleStyle),
        ee = 'username' === Q,
        et = (0, j.X$)(),
        er = (0, g.Z)(null != G ? G : J, 'BaseUsername'),
        en = (0, S.Z)(n),
        el = er && null != q && null != q.primaryColor && null != q.secondaryColor,
        eo = ee && el;
    o.useEffect(() => {
        if (null != B && eo) return x.S.subscribeKeyed(N.LPv.ANIMATE_CHAT_AVATAR, ''.concat(B, ':').concat(n.author.id), H), () => void x.S.unsubscribeKeyed(N.LPv.ANIMATE_CHAT_AVATAR, ''.concat(B, ':').concat(n.author.id), H);
    }, [n.author.id, B, eo]);
    let { gradientStyle: ei, gradientClassname: ea } = (0, m.Icv)({
            primaryColor: null == q ? void 0 : q.primaryColor,
            secondaryColor: null == q ? void 0 : q.secondaryColor,
            tertiaryColor: null == q ? void 0 : q.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null != B && U
        }),
        ec = (0, u.EJ)(Y + W),
        es = {
            className: a()([T.username, eo && ea]),
            style: (() => {
                if (ee) return eo && null != q ? R(w({}, ei), { textDecorationColor: null == q ? void 0 : q.primaryColor }) : null != $ ? { color: $ } : void 0;
            })(),
            onClick: k,
            onContextMenu: M,
            children: ec,
            'data-text': Y + W
        },
        eu = o.useMemo(
            () =>
                C
                    ? (0, l.jsx)(O.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: J,
                          className: T.clanTagChiplet
                      })
                    : null,
            [C, r.primaryGuild, J, n.author.id]
        ),
        em = null != b ? b : n.author,
        ep =
            null != D && null != Z
                ? (0, l.jsx)(v.Z, {
                      targetElementRef: z,
                      user: em,
                      renderPopout: D,
                      shouldShow: Z,
                      shouldPreload: en,
                      position: c.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != r.guildMemberAvatar && null != J
                              ? (0, h.JM)({
                                    guildId: J,
                                    userId: em.id,
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
                                      m.P3F,
                                      R(
                                          w(
                                              {
                                                  tag: 'span',
                                                  innerRef: z
                                              },
                                              r,
                                              es
                                          ),
                                          { className: a()(es.className, T.clickable, I) }
                                      )
                                  ),
                                  eu
                              ]
                          });
                      }
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(m.P3F, R(w({}, es), { className: a()(es.className, I) })), eu]
                  }),
        ed = null != F ? F[0] : null,
        ef = null != F ? F[1] : null;
    return (0, l.jsxs)(f.Gt, {
        value: X,
        children: [
            null != ed && C
                ? (0, l.jsxs)(l.Fragment, {
                      children: [' ', ed, ' ']
                  })
                : null,
            'dot' === Q
                ? (0, l.jsx)(m.FhE, {
                      color: $,
                      colors: el ? q : null,
                      name: K,
                      className: T.roleDot
                  })
                : null,
            ep,
            !C &&
                (0, l.jsx)(O.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: J,
                    className: T.clanTagChiplet
                }),
            null != ef ? ef : null,
            null == ed || C ? null : ed,
            null != n && (0, P.f)(n) && et && L ? (0, l.jsx)(A, {}) : null
        ]
    });
}
