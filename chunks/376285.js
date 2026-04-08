n.d(t, { A: () => h });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    r = n(206845),
    o = n(957565),
    d = n(427262),
    c = n(183555),
    u = n(985018),
    m = n(127747);
function h(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: i } = (0, c.NJ)();
    return o.p5
        ? (0, a.jsx)(r.A, {
              text: u.intl.string(u.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: d.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, a.jsx)(s.DUT, {
                      ...e,
                      className: l()(m.c, { [m.R]: n }),
                      "aria-label": u.intl.string(u.t.y5MwJy),
                      children: (0, a.jsx)(s.TdU, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
