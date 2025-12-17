n.d(e, { G: () => c });
var i = n(323472),
    l = n(509613),
    s = n(313789),
    u = n(291011),
    r = n(392231),
    a = n(271524),
    o = n(388032);
let S = s.n.NOTIFICATIONS_ADVANCED_ACCORDION,
    T = (0, l.CB)(S, {
        useTitle: (t) => (t ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return (0, i.u)(S, {
                formatter: (t) => {
                    let { title: e, index: n } = t;
                    return "string" != typeof e
                        ? e
                        : 0 === n
                          ? "".concat(e.charAt(0).toLocaleUpperCase()).concat(e.slice(1).toLocaleLowerCase())
                          : e.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [u.i, r.F, a.l],
    }),
    c = (0, l.k4)(s.n.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => o.intl.string(o.t["31DySj"]),
        buildLayout: () => [T],
    });
