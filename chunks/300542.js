n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(854627),
    l = n(560138),
    c = n(985018),
    u = n(521512);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p() {
    let e = (0, a.bG)([l.A], () => l.A.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: n, eventHandlers: d } = (0, o.A)({
            userId: null == t ? void 0 : t.id,
            size: s._3J.SIZE_24,
            animateOnHover: !0,
        }),
        p = (e) => (null != e.globalName ? e.globalName : e.username),
        _ = i.useMemo(
            () =>
                e.length >= 2
                    ? c.intl.formatToPlainString(c.t.c7ETJH, { username: p(e[0]) })
                    : 1 === e.length
                      ? c.intl.formatToPlainString(c.t.dpjXPL, { username: p(e[0]) })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: u.kL,
              children: [
                  (0, r.jsx)(
                      s.euF,
                      f(
                          {
                              className: u.__invalid_icon,
                              src: n,
                              "aria-label": t.username,
                              size: s._3J.SIZE_24,
                          },
                          d,
                      ),
                  ),
                  (0, r.jsx)(s.Text, {
                      className: u.Qq,
                      variant: "text-sm/normal",
                      color: "always-white",
                      children: _,
                  }),
              ],
          });
}
