r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(272277);
function o(e) {
    let { user: n, nickname: r } = e,
        o = null != r;
    return (0, i.jsx)(a.Avatar, {
        src: n.getAvatarURL(void 0, o ? 16 : 24),
        size: o ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
        className: o ? s.miniAvatar : s.largeAvatar,
        'aria-hidden': !0
    });
}
