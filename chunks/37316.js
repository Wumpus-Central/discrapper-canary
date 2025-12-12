n.d(t, { l: () => p });
var r = n(568538),
    i = n(688560),
    a = n(771560),
    o = n(509440),
    _ = n(918456),
    s = n(98076),
    c = n(635196),
    E = n(545146),
    l = n(606093),
    u = n(431660),
    d = n(549040);
let p = (0, i._I)((e = {}) => {
    let t = {
        failedRequestStatusCodes: [[500, 599]],
        failedRequestTargets: [/.*/],
        ...e,
    };
    return {
        name: "HttpClient",
        setup(e) {
            var n, i, _, u;
            (n = e),
                (i = t),
                (0, c.t$)() &&
                    (0, E.Uf)((e) => {
                        if ((0, o.s3)() !== n) return;
                        let { response: t, args: r } = e,
                            [_, s] = r;
                        t &&
                            (function (e, t, n, r) {
                                if (T(e, n.status, n.url)) {
                                    var i, o;
                                    let e,
                                        _,
                                        s,
                                        c,
                                        E =
                                            ((i = t),
                                            (!(o = r) && i instanceof Request) || (i instanceof Request && i.bodyUsed)
                                                ? i
                                                : new Request(i, o));
                                    A() && (([e, s] = f("Cookie", E)), ([_, c] = f("Set-Cookie", n)));
                                    let l = R({
                                        url: E.url,
                                        method: E.method,
                                        status: n.status,
                                        requestHeaders: e,
                                        responseHeaders: _,
                                        requestCookies: s,
                                        responseCookies: c,
                                    });
                                    (0, a.eN)(l);
                                }
                            })(i, _, t, s);
                    }),
                (_ = e),
                (u = t),
                "XMLHttpRequest" in l.n &&
                    (0, r.UK)((e) => {
                        if ((0, o.s3)() !== _) return;
                        let t = e.xhr,
                            n = t[r.xU];
                        if (!n) return;
                        let { method: i, request_headers: c } = n;
                        try {
                            !(function (e, t, n, r) {
                                if (T(e, t.status, t.responseURL)) {
                                    let e, i, o;
                                    if (A()) {
                                        try {
                                            let e =
                                                t.getResponseHeader("Set-Cookie") ||
                                                t.getResponseHeader("set-cookie") ||
                                                void 0;
                                            e && (i = I(e));
                                        } catch (e) {
                                            d.X && s.kg.log("Could not extract cookies from response headers");
                                        }
                                        try {
                                            o = (function (e) {
                                                let t = e.getAllResponseHeaders();
                                                return t
                                                    ? t.split("\r\n").reduce((e, t) => {
                                                          let [n, r] = t.split(": ");
                                                          return n && r && (e[n] = r), e;
                                                      }, {})
                                                    : {};
                                            })(t);
                                        } catch (e) {
                                            d.X && s.kg.log("Could not extract headers from response");
                                        }
                                        e = r;
                                    }
                                    let _ = R({
                                        url: t.responseURL,
                                        method: n,
                                        status: t.status,
                                        requestHeaders: e,
                                        responseHeaders: o,
                                        responseCookies: i,
                                    });
                                    (0, a.eN)(_);
                                }
                            })(u, t, i, c);
                        } catch (e) {
                            d.X && s.kg.warn("Error while extracting response event form XHR response", e);
                        }
                    });
        },
    };
});
function f(e, t) {
    let n,
        r = (function (e) {
            let t = {};
            return (
                e.forEach((e, n) => {
                    t[n] = e;
                }),
                t
            );
        })(t.headers);
    try {
        let t = r[e] || r[e.toLowerCase()] || void 0;
        t && (n = I(t));
    } catch (t) {
        d.X && s.kg.log(`Could not extract cookies from header ${e}`);
    }
    return [r, n];
}
function I(e) {
    return e.split("; ").reduce((e, t) => {
        let [n, r] = t.split("=");
        return n && r && (e[n] = r), e;
    }, {});
}
function T(e, t, n) {
    var r, i;
    return (
        (r = e.failedRequestStatusCodes),
        r.some((e) => ("number" == typeof e ? e === t : t >= e[0] && t <= e[1])) &&
            ((i = e.failedRequestTargets), i.some((e) => ("string" == typeof e ? n.includes(e) : e.test(n)))) &&
            !(0, _.W)(n, (0, o.s3)())
    );
}
function R(e) {
    let t = `HTTP Client Error with status code: ${e.status}`,
        n = {
            message: t,
            exception: {
                values: [
                    {
                        type: "Error",
                        value: t,
                    },
                ],
            },
            request: {
                url: e.url,
                method: e.method,
                headers: e.requestHeaders,
                cookies: e.requestCookies,
            },
            contexts: {
                response: {
                    status_code: e.status,
                    headers: e.responseHeaders,
                    cookies: e.responseCookies,
                    body_size: (function (e) {
                        if (e) {
                            let t = e["Content-Length"] || e["content-length"];
                            if (t) return parseInt(t, 10);
                        }
                    })(e.responseHeaders),
                },
            },
        };
    return (
        (0, u.EG)(n, {
            type: "http.client",
            handled: !1,
        }),
        n
    );
}
function A() {
    let e = (0, o.s3)();
    return !!e && !!e.getOptions().sendDefaultPii;
}
