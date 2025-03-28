r.d(t, {
    Z: () => E,
    a: () => R
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
var R = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function N(e) {
    let { compact: t } = e;
    return (0, i.jsx)(f.Z, {
        className: t ? S.botTagCompact : S.botTagCozy,
        type: f.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function E(e) {
    var t, r;
    let n,
        { author: l, message: f, channel: R, userOverride: E, compact: I = !1, withMentionPrefix: k = !1, showPopout: C = !1, className: Z, onClick: A, onContextMenu: _, onPopoutRequestClose: D, renderPopout: M, renderRemixTag: L = !1, decorations: F } = e,
        G = o.useRef(null),
        B = o.useContext(y.Z),
        z = null !== (t = null == R ? void 0 : R.guild_id) && void 0 !== t ? t : B,
        { analyticsLocations: U } = (0, d.ZP)(p.Z.USERNAME),
        { nick: W, colorString: H, colorRoleName: J } = l,
        X = null != f.messageReference && null != f.webhookId && f.hasFlag(P.iLy.IS_CROSSPOST),
        V = (0, s.e7)([m.Z], () => m.Z.roleStyle),
        Y = (0, g.X$)(),
        q = {
            className: S.username,
            style: 'username' === V && null != H ? { color: H } : void 0,
            onClick: A,
            onContextMenu: _,
            children: (k ? '@' : '') + W
        };
    function $() {
        let e = null != E ? E : f.author;
        return (0, h.Z)(
            e.id,
            null != l.guildMemberAvatar && null != z
                ? (0, v.JM)({
                      guildId: z,
                      userId: e.id,
                      avatar: l.guildMemberAvatar,
                      size: 80
                  })
                : e.getAvatarURL(z, 80),
            {
                guildId: z,
                channelId: f.channel_id
            }
        );
    }
    let Q = o.useMemo(
            () =>
                I
                    ? (0, i.jsx)(b.ZP, {
                          primaryGuild: l.primaryGuild,
                          userId: f.author.id,
                          contextGuildId: z,
                          className: S.clanTagChiplet
                      })
                    : null,
            [I, l.primaryGuild, z, f.author.id]
        ),
        K = (0, O.nT)({ location: 'BaseUsername' }),
        {
            showPopoutFromHover: ee,
            handleMouseEnter: et,
            handleMouseLeave: er
        } = (0, j.Z)({
            shouldShowPopoutOnHover: K,
            handlePreload: $
        });
    if (null != M && null != C) {
        let e = (0, i.jsx)(u.yRy, {
            targetElementRef: G,
            preload: X ? void 0 : $,
            renderPopout: M,
            shouldShow: null !== (r = C || ee) && void 0 !== r && r,
            position: c.tq ? 'window_center' : 'right',
            onRequestClose: D,
            clickTrap: C,
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
                    children: [
                        (0, i.jsx)(
                            u.P3F,
                            w(
                                T(
                                    {
                                        tag: 'span',
                                        innerRef: G
                                    },
                                    r,
                                    q
                                ),
                                { className: a()(q.className, S.clickable, Z) }
                            )
                        ),
                        Q
                    ]
                });
            }
        });
        n = K
            ? (0, i.jsx)('div', {
                  className: S.hoverable,
                  onMouseEnter: et,
                  onMouseLeave: er,
                  children: e
              })
            : e;
    } else
        n = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.P3F, w(T({}, q), { className: a()(q.className, Z) })), Q]
        });
    let en = null != F ? F[0] : null,
        ei = null != F ? F[1] : null;
    return (0, i.jsxs)(d.Gt, {
        value: U,
        children: [
            null != en && I
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', en, ' ']
                  })
                : null,
            'dot' === V
                ? (0, i.jsx)(u.FhE, {
                      color: H,
                      name: J,
                      className: S.roleDot
                  })
                : null,
            n,
            !I &&
                (0, i.jsx)(b.ZP, {
                    primaryGuild: l.primaryGuild,
                    userId: f.author.id,
                    contextGuildId: z,
                    className: S.clanTagChiplet
                }),
            null != ei ? ei : null,
            null == en || I ? null : en,
            null != f && (0, x.f)(f) && Y && L ? (0, i.jsx)(N, {}) : null
        ]
    });
}
