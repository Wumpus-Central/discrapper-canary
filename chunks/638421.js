"use strict";
n.d(t, { N: () => u });
var i = n(627968),
    r = n(942381),
    s = n(17928),
    a = n(724066),
    o = n(721668),
    l = n(773669),
    d = n(985018),
    _ = n(201972);
function u(e) {
    let { children: t } = e,
        n = (0, s.bG)([l.default], () => l.default.locale),
        [u, c] = (0, a.hs)((e) => [e.isLoading, e.error], r.x);
    return null != c
        ? (0, i.jsx)(o.A, {
              title: d.intl.formatToPlainString(d.t["7basa2"], { locale: n }),
              note: (0, i.jsx)("span", { children: c.message }),
          })
        : u
          ? __OVERLAY__
              ? null
              : (0, i.jsx)("div", { className: _.L })
          : (t ?? null);
}
