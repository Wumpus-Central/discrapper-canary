n.d(t, { r: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(580685),
    s = n(793030),
    a = n(442837),
    o = n(481060),
    c = n(944163),
    d = n(65361),
    u = n(798476),
    g = n(434404),
    m = n(999382),
    p = n(548522),
    f = n(651390),
    h = n(981631),
    x = n(388032),
    b = n(556955);
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
function _(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: _ } = (0, a.cj)([m.Z], () => ({
            guild: m.Z.getGuild(),
            guildProfile: m.Z.getGuildProfile(),
        })),
        v = null == n ? void 0 : n.id,
        C = (0, a.e7)([c.Z], () => c.Z.get(v)),
        { fetchGuildProfile: O } = (0, d.u)(v),
        y = (null == _ ? void 0 : _.visibility) == null || !l.Y.VISIBLE.has(null == _ ? void 0 : _.visibility),
        N = (null == _ ? void 0 : _.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != v && O();
    }, [v, O]);
    let E = i.useMemo(() => (null == n || null == _ ? j : _), [n, _]),
        I = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (N
                    ? g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC })
                    : g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, N]),
        S = i.useCallback(() => {
            g.Z.setSection(h.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let T = null != t ? t : null == C ? void 0 : C.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: x.intl.string(x.t.AHJddH),
            }),
            (0, r.jsx)(s.xvT, {
                tag: "p",
                variant: "text-sm/medium",
                color: "text-secondary",
                className: b.applicationBody,
                children: x.intl.string(x.t.Z7TCtb),
            }),
            (0, r.jsx)(f.c, { guildId: n.id }),
            (0, r.jsx)("div", {
                className: b.form,
                children:
                    null != T
                        ? (0, r.jsx)(p.y, {
                              guild: n,
                              formFields: T,
                          })
                        : (0, r.jsx)(o.$jN, {}),
            }),
            (0, r.jsx)("div", { className: b.divider }),
            (0, r.jsxs)(o.hjN, {
                className: b.twoColumnContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.column,
                        children: [
                            (0, r.jsx)(o.rsf, {
                                label: x.intl.string(x.t["N/0239"]),
                                checked: N,
                                onChange: I,
                                disabled: y,
                            }),
                            (0, r.jsx)(s.xvT, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                children: x.intl.string(x.t["3TSZYG"]),
                            }),
                            y &&
                                (0, r.jsx)(s.xvT, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: x.intl.format(x.t.Bk0VOj, {
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
                        className: b.column,
                        children: (0, r.jsxs)("div", {
                            className: b.previewWrapper,
                            children: [
                                (0, r.jsx)("div", { className: b.gradient }),
                                (0, r.jsx)(u.ZP, {
                                    className: b.preview,
                                    profile: E,
                                    CTAOverride: (0, r.jsx)(s.zxk, {
                                        variant: "active",
                                        size: "sm",
                                        text: x.intl.string(x.t["7XdMW1"]),
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
