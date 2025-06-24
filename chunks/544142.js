n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
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
    x = n(388032),
    C = n(128337);
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
    var t, l;
    let { userId: p, channel: _ } = e,
        y = i.useRef(null),
        { analyticsLocations: x } = (0, d.ZP)(u.Z.USERNAME),
        O = (0, o.e7)([g.default], () => g.default.getUser(p)),
        E = (0, o.e7)([m.ZP], () => (null != p ? m.ZP.getMember(_.guild_id, p) : null)),
        I = (0, h.X)(_.guild_id, null == E ? void 0 : E.colorStrings, 'ThreadEmptyMessage');
    function S(e) {
        if (null == O) return null;
        (0, c.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
            return (t) =>
                (0, r.jsx)(
                    e,
                    j(v({}, t), {
                        user: O,
                        guildId: _.guild_id,
                        channel: _
                    })
                );
        });
    }
    let P = null != (l = null != (t = null == E ? void 0 : E.nick) ? t : b.ZP.getName(O)) ? l : '???',
        Z = null == E ? void 0 : E.colorString;
    return null == O
        ? (0, r.jsx)('span', {
              className: a()(C.threadCreatorName, C.unknownCreatorName),
              children: P
          })
        : (0, r.jsx)(d.Gt, {
              value: x,
              children: (0, r.jsx)(f.Z, {
                  targetElementRef: y,
                  user: O,
                  guildId: _.guild_id,
                  channelId: _.id,
                  roleId: null == E ? void 0 : E.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          s.P3F,
                          j(v({}, e), {
                              innerRef: y,
                              tag: 'span',
                              className: C.threadCreatorName,
                              onContextMenu: S,
                              children: (0, r.jsx)(s.PUh, {
                                  name: P,
                                  color: null != Z ? Z : void 0,
                                  roleColors: I
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
                          className: C.subtitle,
                          children: x.intl.format(x.t.imPXd3, {
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
                  t.type === y.d4z.PRIVATE_THREAD
                      ? (0, r.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: x.intl.string(x.t['1awbZG'])
                        })
                      : null
              ]
          });
}
function I(e) {
    var t;
    let { channel: n } = e,
        i = null != (t = (0, p.KS)(n)) ? t : s.or_;
    return (0, r.jsxs)(_.ZP, {
        channelId: n.id,
        children: [
            (0, r.jsx)('div', {
                className: C.iconWrapper,
                children: (0, r.jsx)(i, { className: C.icon })
            }),
            (0, r.jsx)(_.Ot, { children: n.name }),
            (0, r.jsx)(E, { channel: n })
        ]
    });
}
