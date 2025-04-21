n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(201895),
    c = n(933557),
    u = n(482798),
    d = n(788858),
    f = n(170187),
    _ = n(388032),
    p = n(843280);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { channel: t, textVariant: n, textClassName: i, iconClassName: h, hideText: g = !1, hideTooltip: b = !1 } = e,
        y = (0, s.vjg)(s.Skl.ONLINE),
        v = (0, c.ZP)(t),
        O = t.isDM() || t.isGroupDM(),
        { enabled: I } = (0, u.C)({ location: 'VoiceActivityStatus' }),
        S = () =>
            b || O
                ? (0, r.jsx)(d.Z, {
                      size: 'custom',
                      color: y,
                      channel: t,
                      className: a()(p.icon, h)
                  })
                : (0, r.jsx)(s.ua7, {
                      text: v,
                      'aria-label': (0, l.ZP)({ channel: t }),
                      children: (e) =>
                          (0, r.jsx)(
                              d.Z,
                              E(m({}, e), {
                                  size: 'custom',
                                  color: o.Z.colors.STATUS_POSITIVE,
                                  channel: t,
                                  className: a()(p.icon, h)
                              })
                          )
                  }),
        T = () =>
            I
                ? (0, r.jsx)(f.Z, {
                      variant: n,
                      className: i,
                      children: v
                  })
                : O
                  ? (0, r.jsx)(f.Z, {
                        variant: n,
                        className: i,
                        children: _.intl.string(_.t['9FaEzs'])
                    })
                  : t.isGuildStageVoice()
                    ? (0, r.jsx)(f.Z, {
                          variant: n,
                          className: i,
                          children: _.intl.string(_.t.QygGCA)
                      })
                    : (0, r.jsx)(f.Z, {
                          variant: n,
                          className: i,
                          children: _.intl.string(_.t.msxteH)
                      });
    return (0, r.jsxs)(r.Fragment, {
        children: [S(), !g && T()]
    });
}
