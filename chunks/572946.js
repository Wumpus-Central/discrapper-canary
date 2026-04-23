n.d(t, { g: () => o });
var i = n(627968);
n(64700);
var r = n(231723),
    a = n(192308),
    l = n(587895),
    s = n(851907);
function o(e) {
    let { applicationId: t, channelId: o, mediaUrl: d } = e,
        u = l.A.getApplication(t),
        c = null != (0, s.Ay)({ application: u, channelId: o }) ? r.KX : r.SY;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("96758"), n.e("50178")]).then(n.bind(n, 190930));
            return (n) => (0, i.jsx)(e, { applicationId: t, mediaUrl: d, ...n });
        },
        { modalKey: "activity-share-moment-modal", contextKey: c },
    );
}
