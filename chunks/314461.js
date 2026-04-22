t.d(n, { default: () => N });
var l = t(627968);
t(64700);
var r = t(224640),
    a = t(20742),
    i = t(573613),
    s = t(430690),
    d = t(688810),
    o = t(208039),
    c = t(397400),
    u = t(187549),
    m = t(355609),
    x = t(842319),
    _ = t(27023),
    g = t(800007),
    h = t(576709),
    f = t(985018),
    j = t(460790);
function p(e) {
    let { step: n, setFooterNode: t } = (0, _.bv)(),
        d = (0, u.U)("GameServerSetupModal"),
        { title: c, subtitle: p } = (function (e) {
            switch (e) {
                case g.HS.SELECT_GAME:
                    return { title: f.intl.string(h.default["3vWDMz"]), subtitle: f.intl.string(h.default.Az5bjs) };
                case g.HS.SERVER_SETTINGS:
                    return { title: f.intl.string(h.default.RLGW9z) };
            }
        })(n);
    return (0, l.jsxs)(r.d, {
        ...e,
        size: "lg",
        children: [
            (0, l.jsx)(a.rQ, { title: c, subtitle: p }),
            d &&
                (0, l.jsx)("div", {
                    className: j.M,
                    children: (0, l.jsx)(o.A, { look: o.k.WARNING, children: f.intl.format(h.default.XzXjK2, {}) }),
                }),
            (0, l.jsx)(i.Ip, {
                className: j.j,
                style: { width: g.ST },
                children: (0, l.jsx)("div", {
                    style: { padding: g.by },
                    children: (0, l.jsxs)(s.t, {
                        width: g.U$,
                        activeSlide: n,
                        children: [
                            (0, l.jsx)(s.q, { id: g.HS.SELECT_GAME, children: (0, l.jsx)(m.A, {}) }, g.HS.SELECT_GAME),
                            (0, l.jsx)(
                                s.q,
                                { id: g.HS.SERVER_SETTINGS, children: (0, l.jsx)(x.A, {}) },
                                g.HS.SERVER_SETTINGS,
                            ),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)("div", { ref: (e) => t(e) }),
        ],
    });
}
function N(e) {
    let { analyticsLocations: n } = (0, d.Ay)();
    return (
        (0, c.wN)(e.guildId, n, e.analyticsLocation),
        (0, l.jsx)(d.f5, { value: n, children: (0, l.jsx)(_.mf, { ...e, children: (0, l.jsx)(p, { ...e }) }) })
    );
}
