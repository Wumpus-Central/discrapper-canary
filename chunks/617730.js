n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(973616),
    a = n(131704),
    l = n(601964),
    s = n(598077),
    c = n(230224),
    u = n(258356),
    d = n(981631),
    h = n(388032),
    p = n(447251);
function _(e) {
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
function g(e, t) {
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
function m(e) {
    let { invite: t, onAcceptInvite: n, disableUser: m = !1 } = e;
    if (null == t) return null;
    let b = null != t.guild ? new l.ZP(t.guild) : null,
        N = null != t.channel ? (0, a.jD)(t.channel) : null,
        x = null != t.target_application ? new o.ZP(t.target_application) : null,
        v = m || null == t.inviter ? null : new s.Z(t.inviter),
        E = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != b && b.hasFeature(d.oNc.COMMUNITY))) && null != v && (0, c.WT)(t),
        I = f(t),
        O = {
            invite: t,
            user: v,
            guild: b,
            channel: N,
            application: x
        };
    return (0, c.JI)(t)
        ? (0, r.jsx)(u.Z, {
              invite: t,
              channel: N,
              isSubmitting: I,
              onAcceptInvite: n
          })
        : (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(c.GB, {
                      application: x,
                      guild: b,
                      user: E || (0, c.X7)(t) ? v : null
                  }),
                  (0, c.X7)(t) ? null : (0, r.jsx)(c.jq, g(_({}, O), { showBigUserIcon: E })),
                  (0, r.jsx)(c.UM, g(_({}, O), { showBigUserIcon: E })),
                  (0, r.jsx)(c.V6, _({}, O)),
                  (0, r.jsx)(i.zxk, {
                      onClick: n,
                      submitting: I,
                      className: p.acceptButton,
                      children: h.NW.string(h.t.ohMvm5)
                  })
              ]
          });
}
