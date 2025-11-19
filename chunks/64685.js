_.d(e, {
    Uf: () => c,
    cf: () => s,
});
var a = _(573736),
    r = _(370336),
    n = _(694043),
    o = _(101284),
    E = _(899517),
    i = _(578346);
function c(t, e) {
    let _ = "fetch";
    (0, i.Hj)(_, t), (0, i.D2)(_, () => l(void 0, e));
}
function s(t) {
    let e = "fetch-body-resolved";
    (0, i.Hj)(e, t), (0, i.D2)(e, () => l(I));
}
function l(t, e = !1) {
    (!e || (0, n.t$)()) &&
        (0, r.hl)(E.n, "fetch", function (e) {
            return function (..._) {
                let { method: n, url: c } = (function (t) {
                        if (0 === t.length)
                            return {
                                method: "GET",
                                url: "",
                            };
                        if (2 === t.length) {
                            let [e, _] = t;
                            return {
                                url: N(e),
                                method: R(_, "method") ? String(_.method).toUpperCase() : "GET",
                            };
                        }
                        let e = t[0];
                        return {
                            url: N(e),
                            method: R(e, "method") ? String(e.method).toUpperCase() : "GET",
                        };
                    })(_),
                    s = {
                        args: _,
                        fetchData: {
                            method: n,
                            url: c,
                        },
                        startTimestamp: 1000 * (0, o.ph)(),
                    };
                t || (0, i.rK)("fetch", { ...s });
                let l = Error().stack;
                return e.apply(E.n, _).then(
                    async (e) => {
                        if (t) t(e);
                        else {
                            let t = {
                                ...s,
                                endTimestamp: 1000 * (0, o.ph)(),
                                response: e,
                            };
                            (0, i.rK)("fetch", t);
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
                                ((0, i.rK)("fetch", t),
                                (0, a.VZ)(e) && void 0 === e.stack && ((e.stack = l), (0, r.xp)(e, "framesToPop", 1)),
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
            let a = t.body.getReader();
            async function _({ done: t }) {
                if (t) return Promise.resolve();
                try {
                    let t = await Promise.race([
                        a.read(),
                        new Promise((t) => {
                            setTimeout(() => {
                                t({ done: !0 });
                            }, 5000);
                        }),
                    ]);
                    await _(t);
                } catch (t) {}
            }
            a.read()
                .then(_)
                .then(() => {
                    e();
                })
                .catch(() => {});
        }
    })(e, () => {
        (0, i.rK)("fetch-body-resolved", {
            endTimestamp: 1000 * (0, o.ph)(),
            response: t,
        });
    });
}
function R(t, e) {
    return !!t && "object" == typeof t && !!t[e];
}
function N(t) {
    return "string" == typeof t ? t : t ? (R(t, "url") ? t.url : t.toString ? t.toString() : "") : "";
}
