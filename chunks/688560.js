n.d(t, {
    M5: () => u,
    _I: () => d,
    m7: () => l,
    m8: () => s,
    q4: () => c,
    uf: () => E,
});
var r = n(431660),
    i = n(98076),
    a = n(509440),
    o = n(4757);
let _ = [];
function s(e) {
    let t = e.defaultIntegrations || [],
        n = e.integrations;
    t.forEach((e) => {
        e.isDefaultInstance = !0;
    });
    let i = (function (e) {
            let t = {};
            return (
                e.forEach((e) => {
                    let { name: n } = e,
                        r = t[n];
                    (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
                }),
                Object.values(t)
            );
        })(Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? (0, r.lE)(n(t)) : t),
        a = i.findIndex((e) => "Debug" === e.name);
    if (a > -1) {
        let [e] = i.splice(a, 1);
        i.push(e);
    }
    return i;
}
function c(e, t) {
    let n = {};
    return (
        t.forEach((t) => {
            t && l(e, t, n);
        }),
        n
    );
}
function E(e, t) {
    for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e);
}
function l(e, t, n) {
    if (n[t.name]) {
        o.X && i.kg.log(`Integration skipped because it was already installed: ${t.name}`);
        return;
    }
    if (
        ((n[t.name] = t),
        -1 === _.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(), _.push(t.name)),
        t.setup && "function" == typeof t.setup && t.setup(e),
        "function" == typeof t.preprocessEvent)
    ) {
        let n = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", (t, r) => n(t, r, e));
    }
    if ("function" == typeof t.processEvent) {
        let n = t.processEvent.bind(t),
            r = Object.assign((t, r) => n(t, r, e), { id: t.name });
        e.addEventProcessor(r);
    }
    o.X && i.kg.log(`Integration installed: ${t.name}`);
}
function u(e) {
    let t = (0, a.s3)();
    if (!t) {
        o.X && i.kg.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return;
    }
    t.addIntegration(e);
}
function d(e) {
    return e;
}
