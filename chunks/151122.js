a.d(e, {
    M5: () => u,
    _I: () => I,
    m7: () => l,
    m8: () => c,
    q4: () => E,
    uf: () => s
});
var r = a(394798),
    _ = a(622916),
    n = a(263449),
    o = a(255768);
let i = [];
function c(t) {
    let e,
        a = t.defaultIntegrations || [],
        _ = t.integrations;
    a.forEach((t) => {
        t.isDefaultInstance = !0;
    });
    let n = (function (t) {
            let e = {};
            return (
                t.forEach((t) => {
                    let { name: a } = t,
                        r = e[a];
                    (r && !r.isDefaultInstance && t.isDefaultInstance) || (e[a] = t);
                }),
                Object.values(e)
            );
        })(Array.isArray(_) ? [...a, ..._] : 'function' == typeof _ ? (0, r.lE)(_(a)) : a),
        o = n.findIndex((t) => 'Debug' === t.name);
    if (o > -1) {
        let [t] = n.splice(o, 1);
        n.push(t);
    }
    return n;
}
function E(t, e) {
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
    if (((a[e.name] = e), -1 === i.indexOf(e.name) && 'function' == typeof e.setupOnce && (e.setupOnce(), i.push(e.name)), e.setup && 'function' == typeof e.setup && e.setup(t), 'function' == typeof e.preprocessEvent)) {
        let a = e.preprocessEvent.bind(e);
        t.on('preprocessEvent', (e, r) => a(e, r, t));
    }
    if ('function' == typeof e.processEvent) {
        let a = e.processEvent.bind(e),
            r = Object.assign((e, r) => a(e, r, t), { id: e.name });
        t.addEventProcessor(r);
    }
    o.X && _.kg.log(`Integration installed: ${e.name}`);
}
function u(t) {
    let e = (0, n.s3)();
    if (!e) {
        o.X && _.kg.warn(`Cannot add integration "${t.name}" because no SDK Client is available.`);
        return;
    }
    e.addIntegration(t);
}
function I(t) {
    return t;
}
