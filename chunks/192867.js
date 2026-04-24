n.d(t, { A: () => s });
var l = n(627968);
n(64700);
var a = n(97808),
    i = n(778712),
    r = n(151900);
function s(e) {
    let { user: t, nickname: n } = e,
        s = null != n;
    return (0, l.jsx)(a.eu, {
        src: t.getAvatarURL(void 0, s ? 16 : 24),
        size: s ? i._3.SIZE_16 : i._3.SIZE_24,
        className: s ? r.H : r.tM,
        "aria-hidden": !0,
    });
}
