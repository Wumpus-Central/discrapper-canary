n.d(t, {
    Z: () => B,
    a: () => U
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(573385),
    u = n(865672),
    d = n(481060),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(385499),
    m = n(821795),
    g = n(892567),
    E = n(7284),
    b = n(372900),
    y = n(172751),
    O = n(606318),
    v = n(402235),
    I = n(477734),
    T = n(670188),
    S = n(485386),
    A = n(768581),
    N = n(585483),
    C = n(463396),
    w = n(935910),
    R = n(981631),
    P = n(848697);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            }));
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = M(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
var U = (function (e) {
    return ((e[(e.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (e[(e.BADGES = 1)] = 'BADGES'), e);
})({});
function G(e) {
    let { compact: t } = e;
    return (0, r.jsx)(h.Z, {
        className: t ? P.botTagCompact : P.botTagCozy,
        type: h.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function B(e) {
    var t;
    let { author: n, message: a, channel: h, userOverride: D, compact: x = !1, withMentionPrefix: M = !1, showPopout: U = !1, hideGuildTag: B = !1, hideSystemTag: Z = !1, className: F, onClick: V, onContextMenu: H, onPopoutRequestClose: Y, renderPopout: W, renderRemixTag: K = !1, decorations: z, previewGuildId: q, subscribeToGroupId: $ } = e,
        X = i.useRef(null),
        Q = i.useContext(b.Z),
        J = null != (t = null == h ? void 0 : h.guild_id) ? t : Q,
        { analyticsLocations: ee } = (0, p.ZP)(_.Z.USERNAME),
        et = M ? '@' : '',
        { nick: en, colorString: er, colorStrings: ei, colorRoleName: ea, displayNameStyles: eo } = n,
        es = (0, l.e7)([f.Z], () => f.Z.roleStyle),
        el = 'username' === es,
        ec = 'dot' === es,
        eu = (0, I.X$)(),
        ed = (0, E.j)({ displayNameStyles: eo }),
        ef = (0, l.e7)([S.Z], () => (null == n.guildId || null == n.colorRoleId ? null : S.Z.getRole(n.guildId, n.colorRoleId))),
        e_ = (0, v.yH)(null != q ? q : J, ef),
        ep = (0, w.Z)(a),
        eh = i.useContext(c.d),
        em = e_ && (0, O.S2)(n),
        eg = el && em;
    i.useEffect(() => {
        if (null == $ || !eg || null == eh) return;
        let { setAnimate: e } = eh;
        return (N.S.subscribeKeyed(R.LPv.ANIMATE_CHAT_AVATAR, ''.concat($, ':').concat(a.author.id), e), () => void N.S.unsubscribeKeyed(R.LPv.ANIMATE_CHAT_AVATAR, ''.concat($, ':').concat(a.author.id), e));
    }, [a.author.id, $, eg, eh]);
    let { gradientStyle: eE, gradientClassname: eb } = (0, d.Icv)({
            colorStrings: ei,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: null == eh ? void 0 : eh.animate
        }),
        ey = () => {
            if (el) {
                if (eg && null != ei) {
                    var e;
                    return k(L({}, eE), { textDecorationColor: null != (e = null == ei ? void 0 : ei.primaryColor) ? e : void 0 });
                }
                return null != er ? { color: er } : void 0;
            }
        },
        eO = (0, u.EJ)(et + en),
        ev = (null == h ? void 0 : h.isPrivate()) && null != eo,
        eI = {
            className: o()([P.username, eg && eb, ed]),
            style: ey(),
            onClick: V,
            onContextMenu: H,
            children: ev
                ? (0, r.jsx)(g.Z, {
                      userName: eO,
                      displayNameStyles: eo,
                      effectDisplayType: m.F.PLAIN,
                      loop: !0
                  })
                : eO,
            'data-text': et + en
        },
        eT = i.useMemo(
            () =>
                x && !B
                    ? (0, r.jsx)(y.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: a.author.id,
                          contextGuildId: J,
                          className: P.clanTagChiplet
                      })
                    : null,
            [x, n.primaryGuild, J, a.author.id, B]
        ),
        eS = null != D ? D : a.author,
        eA =
            null != W && null != U
                ? (0, r.jsx)(T.Z, {
                      targetElementRef: X,
                      user: eS,
                      renderPopout: W,
                      shouldShow: U,
                      shouldPreload: ep,
                      position: s.tq ? 'window_center' : 'right',
                      avatarUrl:
                          null != n.guildMemberAvatar && null != J
                              ? (0, A.JM)({
                                    guildId: J,
                                    userId: eS.id,
                                    avatar: n.guildMemberAvatar,
                                    size: 80
                                })
                              : void 0,
                      onRequestClose: Y,
                      clickTrap: U,
                      children: (e) => {
                          var { onClick: t } = e,
                              n = j(e, ['onClick']);
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(
                                      d.P3F,
                                      k(
                                          L(
                                              {
                                                  tag: 'span',
                                                  innerRef: X
                                              },
                                              n,
                                              eI
                                          ),
                                          { className: o()(eI.className, P.clickable, F) }
                                      )
                                  ),
                                  eT
                              ]
                          });
                      }
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(d.P3F, k(L({}, eI), { className: o()(eI.className, F) })), eT]
                  }),
        eN = null != z ? z[0] : null,
        eC = null != z ? z[1] : null;
    return (0, r.jsxs)(p.Gt, {
        value: ee,
        children: [
            null != eN && !Z && x
                ? (0, r.jsxs)(r.Fragment, {
                      children: [' ', eN, ' ']
                  })
                : null,
            ec
                ? (0, r.jsx)(d.FhE, {
                      color: er,
                      colors: em ? ei : null,
                      name: ea,
                      className: P.roleDot,
                      hoverOverride: null == eh ? void 0 : eh.animate
                  })
                : null,
            eA,
            !x &&
                !B &&
                (0, r.jsx)(y.ZP, {
                    primaryGuild: n.primaryGuild,
                    userId: a.author.id,
                    contextGuildId: J,
                    className: P.clanTagChiplet
                }),
            null != eC ? eC : null,
            null == eN || Z || x ? null : eN,
            null != a && (0, C.f)(a) && eu && K ? (0, r.jsx)(G, {}) : null
        ]
    });
}
