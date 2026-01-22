l.d(t, { A: () => o });
var r = l(998418),
    n = l(568065),
    i = l(333354),
    s = l(985018);
function o(e) {
    var t, l, o;
    let a,
        { guildId: u, powerups: d } = e,
        c = (0, r.jJ)(u, d),
        f = c.some((e) => e.type !== n.b_.INACTIVE);
    if (d.length <= 0) return null;
    let p = c.reduce(
        (e, t) => {
            let { sourceEntitlement: l } = t,
                r = null == l ? void 0 : l.ends_at;
            return null == r ? e : null == e || r < e ? r : e;
        },
        void 0,
    );
    null != p
        ? (a = {
              type: "expiring",
              expiringAt: p,
          })
        : f &&
          (a = {
              type: "active",
              statusText: s.intl.string(i.default.FFLkmx),
          });
    let m = c.reduce((e, t) => {
            let { type: l, powerup: r } = t;
            return l === n.b_.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        v = c.reduce(
            (e, t) => {
                var l, r;
                let { powerup: n } = t;
                return e < (null != (l = null == n ? void 0 : n.cost) ? l : 0)
                    ? e
                    : null != (r = null == n ? void 0 : n.cost)
                      ? r
                      : 0;
            },
            null != (t = null == (o = c[0]) || null == (l = o.powerup) ? void 0 : l.cost) ? t : 0,
        ),
        A = c.reduce((e, t) => {
            var l;
            let { powerup: r } = t;
            return e + (null != (l = null == r ? void 0 : r.cost) ? l : 0);
        }, 0),
        g = f ? m : v;
    return {
        isActive: f,
        status: a,
        cost: g,
        costDecorator: !f && A > g ? "+" : void 0,
        expiringAt: p,
        activeCost: m,
        minCost: v,
        totalCost: A,
    };
}
