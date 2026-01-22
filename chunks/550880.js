n.d(t, { r: () => i }), n(747238), n(812715), n(866193);
var r = n(833291),
    l = n(998218),
    a = n(985018);
let s = [r.ts];
function i(e, t, n) {
    let r = !1,
        i = e.replaceAll(l.A.URL_REGEX, (e) => {
            let t = s.some((t) => null != t(e));
            return t && (r = !0), t ? e : "`".concat(e, "`");
        });
    if (r) return i;
    let u = a.intl.formatToMarkdownString(a.t.dZJpdG, {
        applicationName: t.name,
        link: n,
    });
    return "".concat(i, "\n\n").concat(u);
}
