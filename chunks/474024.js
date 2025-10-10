n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(580685),
    o = n(442837),
    c = n(481060),
    d = n(314852),
    u = n(330705),
    g = n(423252),
    m = n(434404),
    p = n(436879),
    f = n(981631),
    h = n(388032),
    x = n(109229);
function b(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        b = n.id,
        j = a.Y.VISIBLE.has(n.visibility),
        _ = (0, o.e7)([d.Z], () => {
            var e;
            return (null == (e = d.Z.getProfile(b)) ? void 0 : e.visibility) === u.k.PUBLIC_WITH_RECRUITMENT;
        }, [b]),
        v = i.useRef(null);
    (0, p.Z)(v, f.KsC.PROFILE_VISIBILITY);
    let C = i.useCallback(() => {
            j
                ? m.Z.updateGuildProfile(b, { visibility: u.k.RESTRICTED })
                : m.Z.updateGuildProfile(b, { visibility: _ ? u.k.PUBLIC_WITH_RECRUITMENT : u.k.PUBLIC });
        }, [b, _, j]),
        O = i.useCallback(() => {
            m.Z.setSection(f.pNK.ACCESS, f.KsC.ACCESS_DISCOVERABLE);
        }, []),
        y = null == (t = n.features) ? void 0 : t.includes(f.oNc.DISCOVERABLE);
    return (0, r.jsxs)(c.hjN, {
        className: x.twoColumnContainer,
        ref: v,
        children: [
            (0, r.jsxs)("div", {
                className: x.column,
                children: [
                    (0, r.jsx)(c.rsf, {
                        label: h.intl.string(h.t.fjHWen),
                        description: h.intl.string(h.t.J1YOV1),
                        checked: !j,
                        onChange: C,
                        disabled: y || !l,
                    }),
                    y &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: h.intl.format(h.t.R8jY9v, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        c.eee,
                                        {
                                            onClick: O,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s()(x.column, { [x.profileViewDisabled]: j }),
                children: (0, r.jsx)(g.Z, {
                    guildId: b,
                    name: null,
                }),
            }),
        ],
    });
}
