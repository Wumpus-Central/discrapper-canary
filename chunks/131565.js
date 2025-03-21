n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(602715),
    o = n(442837),
    a = n(357352),
    s = n(630388),
    c = n(436952),
    u = n(411149),
    d = n(151480),
    p = n(373076),
    h = n(680783),
    f = n(626287);
function m(e) {
    let { chatWallpaperState: t } = e,
        n = (0, o.e7)([u.Z], () => {
            let e = u.Z.getWallpaperById(t.wallpaperId);
            return null == e ? null : (0, a.I)(e.default.asset);
        }),
        l = (0, p.P)(t.setterId) || !0 === t.isPreview;
    return (i.useEffect(() => {
        null == n && l && u.Z.shouldFetchWallpapers && (0, d.k)();
    }, [n, l]),
    l && null != n)
        ? (0, r.jsx)('div', {
              className: f.wallpaperContainer,
              style: { backgroundImage: 'url('.concat(n, ')') }
          })
        : null;
}
function g(e) {
    var t;
    let { channel: n } = e,
        i = (0, c.sQ)({ location: 'ChannelChatWallpaper' }),
        o = (0, h.Z)(n.id);
    return !(!i || (!n.isDM() && !n.isMultiUserDM() && !n.isGroupDM()) || (0, s.yE)(null !== (t = n.recipientFlags) && void 0 !== t ? t : 0, l.V.DISMISSED_CURRENT_CHAT_WALLPAPER)) && null != o ? (0, r.jsx)(m, { chatWallpaperState: o }) : null;
}
