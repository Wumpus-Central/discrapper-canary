r.d(t, {
    Z: () => E,
    a: () => N
});
var n,
    i = r(200651),
    o = r(192379),
    l = r(120356),
    a = r.n(l),
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
    O = r(823415),
    j = r(754047),
    h = r(184301),
    v = r(768581),
    x = r(463396),
    P = r(981631),
    S = r(432957);
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
var N = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function R(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? S.botTagCompact : S.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function E(e) {
    var t;
    let r,
        { author: n, message: l, channel: f, userOverride: N, compact: E = !1, withMentionPrefix: I = !1, showPopout: C = !1, className: k, onClick: Z, onContextMenu: A, onPopoutRequestClose: _, renderPopout: D, renderRemixTag: M = !1, decorations: L } = e,
        F = o.useContext(y.Z),
        G = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : F,
        { analyticsLocations: B } = (0, d.ZP)(p.Z.USERNAME),
        { nick: z, colorString: U, colorRoleName: W } = n,
        H = null != l.messageReference && null != l.webhookId && l.hasFlag(P.iLy.IS_CROSSPOST),
        J = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        X = (0, g.X$)(),
        V = {
            className: S.username,
            style: 'username' === J && null != U ? { color: U } : void 0,
            onClick: Z,
            onContextMenu: A,
            children: (I ? '@' : '') + z
        };
    function Y() {
        let e = null != N ? N : l.author;
        return (0, h.Z)(
            e.id,
            null != n.guildMemberAvatar && null != G
                ? (0, v.JM)({
                      guildId: G,
                      userId: e.id,
                      avatar: n.guildMemberAvatar,
                      size: 80
                  })
                : e.getAvatarURL(G, 80),
            {
                guildId: G,
                channelId: l.channel_id
            }
        );
    }
    let q = o.useMemo(
            () =>
                E
                    ? (0, i.jsx)(b.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: l.author.id,
                          contextGuildId: G,
                          className: S.clanTagChiplet
                      })
                    : null,
            [E, n.primaryGuild, G, l.author.id]
        ),
        $ = (0, O.nT)({ location: 'BaseUsername' }),
        {
            showPopoutFromHover: Q,
            handleMouseEnter: K,
            handleMouseLeave: ee
        } = (0, j.Z)({
            shouldShowPopoutOnHover: $,
            handlePreload: Y
        });
    if (null != D && null != C) {
        let e = (0, i.jsx)(u.yRy, {
            preload: H ? void 0 : Y,
            renderPopout: D,
            shouldShow: C || Q,
            position: c.tq ? 'window_center' : 'right',
            onRequestClose: _,
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
                    children: [(0, i.jsx)(u.P3F, w(T({ tag: 'span' }, r, V), { className: a()(V.className, S.clickable, k) })), q]
                });
            }
        });
        r = $
            ? (0, i.jsx)('div', {
                  className: S.hoverable,
                  onMouseEnter: K,
                  onMouseLeave: ee,
                  children: e
              })
            : e;
    } else
        r = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.P3F, w(T({}, V), { className: a()(V.className, k) })), q]
        });
    let et = null != L ? L[0] : null,
        er = null != L ? L[1] : null;
    return (0, i.jsxs)(d.Gt, {
        value: B,
        children: [
            null != et && E
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', et, ' ']
                  })
                : null,
            'dot' === J
                ? (0, i.jsx)(u.FhE, {
                      color: U,
                      name: W,
                      className: S.roleDot
                  })
                : null,
            r,
            !E &&
                (0, i.jsx)(b.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: l.author.id,
                    contextGuildId: G,
                    className: S.clanTagChiplet
                }),
            null != er ? er : null,
            null == et || E ? null : et,
            null != l && (0, x.f)(l) && X && M ? (0, i.jsx)(R, {}) : null
        ]
    });
}
