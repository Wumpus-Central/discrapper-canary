n.d(t, { Mv: () => c, bB: () => m, j$: () => u, oF: () => o });
var l = n(582128),
    r = n(886540),
    a = n(248675),
    i = n(105292);
let s = new Set();
function o(e) {
    null != e && s.add(e);
}
function u(e) {
    null != e && s.delete(e);
}
function c(e, t) {
    let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
        l = new Map(),
        o = new Set(),
        u = !1,
        c = !1;
    for (let t = e.length - 1; t >= 0; t--) {
        let d = e[t];
        if (null == d) continue;
        if ("user" === d.role) {
            c =
                c ||
                (function (e) {
                    let t = e.content.trim();
                    return t === i.intl.string(a.default.UGqnoV) || t === i.intl.string(a.default.sMQt5O);
                })(d);
            continue;
        }
        let m = d.secretRequest?.fields ?? [];
        if (0 === m.length || !(0, r.BL)(d)) continue;
        let f =
            c ||
            (function (e) {
                let t = e.secretRequest;
                return t?.over_mcp === !0 && (!0 !== e.finished || (null != t.request_id && s.has(t.request_id)));
            })(d);
        for (let e of (f && null == n
            ? l.set(d.render_id, "pending")
            : f && null != n && m.every((e) => n.has(e.name))
              ? l.set(d.render_id, "received")
              : u
                ? l.set(d.render_id, m.some((e) => o.has(e.name)) ? "superseded" : "inactive")
                : l.set(d.render_id, "open"),
        m))
            o.add(e.name);
        ((u = !0), (c = !1));
    }
    return l;
}
function d(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
function m(e, t) {
    let [n, r] = l.useState(() => d(e, t));
    return n.cardId !== e || (null == n.status && "pending" !== t)
        ? (r(d(e, t)), !1)
        : null != n.status && t !== n.status;
}
