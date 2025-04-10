n.d(t, { Z: () => s }), n(539854), n(388685);
var r = n(512722),
    i = n.n(r),
    l = n(90757),
    u = n.n(l),
    o = n(65154);
let a = [o.vA.WINDOW, o.vA.SCREEN];
function s(e, t, n) {
    var r;
    let l = window.DiscordNative;
    i()(null != l, "Can't get desktop sources outside of native app"),
        (t = null != (r = null == t ? void 0 : t.filter((e) => a.includes(e))) ? r : a),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let s = [];
    return (
        t.includes(o.vA.SCREEN) && e.supports(o.AN.SCREEN_PREVIEWS) && (s.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.SCREEN))),
        t.includes(o.vA.WINDOW) && e.supports(o.AN.WINDOW_PREVIEWS) && (s.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.WINDOW))),
        0 !== t.length &&
            s.push(
                l.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(s).then((e) => u()(e))
    );
}
