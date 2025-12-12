n.d(t, { m: () => f });
var r = n(840247),
    i = n(490990),
    a = n(288101),
    o = n(661822),
    _ = n(509440),
    s = n(8062),
    c = n(451542),
    E = n(82255),
    l = n(25855),
    u = n(366000),
    d = n(700868),
    p = n(464338);
function f(e, t, n, I, T = "auto.http.browser") {
    if (!e.fetchData) return;
    let R = (0, c.z)() && t(e.fetchData.url);
    if (e.endTimestamp && R) {
        let t = e.fetchData.__span;
        if (!t) return;
        let n = I[t];
        n &&
            ((function (e, t) {
                if (t.response) {
                    (0, u.Q0)(e, t.response.status);
                    let n = t.response && t.response.headers && t.response.headers.get("content-length");
                    if (n) {
                        let t = parseInt(n);
                        t > 0 && e.setAttribute("http.response_content_length", t);
                    }
                } else
                    t.error &&
                        e.setStatus({
                            code: u.jt,
                            message: "internal_error",
                        });
                e.end();
            })(n, e),
            delete I[t]);
        return;
    }
    let A = (0, _.nZ)(),
        N = (0, _.s3)(),
        { method: h, url: O } = e.fetchData,
        S = (function (e) {
            try {
                return new URL(e).href;
            } catch (e) {
                return;
            }
        })(O),
        L = S ? (0, r.en)(S).host : void 0,
        g = !!(0, E.HN)(),
        m =
            R && g
                ? (0, d.qp)({
                      name: `${h} ${O}`,
                      attributes: {
                          url: O,
                          type: "fetch",
                          "http.method": h,
                          "http.url": S,
                          "server.address": L,
                          [s.S3]: T,
                          [s.$J]: "http.client",
                      },
                  })
                : new l.b();
    if (((e.fetchData.__span = m.spanContext().spanId), (I[m.spanContext().spanId] = m), n(e.fetchData.url) && N)) {
        let t = e.args[0];
        e.args[1] = e.args[1] || {};
        let n = e.args[1];
        n.headers = (function (e, t, n, r, s) {
            let {
                    traceId: c,
                    spanId: l,
                    sampled: u,
                    dsc: d,
                } = {
                    ...(0, _.aF)().getPropagationContext(),
                    ...n.getPropagationContext(),
                },
                f = s ? (0, E.Hb)(s) : (0, i.$p)(c, l, u),
                I = (0, a.IQ)(d || (s ? (0, p.jC)(s) : (0, p._l)(c, t))),
                T = r.headers || ("undefined" != typeof Request && (0, o.V9)(e, Request) ? e.headers : void 0);
            if (!T)
                return {
                    "sentry-trace": f,
                    baggage: I,
                };
            if ("undefined" != typeof Headers && (0, o.V9)(T, Headers)) {
                let e = new Headers(T);
                return e.append("sentry-trace", f), I && e.append(a.bU, I), e;
            }
            if (Array.isArray(T)) {
                let e = [...T, ["sentry-trace", f]];
                return I && e.push([a.bU, I]), e;
            }
            {
                let e = "baggage" in T ? T.baggage : void 0,
                    t = [];
                return (
                    Array.isArray(e) ? t.push(...e) : e && t.push(e),
                    I && t.push(I),
                    {
                        ...T,
                        "sentry-trace": f,
                        baggage: t.length > 0 ? t.join(",") : void 0,
                    }
                );
            }
        })(t, N, A, n, (0, c.z)() && g ? m : void 0);
    }
    return m;
}
