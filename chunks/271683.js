l.d(i, { A: () => a });
var e = l(627968),
    n = l(192308),
    s = l(136523);
function a(t) {
    let { channel: i, sourceAnalyticsLocations: a } = t;
    (0, n.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(l.bind(l, 136523));
            return (l) => (0, e.jsx)(t, { channel: i, sourceAnalyticsLocations: a, ...l });
        },
        { modalKey: s.m },
    );
}
