n.d(t, {
    DB: () => p,
    TR: () => u,
    dG: () => m,
    jL: () => h,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var l = n(323125),
    a = n(311907),
    r = n(976860),
    i = n(961350),
    s = n(287809),
    c = n(954571),
    o = n(310419),
    d = n(652215);

function u(e, t) {
    var n, l, a;
    let r = o.h.getField("sessionId"),
        i = o.h.getField("guildId"),
        d = null == (n = o.h.getField("entrypoint")) ? void 0 : n.name,
        u = s.default.getCurrentUser(),
        p =
            ((l = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })({}, t)),
            (a = a =
                {
                    guild_id: i,
                    directory_session_id: r,
                    source: d,
                    user_id: null == u ? void 0 : u.id,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            l);
    return c.default.track(e, p);
}

function p() {
    return (0, a.bG)([i.default], () => i.default.isAuthenticated());
}

function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let l = e[n];
        t.searchParams.set(n, l);
    }
    let n = t.pathname + t.search,
        a = (0, l.T2)(n, !1);
    (0, r.pX)(a);
}

function m() {
    let e = new URL(location.href),
        t = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
    (0, r.pX)(d.BVt.REGISTER + t);
}
