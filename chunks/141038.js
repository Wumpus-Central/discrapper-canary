(r.d(t, { Z: () => f }), r(539854), r(388685));
var l = r(512722),
    n = r.n(l),
    i = r(90757),
    o = r.n(i),
    s = r(65154);
let a = [s.vA.WINDOW, s.vA.SCREEN];
function f(e, t, r) {
    var l;
    let i = window.DiscordNative;
    (n()(null != i, "Can't get desktop sources outside of native app"),
        (t = null != (l = null == t ? void 0 : t.filter((e) => a.includes(e))) ? l : a),
        (r =
            null != r
                ? r
                : {
                      width: 150,
                      height: 150
                  }));
    let f = [];
    return (
        t.includes(s.vA.SCREEN) && e.supports(s.AN.SCREEN_PREVIEWS) && (f.push(e.getScreenPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.SCREEN))),
        t.includes(s.vA.WINDOW) && e.supports(s.AN.WINDOW_PREVIEWS) && (f.push(e.getWindowPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.WINDOW))),
        0 !== t.length &&
            f.push(
                i.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: r
                })
            ),
        Promise.all(f).then((e) => o()(e))
    );
}
