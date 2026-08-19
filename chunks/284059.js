n.d(l, { r: () => s });
var t = n(317097),
    r = n(652215);
function s(e, l) {
    let n = e
        .map((l, n) => {
            let s = e.length > 1 ? (n / (e.length - 1)) * 100 : 0;
            return `${(0, t.Hl)(l ?? r.TGz)} ${s}%`;
        })
        .join(", ");
    return `linear-gradient(${l}deg, ${n})`;
}
