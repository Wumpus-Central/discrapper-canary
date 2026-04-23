n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(939249),
    r = n(624479),
    o = n(206845),
    d = n(957565),
    c = n(427262),
    u = n(183555),
    p = n(985018),
    h = n(962352);
function m(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: s } = (0, u.NJ)();
    return d.p5
        ? (0, i.jsx)(o.A, {
              text: p.intl.string(p.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: c.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(a.D, {
                      ...e,
                      className: l()(h.c, { [h.R]: n }),
                      "aria-label": p.intl.string(p.t.y5MwJy),
                      children: (0, i.jsx)(r.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
