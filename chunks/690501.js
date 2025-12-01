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
        b = i.useMemo(() => (t.length > 0 ? (0, c.A)(E) : void 0), [E, t.length]);
    return {
        onMouseEnter: m,
        ariaLabel: b,
        tooltipText: i.useMemo(() => {
            if (t.length > 0) return (0, r.jsx)(l.k, { applications: E });
            if (n) return u.intl.string(u.t["0eWeav"]);
            if (f) return u.intl.string(u.t.MCgl9c);
            throw Error("[GameRelationshipButton] Tooltip text should not be undefined.");
        }, [E, t.length, n, f]),
        icon: i.useMemo(() => {
            if (t.length > 0) return a.KED;
            if (n || f) return a.iHX;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, f]),
    };
}
