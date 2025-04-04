n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(518950),
    l = n(357355),
    c = n(388032),
    u = n(356883);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _() {
    let e = (0, o.e7)([l.Z], () => l.Z.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: n, eventHandlers: d } = (0, s.Z)({
            user: t,
            size: a.EFr.SIZE_24,
            animateOnHover: !0
        }),
        _ = (e) => (null != e.globalName ? e.globalName : e.username),
        p = i.useMemo(() => (e.length >= 2 ? c.NW.formatToPlainString(c.t.c7ETJC, { username: _(e[0]) }) : 1 === e.length ? c.NW.formatToPlainString(c.t.dpjXPD, { username: _(e[0]) }) : ''), [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)('div', {
              className: u.container,
              children: [
                  (0, r.jsx)(
                      a.qEK,
                      f(
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
                      children: p
                  })
              ]
          });
}
