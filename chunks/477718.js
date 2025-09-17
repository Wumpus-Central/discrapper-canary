n.d(t, { Z: () => U });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    u = n(399606),
    c = n(481060),
    E = n(480137),
    d = n(906732),
    _ = n(376923),
    A = n(472596),
    T = n(987707),
    m = n(909746),
    I = n(501801),
    g = n(884902),
    h = n(271383),
    N = n(430824),
    O = n(5192),
    f = n(776767),
    p = n(981631),
    R = n(388032),
    S = n(87437),
    C = n(938556),
    L = n(87819);
function D(e) {
    var t, n;
    let { log: i, member: s, guild: E } = e,
        { analyticsLocations: T } = (0, d.ZP)(),
        N = m.nm(i),
        f = m.QM(i),
        L = null == (t = m.V$(p.zUn.REASON, i)) ? void 0 : t.newValue,
        D = m.J5(i),
        U = (0, _.LJ)(i.id),
        M = (0, u.e7)([h.ZP], () => (null != i.userId ? h.ZP.getMember(s.guildId, i.userId) : null), [
            s.guildId,
            i.userId,
        ]),
        b = (0, g.X7)(
            null == M ? void 0 : M.guildId,
            null == M ? void 0 : M.userId,
            null != (n = null == M ? void 0 : M.colorStrings) ? n : null,
        ),
        x = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T);
            },
            [T],
        ),
        v = l.useCallback(
            () =>
                null == i.user
                    ? null
                    : (0, r.jsx)(c.ua7, {
                          text: R.intl.string(R.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: n, onMouseLeave: l } = e;
                              return (0, r.jsx)(c.P3F, {
                                  tag: "span",
                                  className: S.username,
                                  onClick: x(M),
                                  onMouseEnter: n,
                                  onMouseLeave: l,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: "text-sm/medium",
                                      tag: "span",
                                      children: [
                                          "@",
                                          (0, r.jsx)(c.PUh, {
                                              name: O.ZP.getName(s.guildId, null, i.user),
                                              colorString: null != (t = null == M ? void 0 : M.colorString) ? t : null,
                                              colorStrings: b,
                                          }),
                                      ],
                                  }),
                              });
                          },
                      }),
            [x, i.user, s.guildId, M, b],
        )();
    return (0, r.jsxs)("div", {
        className: a()(C.modInfoItem, S.auditLogItem),
        children: [
            (0, r.jsxs)("div", {
                className: S.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.auditLogItemTitle,
                        children: [
                            null != N &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "header-primary",
                                    children: N,
                                }),
                            null != f &&
                                (0, r.jsxs)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ["(", "string" == typeof f ? f : o()(f).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: S.auditLogItemDate,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "header-primary",
                            children: U,
                        }),
                    }),
                ],
            }),
            null != L &&
                (0, r.jsx)("div", {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.auditLogReason,
                        children: [
                            v,
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: L,
                            }),
                        ],
                    }),
                }),
            null == L &&
                null != D &&
                (0, r.jsx)("div", {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.auditLogSecondary,
                        children: [
                            v,
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: D,
                            }),
                        ],
                    }),
                }),
            null == L &&
                null == D &&
                (0, r.jsx)("div", {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsx)("div", {
                        className: S.auditLogSecondary,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, r.jsx)(I.tP, {
                                log: i,
                                guild: E,
                                onContentClick: () => {},
                                className: S.auditLogExpandedChangeDetails,
                            }),
                        }),
                    }),
                }),
        ],
    });
}
function U(e) {
    let { member: t } = e,
        n = (0, u.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]),
        i = (0, u.e7)([T.Z], () => {
            let e = T.Z.logs;
            return null == e || null == n ? [] : m._$(e, n);
        }, [n]);
    return (l.useEffect(() => {
        !(async function (e, t) {
            await E.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === i.length)
        ? null
        : (0, r.jsx)(c.xJW, {
              title: R.intl.string(R.t.flCxLi),
              titleClassName: L.infoTitle,
              children:
                  i.length > 0
                      ? (0, r.jsx)(f.WM, {
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    D,
                                    {
                                        log: e,
                                        member: t,
                                        guild: n,
                                    },
                                    e.id,
                                ),
                            ),
                        })
                      : null,
          });
}
