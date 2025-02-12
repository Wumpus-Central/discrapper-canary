n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(795628);
function s(e) {
    let { user: t, nickname: n } = e,
        s = null != n;
    return (0, i.jsx)(r.qEK, {
        src: t.getAvatarURL(void 0, s ? 16 : 24),
        size: s ? r.EFr.SIZE_16 : r.EFr.SIZE_24,
        className: s ? a.miniAvatar : a.largeAvatar,
        'aria-hidden': !0
    });
}
