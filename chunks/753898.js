n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(607070),
    a = n(100527),
    s = n(43267),
    c = n(933557),
    u = n(641360),
    d = n(266076),
    p = n(187237),
    h = n(769409),
    f = n(518311),
    m = n(518950),
    g = n(967128),
    b = n(388032),
    _ = n(954678);
function y(e) {
    let { channel: t } = e;
    return (0, u.I3)(a.Z.EMPTY_GROUP_DM, t.id)
        ? (0, r.jsxs)('div', {
              className: _.buttonContainer,
              children: [
                  (0, r.jsx)(l.zxk, {
                      size: l.PhG.MEDIUM,
                      onClick: () => (0, h.B)(t.id, a.Z.EMPTY_GROUP_DM),
                      className: _.button,
                      children: b.NW.string(b.t['5Q9+/P'])
                  }),
                  (0, r.jsx)(f.l, {
                      className: _.button,
                      channel: t
                  })
              ]
          })
        : null;
}
function C(e) {
    var t, n, u;
    let { channel: h, children: f, user: b } = e,
        _ = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        C = null != (t = (0, c.ZP)(h)) ? t : '',
        {
            avatarDecorationSrc: x,
            eventHandlers: v,
            isAnimating: j
        } = (0, m.Z)({
            user: b,
            size: l.EFr.SIZE_80,
            animateOnHover: !0
        });
    return (0, r.jsxs)(
        g.ZP,
        ((n = (function (e) {
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
        })({ channelId: h.id }, v)),
        (u = u =
            {
                children: [
                    (() => {
                        let e = !_ && j;
                        return h.isMultiUserDM()
                            ? (0, r.jsx)(p.v, {
                                  channel: h,
                                  editable: !0,
                                  location: a.Z.EMPTY_GROUP_DM,
                                  children: (0, r.jsx)(d.Z, {
                                      channel: h,
                                      size: l.EFr.SIZE_80,
                                      experimentLocation: 'empty_messages',
                                      animated: e,
                                      'aria-label': C
                                  })
                              })
                            : (0, r.jsx)(l.qEK, {
                                  'aria-label': C,
                                  size: l.EFr.SIZE_80,
                                  src: (0, s.x)(h, 80, e),
                                  avatarDecoration: x
                              });
                    })(),
                    (0, r.jsx)(g.Ot, { children: C }),
                    (0, r.jsx)(g.jz, { children: f }),
                    h.isMultiUserDM() && (0, r.jsx)(y, { channel: h })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(u))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(u)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(u, e));
              }),
        n)
    );
}
