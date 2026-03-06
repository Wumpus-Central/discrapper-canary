"use strict";
n.d(t, { A: () => i });
var a = n(64700);
let l = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
function i(e) {
    let { videoRef: t, canvasRef: n, enabled: i } = e;
    a.useEffect(() => {
        if (!i) return;
        let e = t.current,
            a = n.current;
        if (null == e || null == a) return;
        (a.width = 10), (a.height = 6);
        let r = a.getContext("2d");
        if (null == r) return;
        let s = !1;
        function c() {
            s || e.readyState < 2 || r.drawImage(e, 0, 0, 10, 6);
        }
        if (l) {
            let t;
            function o() {
                s || (c(), (t = e.requestVideoFrameCallback(o)));
            }
            function d() {
                t = e.requestVideoFrameCallback(o);
            }
            function u() {
                e.cancelVideoFrameCallback(t);
            }
            return (
                e.addEventListener("play", d),
                e.addEventListener("pause", u),
                e.addEventListener("ended", u),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = e.requestVideoFrameCallback(o)),
                () => {
                    (s = !0),
                        e.cancelVideoFrameCallback(t),
                        e.removeEventListener("play", d),
                        e.removeEventListener("pause", u),
                        e.removeEventListener("ended", u),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c);
                }
            );
        }
        {
            let t;
            function m() {
                s || (c(), (t = requestAnimationFrame(m)));
            }
            function x() {
                t = requestAnimationFrame(m);
            }
            function h() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", x),
                e.addEventListener("pause", h),
                e.addEventListener("ended", h),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = requestAnimationFrame(m)),
                () => {
                    (s = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", x),
                        e.removeEventListener("pause", h),
                        e.removeEventListener("ended", h),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c);
                }
            );
        }
    }, [t, n, i]);
}
