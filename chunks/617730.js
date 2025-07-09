n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(973616),
    s = n(131704),
    a = n(598077),
    o = n(411198),
    c = n(230224),
    u = n(258356),
    d = n(981631),
    h = n(388032),
    p = n(15282);
function g(e) {
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
function m(e, t) {
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
let f = (e) => {
    let { state: t } = e;
    switch (t) {
        case d.r2o.ACCEPTING:
        case d.r2o.APP_OPENING:
            return !0;
        default:
            return !1;
    }
};
function _(e) {
    let { invite: t, onAcceptInvite: n, disableUser: _ = !1 } = e;
    if (null == t) return null;
    let x = null != t.guild ? (0, o.Qs)(t.guild) : null,
        b = null != t.channel ? (0, s.jD)(t.channel) : null,
        E = null != t.target_application ? new l.ZP(t.target_application) : null,
        v = _ || null == t.inviter ? null : new a.Z(t.inviter),
        I = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != x && x.features.has(d.oNc.COMMUNITY))) && null != v && (0, c.WT)(t),
        j = f(t),
        O = {
            invite: t,
            user: v,
            guild: x,
            channel: b,
            application: E
        };
    return (0, c.JI)(t)
        ? (0, r.jsx)(u.Z, {
              invite: t,
              channel: b,
              isSubmitting: j,
              onAcceptInvite: n
          })
        : (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(c.GB, {
                      application: E,
                      guild: x,
                      user: I || (0, c.X7)(t) ? v : null
                  }),
                  (0, c.X7)(t) ? null : (0, r.jsx)(c.jq, m(g({}, O), { showBigUserIcon: I })),
                  (0, r.jsx)(c.UM, m(g({}, O), { showBigUserIcon: I })),
                  (0, r.jsx)(c.V6, g({}, O)),
                  (0, r.jsx)(i.zx, {
                      onClick: n,
                      submitting: j,
                      className: p.acceptButton,
                      children: h.intl.string(h.t.ohMvm5)
                  })
              ]
          });
}
