n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(406877);
function r(e) {
    let { guildId: t, productId: n, attachmentId: r, ...s } = e,
        { isLoading: o, downloadAttachment: c } = (0, a.Z)(t, n);
    return (0, i.jsx)(l.zxk, {
        ...s,
        submitting: o,
        onClick: function () {
            c(r);
        }
    });
}
