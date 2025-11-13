a.d(e, { l: () => u });
var r = a(157079),
    _ = a(151122),
    n = a(233517),
    o = a(263449),
    i = a(946471),
    E = a(622916),
    c = a(694043),
    s = a(64685),
    l = a(899517),
    I = a(394798),
    R = a(454463);
let u = (0, _._I)((t = {}) => {
    let e = {
        failedRequestStatusCodes: [[500, 599]],
        failedRequestTargets: [/.*/],
        ...t,
    };
    return {
        name: "HttpClient",
        setup(t) {
            var a, _, i, I;
            (a = t),
                (_ = e),
                (0, c.t$)() &&
                    (0, s.Uf)((t) => {
                        if ((0, o.s3)() !== a) return;
                        let { response: e, args: r } = t,
                            [i, E] = r;
                        e &&
                            (function (t, e, a, r) {
                                if (T(t, a.status, a.url)) {
                                    var _, o;
                                    let t,
                                        i,
                                        E,
                                        c,
                                        s =
                                            ((_ = e),
                                            (!(o = r) && _ instanceof Request) || (_ instanceof Request && _.bodyUsed)
                                                ? _
                                                : new Request(_, o));
                                    f() && (([t, E] = A("Cookie", s)), ([i, c] = A("Set-Cookie", a)));
                                    let l = d({
                                        url: s.url,
                                        method: s.method,
                                        status: a.status,
                                        requestHeaders: t,
                                        responseHeaders: i,
                                        requestCookies: E,
                                        responseCookies: c,
                                    });
                                    (0, n.eN)(l);
                                }
                            })(_, i, e, E);
                    }),
                (i = t),
                (I = e),
                "XMLHttpRequest" in l.n &&
                    (0, r.UK)((t) => {
                        if ((0, o.s3)() !== i) return;
                        let e = t.xhr,
                            a = e[r.xU];
                        if (!a) return;
                        let { method: _, request_headers: c } = a;
                        try {
                            !(function (t, e, a, r) {
                                if (T(t, e.status, e.responseURL)) {
                                    let t, _, o;
                                    if (f()) {
                                        try {
                                            let t =
                                                e.getResponseHeader("Set-Cookie") ||
                                                e.getResponseHeader("set-cookie") ||
                                                void 0;
                                            t && (_ = N(t));
                                        } catch (t) {
                                            R.X && E.kg.log("Could not extract cookies from response headers");
                                        }
                                        try {
                                            o = (function (t) {
                                                let e = t.getAllResponseHeaders();
                                                return e
                                                    ? e.split("\r\n").reduce((t, e) => {
                                                          let [a, r] = e.split(": ");
                                                          return a && r && (t[a] = r), t;
                                                      }, {})
                                                    : {};
                                            })(e);
                                        } catch (t) {
                                            R.X && E.kg.log("Could not extract headers from response");
                                        }
                                        t = r;
                                    }
                                    let i = d({
                                        url: e.responseURL,
                                        method: a,
                                        status: e.status,
                                        requestHeaders: t,
                                        responseHeaders: o,
                                        responseCookies: _,
                                    });
                                    (0, n.eN)(i);
                                }
                            })(I, e, _, c);
                        } catch (t) {
                            R.X && E.kg.warn("Error while extracting response event form XHR response", t);
                        }
                    });
        },
    };
});
function A(t, e) {
    let a,
        r = (function (t) {
            let e = {};
            return (
                t.forEach((t, a) => {
                    e[a] = t;
                }),
                e
            );
        })(e.headers);
    try {
        let e = r[t] || r[t.toLowerCase()] || void 0;
        e && (a = N(e));
    } catch (e) {
        R.X && E.kg.log(`Could not extract cookies from header ${t}`);
    }
    return [r, a];
}
function N(t) {
    return t.split("; ").reduce((t, e) => {
        let [a, r] = e.split("=");
        return a && r && (t[a] = r), t;
    }, {});
}
function T(t, e, a) {
    var r, _;
    return (
        (r = t.failedRequestStatusCodes),
        r.some((t) => ("number" == typeof t ? t === e : e >= t[0] && e <= t[1])) &&
            ((_ = t.failedRequestTargets), _.some((t) => ("string" == typeof t ? a.includes(t) : t.test(a)))) &&
            !(0, i.W)(a, (0, o.s3)())
    );
}
function d(t) {
    let e = `HTTP Client Error with status code: ${t.status}`,
        a = {
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
        (0, I.EG)(a, {
            type: "http.client",
            handled: !1,
        }),
        a
    );
}
function f() {
    let t = (0, o.s3)();
    return !!t && !!t.getOptions().sendDefaultPii;
}
