n.d(t, { g: () => s });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(587895),
    l = n(851907);
function s(e) {
    let { applicationId: t, channelId: s, mediaUrl: o } = e,
        d = a.A.getApplication(t),
        c = null != (0, l.Ay)({ application: d, channelId: s }) ? r.KX8 : r.SYi;
    (0, r.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("21743"), n.e("81078")]).then(n.bind(n, 190930));
            return (n) => (0, i.jsx)(e, { applicationId: t, mediaUrl: o, ...n });
        },
        { modalKey: "activity-share-moment-modal", contextKey: c },
    );
}
