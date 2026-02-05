n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(976860),
    s = n(345942),
    o = n(71393),
    d = n(954571),
    c = n(486020),
    u = n(396415),
    A = n(652215),
    h = n(985018),
    _ = n(605540);
function m(e, t, n) {
    return (0, i.jsxs)(
        "button",
        {
            className: _.kL,
            onClick: n,
            children: [
                "function" == typeof e
                    ? (0, i.jsx)("div", {
                          className: _.Kk,
                          children: (0, i.jsx)(e, { className: _.__invalid_iconInner, color: a.LU0.colors.WHITE.css }),
                      })
                    : (0, i.jsx)("img", { className: _.Kk, alt: "", src: e }),
                (0, i.jsx)(a.Text, { className: _.Qq, variant: "text-md/medium", children: t }),
                (0, i.jsx)(u.A, { className: _.UE }),
            ],
        },
        t,
    );
}
function p() {
    let e = o.A.getGuildsArray().filter((e) => e.features.has(A.GuildFeatures.HUB));
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsxs)("header", {
                className: _.wx,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: h.intl.string(h.t.IuMx1Y),
                    }),
                    (0, i.jsx)(a.Text, {
                        tag: "div",
                        variant: "heading-md/normal",
                        children: h.intl.string(h.t.DwevPs),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: _.Vg,
                children: [
                    e.map((e) =>
                        m(c.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 240 }), e.name, () => {
                            var t;
                            (t = e.id),
                                d.default.track(A.HAw.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: t }),
                                (0, s.u)(t);
                        }),
                    ),
                    m(a.QGJ, h.intl.string(h.t.AhKnz4), () => {
                        d.default.track(A.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, l.pX)(A.BVt.GUILD_DISCOVERY);
                    }),
                ],
            }),
        ],
    });
}
