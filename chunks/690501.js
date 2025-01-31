n.d(t, { N: () => d }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(835473),
    s = n(823379),
    o = n(254197),
    l = n(532028),
    u = n(388032);
let c = [];
function d(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: d } = e,
        [f, _] = r.useState(!1),
        p = r.useCallback(() => _(!0), []),
        h = r.useMemo(
            () =>
                f
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : c,
            [f, t]
        ),
        m = (0, a.Z)(h, f),
        g = r.useMemo(() => m.filter(s.lm), [m]);
    return {
        onMouseEnter: p,
        ariaLabel: r.useMemo(() => (t.length > 0 ? (0, l.A)(g) : void 0), [g, t.length]),
        tooltipText: r.useMemo(() => {
            if (t.length > 0) return (0, i.jsx)(o.k, { applications: g });
            if (n) return u.intl.string(u.t['0eWeam']);
            if (d) return u.intl.string(u.t.MCgl9f);
            throw Error('[GameRelationshipButton] Tooltip text should not be undefined.');
        }, [g, t.length, n, d])
    };
}
