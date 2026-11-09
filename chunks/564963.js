var l = n(582128),
    r = n(886540),
    i = n(191850),
    a = n(792996);
let s = new Set();
function u(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
n.d(
    t,
    {},
    {
        Mv: function (e, t) {
            let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                l = new Map(),
                u = new Set(),
                o = !1,
                c = !1;
            for (let t = e.length - 1; t >= 0; t--) {
                let d = e[t];
                if (null == d) continue;
                if ("user" === d.role) {
                    c =
                        c ||
                        (function (e) {
                            let t = e.content.trim();
                            return t === a.intl.string(i.default.UGqnoV) || t === a.intl.string(i.default.sMQt5O);
                        })(d);
                    continue;
                }
                let f = d.secretRequest?.fields ?? [];
                if (0 === f.length || !(0, r.BL)(d)) continue;
                let m =
                    c ||
                    (function (e) {
                        let t = e.secretRequest;
                        return (
                            t?.over_mcp === !0 && (!0 !== e.finished || (null != t.request_id && s.has(t.request_id)))
                        );
                    })(d);
                for (let e of (m && null == n
                    ? l.set(d.render_id, "pending")
                    : m && null != n && f.every((e) => n.has(e.name))
                      ? l.set(d.render_id, "received")
                      : o
                        ? l.set(d.render_id, f.some((e) => u.has(e.name)) ? "superseded" : "inactive")
                        : l.set(d.render_id, "open"),
                f))
                    u.add(e.name);
                ((o = !0), (c = !1));
            }
            return l;
        },
        Qr: function (e, t) {
            for (let n = e.length - 1; n >= 0; n--) {
                let l = e[n];
                if (l?.secretRequest != null && "open" === t.get(l.render_id)) return l;
            }
            return null;
        },
        bB: function (e, t) {
            let [n, r] = l.useState(() => u(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (r(u(e, t)), !1)
                : null != n.status && t !== n.status;
        },
        j$: function (e) {
            null != e && s.delete(e);
        },
        oF: function (e) {
            null != e && s.add(e);
        },
    },
);
