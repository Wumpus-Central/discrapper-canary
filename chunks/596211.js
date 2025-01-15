e.d(n, {
    Z: function () {
        return r;
    }
});
var a = e(200651);
e(192379);
var o = e(481060),
    i = e(406877);
function r(t) {
    let { guildId: n, productId: e, attachmentId: r, ...l } = t,
        { isLoading: s, downloadAttachment: c } = (0, i.Z)(n, e);
    return (0, a.jsx)(o.Button, {
        ...l,
        submitting: s,
        onClick: function () {
            c(r);
        }
    });
}
