n.d(t, {
    N: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(942381),
    a = n(311907),
    s = n(11057),
    o = n(721668),
    l = n(773669),
    c = n(985018),
    u = n(230661);

function d(e) {
    let { children: t } = e,
        n = (0, a.bG)([l.default], () => l.default.locale),
        [d, f] = (0, s.hs)((e) => [e.isLoading, e.error], i.x);
    return null != f
        ? (0, r.jsx)(o.A, {
              title: c.intl.formatToPlainString(c.t["7basa2"], {
                  locale: n,
              }),
              note: (0, r.jsx)("span", {
                  children: f.message,
              }),
          })
        : d
          ? __OVERLAY__
              ? null
              : (0, r.jsx)("div", {
                    className: u.L,
                })
          : null != t
            ? t
            : null;
}
