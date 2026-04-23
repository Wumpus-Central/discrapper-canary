n.d(t, { A: () => m }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(17928),
    a = n(477782),
    o = n(429913),
    d = n(137177),
    s = n(994500),
    u = n(287809),
    c = n(652215),
    A = n(30851);
let f = [];
function g(e) {
    let { application: t } = e;
    return (0, i.jsxs)("div", {
        className: A.W,
        children: [(0, i.jsx)(d.A, { game: t, size: d.M.XXSMALL }), (0, i.jsx)("span", { children: t.name })],
    });
}
function m(e) {
    let t,
        { menuItemId: n, user: A, label: m, gameRelationships: h, onClick: p, color: x } = e,
        { id: b, bot: I } = A,
        C = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.id === b) || I,
        v = C ? f : h,
        [E, y] = l.useState(!1),
        T = l.useCallback(() => y(!0), []),
        N = l.useMemo(
            () =>
                v.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [v],
        ),
        R = (0, r.bG)([s.A], () => s.A.getRelationshipType(b), [b]),
        D = E || 1 === v.length,
        U =
            ((t = (0, o.A)(N, D)),
            l.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t) => {
                        null != t && e.set(t.id, t);
                    }),
                    e
                );
            }, [t]));
    if (C || 0 === v.length || R === c.eA$.FRIEND) return null;
    if (1 === v.length) {
        let { applicationId: e } = v[0],
            t = U.get(e);
        return null == t
            ? null
            : (0, i.jsx)(a.Dr, {
                  color: x,
                  id: n,
                  label: m,
                  subtext: (0, i.jsx)(g, { application: t }),
                  onFocus: T,
                  action: () => p(t),
              });
    }
    let _ = [];
    return (v.forEach((e) => {
        let { applicationId: t } = e,
            n = U.get(t);
        if (null != n) {
            let e = n.getIconURL(16);
            _.push(
                (0, i.jsx)(
                    a.Dr,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, i.jsx)(d.A, { game: n, size: d.M.XXSMALL }),
                        leadingAccessory: null != e ? { type: "image", src: e } : void 0,
                        action: () => p(n),
                    },
                    t,
                ),
            );
        }
    }),
    0 === _.length)
        ? null
        : (0, i.jsx)(a.Dr, { color: x, id: n, label: m, onFocus: T, children: _ });
}
