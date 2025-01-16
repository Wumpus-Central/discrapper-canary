n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    o = n.n(r),
    i = n(90757),
    a = n.n(i),
    l = n(65154);
function c(e, t, n) {
    let r = window.DiscordNative;
    o()(null != r, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [l.vA.WINDOW, l.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let i = [];
    return (
        t.includes(l.vA.SCREEN) && e.supports(l.AN.SCREEN_PREVIEWS) && (i.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== l.vA.SCREEN))),
        t.includes(l.vA.WINDOW) && e.supports(l.AN.WINDOW_PREVIEWS) && (i.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== l.vA.WINDOW))),
        0 !== t.length &&
            i.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(i).then((e) => a()(e))
    );
}
