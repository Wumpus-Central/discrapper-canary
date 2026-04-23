t.d(n, { j: () => o });
var r = t(627968);
t(64700);
var l = t(166532),
    s = t(716956),
    a = t(920241),
    i = t(196617);
function u(e) {
    let { onClose: n } = e,
        { guildProductListing: t } = (0, a.S)();
    return (0, r.jsx)(s.A, { guildProductListing: t, className: i.w, onClose: n });
}
let o = (e, n, t) => (t === l.pn.CONFIRM ? null : (0, r.jsx)(u, { onClose: () => n(!1) }));
