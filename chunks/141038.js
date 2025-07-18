(r.d(t, { Z: () => u }), r(539854), r(388685));
var l = r(512722),
    o = r.n(l),
    n = r(90757),
    i = r.n(n),
    a = r(65154);
let s = [a.vA.WINDOW, a.vA.SCREEN];
function u(e, t, r) {
    var l;
    let n = window.DiscordNative;
    (o()(null != n, "Can't get desktop sources outside of native app"),
        (t = null != (l = null == t ? void 0 : t.filter((e) => s.includes(e))) ? l : s),
        (r =
            null != r
                ? r
                : {
                      width: 150,
                      height: 150
                  }));
    let u = [];
    return (
        t.includes(a.vA.SCREEN) && e.supports(a.AN.SCREEN_PREVIEWS) && (u.push(e.getScreenPreviews(r.width, r.height)), (t = t.filter((e) => e !== a.vA.SCREEN))),
        t.includes(a.vA.WINDOW) && e.supports(a.AN.WINDOW_PREVIEWS) && (u.push(e.getWindowPreviews(r.width, r.height)), (t = t.filter((e) => e !== a.vA.WINDOW))),
        0 !== t.length &&
            u.push(
                n.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: r
                })
            ),
        Promise.all(u).then((e) => i()(e))
    );
}
