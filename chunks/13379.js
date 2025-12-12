n.d(t, {
    QV: () => E,
    XL: () => l,
    Y: () => s,
    fi: () => c,
    nl: () => _,
});
var r = n(82255),
    i = n(700868),
    a = n(509440),
    o = n(514962);
function _(e) {
    return "number" == typeof e && isFinite(e);
}
function s(e, t, n, { ...a }) {
    let o = (0, r.XU)(e).start_timestamp;
    return (
        o && o > t && "function" == typeof e.updateStartTime && e.updateStartTime(t),
        (0, i._d)(e, () => {
            let e = (0, i.qp)({
                startTime: t,
                ...a,
            });
            return e && e.end(n), e;
        })
    );
}
function c(e) {
    let t,
        n = (0, a.s3)();
    if (!n) return;
    let { name: r, transaction: _, attributes: s, startTime: c } = e,
        { release: E, environment: l } = n.getOptions(),
        u = n.getIntegrationByName("Replay"),
        d = u && u.getReplayId(),
        p = (0, a.nZ)(),
        f = p.getUser(),
        I = void 0 !== f ? f.email || f.id || f.ip_address : void 0;
    try {
        t = p.getScopeData().contexts.profile.profile_id;
    } catch (e) {}
    let T = {
        release: E,
        environment: l,
        user: I || void 0,
        profile_id: t || void 0,
        replay_id: d || void 0,
        transaction: _,
        "user_agent.original": o.m.navigator && o.m.navigator.userAgent,
        ...s,
    };
    return (0, i.qp)({
        name: r,
        attributes: T,
        startTime: c,
        experimental: { standalone: !0 },
    });
}
function E() {
    return o.m && o.m.addEventListener && o.m.performance;
}
function l(e) {
    return e / 1000;
}
