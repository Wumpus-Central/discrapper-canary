n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(724238);
function o(e) {
    let { user: t, nickname: n } = e,
        o = null != n;
    return (0, r.jsx)(i.qEK, {
        src: t.getAvatarURL(void 0, o ? 16 : 24),
        size: o ? i.EFr.SIZE_16 : i.EFr.SIZE_24,
        className: o ? a.miniAvatar : a.largeAvatar,
        'aria-hidden': !0
    });
}
