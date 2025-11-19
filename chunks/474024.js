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
    m = n(434404),
    p = n(436879),
    f = n(981631),
    h = n(388032),
    b = n(250425);
function x(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        x = n.id,
        j = s.Y.VISIBLE.has(n.visibility),
        _ = (0, o.e7)([d.Z], () => {
            var e;
            return (null == (e = d.Z.getProfile(x)) ? void 0 : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT;
        }, [x]),
        v = i.useRef(null);
    (0, p.Z)(v, f.KsC.PROFILE_VISIBILITY);
    let O = i.useCallback(() => {
            j
                ? m.Z.updateGuildProfile(x, { visibility: u.k.RESTRICTED })
                : m.Z.updateGuildProfile(x, { visibility: _ ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC });
        }, [x, _, j]),
        C = i.useCallback(() => {
            m.Z.setSection(f.pNK.ACCESS, f.KsC.ACCESS_DISCOVERABLE);
        }, []),
        y = null == (t = n.features) ? void 0 : t.includes(f.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: b.twoColumnContainer,
        ref: v,
        children: [
            (0, r.jsxs)("div", {
                className: b.column,
                children: [
                    (0, r.jsx)(c.rsf, {
                        label: h.intl.string(h.t.fjHWen),
                        description: h.intl.string(h.t.J1YOV6),
                        checked: !j,
                        onChange: O,
                        disabled: y || !l,
                    }),
                    y &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: h.intl.format(h.t.R8jY9g, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        c.Anchor,
                                        {
                                            onClick: C,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(b.column, { [b.profileViewDisabled]: j }),
                children: (0, r.jsx)(g.Z, {
                    guildId: x,
                    name: null,
                }),
            }),
        ],
    });
}
