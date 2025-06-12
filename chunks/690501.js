n.d(t, { N: () => _ }), n(388685), n(415506);
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(835473),
    s = n(823379),
    l = n(254197),
    c = n(532028),
    u = n(388032);
let d = [];
function _(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: _ } = e,
        [f, p] = i.useState(!1),
        h = i.useCallback(() => p(!0), []),
        m = i.useMemo(
            () =>
                f
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : d,
            [f, t]
        ),
        g = (0, o.Z)(m, f),
        E = i.useMemo(() => g.filter(s.lm), [g]),
        b = i.useMemo(() => (t.length > 0 ? (0, c.A)(E) : void 0), [E, t.length]);
    return {
        onMouseEnter: h,
        ariaLabel: b,
        tooltipText: i.useMemo(() => {
            if (t.length > 0) return (0, r.jsx)(l.k, { applications: E });
            if (n) return u.intl.string(u.t['0eWeam']);
            if (_) return u.intl.string(u.t.MCgl9f);
            throw Error('[GameRelationshipButton] Tooltip text should not be undefined.');
        }, [E, t.length, n, _]),
        icon: i.useMemo(() => {
            if (t.length > 0) return a.KED;
            if (n || _) return a.iHX;
            throw Error('[GameRelationshipButton] Icon should not be undefined.');
        }, [t.length, n, _])
    };
}
