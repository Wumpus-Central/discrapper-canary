n.d(t, { P: () => i }), n(804061), n(704826), n(35282);
var l = n(830121),
    r = n(591759),
    s = n(388032);
let a = [l.el];
function i(e, t, n) {
    let l = !1,
        i = e.replaceAll(r.Z.URL_REGEX, (e) => {
            let t = a.some((t) => null != t(e));
            return t && (l = !0), t ? e : "`".concat(e, "`");
        });
    if (l) return i;
    let u = s.intl.formatToMarkdownString(s.t.dZJpdG, {
        applicationName: t.name,
        link: n,
    });
    return "".concat(i, "\n\n").concat(u);
}
