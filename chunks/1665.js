n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var i = n(834730),
    a = n(908492);
let r = RegExp(
        "^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:com|org|net|gov|edu|io|dev|app|gg|co|ai|me|tv|xyz|info|us|uk|de|fr|jp|ca|au)(?:/[^\\s?#]*)?$",
        "i",
    ),
    u = /(`[^`]*`|\[[^\]]*\]\([^)]*\)|<[^>\s]+>|\b[a-z][a-z0-9+.-]*:\/\/\S+)/gi,
    s = /^[("']+/,
    o = /[.,!?;:)"']+$/;
function d(e) {
    let t = s.exec(e)?.[0] ?? "",
        n = e.slice(t.length),
        l = o.exec(n)?.[0] ?? "",
        i = n.slice(0, n.length - l.length);
    return r.test(i) ? `${t}[${i}](https://${i})${l}` : e;
}
function c(e) {
    let { text: t, variant: n, color: r } = e;
    return (0, l.jsx)(i.E, {
        variant: n,
        color: r,
        selectable: !0,
        children: (0, a.U)(
            t
                .split(u)
                .map((e, t) => (t % 2 == 1 ? e : e.split(/(\s+)/).map(d).join("")))
                .join(""),
            !0,
            { allowLinks: !0 },
        ),
    });
}
