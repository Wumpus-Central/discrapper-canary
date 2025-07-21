i.d(t, { Z: () => d });
var n = i(255367),
    r = i(73800),
    l = i(442837),
    a = i(481060),
    s = i(518950),
    o = i(357355),
    c = i(388032),
    u = i(356883);
function d() {
    let e = (0, l.e7)([o.Z], () => o.Z.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: i, eventHandlers: d } = (0, s.Z)({
            userId: null == t ? void 0 : t.id,
            size: a.EFr.SIZE_24,
            animateOnHover: !0
        }),
        m = (e) => (null != e.globalName ? e.globalName : e.username),
        C = r.useMemo(() => (e.length >= 2 ? c.intl.formatToPlainString(c.t.c7ETJC, { username: m(e[0]) }) : 1 === e.length ? c.intl.formatToPlainString(c.t.dpjXPD, { username: m(e[0]) }) : ''), [e]);
    return 0 === e.length
        ? null
        : (0, n.jsxs)('div', {
              className: u.container,
              children: [
                  (0, n.jsx)(
                      a.qEK,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(i);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(i).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      ((n = i[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n));
                                  }));
                          }
                          return e;
                      })(
                          {
                              className: u.__invalid_icon,
                              src: i,
                              'aria-label': t.username,
                              size: a.EFr.SIZE_24
                          },
                          d
                      )
                  ),
                  (0, n.jsx)(a.Text, {
                      className: u.text,
                      variant: 'text-sm/normal',
                      color: 'always-white',
                      children: C
                  })
              ]
          });
}
