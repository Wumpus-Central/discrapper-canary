n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(406877);
function a(e) {
    let { guildId: t, productId: n, attachmentId: a, ...o } = e,
        { isLoading: s, downloadAttachment: c } = (0, l.Z)(t, n);
    return (0, i.jsx)(r.Button, {
        ...o,
        submitting: s,
        onClick: function () {
            c(a);
        }
    });
}
