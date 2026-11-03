n.d(t, { A: () => A });
var l = n(477900);
n(582128);
var r = n(575593),
    i = n(192308),
    o = n(403581),
    s = n(834730),
    a = n(519707),
    c = n(404374),
    u = n(202541),
    d = n(105292),
    m = n(180985);
function A(e) {
    let { itemType: t, onClose: a } = e,
        A =
            t === r.R.AVATAR_DECORATION
                ? u.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === r.R.PROFILE_EFFECT
                  ? u.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === r.R.NAMEPLATE
                    ? u.e.NAMEPLATE_MODAL_UPSELL
                    : null,
        E = t === r.R.AVATAR_DECORATION || t === r.R.PROFILE_EFFECT;
    if (null == A) return null;
    function h(e) {
        return (0, l.jsxs)("div", {
            className: m.hc,
            children: [
                !e && (0, l.jsx)(o.t, { className: m.ax, size: "md", color: c.k0.PREMIUM_TIER_2 }),
                (0, l.jsx)(s.E, {
                    className: m.cf,
                    variant: "body-md/medium",
                    children: (function () {
                        if (null == A) return null;
                        switch (A) {
                            case u.e.AVATAR_DECORATION_MODAL_UPSELL:
                                return d.intl.format(d.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("93513"), n.e("764864")]).then(
                                                n.bind(n, 393027),
                                            );
                                            return (t) =>
                                                (0, l.jsx)(e, {
                                                    premiumUpsellType: A,
                                                    title: d.intl.string(d.t.JI7uhc),
                                                    body: d.intl.string(d.t["5XvsdZ"]),
                                                    onSecondaryClick: a,
                                                    ...t,
                                                });
                                        });
                                    },
                                });
                            case u.e.PROFILE_EFFECT_MODAL_UPSELL:
                                return d.intl.format(d.t.eWNONM, {
                                    onClick: () => {
                                        (0, i.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("93513"), n.e("764864")]).then(
                                                n.bind(n, 393027),
                                            );
                                            return (t) =>
                                                (0, l.jsx)(e, {
                                                    premiumUpsellType: A,
                                                    title: d.intl.string(d.t.sYm15X),
                                                    body: d.intl.string(d.t["Hza+Bu"]),
                                                    onSecondaryClick: a,
                                                    ...t,
                                                });
                                        });
                                    },
                                });
                            case u.e.NAMEPLATE_MODAL_UPSELL:
                                return d.intl.format(d.t.G6b8TF, {
                                    onClick: () => {
                                        (0, i.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("93513"), n.e("764864")]).then(
                                                n.bind(n, 393027),
                                            );
                                            return (t) =>
                                                (0, l.jsx)(e, {
                                                    premiumUpsellType: A,
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
                    })(),
                }),
            ],
        });
    }
    return E ? (0, l.jsx)(f, { render: h }) : h(!1);
}
function f(e) {
    let { render: t } = e;
    return t((0, a.J)("profile_decoration_upsell_icon"));
}
