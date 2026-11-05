t.d(n, { default: () => K });
var a = t(477900),
    i = t(582128),
    l = t(189213),
    r = t(331322),
    s = t(534514),
    o = t(834730),
    u = t(289873),
    c = t(427262),
    d = t(855986),
    m = t(287809),
    g = t(145890);
t(321073);
var p = t(841459),
    A = t(213374),
    f = t(927813),
    I = t(664947),
    x = t(73153),
    N = t(951217),
    h = t(653868),
    E = t(652215);
let j = [],
    v = new Map(),
    y = null;
function b(e) {
    return {
        organization: (0, N.p)(e.game_organization),
        application: (0, h.Xw)(e.application),
        displayNoun: e.application_config.display_noun ?? null,
    };
}
class G extends d.Ay.Store {
    static displayName = "InvitableGameOrganizationStore";
    getInvitableGameOrganizations(e) {
        let n = E.fic.INVITABLE_GAME_ORGANIZATIONS(e);
        return null == n ? j : (v.get(n) ?? y);
    }
}
let O = new G(x.h, {
    INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS: function (e) {
        let { guildIds: n, gameOrganizations: t } = e,
            a = E.fic.INVITABLE_GAME_ORGANIZATIONS(n);
        if (null == a) return !1;
        ((y = t.map(b)), v.set(a, y));
    },
    LOGOUT: function () {
        if (null == y) return !1;
        (v.clear(), (y = null));
    },
});
var _ = t(489452),
    S = t(696451),
    T = t(317525),
    z = t(71393),
    B = t(576705),
    C = t(372058),
    M = t(989683);
let U = (0, d.UT)(O, {
    getQueryId: E.fic.INVITABLE_GAME_ORGANIZATIONS,
    staleAfter: f.A.Seconds.MINUTE,
    failureStaleAfter: f.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: _.A },
    get: (e) => O.getInvitableGameOrganizations(e),
    load: async (e) => {
        await I.A.fetchInvitableGameOrganizations(e);
    },
});
var k = t(646514),
    w = t(177953),
    L = t(235876),
    V = t(855755),
    H = t(75095),
    R = t(172799),
    Z = t(752222),
    P = t(792996),
    D = t(428314),
    q = t(598414);
let F = i.memo(function (e) {
    let { organization: n, userId: t, onInvite: l } = e,
        s = i.useId(),
        u = (0, g.A)((0, g.e)(n)),
        c = (0, L.i)((e) => e[u]?.[t] ?? null),
        d = i.useCallback(() => l(n), [l, n]),
        m = (0, V.A)(c === R.iu.SENT),
        { memberCount: p, maxMembers: A } = n;
    return (0, a.jsxs)("div", {
        ref: m,
        tabIndex: -1,
        className: D.nM,
        children: [
            (0, a.jsx)("img", { src: n.iconUrl ?? q, alt: "", className: D.HE }),
            (0, a.jsxs)(r.B, {
                gap: 0,
                className: D.qg,
                children: [
                    (0, a.jsx)(o.E, {
                        id: s,
                        variant: "body-md/medium",
                        color: "text-strong",
                        lineClamp: 1,
                        children: n.name,
                    }),
                    null != p && null != A
                        ? (0, a.jsxs)(r.B, {
                              direction: "horizontal",
                              gap: 4,
                              align: "center",
                              children: [
                                  (0, a.jsx)(w.GroupIcon, { size: "xs", color: k.A.colors.ICON_SUBTLE }),
                                  (0, a.jsx)(o.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: P.intl.formatToPlainString(Z.default.VuENGl, { count: p, max: A }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(H.A, { sendState: c, onInvite: d, nameId: s }),
        ],
    });
});
function J(e) {
    let { group: n, userId: t, onInvite: i } = e,
        { application: l } = n;
    return (0, a.jsxs)(r.B, {
        gap: 8,
        children: [
            (0, a.jsxs)(r.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                children: [
                    (0, a.jsx)("img", { src: l.iconUrl ?? q, alt: "", className: D.Gt }),
                    (0, a.jsx)(s.D, { variant: "body-sm/medium", color: "text-subtle", children: l.name }),
                ],
            }),
            (0, a.jsx)("div", {
                className: D.Nr,
                children: n.gameOrganizations.map((e) => {
                    let { organization: n } = e;
                    return (0, a.jsx)(F, { organization: n, userId: t, onInvite: i }, n.id);
                }),
            }),
        ],
    });
}
function K(e) {
    let n,
        { userId: t, ...s } = e,
        {
            user: f,
            groups: I,
            error: x,
            handleInvite: N,
        } = (function (e) {
            let n,
                t = (0, d.bG)([m.default], () => m.default.getUser(e)),
                { data: a, error: l } = U(
                    ((n = (0, C.E9)("game_organization_invite_picker")),
                    (0, d.yK)(
                        [z.A, S.Ay, T.A, B.A],
                        () =>
                            n
                                ? z.A.getGuildsArray()
                                      .filter((e) => (0, M.Dr)(e, B.A, S.Ay, T.A))
                                      .map((e) => e.id)
                                      .sort()
                                : [],
                        [n],
                    )),
                ),
                r = i.useMemo(
                    () =>
                        null != a
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
                              })(a)
                            : null,
                    [a],
                ),
                s = i.useCallback(
                    (e) => {
                        if (null == t) return;
                        let n = (0, g.e)(e);
                        (0, p.A)((0, g.A)(n), n, t, A.A);
                    },
                    [t],
                );
            return { user: t, groups: r, error: l, handleInvite: s };
        })(t);
    return (
        (n =
            null == I
                ? null != x
                    ? (0, a.jsx)(o.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          className: D.h5,
                          children: P.intl.string(P.t.fEptJP),
                      })
                    : (0, a.jsx)(u.y, { className: D.h5 })
                : 0 === I.length
                  ? (0, a.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        className: D.h5,
                        children: P.intl.string(Z.default.v7A3HG),
                    })
                  : (0, a.jsx)(r.B, {
                        gap: 24,
                        children: I.map((e) => (0, a.jsx)(J, { group: e, userId: t, onInvite: N }, e.application.id)),
                    })),
        (0, a.jsx)(l.a, {
            ...s,
            title: P.intl.string(Z.default["wkSug+"]),
            subtitle: P.intl.formatToPlainString(Z.default.txHfjn, { username: c.Ay.getName(f) ?? "", days: 7 }),
            actions: [],
            children: n,
        })
    );
}
t(673383);
