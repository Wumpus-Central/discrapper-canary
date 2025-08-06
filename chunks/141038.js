n.d(t, { Z: () => c }), n(539854), n(388685);
var r = n(512722),
    i = n.n(r),
    o = n(90757),
    a = n.n(o),
    s = n(65154);
let l = [s.vA.WINDOW, s.vA.SCREEN];
function c(e, t, n) {
    var r;
    let o = window.DiscordNative;
    i()(null != o, "Can't get desktop sources outside of native app"),
        (t = null != (r = null == t ? void 0 : t.filter((e) => l.includes(e))) ? r : l),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150,
                  });
    let c = [];
    return (
        t.includes(s.vA.SCREEN) &&
            e.supports(s.AN.SCREEN_PREVIEWS) &&
            (c.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== s.vA.SCREEN))),
        t.includes(s.vA.WINDOW) &&
            e.supports(s.AN.WINDOW_PREVIEWS) &&
            (c.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== s.vA.WINDOW))),
        0 !== t.length &&
            c.push(
                o.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n,
                }),
            ),
        Promise.all(c).then((e) => a()(e))
    );
}
