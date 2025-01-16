r.d(n, {
    T: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(232713),
    o = r(442837),
    l = r(241601),
    u = r(406128),
    c = r(706454),
    d = r(388032),
    f = r(232833);
function _(e) {
    let { children: n } = e,
        r = (0, o.e7)([c.default], () => c.default.locale),
        [i, _] = (0, l.R_)((e) => [e.isLoading, e.error], s.X);
    return null != _
        ? (0, a.jsx)(u.Z, {
              title: d.intl.formatToPlainString(d.t['7basa2'], { locale: r }),
              note: (0, a.jsx)('span', { children: _.message })
          })
        : i
          ? __OVERLAY__
              ? null
              : (0, a.jsx)('div', { className: f.loading })
          : null != n
            ? n
            : null;
}
