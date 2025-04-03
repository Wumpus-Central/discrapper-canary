n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(239091),
    c = n(100527),
    u = n(906732),
    d = n(471445),
    p = n(884902),
    h = n(184301),
    f = n(347475),
    m = n(271383),
    g = n(594174),
    b = n(51144),
    _ = n(967128),
    C = n(981631),
    y = n(388032),
    x = n(128337);
function v(e) {
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
function j(e, t) {
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
function O(e) {
    var t, i;
    let { userId: d, channel: _ } = e,
        { analyticsLocations: C } = (0, u.ZP)(c.Z.USERNAME),
        y = (0, o.e7)([g.default], () => g.default.getUser(d)),
        O = (0, o.e7)([m.ZP], () => (null != d ? m.ZP.getMember(_.guild_id, d) : null)),
        E = (0, p.E)(_.guild_id, null == O ? void 0 : O.colorStrings);
    function N(e) {
        if (null == y) return null;
        (0, s.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
            return (t) =>
                (0, r.jsx)(
                    e,
                    j(v({}, t), {
                        user: y,
                        guildId: _.guild_id,
                        channel: _
                    })
                );
        });
    }
    let I = null != (i = null != (t = null == O ? void 0 : O.nick) ? t : b.ZP.getName(y)) ? i : '???',
        P = null == O ? void 0 : O.colorString;
    return null == y
        ? (0, r.jsx)('span', {
              className: l()(x.threadCreatorName, x.unknownCreatorName),
              children: I
          })
        : (0, r.jsx)(u.Gt, {
              value: C,
              children: (0, r.jsx)(a.yRy, {
                  preload: () =>
                      (0, h.Z)(y, {
                          guildId: _.guild_id,
                          channelId: _.id
                      }),
                  renderPopout: (e) =>
                      (0, r.jsx)(
                          f.Z,
                          v(
                              {
                                  userId: y.id,
                                  guildId: _.guild_id,
                                  channelId: _.id,
                                  roleId: null == O ? void 0 : O.colorRoleId
                              },
                              e
                          )
                      ),
                  position: 'right',
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          a.P3F,
                          j(v({}, e), {
                              tag: 'span',
                              className: x.threadCreatorName,
                              onContextMenu: N,
                              children: (0, r.jsx)(a.PUh, {
                                  name: I,
                                  color: null != P ? P : void 0,
                                  roleGradient: E
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
                  (0, r.jsx)(a.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: (0, r.jsx)('div', {
                          className: x.subtitle,
                          children: y.NW.format(y.t.imPXd3, {
                              usernameHook: (e, n) =>
                                  (0, r.jsx)(
                                      O,
                                      {
                                          userId: t.ownerId,
                                          channel: t
                                      },
                                      n
                                  )
                          })
                      })
                  }),
                  t.type === C.d4z.PRIVATE_THREAD
                      ? (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: y.NW.string(y.t['1awbZG'])
                        })
                      : null
              ]
          });
}
function N(e) {
    var t;
    let { channel: n } = e,
        i = null != (t = (0, d.KS)(n)) ? t : a.or_;
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
