"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(97808),
    a = n(571694),
    o = n(954376);
let l = r.memo(function (e) {
    let {
        channel: t,
        size: n,
        facepileSizeOverride: r,
        isTyping: l,
        status: u,
        className: c,
        animated: d = !1,
        ..._
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, i.jsx)(o.A, {
              "aria-label": _["aria-label"],
              "aria-hidden": _["aria-hidden"],
              className: c,
              recipients: t.recipients,
              size: r ?? n,
              isTyping: l,
              status: u,
          })
        : (0, i.jsx)(s.eu, {
              "aria-hidden": _["aria-hidden"],
              "aria-label": _["aria-label"],
              className: c,
              size: n,
              src: (0, a.Y)(t, 80, d),
          });
});
