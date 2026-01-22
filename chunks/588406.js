n.d(t, {
    E: () => f,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(429913),
    o = n(403362),
    l = n(648304),
    c = n(437918),
    u = n(985018);
let d = [];

function f(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: f } = e,
        [p, _] = i.useState(!1),
        h = i.useCallback(() => _(!0), []),
        m = i.useMemo(
            () =>
                p
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : d,
            [p, t],
        ),
        g = (0, s.A)(m, p),
        E = i.useMemo(() => g.filter(o.Vq), [g]),
        { tooltipText: b, ariaLabel: y } = i.useMemo(() => {
            if (t.length > 0) {
                var e;
                return {
                    tooltipText: (0, r.jsx)(l.a, {
                        applications: E,
                    }),
                    ariaLabel: null != (e = (0, c._)(E)) ? e : u.intl.string(u.t.ujfP6f),
                };
            }
            if (n) {
                let e = u.intl.string(u.t["0eWeav"]);
                return {
                    tooltipText: e,
                    ariaLabel: e,
                };
            }
            if (f) {
                let e = u.intl.string(u.t.MCgl9c);
                return {
                    tooltipText: e,
                    ariaLabel: e,
                };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [E, t.length, n, f]);
    return {
        onMouseEnter: h,
        ariaLabel: y,
        tooltipText: b,
        icon: i.useMemo(() => {
            if (t.length > 0) return a._CD;
            if (n || f) return a.lI8;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, f]),
    };
}
