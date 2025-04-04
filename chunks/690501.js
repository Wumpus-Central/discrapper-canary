n.d(t, { N: () => f }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(835473),
    s = n(823379),
    l = n(254197),
    c = n(532028),
    u = n(388032);
let d = [];
function f(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: f } = e,
        [_, p] = i.useState(!1),
        h = i.useCallback(() => p(!0), []),
        m = i.useMemo(
            () =>
                _
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : d,
            [_, t]
        ),
        g = (0, a.Z)(m, _),
        E = i.useMemo(() => g.filter(s.lm), [g]),
        b = i.useMemo(() => (t.length > 0 ? (0, c.A)(E) : void 0), [E, t.length]);
    return {
        onMouseEnter: h,
        ariaLabel: b,
        tooltipText: i.useMemo(() => {
            if (t.length > 0) return (0, r.jsx)(l.k, { applications: E });
            if (n) return u.NW.string(u.t['0eWeam']);
            if (f) return u.NW.string(u.t.MCgl9f);
            throw Error('[GameRelationshipButton] Tooltip text should not be undefined.');
        }, [E, t.length, n, f]),
        icon: i.useMemo(() => {
            if (t.length > 0) return o.KED;
            if (n || f) return o.iHX;
            throw Error('[GameRelationshipButton] Icon should not be undefined.');
        }, [t.length, n, f])
    };
}
