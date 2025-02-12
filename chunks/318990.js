n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(518950),
    c = n(357355),
    d = n(388032),
    f = n(612651);
function _() {
    let e = (0, o.e7)([c.Z], () => c.Z.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: n, eventHandlers: a } = (0, u.Z)({
            user: t,
            size: l.EFr.SIZE_24,
            animateOnHover: !0
        }),
        _ = (e) => (null != e.globalName ? e.globalName : e.username),
        p = r.useMemo(() => (e.length >= 2 ? d.intl.formatToPlainString(d.t.c7ETJC, { username: _(e[0]) }) : 1 === e.length ? d.intl.formatToPlainString(d.t.dpjXPD, { username: _(e[0]) }) : ''), [e]);
    return 0 === e.length
        ? null
        : (0, i.jsxs)('div', {
              className: f.container,
              children: [
                  (0, i.jsx)(l.qEK, {
                      className: f.__invalid_icon,
                      src: n,
                      'aria-label': t.username,
                      size: l.EFr.SIZE_24,
                      ...a
                  }),
                  (0, i.jsx)(l.Text, {
                      className: s()(f.text),
                      variant: 'text-sm/normal',
                      color: 'always-white',
                      children: p
                  })
              ]
          });
}
