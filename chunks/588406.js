"use strict";
n.d(t, { E: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(429913),
    o = n(403362),
    l = n(648304),
    u = n(437918),
    c = n(985018);
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
            [f, t],
        ),
        g = (0, s.A)(m, f),
        E = i.useMemo(() => g.filter(o.Vq), [g]),
        { tooltipText: A, ariaLabel: I } = i.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, r.jsx)(l.a, { applications: E }),
                    ariaLabel: (0, u._)(E) ?? c.intl.string(c.t.ujfP6f),
                };
            if (n) {
                let e = c.intl.string(c.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (_) {
                let e = c.intl.string(c.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [E, t.length, n, _]);
    return {
        onMouseEnter: h,
        ariaLabel: I,
        tooltipText: A,
        icon: i.useMemo(() => {
            if (t.length > 0) return a._CD;
            if (n || _) return a.lI8;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, _]),
    };
}
