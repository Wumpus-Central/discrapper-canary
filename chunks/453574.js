_.d(e, { l: () => N });
var a = _(157079),
    r = _(151122),
    n = _(233517),
    o = _(263449),
    E = _(946471),
    i = _(622916),
    c = _(694043),
    s = _(64685),
    l = _(899517),
    I = _(394798),
    R = _(454463);
let N = (0, r._I)((t = {}) => {
    let e = {
        failedRequestStatusCodes: [[500, 599]],
        failedRequestTargets: [/.*/],
        ...t,
    };
    return {
        name: "HttpClient",
        setup(t) {
            var _, r, E, I;
            (_ = t),
                (r = e),
                (0, c.t$)() &&
                    (0, s.Uf)((t) => {
                        if ((0, o.s3)() !== _) return;
                        let { response: e, args: a } = t,
                            [E, i] = a;
                        e &&
                            (function (t, e, _, a) {
                                if (T(t, _.status, _.url)) {
                                    var r, o;
                                    let t,
                                        E,
                                        i,
                                        c,
                                        s =
                                            ((r = e),
                                            (!(o = a) && r instanceof Request) || (r instanceof Request && r.bodyUsed)
                                                ? r
                                                : new Request(r, o));
                                    f() && (([t, i] = A("Cookie", s)), ([E, c] = A("Set-Cookie", _)));
                                    let l = d({
                                        url: s.url,
                                        method: s.method,
                                        status: _.status,
                                        requestHeaders: t,
                                        responseHeaders: E,
                                        requestCookies: i,
                                        responseCookies: c,
                                    });
                                    (0, n.eN)(l);
                                }
                            })(r, E, e, i);
                    }),
                (E = t),
                (I = e),
                "XMLHttpRequest" in l.n &&
                    (0, a.UK)((t) => {
                        if ((0, o.s3)() !== E) return;
                        let e = t.xhr,
                            _ = e[a.xU];
                        if (!_) return;
                        let { method: r, request_headers: c } = _;
                        try {
                            !(function (t, e, _, a) {
                                if (T(t, e.status, e.responseURL)) {
                                    let t, r, o;
                                    if (f()) {
                                        try {
                                            let t =
                                                e.getResponseHeader("Set-Cookie") ||
                                                e.getResponseHeader("set-cookie") ||
                                                void 0;
                                            t && (r = u(t));
                                        } catch (t) {
                                            R.X && i.kg.log("Could not extract cookies from response headers");
                                        }
                                        try {
                                            o = (function (t) {
                                                let e = t.getAllResponseHeaders();
                                                return e
                                                    ? e.split("\r\n").reduce((t, e) => {
                                                          let [_, a] = e.split(": ");
                                                          return _ && a && (t[_] = a), t;
                                                      }, {})
                                                    : {};
                                            })(e);
                                        } catch (t) {
                                            R.X && i.kg.log("Could not extract headers from response");
                                        }
                                        t = a;
                                    }
                                    let E = d({
                                        url: e.responseURL,
                                        method: _,
                                        status: e.status,
                                        requestHeaders: t,
                                        responseHeaders: o,
                                        responseCookies: r,
                                    });
                                    (0, n.eN)(E);
                                }
                            })(I, e, r, c);
                        } catch (t) {
                            R.X && i.kg.warn("Error while extracting response event form XHR response", t);
                        }
                    });
        },
    };
});
function A(t, e) {
    let _,
        a = (function (t) {
            let e = {};
            return (
                t.forEach((t, _) => {
                    e[_] = t;
                }),
                e
            );
        })(e.headers);
    try {
        let e = a[t] || a[t.toLowerCase()] || void 0;
        e && (_ = u(e));
    } catch (e) {
        R.X && i.kg.log(`Could not extract cookies from header ${t}`);
    }
    return [a, _];
}
function u(t) {
    return t.split("; ").reduce((t, e) => {
        let [_, a] = e.split("=");
        return _ && a && (t[_] = a), t;
    }, {});
}
function T(t, e, _) {
    var a, r;
    return (
        (a = t.failedRequestStatusCodes),
        a.some((t) => ("number" == typeof t ? t === e : e >= t[0] && e <= t[1])) &&
            ((r = t.failedRequestTargets), r.some((t) => ("string" == typeof t ? _.includes(t) : t.test(_)))) &&
            !(0, E.W)(_, (0, o.s3)())
    );
}
function d(t) {
    let e = `HTTP Client Error with status code: ${t.status}`,
        _ = {
            message: e,
            exception: {
                values: [
                    {
                        type: "Error",
                        value: e,
                    },
                ],
            },
            request: {
                url: t.url,
                method: t.method,
                headers: t.requestHeaders,
                cookies: t.requestCookies,
            },
            contexts: {
                response: {
                    status_code: t.status,
                    headers: t.responseHeaders,
                    cookies: t.responseCookies,
                    body_size: (function (t) {
                        if (t) {
                            let e = t["Content-Length"] || t["content-length"];
                            if (e) return parseInt(e, 10);
                        }
                    })(t.responseHeaders),
                },
            },
        };
    return (
        (0, I.EG)(_, {
            type: "http.client",
            handled: !1,
        }),
        _
    );
}
function f() {
    let t = (0, o.s3)();
    return !!t && !!t.getOptions().sendDefaultPii;
}
