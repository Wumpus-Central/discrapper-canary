n.d(t, { A: () => d }), n(321073);
var i = n(284009),
    r = n.n(i),
    l = n(656470),
    s = n.n(l),
    a = n(731854);
let u = [a.fS.WINDOW, a.fS.SCREEN];
function d(e, t, n) {
    let i = window.DiscordNative;
    r()(null != i, "Can't get desktop sources outside of native app"),
        (t = t?.filter((e) => u.includes(e)) ?? u),
        (n = n ?? { width: 150, height: 150 });
    let l = [];
    return (
        t.includes(a.fS.SCREEN) &&
            e.supports(a.O5.SCREEN_PREVIEWS) &&
            (l.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== a.fS.SCREEN))),
        t.includes(a.fS.WINDOW) &&
            e.supports(a.O5.WINDOW_PREVIEWS) &&
            (l.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== a.fS.WINDOW))),
        0 !== t.length && l.push(i.desktopCapture.getDesktopCaptureSources({ types: t, thumbnailSize: n })),
        Promise.all(l).then((e) => s()(e))
    );
}
