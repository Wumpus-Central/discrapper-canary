s.d(t, { r: () => i });
var l = s(833291),
    n = s(998218),
    r = s(985018);
let a = [l.ts];
function i(e, t, s) {
    let l = !1,
        i = e.replaceAll(n.A.URL_REGEX, (e) => {
            let t = a.some((t) => null != t(e));
            return t && (l = !0), t ? e : `\`${e}\``;
        });
    if (l) return i;
    let u = r.intl.formatToMarkdownString(r.t.dZJpdG, { applicationName: t.name, link: s });
    return `${i}

${u}`;
}
