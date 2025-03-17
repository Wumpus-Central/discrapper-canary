n.d(t, { Z: () => b });
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
    f = n(474936),
    m = n(626287);
function g(e) {
    let { wallpaper: t } = e,
        n = (0, o.e7)([p.Z], () => {
            let e = p.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, a.I)(e.default.asset);
        }),
        l = (0, o.e7)([s.default], () => {
            let e = s.default.getUser(t.setterId);
            return u.ZP.isPremiumExactly(e, f.p9.TIER_2);
        });
    return (i.useEffect(() => {
        null == n && l && p.Z.shouldFetchWallpapers && (0, h.k)();
    }, [n, l]),
    l && null != n)
        ? (0, r.jsx)('div', {
              className: m.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(n, ')') }
          })
        : null;
}
function b(e) {
    var t;
    let { channel: n } = e;
    if (!(0, d.sQ)({ location: 'ChannelChatWallpaper' }) || (!n.isDM() && !n.isMultiUserDM() && !n.isGroupDM()) || (0, c.yE)(null !== (t = n.recipientFlags) && void 0 !== t ? t : 0, l.V.DISMISSED_CURRENT_CHAT_WALLPAPER)) return null;
    let i = n.wallpaper;
    return null == i ? null : (0, r.jsx)(g, { wallpaper: i });
}
