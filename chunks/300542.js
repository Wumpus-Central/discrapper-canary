i.d(t, { A: () => m });
var r = i(627968),
    n = i(64700),
    s = i(311907),
    a = i(397927),
    l = i(854627),
    o = i(560138),
    c = i(985018),
    d = i(521512);
function m() {
    let e = (0, s.bG)([o.A], () => o.A.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: i, eventHandlers: m } = (0, l.A)({ userId: t?.id, size: a._3J.SIZE_24, animateOnHover: !0 }),
        u = (e) => (null != e.globalName ? e.globalName : e.username),
        x = n.useMemo(
            () =>
                e.length >= 2
                    ? c.intl.formatToPlainString(c.t.c7ETJH, { username: u(e[0]) })
                    : 1 === e.length
                      ? c.intl.formatToPlainString(c.t.dpjXPL, { username: u(e[0]) })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.kL,
              children: [
                  (0, r.jsx)(a.euF, {
                      className: d.__invalid_icon,
                      src: i,
                      "aria-label": t.username,
                      size: a._3J.SIZE_24,
                      ...m,
                  }),
                  (0, r.jsx)(a.Text, {
                      className: d.Qq,
                      variant: "text-sm/normal",
                      color: "always-white",
                      children: x,
                  }),
              ],
          });
}
