n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(973616),
    o = n(131704),
    s = n(598077),
    a = n(411198),
    c = n(230224),
    u = n(258356),
    d = n(981631),
    h = n(388032),
    f = n(292660);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
function m(e) {
    let { invite: t, onAcceptInvite: n, disableUser: m = !1 } = e;
    if (null == t) return null;
    let _ = null != t.guild ? (0, a.Qs)(t.guild) : null,
        x = null != t.channel ? (0, o.jD)(t.channel) : null,
        v = null != t.target_application ? new l.ZP(t.target_application) : null,
        E = m || null == t.inviter ? null : new s.Z(t.inviter),
        b =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > c.mx) ||
                (null != _ && _.features.has(d.oNc.COMMUNITY))
            ) &&
            null != E &&
            (0, c.WT)(t),
        j = ((e) => {
            let { state: t } = e;
            switch (t) {
                case d.r2o.ACCEPTING:
                case d.r2o.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        I = {
            invite: t,
            user: E,
            guild: _,
            channel: x,
            application: v,
        };
    return (0, c.JI)(t)
        ? (0, r.jsx)(u.Z, {
              invite: t,
              channel: x,
              isSubmitting: j,
              onAcceptInvite: n,
          })
        : (0, r.jsxs)("div", {
              className: f.container,
              children: [
                  (0, r.jsx)(c.GB, {
                      application: v,
                      guild: _,
                      user: b || (0, c.X7)(t) ? E : null,
                  }),
                  (0, c.X7)(t) ? null : (0, r.jsx)(c.jq, g(p({}, I), { showBigUserIcon: b })),
                  (0, r.jsx)(c.UM, g(p({}, I), { showBigUserIcon: b })),
                  (0, r.jsx)(c.V6, p({}, I)),
                  (0, r.jsx)(i.zx, {
                      onClick: n,
                      submitting: j,
                      className: f.acceptButton,
                      children: h.intl.string(h.t.ohMvm5),
                  }),
              ],
          });
}
