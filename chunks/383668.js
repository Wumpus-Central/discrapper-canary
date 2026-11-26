l.d(t, { A: () => v });
var n = l(477900);
l(582128);
var a = l(834730),
    r = l(908492);
let i = RegExp(
        "^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:com|org|net|gov|edu|io|dev|app|gg|co|ai|me|tv|xyz|info|us|uk|de|fr|jp|ca|au)(?:/[^\\s?#]*)?$",
        "i",
    ),
    s = /(`[^`]*`|\[[^\]]*\]\([^)]*\)|<[^>\s]+>|\b[a-z][a-z0-9+.-]*:\/\/\S+)/gi,
    u = /^[("']+/,
    o = /[.,!?;:)"']+$/;
function d(e) {
    let t = u.exec(e)?.[0] ?? "",
        l = e.slice(t.length),
        n = o.exec(l)?.[0] ?? "",
        a = l.slice(0, l.length - n.length);
    return i.test(a) ? `${t}[${a}](https://${a})${n}` : e;
}
let c = /(`[^`]*`|\[[^\]]*\]\((?:[^()]|\([^()]*\))*\)|<[^>\s]+>)/g,
    f = /\bhttps?:\/\/[^\s<]+/gi,
    m = /[.,!?;:"'\]]$/,
    g = /^(?:[^()\s\\]|\([^()\s\\]*\))+$/,
    p = /^https?:\/\/(?:www\.)?([^/?#:]+)/i;
function h(e, t) {
    return e.split(t).length - 1;
}
function v(e) {
    let { text: t, variant: l, color: i, shortLinks: u = !1 } = e;
    return (0, n.jsx)(a.E, {
        variant: l,
        color: i,
        selectable: !0,
        children: (0, r.U)(
            (u
                ? t
                      .split(c)
                      .map((e, t) =>
                          t % 2 == 1
                              ? e
                              : e.replace(f, (e) => {
                                    let t = (function (e) {
                                            let t = e;
                                            for (; m.test(t) || (t.endsWith(")") && h(t, ")") > h(t, "("));)
                                                t = t.slice(0, -1);
                                            return t;
                                        })(e),
                                        l = p.exec(t)?.[1];
                                    return null != l && g.test(t) ? `[${l}](${t})${e.slice(t.length)}` : e;
                                }),
                      )
                      .join("")
                : t
            )
                .split(s)
                .map((e, t) => (t % 2 == 1 ? e : e.split(/(\s+)/).map(d).join("")))
                .join(""),
            !0,
            { allowLinks: !0 },
        ),
    });
}
