n.d(t, {
    Z: () => Z,
    a: () => C
});
var r,
    l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(607070),
    m = n(100527),
    p = n(906732),
    f = n(385499),
    g = n(979264),
    b = n(372900),
    y = n(142375),
    O = n(477747),
    v = n(477734),
    h = n(823415),
    j = n(754047),
    x = n(184301),
    S = n(768581),
    P = n(463396),
    N = n(981631),
    w = n(848697);
function R(e) {
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
function T(e, t) {
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
var C = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
function E(e) {
    let { compact: t } = e;
    return (0, l.jsx)(f.Z, {
        className: t ? w.botTagCompact : w.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function Z(e) {
    var t;
    let n,
        { author: r, message: i, channel: f, userOverride: C, compact: Z = !1, withMentionPrefix: k = !1, showPopout: I = !1, className: A, onClick: _, onContextMenu: L, onPopoutRequestClose: M, renderPopout: D, renderRemixTag: F = !1, decorations: G } = e,
        B = o.useRef(null),
        z = o.useContext(b.Z),
        U = null != (t = null == f ? void 0 : f.guild_id) ? t : z,
        { analyticsLocations: H } = (0, p.ZP)(m.Z.USERNAME),
        W = k ? '@' : '',
        { nick: q, colorString: J, colorStrings: X, colorRoleName: V } = r,
        Y = null != i.messageReference && null != i.webhookId && i.hasFlag(N.iLy.IS_CROSSPOST),
        $ = (0, c.e7)([d.Z], () => d.Z.roleStyle),
        Q = 'username' === $,
        K = (0, v.X$)(),
        ee = (0, O.Z)(U, 'BaseUsername'),
        et = Q && ee && null != X && null != X.primaryColor && null != X.secondaryColor,
        en = (0, y.N)(null == X ? void 0 : X.primaryColor, null == X ? void 0 : X.secondaryColor, null == X ? void 0 : X.tertiaryColor),
        {
            text: er,
            glow: el,
            gradient: eo
        } = et
            ? en
            : {
                  text: {},
                  glow: {},
                  gradient: {}
              },
        ei = {
            className: a()([w.username, et && er.gradientClassName, et && eo.gradientClassName]),
            style: (() => {
                if (Q) return et && null != X ? R({}, er.gradientStyle) : null != J ? { color: J } : void 0;
            })(),
            onClick: _,
            onContextMenu: L,
            children: W + q
        },
        ea = {
            className: a()([el.gradientClassName, eo.gradientClassName]),
            style: T(R({}, el.gradientStyle), { inset: 0 })
        };
    function es(e) {
        let t = null != C ? C : i.author;
        return (0, x.Z)(
            t.id,
            null != r.guildMemberAvatar && null != U
                ? (0, S.JM)({
                      guildId: U,
                      userId: t.id,
                      avatar: r.guildMemberAvatar,
                      size: 80
                  })
                : t.getAvatarURL(U, 80),
            {
                guildId: U,
                channelId: i.channel_id,
                abortSignal: e
            }
        );
    }
    let ec = o.useMemo(
            () =>
                Z
                    ? (0, l.jsx)(g.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: i.author.id,
                          contextGuildId: U,
                          className: w.clanTagChiplet
                      })
                    : null,
            [Z, r.primaryGuild, U, i.author.id]
        ),
        eu = (0, h.nT)({ location: 'BaseUsername' }),
        {
            showPopoutFromHover: ed,
            onRequestClose: em,
            onMouseEnter: ep,
            onMouseLeave: ef
        } = (0, j.Z)({
            shouldShowPopoutOnHover: eu,
            handlePreload: es
        });
    if (null != D && null != I) {
        let e = (0, l.jsx)(u.yRy, {
            targetElementRef: B,
            preload: Y || I || ed ? void 0 : es,
            renderPopout: D,
            shouldShow: I || ed,
            position: s.tq ? 'window_center' : 'right',
            onRequestClose: () => {
                null == em || em(), null == M || M();
            },
            clickTrap: I,
            children: (e) => {
                var { onClick: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                return l;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        }
                        return l;
                    })(e, ['onClick']);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(
                            u.P3F,
                            T(
                                R(
                                    {
                                        tag: 'span',
                                        innerRef: B
                                    },
                                    n,
                                    ei
                                ),
                                { className: a()(ei.className, w.clickable, A) }
                            )
                        ),
                        et && (0, l.jsx)('span', T(R({}, ea), { children: W + q })),
                        ec
                    ]
                });
            }
        });
        n = eu
            ? (0, l.jsx)('div', {
                  className: w.hoverable,
                  onMouseEnter: ep,
                  onMouseLeave: ef,
                  children: e
              })
            : e;
    } else
        n = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(u.P3F, T(R({}, ei), { className: a()(ei.className, A) })), et && (0, l.jsx)('span', T(R({}, ea), { children: W + q })), ec]
        });
    let eg = null != G ? G[0] : null,
        eb = null != G ? G[1] : null;
    return (0, l.jsxs)(p.Gt, {
        value: H,
        children: [
            null != eg && Z
                ? (0, l.jsxs)(l.Fragment, {
                      children: [' ', eg, ' ']
                  })
                : null,
            'dot' === $
                ? (0, l.jsx)(u.FhE, {
                      color: J,
                      name: V,
                      className: w.roleDot
                  })
                : null,
            n,
            !Z &&
                (0, l.jsx)(g.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: i.author.id,
                    contextGuildId: U,
                    className: w.clanTagChiplet
                }),
            null != eb ? eb : null,
            null == eg || Z ? null : eg,
            null != i && (0, P.f)(i) && K && F ? (0, l.jsx)(E, {}) : null
        ]
    });
}
