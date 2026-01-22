i.d(e, { X: () => S });
var n = i(419117),
    l = i(419954),
    s = i(780964),
    r = i(931852),
    u = i(528237),
    a = i(693804),
    o = i(985018);
let T = s.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    A = (0, l.bd)(T, {
        useTitle: (t) => (t ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return (0, n.A)(T, {
                formatter: (t) => {
                    let { title: e, index: i } = t;
                    return "string" != typeof e
                        ? e
                        : 0 === i
                          ? "".concat(e.charAt(0).toLocaleUpperCase()).concat(e.slice(1).toLocaleLowerCase())
                          : e.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [r.z, u.m, a.j],
    }),
    S = (0, l.zZ)(s.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => o.intl.string(o.t["31DySj"]),
        buildLayout: () => [A],
    });
