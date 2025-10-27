n.d(t, { r: () => v });
var r = n(951288),
    i = n(647438),
    l = n(580685),
    a = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(944163),
    d = n(65361),
    u = n(798476),
    g = n(434404),
    m = n(999382),
    p = n(548522),
    f = n(651390),
    h = n(981631),
    b = n(388032),
    x = n(556955);
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
        { guild: n, guildProfile: v } = (0, s.cj)([m.Z], () => ({
            guild: m.Z.getGuild(),
            guildProfile: m.Z.getGuildProfile(),
        })),
        _ = null == n ? void 0 : n.id,
        C = (0, s.e7)([c.Z], () => c.Z.get(_)),
        { fetchGuildProfile: O } = (0, d.u)(_),
        y = (null == v ? void 0 : v.visibility) == null || !l.Y.VISIBLE.has(null == v ? void 0 : v.visibility),
        E = (null == v ? void 0 : v.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != _ && O();
    }, [_, O]);
    let N = i.useMemo(() => (null == n || null == v ? j : v), [n, v]),
        I = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (E
                    ? g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC })
                    : g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, E]),
        S = i.useCallback(() => {
            g.Z.setSection(h.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let T = null != t ? t : null == C ? void 0 : C.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: b.intl.string(b.t.AHJddL),
            }),
            (0, r.jsx)(a.xvT, {
                tag: "p",
                variant: "text-sm/medium",
                color: "text-secondary",
                className: x.applicationBody,
                children: b.intl.string(b.t.Z7TCtd),
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
            (0, r.jsxs)("div", {
                className: x.twoColumnContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.column,
                        children: [
                            (0, r.jsx)(o.rsf, {
                                label: b.intl.string(b.t["N/0232"]),
                                checked: E,
                                onChange: I,
                                disabled: y,
                            }),
                            (0, r.jsx)(a.xvT, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                children: b.intl.string(b.t["3TSZYK"]),
                            }),
                            y &&
                                (0, r.jsx)(a.xvT, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.Bk0VOi, {
                                        profileLink: (e, t) =>
                                            (0, r.jsx)(
                                                o.Anchor,
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
                                    profile: N,
                                    CTAOverride: (0, r.jsx)(a.zxk, {
                                        variant: "active",
                                        size: "sm",
                                        text: b.intl.string(b.t["7XdMW2"]),
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
