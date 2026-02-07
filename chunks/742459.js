n.d(t, { A: () => u }), n(321073);
var r = n(284009),
    a = n.n(r),
    i = n(656470),
    s = n.n(i),
    l = n(731854);
let o = [l.fS.WINDOW, l.fS.SCREEN];
function u(e, t, n) {
    let r = window.DiscordNative;
    a()(null != r, "Can't get desktop sources outside of native app"),
        (t = t?.filter((e) => o.includes(e)) ?? o),
        (n = n ?? { width: 150, height: 150 });
    let i = [];
    return (
        t.includes(l.fS.SCREEN) &&
            e.supports(l.O5.SCREEN_PREVIEWS) &&
            (i.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== l.fS.SCREEN))),
        t.includes(l.fS.WINDOW) &&
            e.supports(l.O5.WINDOW_PREVIEWS) &&
            (i.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== l.fS.WINDOW))),
        0 !== t.length && i.push(r.desktopCapture.getDesktopCaptureSources({ types: t, thumbnailSize: n })),
        Promise.all(i).then((e) => s()(e))
    );
}
