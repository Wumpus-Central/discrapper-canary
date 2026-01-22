r.d(t, {
    j: () => a,
});
var n = r(627968);
r(64700);
var o = r(166532),
    l = r(716956),
    c = r(920241),
    i = r(358326);

function u(e) {
    let { onClose: t } = e,
        { guildProductListing: r } = (0, c.S)();
    return (0, n.jsx)(l.A, {
        guildProductListing: r,
        className: i.w,
        onClose: t,
    });
}
let a = (e, t, r) =>
    r === o.pn.CONFIRM
        ? null
        : (0, n.jsx)(u, {
              onClose: () => t(!1),
          });
