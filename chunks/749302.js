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
    _ = n(998587);
let p = [];
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
        className: _.subtext,
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
    let { menuItemId: t, user: n, label: s, gameRelationships: _, onClick: g, color: E } = e,
        { id: b, bot: y } = n,
        v = (0, o.e7)([d.default], () => {
            var e;
            return (null == (e = d.default.getCurrentUser()) ? void 0 : e.id) === b;
        }),
        O = (0, c.wn)({ location: 'useAcceptGameFriendRequest' }),
        I = v || y || !O,
        S = I ? p : _,
        [T, N] = i.useState(!1),
        A = i.useCallback(() => N(!0), []),
        C = i.useMemo(
            () =>
                S.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [S]
        ),
        R = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(b), [b]),
        P = h(C, T || 1 === S.length);
    if (I || 0 === S.length || R === f.OGo.FRIEND) return null;
    if (1 === S.length) {
        let { applicationId: e } = S[0],
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
    return (S.forEach((e) => {
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
