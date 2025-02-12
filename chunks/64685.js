a.d(e, {
    Uf: () => s,
    cf: () => E
});
var r = a(573736),
    n = a(370336),
    _ = a(694043),
    o = a(101284),
    i = a(899517),
    c = a(578346);
function s(t, e) {
    let a = 'fetch';
    (0, c.Hj)(a, t), (0, c.D2)(a, () => l(void 0, e));
}
function E(t) {
    let e = 'fetch-body-resolved';
    (0, c.Hj)(e, t), (0, c.D2)(e, () => l(u));
}
function l(t, e = !1) {
    (!e || (0, _.t$)()) &&
        (0, n.hl)(i.n, 'fetch', function (e) {
            return function (...a) {
                let { method: _, url: s } = (function (t) {
                        if (0 === t.length)
                            return {
                                method: 'GET',
                                url: ''
                            };
                        if (2 === t.length) {
                            let [e, a] = t;
                            return {
                                url: R(e),
                                method: I(a, 'method') ? String(a.method).toUpperCase() : 'GET'
                            };
                        }
                        let e = t[0];
                        return {
                            url: R(e),
                            method: I(e, 'method') ? String(e.method).toUpperCase() : 'GET'
                        };
                    })(a),
                    E = {
                        args: a,
                        fetchData: {
                            method: _,
                            url: s
                        },
                        startTimestamp: 1000 * (0, o.ph)()
                    };
                t || (0, c.rK)('fetch', { ...E });
                let l = Error().stack;
                return e.apply(i.n, a).then(
                    async (e) => {
                        if (t) t(e);
                        else {
                            let t = {
                                ...E,
                                endTimestamp: 1000 * (0, o.ph)(),
                                response: e
                            };
                            (0, c.rK)('fetch', t);
                        }
                        return e;
                    },
                    (e) => {
                        if (!t) {
                            let t = {
                                ...E,
                                endTimestamp: 1000 * (0, o.ph)(),
                                error: e
                            };
                            throw ((0, c.rK)('fetch', t), (0, r.VZ)(e) && void 0 === e.stack && ((e.stack = l), (0, n.xp)(e, 'framesToPop', 1)), e);
                        }
                    }
                );
            };
        });
}
async function u(t) {
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
                        })
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
        (0, c.rK)('fetch-body-resolved', {
            endTimestamp: 1000 * (0, o.ph)(),
            response: t
        });
    });
}
function I(t, e) {
    return !!t && 'object' == typeof t && !!t[e];
}
function R(t) {
    return 'string' == typeof t ? t : t ? (I(t, 'url') ? t.url : t.toString ? t.toString() : '') : '';
}
