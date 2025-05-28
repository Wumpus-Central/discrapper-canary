n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(518950),
    o = n(357355),
    c = n(388032),
    u = n(356883);
function d() {
    let e = (0, l.e7)([o.Z], () => o.Z.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: n, eventHandlers: d } = (0, s.Z)({
            user: t,
            size: a.EFr.SIZE_24,
            animateOnHover: !0
        }),
        m = (e) => (null != e.globalName ? e.globalName : e.username),
        C = i.useMemo(() => (e.length >= 2 ? c.intl.formatToPlainString(c.t.c7ETJC, { username: m(e[0]) }) : 1 === e.length ? c.intl.formatToPlainString(c.t.dpjXPD, { username: m(e[0]) }) : ''), [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)('div', {
              className: u.container,
              children: [
                  (0, r.jsx)(
                      a.qEK,
                      (function (e) {
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
                      })(
                          {
                              className: u.__invalid_icon,
                              src: n,
                              'aria-label': t.username,
                              size: a.EFr.SIZE_24
                          },
                          d
                      )
                  ),
                  (0, r.jsx)(a.Text, {
                      className: u.text,
                      variant: 'text-sm/normal',
                      color: 'always-white',
                      children: C
                  })
              ]
          });
}
