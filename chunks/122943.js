n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(692547),
    o = n(481060),
    a = n(201895),
    s = n(933557),
    l = n(788858),
    c = n(170187),
    u = n(388032),
    d = n(967616);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { channel: t, textVariant: n, textClassName: f, hideText: _ = !1, hideTooltip: m = !1 } = e,
        g = (0, o.vjg)(o.Skl.ONLINE),
        E = (0, s.ZP)(t),
        v = t.isDM() || t.isGroupDM(),
        b = () =>
            m || v
                ? (0, r.jsx)(l.Z, {
                      size: 'custom',
                      color: g,
                      channel: t,
                      className: d.icon
                  })
                : (0, r.jsx)(o.ua7, {
                      text: E,
                      'aria-label': (0, a.ZP)({ channel: t }),
                      children: (e) =>
                          (0, r.jsx)(
                              l.Z,
                              h(p({}, e), {
                                  size: 'custom',
                                  color: i.Z.colors.STATUS_POSITIVE,
                                  channel: t,
                                  className: d.icon
                              })
                          )
                  }),
        y = () =>
            v
                ? (0, r.jsx)(c.Z, {
                      variant: n,
                      className: f,
                      children: u.NW.string(u.t['9FaEzs'])
                  })
                : t.isGuildStageVoice()
                  ? (0, r.jsx)(c.Z, {
                        variant: n,
                        className: f,
                        children: u.NW.string(u.t.QygGCA)
                    })
                  : (0, r.jsx)(c.Z, {
                        variant: n,
                        className: f,
                        children: u.NW.string(u.t.msxteH)
                    });
    return (0, r.jsxs)(r.Fragment, {
        children: [b(), !_ && y()]
    });
}
