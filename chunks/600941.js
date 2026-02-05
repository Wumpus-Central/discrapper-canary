n.d(t, { A: () => o });
var r = n(998418),
    l = n(568065),
    i = n(333354),
    s = n(985018);
function o(e) {
    let t,
        { guildId: n, powerups: o } = e,
        a = (0, r.jJ)(n, o),
        u = a.some((e) => e.type !== l.b_.INACTIVE);
    if (o.length <= 0) return null;
    let d = a.reduce(
        (e, t) => {
            let { sourceEntitlement: n } = t,
                r = n?.ends_at;
            return null == r ? e : null == e || r < e ? r : e;
        },
        void 0,
    );
    null != d
        ? (t = { type: "expiring", expiringAt: d })
        : u && (t = { type: "active", statusText: s.intl.string(i.default.FFLkmx) });
    let c = a.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === l.b_.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        p = a.reduce((e, t) => {
            let { powerup: n } = t;
            return e < (n?.cost ?? 0) ? e : (n?.cost ?? 0);
        }, a[0]?.powerup?.cost ?? 0),
        m = a.reduce((e, t) => {
            let { powerup: n } = t;
            return e + (n?.cost ?? 0);
        }, 0),
        A = u ? c : p;
    return {
        isActive: u,
        status: t,
        cost: A,
        costDecorator: !u && m > A ? "+" : void 0,
        expiringAt: d,
        activeCost: c,
        minCost: p,
        totalCost: m,
    };
}
