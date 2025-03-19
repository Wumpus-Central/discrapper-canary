n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(602715),
    o = n(442837),
    a = n(357352),
    s = n(594174),
    c = n(630388),
    u = n(74538),
    d = n(436952),
    p = n(411149),
    h = n(151480),
    f = n(680783),
    m = n(474936),
    g = n(626287);
function b(e) {
    let { chatWallpaperState: t } = e,
        n = (0, o.e7)([p.Z], () => {
            let e = p.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, a.I)(e.default.asset);
        }),
        l =
            (0, o.e7)([s.default], () => {
                let e = s.default.getUser(t.setterId);
                return u.ZP.isPremiumExactly(e, m.p9.TIER_2);
            }) || !0 === t.isPreview;
    return (i.useEffect(() => {
        null == n && l && p.Z.shouldFetchWallpapers && (0, h.k)();
    }, [n, l]),
    l && null != n)
        ? (0, r.jsx)('div', {
              className: g.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(n, ')') }
          })
        : null;
}
function _(e) {
    var t;
    let { channel: n } = e,
        i = (0, d.sQ)({ location: 'ChannelChatWallpaper' }),
        o = (0, f.Z)(n.id);
    return !(!i || (!n.isDM() && !n.isMultiUserDM() && !n.isGroupDM()) || (0, c.yE)(null !== (t = n.recipientFlags) && void 0 !== t ? t : 0, l.V.DISMISSED_CURRENT_CHAT_WALLPAPER)) && null != o ? (0, r.jsx)(b, { chatWallpaperState: o }) : null;
}
