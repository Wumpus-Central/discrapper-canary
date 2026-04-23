n.d(t, { A: () => a });
var r = n(998418),
    i = n(568065),
    l = n(853513),
    s = n(985018);
function a(e) {
    let t,
        { guildId: n, powerups: a } = e,
        o = (0, r.jJ)(n, a),
        d = o.some((e) => e.type !== i.b_.INACTIVE);
    if (a.length <= 0) return null;
    let u = o.reduce(
        (e, t) => {
            let { sourceEntitlement: n } = t,
                r = n?.ends_at;
            return null == r ? e : null == e || r < e ? r : e;
        },
        void 0,
    );
    null != u
        ? (t = { type: "expiring", expiringAt: u })
        : d && (t = { type: "active", statusText: s.intl.string(l.default.FFLkmx) });
    let c = o.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === i.b_.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        _ = o.reduce((e, t) => {
            let { powerup: n } = t;
            return e < (n?.cost ?? 0) ? e : (n?.cost ?? 0);
        }, o[0]?.powerup?.cost ?? 0),
        m = o.reduce((e, t) => {
            let { powerup: n } = t;
            return e + (n?.cost ?? 0);
        }, 0),
        p = d ? c : _;
    return {
        isActive: d,
        status: t,
        cost: p,
        costDecorator: !d && m > p ? "+" : void 0,
        expiringAt: u,
        activeCost: c,
        minCost: _,
        totalCost: m,
    };
}
