n.d(t, { Z: () => U });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    u = n(399606),
    c = n(28664),
    E = n(481060),
    d = n(480137),
    _ = n(906732),
    A = n(376923),
    T = n(472596),
    I = n(909746),
    m = n(233857),
    f = n(501801),
    g = n(884902),
    N = n(271383),
    h = n(430824),
    O = n(5192),
    R = n(776767),
    S = n(981631),
    p = n(388032),
    C = n(530952),
    b = n(608586);
function D(e) {
    var t, n;
    let { log: i, member: s, guild: d } = e,
        { analyticsLocations: m } = (0, _.ZP)(),
        h = I.nm(i),
        R = I.QM(i),
        D = null == (t = I.V$(S.zUn.REASON, i)) ? void 0 : t.newValue,
        U = I.J5(i),
        L = (0, A.LJ)(i.id),
        M = (0, u.e7)([N.ZP], () => (null != i.userId ? N.ZP.getMember(s.guildId, i.userId) : null), [
            s.guildId,
            i.userId,
        ]),
        x = (0, g.X7)(
            null == M ? void 0 : M.guildId,
            null == M ? void 0 : M.userId,
            null != (n = null == M ? void 0 : M.colorStrings) ? n : null,
        ),
        v = l.useCallback(
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
                      text: p.intl.string(p.t.mvsi9n),
                      children: (0, r.jsx)(E.P3F, {
                          onClick: v(M),
                          tag: "span",
                          className: C.username,
                          children: (0, r.jsxs)(E.Text, {
                              variant: "text-sm/medium",
                              tag: "span",
                              children: [
                                  "@",
                                  (0, r.jsx)(E.PUh, {
                                      name: O.ZP.getName(s.guildId, null, i.user),
                                      colorString: null != (e = null == M ? void 0 : M.colorString) ? e : null,
                                      colorStrings: x,
                                  }),
                              ],
                          }),
                      }),
                  });
        }, [v, i.user, s.guildId, M, x])();
    return (0, r.jsxs)("div", {
        className: a()(b.modInfoItem, C.auditLogItem),
        children: [
            (0, r.jsxs)("div", {
                className: C.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: C.auditLogItemTitle,
                        children: [
                            null != h &&
                                (0, r.jsx)(E.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: h,
                                }),
                            null != R &&
                                (0, r.jsxs)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ["(", "string" == typeof R ? R : o()(R).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: C.auditLogItemDate,
                        children: (0, r.jsx)(E.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: L,
                        }),
                    }),
                ],
            }),
            null != D &&
                (0, r.jsx)("div", {
                    className: C.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: C.auditLogReason,
                        children: [
                            P,
                            (0, r.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: D,
                            }),
                        ],
                    }),
                }),
            null == D &&
                null != U &&
                (0, r.jsx)("div", {
                    className: C.auditLogSecondaryContainer,
                    children: (0, r.jsxs)("div", {
                        className: C.auditLogSecondary,
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
            null == D &&
                null == U &&
                (0, r.jsx)("div", {
                    className: C.auditLogSecondaryContainer,
                    children: (0, r.jsx)("div", {
                        className: C.auditLogSecondary,
                        children: (0, r.jsx)(E.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, r.jsx)(f.tP, {
                                log: i,
                                guild: d,
                                onContentClick: () => {},
                                className: C.auditLogExpandedChangeDetails,
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
        : (0, r.jsx)(E.gNt, {
              label: p.intl.string(p.t.flCxLo),
              children:
                  i.length > 0
                      ? (0, r.jsx)(R.WM, {
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
