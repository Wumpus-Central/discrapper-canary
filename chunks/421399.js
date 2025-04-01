n.d(t, {
    Z: () => E,
    a: () => R
});
var r,
    o = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    c = n(873546),
    s = n(442837),
    u = n(481060),
    m = n(607070),
    p = n(100527),
    d = n(906732),
    f = n(385499),
    b = n(979264),
    y = n(372900),
    g = n(477734),
    O = n(823415),
    j = n(754047),
    v = n(184301),
    h = n(768581),
    x = n(463396),
    P = n(981631),
    S = n(373232);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var R = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
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
    let n,
        { author: r, message: l, channel: f, userOverride: R, compact: E = !1, withMentionPrefix: C = !1, showPopout: I = !1, className: k, onClick: Z, onContextMenu: A, onPopoutRequestClose: _, renderPopout: M, renderRemixTag: D = !1, decorations: L } = e,
        F = i.useRef(null),
        G = i.useContext(y.Z),
        B = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : G,
        { analyticsLocations: z } = (0, d.ZP)(p.Z.USERNAME),
        { nick: U, colorString: H, colorRoleName: W } = r,
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
    function Y(e) {
        let t = null != R ? R : l.author;
        return (0, v.Z)(
            t.id,
            null != r.guildMemberAvatar && null != B
                ? (0, h.JM)({
                      guildId: B,
                      userId: t.id,
                      avatar: r.guildMemberAvatar,
                      size: 80
                  })
                : t.getAvatarURL(B, 80),
            {
                guildId: B,
                channelId: l.channel_id,
                abortSignal: e
            }
        );
    }
    let $ = i.useMemo(
            () =>
                E
                    ? (0, o.jsx)(b.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: l.author.id,
                          contextGuildId: B,
                          className: S.clanTagChiplet
                      })
                    : null,
            [E, r.primaryGuild, B, l.author.id]
        ),
        Q = (0, O.nT)({ location: 'BaseUsername' }),
        {
            showPopoutFromHover: K,
            onRequestClose: ee,
            onMouseEnter: et,
            onMouseLeave: en
        } = (0, j.Z)({
            shouldShowPopoutOnHover: Q,
            handlePreload: Y
        });
    if (null != M && null != I) {
        let e = (0, o.jsx)(u.yRy, {
            targetElementRef: F,
            preload: q || I || K ? void 0 : Y,
            renderPopout: M,
            shouldShow: I || K,
            position: c.tq ? 'window_center' : 'right',
            onRequestClose: () => {
                null == ee || ee(), null == _ || _();
            },
            clickTrap: I,
            children: (e) => {
                var { onClick: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
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
                                    n,
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
        n = Q
            ? (0, o.jsx)('div', {
                  className: S.hoverable,
                  onMouseEnter: et,
                  onMouseLeave: en,
                  children: e
              })
            : e;
    } else
        n = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(u.P3F, w(T({}, V), { className: a()(V.className, k) })), $]
        });
    let er = null != L ? L[0] : null,
        eo = null != L ? L[1] : null;
    return (0, o.jsxs)(d.Gt, {
        value: z,
        children: [
            null != er && E
                ? (0, o.jsxs)(o.Fragment, {
                      children: [' ', er, ' ']
                  })
                : null,
            'dot' === J
                ? (0, o.jsx)(u.FhE, {
                      color: H,
                      name: W,
                      className: S.roleDot
                  })
                : null,
            n,
            !E &&
                (0, o.jsx)(b.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: l.author.id,
                    contextGuildId: B,
                    className: S.clanTagChiplet
                }),
            null != eo ? eo : null,
            null == er || E ? null : er,
            null != l && (0, x.f)(l) && X && D ? (0, o.jsx)(N, {}) : null
        ]
    });
}
