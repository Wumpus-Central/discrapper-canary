n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(100527),
    d = n(906732),
    p = n(471445),
    h = n(884902),
    f = n(670188),
    m = n(271383),
    g = n(594174),
    b = n(51144),
    _ = n(967128),
    y = n(981631),
    C = n(388032),
    x = n(128337);
function v(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function O(e, t) {
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
function j(e) {
    var t, l;
    let { userId: p, channel: _ } = e,
        y = i.useRef(null),
        { analyticsLocations: C } = (0, d.ZP)(u.Z.USERNAME),
        j = (0, a.e7)([g.default], () => g.default.getUser(p)),
        E = (0, a.e7)([m.ZP], () => (null != p ? m.ZP.getMember(_.guild_id, p) : null)),
        S = (0, h.X7)(_.guild_id, null != p ? p : void 0, null == E ? void 0 : E.colorStrings);
    function I(e) {
        if (null == j) return null;
        (0, c.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
            return (t) =>
                (0, r.jsx)(
                    e,
                    O(v({}, t), {
                        user: j,
                        guildId: _.guild_id,
                        channel: _
                    })
                );
        });
    }
    let P = null != (l = null != (t = null == E ? void 0 : E.nick) ? t : b.ZP.getName(j)) ? l : '???',
        Z = null == E ? void 0 : E.colorString;
    return null == j
        ? (0, r.jsx)('span', {
              className: o()(x.threadCreatorName, x.unknownCreatorName),
              children: P
          })
        : (0, r.jsx)(d.Gt, {
              value: C,
              children: (0, r.jsx)(f.Z, {
                  targetElementRef: y,
                  user: j,
                  guildId: _.guild_id,
                  channelId: _.id,
                  roleId: null == E ? void 0 : E.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          s.P3F,
                          O(v({}, e), {
                              innerRef: y,
                              tag: 'span',
                              className: x.threadCreatorName,
                              onContextMenu: I,
                              children: (0, r.jsx)(s.PUh, {
                                  name: P,
                                  color: null != Z ? Z : void 0,
                                  roleColors: S
                              })
                          })
                      )
              })
          });
}
function E(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)('div', { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: (0, r.jsx)('div', {
                          className: x.subtitle,
                          children: C.intl.format(C.t.imPXd3, {
                              usernameHook: (e, n) =>
                                  (0, r.jsx)(
                                      j,
                                      {
                                          userId: t.ownerId,
                                          channel: t
                                      },
                                      n
                                  )
                          })
                      })
                  }),
                  t.type === y.d4z.PRIVATE_THREAD
                      ? (0, r.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: C.intl.string(C.t['1awbZG'])
                        })
                      : null
              ]
          });
}
function S(e) {
    var t;
    let { channel: n } = e,
        i = null != (t = (0, p.KS)(n)) ? t : s.or_;
    return (0, r.jsxs)(_.ZP, {
        channelId: n.id,
        children: [
            (0, r.jsx)('div', {
                className: x.iconWrapper,
                children: (0, r.jsx)(i, { className: x.icon })
            }),
            (0, r.jsx)(_.Ot, { children: n.name }),
            (0, r.jsx)(E, { channel: n })
        ]
    });
}
