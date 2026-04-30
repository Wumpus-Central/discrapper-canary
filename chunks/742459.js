"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(656470),
    a = n.n(s),
    o = n(731854);
let l = [o.fS.WINDOW, o.fS.SCREEN];
function u(e, t, n) {
    let i = window.DiscordNative;
    r()(null != i, "Can't get desktop sources outside of native app"),
        (t = t?.filter((e) => l.includes(e)) ?? l),
        (n = n ?? { width: 150, height: 150 });
    let s = [];
    return (
        t.includes(o.fS.SCREEN) &&
            e.supports(o.O5.SCREEN_PREVIEWS) &&
            (s.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.fS.SCREEN))),
        t.includes(o.fS.WINDOW) &&
            e.supports(o.O5.WINDOW_PREVIEWS) &&
            (s.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.fS.WINDOW))),
        0 !== t.length && s.push(i.desktopCapture.getDesktopCaptureSources({ types: t, thumbnailSize: n })),
        Promise.all(s).then((e) => a()(e))
    );
}
