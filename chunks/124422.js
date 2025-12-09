n.d(e, { Z: () => b });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    u = n(516191),
    c = n(430104),
    a = n(924301),
    s = n(658041),
    d = n(554747),
    g = n(981631),
    f = n(388032);
function b(t, e, b) {
    var p;
    let { canManageGuildEvent: v } = (0, o.XJ)(null != b ? b : e),
        E = (0, r.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(t), [t]),
        y = v(E),
        O = null != (0, d.qY)(null != (p = null == b ? void 0 : b.id) ? p : g.lds),
        P = null != E && (0, a.xt)(E),
        Z = (0, c.to)() && (0, s.s)(E);
    if (!y || !(!P && !O)) return null;
    function h() {
        null != E &&
            (0, i.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("84722"), n.e("14531")]).then(n.bind(n, 296864));
                return (e) => {
                    var n, r;
                    return (0, l.jsx)(
                        t,
                        ((n = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (e) {
                                        var l;
                                        (l = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = l);
                                    });
                            }
                            return t;
                        })({}, e)),
                        (r = r = { event: E }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (t) {
                                  Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
                              }),
                        n),
                    );
                };
            });
    }
    return (0, l.jsx)(i.sNh, {
        id: f.intl.string(f.t.cK1GGY),
        label: f.intl.string(f.t.cK1GGY),
        action: Z
            ? function () {
                  null != E && (0, u.Z)(h);
              }
            : h,
    });
}
