n.d(t, { k: () => a });
var i = n(477900);
n(582128);
var r = n(260612);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        let { color: a, ...s } = n,
            l = "currentColor";
        null != a && (l = "string" != typeof a && "css" in a ? a.css : a);
        let o = s.size ?? "md",
            d = (0, r.J)(o),
            c = {
                color: l,
                width: d?.width ?? s.width ?? 24,
                height: d?.height ?? s.height ?? 24,
                foreground: s.colorClass,
            };
        for (let [e, n] of Object.entries(t)) null != s[e] && (c[n] = s[e]);
        return (0, i.jsx)(e, { ...s, ...c });
    };
}
