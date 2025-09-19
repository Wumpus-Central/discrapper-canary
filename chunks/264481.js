n.d(t, {
    P9: () => S,
    Uf: () => N,
    b0: () => C,
    s_: () => I,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(481060),
    o = n(493683),
    s = n(410030),
    c = n(726542),
    u = n(220410),
    d = n(313789),
    p = n(518596),
    f = n(5192),
    h = n(732380),
    g = n(981631),
    m = n(388032),
    b = n(839468);
let _ = [
        () => m.intl.string(m.t.madJdH),
        () => m.intl.string(m.t.NYmfoK),
        () => m.intl.string(m.t.R2PaCg),
        () => m.intl.string(m.t.laSR8v),
        () => m.intl.string(m.t.DnsJEx),
    ],
    O = [
        () => m.intl.string(m.t.nFSbeH),
        () => m.intl.string(m.t.gTcxOz),
        () => m.intl.string(m.t["8T0wYm"]),
        () => m.intl.string(m.t.BIHl1t),
        () => m.intl.string(m.t.jhBm09),
    ],
    E = [
        () => m.intl.string(m.t.AyMGXF),
        () => m.intl.string(m.t.aAFW7e),
        (e) => m.intl.formatToPlainString(m.t.h2g0cH, { name: e }),
        () => m.intl.string(m.t["rrYh5+"]),
        () => m.intl.string(m.t["HX3K+P"]),
        () => m.intl.string(m.t["/yW3aW"]),
        () => m.intl.string(m.t["PmL/v7"]),
        () => m.intl.string(m.t.IALa3t),
        () => m.intl.string(m.t.HRcTFB),
        () => m.intl.string(m.t.NuCqPj),
        () => m.intl.string(m.t["M1tw+/"]),
        () => m.intl.string(m.t.UBm1y8),
        () => m.intl.string(m.t.Cu95PT),
        () => m.intl.string(m.t["R/wFur"]),
        () => m.intl.string(m.t.HQPAVV),
        () => m.intl.string(m.t.YolGh4),
    ],
    y = [
        g.ABu.STEAM,
        g.ABu.PLAYSTATION,
        g.ABu.XBOX,
        g.ABu.TWITCH,
        g.ABu.BATTLENET,
        g.ABu.LEAGUE_OF_LEGENDS,
        g.ABu.EPIC_GAMES,
        g.ABu.RIOT_GAMES,
        g.ABu.ROBLOX,
        g.ABu.SPOTIFY,
        g.ABu.YOUTUBE,
        g.ABu.CRUNCHYROLL,
        g.ABu.BUNGIE,
    ];
function v(e) {
    let { heading: t, bodyText: n, children: i } = e;
    return (0, r.jsxs)("div", {
        className: b.empty,
        children: [
            (0, r.jsxs)("div", {
                className: b.textContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: t,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            i,
        ],
    });
}
function I() {
    let e = m.intl.string(m.t.RnD2yc),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(_)) ? e : _[0])();
        });
    return (0, r.jsx)(v, {
        heading: e,
        bodyText: t,
    });
}
function C() {
    let e = m.intl.string(m.t.bFgqYG),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(O)) ? e : O[0])();
        });
    return (0, r.jsx)(v, {
        heading: e,
        bodyText: t,
    });
}
function S(e) {
    let { user: t, guildId: n, channelId: s, onClose: c } = e,
        u = f.ZP.getName(n, s, t),
        d = m.intl.formatToPlainString(m.t.sjSitL, { name: u }),
        [p] = i.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(E)) ? e : E[0])(u);
        }),
        g = i.useCallback(() => {
            o.Z.openPrivateChannel({ recipientIds: t.id }), null == c || c();
        }, [t.id, c]);
    return (0, r.jsx)(v, {
        heading: d,
        bodyText: p,
        children: (0, r.jsx)("div", {
            className: b.buttonRow,
            children: (0, r.jsx)(h.O1, {
                icon: a.kBi,
                text: m.intl.string(m.t["g33r/P"]),
                onClick: g,
            }),
        }),
    });
}
function T() {
    let e = (0, s.ZP)();
    return (0, r.jsx)("div", {
        className: b.connectionPlatforms,
        children: y.map((t, n) => {
            let i = c.Z.get(t);
            if (null == i) return null;
            let l = (0, a.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: l,
                    alt: i.name,
                    className: b.connectionIcon,
                },
                n,
            );
        }),
    });
}
function N(e) {
    let { onClose: t } = e,
        l = (0, u.P6)("UserProfileModalV2EmptyActivityCurrentUser"),
        o = i.useCallback(() => {
            null == t || t(), (0, p.openUserSettings)(d.n.CONNECTIONS_PANEL, { section: g.oAB.CONNECTIONS });
        }, [t]),
        s = i.useCallback(() => {
            null == t || t(),
                (0, p.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
                    section: g.oAB.CONTENT_AND_SOCIAL,
                    subsection: "CONNECTED_GAMES",
                });
        }, [t]),
        c = i.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t),
                    );
            });
        }, []);
    return (0, r.jsxs)(v, {
        heading: m.intl.string(m.t.VB6LWV),
        bodyText: m.intl.string(m.t.KpjsU1),
        children: [
            (0, r.jsx)(T, {}),
            (0, r.jsxs)("div", {
                className: b.buttonRow,
                children: [
                    (0, r.jsx)(h.O1, {
                        text: m.intl.string(m.t["/Hl24e"]),
                        onClick: o,
                    }),
                    (0, r.jsx)(h.O1, {
                        text: m.intl.string(m.t.GTCx0t),
                        onClick: s,
                    }),
                ],
            }),
            l &&
                (0, r.jsx)("div", {
                    className: b.reportMissingActivity,
                    children: (0, r.jsx)(a.Avr, {
                        text: m.intl.string(m.t["+huUnJ"]),
                        onClick: c,
                        size: "sm",
                    }),
                }),
        ],
    });
}
