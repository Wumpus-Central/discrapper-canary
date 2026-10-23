l.d(t, { A: () => c });
var n = l(477900);
l(582128);
var a = l(834730),
    i = l(908492);
let r = RegExp(
        "^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:com|org|net|gov|edu|io|dev|app|gg|co|ai|me|tv|xyz|info|us|uk|de|fr|jp|ca|au)(?:/[^\\s?#]*)?$",
        "i",
    ),
    u = /(`[^`]*`|\[[^\]]*\]\([^)]*\)|<[^>\s]+>|\b[a-z][a-z0-9+.-]*:\/\/\S+)/gi,
    s = /^[("']+/,
    o = /[.,!?;:)"']+$/;
function d(e) {
    let t = s.exec(e)?.[0] ?? "",
        l = e.slice(t.length),
        n = o.exec(l)?.[0] ?? "",
        a = l.slice(0, l.length - n.length);
    return r.test(a) ? `${t}[${a}](https://${a})${n}` : e;
}
function c(e) {
    let { text: t, variant: l, color: r } = e;
    return (0, n.jsx)(a.E, {
        variant: l,
        color: r,
        selectable: !0,
        children: (0, i.U)(
            t
                .split(u)
                .map((e, t) => (t % 2 == 1 ? e : e.split(/(\s+)/).map(d).join("")))
                .join(""),
            !0,
            { allowLinks: !0 },
        ),
    });
}
