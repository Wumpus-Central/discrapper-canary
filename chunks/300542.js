r.d(t, { A: () => m });
var i = r(627968),
    n = r(64700),
    a = r(778712),
    s = r(97808),
    l = r(834730),
    o = r(854627),
    c = r(848245),
    d = r(985018),
    u = r(666237);
function m() {
    let e = (0, c.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: r, eventHandlers: m } = (0, o.A)({ userId: t?.id, size: a._3.SIZE_24, animateOnHover: !0 }),
        g = (e) => (null != e.globalName ? e.globalName : e.username),
        x = n.useMemo(
            () =>
                e.length >= 2
                    ? d.intl.formatToPlainString(d.t.c7ETJH, { username: g(e[0]) })
                    : 1 === e.length
                      ? d.intl.formatToPlainString(d.t.dpjXPL, { username: g(e[0]) })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, i.jsxs)("div", {
              className: u.kL,
              children: [
                  (0, i.jsx)(s.eu, {
                      className: u.__invalid_icon,
                      src: r,
                      "aria-label": t.username,
                      size: a._3.SIZE_24,
                      ...m,
                  }),
                  (0, i.jsx)(l.E, { className: u.Qq, variant: "text-sm/normal", color: "always-white", children: x }),
              ],
          });
}
