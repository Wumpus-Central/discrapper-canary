n.d(t, { Z: () => u }), n(653041), n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(90757),
    l = n.n(a),
    o = n(65154);
function u(e, t, n) {
    let i = window.DiscordNative;
    r()(null != i, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [o.vA.WINDOW, o.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let a = [];
    return (
        t.includes(o.vA.SCREEN) && e.supports(o.AN.SCREEN_PREVIEWS) && (a.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.SCREEN))),
        t.includes(o.vA.WINDOW) && e.supports(o.AN.WINDOW_PREVIEWS) && (a.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.WINDOW))),
        0 !== t.length &&
            a.push(
                i.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(a).then((e) => l()(e))
    );
}
