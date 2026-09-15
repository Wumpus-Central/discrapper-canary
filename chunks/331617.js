i.d(t, { default: () => j });
var s = i(477900);
i(582128);
var l = i(772707),
    a = i(331322),
    c = i(834730),
    n = i(661531),
    r = i(793574),
    o = i(688810),
    d = i(473145),
    u = i(944304),
    m = i(652215),
    p = i(375708),
    h = i(544891);
let x = { type: "image", src: i(387103).A, aspectRatio: "16/9" };
function j(e) {
    let {
            analyticsSourceLocation: t,
            guild: i,
            targetBoostedGuildTier: j,
            perks: T,
            perkIntro: g,
            headerProps: v,
            onClose: b,
            ...k
        } = e,
        { analyticsLocations: A } = (0, o.Ay)(r.A.ACTIVITY_DIRECTORY),
        C = {
            section: m.JJy.PREMIUM_GUILD_UPSELL_MODAL,
            object: m.ZSU.BUTTON_CTA,
            objectType: null != j ? (0, d.k1)(j) : null,
        };
    return (0, s.jsx)(o.f5, {
        value: A,
        children: (0, s.jsx)(l.k, {
            ...k,
            onClose: b,
            graphic: x,
            gradientColor: "pink",
            title: v?.title ?? p.intl.string(p.t["6Qbqxw"]),
            subtitle: v?.subtitle,
            actionBarInput: (0, s.jsx)(u.A, {
                useExpressiveButton: !0,
                fullWidth: !0,
                analyticsLocation: C,
                analyticsSourceLocation: t,
                guild: i,
                targetBoostedGuildTier: j,
                onClose: b,
            }),
            children: (0, s.jsxs)(a.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    v?.image != null && (0, s.jsx)("div", { className: h.Pg, children: v.image }),
                    null != g && (0, s.jsx)(c.E, { variant: "text-md/normal", children: g }),
                    (0, s.jsx)("div", {
                        className: h.md,
                        children: T.map((e, t) => {
                            let { icon: i, description: l } = e;
                            return (0, s.jsxs)(
                                "div",
                                {
                                    className: h.bK,
                                    children: [
                                        (0, s.jsx)(i, { className: h.kf, color: n.A.colors.TEXT_MUTED.css }),
                                        (0, s.jsx)(c.E, {
                                            className: h.uL,
                                            color: "text-muted",
                                            variant: "text-sm/medium",
                                            children: l,
                                        }),
                                    ],
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
        }),
    });
}
