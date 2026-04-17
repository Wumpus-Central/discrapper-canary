r.d(t, { A: () => d });
var n = r(627968),
    i = r(64700),
    a = r(397927),
    s = r(854627),
    l = r(848245),
    o = r(985018),
    c = r(666237);
function d() {
    let e = (0, l.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: r, eventHandlers: d } = (0, s.A)({ userId: t?.id, size: a._3J.SIZE_24, animateOnHover: !0 }),
        u = (e) => (null != e.globalName ? e.globalName : e.username),
        m = i.useMemo(
            () =>
                e.length >= 2
                    ? o.intl.formatToPlainString(o.t.c7ETJH, { username: u(e[0]) })
                    : 1 === e.length
                      ? o.intl.formatToPlainString(o.t.dpjXPL, { username: u(e[0]) })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, n.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, n.jsx)(a.euF, {
                      className: c.__invalid_icon,
                      src: r,
                      "aria-label": t.username,
                      size: a._3J.SIZE_24,
                      ...d,
                  }),
                  (0, n.jsx)(a.Text, {
                      className: c.Qq,
                      variant: "text-sm/normal",
                      color: "always-white",
                      children: m,
                  }),
              ],
          });
}
