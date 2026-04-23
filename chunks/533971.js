n.d(t, { X: () => g });
var i = n(419117),
    s = n(419954),
    l = n(780964),
    a = n(767084),
    r = n(102669),
    o = n(62348),
    d = n(985018);
let u = l.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    c = (0, s.bd)(u, {
        useTitle: (e) => (e ? d.intl.string(d.t.RyimDk) : d.intl.string(d.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return (0, i.A)(u, {
                formatter: (e) => {
                    let { title: t, index: n } = e;
                    return "string" != typeof t
                        ? t
                        : 0 === n
                          ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}`
                          : t.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [a.z, r.m, o.j],
    }),
    g = (0, s.zZ)(l.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => d.intl.string(d.t["31DySj"]),
        buildLayout: () => [c],
    });
