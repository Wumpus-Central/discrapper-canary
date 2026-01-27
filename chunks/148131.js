n.d(t, {
    w: () => A,
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(417597),
    o = n(397927),
    c = n(287809),
    d = n(53719),
    u = n(390370),
    _ = n(191627),
    p = n(842130),
    m = n(985018),
    g = n(487693);

function A(e) {
    let { user: t } = e,
        l = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        A = i.useCallback(() => {
            s()(void 0 !== l, "User must be logged in to accept a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("43139").then(n.bind(n, 179950));
                    return (n) => {
                        var i, s;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (s = s =
                                {
                                    currentUser: l,
                                    otherUser: t,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            i),
                        );
                    };
                });
        }, [l, t]);
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [
            (0, r.jsx)("div", {
                className: g.zH,
                children: (0, r.jsx)(u.A, {
                    otherUser: t,
                    status: _.Ef.ACTIVE,
                }),
            }),
            (0, r.jsx)("div", {
                className: g.o1,
                children: (0, r.jsx)(d.A, {
                    icon: o.PGe,
                    tooltip: m.intl.string(p.default.l20ZZp),
                    onClick: A,
                }),
            }),
        ],
    });
}
