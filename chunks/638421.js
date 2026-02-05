"use strict";
n.d(t, { N: () => d });
var r = n(627968),
    i = n(942381),
    a = n(311907),
    s = n(11057),
    o = n(721668),
    l = n(773669),
    u = n(985018),
    c = n(230661);
function d(e) {
    let { children: t } = e,
        n = (0, a.bG)([l.default], () => l.default.locale),
        [d, _] = (0, s.hs)((e) => [e.isLoading, e.error], i.x);
    return null != _
        ? (0, r.jsx)(o.A, {
              title: u.intl.formatToPlainString(u.t["7basa2"], { locale: n }),
              note: (0, r.jsx)("span", { children: _.message }),
          })
        : d
          ? __OVERLAY__
              ? null
              : (0, r.jsx)("div", { className: c.L })
          : (t ?? null);
}
