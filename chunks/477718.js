n.d(t, { Z: () => b });
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
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
    f = n(271383),
    N = n(430824),
    h = n(5192),
    O = n(776767),
    p = n(981631),
    R = n(388032),
    S = n(54433),
    C = n(44946),
    v = n(12740);
function D(e) {
    var t, n;
    let { log: s, member: a, guild: E } = e,
        { analyticsLocations: T } = (0, d.ZP)(),
        N = m.nm(s),
        O = m.QM(s),
        v = null == (t = m.V$(p.zUn.REASON, s)) ? void 0 : t.newValue,
        D = m.J5(s),
        b = (0, _.LJ)(s.id),
        L = (0, u.e7)([f.ZP], () => (null != s.userId ? f.ZP.getMember(a.guildId, s.userId) : null), [
            a.guildId,
            s.userId,
        ]),
        x = (0, g.X7)(
            null == L ? void 0 : L.guildId,
            null == L ? void 0 : L.userId,
            null != (n = null == L ? void 0 : L.colorStrings) ? n : null,
        ),
        U = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T);
            },
            [T],
        ),
        M = l.useCallback(
            () =>
                null == s.user
                    ? null
                    : (0, r.jsx)(c.ua7, {
                          text: R.intl.string(R.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: n, onMouseLeave: l } = e;
                              return (0, r.jsx)(c.P3F, {
                                  tag: "span",
                                  className: S.username,
                                  onClick: U(L),
                                  onMouseEnter: n,
                                  onMouseLeave: l,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: "text-sm/medium",
                                      tag: "span",
                                      children: [
                                          "@",
                                          (0, r.jsx)(c.PUh, {
                                              name: h.ZP.getName(a.guildId, null, s.user),
                                              colorString: null != (t = null == L ? void 0 : L.colorString) ? t : null,
                                              colorStrings: x,
                                          }),
                                      ],
                                  }),
                              });
                          },
                      }),
            [U, s.user, a.guildId, L, x],
        )();
    return (0, r.jsxs)("div", {
        className: i()(C.modInfoItem, S.auditLogItem),
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
                            children: b,
                        }),
                    }),
                ],
            }),
            null != v &&
                (0, r.jsx)("div", {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.auditLogReason,
                        children: [
                            M,
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: v,
                            }),
                        ],
                    }),
                }),
            null == v &&
                null != D &&
                (0, r.jsx)("div", {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.auditLogSecondary,
                        children: [
                            M,
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: D,
                            }),
                        ],
                    }),
                }),
            null == v &&
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
                                log: s,
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
function b(e) {
    let { member: t } = e,
        n = (0, u.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]),
        s = (0, u.e7)([T.Z], () => {
            let e = T.Z.logs;
            return null == e || null == n ? [] : m._$(e, n);
        }, [n]);
    return (l.useEffect(() => {
        !(async function (e, t) {
            await E.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === s.length)
        ? null
        : (0, r.jsx)(c.xJW, {
              title: R.intl.string(R.t.flCxLi),
              titleClassName: v.infoTitle,
              children:
                  s.length > 0
                      ? (0, r.jsx)(O.WM, {
                            children: s.map((e) =>
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
