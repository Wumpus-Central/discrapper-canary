a.d(e, {
    UK: () => c,
    xU: () => E,
});
var r = a(578346),
    _ = a(370336),
    n = a(101284),
    o = a(573736),
    i = a(395848);
let E = "__sentry_xhr_v3__";
function c(t) {
    (0, r.Hj)("xhr", t), (0, r.D2)("xhr", s);
}
function s() {
    if (!i.m.XMLHttpRequest) return;
    let t = XMLHttpRequest.prototype;
    (0, _.hl)(t, "open", function (t) {
        return function (...e) {
            let a = 1000 * (0, n.ph)(),
                i = (0, o.HD)(e[0]) ? e[0].toUpperCase() : void 0,
                c = (function (t) {
                    if ((0, o.HD)(t)) return t;
                    try {
                        return t.toString();
                    } catch (t) {}
                })(e[1]);
            if (!i || !c) return t.apply(this, e);
            (this[E] = {
                method: i,
                url: c,
                request_headers: {},
            }),
                "POST" === i && c.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            let s = () => {
                let t = this[E];
                if (t && 4 === this.readyState) {
                    try {
                        t.status_code = this.status;
                    } catch (t) {}
                    let e = {
                        endTimestamp: 1000 * (0, n.ph)(),
                        startTimestamp: a,
                        xhr: this,
                    };
                    (0, r.rK)("xhr", e);
                }
            };
            return (
                "onreadystatechange" in this && "function" == typeof this.onreadystatechange
                    ? (0, _.hl)(this, "onreadystatechange", function (t) {
                          return function (...e) {
                              return s(), t.apply(this, e);
                          };
                      })
                    : this.addEventListener("readystatechange", s),
                (0, _.hl)(this, "setRequestHeader", function (t) {
                    return function (...e) {
                        let [a, r] = e,
                            _ = this[E];
                        return (
                            _ && (0, o.HD)(a) && (0, o.HD)(r) && (_.request_headers[a.toLowerCase()] = r),
                            t.apply(this, e)
                        );
                    };
                }),
                t.apply(this, e)
            );
        };
    }),
        (0, _.hl)(t, "send", function (t) {
            return function (...e) {
                let a = this[E];
                if (!a) return t.apply(this, e);
                void 0 !== e[0] && (a.body = e[0]);
                let _ = {
                    startTimestamp: 1000 * (0, n.ph)(),
                    xhr: this,
                };
                return (0, r.rK)("xhr", _), t.apply(this, e);
            };
        });
}
