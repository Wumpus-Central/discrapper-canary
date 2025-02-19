n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(518950),
    u = n(357355),
    d = n(388032),
    f = n(942101);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h() {
    let e = (0, s.e7)([u.Z], () => u.Z.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: n, eventHandlers: o } = (0, c.Z)({
            user: t,
            size: l.EFr.SIZE_24,
            animateOnHover: !0
        }),
        p = (e) => (null != e.globalName ? e.globalName : e.username),
        h = i.useMemo(() => (e.length >= 2 ? d.NW.formatToPlainString(d.t.c7ETJC, { username: p(e[0]) }) : 1 === e.length ? d.NW.formatToPlainString(d.t.dpjXPD, { username: p(e[0]) }) : ''), [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)('div', {
              className: f.container,
              children: [
                  (0, r.jsx)(
                      l.qEK,
                      _(
                          {
                              className: f.__invalid_icon,
                              src: n,
                              'aria-label': t.username,
                              size: l.EFr.SIZE_24
                          },
                          o
                      )
                  ),
                  (0, r.jsx)(l.Text, {
                      className: a()(f.text),
                      variant: 'text-sm/normal',
                      color: 'always-white',
                      children: h
                  })
              ]
          });
}
