"use strict";
n.d(t, {
    $F: () => l.LG,
    Bo: () => R,
    Cu: () => b,
    IA: () => y,
    TP: () => L,
    Wl: () => d.L,
    bG: () => 50035,
    fT: () => U,
    ni: () => o.n,
    oh: () => A,
    tr: () => P,
}),
    n(321073);
var i = n(333405),
    r = n.n(i),
    a = n(158390);
n(423034);
var s = n(118356),
    l = n(319400),
    o = n(467710);
n(1880);
var d = n(335713),
    c = n(264572).Buffer;
let u = new s.Vy("HTTPUtils"),
    _ = new Set([502, 504, 507, 598, 599, 522, 523, 524]),
    E = new Set([429, 503]);
class A extends Error {
    method;
    url;
    ok;
    status;
    body;
    text;
    headers;
    retryAfter;
    constructor({ method: e, url: t, ok: n, status: i, body: r, text: a, headers: s, retryAfter: l }, ...o) {
        const d = t.replace(/\d+/g, "xxx");
        super(`${e.toUpperCase()} ${d} [${i}]`, ...o),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = n),
            (this.status = i),
            (this.body = r),
            (this.text = a),
            (this.headers = s),
            (this.retryAfter = l);
    }
}
function h(e, t) {
    let n = e?.["retry-after"] ?? e?.["Retry-After"];
    if ("string" == typeof n) {
        let e = parseInt(n, 10);
        if (Number.isFinite(e) && e > 0) return e;
    }
    if (null != t && "object" == typeof t) {
        let e = t.retry_after;
        if ("number" == typeof e && Number.isFinite(e) && e > 0) return e;
    }
}
function I(e, t, n, i, s) {
    if (t.signal?.aborted) {
        let e = Object.assign(Error("Request aborted"), { code: "ABORTED" });
        T(t), i(e), null != s && s({ ok: !1, hasErr: !0, err: e });
        return;
    }
    let l = r()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(l), null != t.query)) {
        let e = t.query;
        if ("object" == typeof e) {
            let t = { ...e };
            Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t);
        }
        l.query(e);
    }
    if (
        (t.body && l.send(t.body),
        null != t.headers && l.set(t.headers),
        !0 === t.withCredentials && l.withCredentials(),
        null != t.reason && l.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)),
        t.attachments?.forEach((e) => {
            l.attach(e.name, e.file, e.filename);
        }),
        t.fields?.forEach((e) => {
            l.field(e.name, e.value);
        }),
        null != t.context)
    ) {
        let e = (function (e) {
            try {
                return c.from(JSON.stringify(e)).toString("base64");
            } catch (e) {
                return null;
            }
        })(t.context);
        null != e && l.set("X-Context-Properties", e);
    }
    null != t.retried && 0 !== t.retried && l.set("X-Failed-Requests", `${t.retried}`),
        null != t.timeout && 0 !== t.timeout && l.timeout(t.timeout),
        t.binary && l.responseType("blob"),
        null != t.onRequestProgress &&
            l.on("progress", (e) => {
                t.onRequestProgress?.(e);
            });
    let d = () => {
            (t.backoff = null != t.backoff ? t.backoff : new a.A()),
                (t.retried = (null != t.retried ? t.retried : 0) + 1),
                t.backoff.fail(() => v(t.url).then(() => I(e, t, n, i, s)));
        },
        u = D?.prepareRequest?.(l);
    l.ok((e) => null != e.status),
        l.then(
            (r) => {
                if (null != t.retries && t.retries-- > 0 && _.has(r.status)) return d();
                let a = {
                    ok: r.ok,
                    headers: r.headers,
                    body: r.body,
                    text: r.text,
                    status: r.status,
                    retryAfter: h(r.headers, r.body),
                };
                T(t, a);
                let l = !1,
                    c = (r, a) => {
                        let o = { ...t, headers: { ...t.headers, ...r }, interceptResponse: a };
                        (l = !0), I(e, o, n, i, s);
                    },
                    E = (e) => {
                        l || (i(e), s?.({ ok: !1, hasErr: !0, err: e }));
                    };
                if (t?.interceptResponse?.(r, c, E) !== !0 && D?.interceptResponse?.(r, c, E, u) !== !0) {
                    if (r.ok) n(a);
                    else {
                        if (t.oldFormErrors && a?.body?.code === 50035) {
                            let { errors: e } = a.body;
                            null != e && (a.body = (0, o.n)(e));
                        }
                        t.rejectWithError
                            ? i(
                                  new A({
                                      method: e,
                                      url: t.url,
                                      ok: a.ok,
                                      status: a.status,
                                      body: a.body,
                                      text: a.text,
                                      headers: a.headers,
                                      retryAfter: a.retryAfter,
                                  }),
                              )
                            : i(a);
                    }
                    null != s && s({ hasErr: !1, ...a });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? d()
                    : (T(t), i(e), null != s && s({ ok: !1, hasErr: !0, err: e }));
            },
        ),
        t.signal?.aborted ? l.abort() : t.signal?.addEventListener("abort", () => l.abort(), { once: !0 });
}
let f = new Map();
function p(e) {
    let t = f.get(e);
    if (null == t)
        return void u.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        u.verbose("rateLimitExpirationHandler: removing key for", e), f.delete(e);
        return;
    }
    u.verbose("rateLimitExpirationHandler: moving to next record for ", e), n();
}
function T(e, t) {
    var n;
    let i = f.get(e.url);
    if (null != t && ((n = t.status), E.has(n))) {
        let n = i?.backoff ?? new a.A(1e3, 6e4),
            r = 1e3 * (h(t.headers, t.body) ?? 5),
            s = n.fail(void 0, r),
            l = Date.now() + s;
        if (null != i && i.retryAfterTimestamp >= l)
            return void u.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
        null != i && (u.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(i.timeoutId)),
            u.verbose(`cleanupRequestEntry: rate limit for ${e.url} retry after ${s}ms`);
        let o = setTimeout(() => p(e.url), s);
        f.set(e.url, {
            queue: i?.queue ?? [],
            retryAfterTimestamp: l,
            latestErrorMessage: String(t.body?.message),
            status: t.status,
            timeoutId: o,
            backoff: n,
        });
    } else
        null != i &&
            i.retryAfterTimestamp < Date.now() &&
            (u.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), p(e.url));
}
function m(e, t, n) {
    return new Promise((i, r) => {
        "string" == typeof t && (t = { url: t, rejectWithError: !1 });
        let a = f.get(t.url);
        if (null != a && t.failImmediatelyWhenRateLimited) {
            let e, t;
            return (
                (e = Math.round((a.retryAfterTimestamp - Date.now()) / 1e3)),
                void (r((t = { status: a.status, body: { message: a.latestErrorMessage, retry_after: e } })),
                null != n && n({ ok: !0, hasErr: !1, status: t.status, body: t.body, text: "", headers: {} }))
            );
        }
        null != a
            ? (u.verbose("makeRequest: queueing request for ", t.url), a.queue.push(I.bind(null, e, t, i, r, n)))
            : I(e, t, i, r, n);
    });
}
let g = m.bind(null, "get"),
    S = m.bind(null, "post"),
    N = m.bind(null, "put"),
    C = m.bind(null, "patch"),
    O = m.bind(null, "del"),
    R = { get: g, post: S, put: N, patch: C, del: O };
if (n.g.isServerRendering) {
    let e = (e, t) => Promise.resolve({ ok: !0, status: 200, headers: {}, body: null, text: "" });
    (g = e), (S = e), (N = e), (C = e), (O = e);
}
function L() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? `/v${window.GLOBAL_ENV.API_VERSION}` : "");
}
let D = null;
function y(e) {
    D = e;
}
let v = () => Promise.resolve();
function b(e) {
    v = e;
}
let M = () => !0;
function P(e) {
    M = e;
}
function U() {
    return M();
}
