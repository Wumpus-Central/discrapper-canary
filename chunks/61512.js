n.d(e, { Z: () => S });
var i = n(323472),
    l = n(509613),
    u = n(313789),
    r = n(291011),
    s = n(392231),
    a = n(271524),
    o = n(388032);
let c = u.n.NOTIFICATIONS_ADVANCED_ACCORDION,
    E = (0, l.CB)(c, {
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
        buildLayout: () => [r.Z, s.Z, a.Z],
    }),
    S = (0, l.k4)(u.n.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => o.intl.string(o.t["31DySj"]),
        buildLayout: () => [E],
    });
