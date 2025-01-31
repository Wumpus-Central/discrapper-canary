a.d(e, {
    M5: () => u,
    _I: () => I,
    m7: () => l,
    m8: () => c,
    q4: () => s,
    uf: () => E
});
var r = a(394798),
    n = a(622916),
    o = a(263449),
    _ = a(255768);
let i = [];
function c(t) {
    let e;
    let a = t.defaultIntegrations || [],
        n = t.integrations;
    a.forEach((t) => {
        t.isDefaultInstance = !0;
    });
    let o = (function (t) {
            let e = {};
            return (
                t.forEach((t) => {
                    let { name: a } = t,
                        r = e[a];
                    (!r || r.isDefaultInstance || !t.isDefaultInstance) && (e[a] = t);
                }),
                Object.values(e)
            );
        })(Array.isArray(n) ? [...a, ...n] : 'function' == typeof n ? (0, r.lE)(n(a)) : a),
        _ = o.findIndex((t) => 'Debug' === t.name);
    if (_ > -1) {
        let [t] = o.splice(_, 1);
        o.push(t);
    }
    return o;
}
function s(t, e) {
    let a = {};
    return (
        e.forEach((e) => {
            e && l(t, e, a);
        }),
        a
    );
}
function E(t, e) {
    for (let a of e) a && a.afterAllSetup && a.afterAllSetup(t);
}
function l(t, e, a) {
    if (a[e.name]) {
        _.X && n.kg.log(`Integration skipped because it was already installed: ${e.name}`);
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
    _.X && n.kg.log(`Integration installed: ${e.name}`);
}
function u(t) {
    let e = (0, o.s3)();
    if (!e) {
        _.X && n.kg.warn(`Cannot add integration "${t.name}" because no SDK Client is available.`);
        return;
    }
    e.addIntegration(t);
}
function I(t) {
    return t;
}
