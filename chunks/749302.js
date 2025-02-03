n.d(t, { Z: () => h }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(835473),
    l = n(925329),
    u = n(372460),
    c = n(594174),
    d = n(960897);
let f = [];
function _(e, t) {
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
function p(e) {
    let { application: t } = e;
    return (0, i.jsxs)('div', {
        className: d.subtext,
        children: [
            (0, i.jsx)(l.Z, {
                game: t,
                size: l.Z.Sizes.XXSMALL
            }),
            (0, i.jsx)('span', { children: t.name })
        ]
    });
}
function h(e) {
    let { menuItemId: t, user: n, label: o, gameRelationships: d, onClick: h } = e,
        { id: m, bot: g } = n,
        E = (0, a.e7)([c.default], () => {
            var e;
            return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === m;
        }),
        v = (0, u.wn)({ location: 'useAcceptGameFriendRequest' }),
        y = E || g || !v,
        I = y ? f : d,
        [b, T] = r.useState(!1),
        S = r.useCallback(() => T(!0), []),
        A = _(
            r.useMemo(
                () =>
                    I.map((e) => {
                        let { applicationId: t } = e;
                        return t;
                    }),
                [I]
            ),
            b || 1 === I.length
        );
    if (y || 0 === I.length) return null;
    if (1 === I.length) {
        let { applicationId: e } = I[0],
            n = A.get(e);
        return null == n
            ? null
            : (0, i.jsx)(s.sNh, {
                  id: t,
                  label: o,
                  subtext: (0, i.jsx)(p, { application: n }),
                  onFocus: S,
                  action: () => h(n)
              });
    }
    let N = [];
    return (I.forEach((e) => {
        let { applicationId: t } = e,
            n = A.get(t);
        null != n &&
            N.push(
                (0, i.jsx)(
                    s.sNh,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, i.jsx)(l.Z, {
                            game: n,
                            size: l.Z.Sizes.XXSMALL
                        }),
                        action: () => h(n)
                    },
                    t
                )
            );
    }),
    0 === N.length)
        ? null
        : (0, i.jsx)(s.sNh, {
              id: t,
              label: o,
              onFocus: S,
              children: N
          });
}
