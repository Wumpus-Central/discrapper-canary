n.d(t, { P: () => i }), n(804061), n(704826), n(35282);
var r = n(830121),
    l = n(591759),
    a = n(388032);
let s = [r.el];
function i(e, t, n) {
    let r = !1,
        i = e.replaceAll(l.Z.URL_REGEX, (e) => {
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
