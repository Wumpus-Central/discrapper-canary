n.d(t, { Z: () => g }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(835473),
    l = n(925329),
    c = n(372460),
    u = n(699516),
    d = n(594174),
    f = n(981631),
    p = n(827468);
let _ = [];
function h(e, t) {
    let n = (0, s.Z)(e, t);
    return i.useMemo(() => {
        let e = new Map();
        return (
            n.forEach((t) => {
                null != t && e.set(t.id, t);
            }),
            e
        );
    }, [n]);
}
function m(e) {
    let { application: t } = e;
    return (0, r.jsxs)('div', {
        className: p.subtext,
        children: [
            (0, r.jsx)(l.Z, {
                game: t,
                size: l.Z.Sizes.XXSMALL
            }),
            (0, r.jsx)('span', { children: t.name })
        ]
    });
}
function g(e) {
    let { menuItemId: t, user: n, label: s, gameRelationships: p, onClick: g, color: E } = e,
        { id: v, bot: b } = n,
        y = (0, o.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === v;
        }),
        O = (0, c.wn)({ location: 'useAcceptGameFriendRequest' }),
        S = y || b || !O,
        I = S ? _ : p,
        [T, N] = i.useState(!1),
        A = i.useCallback(() => N(!0), []),
        C = i.useMemo(
            () =>
                I.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [I]
        ),
        R = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(v), [v]),
        P = h(C, T || 1 === I.length);
    if (S || 0 === I.length || R === f.OGo.FRIEND) return null;
    if (1 === I.length) {
        let { applicationId: e } = I[0],
            n = P.get(e);
        return null == n
            ? null
            : (0, r.jsx)(a.sNh, {
                  color: E,
                  id: t,
                  label: s,
                  subtext: (0, r.jsx)(m, { application: n }),
                  onFocus: A,
                  action: () => g(n)
              });
    }
    let w = [];
    return (I.forEach((e) => {
        let { applicationId: t } = e,
            n = P.get(t);
        null != n &&
            w.push(
                (0, r.jsx)(
                    a.sNh,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, r.jsx)(l.Z, {
                            game: n,
                            size: l.Z.Sizes.XXSMALL
                        }),
                        action: () => g(n)
                    },
                    t
                )
            );
    }),
    0 === w.length)
        ? null
        : (0, r.jsx)(a.sNh, {
              color: E,
              id: t,
              label: s,
              onFocus: A,
              children: w
          });
}
