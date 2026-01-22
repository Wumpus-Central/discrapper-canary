n.d(t, {
    WW: () => f,
    Y$: () => p,
    t$: () => h,
});
var r = n(735438),
    i = n.n(r),
    l = n(933958),
    a = n(969151),
    s = n(287809),
    o = n(403362),
    c = n(562153),
    u = n(639621),
    d = n(613057);

function p() {
    let e = l.Ay.getCurrentEmbeddedActivity();
    if (null == e)
        return {
            participants: [],
        };
    let t = (0, a.D)(e.location),
        n = (0, a.H)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            var r, i;
            let l = s.default.getUser(e);
            if (null == l) return;
            let a = (0, c.tJ)(t, n, l);
            return (
                (r = (function (e) {
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
                })({}, (0, u.A)(l))),
                (i = i =
                    {
                        nickname: null != a ? a : void 0,
                    }),
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
        }).filter(o.Vq),
    };
}
let f = {
        [d.sm.ANY]: [d.VH],
    },
    h = {
        scope: f,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = p();
            return i().isEqual(r, t) || n(r), r;
        },
    };
