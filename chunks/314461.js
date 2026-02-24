n.d(t, { default: () => j });
var l = n(627968);
n(64700);
var r = n(158954),
    a = n(397927),
    i = n(688810),
    s = n(801264),
    d = n(397400),
    o = n(187549),
    c = n(355609),
    u = n(842319),
    m = n(27023),
    x = n(800007),
    _ = n(738072),
    g = n(985018),
    f = n(434467);
function h(e) {
    let { step: t, setFooterNode: n } = (0, m.bv)(),
        i = (0, o.U)("GameServerSetupModal"),
        { title: d, subtitle: h } = (function (e) {
            switch (e) {
                case x.HS.SELECT_GAME:
                    return { title: g.intl.string(_.default["3vWDMz"]), subtitle: g.intl.string(_.default.Az5bjs) };
                case x.HS.SERVER_SETTINGS:
                    return { title: g.intl.string(_.default.RLGW9z) };
            }
        })(t);
    return (0, l.jsxs)(r.dWK, {
        ...e,
        size: "lg",
        children: [
            (0, l.jsx)(r.rQ0, { title: d, subtitle: h }),
            i &&
                (0, l.jsx)("div", {
                    className: f.M,
                    children: (0, l.jsx)(s.A, { look: s.k.WARNING, children: g.intl.format(_.default.XzXjK2, {}) }),
                }),
            (0, l.jsx)(a.IpV, {
                className: f.j,
                style: { width: x.ST },
                children: (0, l.jsx)("div", {
                    style: { padding: x.by },
                    children: (0, l.jsxs)(a.tN_, {
                        width: x.U$,
                        activeSlide: t,
                        children: [
                            (0, l.jsx)(
                                a.q7S,
                                { id: x.HS.SELECT_GAME, children: (0, l.jsx)(c.A, {}) },
                                x.HS.SELECT_GAME,
                            ),
                            (0, l.jsx)(
                                a.q7S,
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
    let { analyticsLocations: t } = (0, i.Ay)();
    return (
        (0, d.wN)(e.guildId, t, e.analyticsLocation),
        (0, l.jsx)(i.f5, { value: t, children: (0, l.jsx)(m.mf, { ...e, children: (0, l.jsx)(h, { ...e }) }) })
    );
}
