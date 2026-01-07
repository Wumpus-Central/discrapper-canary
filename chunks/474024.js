n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(580685),
    o = n(442837),
    c = n(481060),
    d = n(314852),
    u = n(330705),
    g = n(423252),
    f = n(434404),
    m = n(436879),
    b = n(981631),
    p = n(388032),
    h = n(651801);
function x(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        x = n.id,
        j = s.Y.VISIBLE.has(n.visibility),
        v = (0, o.e7)([d.Z], () => {
            var e;
            return (null == (e = d.Z.getProfile(x)) ? void 0 : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT;
        }, [x]),
        O = i.useRef(null);
    (0, m.Z)(O, b.KsC.PROFILE_VISIBILITY);
    let C = i.useCallback(() => {
            j
                ? f.Z.updateGuildProfile(x, { visibility: u.k.RESTRICTED })
                : f.Z.updateGuildProfile(x, { visibility: v ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC });
        }, [x, v, j]),
        y = i.useCallback(() => {
            f.Z.setSection(b.pNK.ACCESS, b.KsC.ACCESS_DISCOVERABLE);
        }, []),
        N = null == (t = n.features) ? void 0 : t.includes(b.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: h.twoColumnContainer,
        ref: O,
        children: [
            (0, r.jsxs)("div", {
                className: h.column,
                children: [
                    (0, r.jsx)(c.rsf, {
                        label: p.intl.string(p.t.fjHWen),
                        description: p.intl.string(p.t.J1YOV6),
                        checked: !j,
                        onChange: C,
                        disabled: N || !l,
                    }),
                    N &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: p.intl.format(p.t.R8jY9g, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        c.eee,
                                        {
                                            onClick: y,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(h.column, { [h.profileViewDisabled]: j }),
                children: (0, r.jsx)(g.Z, {
                    guildId: x,
                    name: null,
                }),
            }),
        ],
    });
}
