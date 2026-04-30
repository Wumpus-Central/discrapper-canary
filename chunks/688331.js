n.d(t, { P$: () => l, Q8: () => d, _C: () => p, lc: () => c, mH: () => s, qm: () => u });
var r = n(630449),
    i = n(326447),
    o = n(272469);
let a = [];
function s(e) {
    let t,
        n,
        r = e.defaultIntegrations || [],
        i = e.integrations;
    if (
        (r.forEach((e) => {
            e.isDefaultInstance = !0;
        }),
        Array.isArray(i))
    )
        t = [...r, ...i];
    else if ("function" == typeof i) {
        let e = i(r);
        t = Array.isArray(e) ? e : [e];
    } else t = r;
    let o =
            ((n = {}),
            t.forEach((e) => {
                let { name: t } = e,
                    r = n[t];
                (r && !r.isDefaultInstance && e.isDefaultInstance) || (n[t] = e);
            }),
            Object.values(n)),
        a = o.findIndex((e) => "Debug" === e.name);
    if (a > -1) {
        let [e] = o.splice(a, 1);
        o.push(e);
    }
    return o;
}
function l(e, t) {
    let n = {};
    return (
        t.forEach((t) => {
            t && u(e, t, n);
        }),
        n
    );
}
function c(e, t) {
    for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e);
}
function u(e, t, n) {
    if (n[t.name]) {
        i.T && o.vF.log(`Integration skipped because it was already installed: ${t.name}`);
        return;
    }
    if (
        ((n[t.name] = t),
        -1 === a.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(), a.push(t.name)),
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
    i.T && o.vF.log(`Integration installed: ${t.name}`);
}
function d(e) {
    let t = (0, r.KU)();
    if (!t) {
        i.T && o.vF.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return;
    }
    t.addIntegration(e);
}
function p(e) {
    return e;
}
