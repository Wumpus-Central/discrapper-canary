n.d(l, { r: () => r });
var t = n(317097),
    i = n(652215);
function r(e, l) {
    let n = e
        .map((l, n) => {
            let r = e.length > 1 ? (n / (e.length - 1)) * 100 : 0;
            return `${(0, t.Hl)(l ?? i.TGz)} ${r}%`;
        })
        .join(", ");
    return `linear-gradient(${l}deg, ${n})`;
}
