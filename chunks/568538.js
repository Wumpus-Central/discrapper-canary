n.d(t, {
    UK: () => s,
    xU: () => _,
});
var r = n(958209),
    i = n(343573),
    a = n(661822),
    o = n(514962);
let _ = "__sentry_xhr_v3__";
function s(e) {
    (0, r.Hj)("xhr", e), (0, r.D2)("xhr", c);
}
function c() {
    if (!o.m.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    (e.open = new Proxy(e.open, {
        apply(e, t, n) {
            let o = 1000 * (0, i.ph)(),
                s = (0, a.HD)(n[0]) ? n[0].toUpperCase() : void 0,
                c = (function (e) {
                    if ((0, a.HD)(e)) return e;
                    try {
                        return e.toString();
                    } catch (e) {}
                })(n[1]);
            if (!s || !c) return e.apply(t, n);
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
                    let n = {
                        endTimestamp: 1000 * (0, i.ph)(),
                        startTimestamp: o,
                        xhr: t,
                    };
                    (0, r.rK)("xhr", n);
                }
            };
            return (
                "onreadystatechange" in t && "function" == typeof t.onreadystatechange
                    ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
                          apply: (e, t, n) => (E(), e.apply(t, n)),
                      }))
                    : t.addEventListener("readystatechange", E),
                (t.setRequestHeader = new Proxy(t.setRequestHeader, {
                    apply(e, t, n) {
                        let [r, i] = n,
                            o = t[_];
                        return (
                            o && (0, a.HD)(r) && (0, a.HD)(i) && (o.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                        );
                    },
                })),
                e.apply(t, n)
            );
        },
    })),
        (e.send = new Proxy(e.send, {
            apply(e, t, n) {
                let a = t[_];
                if (!a) return e.apply(t, n);
                void 0 !== n[0] && (a.body = n[0]);
                let o = {
                    startTimestamp: 1000 * (0, i.ph)(),
                    xhr: t,
                };
                return (0, r.rK)("xhr", o), e.apply(t, n);
            },
        }));
}
