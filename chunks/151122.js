a.d(e, {
    M5: () => I,
    _I: () => R,
    m7: () => l,
    m8: () => E,
    q4: () => c,
    uf: () => s,
});
var r = a(394798),
    _ = a(622916),
    n = a(263449),
    o = a(255768);
let i = [];
function E(t) {
    let e = t.defaultIntegrations || [],
        a = t.integrations;
    e.forEach((t) => {
        t.isDefaultInstance = !0;
    });
    let _ = (function (t) {
            let e = {};
            return (
                t.forEach((t) => {
                    let { name: a } = t,
                        r = e[a];
                    (r && !r.isDefaultInstance && t.isDefaultInstance) || (e[a] = t);
                }),
                Object.values(e)
            );
        })(Array.isArray(a) ? [...e, ...a] : "function" == typeof a ? (0, r.lE)(a(e)) : e),
        n = _.findIndex((t) => "Debug" === t.name);
    if (n > -1) {
        let [t] = _.splice(n, 1);
        _.push(t);
    }
    return _;
}
function c(t, e) {
    let a = {};
    return (
        e.forEach((e) => {
            e && l(t, e, a);
        }),
        a
    );
}
function s(t, e) {
    for (let a of e) a && a.afterAllSetup && a.afterAllSetup(t);
}
function l(t, e, a) {
    if (a[e.name]) {
        o.X && _.kg.log(`Integration skipped because it was already installed: ${e.name}`);
        return;
    }
    if (
        ((a[e.name] = e),
        -1 === i.indexOf(e.name) && "function" == typeof e.setupOnce && (e.setupOnce(), i.push(e.name)),
        e.setup && "function" == typeof e.setup && e.setup(t),
        "function" == typeof e.preprocessEvent)
    ) {
        let a = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (e, r) => a(e, r, t));
    }
    if ("function" == typeof e.processEvent) {
        let a = e.processEvent.bind(e),
            r = Object.assign((e, r) => a(e, r, t), { id: e.name });
        t.addEventProcessor(r);
    }
    o.X && _.kg.log(`Integration installed: ${e.name}`);
}
function I(t) {
    let e = (0, n.s3)();
    if (!e) {
        o.X && _.kg.warn(`Cannot add integration "${t.name}" because no SDK Client is available.`);
        return;
    }
    e.addIntegration(t);
}
function R(t) {
    return t;
}
