i.d(t, { A: () => m });
var l = i(627968),
    n = i(64700),
    s = i(397927),
    a = i(9578),
    r = i(573648),
    d = i(954571),
    c = i(652215),
    o = i(492171);
let u = {
    [c.fg2.TWITCH]: s.aWO,
    [c.fg2.YOUTUBE]: s.CiD,
    [c.fg2.TWITTER]: s.p3p,
    [c.fg2.TWITTER_LEGACY]: s.p3p,
    [c.fg2.FACEBOOK]: s.Zc1,
    [c.fg2.INSTAGRAM]: s.LyU,
    [c.fg2.REDDIT]: s.T1e,
    [c.fg2.TIKTOK]: s.Xsb,
    [c.fg2.SPOTIFY]: s.L5T,
    [c.fg2.BLUESKY]: s.akf,
};
function m(e) {
    let { url: t, invite: i } = e,
        m = r.A.getByUrl(t),
        x = null != m ? u[m.type] : void 0,
        _ = n.useCallback(
            () => (
                d.default.track(c.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
                    guild_id: i.guild?.id,
                    invite_code: i.code,
                    social_platform: m?.type,
                    social_platform_url: t,
                }),
                null
            ),
            [i.code, i.guild?.id, m, t],
        );
    return (0, l.jsx)(a.A, {
        href: t,
        trusted: null != m,
        useDefaultUnderlineStyles: !1,
        onClick: _,
        children:
            null != x
                ? (0, l.jsx)(x, { className: o.zg, size: "xs", color: s.LU0.colors.ICON_MUTED, "aria-hidden": !0 })
                : (0, l.jsx)(s.L_e, {
                      className: o.zg,
                      color: s.LU0.colors.ICON_MUTED,
                      width: 16,
                      height: 16,
                      size: "custom",
                  }),
    });
}
