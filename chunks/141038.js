n.d(t, { Z: () => l }), n(653041), n(47120);
var o = n(512722),
    r = n.n(o),
    i = n(90757),
    c = n.n(i),
    d = n(65154);
function l(e, t, n) {
    let o = window.DiscordNative;
    r()(null != o, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [d.vA.WINDOW, d.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let i = [];
    return (
        t.includes(d.vA.SCREEN) && e.supports(d.AN.SCREEN_PREVIEWS) && (i.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== d.vA.SCREEN))),
        t.includes(d.vA.WINDOW) && e.supports(d.AN.WINDOW_PREVIEWS) && (i.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== d.vA.WINDOW))),
        0 !== t.length &&
            i.push(
                o.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(i).then((e) => c()(e))
    );
}
