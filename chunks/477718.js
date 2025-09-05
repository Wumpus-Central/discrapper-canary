n.d(t, { Z: () => b });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    u = n(399606),
    c = n(481060),
    d = n(480137),
    E = n(906732),
    _ = n(376923),
    A = n(472596),
    m = n(987707),
    T = n(909746),
    I = n(501801),
    g = n(884902),
    f = n(271383),
    h = n(430824),
    N = n(5192),
    O = n(776767),
    p = n(981631),
    R = n(388032),
    S = n(87437),
    C = n(938556),
    D = n(87819);
function L(e) {
    var t, n;
    let { log: i, member: s, guild: d } = e,
        { analyticsLocations: m } = (0, E.ZP)(),
        h = T.nm(i),
        O = T.QM(i),
        D = null == (t = T.V$(p.zUn.REASON, i)) ? void 0 : t.newValue,
        L = T.J5(i),
        b = (0, _.LJ)(i.id),
        U = (0, u.e7)([f.ZP], () => (null != i.userId ? f.ZP.getMember(s.guildId, i.userId) : null), [
            s.guildId,
            i.userId,
        ]),
        v = (0, g.X7)(
            null == U ? void 0 : U.guildId,
            null == U ? void 0 : U.userId,
            null != (n = null == U ? void 0 : U.colorStrings) ? n : null,
        ),
        M = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, m);
            },
            [m],
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
                                  onClick: M(U),
                                  onMouseEnter: n,
                                  onMouseLeave: l,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: "text-sm/medium",
                                      tag: "span",
                                      children: [
                                          "@",
                                          (0, r.jsx)(c.PUh, {
                                              name: N.ZP.getName(s.guildId, null, i.user),
                                              colorString: null != (t = null == U ? void 0 : U.colorString) ? t : null,
                                              colorStrings: v,
                                          }),
                                      ],
                                  }),
                              });
                          },
                      }),
            [M, i.user, s.guildId, U, v],
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
                            children: b,
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
                                guild: d,
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
        n = (0, u.e7)([h.Z], () => h.Z.getGuild(t.guildId), [t.guildId]),
        i = (0, u.e7)([m.Z], () => {
            let e = m.Z.logs;
            return null == e || null == n ? [] : T._$(e, n);
        }, [n]);
    return (l.useEffect(() => {
        !(async function (e, t) {
            await d.gV(t, e);
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
