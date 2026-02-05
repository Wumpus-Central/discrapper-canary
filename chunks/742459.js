"use strict";
n.d(t, { A: () => u }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(656470),
    s = n.n(a),
    o = n(731854);
let l = [o.fS.WINDOW, o.fS.SCREEN];
function u(e, t, n) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (t = t?.filter((e) => l.includes(e)) ?? l),
        (n = n ?? { width: 150, height: 150 });
    let a = [];
    return (
        t.includes(o.fS.SCREEN) &&
            e.supports(o.O5.SCREEN_PREVIEWS) &&
            (a.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.fS.SCREEN))),
        t.includes(o.fS.WINDOW) &&
            e.supports(o.O5.WINDOW_PREVIEWS) &&
            (a.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.fS.WINDOW))),
        0 !== t.length && a.push(r.desktopCapture.getDesktopCaptureSources({ types: t, thumbnailSize: n })),
        Promise.all(a).then((e) => s()(e))
    );
}
