n.d(t, {
    m: () => s,
}),
    n(896048),
    n(591487),
    n(727858),
    n(747238);
var r = n(998218);
let i = new Set(n(468983)),
    a = {
        "github.com": RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*"),
        "bitbucket.org": RegExp("/downloads\\S*/[^/]*"),
        "gitlab.com": RegExp("/downloads\\S*/[^/]*"),
    };

function s(e) {
    var t, n;
    let { pathname: s, hostname: o } = null != (t = r.A.toURLSafe(e)) ? t : {};
    if (null == o) return null;
    let l = a[o];
    if ((null != l && null != s && !l.test(s)) || null == s) return null;
    let c = s;
    try {
        c = decodeURIComponent(s);
    } catch (e) {}
    let u = c.split("/"),
        d = null,
        f = 0;
    for (let e = u.length - 1; e >= 0; e--) {
        let t = u[e];
        if ("" !== t && "." !== t) {
            if (".." === t) {
                f++;
                continue;
            }
            if (f > e) break;
            d = u[e - f];
            break;
        }
    }
    if (null == d) return null;
    let p = d.split(".");
    if (p.length < 2) return null;
    let _ = null == (n = p.pop()) ? void 0 : n.toLowerCase();
    return null != _ && i.has(_) ? _ : null;
}
