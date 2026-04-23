l.d(t, { r: () => i });
var n = l(833291),
    s = l(998218),
    r = l(985018);
let a = [n.ts];
function i(e, t, l) {
    let n = !1,
        i = e.replaceAll(s.A.URL_REGEX, (e) => {
            let t = a.some((t) => null != t(e));
            return t && (n = !0), t ? e : `\`${e}\``;
        });
    if (n) return i;
    let u = r.intl.formatToMarkdownString(r.t.dZJpdG, { applicationName: t.name, link: l });
    return `${i}

${u}`;
}
