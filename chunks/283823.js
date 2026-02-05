"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(793574),
    c = n(688810),
    d = n(250527),
    _ = n(837011),
    f = n(90084),
    p = n(635853),
    h = n(42780),
    m = n(576055),
    g = n(363551);
let E = 50001;
function A(e) {
    let { guildId: t, name: n, setPopoutRef: a, onClose: A } = e,
        { analyticsLocations: I } = (0, c.Ay)(u.A.GUILD_PROFILE),
        { guildProfile: T, fetchGuildProfile: y, fetchStatus: S } = (0, f.u)(t),
        v = (0, o.bG)([_.A], () => _.A.getErrorCode(t)),
        C = i.useRef(null),
        b = i.useCallback(() => {
            y(!0);
        }, [y]);
    i.useEffect(() => {
        y();
    }, [y]),
        i.useEffect(() => {
            (0, d.sf)(t, I);
        }, [t, I]),
        i.useEffect(() => {
            a?.(C?.current);
        }, [C, a]);
    let N = i.useMemo(
        () =>
            S === _.X.NOT_FETCHED || S === _.X.FETCHING
                ? (0, r.jsx)("div", { className: s()(g.k, g.d), children: (0, r.jsx)(l.y$y, {}) })
                : null == T && v === E
                  ? (0, r.jsx)("div", { className: g.k, children: (0, r.jsx)(m.A, { guildId: t, name: n }) })
                  : null == T
                    ? (0, r.jsx)("div", { className: g.k, children: (0, r.jsx)(p.A, { name: n, onRetry: b }) })
                    : (0, r.jsx)("div", { className: g.k, children: (0, r.jsx)(h.Ay, { profile: T, onClose: A }) }),
        [S, T, v, t, n, b, A],
    );
    return (0, r.jsx)(l.lGe, { ref: C, "aria-label": T?.name, children: N });
}
