t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120),
    t(653041);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(835473),
    o = t(925329),
    d = t(372460),
    s = t(594174),
    c = t(960897);
let Z = [];
function f(e) {
    let { application: n } = e;
    return (0, l.jsxs)('div', {
        className: c.subtext,
        children: [
            (0, l.jsx)(o.Z, {
                game: n,
                size: o.Z.Sizes.XXSMALL
            }),
            (0, l.jsx)('span', { children: n.name })
        ]
    });
}
function m(e) {
    let { menuItemId: n, user: t, label: c, gameRelationships: m, onClick: g } = e,
        { id: M, bot: x } = t,
        h = (0, r.e7)([s.default], () => {
            var e;
            return (null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === M;
        }),
        v = (0, d.wn)({ location: 'useAcceptGameFriendRequest' }),
        p = h || x || !v,
        b = p ? Z : m,
        [I, C] = i.useState(!1),
        P = i.useCallback(() => C(!0), []),
        E = i.useMemo(
            () =>
                b.map((e) => {
                    let { applicationId: n } = e;
                    return n;
                }),
            [b]
        ),
        j = (function (e, n) {
            let t = (0, u.Z)(e, n);
            return i.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((n) => {
                        null != n && e.set(n.id, n);
                    }),
                    e
                );
            }, [t]);
        })(E, I || 1 === b.length);
    if (p || 0 === b.length) return null;
    if (1 === b.length) {
        let { applicationId: e } = b[0],
            t = j.get(e);
        return null == t
            ? null
            : (0, l.jsx)(a.MenuItem, {
                  id: n,
                  label: c,
                  subtext: (0, l.jsx)(f, { application: t }),
                  onFocus: P,
                  action: () => g(t)
              });
    }
    let T = [];
    return (b.forEach((e) => {
        let { applicationId: n } = e,
            t = j.get(n);
        null != t &&
            T.push(
                (0, l.jsx)(
                    a.MenuItem,
                    {
                        id: n,
                        label: t.name,
                        icon: (0, l.jsx)(o.Z, {
                            game: t,
                            size: o.Z.Sizes.XXSMALL
                        }),
                        action: () => g(t)
                    },
                    n
                )
            );
    }),
    0 === T.length)
        ? null
        : (0, l.jsx)(a.MenuItem, {
              id: n,
              label: c,
              onFocus: P,
              children: T
          });
}
