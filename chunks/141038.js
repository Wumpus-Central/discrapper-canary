n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(90757),
    a = n.n(l),
    u = n(65154);
function o(e, t, n) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [u.vA.WINDOW, u.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let l = [];
    return (
        t.includes(u.vA.SCREEN) && e.supports(u.AN.SCREEN_PREVIEWS) && (l.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== u.vA.SCREEN))),
        t.includes(u.vA.WINDOW) && e.supports(u.AN.WINDOW_PREVIEWS) && (l.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== u.vA.WINDOW))),
        0 !== t.length &&
            l.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(l).then((e) => a()(e))
    );
}
