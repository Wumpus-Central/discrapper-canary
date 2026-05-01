l.d(i, { A: () => a });
var t = l(627968),
    n = l(192308),
    s = l(136523);
function a(e) {
    let { channel: i, sourceAnalyticsLocations: a } = e;
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(l.bind(l, 136523));
            return (l) => (0, t.jsx)(e, { channel: i, sourceAnalyticsLocations: a, ...l });
        },
        { modalKey: s.m },
    );
}
