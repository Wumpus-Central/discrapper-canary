t.d(n, { default: () => C });
var a = t(477900),
    l = t(582128),
    i = t(189213),
    r = t(331322),
    s = t(534514),
    o = t(834730),
    c = t(289873),
    u = t(427262),
    d = t(855986),
    m = t(287809),
    g = t(145890);
t(321073);
var p = t(841459),
    x = t(213374),
    h = t(149164),
    f = t(646514),
    j = t(177953),
    v = t(235876),
    b = t(855755),
    N = t(75095),
    A = t(172799),
    I = t(752222),
    y = t(792996),
    E = t(428314),
    k = t(598414);
let z = l.memo(function (e) {
    let { organization: n, userId: t, onInvite: i } = e,
        s = l.useId(),
        c = (0, g.A)((0, g.e)(n)),
        u = (0, v.i)((e) => e[c]?.[t] ?? null),
        d = l.useCallback(() => i(n), [i, n]),
        m = (0, b.A)(u === A.iu.SENT),
        { memberCount: p, maxMembers: x } = n;
    return (0, a.jsxs)("div", {
        ref: m,
        tabIndex: -1,
        className: E.nM,
        children: [
            (0, a.jsx)("img", { src: n.iconUrl ?? k, alt: "", className: E.HE }),
            (0, a.jsxs)(r.B, {
                gap: 0,
                className: E.qg,
                children: [
                    (0, a.jsx)(o.E, {
                        id: s,
                        variant: "body-md/medium",
                        color: "text-strong",
                        lineClamp: 1,
                        children: n.name,
                    }),
                    null != p && null != x
                        ? (0, a.jsxs)(r.B, {
                              direction: "horizontal",
                              gap: 4,
                              align: "center",
                              children: [
                                  (0, a.jsx)(j.GroupIcon, { size: "xs", color: f.A.colors.ICON_SUBTLE }),
                                  (0, a.jsx)(o.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: y.intl.formatToPlainString(I.default.VuENGl, { count: p, max: x }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(N.A, { sendState: u, onInvite: d, nameId: s }),
        ],
    });
});
function B(e) {
    let { group: n, userId: t, onInvite: l } = e,
        { application: i } = n;
    return (0, a.jsxs)(r.B, {
        gap: 8,
        children: [
            (0, a.jsxs)(r.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                children: [
                    (0, a.jsx)("img", { src: i.iconUrl ?? k, alt: "", className: E.Gt }),
                    (0, a.jsx)(s.D, { variant: "body-sm/medium", color: "text-subtle", children: i.name }),
                ],
            }),
            (0, a.jsx)("div", {
                className: E.Nr,
                children: n.gameOrganizations.map((e) => {
                    let { organization: n } = e;
                    return (0, a.jsx)(z, { organization: n, userId: t, onInvite: l }, n.id);
                }),
            }),
        ],
    });
}
function C(e) {
    let n,
        { userId: t, ...s } = e,
        {
            user: f,
            groups: j,
            error: v,
            handleInvite: b,
        } = (function (e) {
            let n = (0, d.bG)([m.default], () => m.default.getUser(e)),
                { data: t, error: a } = (0, h.A)("game_organization_invite_picker"),
                i = l.useMemo(
                    () =>
                        null != t
                            ? (function (e) {
                                  let n = new Map();
                                  for (let t of e) {
                                      let e = n.get(t.application.id);
                                      null != e
                                          ? e.gameOrganizations.push(t)
                                          : n.set(t.application.id, {
                                                application: t.application,
                                                gameOrganizations: [t],
                                            });
                                  }
                                  return Array.from(n.values());
                              })(t)
                            : null,
                    [t],
                ),
                r = l.useCallback(
                    (e) => {
                        if (null == n) return;
                        let t = (0, g.e)(e);
                        (0, p.A)((0, g.A)(t), t, n, x.A);
                    },
                    [n],
                );
            return { user: n, groups: i, error: a, handleInvite: r };
        })(t);
    return (
        (n =
            null == j
                ? null != v
                    ? (0, a.jsx)(o.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          className: E.h5,
                          children: y.intl.string(y.t.fEptJP),
                      })
                    : (0, a.jsx)(c.y, { className: E.h5 })
                : 0 === j.length
                  ? (0, a.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        className: E.h5,
                        children: y.intl.string(I.default.v7A3HG),
                    })
                  : (0, a.jsx)(r.B, {
                        gap: 24,
                        children: j.map((e) => (0, a.jsx)(B, { group: e, userId: t, onInvite: b }, e.application.id)),
                    })),
        (0, a.jsx)(i.a, {
            ...s,
            title: y.intl.string(I.default["wkSug+"]),
            subtitle: y.intl.formatToPlainString(I.default.txHfjn, { username: u.Ay.getName(f) ?? "", days: 7 }),
            actions: [],
            children: n,
        })
    );
}
t(673383);
