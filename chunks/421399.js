n.d(t, {
    Z: () => Z,
    a: () => C
});
var r,
    o = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    c = n(873546),
    s = n(442837),
    u = n(481060),
    m = n(607070),
    p = n(100527),
    d = n(906732),
    f = n(385499),
    b = n(979264),
    y = n(372900),
    g = n(142375),
    O = n(477747),
    v = n(477734),
    j = n(823415),
    h = n(754047),
    x = n(184301),
    P = n(768581),
    S = n(463396),
    N = n(981631),
    R = n(848697);
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
var C = (((r = {})[(r.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (r[(r.BADGES = 1)] = 'BADGES'), r);
function E(e) {
    let { compact: t } = e;
    return (0, o.jsx)(f.Z, {
        className: t ? R.botTagCompact : R.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function Z(e) {
    var t;
    let n,
        { author: r, message: i, channel: f, userOverride: C, compact: Z = !1, withMentionPrefix: k = !1, showPopout: I = !1, className: A, onClick: _, onContextMenu: L, onPopoutRequestClose: M, renderPopout: D, renderRemixTag: F = !1, decorations: G } = e,
        B = l.useRef(null),
        z = l.useContext(y.Z),
        U = null != (t = null == f ? void 0 : f.guild_id) ? t : z,
        { analyticsLocations: H } = (0, d.ZP)(p.Z.USERNAME),
        W = k ? '@' : '',
        { nick: q, colorString: J, colorStrings: X, colorRoleName: V } = r,
        Y = null != i.messageReference && null != i.webhookId && i.hasFlag(N.iLy.IS_CROSSPOST),
        $ = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        Q = 'username' === $,
        K = (0, v.X$)(),
        ee = (0, O.Z)(U, 'BaseUsername'),
        et = Q && ee && null != X && null != X.primaryColor && null != X.secondaryColor,
        en = (0, g.N)(null == X ? void 0 : X.primaryColor, null == X ? void 0 : X.secondaryColor, null == X ? void 0 : X.tertiaryColor),
        { text: er, gradient: eo } = et
            ? en
            : {
                  text: {},
                  gradient: {}
              },
        el = {
            className: a()([R.username, et && er.gradientClassName, et && eo.gradientClassName]),
            style: (() => {
                if (Q) return et && null != X ? T({}, er.gradientStyle) : null != J ? { color: J } : void 0;
            })(),
            onClick: _,
            onContextMenu: L,
            children: W + q,
            'data-text': W + q
        };
    function ei(e) {
        let t = null != C ? C : i.author;
        return (0, x.Z)(
            t.id,
            null != r.guildMemberAvatar && null != U
                ? (0, P.JM)({
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
    let ea = l.useMemo(
            () =>
                Z
                    ? (0, o.jsx)(b.ZP, {
                          primaryGuild: r.primaryGuild,
                          userId: i.author.id,
                          contextGuildId: U,
                          className: R.clanTagChiplet
                      })
                    : null,
            [Z, r.primaryGuild, U, i.author.id]
        ),
        ec = (0, j.nT)({ location: 'BaseUsername' }),
        {
            showPopoutFromHover: es,
            onRequestClose: eu,
            onMouseEnter: em,
            onMouseLeave: ep
        } = (0, h.Z)({
            shouldShowPopoutOnHover: ec,
            handlePreload: ei
        });
    if (null != D && null != I) {
        let e = (0, o.jsx)(u.yRy, {
            targetElementRef: B,
            preload: Y || I || es ? void 0 : ei,
            renderPopout: D,
            shouldShow: I || es,
            position: c.tq ? 'window_center' : 'right',
            onRequestClose: () => {
                null == eu || eu(), null == M || M();
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
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
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
                                        innerRef: B
                                    },
                                    n,
                                    el
                                ),
                                { className: a()(el.className, R.clickable, A) }
                            )
                        ),
                        ea
                    ]
                });
            }
        });
        n = ec
            ? (0, o.jsx)('div', {
                  className: R.hoverable,
                  onMouseEnter: em,
                  onMouseLeave: ep,
                  children: e
              })
            : e;
    } else
        n = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(u.P3F, w(T({}, el), { className: a()(el.className, A) })), ea]
        });
    let ed = null != G ? G[0] : null,
        ef = null != G ? G[1] : null;
    return (0, o.jsxs)(d.Gt, {
        value: H,
        children: [
            null != ed && Z
                ? (0, o.jsxs)(o.Fragment, {
                      children: [' ', ed, ' ']
                  })
                : null,
            'dot' === $
                ? (0, o.jsx)(u.FhE, {
                      color: J,
                      name: V,
                      className: R.roleDot
                  })
                : null,
            n,
            !Z &&
                (0, o.jsx)(b.ZP, {
                    primaryGuild: r.primaryGuild,
                    userId: i.author.id,
                    contextGuildId: U,
                    className: R.clanTagChiplet
                }),
            null != ef ? ef : null,
            null == ed || Z ? null : ed,
            null != i && (0, S.f)(i) && K && F ? (0, o.jsx)(E, {}) : null
        ]
    });
}
