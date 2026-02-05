i.d(e, { X: () => A });
var n = i(419117),
    l = i(419954),
    s = i(780964),
    r = i(931852),
    a = i(528237),
    u = i(693804),
    o = i(985018);
let d = s.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    T = (0, l.bd)(d, {
        useTitle: (t) => (t ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return (0, n.A)(d, {
                formatter: (t) => {
                    let { title: e, index: i } = t;
                    return "string" != typeof e
                        ? e
                        : 0 === i
                          ? `${e.charAt(0).toLocaleUpperCase()}${e.slice(1).toLocaleLowerCase()}`
                          : e.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [r.z, a.m, u.j],
    }),
    A = (0, l.zZ)(s.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => o.intl.string(o.t["31DySj"]),
        buildLayout: () => [T],
    });
