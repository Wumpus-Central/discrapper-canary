e.d(n, { Z: () => b });
var c = e(200651),
    a = e(192379),
    d = e(120356),
    s = e.n(d),
    o = e(53691),
    i = e(378879),
    f = e(981631),
    A = e(486324),
    p = e(388032),
    r = e(14164);
function b(t) {
    let { uploadType: n, className: e, ...d } = t,
        b = a.useCallback(() => {
            (0, i.s)(n, void 0);
        }, [n]),
        l = a.useMemo(() => {
            switch (n) {
                case A.pC.AVATAR:
                    return p.intl.format(p.t['pvw/HB'], { onClick: b });
                case A.pC.BANNER:
                    return p.intl.format(p.t.aCrz1d, { onClick: b });
                default:
                    return '';
            }
        }, [n, b]);
    return n === A.pC.AVATAR || n === A.pC.BANNER
        ? (0, c.jsx)(o.p, {
              text: l,
              button: p.intl.string(p.t.BmJkbW),
              buttonAnalyticsObject: { section: f.jXE.USER_PROFILE },
              className: s()(r.container, e),
              ...d
          })
        : null;
}
