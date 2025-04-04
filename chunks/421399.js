r.d(t, {
    Z: () => k,
    a: () => E
});
var n,
    o = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    c = r(873546),
    s = r(442837),
    u = r(481060),
    m = r(607070),
    p = r(100527),
    d = r(906732),
    f = r(385499),
    b = r(979264),
    y = r(372900),
    g = r(142375),
    O = r(477747),
    v = r(477734),
    h = r(823415),
    j = r(754047),
    x = r(184301),
    P = r(670188),
    S = r(768581),
    N = r(463396),
    T = r(981631),
    w = r(848697);
function R(e) {
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
function C(e, t) {
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
var E = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function Z(e) {
    let { compact: t } = e;
    return (0, o.jsx)(f.Z, {
        className: t ? w.botTagCompact : w.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function k(e) {
    var t;
    let r,
        { author: n, message: i, channel: f, userOverride: E, compact: k = !1, withMentionPrefix: I = !1, showPopout: A = !1, className: _, onClick: L, onContextMenu: M, onPopoutRequestClose: D, renderPopout: F, renderRemixTag: G = !1, decorations: B } = e,
        z = l.useRef(null),
        U = l.useContext(y.Z),
        H = null != (t = null == f ? void 0 : f.guild_id) ? t : U,
        { analyticsLocations: W } = (0, d.ZP)(p.Z.USERNAME),
        q = I ? '@' : '',
        { nick: J, colorString: X, colorStrings: V, colorRoleName: Y } = n,
        $ = null != i.messageReference && null != i.webhookId && i.hasFlag(T.iLy.IS_CROSSPOST),
        Q = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        K = 'username' === Q,
        ee = (0, v.X$)(),
        et = (0, O.Z)(H, 'BaseUsername'),
        er = K && et && null != V && null != V.primaryColor && null != V.secondaryColor,
        en = (0, g.N)(null == V ? void 0 : V.primaryColor, null == V ? void 0 : V.secondaryColor, null == V ? void 0 : V.tertiaryColor),
        { text: eo, gradient: el } = er
            ? en
            : {
                  text: {},
                  gradient: {}
              },
        ei = {
            className: a()([w.username, er && eo.gradientClassName, er && el.gradientClassName]),
            style: (() => {
                if (K) return er && null != V ? R({}, eo.gradientStyle) : null != X ? { color: X } : void 0;
            })(),
            onClick: L,
            onContextMenu: M,
            children: q + J,
            'data-text': q + J
        };
    function ea(e) {
        let t = null != E ? E : i.author;
        return (0, x.Z)(
            t.id,
            null != n.guildMemberAvatar && null != H
                ? (0, S.JM)({
                      guildId: H,
                      userId: t.id,
                      avatar: n.guildMemberAvatar,
                      size: 80
                  })
                : t.getAvatarURL(H, 80),
            {
                guildId: H,
                channelId: i.channel_id,
                abortSignal: e
            }
        );
    }
    let ec = l.useMemo(
            () =>
                k
                    ? (0, o.jsx)(b.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: i.author.id,
                          contextGuildId: H,
                          className: w.clanTagChiplet
                      })
                    : null,
            [k, n.primaryGuild, H, i.author.id]
        ),
        es = (0, h.nT)({ location: 'BaseUsername' }),
        {
            showPopoutFromHover: eu,
            onRequestClose: em,
            onMouseEnter: ep,
            onMouseLeave: ed
        } = (0, j.Z)({
            shouldShowPopoutOnHover: es,
            handlePreload: ea
        });
    if (null != F && null != A) {
        let e = null != E ? E : i.author,
            t = (0, o.jsx)(P.Z, {
                targetElementRef: z,
                user: e,
                renderPopout: F,
                shouldShow: A || eu,
                preload: ea,
                shouldPreload: !$ && !A && !eu,
                position: c.tq ? 'window_center' : 'right',
                onRequestClose: () => {
                    null == em || em(), null == D || D();
                },
                clickTrap: A,
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
                                        l = Object.keys(e);
                                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                            }
                            return o;
                        })(e, ['onClick']);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(
                                u.P3F,
                                C(
                                    R(
                                        {
                                            tag: 'span',
                                            innerRef: z
                                        },
                                        r,
                                        ei
                                    ),
                                    { className: a()(ei.className, w.clickable, _) }
                                )
                            ),
                            ec
                        ]
                    });
                }
            });
        r = es
            ? (0, o.jsx)('div', {
                  className: w.hoverable,
                  onMouseEnter: ep,
                  onMouseLeave: ed,
                  children: t
              })
            : t;
    } else
        r = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(u.P3F, C(R({}, ei), { className: a()(ei.className, _) })), ec]
        });
    let ef = null != B ? B[0] : null,
        eb = null != B ? B[1] : null;
    return (0, o.jsxs)(d.Gt, {
        value: W,
        children: [
            null != ef && k
                ? (0, o.jsxs)(o.Fragment, {
                      children: [' ', ef, ' ']
                  })
                : null,
            'dot' === Q
                ? (0, o.jsx)(u.FhE, {
                      color: X,
                      name: Y,
                      className: w.roleDot
                  })
                : null,
            r,
            !k &&
                (0, o.jsx)(b.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: i.author.id,
                    contextGuildId: H,
                    className: w.clanTagChiplet
                }),
            null != eb ? eb : null,
            null == ef || k ? null : ef,
            null != i && (0, N.f)(i) && ee && G ? (0, o.jsx)(Z, {}) : null
        ]
    });
}
