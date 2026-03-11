a.d(t, { default: () => k });
var i = a(627968),
    s = a(64700),
    r = a(311907),
    n = a(397927),
    o = a(544028),
    l = a(967198),
    d = a(287809),
    c = a(255438),
    p = a(453771),
    u = a(975571),
    _ = a(927578),
    m = a(244975),
    b = a(788868),
    h = a(652215),
    g = a(985018),
    A = a(950503);
function k(e) {
    let { onClose: t, handleLearnMore: a, ...k } = e,
        x = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        C = (0, r.bG)([o.A], () => o.A.theme),
        U = (0, r.bG)([l.A], () => l.A.getGuildId()),
        f = C === h.NJ8.LIGHT ? "light" : "dark",
        y = (0, i.jsx)("img", {
            className: A.Qw,
            alt: "File Upload Nitro Perk",
            src: `https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_${f}_v2.png`,
        }),
        w = s.useMemo(() => {
            let e = _.Ay.getUserMaxFileSize(x);
            return (0, c.Xq)(e / 1024, { useKibibytes: !0 });
        }, [x]),
        L = (0, p.Iu)({
            guildId: U,
            onClick: () => {
                window.open(u.A.getArticleURL(h.MVz.NITRO_FAQ), "_blank");
            },
        }),
        T = (0, i.jsx)("div", {
            className: A.rf,
            children: (0, i.jsx)(n.Text, { variant: "text-sm/medium", children: L }),
        });
    return (0, i.jsx)(m.A, {
        artElement: y,
        artURL: `https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_${f}_v2.png`,
        artContainerClassName: A.JS,
        enableArtBoxShadow: !1,
        type: b.e.UPLOAD_ERROR_UPSELL,
        title: g.intl.string(g.t["9C+41g"]),
        body: T,
        context: g.intl.formatToPlainString(g.t.q5fTZp, { maxSize: w }),
        glowUp: L,
        analyticsLocation: { section: h.JJy.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: b.pe.TIER_2,
        secondaryCTA: g.intl.string(g.t.ZnqyZ2),
        onSecondaryClick: a,
        showEnhancedUpsell: !0,
        ...k,
    });
}
