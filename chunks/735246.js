n.d(t, { T: () => d }), n(47120);
var r = n(200651),
    i = n(788347),
    o = n(442837),
    a = n(241601),
    s = n(406128),
    l = n(706454),
    c = n(388032),
    u = n(665903);
function d(e) {
    let { children: t } = e,
        n = (0, o.e7)([l.default], () => l.default.locale),
        [d, f] = (0, a.R_)((e) => [e.isLoading, e.error], i.X);
    return null != f
        ? (0, r.jsx)(s.Z, {
              title: c.NW.formatToPlainString(c.t['7basa2'], { locale: n }),
              note: (0, r.jsx)('span', { children: f.message })
          })
        : d
          ? __OVERLAY__
              ? null
              : (0, r.jsx)('div', { className: u.loading })
          : null != t
            ? t
            : null;
}
