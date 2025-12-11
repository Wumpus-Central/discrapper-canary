n.d(t, { N: () => f }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(835473),
    s = n(823379),
    l = n(254197),
    c = n(532028),
    u = n(388032);
let d = [];
function f(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: f } = e,
        [p, _] = i.useState(!1),
        m = i.useCallback(() => _(!0), []),
        h = i.useMemo(
            () =>
                p
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : d,
            [p, t],
        ),
        g = (0, o.Z)(h, p),
        E = i.useMemo(() => g.filter(s.lm), [g]),
        { tooltipText: b, ariaLabel: y } = i.useMemo(() => {
            if (t.length > 0) {
                var e;
                return {
                    tooltipText: (0, r.jsx)(l.k, { applications: E }),
                    ariaLabel: null != (e = (0, c.A)(E)) ? e : u.intl.string(u.t.ujfP6f),
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
        onMouseEnter: m,
        ariaLabel: y,
        tooltipText: b,
        icon: i.useMemo(() => {
            if (t.length > 0) return a.KED;
            if (n || f) return a.iHX;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, f]),
    };
}
