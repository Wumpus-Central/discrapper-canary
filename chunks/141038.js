t.d(n, { Z: () => d }), t(653041), t(47120);
var i = t(512722),
    r = t.n(i),
    a = t(90757),
    l = t.n(a),
    o = t(65154);
function d(e, n, t) {
    let i = window.DiscordNative;
    r()(null != i, "Can't get desktop sources outside of native app"),
        (n = null != n ? n : [o.vA.WINDOW, o.vA.SCREEN]),
        (t =
            null != t
                ? t
                : {
                      width: 150,
                      height: 150
                  });
    let a = [];
    return (
        n.includes(o.vA.SCREEN) && e.supports(o.AN.SCREEN_PREVIEWS) && (a.push(e.getScreenPreviews(t.width, t.height)), (n = n.filter((e) => e !== o.vA.SCREEN))),
        n.includes(o.vA.WINDOW) && e.supports(o.AN.WINDOW_PREVIEWS) && (a.push(e.getWindowPreviews(t.width, t.height)), (n = n.filter((e) => e !== o.vA.WINDOW))),
        0 !== n.length &&
            a.push(
                i.desktopCapture.getDesktopCaptureSources({
                    types: n,
                    thumbnailSize: t
                })
            ),
        Promise.all(a).then((e) => l()(e))
    );
}
