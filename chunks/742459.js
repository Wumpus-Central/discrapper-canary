a.d(t, { A: () => o }), a(321073);
var r = a(284009),
    n = a.n(r),
    l = a(656470),
    s = a.n(l),
    i = a(731854);
let u = [i.fS.WINDOW, i.fS.SCREEN];
function o(e, t, a) {
    let r = window.DiscordNative;
    n()(null != r, "Can't get desktop sources outside of native app"),
        (t = t?.filter((e) => u.includes(e)) ?? u),
        (a = a ?? { width: 150, height: 150 });
    let l = [];
    return (
        t.includes(i.fS.SCREEN) &&
            e.supports(i.O5.SCREEN_PREVIEWS) &&
            (l.push(e.getScreenPreviews(a.width, a.height)), (t = t.filter((e) => e !== i.fS.SCREEN))),
        t.includes(i.fS.WINDOW) &&
            e.supports(i.O5.WINDOW_PREVIEWS) &&
            (l.push(e.getWindowPreviews(a.width, a.height)), (t = t.filter((e) => e !== i.fS.WINDOW))),
        0 !== t.length && l.push(r.desktopCapture.getDesktopCaptureSources({ types: t, thumbnailSize: a })),
        Promise.all(l).then((e) => s()(e))
    );
}
