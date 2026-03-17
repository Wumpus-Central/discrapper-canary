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
        function o() {
            s || e.readyState < 2 || r.drawImage(e, 0, 0, 10, 6);
        }
        if (l) {
            let t;
            function c() {
                s || (o(), (t = e.requestVideoFrameCallback(c)));
            }
            function d() {
                t = e.requestVideoFrameCallback(c);
            }
            function u() {
                e.cancelVideoFrameCallback(t);
            }
            return (
                e.addEventListener("play", d),
                e.addEventListener("pause", u),
                e.addEventListener("ended", u),
                e.addEventListener("seeked", o),
                e.addEventListener("loadeddata", o),
                e.paused ? e.readyState >= 2 && o() : (t = e.requestVideoFrameCallback(c)),
                () => {
                    (s = !0),
                        e.cancelVideoFrameCallback(t),
                        e.removeEventListener("play", d),
                        e.removeEventListener("pause", u),
                        e.removeEventListener("ended", u),
                        e.removeEventListener("seeked", o),
                        e.removeEventListener("loadeddata", o);
                }
            );
        }
        {
            let t;
            function m() {
                s || (o(), (t = requestAnimationFrame(m)));
            }
            function x() {
                t = requestAnimationFrame(m);
            }
            function f() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", x),
                e.addEventListener("pause", f),
                e.addEventListener("ended", f),
                e.addEventListener("seeked", o),
                e.addEventListener("loadeddata", o),
                e.paused ? e.readyState >= 2 && o() : (t = requestAnimationFrame(m)),
                () => {
                    (s = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", x),
                        e.removeEventListener("pause", f),
                        e.removeEventListener("ended", f),
                        e.removeEventListener("seeked", o),
                        e.removeEventListener("loadeddata", o);
                }
            );
        }
    }, [t, n, i]);
}
