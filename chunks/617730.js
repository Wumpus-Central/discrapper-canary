n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(973616),
    o = n(131704),
    l = n(601964),
    a = n(598077),
    c = n(230224),
    u = n(258356),
    d = n(981631),
    h = n(388032),
    g = n(15282);
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
    let x = null != t.guild ? new l.ZP(t.guild) : null,
        N = null != t.channel ? (0, o.jD)(t.channel) : null,
        b = null != t.target_application ? new s.ZP(t.target_application) : null,
        E = _ || null == t.inviter ? null : new a.Z(t.inviter),
        v = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != x && x.hasFeature(d.oNc.COMMUNITY))) && null != E && (0, c.WT)(t),
        j = f(t),
        I = {
            invite: t,
            user: E,
            guild: x,
            channel: N,
            application: b
        };
    return (0, c.JI)(t)
        ? (0, r.jsx)(u.Z, {
              invite: t,
              channel: N,
              isSubmitting: j,
              onAcceptInvite: n
          })
        : (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(c.GB, {
                      application: b,
                      guild: x,
                      user: v || (0, c.X7)(t) ? E : null
                  }),
                  (0, c.X7)(t) ? null : (0, r.jsx)(c.jq, m(p({}, I), { showBigUserIcon: v })),
                  (0, r.jsx)(c.UM, m(p({}, I), { showBigUserIcon: v })),
                  (0, r.jsx)(c.V6, p({}, I)),
                  (0, r.jsx)(i.zxk, {
                      onClick: n,
                      submitting: j,
                      className: g.acceptButton,
                      children: h.NW.string(h.t.ohMvm5)
                  })
              ]
          });
}
