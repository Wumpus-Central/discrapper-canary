r.d(t, {
    M5: () => u,
    _I: () => d,
    m7: () => l,
    m8: () => s,
    q4: () => c,
    uf: () => E,
});
var n = r(431660),
    a = r(98076),
    i = r(509440),
    o = r(4757);
let _ = [];
function s(e) {
    let t = e.defaultIntegrations || [],
        r = e.integrations;
    t.forEach((e) => {
        e.isDefaultInstance = !0;
    });
    let a = (function (e) {
            let t = {};
            return (
                e.forEach((e) => {
                    let { name: r } = e,
                        n = t[r];
                    (n && !n.isDefaultInstance && e.isDefaultInstance) || (t[r] = e);
                }),
                Object.values(t)
            );
        })(Array.isArray(r) ? [...t, ...r] : "function" == typeof r ? (0, n.lE)(r(t)) : t),
        i = a.findIndex((e) => "Debug" === e.name);
    if (i > -1) {
        let [e] = a.splice(i, 1);
        a.push(e);
    }
    return a;
}
function c(e, t) {
    let r = {};
    return (
        t.forEach((t) => {
            t && l(e, t, r);
        }),
        r
    );
}
function E(e, t) {
    for (let r of t) r && r.afterAllSetup && r.afterAllSetup(e);
}
function l(e, t, r) {
    if (r[t.name]) {
        o.X && a.kg.log(`Integration skipped because it was already installed: ${t.name}`);
        return;
    }
    if (
        ((r[t.name] = t),
        -1 === _.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(), _.push(t.name)),
        t.setup && "function" == typeof t.setup && t.setup(e),
        "function" == typeof t.preprocessEvent)
    ) {
        let r = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", (t, n) => r(t, n, e));
    }
    if ("function" == typeof t.processEvent) {
        let r = t.processEvent.bind(t),
            n = Object.assign((t, n) => r(t, n, e), { id: t.name });
        e.addEventProcessor(n);
    }
    o.X && a.kg.log(`Integration installed: ${t.name}`);
}
function u(e) {
    let t = (0, i.s3)();
    if (!t) {
        o.X && a.kg.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return;
    }
    t.addIntegration(e);
}
function d(e) {
    return e;
}
