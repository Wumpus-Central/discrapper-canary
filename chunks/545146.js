r.d(t, {
    Uf: () => c,
    cf: () => E,
});
var n = r(661822),
    a = r(886649),
    i = r(635196),
    o = r(343573),
    _ = r(606093),
    s = r(958209);
function c(e, t) {
    let r = "fetch";
    (0, s.Hj)(r, e), (0, s.D2)(r, () => l(void 0, t));
}
function E(e) {
    let t = "fetch-body-resolved";
    (0, s.Hj)(t, e), (0, s.D2)(t, () => l(d));
}
function l(e, t = !1) {
    (!t || (0, i.t$)()) &&
        (0, a.hl)(_.n, "fetch", function (t) {
            return function (...r) {
                let { method: i, url: c } = (function (e) {
                        if (0 === e.length)
                            return {
                                method: "GET",
                                url: "",
                            };
                        if (2 === e.length) {
                            let [t, r] = e;
                            return {
                                url: p(t),
                                method: I(r, "method") ? String(r.method).toUpperCase() : "GET",
                            };
                        }
                        let t = e[0];
                        return {
                            url: p(t),
                            method: I(t, "method") ? String(t.method).toUpperCase() : "GET",
                        };
                    })(r),
                    E = {
                        args: r,
                        fetchData: {
                            method: i,
                            url: c,
                        },
                        startTimestamp: 1000 * (0, o.ph)(),
                    };
                e || (0, s.rK)("fetch", { ...E });
                let l = Error().stack;
                return t.apply(_.n, r).then(
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
                            (0, n.VZ)(e) && void 0 === e.stack && ((e.stack = l), (0, a.xp)(e, "framesToPop", 1)),
                            e)
                        );
                    },
                );
            };
        });
}
async function u(e, t) {
    if (e && e.body && e.body.getReader) {
        let n = e.body.getReader();
        async function r({ done: e }) {
            if (e) return Promise.resolve();
            try {
                let e = await Promise.race([
                    n.read(),
                    new Promise((e) => {
                        setTimeout(() => {
                            e({ done: !0 });
                        }, 5000);
                    }),
                ]);
                await r(e);
            } catch (e) {}
        }
        return n
            .read()
            .then(r)
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
function I(e, t) {
    return !!e && "object" == typeof e && !!e[t];
}
function p(e) {
    return "string" == typeof e ? e : e ? (I(e, "url") ? e.url : e.toString ? e.toString() : "") : "";
}
