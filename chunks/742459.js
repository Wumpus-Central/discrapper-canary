n.d(t, { A: () => c }), n(321073), n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(656470),
    s = n.n(a),
    o = n(731854);
let l = [o.fS.WINDOW, o.fS.SCREEN];
function c(e, t, n) {
    var r;
    let a = window.DiscordNative;
    i()(null != a, "Can't get desktop sources outside of native app"),
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
        t.includes(o.fS.SCREEN) &&
            e.supports(o.O5.SCREEN_PREVIEWS) &&
            (c.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.fS.SCREEN))),
        t.includes(o.fS.WINDOW) &&
            e.supports(o.O5.WINDOW_PREVIEWS) &&
            (c.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.fS.WINDOW))),
        0 !== t.length &&
            c.push(
                a.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n,
                }),
            ),
        Promise.all(c).then((e) => s()(e))
    );
}
