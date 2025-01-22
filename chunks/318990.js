r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(518950),
    d = r(357355),
    f = r(388032),
    p = r(910153);
function h() {
    let e = (0, l.e7)([d.Z], () => d.Z.affinities.slice(0, 3)),
        n = e[0],
        { avatarSrc: r, eventHandlers: o } = (0, c.Z)({
            user: n,
            size: u.AvatarSizes.SIZE_24,
            animateOnHover: !0
        }),
        h = (e) => (null != e.globalName ? e.globalName : e.username),
        _ = a.useMemo(() => (e.length >= 2 ? f.intl.formatToPlainString(f.t.c7ETJC, { username: h(e[0]) }) : 1 === e.length ? f.intl.formatToPlainString(f.t.dpjXPD, { username: h(e[0]) }) : ''), [e]);
    return 0 === e.length
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  (0, i.jsx)(u.Avatar, {
                      className: p.__invalid_icon,
                      src: r,
                      'aria-label': n.username,
                      size: u.AvatarSizes.SIZE_24,
                      ...o
                  }),
                  (0, i.jsx)(u.Text, {
                      className: s()(p.text),
                      variant: 'text-sm/normal',
                      color: 'always-white',
                      children: _
                  })
              ]
          });
}
