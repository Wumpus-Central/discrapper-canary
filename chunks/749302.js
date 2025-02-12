n.d(t, { Z: () => g }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(835473),
    l = n(925329),
    u = n(372460),
    c = n(699516),
    d = n(594174),
    f = n(981631),
    _ = n(783914);
let p = [];
function h(e, t) {
    let n = (0, o.Z)(e, t);
    return r.useMemo(() => {
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
    return (0, i.jsxs)('div', {
        className: _.subtext,
        children: [
            (0, i.jsx)(l.Z, {
                game: t,
                size: l.Z.Sizes.XXSMALL
            }),
            (0, i.jsx)('span', { children: t.name })
        ]
    });
}
function g(e) {
    let { menuItemId: t, user: n, label: o, gameRelationships: _, onClick: g, color: E } = e,
        { id: v, bot: y } = n,
        I = (0, a.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === v;
        }),
        T = (0, u.wn)({ location: 'useAcceptGameFriendRequest' }),
        b = I || y || !T,
        S = b ? p : _,
        [A, N] = r.useState(!1),
        C = r.useCallback(() => N(!0), []),
        R = r.useMemo(
            () =>
                S.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [S]
        ),
        O = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(v), [v]),
        D = h(R, A || 1 === S.length);
    if (b || 0 === S.length || O === f.OGo.FRIEND) return null;
    if (1 === S.length) {
        let { applicationId: e } = S[0],
            n = D.get(e);
        return null == n
            ? null
            : (0, i.jsx)(s.sNh, {
                  color: E,
                  id: t,
                  label: o,
                  subtext: (0, i.jsx)(m, { application: n }),
                  onFocus: C,
                  action: () => g(n)
              });
    }
    let L = [];
    return (S.forEach((e) => {
        let { applicationId: t } = e,
            n = D.get(t);
        null != n &&
            L.push(
                (0, i.jsx)(
                    s.sNh,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, i.jsx)(l.Z, {
                            game: n,
                            size: l.Z.Sizes.XXSMALL
                        }),
                        action: () => g(n)
                    },
                    t
                )
            );
    }),
    0 === L.length)
        ? null
        : (0, i.jsx)(s.sNh, {
              color: E,
              id: t,
              label: o,
              onFocus: C,
              children: L
          });
}
