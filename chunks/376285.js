n.d(t, { A: () => h });
var a = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(397927),
    r = n(206845),
    o = n(957565),
    d = n(427262),
    c = n(183555),
    u = n(985018),
    m = n(609141);
function h(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: s } = (0, c.NJ)();
    return o.p5
        ? (0, a.jsx)(r.A, {
              text: u.intl.string(u.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: d.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, a.jsx)(l.DUT, {
                      ...e,
                      className: i()(m.c, { [m.R]: n }),
                      "aria-label": u.intl.string(u.t.y5MwJy),
                      children: (0, a.jsx)(l.TdU, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
