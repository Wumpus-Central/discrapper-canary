n.d(t, { r: () => v });
var r = n(54381),
    i = n(473749),
    l = n(580685),
    a = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(944163),
    d = n(65361),
    u = n(798476),
    g = n(434404),
    f = n(999382),
    m = n(548522),
    b = n(651390),
    p = n(981631),
    h = n(388032),
    x = n(159150);
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
        { guild: n, guildProfile: v } = (0, s.cj)([f.Z], () => ({
            guild: f.Z.getGuild(),
            guildProfile: f.Z.getGuildProfile(),
        })),
        O = null == n ? void 0 : n.id,
        C = (0, s.e7)([c.Z], () => c.Z.get(O)),
        { fetchGuildProfile: y } = (0, d.u)(O),
        N = (null == v ? void 0 : v.visibility) == null || !l.Y.VISIBLE.has(null == v ? void 0 : v.visibility),
        E = (null == v ? void 0 : v.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != O && y();
    }, [O, y]);
    let I = i.useMemo(() => (null == n || null == v ? j : v), [n, v]),
        S = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (E
                    ? g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC })
                    : g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, E]),
        _ = i.useCallback(() => {
            g.Z.setSection(p.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let T = null != t ? t : null == C ? void 0 : C.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: h.intl.string(h.t.AHJddL),
            }),
            (0, r.jsx)(a.xvT, {
                tag: "p",
                variant: "text-sm/medium",
                color: "text-subtle",
                className: x.applicationBody,
                children: h.intl.string(h.t.Z7TCtd),
            }),
            (0, r.jsx)(b.c, { guildId: n.id }),
            (0, r.jsx)("div", {
                className: x.form,
                children:
                    null != T
                        ? (0, r.jsx)(m.y, {
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
                                label: h.intl.string(h.t["N/0232"]),
                                checked: E,
                                onChange: S,
                                disabled: N,
                            }),
                            (0, r.jsx)(a.xvT, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.string(h.t["3TSZYK"]),
                            }),
                            N &&
                                (0, r.jsx)(a.xvT, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: h.intl.format(h.t.Bk0VOi, {
                                        profileLink: (e, t) =>
                                            (0, r.jsx)(
                                                o.eee,
                                                {
                                                    onClick: _,
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
                                    profile: I,
                                    CTAOverride: (0, r.jsx)(a.zxk, {
                                        variant: "active",
                                        size: "sm",
                                        text: h.intl.string(h.t["7XdMW2"]),
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
