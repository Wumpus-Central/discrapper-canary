n.d(t, { Z: () => m }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    s = n(835473),
    l = n(925329),
    c = n(699516),
    u = n(594174),
    d = n(981631),
    f = n(998587);
let _ = [];
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
        className: f.subtext,
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
    let { menuItemId: t, user: n, label: s, gameRelationships: f, onClick: m, color: g } = e,
        { id: E, bot: b } = n,
        y =
            (0, a.e7)([u.default], () => {
                var e;
                return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === E;
            }) || b,
        v = y ? _ : f,
        [O, I] = i.useState(!1),
        S = i.useCallback(() => I(!0), []),
        T = i.useMemo(
            () =>
                v.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [v]
        ),
        A = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(E), [E]),
        N = p(T, O || 1 === v.length);
    if (y || 0 === v.length || A === d.OGo.FRIEND) return null;
    if (1 === v.length) {
        let { applicationId: e } = v[0],
            n = N.get(e);
        return null == n
            ? null
            : (0, r.jsx)(o.sNh, {
                  color: g,
                  id: t,
                  label: s,
                  subtext: (0, r.jsx)(h, { application: n }),
                  onFocus: S,
                  action: () => m(n)
              });
    }
    let C = [];
    return (v.forEach((e) => {
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
              onFocus: S,
              children: C
          });
}
