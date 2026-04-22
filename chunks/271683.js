i.d(t, { A: () => a });
var l = i(627968),
    n = i(192308),
    s = i(136523);
function a(e) {
    let { channel: t, sourceAnalyticsLocations: a } = e;
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(i.bind(i, 136523));
            return (i) => (0, l.jsx)(e, { channel: t, sourceAnalyticsLocations: a, ...i });
        },
        { modalKey: s.m },
    );
}
