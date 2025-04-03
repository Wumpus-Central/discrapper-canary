n.d(t, { Z: () => E });
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
    p = n(184301),
    h = n(347475),
    f = n(271383),
    m = n(594174),
    g = n(51144),
    b = n(967128),
    _ = n(981631),
    C = n(388032),
    y = n(128337);
function x(e) {
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
function v(e, t) {
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
    var t, i;
    let { userId: d, channel: b } = e,
        { analyticsLocations: _ } = (0, u.ZP)(c.Z.USERNAME),
        C = (0, o.e7)([m.default], () => m.default.getUser(d)),
        j = (0, o.e7)([f.ZP], () => (null != d ? f.ZP.getMember(b.guild_id, d) : null));
    function O(e) {
        if (null == C) return null;
        (0, s.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
            return (t) =>
                (0, r.jsx)(
                    e,
                    v(x({}, t), {
                        user: C,
                        guildId: b.guild_id,
                        channel: b
                    })
                );
        });
    }
    let E = null != (i = null != (t = null == j ? void 0 : j.nick) ? t : g.ZP.getName(C)) ? i : '???',
        N = null == j ? void 0 : j.colorString;
    return null == C
        ? (0, r.jsx)('span', {
              className: l()(y.threadCreatorName, y.unknownCreatorName),
              children: E
          })
        : (0, r.jsx)(u.Gt, {
              value: _,
              children: (0, r.jsx)(a.yRy, {
                  preload: () =>
                      (0, p.Z)(C, {
                          guildId: b.guild_id,
                          channelId: b.id
                      }),
                  renderPopout: (e) =>
                      (0, r.jsx)(
                          h.Z,
                          x(
                              {
                                  userId: C.id,
                                  guildId: b.guild_id,
                                  channelId: b.id,
                                  roleId: null == j ? void 0 : j.colorRoleId
                              },
                              e
                          )
                      ),
                  position: 'right',
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          a.P3F,
                          v(x({}, e), {
                              tag: 'span',
                              className: y.threadCreatorName,
                              onContextMenu: O,
                              children: (0, r.jsx)(a.PUh, {
                                  name: E,
                                  color: null != N ? N : void 0
                              })
                          })
                      )
              })
          });
}
function O(e) {
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
                          className: y.subtitle,
                          children: C.NW.format(C.t.imPXd3, {
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
                  t.type === _.d4z.PRIVATE_THREAD
                      ? (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: C.NW.string(C.t['1awbZG'])
                        })
                      : null
              ]
          });
}
function E(e) {
    var t;
    let { channel: n } = e,
        i = null != (t = (0, d.KS)(n)) ? t : a.or_;
    return (0, r.jsxs)(b.ZP, {
        channelId: n.id,
        children: [
            (0, r.jsx)('div', {
                className: y.iconWrapper,
                children: (0, r.jsx)(i, { className: y.icon })
            }),
            (0, r.jsx)(b.Ot, { children: n.name }),
            (0, r.jsx)(O, { channel: n })
        ]
    });
}
