t.d(n, {
    Z: function () {
        return p;
    }
});
var a = t(200651),
    i = t(192379),
    c = t(120356),
    o = t.n(c),
    s = t(53691),
    r = t(378879),
    d = t(981631),
    l = t(486324),
    u = t(388032),
    f = t(173318);
function p(e) {
    let { uploadType: n, className: t, ...c } = e,
        p = i.useCallback(() => {
            (0, r.openProfileUpsellModal)(n, void 0);
        }, [n]),
        A = i.useMemo(() => {
            switch (n) {
                case l.pC.AVATAR:
                    return u.intl.format(u.t['pvw/HB'], { onClick: p });
                case l.pC.BANNER:
                    return u.intl.format(u.t.aCrz1d, { onClick: p });
                default:
                    return '';
            }
        }, [n, p]);
    return n === l.pC.AVATAR || n === l.pC.BANNER
        ? (0, a.jsx)(s.p, {
              text: A,
              button: u.intl.string(u.t.BmJkbW),
              buttonAnalyticsObject: { section: d.jXE.USER_PROFILE },
              className: o()(f.container, t),
              ...c
          })
        : null;
}
