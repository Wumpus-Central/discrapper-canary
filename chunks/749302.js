n.d(t, { Z: () => h }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(835473),
    l = n(925329),
    c = n(699516),
    u = n(594174),
    d = n(981631),
    f = n(450779);
let p = [];
function _(e, t) {
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
    return (0, r.jsxs)("div", {
        className: f.subtext,
        children: [
            (0, r.jsx)(l.Z, {
                game: t,
                size: l.A.XXSMALL,
            }),
            (0, r.jsx)("span", { children: t.name }),
        ],
    });
}
function h(e) {
    let { menuItemId: t, user: n, label: s, gameRelationships: f, onClick: h, color: g } = e,
        { id: E, bot: b } = n,
        y =
            (0, a.e7)([u.default], () => {
                var e;
                return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === E;
            }) || b,
        O = y ? p : f,
        [v, S] = i.useState(!1),
        I = i.useCallback(() => S(!0), []),
        T = i.useMemo(
            () =>
                O.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [O],
        ),
        A = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(E), [E]),
        C = _(T, v || 1 === O.length);
    if (y || 0 === O.length || A === d.OGo.FRIEND) return null;
    if (1 === O.length) {
        let { applicationId: e } = O[0],
            n = C.get(e);
        return null == n
            ? null
            : (0, r.jsx)(o.sNh, {
                  color: g,
                  id: t,
                  label: s,
                  subtext: (0, r.jsx)(m, { application: n }),
                  onFocus: I,
                  action: () => h(n),
              });
    }
    let N = [];
    return (O.forEach((e) => {
        let { applicationId: t } = e,
            n = C.get(t);
        null != n &&
            N.push(
                (0, r.jsx)(
                    o.sNh,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, r.jsx)(l.Z, {
                            game: n,
                            size: l.A.XXSMALL,
                        }),
                        action: () => h(n),
                    },
                    t,
                ),
            );
    }),
    0 === N.length)
        ? null
        : (0, r.jsx)(o.sNh, {
              color: g,
              id: t,
              label: s,
              onFocus: I,
              children: N,
          });
}
