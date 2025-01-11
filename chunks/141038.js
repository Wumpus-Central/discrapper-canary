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
    l = n.n(i),
    a = n(65154);
function c(e, t, n) {
    let r = window.DiscordNative;
    o()(null != r, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [a.vA.WINDOW, a.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let i = [];
    return (
        t.includes(a.vA.SCREEN) && e.supports(a.AN.SCREEN_PREVIEWS) && (i.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== a.vA.SCREEN))),
        t.includes(a.vA.WINDOW) && e.supports(a.AN.WINDOW_PREVIEWS) && (i.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== a.vA.WINDOW))),
        0 !== t.length &&
            i.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(i).then((e) => l()(e))
    );
}
