r.d(t, {
    A: () => d,
});
var n = r(627968),
    i = r(64700),
    l = r(311907),
    a = r(397927),
    s = r(854627),
    o = r(560138),
    c = r(985018),
    u = r(521512);

function d() {
    let e = (0, l.bG)([o.A], () => o.A.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: r, eventHandlers: d } = (0, s.A)({
            userId: null == t ? void 0 : t.id,
            size: a._3J.SIZE_24,
            animateOnHover: !0,
        }),
        m = (e) => (null != e.globalName ? e.globalName : e.username),
        p = i.useMemo(
            () =>
                e.length >= 2
                    ? c.intl.formatToPlainString(c.t.c7ETJH, {
                          username: m(e[0]),
                      })
                    : 1 === e.length
                      ? c.intl.formatToPlainString(c.t.dpjXPL, {
                            username: m(e[0]),
                        })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, n.jsxs)("div", {
              className: u.kL,
              children: [
                  (0, n.jsx)(
                      a.euF,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })(
                          {
                              className: u.__invalid_icon,
                              src: r,
                              "aria-label": t.username,
                              size: a._3J.SIZE_24,
                          },
                          d,
                      ),
                  ),
                  (0, n.jsx)(a.Text, {
                      className: u.Qq,
                      variant: "text-sm/normal",
                      color: "always-white",
                      children: p,
                  }),
              ],
          });
}
