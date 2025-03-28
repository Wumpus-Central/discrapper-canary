r.d(t, {
    Z: () => E,
    a: () => R
});
var n,
    o = r(200651),
    i = r(192379),
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
    v = r(184301),
    h = r(768581),
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
var R = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function N(e) {
    let { compact: t } = e;
    return (0, o.jsx)(f.Z, {
        className: t ? S.botTagCompact : S.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function E(e) {
    var t;
    let r,
        { author: n, message: l, channel: f, userOverride: R, compact: E = !1, withMentionPrefix: C = !1, showPopout: I = !1, className: k, onClick: Z, onContextMenu: A, onPopoutRequestClose: _, renderPopout: M, renderRemixTag: D = !1, decorations: L } = e,
        F = i.useRef(null),
        G = i.useContext(y.Z),
        B = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : G,
        { analyticsLocations: z } = (0, d.ZP)(p.Z.USERNAME),
        { nick: U, colorString: H, colorRoleName: W } = n,
        q = null != l.messageReference && null != l.webhookId && l.hasFlag(P.iLy.IS_CROSSPOST),
        J = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        X = (0, g.X$)(),
        V = {
            className: S.username,
            style: 'username' === J && null != H ? { color: H } : void 0,
            onClick: Z,
            onContextMenu: A,
            children: (C ? '@' : '') + U
        };
    function Y() {
        let e = null != R ? R : l.author;
        return (0, v.Z)(
            e.id,
            null != n.guildMemberAvatar && null != B
                ? (0, h.JM)({
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
    let $ = i.useMemo(
            () =>
                E
                    ? (0, o.jsx)(b.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: l.author.id,
                          contextGuildId: B,
                          className: S.clanTagChiplet
                      })
                    : null,
            [E, n.primaryGuild, B, l.author.id]
        ),
        Q = (0, O.nT)({ location: 'BaseUsername' }),
        {
            showPopoutFromHover: K,
            onRequestClose: ee,
            onMouseEnter: et,
            onMouseLeave: er
        } = (0, j.Z)({
            shouldShowPopoutOnHover: Q,
            handlePreload: Y
        });
    if (null != M && null != I) {
        let e = (0, o.jsx)(u.yRy, {
            targetElementRef: F,
            preload: q ? void 0 : Y,
            renderPopout: M,
            shouldShow: I || K,
            position: c.tq ? 'window_center' : 'right',
            onRequestClose: () => {
                null == ee || ee(), null == _ || _();
            },
            clickTrap: I,
            children: (e) => {
                var { onClick: t } = e,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                        }
                        return o;
                    })(e, ['onClick']);
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(
                            u.P3F,
                            w(
                                T(
                                    {
                                        tag: 'span',
                                        innerRef: F
                                    },
                                    r,
                                    V
                                ),
                                { className: a()(V.className, S.clickable, k) }
                            )
                        ),
                        $
                    ]
                });
            }
        });
        r = Q
            ? (0, o.jsx)('div', {
                  className: S.hoverable,
                  onMouseEnter: et,
                  onMouseLeave: er,
                  children: e
              })
            : e;
    } else
        r = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(u.P3F, w(T({}, V), { className: a()(V.className, k) })), $]
        });
    let en = null != L ? L[0] : null,
        eo = null != L ? L[1] : null;
    return (0, o.jsxs)(d.Gt, {
        value: z,
        children: [
            null != en && E
                ? (0, o.jsxs)(o.Fragment, {
                      children: [' ', en, ' ']
                  })
                : null,
            'dot' === J
                ? (0, o.jsx)(u.FhE, {
                      color: H,
                      name: W,
                      className: S.roleDot
                  })
                : null,
            r,
            !E &&
                (0, o.jsx)(b.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: l.author.id,
                    contextGuildId: B,
                    className: S.clanTagChiplet
                }),
            null != eo ? eo : null,
            null == en || E ? null : en,
            null != l && (0, x.f)(l) && X && D ? (0, o.jsx)(N, {}) : null
        ]
    });
}
