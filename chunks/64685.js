r.d(t, {
    Uf: () => c,
    cf: () => E,
});
var n = r(573736),
    a = r(370336),
    i = r(694043),
    o = r(101284),
    _ = r(899517),
    s = r(578346);
function c(e, t) {
    let r = "fetch";
    (0, s.Hj)(r, e), (0, s.D2)(r, () => l(void 0, t));
}
function E(e) {
    let t = "fetch-body-resolved";
    (0, s.Hj)(t, e), (0, s.D2)(t, () => l(u));
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
                                url: I(t),
                                method: d(r, "method") ? String(r.method).toUpperCase() : "GET",
                            };
                        }
                        let t = e[0];
                        return {
                            url: I(t),
                            method: d(t, "method") ? String(t.method).toUpperCase() : "GET",
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
                    async (t) => {
                        if (e) e(t);
                        else {
                            let e = {
                                ...E,
                                endTimestamp: 1000 * (0, o.ph)(),
                                response: t,
                            };
                            (0, s.rK)("fetch", e);
                        }
                        return t;
                    },
                    (t) => {
                        if (!e) {
                            let e = {
                                ...E,
                                endTimestamp: 1000 * (0, o.ph)(),
                                error: t,
                            };
                            throw (
                                ((0, s.rK)("fetch", e),
                                (0, n.VZ)(t) && void 0 === t.stack && ((t.stack = l), (0, a.xp)(t, "framesToPop", 1)),
                                t)
                            );
                        }
                    },
                );
            };
        });
}
async function u(e) {
    let t;
    try {
        t = e.clone();
    } catch (e) {}
    await (function (e, t) {
        if (e && e.body) {
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
            n.read()
                .then(r)
                .then(() => {
                    t();
                })
                .catch(() => {});
        }
    })(t, () => {
        (0, s.rK)("fetch-body-resolved", {
            endTimestamp: 1000 * (0, o.ph)(),
            response: e,
        });
    });
}
function d(e, t) {
    return !!e && "object" == typeof e && !!e[t];
}
function I(e) {
    return "string" == typeof e ? e : e ? (d(e, "url") ? e.url : e.toString ? e.toString() : "") : "";
}
