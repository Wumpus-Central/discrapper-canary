n.d(t, {
    ur: () => f,
    vX: () => h,
}),
    n(896048),
    n(457529),
    n(321073),
    n(228524);
var r = n(64700),
    a = n(353640),
    l = n(121894),
    o = n(562519),
    i = n(954571),
    u = n(972049),
    c = n(652215);
let s = new o.A("a11y_violations"),
    d = (0, a.v)(() => ({
        check: null,
    }));

function f(e) {
    let t = (0, r.useCallback)((e) => {
        var t;
        if (e.hash !== (null == (t = d.getState().check) ? void 0 : t.hash))
            for (let [t, n] of ((0, l.r)(() =>
                d.setState({
                    check: e,
                }),
            ),
            e.violations.entries()))
                for (let e of n.instances.values())
                    for (let { trace: n, hash: r } of e) {
                        let e = JSON.stringify(r);
                        if (s.has(e));
                        else {
                            s.add(e);
                            let a = {
                                rule_id: t,
                                trace: n.join("\n"),
                                hash: r,
                            };
                            i.default.track(c.HAw.A11Y_RUNTIME_VIOLATION, a);
                        }
                    }
    }, []);
    (0, u.dL)(e, t);
}

function h() {
    var e = d((e) => {
        var t, n;
        return null != (t = null == (n = e.check) ? void 0 : n.violations) ? t : null;
    });
    if (null == e) return [];
    let t = [];
    for (let { instances: n, rule: r } of e.values())
        for (let [e, a] of n.entries()) {
            let n = a.map((e) => e.element),
                l = a[0].message;
            t.push({
                key: e,
                title: r.metadata.description,
                description: r.metadata.help,
                id: r.id,
                tags: r.tags,
                elements: n,
                message: l,
            });
        }
    return t;
}
