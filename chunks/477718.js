n.d(t, { Z: () => M });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(913527),
    o = n.n(a),
    u = n(399606),
    c = n(28664),
    E = n(481060),
    d = n(480137),
    _ = n(906732),
    A = n(376923),
    T = n(472596),
    I = n(909746),
    m = n(233857),
    g = n(501801),
    N = n(884902),
    h = n(271383),
    O = n(430824),
    f = n(5192),
    R = n(776767),
    S = n(981631),
    C = n(388032),
    p = n(114891),
    D = n(885930),
    L = n(152540);
function U(e) {
    var t, n;
    let { log: i, member: a, guild: d } = e,
        { analyticsLocations: m } = (0, _.ZP)(),
        O = I.nm(i),
        R = I.QM(i),
        L = null == (t = I.V$(S.zUn.REASON, i)) ? void 0 : t.newValue,
        U = I.J5(i),
        M = (0, A.LJ)(i.id),
        x = (0, u.e7)([h.ZP], () => (null != i.userId ? h.ZP.getMember(a.guildId, i.userId) : null), [
            a.guildId,
            i.userId,
        ]),
        v = (0, N.X7)(
            null == x ? void 0 : x.guildId,
            null == x ? void 0 : x.userId,
            null != (n = null == x ? void 0 : x.colorStrings) ? n : null,
        ),
        b = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, T.RE)(e, m);
            },
            [m],
        ),
        P = l.useCallback(() => {
            var e;
            return null == i.user
                ? null
                : (0, r.jsx)(c.u, {
                      asContainer: !0,
                      text: C.intl.string(C.t.mvsi9v),
                      children: (0, r.jsx)(E.P3F, {
                          onClick: b(x),
                          tag: "span",
                          className: p.username,
                          children: (0, r.jsxs)(E.Text, {
                              variant: "text-sm/medium",
                              tag: "span",
                              children: [
                                  "@",
                                  (0, r.jsx)(E.PUh, {
                                      name: f.ZP.getName(a.guildId, null, i.user),
                                      colorString: null != (e = null == x ? void 0 : x.colorString) ? e : null,
                                      colorStrings: v,
                                  }),
                              ],
                          }),
                      }),
                  });
        }, [b, i.user, a.guildId, x, v])();
    return (0, r.jsxs)("div", {
        className: s()(D.modInfoItem, p.auditLogItem),
        children: [
            (0, r.jsxs)("div", {
                className: p.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.auditLogItemTitle,
                        children: [
                            null != O &&
                                (0, r.jsx)(E.Text, {
                                    variant: "text-sm/semibold",
                                    color: "header-primary",
                                    children: O,
                                }),
                            null != R &&
                                (0, r.jsxs)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ["(", "string" == typeof R ? R : o()(R).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: p.auditLogItemDate,
                        children: (0, r.jsx)(E.Text, {
                            variant: "text-sm/medium",
                            color: "header-primary",
                            children: M,
                        }),
                    }),
                ],
            }),
            null != L &&
                (0, r.jsx)("div", {
                    className: p.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: p.auditLogReason,
                        children: [
                            P,
                            (0, r.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: L,
                            }),
                        ],
                    }),
                }),
            null == L &&
                null != U &&
                (0, r.jsx)("div", {
                    className: p.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: p.auditLogSecondary,
                        children: [
                            P,
                            (0, r.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: U,
                            }),
                        ],
                    }),
                }),
            null == L &&
                null == U &&
                (0, r.jsx)("div", {
                    className: p.auditLogSecondaryContainer,
                    children: (0, r.jsx)("div", {
                        className: p.auditLogSecondary,
                        children: (0, r.jsx)(E.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, r.jsx)(g.tP, {
                                log: i,
                                guild: d,
                                onContentClick: () => {},
                                className: p.auditLogExpandedChangeDetails,
                            }),
                        }),
                    }),
                }),
        ],
    });
}
function M(e) {
    let { member: t } = e,
        n = (0, u.e7)([O.Z], () => O.Z.getGuild(t.guildId), [t.guildId]),
        i = (0, u.e7)([m.Z], () => {
            let e = m.Z.logs;
            return null == e || null == n ? [] : I._$(e, n);
        }, [n]);
    return (l.useEffect(() => {
        !(async function (e, t) {
            await d.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === i.length)
        ? null
        : (0, r.jsx)(E.xJW, {
              title: C.intl.string(C.t.flCxLi),
              titleClassName: L.infoTitle,
              children:
                  i.length > 0
                      ? (0, r.jsx)(R.WM, {
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    U,
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
