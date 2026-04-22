n.d(t, { E: () => f });
var l = n(627968),
    i = n(64700),
    r = n(682348),
    a = n(565829),
    s = n(429913),
    o = n(403362),
    c = n(648304),
    u = n(437918),
    d = n(985018);
let m = [];
function f(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: f } = e,
        [x, A] = i.useState(!1),
        g = i.useCallback(() => A(!0), []),
        E = i.useMemo(
            () =>
                x
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : m,
            [x, t],
        ),
        p = (0, s.A)(E, x),
        h = i.useMemo(() => p.filter(o.Vq), [p]),
        { tooltipText: N, ariaLabel: R } = i.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, l.jsx)(c.a, { applications: h }),
                    ariaLabel: (0, u._)(h) ?? d.intl.string(d.t.ujfP6f),
                };
            if (n) {
                let e = d.intl.string(d.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (f) {
                let e = d.intl.string(d.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [h, t.length, n, f]);
    return {
        onMouseEnter: g,
        ariaLabel: R,
        tooltipText: N,
        icon: i.useMemo(() => {
            if (t.length > 0) return r._;
            if (n || f) return a.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, f]),
    };
}
