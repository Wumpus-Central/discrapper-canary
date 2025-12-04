r.d(t, { l: () => I });
var n = r(568538),
    a = r(688560),
    i = r(771560),
    o = r(509440),
    _ = r(918456),
    s = r(98076),
    c = r(635196),
    E = r(545146),
    l = r(606093),
    u = r(431660),
    d = r(549040);
let I = (0, a._I)((e = {}) => {
    let t = {
        failedRequestStatusCodes: [[500, 599]],
        failedRequestTargets: [/.*/],
        ...e,
    };
    return {
        name: "HttpClient",
        setup(e) {
            var r, a, _, u;
            (r = e),
                (a = t),
                (0, c.t$)() &&
                    (0, E.Uf)((e) => {
                        if ((0, o.s3)() !== r) return;
                        let { response: t, args: n } = e,
                            [_, s] = n;
                        t &&
                            (function (e, t, r, n) {
                                if (T(e, r.status, r.url)) {
                                    var a, o;
                                    let e,
                                        _,
                                        s,
                                        c,
                                        E =
                                            ((a = t),
                                            (!(o = n) && a instanceof Request) || (a instanceof Request && a.bodyUsed)
                                                ? a
                                                : new Request(a, o));
                                    N() && (([e, s] = p("Cookie", E)), ([_, c] = p("Set-Cookie", r)));
                                    let l = A({
                                        url: E.url,
                                        method: E.method,
                                        status: r.status,
                                        requestHeaders: e,
                                        responseHeaders: _,
                                        requestCookies: s,
                                        responseCookies: c,
                                    });
                                    (0, i.eN)(l);
                                }
                            })(a, _, t, s);
                    }),
                (_ = e),
                (u = t),
                "XMLHttpRequest" in l.n &&
                    (0, n.UK)((e) => {
                        if ((0, o.s3)() !== _) return;
                        let t = e.xhr,
                            r = t[n.xU];
                        if (!r) return;
                        let { method: a, request_headers: c } = r;
                        try {
                            !(function (e, t, r, n) {
                                if (T(e, t.status, t.responseURL)) {
                                    let e, a, o;
                                    if (N()) {
                                        try {
                                            let e =
                                                t.getResponseHeader("Set-Cookie") ||
                                                t.getResponseHeader("set-cookie") ||
                                                void 0;
                                            e && (a = R(e));
                                        } catch (e) {
                                            d.X && s.kg.log("Could not extract cookies from response headers");
                                        }
                                        try {
                                            o = (function (e) {
                                                let t = e.getAllResponseHeaders();
                                                return t
                                                    ? t.split("\r\n").reduce((e, t) => {
                                                          let [r, n] = t.split(": ");
                                                          return r && n && (e[r] = n), e;
                                                      }, {})
                                                    : {};
                                            })(t);
                                        } catch (e) {
                                            d.X && s.kg.log("Could not extract headers from response");
                                        }
                                        e = n;
                                    }
                                    let _ = A({
                                        url: t.responseURL,
                                        method: r,
                                        status: t.status,
                                        requestHeaders: e,
                                        responseHeaders: o,
                                        responseCookies: a,
                                    });
                                    (0, i.eN)(_);
                                }
                            })(u, t, a, c);
                        } catch (e) {
                            d.X && s.kg.warn("Error while extracting response event form XHR response", e);
                        }
                    });
        },
    };
});
function p(e, t) {
    let r,
        n = (function (e) {
            let t = {};
            return (
                e.forEach((e, r) => {
                    t[r] = e;
                }),
                t
            );
        })(t.headers);
    try {
        let t = n[e] || n[e.toLowerCase()] || void 0;
        t && (r = R(t));
    } catch (t) {
        d.X && s.kg.log(`Could not extract cookies from header ${e}`);
    }
    return [n, r];
}
function R(e) {
    return e.split("; ").reduce((e, t) => {
        let [r, n] = t.split("=");
        return r && n && (e[r] = n), e;
    }, {});
}
function T(e, t, r) {
    var n, a;
    return (
        (n = e.failedRequestStatusCodes),
        n.some((e) => ("number" == typeof e ? e === t : t >= e[0] && t <= e[1])) &&
            ((a = e.failedRequestTargets), a.some((e) => ("string" == typeof e ? r.includes(e) : e.test(r)))) &&
            !(0, _.W)(r, (0, o.s3)())
    );
}
function A(e) {
    let t = `HTTP Client Error with status code: ${e.status}`,
        r = {
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
        (0, u.EG)(r, {
            type: "http.client",
            handled: !1,
        }),
        r
    );
}
function N() {
    let e = (0, o.s3)();
    return !!e && !!e.getOptions().sendDefaultPii;
}
