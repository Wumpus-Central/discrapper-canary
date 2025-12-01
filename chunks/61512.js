n.d(e, { Z: () => E });
var i = n(323472),
    r = n(509613),
    l = n(313789),
    u = n(291011),
    s = n(392231),
    a = n(271524),
    o = n(388032);
let c = l.n.NOTIFICATIONS_ADVANCED_ACCORDION,
    d = (0, r.CB)(c, {
        useTitle: (t) => (t ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return (0, i.u)(c, {
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
        buildLayout: () => [u.Z, s.Z, a.Z],
    }),
    E = (0, r.k4)(l.n.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => o.intl.string(o.t["31DySj"]),
        buildLayout: () => [d],
    });
