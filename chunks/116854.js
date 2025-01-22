r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(272277);
function s(e) {
    let { user: n, nickname: r } = e,
        s = null != r;
    return (0, i.jsx)(a.Avatar, {
        src: n.getAvatarURL(void 0, s ? 16 : 24),
        size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
        className: s ? o.miniAvatar : o.largeAvatar,
        'aria-hidden': !0
    });
}
