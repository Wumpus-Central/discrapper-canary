n.d(t, { Er: () => s, Mn: () => l });
var r = n(873326),
    i = n(83220),
    o = n(875565),
    a = n(296438);
let s = "__sentry_xhr_v3__";
function l(e) {
    (0, r.s5)("xhr", e), (0, r.AS)("xhr", c);
}
function c() {
    if (!a.j.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    (e.open = new Proxy(e.open, {
        apply(e, t, n) {
            let a = Error(),
                l = 1e3 * (0, i.zf)(),
                c = (0, o.Kg)(n[0]) ? n[0].toUpperCase() : void 0,
                u = (function (e) {
                    if ((0, o.Kg)(e)) return e;
                    try {
                        return e.toString();
                    } catch (e) {}
                })(n[1]);
            if (!c || !u) return e.apply(t, n);
            (t[s] = { method: c, url: u, request_headers: {} }),
                "POST" === c && u.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            let d = () => {
                let e = t[s];
                if (e && 4 === t.readyState) {
                    try {
                        e.status_code = t.status;
                    } catch (e) {}
                    let n = { endTimestamp: 1e3 * (0, i.zf)(), startTimestamp: l, xhr: t, virtualError: a };
                    (0, r.aj)("xhr", n);
                }
            };
            return (
                "onreadystatechange" in t && "function" == typeof t.onreadystatechange
                    ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
                          apply: (e, t, n) => (d(), e.apply(t, n)),
                      }))
                    : t.addEventListener("readystatechange", d),
                (t.setRequestHeader = new Proxy(t.setRequestHeader, {
                    apply(e, t, n) {
                        let [r, i] = n,
                            a = t[s];
                        return (
                            a && (0, o.Kg)(r) && (0, o.Kg)(i) && (a.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                        );
                    },
                })),
                e.apply(t, n)
            );
        },
    })),
        (e.send = new Proxy(e.send, {
            apply(e, t, n) {
                let o = t[s];
                if (!o) return e.apply(t, n);
                void 0 !== n[0] && (o.body = n[0]);
                let a = { startTimestamp: 1e3 * (0, i.zf)(), xhr: t };
                return (0, r.aj)("xhr", a), e.apply(t, n);
            },
        }));
}
