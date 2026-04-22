t.d(n, { V: () => a });
var l = t(627968),
    r = t(834730),
    i = t(933297);
function s(e) {
    let { decoration: n } = e,
        t = n.useText();
    return null == t ? null : (0, l.jsx)(r.E, { variant: "text-md/medium", children: t });
}
function a(e) {
    let { decoration: n } = e;
    if (n.type === i.xn.TEXT) return (0, l.jsx)(s, { decoration: n });
}
