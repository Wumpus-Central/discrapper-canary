"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(656470),
    s = n.n(a),
    l = n(731854);
let o = [l.fS.WINDOW, l.fS.SCREEN];
function d(e, t, n, i) {
    let a = window.DiscordNative;
    r()(null != a, "Can't get desktop sources outside of native app"),
        (n = n?.filter((e) => o.includes(e)) ?? o),
        (i = i ?? { width: 150, height: 150 });
    let d = [];
    return (
        n.includes(l.fS.SCREEN) &&
            e.supports(l.O5.SCREEN_PREVIEWS) &&
            (d.push(e.getScreenPreviews(i.width, i.height, t)), (n = n.filter((e) => e !== l.fS.SCREEN))),
        n.includes(l.fS.WINDOW) &&
            e.supports(l.O5.WINDOW_PREVIEWS) &&
            (d.push(e.getWindowPreviews(i.width, i.height, t)), (n = n.filter((e) => e !== l.fS.WINDOW))),
        0 !== n.length && d.push(a.desktopCapture.getDesktopCaptureSources({ types: n, thumbnailSize: i })),
        Promise.all(d).then((e) => s()(e))
    );
}
