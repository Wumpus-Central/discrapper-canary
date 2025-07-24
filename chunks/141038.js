(r.d(t, { Z: () => u }), r(539854), r(388685));
var n = r(512722),
    l = r.n(n),
    o = r(90757),
    i = r.n(o),
    s = r(65154);
let a = [s.vA.WINDOW, s.vA.SCREEN];
function u(e, t, r) {
    var n;
    let o = window.DiscordNative;
    (l()(null != o, "Can't get desktop sources outside of native app"),
        (t = null != (n = null == t ? void 0 : t.filter((e) => a.includes(e))) ? n : a),
        (r =
            null != r
                ? r
                : {
                      width: 150,
                      height: 150
                  }));
    let u = [];
    return (
        t.includes(s.vA.SCREEN) && e.supports(s.AN.SCREEN_PREVIEWS) && (u.push(e.getScreenPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.SCREEN))),
        t.includes(s.vA.WINDOW) && e.supports(s.AN.WINDOW_PREVIEWS) && (u.push(e.getWindowPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.WINDOW))),
        0 !== t.length &&
            u.push(
                o.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: r
                })
            ),
        Promise.all(u).then((e) => i()(e))
    );
}
