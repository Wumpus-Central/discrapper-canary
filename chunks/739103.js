t.d(n, { default: () => C });
var a = t(477900),
    l = t(582128),
    i = t(189213),
    s = t(331322),
    r = t(534514),
    o = t(834730),
    u = t(289873),
    c = t(427262),
    d = t(855986),
    m = t(287809),
    g = t(145890);
t(321073);
var p = t(841459),
    x = t(213374),
    h = t(149164),
    f = t(646514),
    j = t(177953),
    b = t(235876),
    v = t(855755),
    A = t(892672),
    N = t(75095),
    I = t(172799),
    k = t(752222),
    y = t(792996),
    z = t(428314);
let E = l.memo(function (e) {
    let { organization: n, userId: t, onInvite: i } = e,
        r = l.useId(),
        u = (0, g.A)((0, g.e)(n)),
        c = (0, b.i)((e) => e[u]?.[t] ?? null),
        d = l.useCallback(() => i(n), [i, n]),
        m = (0, v.A)(c === I.iu.SENT),
        { memberCount: p, maxMembers: x } = n;
    return (0, a.jsxs)("div", {
        ref: m,
        tabIndex: -1,
        className: z.nM,
        children: [
            (0, a.jsx)(A.A, { iconUrl: n.iconUrl, size: 40, fallback: "guild" }),
            (0, a.jsxs)(s.B, {
                gap: 0,
                className: z.qg,
                children: [
                    (0, a.jsx)(o.E, {
                        id: r,
                        variant: "body-md/medium",
                        color: "text-strong",
                        lineClamp: 1,
                        children: n.name,
                    }),
                    null != p && null != x
                        ? (0, a.jsxs)(s.B, {
                              direction: "horizontal",
                              gap: 4,
                              align: "center",
                              children: [
                                  (0, a.jsx)(j.GroupIcon, { size: "xs", color: f.A.colors.ICON_SUBTLE }),
                                  (0, a.jsx)(o.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: y.intl.formatToPlainString(k.default.VuENGl, { count: p, max: x }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(N.A, { sendState: c, onInvite: d, nameId: r }),
        ],
    });
});
function B(e) {
    let { group: n, userId: t, onInvite: l } = e,
        { application: i } = n;
    return (0, a.jsxs)(s.B, {
        gap: 8,
        children: [
            (0, a.jsxs)(s.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                children: [
                    (0, a.jsx)("img", { src: i.iconUrl ?? "/assets/61b811529d456f5f.svg", alt: "", className: z.Gt }),
                    (0, a.jsx)(r.D, { variant: "body-sm/medium", color: "text-subtle", children: i.name }),
                ],
            }),
            (0, a.jsx)("div", {
                className: z.Nr,
                children: n.gameOrganizations.map((e) => {
                    let { organization: n } = e;
                    return (0, a.jsx)(E, { organization: n, userId: t, onInvite: l }, n.id);
                }),
            }),
        ],
    });
}
function C(e) {
    let n,
        { userId: t, ...r } = e,
        {
            user: f,
            groups: j,
            error: b,
            handleInvite: v,
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
                s = l.useCallback(
                    (e) => {
                        if (null == n) return;
                        let t = (0, g.e)(e);
                        (0, p.A)((0, g.A)(t), t, n, x.A);
                    },
                    [n],
                );
            return { user: n, groups: i, error: a, handleInvite: s };
        })(t);
    return (
        (n =
            null == j
                ? null != b
                    ? (0, a.jsx)(o.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          className: z.h5,
                          children: y.intl.string(y.t.fEptJP),
                      })
                    : (0, a.jsx)(u.y, { className: z.h5 })
                : 0 === j.length
                  ? (0, a.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        className: z.h5,
                        children: y.intl.string(k.default.v7A3HG),
                    })
                  : (0, a.jsx)(s.B, {
                        gap: 24,
                        children: j.map((e) => (0, a.jsx)(B, { group: e, userId: t, onInvite: v }, e.application.id)),
                    })),
        (0, a.jsx)(i.a, {
            ...r,
            title: y.intl.string(k.default["wkSug+"]),
            subtitle: y.intl.formatToPlainString(k.default.txHfjn, { username: c.Ay.getName(f) ?? "", days: 7 }),
            actions: [],
            children: n,
        })
    );
}
t(673383);
