var l = n(477900);
n(582128);
var r = n(575593),
    i = n(192308),
    o = n(403581),
    s = n(834730),
    a = n(519707),
    c = n(404374),
    u = n(682901),
    d = n(792996),
    m = n(180985);
function A(e) {
    let { render: t } = e;
    return t((0, a.J)("profile_decoration_upsell_icon"));
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { itemType: t, onClose: a } = e,
                h =
                    t === r.R.AVATAR_DECORATION
                        ? u.e.AVATAR_DECORATION_MODAL_UPSELL
                        : t === r.R.PROFILE_EFFECT
                          ? u.e.PROFILE_EFFECT_MODAL_UPSELL
                          : t === r.R.NAMEPLATE
                            ? u.e.NAMEPLATE_MODAL_UPSELL
                            : null,
                E = t === r.R.AVATAR_DECORATION || t === r.R.PROFILE_EFFECT;
            if (null == h) return null;
            function f(e) {
                return (0, l.jsxs)("div", {
                    className: m.hc,
                    children: [
                        !e && (0, l.jsx)(o.NitroWheelIcon, { className: m.ax, size: "md", color: c.k0.PREMIUM_TIER_2 }),
                        (0, l.jsx)(s.E, {
                            className: m.cf,
                            variant: "body-md/medium",
                            children: (function (e) {
                                if (null == h) return null;
                                switch (h) {
                                    case u.e.AVATAR_DECORATION_MODAL_UPSELL:
                                        return d.intl.format(d.t["aFR/EI"], {
                                            onClick: () => {
                                                (0, i.mM)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e(660953),
                                                            n.e(764864),
                                                        ]).then(n.bind(n, 393027));
                                                        return (t) =>
                                                            (0, l.jsx)(e, {
                                                                premiumUpsellType: h,
                                                                title: d.intl.string(d.t.JI7uhc),
                                                                body: d.intl.string(d.t["5XvsdZ"]),
                                                                onSecondaryClick: a,
                                                                ...t,
                                                            });
                                                    },
                                                    { stackingBehavior: e ? "replaceAll" : void 0 },
                                                );
                                            },
                                        });
                                    case u.e.PROFILE_EFFECT_MODAL_UPSELL:
                                        return d.intl.format(d.t.eWNONM, {
                                            onClick: () => {
                                                (0, i.mM)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e(660953),
                                                            n.e(764864),
                                                        ]).then(n.bind(n, 393027));
                                                        return (t) =>
                                                            (0, l.jsx)(e, {
                                                                premiumUpsellType: h,
                                                                title: d.intl.string(d.t.sYm15X),
                                                                body: d.intl.string(d.t["Hza+Bu"]),
                                                                onSecondaryClick: a,
                                                                ...t,
                                                            });
                                                    },
                                                    { stackingBehavior: e ? "replaceAll" : void 0 },
                                                );
                                            },
                                        });
                                    case u.e.NAMEPLATE_MODAL_UPSELL:
                                        return d.intl.format(d.t.G6b8TF, {
                                            onClick: () => {
                                                (0, i.mM)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e(660953),
                                                        n.e(764864),
                                                    ]).then(n.bind(n, 393027));
                                                    return (t) =>
                                                        (0, l.jsx)(e, {
                                                            premiumUpsellType: h,
                                                            title: d.intl.string(d.t.k7UN4k),
                                                            body: d.intl.string(d.t["0/QPxO"]),
                                                            onSecondaryClick: a,
                                                            ...t,
                                                        });
                                                });
                                            },
                                        });
                                    default:
                                        return null;
                                }
                            })(e),
                        }),
                    ],
                });
            }
            return E ? (0, l.jsx)(A, { render: f }) : f(!1);
        },
    },
);
