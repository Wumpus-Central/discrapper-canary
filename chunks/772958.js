r.d(t, { ur: () => f, vX: () => h }), r(321073);
var n = r(64700),
    a = r(353640),
    l = r(121894),
    i = r(562519),
    u = r(174459),
    s = r(670812),
    o = r(652215);
let c = new i.A("a11y_violations"),
    d = (0, a.v)(() => ({ check: null }));
function f(e) {
    let t = (0, n.useCallback)((e) => {
        if (e.hash !== d.getState().check?.hash)
            for (let [t, r] of ((0, l.r)(() => d.setState({ check: e })), e.violations.entries()))
                for (let e of r.instances.values())
                    for (let { trace: r, hash: n } of e) {
                        let e = JSON.stringify(n);
                        if (c.has(e));
                        else {
                            c.add(e);
                            let a = { rule_id: t, trace: r.join("\n"), hash: n };
                            u.default.track(o.HAw.A11Y_RUNTIME_VIOLATION, a);
                        }
                    }
    }, []);
    (0, s.dL)(e, t);
}
function h() {
    var e = d((e) => e.check?.violations ?? null);
    if (null == e) return [];
    let t = [];
    for (let { instances: r, rule: n } of e.values())
        for (let [e, a] of r.entries()) {
            let r = a.map((e) => e.element),
                l = a[0].message;
            t.push({
                key: e,
                title: n.metadata.description,
                description: n.metadata.help,
                id: n.id,
                tags: n.tags,
                elements: r,
                message: l,
            });
        }
    return t;
}
