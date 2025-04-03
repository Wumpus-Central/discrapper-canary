n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(607070),
    a = n(43267),
    s = n(933557),
    c = n(641360),
    u = n(266076),
    d = n(769409),
    p = n(518311),
    h = n(518950),
    f = n(967128),
    m = n(388032),
    g = n(906667);
function b(e) {
    let { channel: t } = e;
    return (0, c.I3)('EmptyMessages')
        ? (0, r.jsxs)('div', {
              className: g.buttonContainer,
              children: [
                  (0, r.jsx)(l.zxk, {
                      size: l.PhG.MEDIUM,
                      onClick: () => (0, d.B)(t.id),
                      className: g.button,
                      children: m.NW.string(m.t['5Q9+/P'])
                  }),
                  (0, r.jsx)(p.l, {
                      className: g.button,
                      channel: t
                  })
              ]
          })
        : null;
}
function _(e) {
    var t, n, c;
    let { channel: d, children: p, user: m } = e,
        g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        _ = null != (t = (0, s.ZP)(d)) ? t : '',
        {
            avatarDecorationSrc: C,
            eventHandlers: y,
            isAnimating: x
        } = (0, h.Z)({
            user: m,
            size: l.EFr.SIZE_80,
            animateOnHover: !0
        });
    return (0, r.jsxs)(
        f.ZP,
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
        })({ channelId: d.id }, y)),
        (c = c =
            {
                children: [
                    (() => {
                        let e = !g && x;
                        return d.isMultiUserDM()
                            ? (0, r.jsx)(u.Z, {
                                  channel: d,
                                  size: l.EFr.SIZE_80,
                                  experimentLocation: 'empty_messages',
                                  animated: e,
                                  'aria-label': _
                              })
                            : (0, r.jsx)(l.qEK, {
                                  'aria-label': _,
                                  size: l.EFr.SIZE_80,
                                  src: (0, a.x)(d, 80, e),
                                  avatarDecoration: C
                              });
                    })(),
                    (0, r.jsx)(f.Ot, { children: _ }),
                    (0, r.jsx)(f.jz, { children: p }),
                    d.isMultiUserDM() && (0, r.jsx)(b, { channel: d })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(c))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(c)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(c, e));
              }),
        n)
    );
}
