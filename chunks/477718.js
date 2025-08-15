t.d(e, { Z: () => P });
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    a = t(913527),
    s = t.n(a),
    o = t(399606),
    g = t(481060),
    c = t(480137),
    f = t(906732),
    v = t(376923),
    u = t(472596),
    h = t(987707),
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
    O = t(87819);
function Q(A) {
    var e, t;
    let { log: l, member: a, guild: c } = A,
        { analyticsLocations: h } = (0, f.ZP)(),
        w = d.nm(l),
        M = d.QM(l),
        O = null == (e = d.V$(p.zUn.REASON, l)) ? void 0 : e.newValue,
        Q = d.J5(l),
        P = (0, v.LJ)(l.id),
        j = (0, o.e7)([B.ZP], () => (null != l.userId ? B.ZP.getMember(a.guildId, l.userId) : null), [
            a.guildId,
            l.userId,
        ]),
        V = (0, C.X7)(
            null == j ? void 0 : j.guildId,
            null == j ? void 0 : j.userId,
            null != (t = null == j ? void 0 : j.colorStrings) ? t : null,
        ),
        m = r.useCallback(
            (A) => (e) => {
                e.preventDefault(), e.stopPropagation(), null != A && (0, u.RE)(A, h);
            },
            [h],
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
                                  onClick: m(j),
                                  onMouseEnter: t,
                                  onMouseLeave: r,
                                  children: (0, n.jsxs)(g.Text, {
                                      variant: "text-sm/medium",
                                      tag: "span",
                                      children: [
                                          "@",
                                          (0, n.jsx)(g.PUh, {
                                              name: D.ZP.getName(a.guildId, null, l.user),
                                              colorString: null != (e = null == j ? void 0 : j.colorString) ? e : null,
                                              colorStrings: V,
                                          }),
                                      ],
                                  }),
                              });
                          },
                      }),
            [m, l.user, a.guildId, j, V],
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
                                    children: ["(", "string" == typeof M ? M : s()(M).fromNow(), ")"],
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
            null != O &&
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
                                children: O,
                            }),
                        ],
                    }),
                }),
            null == O &&
                null != Q &&
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
                                children: Q,
                            }),
                        ],
                    }),
                }),
            null == O &&
                null == Q &&
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
        l = (0, o.e7)([h.Z], () => {
            let A = h.Z.logs;
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
              titleClassName: O.infoTitle,
              children:
                  l.length > 0
                      ? (0, n.jsx)(M.WM, {
                            children: l.map((A) =>
                                (0, n.jsx)(
                                    Q,
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
