"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(280513),
    o = n(311907),
    d = n(397927),
    c = n(837011),
    u = n(348943),
    m = n(576055),
    g = n(997509),
    x = n(665346),
    h = n(652215),
    _ = n(985018),
    p = n(781944);
function A(e) {
    let { profile: t, canManageGuild: n } = e,
        l = t.id,
        A = a.i.VISIBLE.has(t.visibility),
        f = (0, o.bG)([c.A], () => c.A.getProfile(l)?.visibility === u.n.PUBLIC_WITH_RECRUITMENT, [l]),
        j = s.useRef(null);
    (0, x.A)(j, h.nd0.PROFILE_VISIBILITY);
    let N = s.useCallback(() => {
            A
                ? g.A.updateGuildProfile(l, { visibility: u.n.RESTRICTED })
                : g.A.updateGuildProfile(l, { visibility: f ? u.n.PUBLIC_WITH_RECRUITMENT : u.n.PUBLIC });
        }, [l, f, A]),
        E = s.useCallback(() => {
            g.A.setSection(h.BEX.ACCESS, h.nd0.ACCESS_DISCOVERABLE);
        }, []),
        b = t.features?.includes(h.GuildFeatures.DISCOVERABLE);
    return (0, i.jsxs)("div", {
        className: p.Im,
        ref: j,
        children: [
            (0, i.jsxs)("div", {
                className: p.fi,
                children: [
                    (0, i.jsx)(d.dOG, {
                        label: _.intl.string(_.t.fjHWen),
                        description: _.intl.string(_.t.J1YOV6),
                        checked: !A,
                        onChange: N,
                        disabled: b || !n,
                    }),
                    b &&
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: _.intl.format(_.t.R8jY9g, {
                                accessLink: (e, t) => (0, i.jsx)(d.MzZ, { onClick: E, children: e }, t),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(p.fi, { [p.Rl]: A }),
                children: (0, i.jsx)(m.A, { guildId: l, name: null }),
            }),
        ],
    });
}
