n.d(t, {
    Y: () => s,
    t: () => l
});
var r = n(602715),
    i = n(630388),
    a = n(709054),
    o = n(981631);
function l(e) {
    var t;
    return (0, i.yE)(null !== (t = e.recipientFlags) && void 0 !== t ? t : 0, r.V.DISMISSED_CURRENT_CHAT_WALLPAPER);
}
function s(e) {
    return e.type === o.uaV.CHAT_WALLPAPER_SET && a.default.isProbablyAValidSnowflake(e.content) ? e.content : null;
}
