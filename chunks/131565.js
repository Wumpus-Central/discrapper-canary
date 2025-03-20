n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    l = n(602715),
    o = n(442837),
    a = n(357352),
    s = n(687158),
    c = n(594174),
    u = n(630388),
    d = n(74538),
    p = n(436952),
    h = n(411149),
    f = n(151480),
    m = n(680783),
    g = n(474936),
    b = n(626287);
function _(e) {
    let { chatWallpaperState: t } = e,
        n = (0, o.e7)([h.Z], () => {
            let e = h.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, a.I)(e.default.asset);
        }),
        l = (0, s.ZP)(t.setterId),
        u = (0, o.e7)([c.default], () => c.default.getUser(t.setterId)),
        p = (null == l ? void 0 : l.premiumType) === g.p9.TIER_2 || d.ZP.canUseChatWallpapers(u) || !0 === t.isPreview;
    return (i.useEffect(() => {
        null == n && p && h.Z.shouldFetchWallpapers && (0, f.k)();
    }, [n, p]),
    p && null != n)
        ? (0, r.jsx)('div', {
              className: b.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(n, ')') }
          })
        : null;
}
function C(e) {
    var t;
    let { channel: n } = e,
        i = (0, p.sQ)({ location: 'ChannelChatWallpaper' }),
        o = (0, m.Z)(n.id);
    return !(!i || (!n.isDM() && !n.isMultiUserDM() && !n.isGroupDM()) || (0, u.yE)(null !== (t = n.recipientFlags) && void 0 !== t ? t : 0, l.V.DISMISSED_CURRENT_CHAT_WALLPAPER)) && null != o ? (0, r.jsx)(_, { chatWallpaperState: o }) : null;
}
