n.d(t, {
    Uf: () => c,
    cf: () => E,
});
var r = n(661822),
    i = n(886649),
    a = n(635196),
    o = n(343573),
    _ = n(606093),
    s = n(958209);
function c(e, t) {
    let n = "fetch";
    (0, s.Hj)(n, e), (0, s.D2)(n, () => l(void 0, t));
}
function E(e) {
    let t = "fetch-body-resolved";
    (0, s.Hj)(t, e), (0, s.D2)(t, () => l(d));
}
function l(e, t = !1) {
    (!t || (0, a.t$)()) &&
        (0, i.hl)(_.n, "fetch", function (t) {
            return function (...n) {
                let { method: a, url: c } = (function (e) {
                        if (0 === e.length)
                            return {
                                method: "GET",
                                url: "",
                            };
                        if (2 === e.length) {
                            let [t, n] = e;
                            return {
                                url: f(t),
                                method: p(n, "method") ? String(n.method).toUpperCase() : "GET",
                            };
                        }
                        let t = e[0];
                        return {
                            url: f(t),
                            method: p(t, "method") ? String(t.method).toUpperCase() : "GET",
                        };
                    })(n),
                    E = {
                        args: n,
                        fetchData: {
                            method: a,
                            url: c,
                        },
                        startTimestamp: 1000 * (0, o.ph)(),
                    };
                e || (0, s.rK)("fetch", { ...E });
                let l = Error().stack;
                return t.apply(_.n, n).then(
                    async (t) => (
                        e
                            ? e(t)
                            : (0, s.rK)("fetch", {
                                  ...E,
                                  endTimestamp: 1000 * (0, o.ph)(),
                                  response: t,
                              }),
                        t
                    ),
                    (e) => {
                        throw (
                            ((0, s.rK)("fetch", {
                                ...E,
                                endTimestamp: 1000 * (0, o.ph)(),
                                error: e,
                            }),
                            (0, r.VZ)(e) && void 0 === e.stack && ((e.stack = l), (0, i.xp)(e, "framesToPop", 1)),
                            e)
                        );
                    },
                );
            };
        });
}
async function u(e, t) {
    if (e && e.body && e.body.getReader) {
        let r = e.body.getReader();
        async function n({ done: e }) {
            if (e) return Promise.resolve();
            try {
                let e = await Promise.race([
                    r.read(),
                    new Promise((e) => {
                        setTimeout(() => {
                            e({ done: !0 });
                        }, 5000);
                    }),
                ]);
                await n(e);
            } catch (e) {}
        }
        return r
            .read()
            .then(n)
            .then(t)
            .catch(() => void 0);
    }
}
async function d(e) {
    let t;
    try {
        t = e.clone();
    } catch (e) {
        return;
    }
    await u(t, () => {
        (0, s.rK)("fetch-body-resolved", {
            endTimestamp: 1000 * (0, o.ph)(),
            response: e,
        });
    });
}
function p(e, t) {
    return !!e && "object" == typeof e && !!e[t];
}
function f(e) {
    return "string" == typeof e ? e : e ? (p(e, "url") ? e.url : e.toString ? e.toString() : "") : "";
}
