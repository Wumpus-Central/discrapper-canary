_.d(e, {
    UK: () => c,
    xU: () => i,
});
var a = _(578346),
    r = _(370336),
    n = _(101284),
    o = _(573736),
    E = _(395848);
let i = "__sentry_xhr_v3__";
function c(t) {
    (0, a.Hj)("xhr", t), (0, a.D2)("xhr", s);
}
function s() {
    if (!E.m.XMLHttpRequest) return;
    let t = XMLHttpRequest.prototype;
    (0, r.hl)(t, "open", function (t) {
        return function (...e) {
            let _ = 1000 * (0, n.ph)(),
                E = (0, o.HD)(e[0]) ? e[0].toUpperCase() : void 0,
                c = (function (t) {
                    if ((0, o.HD)(t)) return t;
                    try {
                        return t.toString();
                    } catch (t) {}
                })(e[1]);
            if (!E || !c) return t.apply(this, e);
            (this[i] = {
                method: E,
                url: c,
                request_headers: {},
            }),
                "POST" === E && c.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            let s = () => {
                let t = this[i];
                if (t && 4 === this.readyState) {
                    try {
                        t.status_code = this.status;
                    } catch (t) {}
                    let e = {
                        endTimestamp: 1000 * (0, n.ph)(),
                        startTimestamp: _,
                        xhr: this,
                    };
                    (0, a.rK)("xhr", e);
                }
            };
            return (
                "onreadystatechange" in this && "function" == typeof this.onreadystatechange
                    ? (0, r.hl)(this, "onreadystatechange", function (t) {
                          return function (...e) {
                              return s(), t.apply(this, e);
                          };
                      })
                    : this.addEventListener("readystatechange", s),
                (0, r.hl)(this, "setRequestHeader", function (t) {
                    return function (...e) {
                        let [_, a] = e,
                            r = this[i];
                        return (
                            r && (0, o.HD)(_) && (0, o.HD)(a) && (r.request_headers[_.toLowerCase()] = a),
                            t.apply(this, e)
                        );
                    };
                }),
                t.apply(this, e)
            );
        };
    }),
        (0, r.hl)(t, "send", function (t) {
            return function (...e) {
                let _ = this[i];
                if (!_) return t.apply(this, e);
                void 0 !== e[0] && (_.body = e[0]);
                let r = {
                    startTimestamp: 1000 * (0, n.ph)(),
                    xhr: this,
                };
                return (0, a.rK)("xhr", r), t.apply(this, e);
            };
        });
}
