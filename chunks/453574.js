a.d(e, { l: () => R });
var r = a(157079),
    n = a(151122),
    _ = a(233517),
    o = a(263449),
    i = a(946471),
    c = a(622916),
    s = a(694043),
    E = a(64685),
    l = a(899517),
    u = a(394798),
    I = a(454463);
let R = (0, n._I)((t = {}) => {
    let e = {
        failedRequestStatusCodes: [[500, 599]],
        failedRequestTargets: [/.*/],
        ...t
    };
    return {
        name: 'HttpClient',
        setup(t) {
            var a, n, i, u;
            (a = t),
                (n = e),
                (0, s.t$)() &&
                    (0, E.Uf)((t) => {
                        if ((0, o.s3)() !== a) return;
                        let { response: e, args: r } = t,
                            [i, c] = r;
                        e &&
                            (function (t, e, a, r) {
                                if (f(t, a.status, a.url)) {
                                    var n, o;
                                    let t,
                                        i,
                                        c,
                                        s,
                                        E = ((n = e), (!(o = r) && n instanceof Request) || (n instanceof Request && n.bodyUsed) ? n : new Request(n, o));
                                    N() && (([t, c] = d('Cookie', E)), ([i, s] = d('Set-Cookie', a)));
                                    let l = p({
                                        url: E.url,
                                        method: E.method,
                                        status: a.status,
                                        requestHeaders: t,
                                        responseHeaders: i,
                                        requestCookies: c,
                                        responseCookies: s
                                    });
                                    (0, _.eN)(l);
                                }
                            })(n, i, e, c);
                    }),
                (i = t),
                (u = e),
                'XMLHttpRequest' in l.n &&
                    (0, r.UK)((t) => {
                        if ((0, o.s3)() !== i) return;
                        let e = t.xhr,
                            a = e[r.xU];
                        if (!a) return;
                        let { method: n, request_headers: s } = a;
                        try {
                            !(function (t, e, a, r) {
                                if (f(t, e.status, e.responseURL)) {
                                    let t, n, o;
                                    if (N()) {
                                        try {
                                            let t = e.getResponseHeader('Set-Cookie') || e.getResponseHeader('set-cookie') || void 0;
                                            t && (n = A(t));
                                        } catch (t) {
                                            I.X && c.kg.log('Could not extract cookies from response headers');
                                        }
                                        try {
                                            o = (function (t) {
                                                let e = t.getAllResponseHeaders();
                                                return e
                                                    ? e.split('\r\n').reduce((t, e) => {
                                                          let [a, r] = e.split(': ');
                                                          return a && r && (t[a] = r), t;
                                                      }, {})
                                                    : {};
                                            })(e);
                                        } catch (t) {
                                            I.X && c.kg.log('Could not extract headers from response');
                                        }
                                        t = r;
                                    }
                                    let i = p({
                                        url: e.responseURL,
                                        method: a,
                                        status: e.status,
                                        requestHeaders: t,
                                        responseHeaders: o,
                                        responseCookies: n
                                    });
                                    (0, _.eN)(i);
                                }
                            })(u, e, n, s);
                        } catch (t) {
                            I.X && c.kg.warn('Error while extracting response event form XHR response', t);
                        }
                    });
        }
    };
});
function d(t, e) {
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
        e && (a = A(e));
    } catch (e) {
        I.X && c.kg.log(`Could not extract cookies from header ${t}`);
    }
    return [r, a];
}
function A(t) {
    return t.split('; ').reduce((t, e) => {
        let [a, r] = e.split('=');
        return a && r && (t[a] = r), t;
    }, {});
}
function f(t, e, a) {
    var r, n;
    return (r = t.failedRequestStatusCodes), r.some((t) => ('number' == typeof t ? t === e : e >= t[0] && e <= t[1])) && ((n = t.failedRequestTargets), n.some((t) => ('string' == typeof t ? a.includes(t) : t.test(a)))) && !(0, i.W)(a, (0, o.s3)());
}
function p(t) {
    let e = `HTTP Client Error with status code: ${t.status}`,
        a = {
            message: e,
            exception: {
                values: [
                    {
                        type: 'Error',
                        value: e
                    }
                ]
            },
            request: {
                url: t.url,
                method: t.method,
                headers: t.requestHeaders,
                cookies: t.requestCookies
            },
            contexts: {
                response: {
                    status_code: t.status,
                    headers: t.responseHeaders,
                    cookies: t.responseCookies,
                    body_size: (function (t) {
                        if (t) {
                            let e = t['Content-Length'] || t['content-length'];
                            if (e) return parseInt(e, 10);
                        }
                    })(t.responseHeaders)
                }
            }
        };
    return (
        (0, u.EG)(a, {
            type: 'http.client',
            handled: !1
        }),
        a
    );
}
function N() {
    let t = (0, o.s3)();
    return !!t && !!t.getOptions().sendDefaultPii;
}
