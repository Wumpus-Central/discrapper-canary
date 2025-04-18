n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(728114);
function a(e) {
    let { user: t, nickname: n } = e,
        a = null != n;
    return (0, r.jsx)(i.qEK, {
        src: t.getAvatarURL(void 0, a ? 16 : 24),
        size: a ? i.EFr.SIZE_16 : i.EFr.SIZE_24,
        className: a ? o.miniAvatar : o.largeAvatar,
        'aria-hidden': !0
    });
}
