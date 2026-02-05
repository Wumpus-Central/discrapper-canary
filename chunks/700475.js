n.d(t, { a: () => s });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(587895),
    l = n(851907);
function s(e) {
    let { applicationId: t, customId: s, linkId: o, message: d, onShare: c } = e,
        u = a.A.getApplication(t);
    if (null == u) return void c(!1, !1);
    let A = null != (0, l.LU)({ applicationId: u.id }) ? r.KX8 : r.SYi,
        h = !1;
    function _(e) {
        c(e, h);
    }
    function m() {
        h = !0;
    }
    (0, r.mMO)(
        async () => {
            let { default: e } = await n.e("48587").then(n.bind(n, 824774));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    customId: s,
                    linkId: o,
                    message: d,
                    onCopyLink: m,
                    onShare: _,
                    ...n,
                });
        },
        {
            modalKey: "activity-share-moment-modal",
            contextKey: A,
            onCloseCallback: () => {
                c(!1, h);
            },
        },
    );
}
