i.d(t, { A: () => o });
var l = i(627968);
i(64700);
var n = i(397927),
    s = i(9578),
    a = i(573648),
    r = i(652215),
    d = i(306989);
let c = {
    [r.fg2.TWITCH]: n.aWO,
    [r.fg2.YOUTUBE]: n.CiD,
    [r.fg2.TWITTER]: n.p3p,
    [r.fg2.TWITTER_LEGACY]: n.p3p,
    [r.fg2.FACEBOOK]: n.Zc1,
    [r.fg2.INSTAGRAM]: n.LyU,
    [r.fg2.REDDIT]: n.T1e,
    [r.fg2.TIKTOK]: n.Xsb,
    [r.fg2.SPOTIFY]: n.L5T,
    [r.fg2.BLUESKY]: n.akf,
};
function o(e) {
    let { url: t } = e,
        i = a.A.getByUrl(t),
        r = null != i ? c[i.type] : void 0;
    return (0, l.jsx)(s.A, {
        href: t,
        trusted: null != i,
        useDefaultUnderlineStyles: !1,
        children:
            null != r
                ? (0, l.jsx)(r, { className: d.zg, size: "xs", color: n.LU0.colors.ICON_MUTED, "aria-hidden": !0 })
                : (0, l.jsx)(n.L_e, {
                      className: d.zg,
                      color: n.LU0.colors.ICON_MUTED,
                      width: 16,
                      height: 16,
                      size: "custom",
                  }),
    });
}
