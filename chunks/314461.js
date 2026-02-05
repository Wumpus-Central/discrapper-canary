n.d(t, { default: () => j });
var l = n(627968);
n(64700);
var r = n(158954),
    i = n(397927),
    s = n(688810),
    a = n(801264),
    d = n(397400),
    c = n(187549),
    o = n(355609),
    u = n(842319),
    m = n(27023),
    x = n(800007),
    g = n(294726),
    _ = n(985018),
    f = n(8577);
function h(e) {
    let { step: t, setFooterNode: n } = (0, m.bv)(),
        s = (0, c.U)("GameServerSetupModal"),
        { title: d, subtitle: h } = (function (e) {
            switch (e) {
                case x.HS.SELECT_GAME:
                    return { title: _.intl.string(g.default["3vWDMz"]), subtitle: _.intl.string(g.default.Az5bjs) };
                case x.HS.SERVER_SETTINGS:
                    return { title: _.intl.string(g.default.RLGW9z) };
            }
        })(t);
    return (0, l.jsxs)(r.dWK, {
        ...e,
        size: "lg",
        children: [
            (0, l.jsx)(r.rQ0, { title: d, subtitle: h }),
            s &&
                (0, l.jsx)("div", {
                    className: f.M,
                    children: (0, l.jsx)(a.A, { look: a.k.WARNING, children: _.intl.format(g.default.XzXjK2, {}) }),
                }),
            (0, l.jsx)(i.IpV, {
                className: f.j,
                style: { width: x.ST },
                children: (0, l.jsx)("div", {
                    style: { padding: x.by },
                    children: (0, l.jsxs)(i.tN_, {
                        width: x.U$,
                        activeSlide: t,
                        children: [
                            (0, l.jsx)(
                                i.q7S,
                                { id: x.HS.SELECT_GAME, children: (0, l.jsx)(o.A, {}) },
                                x.HS.SELECT_GAME,
                            ),
                            (0, l.jsx)(
                                i.q7S,
                                { id: x.HS.SERVER_SETTINGS, children: (0, l.jsx)(u.A, {}) },
                                x.HS.SERVER_SETTINGS,
                            ),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)("div", { ref: (e) => n(e) }),
        ],
    });
}
function j(e) {
    let { analyticsLocations: t } = (0, s.Ay)();
    return (
        (0, d.wN)(e.guildId, t, e.analyticsLocation),
        (0, l.jsx)(s.f5, { value: t, children: (0, l.jsx)(m.mf, { ...e, children: (0, l.jsx)(h, { ...e }) }) })
    );
}
