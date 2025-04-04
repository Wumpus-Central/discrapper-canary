n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(692547),
    o = n(481060),
    a = n(201895),
    s = n(933557),
    l = n(482798),
    c = n(788858),
    u = n(170187),
    d = n(388032),
    f = n(843280);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { channel: t, textVariant: n, textClassName: _, hideText: h = !1, hideTooltip: g = !1 } = e,
        E = (0, o.vjg)(o.Skl.ONLINE),
        b = (0, s.ZP)(t),
        y = t.isDM() || t.isGroupDM(),
        { enabled: v } = (0, l.C)({ location: 'VoiceActivityStatus' }),
        O = () =>
            g || y
                ? (0, r.jsx)(c.Z, {
                      size: 'custom',
                      color: E,
                      channel: t,
                      className: f.icon
                  })
                : (0, r.jsx)(o.ua7, {
                      text: b,
                      'aria-label': (0, a.ZP)({ channel: t }),
                      children: (e) =>
                          (0, r.jsx)(
                              c.Z,
                              m(p({}, e), {
                                  size: 'custom',
                                  color: i.Z.colors.STATUS_POSITIVE,
                                  channel: t,
                                  className: f.icon
                              })
                          )
                  }),
        I = () =>
            v
                ? (0, r.jsx)(u.Z, {
                      variant: n,
                      className: _,
                      children: b
                  })
                : y
                  ? (0, r.jsx)(u.Z, {
                        variant: n,
                        className: _,
                        children: d.NW.string(d.t['9FaEzs'])
                    })
                  : t.isGuildStageVoice()
                    ? (0, r.jsx)(u.Z, {
                          variant: n,
                          className: _,
                          children: d.NW.string(d.t.QygGCA)
                      })
                    : (0, r.jsx)(u.Z, {
                          variant: n,
                          className: _,
                          children: d.NW.string(d.t.msxteH)
                      });
    return (0, r.jsxs)(r.Fragment, {
        children: [O(), !h && I()]
    });
}
