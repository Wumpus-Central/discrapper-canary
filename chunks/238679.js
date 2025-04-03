n.d(t, {
    KW: () => h,
    dO: () => p,
    gQ: () => f
});
var r = n(392711),
    i = n.n(r),
    l = n(317381),
    a = n(16609),
    o = n(594174),
    s = n(823379),
    c = n(5192),
    u = n(863141),
    d = n(186901);
function p() {
    let e = l.ZP.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, a.jS)(e.location),
        n = (0, a.pY)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            var r, i;
            let l = o.default.getUser(e);
            if (null == l) return;
            let a = (0, c.y)(t, n, l);
            return (
                (r = (function (e) {
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
                })({}, (0, u.Z)(l))),
                (i = i = { nickname: null != a ? a : void 0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r
            );
        }).filter(s.lm)
    };
}
let h = { [d.Gp.ANY]: [d.wE] },
    f = {
        scope: h,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = p();
            return i().isEqual(r, t) || n(r), r;
        }
    };
