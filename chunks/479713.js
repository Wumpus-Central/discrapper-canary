n.d(t, { P: () => s }), n(804061), n(704826), n(35282);
var r = n(830121),
    l = n(591759),
    a = n(388032);
let i = [r.el];
function s(e, t, n) {
    let r = !1,
        s = e.replaceAll(l.Z.URL_REGEX, (e) => {
            let t = i.some((t) => null != t(e));
            return t && (r = !0), t ? e : "`".concat(e, "`");
        });
    if (r) return s;
    let u = a.intl.formatToMarkdownString(a.t.dZJpdG, {
        applicationName: t.name,
        link: n,
    });
    return "".concat(s, "\n\n").concat(u);
}
