n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(580685),
    o = n(442837),
    c = n(481060),
    d = n(314852),
    u = n(330705),
    m = n(423252),
    g = n(434404),
    p = n(436879),
    f = n(981631),
    h = n(388032),
    b = n(250425);
function x(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        x = n.id,
        j = a.Y.VISIBLE.has(n.visibility),
        v = (0, o.e7)([d.Z], () => {
            var e;
            return (null == (e = d.Z.getProfile(x)) ? void 0 : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT;
        }, [x]),
        _ = i.useRef(null);
    (0, p.Z)(_, f.KsC.PROFILE_VISIBILITY);
    let O = i.useCallback(() => {
            j
                ? g.Z.updateGuildProfile(x, { visibility: u.k.RESTRICTED })
                : g.Z.updateGuildProfile(x, { visibility: v ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC });
        }, [x, v, j]),
        y = i.useCallback(() => {
            g.Z.setSection(f.pNK.ACCESS, f.KsC.ACCESS_DISCOVERABLE);
        }, []),
        C = null == (t = n.features) ? void 0 : t.includes(f.oNc.DISCOVERABLE);
    return (0, r.jsxs)(c.hjN, {
        className: b.twoColumnContainer,
        ref: _,
        children: [
            (0, r.jsxs)("div", {
                className: b.column,
                children: [
                    (0, r.jsx)(c.rsf, {
                        label: h.intl.string(h.t.fjHWen),
                        description: h.intl.string(h.t.J1YOV1),
                        checked: !j,
                        onChange: O,
                        disabled: C || !l,
                    }),
                    C &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: h.intl.format(h.t.R8jY9v, {
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
                className: s()(b.column, { [b.profileViewDisabled]: j }),
                children: (0, r.jsx)(m.Z, {
                    guildId: x,
                    name: null,
                }),
            }),
        ],
    });
}
