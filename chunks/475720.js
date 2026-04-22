t.d(i, { A: () => I });
var l = t(627968),
    s = t(64700),
    a = t(454346),
    n = t(80500),
    r = t(274997),
    d = t(319745),
    o = t(488225),
    c = t(72265),
    u = t(218471),
    h = t(109487),
    m = t(967492),
    _ = t(827734),
    x = t(998445),
    g = t(9578),
    A = t(573648),
    p = t(954571),
    v = t(652215),
    E = t(963120);
let j = {
    [v.fg2.TWITCH]: a.a,
    [v.fg2.YOUTUBE]: n.C,
    [v.fg2.TWITTER]: r.p,
    [v.fg2.TWITTER_LEGACY]: r.p,
    [v.fg2.FACEBOOK]: d.Z,
    [v.fg2.INSTAGRAM]: o.L,
    [v.fg2.REDDIT]: c.T,
    [v.fg2.TIKTOK]: u.X,
    [v.fg2.SPOTIFY]: h.L,
    [v.fg2.BLUESKY]: m.a,
};
function I(e) {
    let { url: i, invite: t } = e,
        a = A.A.getByUrl(i),
        n = null != a ? j[a.type] : void 0,
        r = s.useCallback(
            () => (
                p.default.track(v.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
                    guild_id: t.guild?.id,
                    invite_code: t.code,
                    social_platform: a?.type,
                    social_platform_url: i,
                }),
                null
            ),
            [t.code, t.guild?.id, a, i],
        );
    return (0, l.jsx)(g.A, {
        href: i,
        trusted: null != a,
        useDefaultUnderlineStyles: !1,
        onClick: r,
        children:
            null != n
                ? (0, l.jsx)(n, { className: E.zg, size: "xs", color: _.A.colors.ICON_MUTED, "aria-hidden": !0 })
                : (0, l.jsx)(x.L, {
                      className: E.zg,
                      color: _.A.colors.ICON_MUTED,
                      width: 16,
                      height: 16,
                      size: "custom",
                  }),
    });
}
