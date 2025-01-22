c.d(t, {
    Z: function () {
        return b;
    }
});
var e = c(200651),
    a = c(192379),
    d = c(120356),
    s = c.n(d),
    o = c(53691),
    i = c(378879),
    f = c(981631),
    p = c(486324),
    r = c(388032),
    A = c(173318);
function b(n) {
    let { uploadType: t, className: c, ...d } = n,
        b = a.useCallback(() => {
            (0, i.openProfileUpsellModal)(t, void 0);
        }, [t]),
        u = a.useMemo(() => {
            switch (t) {
                case p.pC.AVATAR:
                    return r.intl.format(r.t['pvw/HB'], { onClick: b });
                case p.pC.BANNER:
                    return r.intl.format(r.t.aCrz1d, { onClick: b });
                default:
                    return '';
            }
        }, [t, b]);
    return t === p.pC.AVATAR || t === p.pC.BANNER
        ? (0, e.jsx)(o.p, {
              text: u,
              button: r.intl.string(r.t.BmJkbW),
              buttonAnalyticsObject: { section: f.jXE.USER_PROFILE },
              className: s()(A.container, c),
              ...d
          })
        : null;
}
