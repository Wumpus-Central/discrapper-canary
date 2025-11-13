a.d(e, {
    Uf: () => c,
    cf: () => s,
});
var r = a(573736),
    _ = a(370336),
    n = a(694043),
    o = a(101284),
    i = a(899517),
    E = a(578346);
function c(t, e) {
    let a = "fetch";
    (0, E.Hj)(a, t), (0, E.D2)(a, () => l(void 0, e));
}
function s(t) {
    let e = "fetch-body-resolved";
    (0, E.Hj)(e, t), (0, E.D2)(e, () => l(I));
}
function l(t, e = !1) {
    (!e || (0, n.t$)()) &&
        (0, _.hl)(i.n, "fetch", function (e) {
            return function (...a) {
                let { method: n, url: c } = (function (t) {
                        if (0 === t.length)
                            return {
                                method: "GET",
                                url: "",
                            };
                        if (2 === t.length) {
                            let [e, a] = t;
                            return {
                                url: u(e),
                                method: R(a, "method") ? String(a.method).toUpperCase() : "GET",
                            };
                        }
                        let e = t[0];
                        return {
                            url: u(e),
                            method: R(e, "method") ? String(e.method).toUpperCase() : "GET",
                        };
                    })(a),
                    s = {
                        args: a,
                        fetchData: {
                            method: n,
                            url: c,
                        },
                        startTimestamp: 1000 * (0, o.ph)(),
                    };
                t || (0, E.rK)("fetch", { ...s });
                let l = Error().stack;
                return e.apply(i.n, a).then(
                    async (e) => {
                        if (t) t(e);
                        else {
                            let t = {
                                ...s,
                                endTimestamp: 1000 * (0, o.ph)(),
                                response: e,
                            };
                            (0, E.rK)("fetch", t);
                        }
                        return e;
                    },
                    (e) => {
                        if (!t) {
                            let t = {
                                ...s,
                                endTimestamp: 1000 * (0, o.ph)(),
                                error: e,
                            };
                            throw (
                                ((0, E.rK)("fetch", t),
                                (0, r.VZ)(e) && void 0 === e.stack && ((e.stack = l), (0, _.xp)(e, "framesToPop", 1)),
                                e)
                            );
                        }
                    },
                );
            };
        });
}
async function I(t) {
    let e;
    try {
        e = t.clone();
    } catch (t) {}
    await (function (t, e) {
        if (t && t.body) {
            let r = t.body.getReader();
            async function a({ done: t }) {
                if (t) return Promise.resolve();
                try {
                    let t = await Promise.race([
                        r.read(),
                        new Promise((t) => {
                            setTimeout(() => {
                                t({ done: !0 });
                            }, 5000);
                        }),
                    ]);
                    await a(t);
                } catch (t) {}
            }
            r.read()
                .then(a)
                .then(() => {
                    e();
                })
                .catch(() => {});
        }
    })(e, () => {
        (0, E.rK)("fetch-body-resolved", {
            endTimestamp: 1000 * (0, o.ph)(),
            response: t,
        });
    });
}
function R(t, e) {
    return !!t && "object" == typeof t && !!t[e];
}
function u(t) {
    return "string" == typeof t ? t : t ? (R(t, "url") ? t.url : t.toString ? t.toString() : "") : "";
}
