n.d(t, { r: () => v });
var r = n(951288),
    i = n(647438),
    l = n(580685),
    s = n(793030),
    a = n(442837),
    o = n(481060),
    c = n(944163),
    d = n(65361),
    u = n(798476),
    m = n(434404),
    g = n(999382),
    p = n(548522),
    f = n(651390),
    h = n(981631),
    b = n(388032),
    x = n(928913);
let j = {
    id: "0",
    name: "",
    description: "",
    icon: "",
    customBanner: null,
    onlineCount: 0,
    memberCount: 0,
    traits: [],
    gameApplicationIds: [],
    gameActivity: {},
    visibility: l.k.RESTRICTED,
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null,
};
function v(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: v } = (0, a.cj)([g.Z], () => ({
            guild: g.Z.getGuild(),
            guildProfile: g.Z.getGuildProfile(),
        })),
        _ = null == n ? void 0 : n.id,
        O = (0, a.e7)([c.Z], () => c.Z.get(_)),
        { fetchGuildProfile: y } = (0, d.u)(_),
        C = (null == v ? void 0 : v.visibility) == null || !l.Y.VISIBLE.has(null == v ? void 0 : v.visibility),
        N = (null == v ? void 0 : v.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != _ && y();
    }, [_, y]);
    let E = i.useMemo(() => (null == n || null == v ? j : v), [n, v]),
        I = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (N
                    ? m.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC })
                    : m.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, N]),
        S = i.useCallback(() => {
            m.Z.setSection(h.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let T = null != t ? t : null == O ? void 0 : O.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: b.intl.string(b.t.AHJddH),
            }),
            (0, r.jsx)(s.xvT, {
                tag: "p",
                variant: "text-sm/medium",
                color: "text-secondary",
                className: x.applicationBody,
                children: b.intl.string(b.t.Z7TCtb),
            }),
            (0, r.jsx)(f.c, { guildId: n.id }),
            (0, r.jsx)("div", {
                className: x.form,
                children:
                    null != T
                        ? (0, r.jsx)(p.y, {
                              guild: n,
                              formFields: T,
                          })
                        : (0, r.jsx)(o.$jN, {}),
            }),
            (0, r.jsx)("div", { className: x.divider }),
            (0, r.jsxs)(o.hjN, {
                className: x.twoColumnContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.column,
                        children: [
                            (0, r.jsx)(o.rsf, {
                                label: b.intl.string(b.t["N/0239"]),
                                checked: N,
                                onChange: I,
                                disabled: C,
                            }),
                            (0, r.jsx)(s.xvT, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                children: b.intl.string(b.t["3TSZYG"]),
                            }),
                            C &&
                                (0, r.jsx)(s.xvT, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.Bk0VOj, {
                                        profileLink: (e, t) =>
                                            (0, r.jsx)(
                                                o.eee,
                                                {
                                                    onClick: S,
                                                    children: e,
                                                },
                                                t,
                                            ),
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.column,
                        children: (0, r.jsxs)("div", {
                            className: x.previewWrapper,
                            children: [
                                (0, r.jsx)("div", { className: x.gradient }),
                                (0, r.jsx)(u.ZP, {
                                    className: x.preview,
                                    profile: E,
                                    CTAOverride: (0, r.jsx)(s.zxk, {
                                        variant: "active",
                                        size: "sm",
                                        text: b.intl.string(b.t["7XdMW1"]),
                                        fullWidth: !0,
                                    }),
                                    disableGuildNameClick: !0,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
