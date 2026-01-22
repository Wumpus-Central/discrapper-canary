n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(280513),
    c = n(311907),
    o = n(397927),
    d = n(837011),
    u = n(348943),
    f = n(576055),
    g = n(997509),
    b = n(665346),
    m = n(652215),
    p = n(985018),
    x = n(7791);
function h(e) {
    var t;
    let { profile: n, canManageGuild: l } = e,
        h = n.id,
        j = a.i.VISIBLE.has(n.visibility),
        O = (0, c.bG)([d.A], () => {
            var e;
            return (null == (e = d.A.getProfile(h)) ? void 0 : e.visibility) === u.n.PUBLIC_WITH_RECRUITMENT;
        }, [h]),
        y = i.useRef(null);
    (0, b.A)(y, m.nd0.PROFILE_VISIBILITY);
    let v = i.useCallback(() => {
            j
                ? g.A.updateGuildProfile(h, { visibility: u.n.RESTRICTED })
                : g.A.updateGuildProfile(h, { visibility: O ? u.n.PUBLIC_WITH_RECRUITMENT : u.n.PUBLIC });
        }, [h, O, j]),
        A = i.useCallback(() => {
            g.A.setSection(m.BEX.ACCESS, m.nd0.ACCESS_DISCOVERABLE);
        }, []),
        E = null == (t = n.features) ? void 0 : t.includes(m.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: x.Im,
        ref: y,
        children: [
            (0, r.jsxs)("div", {
                className: x.fi,
                children: [
                    (0, r.jsx)(o.dOG, {
                        label: p.intl.string(p.t.fjHWen),
                        description: p.intl.string(p.t.J1YOV6),
                        checked: !j,
                        onChange: v,
                        disabled: E || !l,
                    }),
                    E &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: p.intl.format(p.t.R8jY9g, {
                                accessLink: (e, t) =>
                                    (0, r.jsx)(
                                        o.MzZ,
                                        {
                                            onClick: A,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s()(x.fi, { [x.Rl]: j }),
                children: (0, r.jsx)(f.A, {
                    guildId: h,
                    name: null,
                }),
            }),
        ],
    });
}
