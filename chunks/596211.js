n.d(e, { Z: () => o });
var a = n(200651);
n(192379);
var i = n(481060),
    l = n(406877);
function o(t) {
    let { guildId: e, productId: n, attachmentId: o, ...s } = t,
        { isLoading: r, downloadAttachment: c } = (0, l.Z)(e, n);
    return (0, a.jsx)(i.zxk, {
        ...s,
        submitting: r,
        onClick: function () {
            c(o);
        }
    });
}
