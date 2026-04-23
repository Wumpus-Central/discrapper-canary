n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(534514),
    s = n(834730),
    r = n(825484),
    o = n(821609),
    c = n(399925),
    d = n(237607),
    u = n(985018),
    h = n(280508);
function m(e) {
    let { onOpenClips: t, lastClipsSession: n, closePopout: m } = e;
    return (l.useEffect(
        () => () => {
            (0, c.jA)();
        },
        [],
    ),
    null == n)
        ? null
        : (0, i.jsxs)("div", {
              className: h.WG,
              children: [
                  (0, i.jsx)("div", { className: h.Yt, children: (0, i.jsx)(d.A, {}) }),
                  (0, i.jsx)(a.D, {
                      className: h.wx,
                      color: "text-strong",
                      variant: "heading-md/extrabold",
                      children: u.intl.format(u.t["+qxkzC"], { count: n.newClipIds.length }),
                  }),
                  (0, i.jsx)(s.E, {
                      color: "text-default",
                      className: h.__invalid_content,
                      variant: "text-sm/medium",
                      children: u.intl.format(u.t["7XX0/X"], { applicationName: n.applicationName }),
                  }),
                  (0, i.jsx)("div", {
                      className: h.NC,
                      children: (0, i.jsxs)(r.e, {
                          children: [
                              (0, i.jsx)(o.$, {
                                  variant: "secondary",
                                  text: u.intl.string(u.t["7r5Z19"]),
                                  onClick: function () {
                                      (0, c.Mt)(!1), m();
                                  },
                              }),
                              (0, i.jsx)(o.$, { variant: "primary", text: u.intl.string(u.t.md4qKz), onClick: t }),
                          ],
                      }),
                  }),
              ],
          });
}
