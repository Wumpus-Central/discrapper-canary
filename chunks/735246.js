n.d(t, { T: () => d }), n(47120);
var i = n(200651),
    r = n(232713),
    a = n(442837),
    s = n(241601),
    o = n(406128),
    l = n(706454),
    u = n(388032),
    c = n(534773);
function d(e) {
    let { children: t } = e,
        n = (0, a.e7)([l.default], () => l.default.locale),
        [d, f] = (0, s.R_)((e) => [e.isLoading, e.error], r.X);
    return null != f
        ? (0, i.jsx)(o.Z, {
              title: u.intl.formatToPlainString(u.t['7basa2'], { locale: n }),
              note: (0, i.jsx)('span', { children: f.message })
          })
        : d
          ? __OVERLAY__
              ? null
              : (0, i.jsx)('div', { className: c.loading })
          : null != t
            ? t
            : null;
}
