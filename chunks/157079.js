r.d(t, {
    UK: () => c,
    xU: () => s,
});
var n = r(578346),
    a = r(370336),
    i = r(101284),
    o = r(573736),
    _ = r(395848);
let s = "__sentry_xhr_v3__";
function c(e) {
    (0, n.Hj)("xhr", e), (0, n.D2)("xhr", E);
}
function E() {
    if (!_.m.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    (0, a.hl)(e, "open", function (e) {
        return function (...t) {
            let r = 1000 * (0, i.ph)(),
                _ = (0, o.HD)(t[0]) ? t[0].toUpperCase() : void 0,
                c = (function (e) {
                    if ((0, o.HD)(e)) return e;
                    try {
                        return e.toString();
                    } catch (e) {}
                })(t[1]);
            if (!_ || !c) return e.apply(this, t);
            (this[s] = {
                method: _,
                url: c,
                request_headers: {},
            }),
                "POST" === _ && c.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            let E = () => {
                let e = this[s];
                if (e && 4 === this.readyState) {
                    try {
                        e.status_code = this.status;
                    } catch (e) {}
                    let t = {
                        endTimestamp: 1000 * (0, i.ph)(),
                        startTimestamp: r,
                        xhr: this,
                    };
                    (0, n.rK)("xhr", t);
                }
            };
            return (
                "onreadystatechange" in this && "function" == typeof this.onreadystatechange
                    ? (0, a.hl)(this, "onreadystatechange", function (e) {
                          return function (...t) {
                              return E(), e.apply(this, t);
                          };
                      })
                    : this.addEventListener("readystatechange", E),
                (0, a.hl)(this, "setRequestHeader", function (e) {
                    return function (...t) {
                        let [r, n] = t,
                            a = this[s];
                        return (
                            a && (0, o.HD)(r) && (0, o.HD)(n) && (a.request_headers[r.toLowerCase()] = n),
                            e.apply(this, t)
                        );
                    };
                }),
                e.apply(this, t)
            );
        };
    }),
        (0, a.hl)(e, "send", function (e) {
            return function (...t) {
                let r = this[s];
                if (!r) return e.apply(this, t);
                void 0 !== t[0] && (r.body = t[0]);
                let a = {
                    startTimestamp: 1000 * (0, i.ph)(),
                    xhr: this,
                };
                return (0, n.rK)("xhr", a), e.apply(this, t);
            };
        });
}
