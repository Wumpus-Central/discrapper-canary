r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(399606),
    a = r(339085),
    o = r(633302);
function s(e, n) {
    let r = (0, i.e7)([a.ZP], () => (null != e ? a.ZP.getCustomEmojiById(e) : null), [e]);
    return {
        customEmoji: r,
        unicodeEmoji: null != n ? o.ZP.getByName(o.ZP.convertSurrogateToName(n, !1)) : null
    };
}
