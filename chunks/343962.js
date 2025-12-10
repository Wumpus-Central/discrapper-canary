r.d(t, { m: () => p });
var n = r(840247),
    a = r(490990),
    i = r(288101),
    o = r(661822),
    _ = r(509440),
    s = r(8062),
    c = r(451542),
    E = r(82255),
    l = r(25855),
    u = r(366000),
    d = r(700868),
    I = r(464338);
function p(e, t, r, R, T = "auto.http.browser") {
    if (!e.fetchData) return;
    let A = (0, c.z)() && t(e.fetchData.url);
    if (e.endTimestamp && A) {
        let t = e.fetchData.__span;
        if (!t) return;
        let r = R[t];
        r &&
            ((function (e, t) {
                if (t.response) {
                    (0, u.Q0)(e, t.response.status);
                    let r = t.response && t.response.headers && t.response.headers.get("content-length");
                    if (r) {
                        let t = parseInt(r);
                        t > 0 && e.setAttribute("http.response_content_length", t);
                    }
                } else
                    t.error &&
                        e.setStatus({
                            code: u.jt,
                            message: "internal_error",
                        });
                e.end();
            })(r, e),
            delete R[t]);
        return;
    }
    let f = (0, _.nZ)(),
        N = (0, _.s3)(),
        { method: O, url: h } = e.fetchData,
        S = (function (e) {
            try {
                return new URL(e).href;
            } catch (e) {
                return;
            }
        })(h),
        D = S ? (0, n.en)(S).host : void 0,
        C = !!(0, E.HN)(),
        L =
            A && C
                ? (0, d.qp)({
                      name: `${O} ${h}`,
                      attributes: {
                          url: h,
                          type: "fetch",
                          "http.method": O,
                          "http.url": S,
                          "server.address": D,
                          [s.S3]: T,
                          [s.$J]: "http.client",
                      },
                  })
                : new l.b();
    if (((e.fetchData.__span = L.spanContext().spanId), (R[L.spanContext().spanId] = L), r(e.fetchData.url) && N)) {
        let t = e.args[0];
        e.args[1] = e.args[1] || {};
        let r = e.args[1];
        r.headers = (function (e, t, r, n, s) {
            let {
                    traceId: c,
                    spanId: l,
                    sampled: u,
                    dsc: d,
                } = {
                    ...(0, _.aF)().getPropagationContext(),
                    ...r.getPropagationContext(),
                },
                p = s ? (0, E.Hb)(s) : (0, a.$p)(c, l, u),
                R = (0, i.IQ)(d || (s ? (0, I.jC)(s) : (0, I._l)(c, t))),
                T = n.headers || ("undefined" != typeof Request && (0, o.V9)(e, Request) ? e.headers : void 0);
            if (!T)
                return {
                    "sentry-trace": p,
                    baggage: R,
                };
            if ("undefined" != typeof Headers && (0, o.V9)(T, Headers)) {
                let e = new Headers(T);
                return e.append("sentry-trace", p), R && e.append(i.bU, R), e;
            }
            if (Array.isArray(T)) {
                let e = [...T, ["sentry-trace", p]];
                return R && e.push([i.bU, R]), e;
            }
            {
                let e = "baggage" in T ? T.baggage : void 0,
                    t = [];
                return (
                    Array.isArray(e) ? t.push(...e) : e && t.push(e),
                    R && t.push(R),
                    {
                        ...T,
                        "sentry-trace": p,
                        baggage: t.length > 0 ? t.join(",") : void 0,
                    }
                );
            }
        })(t, N, f, r, (0, c.z)() && C ? L : void 0);
    }
    return L;
}
