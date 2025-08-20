t.d(e, { Z: () => P });
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    s = t(913527),
    a = t.n(s),
    o = t(399606),
    g = t(481060),
    c = t(480137),
    f = t(906732),
    v = t(376923),
    h = t(472596),
    u = t(987707),
    d = t(909746),
    E = t(501801),
    C = t(884902),
    B = t(271383),
    w = t(430824),
    D = t(5192),
    M = t(776767),
    p = t(981631),
    I = t(388032),
    H = t(87437),
    b = t(938556),
    Q = t(87819);
function O(A) {
    var e, t;
    let { log: l, member: s, guild: c } = A,
        { analyticsLocations: u } = (0, f.ZP)(),
        w = d.nm(l),
        M = d.QM(l),
        Q = null == (e = d.V$(p.zUn.REASON, l)) ? void 0 : e.newValue,
        O = d.J5(l),
        P = (0, v.LJ)(l.id),
        V = (0, o.e7)([B.ZP], () => (null != l.userId ? B.ZP.getMember(s.guildId, l.userId) : null), [
            s.guildId,
            l.userId,
        ]),
        j = (0, C.X7)(
            null == V ? void 0 : V.guildId,
            null == V ? void 0 : V.userId,
            null != (t = null == V ? void 0 : V.colorStrings) ? t : null,
        ),
        m = r.useCallback(
            (A) => (e) => {
                e.preventDefault(), e.stopPropagation(), null != A && (0, h.RE)(A, u);
            },
            [u],
        ),
        T = r.useCallback(
            () =>
                null == l.user
                    ? null
                    : (0, n.jsx)(g.ua7, {
                          text: I.intl.string(I.t.mvsi9v),
                          children: (A) => {
                              var e;
                              let { onMouseEnter: t, onMouseLeave: r } = A;
                              return (0, n.jsx)(g.P3F, {
                                  tag: "span",
                                  className: H.username,
                                  onClick: m(V),
                                  onMouseEnter: t,
                                  onMouseLeave: r,
                                  children: (0, n.jsxs)(g.Text, {
                                      variant: "text-sm/medium",
                                      tag: "span",
                                      children: [
                                          "@",
                                          (0, n.jsx)(g.PUh, {
                                              name: D.ZP.getName(s.guildId, null, l.user),
                                              colorString: null != (e = null == V ? void 0 : V.colorString) ? e : null,
                                              colorStrings: j,
                                          }),
                                      ],
                                  }),
                              });
                          },
                      }),
            [m, l.user, s.guildId, V, j],
        )();
    return (0, n.jsxs)("div", {
        className: i()(b.modInfoItem, H.auditLogItem),
        children: [
            (0, n.jsxs)("div", {
                className: H.auditLogItemTitleContainer,
                children: [
                    (0, n.jsxs)("div", {
                        className: H.auditLogItemTitle,
                        children: [
                            null != w &&
                                (0, n.jsx)(g.Text, {
                                    variant: "text-sm/semibold",
                                    color: "header-primary",
                                    children: w,
                                }),
                            null != M &&
                                (0, n.jsxs)(g.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ["(", "string" == typeof M ? M : a()(M).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: H.auditLogItemDate,
                        children: (0, n.jsx)(g.Text, {
                            variant: "text-sm/medium",
                            color: "header-primary",
                            children: P,
                        }),
                    }),
                ],
            }),
            null != Q &&
                (0, n.jsx)("div", {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsxs)("div", {
                        className: H.auditLogReason,
                        children: [
                            T,
                            (0, n.jsx)(g.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: Q,
                            }),
                        ],
                    }),
                }),
            null == Q &&
                null != O &&
                (0, n.jsx)("div", {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsxs)("div", {
                        className: H.auditLogSecondary,
                        children: [
                            T,
                            (0, n.jsx)(g.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: O,
                            }),
                        ],
                    }),
                }),
            null == Q &&
                null == O &&
                (0, n.jsx)("div", {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsx)("div", {
                        className: H.auditLogSecondary,
                        children: (0, n.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, n.jsx)(E.tP, {
                                log: l,
                                guild: c,
                                onContentClick: () => {},
                                className: H.auditLogExpandedChangeDetails,
                            }),
                        }),
                    }),
                }),
        ],
    });
}
function P(A) {
    let { member: e } = A,
        t = (0, o.e7)([w.Z], () => w.Z.getGuild(e.guildId), [e.guildId]),
        l = (0, o.e7)([u.Z], () => {
            let A = u.Z.logs;
            return null == A || null == t ? [] : d._$(A, t);
        }, [t]);
    return (r.useEffect(() => {
        !(async function (A, e) {
            await c.gV(e, A);
        })(e.guildId, e.userId);
    }, [e.guildId, e.userId]),
    null == t || 0 === l.length)
        ? null
        : (0, n.jsx)(g.xJW, {
              title: I.intl.string(I.t.flCxLi),
              titleClassName: Q.infoTitle,
              children:
                  l.length > 0
                      ? (0, n.jsx)(M.WM, {
                            children: l.map((A) =>
                                (0, n.jsx)(
                                    O,
                                    {
                                        log: A,
                                        member: e,
                                        guild: t,
                                    },
                                    A.id,
                                ),
                            ),
                        })
                      : null,
          });
}
