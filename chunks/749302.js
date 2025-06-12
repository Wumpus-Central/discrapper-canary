n.d(t, { Z: () => m }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(835473),
    l = n(925329),
    c = n(699516),
    u = n(594174),
    d = n(981631),
    _ = n(998587);
let f = [];
function p(e, t) {
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
function h(e) {
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
function m(e) {
    let { menuItemId: t, user: n, label: s, gameRelationships: _, onClick: m, color: g } = e,
        { id: E, bot: b } = n,
        y =
            (0, a.e7)([u.default], () => {
                var e;
                return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === E;
            }) || b,
        O = y ? f : _,
        [v, I] = i.useState(!1),
        T = i.useCallback(() => I(!0), []),
        S = i.useMemo(
            () =>
                O.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [O]
        ),
        A = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(E), [E]),
        N = p(S, v || 1 === O.length);
    if (y || 0 === O.length || A === d.OGo.FRIEND) return null;
    if (1 === O.length) {
        let { applicationId: e } = O[0],
            n = N.get(e);
        return null == n
            ? null
            : (0, r.jsx)(o.sNh, {
                  color: g,
                  id: t,
                  label: s,
                  subtext: (0, r.jsx)(h, { application: n }),
                  onFocus: T,
                  action: () => m(n)
              });
    }
    let C = [];
    return (O.forEach((e) => {
        let { applicationId: t } = e,
            n = N.get(t);
        null != n &&
            C.push(
                (0, r.jsx)(
                    o.sNh,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, r.jsx)(l.Z, {
                            game: n,
                            size: l.Z.Sizes.XXSMALL
                        }),
                        action: () => m(n)
                    },
                    t
                )
            );
    }),
    0 === C.length)
        ? null
        : (0, r.jsx)(o.sNh, {
              color: g,
              id: t,
              label: s,
              onFocus: T,
              children: C
          });
}
