r.d(t, {
    UK: () => s,
    xU: () => _,
});
var n = r(958209),
    a = r(343573),
    i = r(661822),
    o = r(514962);
let _ = "__sentry_xhr_v3__";
function s(e) {
    (0, n.Hj)("xhr", e), (0, n.D2)("xhr", c);
}
function c() {
    if (!o.m.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    (e.open = new Proxy(e.open, {
        apply(e, t, r) {
            let o = 1000 * (0, a.ph)(),
                s = (0, i.HD)(r[0]) ? r[0].toUpperCase() : void 0,
                c = (function (e) {
                    if ((0, i.HD)(e)) return e;
                    try {
                        return e.toString();
                    } catch (e) {}
                })(r[1]);
            if (!s || !c) return e.apply(t, r);
            (t[_] = {
                method: s,
                url: c,
                request_headers: {},
            }),
                "POST" === s && c.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            let E = () => {
                let e = t[_];
                if (e && 4 === t.readyState) {
                    try {
                        e.status_code = t.status;
                    } catch (e) {}
                    let r = {
                        endTimestamp: 1000 * (0, a.ph)(),
                        startTimestamp: o,
                        xhr: t,
                    };
                    (0, n.rK)("xhr", r);
                }
            };
            return (
                "onreadystatechange" in t && "function" == typeof t.onreadystatechange
                    ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
                          apply: (e, t, r) => (E(), e.apply(t, r)),
                      }))
                    : t.addEventListener("readystatechange", E),
                (t.setRequestHeader = new Proxy(t.setRequestHeader, {
                    apply(e, t, r) {
                        let [n, a] = r,
                            o = t[_];
                        return (
                            o && (0, i.HD)(n) && (0, i.HD)(a) && (o.request_headers[n.toLowerCase()] = a), e.apply(t, r)
                        );
                    },
                })),
                e.apply(t, r)
            );
        },
    })),
        (e.send = new Proxy(e.send, {
            apply(e, t, r) {
                let i = t[_];
                if (!i) return e.apply(t, r);
                void 0 !== r[0] && (i.body = r[0]);
                let o = {
                    startTimestamp: 1000 * (0, a.ph)(),
                    xhr: t,
                };
                return (0, n.rK)("xhr", o), e.apply(t, r);
            },
        }));
}
