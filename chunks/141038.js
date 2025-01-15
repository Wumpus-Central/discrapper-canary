n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    o = n.n(r),
    i = n(90757),
    a = n.n(i),
    c = n(65154);
function l(e, t, n) {
    let r = window.DiscordNative;
    o()(null != r, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [c.vA.WINDOW, c.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let i = [];
    return (
        t.includes(c.vA.SCREEN) && e.supports(c.AN.SCREEN_PREVIEWS) && (i.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== c.vA.SCREEN))),
        t.includes(c.vA.WINDOW) && e.supports(c.AN.WINDOW_PREVIEWS) && (i.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== c.vA.WINDOW))),
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
