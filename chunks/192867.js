n.d(t, { A: () => s });
var l = n(627968);
n(64700);
var a = n(97808),
    r = n(778712),
    i = n(151900);
function s(e) {
    let { user: t, nickname: n } = e,
        s = null != n;
    return (0, l.jsx)(a.eu, {
        src: t.getAvatarURL(void 0, s ? 16 : 24),
        size: s ? r._3.SIZE_16 : r._3.SIZE_24,
        className: s ? i.H : i.tM,
        "aria-hidden": !0,
    });
}
