n.d(t, { Z: () => _ }), n(653041), n(47120);
var o = n(512722),
    c = n.n(o),
    r = n(90757),
    i = n.n(r),
    d = n(65154);
function _(e, t, n) {
    let o = window.DiscordNative;
    c()(null != o, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [d.vA.WINDOW, d.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let r = [];
    return (
        t.includes(d.vA.SCREEN) && e.supports(d.AN.SCREEN_PREVIEWS) && (r.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== d.vA.SCREEN))),
        t.includes(d.vA.WINDOW) && e.supports(d.AN.WINDOW_PREVIEWS) && (r.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== d.vA.WINDOW))),
        0 !== t.length &&
            r.push(
                o.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(r).then((e) => i()(e))
    );
}
