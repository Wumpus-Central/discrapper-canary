n.d(t, { Z: () => U });
var r = n(951288),
    l = n(647438),
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
    T = n(909746),
    I = n(233857),
    m = n(501801),
    g = n(884902),
    N = n(271383),
    O = n(430824),
    h = n(5192),
    f = n(776767),
    R = n(981631),
    S = n(388032),
    p = n(114891),
    C = n(885930),
    D = n(152540);
function L(e) {
    var t, n;
    let { log: i, member: a, guild: E } = e,
        { analyticsLocations: I } = (0, d.ZP)(),
        O = T.nm(i),
        f = T.QM(i),
        D = null == (t = T.V$(R.zUn.REASON, i)) ? void 0 : t.newValue,
        L = T.J5(i),
        U = (0, _.LJ)(i.id),
        M = (0, u.e7)([N.ZP], () => (null != i.userId ? N.ZP.getMember(a.guildId, i.userId) : null), [
            a.guildId,
            i.userId,
        ]),
        b = (0, g.X7)(
            null == M ? void 0 : M.guildId,
            null == M ? void 0 : M.userId,
            null != (n = null == M ? void 0 : M.colorStrings) ? n : null,
        ),
        v = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, I);
            },
            [I],
        ),
        x = l.useCallback(
            () =>
                null == i.user
                    ? null
                    : (0, r.jsx)(c.ua7, {
                          text: S.intl.string(S.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: n, onMouseLeave: l } = e;
                              return (0, r.jsx)(c.P3F, {
                                  tag: "span",
                                  className: p.username,
                                  onClick: v(M),
                                  onMouseEnter: n,
                                  onMouseLeave: l,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: "text-sm/medium",
                                      tag: "span",
                                      children: [
                                          "@",
                                          (0, r.jsx)(c.PUh, {
                                              name: h.ZP.getName(a.guildId, null, i.user),
                                              colorString: null != (t = null == M ? void 0 : M.colorString) ? t : null,
                                              colorStrings: b,
                                          }),
                                      ],
                                  }),
                              });
                          },
                      }),
            [v, i.user, a.guildId, M, b],
        )();
    return (0, r.jsxs)("div", {
        className: s()(C.modInfoItem, p.auditLogItem),
        children: [
            (0, r.jsxs)("div", {
                className: p.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.auditLogItemTitle,
                        children: [
                            null != O &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "header-primary",
                                    children: O,
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
                        className: p.auditLogItemDate,
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
                    className: p.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: p.auditLogReason,
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
                    className: p.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: p.auditLogSecondary,
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
                    className: p.auditLogSecondaryContainer,
                    children: (0, r.jsx)("div", {
                        className: p.auditLogSecondary,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, r.jsx)(m.tP, {
                                log: i,
                                guild: E,
                                onContentClick: () => {},
                                className: p.auditLogExpandedChangeDetails,
                            }),
                        }),
                    }),
                }),
        ],
    });
}
function U(e) {
    let { member: t } = e,
        n = (0, u.e7)([O.Z], () => O.Z.getGuild(t.guildId), [t.guildId]),
        i = (0, u.e7)([I.Z], () => {
            let e = I.Z.logs;
            return null == e || null == n ? [] : T._$(e, n);
        }, [n]);
    return (l.useEffect(() => {
        !(async function (e, t) {
            await E.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === i.length)
        ? null
        : (0, r.jsx)(c.xJW, {
              title: S.intl.string(S.t.flCxLi),
              titleClassName: D.infoTitle,
              children:
                  i.length > 0
                      ? (0, r.jsx)(f.WM, {
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
