n.d(t, { Z: () => U });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(913527),
    o = n.n(a),
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
    N = n(271383),
    h = n(430824),
    f = n(5192),
    O = n(776767),
    p = n(981631),
    R = n(388032),
    S = n(87437),
    C = n(938556),
    D = n(87819);
function L(e) {
    var t, n;
    let { log: i, member: a, guild: E } = e,
        { analyticsLocations: T } = (0, d.ZP)(),
        h = m.nm(i),
        O = m.QM(i),
        D = null == (t = m.V$(p.zUn.REASON, i)) ? void 0 : t.newValue,
        L = m.J5(i),
        U = (0, _.LJ)(i.id),
        M = (0, u.e7)([N.ZP], () => (null != i.userId ? N.ZP.getMember(a.guildId, i.userId) : null), [
            a.guildId,
            i.userId,
        ]),
        v = (0, g.X7)(
            null == M ? void 0 : M.guildId,
            null == M ? void 0 : M.userId,
            null != (n = null == M ? void 0 : M.colorStrings) ? n : null,
        ),
        b = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T);
            },
            [T],
        ),
        x = l.useCallback(
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
                                  onClick: b(M),
                                  onMouseEnter: n,
                                  onMouseLeave: l,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: "text-sm/medium",
                                      tag: "span",
                                      children: [
                                          "@",
                                          (0, r.jsx)(c.PUh, {
                                              name: f.ZP.getName(a.guildId, null, i.user),
                                              colorString: null != (t = null == M ? void 0 : M.colorString) ? t : null,
                                              colorStrings: v,
                                          }),
                                      ],
                                  }),
                              });
                          },
                      }),
            [b, i.user, a.guildId, M, v],
        )();
    return (0, r.jsxs)("div", {
        className: s()(C.modInfoItem, S.auditLogItem),
        children: [
            (0, r.jsxs)("div", {
                className: S.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.auditLogItemTitle,
                        children: [
                            null != h &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "header-primary",
                                    children: h,
                                }),
                            null != O &&
                                (0, r.jsxs)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ["(", "string" == typeof O ? O : o()(O).fromNow(), ")"],
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
            null != D &&
                (0, r.jsx)("div", {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.auditLogReason,
                        children: [
                            x,
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: D,
                            }),
                        ],
                    }),
                }),
            null == D &&
                null != L &&
                (0, r.jsx)("div", {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.auditLogSecondary,
                        children: [
                            x,
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: L,
                            }),
                        ],
                    }),
                }),
            null == D &&
                null == L &&
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
        n = (0, u.e7)([h.Z], () => h.Z.getGuild(t.guildId), [t.guildId]),
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
              titleClassName: D.infoTitle,
              children:
                  i.length > 0
                      ? (0, r.jsx)(O.WM, {
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    L,
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
