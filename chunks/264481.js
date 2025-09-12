n.d(t, {
    P9: () => C,
    Uf: () => T,
    b0: () => I,
    s_: () => v,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(481060),
    o = n(493683),
    s = n(230711),
    c = n(410030),
    u = n(726542),
    d = n(220410),
    p = n(5192),
    f = n(475413),
    h = n(981631),
    g = n(388032),
    m = n(839468);
let b = [
        () => g.intl.string(g.t.madJdH),
        () => g.intl.string(g.t.NYmfoK),
        () => g.intl.string(g.t.R2PaCg),
        () => g.intl.string(g.t.laSR8v),
        () => g.intl.string(g.t.DnsJEx),
    ],
    _ = [
        () => g.intl.string(g.t.nFSbeH),
        () => g.intl.string(g.t.gTcxOz),
        () => g.intl.string(g.t["8T0wYm"]),
        () => g.intl.string(g.t.BIHl1t),
        () => g.intl.string(g.t.jhBm09),
    ],
    O = [
        () => g.intl.string(g.t.AyMGXF),
        () => g.intl.string(g.t.aAFW7e),
        (e) => g.intl.formatToPlainString(g.t.h2g0cH, { name: e }),
        () => g.intl.string(g.t["rrYh5+"]),
        () => g.intl.string(g.t["HX3K+P"]),
        () => g.intl.string(g.t["/yW3aW"]),
        () => g.intl.string(g.t["PmL/v7"]),
        () => g.intl.string(g.t.IALa3t),
        () => g.intl.string(g.t.HRcTFB),
        () => g.intl.string(g.t.NuCqPj),
        () => g.intl.string(g.t["M1tw+/"]),
        () => g.intl.string(g.t.UBm1y8),
        () => g.intl.string(g.t.Cu95PT),
        () => g.intl.string(g.t["R/wFur"]),
        () => g.intl.string(g.t.HQPAVV),
        () => g.intl.string(g.t.YolGh4),
    ],
    E = [
        h.ABu.STEAM,
        h.ABu.PLAYSTATION,
        h.ABu.XBOX,
        h.ABu.TWITCH,
        h.ABu.BATTLENET,
        h.ABu.LEAGUE_OF_LEGENDS,
        h.ABu.EPIC_GAMES,
        h.ABu.RIOT_GAMES,
        h.ABu.ROBLOX,
        h.ABu.SPOTIFY,
        h.ABu.YOUTUBE,
        h.ABu.CRUNCHYROLL,
        h.ABu.BUNGIE,
    ];
function y(e) {
    let { heading: t, bodyText: n, children: i } = e;
    return (0, r.jsxs)("div", {
        className: m.empty,
        children: [
            (0, r.jsxs)("div", {
                className: m.textContainer,
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
function v() {
    let e = g.intl.string(g.t.RnD2yc),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(b)) ? e : b[0])();
        });
    return (0, r.jsx)(y, {
        heading: e,
        bodyText: t,
    });
}
function I() {
    let e = g.intl.string(g.t.bFgqYG),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(_)) ? e : _[0])();
        });
    return (0, r.jsx)(y, {
        heading: e,
        bodyText: t,
    });
}
function C(e) {
    let { user: t, guildId: n, channelId: s, onClose: c } = e,
        u = p.ZP.getName(n, s, t),
        d = g.intl.formatToPlainString(g.t.sjSitL, { name: u }),
        [h] = i.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(O)) ? e : O[0])(u);
        }),
        b = i.useCallback(() => {
            o.Z.openPrivateChannel({ recipientIds: t.id }), null == c || c();
        }, [t.id, c]);
    return (0, r.jsx)(y, {
        heading: d,
        bodyText: h,
        children: (0, r.jsx)("div", {
            className: m.buttonRow,
            children: (0, r.jsx)(f.tG, {
                icon: a.kBi,
                text: g.intl.string(g.t["g33r/P"]),
                onClick: b,
                themeColor: "secondary",
            }),
        }),
    });
}
function S() {
    let e = (0, c.ZP)();
    return (0, r.jsx)("div", {
        className: m.connectionPlatforms,
        children: E.map((t, n) => {
            let i = u.Z.get(t);
            if (null == i) return null;
            let l = (0, a.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: l,
                    alt: i.name,
                    className: m.connectionIcon,
                },
                n,
            );
        }),
    });
}
function T(e) {
    let { onClose: t } = e,
        l = (0, d.P6)("UserProfileModalV2EmptyActivityCurrentUser"),
        o = i.useCallback(() => {
            null == t || t(), s.Z.open(h.oAB.CONNECTIONS);
        }, [t]),
        c = i.useCallback(() => {
            null == t || t(), s.Z.open(h.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES");
        }, [t]),
        u = i.useCallback(() => {
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
    return (0, r.jsxs)(y, {
        heading: g.intl.string(g.t.VB6LWV),
        bodyText: g.intl.string(g.t.KpjsU1),
        children: [
            (0, r.jsx)(S, {}),
            (0, r.jsxs)("div", {
                className: m.buttonRow,
                children: [
                    (0, r.jsx)(f.tG, {
                        text: g.intl.string(g.t["/Hl24e"]),
                        onClick: o,
                        themeColor: "secondary",
                    }),
                    (0, r.jsx)(f.tG, {
                        text: g.intl.string(g.t.GTCx0t),
                        onClick: c,
                        themeColor: "secondary",
                    }),
                ],
            }),
            l &&
                (0, r.jsx)("div", {
                    className: m.reportMissingActivity,
                    children: (0, r.jsx)(a.Avr, {
                        text: g.intl.string(g.t["+huUnJ"]),
                        onClick: u,
                        size: "sm",
                    }),
                }),
        ],
    });
}
