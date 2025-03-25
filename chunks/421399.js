r.d(t, {
    Z: () => I,
    a: () => R
}),
    r(47120);
var n,
    i = r(200651),
    o = r(192379),
    l = r(120356),
    a = r.n(l),
    c = r(873546),
    s = r(442837),
    u = r(481060),
    m = r(493773),
    p = r(607070),
    d = r(100527),
    f = r(906732),
    b = r(385499),
    y = r(979264),
    g = r(372900),
    O = r(477734),
    j = r(823415),
    h = r(184301),
    v = r(768581),
    x = r(463396),
    P = r(981631),
    S = r(228168),
    T = r(432957);
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
var R = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function E(e) {
    let { compact: t } = e;
    return (0, i.jsx)(b.Z, {
        className: t ? T.botTagCompact : T.botTagCozy,
        type: b.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function I(e) {
    var t;
    let r,
        { author: n, message: l, channel: b, userOverride: R, compact: I = !1, withMentionPrefix: C = !1, showPopout: k = !1, className: A, onClick: Z, onContextMenu: _, onPopoutRequestClose: D, renderPopout: F, renderRemixTag: L = !1, decorations: M } = e,
        G = o.useContext(g.Z),
        B = null !== (t = null == b ? void 0 : b.guild_id) && void 0 !== t ? t : G,
        { analyticsLocations: z } = (0, f.ZP)(d.Z.USERNAME),
        { nick: U, colorString: W, colorRoleName: H } = n,
        J = null != l.messageReference && null != l.webhookId && l.hasFlag(P.iLy.IS_CROSSPOST),
        X = (0, s.e7)([p.Z], () => p.Z.roleStyle),
        V = (0, O.X$)(),
        Y = {
            className: T.username,
            style: 'username' === X && null != W ? { color: W } : void 0,
            onClick: Z,
            onContextMenu: _,
            children: (C ? '@' : '') + U
        };
    function $() {
        let e = null != R ? R : l.author;
        return (0, h.Z)(
            e.id,
            null != n.guildMemberAvatar && null != B
                ? (0, v.JM)({
                      guildId: B,
                      userId: e.id,
                      avatar: n.guildMemberAvatar,
                      size: 80
                  })
                : e.getAvatarURL(B, 80),
            {
                guildId: B,
                channelId: l.channel_id
            }
        );
    }
    let q = o.useMemo(
            () =>
                I
                    ? (0, i.jsx)(y.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: l.author.id,
                          contextGuildId: B,
                          className: T.clanTagChiplet
                      })
                    : null,
            [I, n.primaryGuild, B, l.author.id]
        ),
        Q = (0, j.nT)({ location: 'BaseUsername' }),
        [K, ee] = o.useState(!1),
        et = o.useRef(void 0),
        er = o.useRef(void 0),
        en = o.useRef(void 0);
    (0, m.ZP)(() => () => {
        clearTimeout(et.current), clearTimeout(er.current), clearTimeout(en.current);
    });
    let ei = o.useRef(!1);
    if (null != F && null != k) {
        let e = (0, i.jsx)(u.yRy, {
            preload: J ? void 0 : $,
            renderPopout: F,
            shouldShow: k || K,
            position: c.tq ? 'window_center' : 'right',
            onRequestClose: D,
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
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                        }
                        return i;
                    })(e, ['onClick']);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u.P3F, N(w({ tag: 'span' }, r, Y), { className: a()(Y.className, T.clickable, A) })), q]
                });
            }
        });
        r = Q
            ? (0, i.jsx)('div', {
                  className: T.hoverable,
                  onMouseEnter: () => {
                      Q &&
                          ((ei.current = !0),
                          (et.current = setTimeout(() => {
                              ei.current && $();
                          }, S.a6)),
                          (er.current = setTimeout(() => {
                              ei.current && ee(!0);
                          }, S.JX)));
                  },
                  onMouseLeave: () => {
                      Q &&
                          ((ei.current = !1),
                          (en.current = setTimeout(() => {
                              ei.current || ee(!1);
                          }, S.Ig)));
                  },
                  children: e
              })
            : e;
    } else
        r = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.P3F, N(w({}, Y), { className: a()(Y.className, A) })), q]
        });
    let eo = null != M ? M[0] : null,
        el = null != M ? M[1] : null;
    return (0, i.jsxs)(f.Gt, {
        value: z,
        children: [
            null != eo && I
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', eo, ' ']
                  })
                : null,
            'dot' === X
                ? (0, i.jsx)(u.FhE, {
                      color: W,
                      name: H,
                      className: T.roleDot
                  })
                : null,
            r,
            !I &&
                (0, i.jsx)(y.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: l.author.id,
                    contextGuildId: B,
                    className: T.clanTagChiplet
                }),
            null != el ? el : null,
            null == eo || I ? null : eo,
            null != l && (0, x.f)(l) && V && L ? (0, i.jsx)(E, {}) : null
        ]
    });
}
