r.d(t, {
    QV: () => E,
    XL: () => l,
    Y: () => s,
    fi: () => c,
    nl: () => _,
});
var n = r(82255),
    a = r(700868),
    i = r(509440),
    o = r(514962);
function _(e) {
    return "number" == typeof e && isFinite(e);
}
function s(e, t, r, { ...i }) {
    let o = (0, n.XU)(e).start_timestamp;
    return (
        o && o > t && "function" == typeof e.updateStartTime && e.updateStartTime(t),
        (0, a._d)(e, () => {
            let e = (0, a.qp)({
                startTime: t,
                ...i,
            });
            return e && e.end(r), e;
        })
    );
}
function c(e) {
    let t,
        r = (0, i.s3)();
    if (!r) return;
    let { name: n, transaction: _, attributes: s, startTime: c } = e,
        { release: E, environment: l } = r.getOptions(),
        u = r.getIntegrationByName("Replay"),
        d = u && u.getReplayId(),
        I = (0, i.nZ)(),
        p = I.getUser(),
        R = void 0 !== p ? p.email || p.id || p.ip_address : void 0;
    try {
        t = I.getScopeData().contexts.profile.profile_id;
    } catch (e) {}
    let T = {
        release: E,
        environment: l,
        user: R || void 0,
        profile_id: t || void 0,
        replay_id: d || void 0,
        transaction: _,
        "user_agent.original": o.m.navigator && o.m.navigator.userAgent,
        ...s,
    };
    return (0, a.qp)({
        name: n,
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
