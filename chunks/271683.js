l.d(t, { A: () => a });
var e = l(627968),
    n = l(192308),
    s = l(136523);
function a(i) {
    let { channel: t, sourceAnalyticsLocations: a } = i;
    (0, n.openModalLazy)(
        async () => {
            let { default: i } = await Promise.resolve().then(l.bind(l, 136523));
            return (l) => (0, e.jsx)(i, { channel: t, sourceAnalyticsLocations: a, ...l });
        },
        { modalKey: s.m },
    );
}
