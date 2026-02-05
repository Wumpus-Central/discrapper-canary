"use strict";
n.d(t, { m: () => s });
var r = n(998218);
let i = new Set(n(468983)),
    a = {
        "github.com": RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*"),
        "bitbucket.org": RegExp("/downloads\\S*/[^/]*"),
        "gitlab.com": RegExp("/downloads\\S*/[^/]*"),
    };
function s(e) {
    let { pathname: t, hostname: n } = r.A.toURLSafe(e) ?? {};
    if (null == n) return null;
    let s = a[n];
    if ((null != s && null != t && !s.test(t)) || null == t) return null;
    let o = t;
    try {
        o = decodeURIComponent(t);
    } catch (e) {}
    let l = o.split("/"),
        u = null,
        c = 0;
    for (let e = l.length - 1; e >= 0; e--) {
        let t = l[e];
        if ("" !== t && "." !== t) {
            if (".." === t) {
                c++;
                continue;
            }
            if (c > e) break;
            u = l[e - c];
            break;
        }
    }
    if (null == u) return null;
    let d = u.split(".");
    if (d.length < 2) return null;
    let _ = d.pop()?.toLowerCase();
    return null != _ && i.has(_) ? _ : null;
}
