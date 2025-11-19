_.d(e, {
    M5: () => I,
    _I: () => R,
    m7: () => l,
    m8: () => i,
    q4: () => c,
    uf: () => s,
});
var a = _(394798),
    r = _(622916),
    n = _(263449),
    o = _(255768);
let E = [];
function i(t) {
    let e = t.defaultIntegrations || [],
        _ = t.integrations;
    e.forEach((t) => {
        t.isDefaultInstance = !0;
    });
    let r = (function (t) {
            let e = {};
            return (
                t.forEach((t) => {
                    let { name: _ } = t,
                        a = e[_];
                    (a && !a.isDefaultInstance && t.isDefaultInstance) || (e[_] = t);
                }),
                Object.values(e)
            );
        })(Array.isArray(_) ? [...e, ..._] : "function" == typeof _ ? (0, a.lE)(_(e)) : e),
        n = r.findIndex((t) => "Debug" === t.name);
    if (n > -1) {
        let [t] = r.splice(n, 1);
        r.push(t);
    }
    return r;
}
function c(t, e) {
    let _ = {};
    return (
        e.forEach((e) => {
            e && l(t, e, _);
        }),
        _
    );
}
function s(t, e) {
    for (let _ of e) _ && _.afterAllSetup && _.afterAllSetup(t);
}
function l(t, e, _) {
    if (_[e.name]) {
        o.X && r.kg.log(`Integration skipped because it was already installed: ${e.name}`);
        return;
    }
    if (
        ((_[e.name] = e),
        -1 === E.indexOf(e.name) && "function" == typeof e.setupOnce && (e.setupOnce(), E.push(e.name)),
        e.setup && "function" == typeof e.setup && e.setup(t),
        "function" == typeof e.preprocessEvent)
    ) {
        let _ = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (e, a) => _(e, a, t));
    }
    if ("function" == typeof e.processEvent) {
        let _ = e.processEvent.bind(e),
            a = Object.assign((e, a) => _(e, a, t), { id: e.name });
        t.addEventProcessor(a);
    }
    o.X && r.kg.log(`Integration installed: ${e.name}`);
}
function I(t) {
    let e = (0, n.s3)();
    if (!e) {
        o.X && r.kg.warn(`Cannot add integration "${t.name}" because no SDK Client is available.`);
        return;
    }
    e.addIntegration(t);
}
function R(t) {
    return t;
}
