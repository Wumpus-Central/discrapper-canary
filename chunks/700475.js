n.d(t, { a: () => o });
var i = n(627968);
n(64700);
var r = n(231723),
    a = n(192308),
    l = n(587895),
    s = n(851907);
function o(e) {
    let { applicationId: t, customId: o, linkId: d, message: u, onShare: c } = e,
        A = l.A.getApplication(t);
    if (null == A) return void c(!1, !1);
    let h = null != (0, s.LU)({ applicationId: A.id }) ? r.KX : r.SY,
        _ = !1;
    function E(e) {
        c(e, _);
    }
    function p() {
        _ = !0;
    }
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await n.e("48587").then(n.bind(n, 824774));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    customId: o,
                    linkId: d,
                    message: u,
                    onCopyLink: p,
                    onShare: E,
                    ...n,
                });
        },
        {
            modalKey: "activity-share-moment-modal",
            contextKey: h,
            onCloseCallback: () => {
                c(!1, _);
            },
        },
    );
}
