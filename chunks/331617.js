var s = t(477900);
t(582128);
var l = t(772707),
    a = t(331322),
    c = t(834730),
    n = t(646514),
    r = t(793574),
    o = t(688810),
    d = t(473145),
    u = t(944304),
    m = t(652215),
    p = t(792996),
    h = t(544891);
let x = { type: "image", src: t(387103).A, aspectRatio: "16/9" };
t.d(
    i,
    {},
    {
        default: function (e) {
            let {
                    analyticsSourceLocation: i,
                    guild: t,
                    targetBoostedGuildTier: j,
                    perks: T,
                    perkIntro: b,
                    headerProps: g,
                    onClose: v,
                    ...k
                } = e,
                { analyticsLocations: y } = (0, o.Ay)(r.A.ACTIVITY_DIRECTORY),
                A = {
                    section: m.JJy.PREMIUM_GUILD_UPSELL_MODAL,
                    object: m.ZSU.BUTTON_CTA,
                    objectType: null != j ? (0, d.k1)(j) : null,
                };
            return (0, s.jsx)(o.f5, {
                value: y,
                children: (0, s.jsx)(l.k, {
                    ...k,
                    onClose: v,
                    graphic: x,
                    gradientColor: "pink",
                    title: g?.title ?? p.intl.string(p.t["6Qbqxw"]),
                    subtitle: g?.subtitle,
                    actionBarInput: (0, s.jsx)(u.A, {
                        useExpressiveButton: !0,
                        fullWidth: !0,
                        analyticsLocation: A,
                        analyticsSourceLocation: i,
                        guild: t,
                        targetBoostedGuildTier: j,
                        onClose: v,
                    }),
                    children: (0, s.jsxs)(a.B, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            g?.image != null && (0, s.jsx)("div", { className: h.Pg, children: g.image }),
                            null != b && (0, s.jsx)(c.E, { variant: "body-md/normal", children: b }),
                            (0, s.jsx)("div", {
                                className: h.md,
                                children: T.map((e, i) => {
                                    let { icon: t, description: l } = e;
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: h.bK,
                                            children: [
                                                (0, s.jsx)(t, { className: h.kf, color: n.A.colors.TEXT_MUTED.css }),
                                                (0, s.jsx)(c.E, {
                                                    className: h.uL,
                                                    color: "text-muted",
                                                    variant: "body-sm/medium",
                                                    children: l,
                                                }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                }),
            });
        },
    },
);
