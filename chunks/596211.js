e.d(n, {
    Z: function () {
        return o;
    }
});
var a = e(200651);
e(192379);
var i = e(481060),
    r = e(406877);
function o(t) {
    let { guildId: n, productId: e, attachmentId: o, ...l } = t,
        { isLoading: c, downloadAttachment: s } = (0, r.Z)(n, e);
    return (0, a.jsx)(i.Button, {
        ...l,
        submitting: c,
        onClick: function () {
            s(o);
        }
    });
}
