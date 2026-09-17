n.d(t, { N: () => r });
var i = n(367974);
async function r(e) {
    let t,
        n = document.createElement("video");
    ((n.volume = 0), (n.crossOrigin = "anonymous"), (n.src = e));
    try {
        return (
            await Promise.race([
                n.play(),
                new Promise((e, n) => {
                    t = setTimeout(() => n(Error("getVideoDimensions: playback start timed out")), 5e3);
                }),
            ]),
            n.pause(),
            { width: n.videoWidth, height: n.videoHeight }
        );
    } finally {
        (null != t && clearTimeout(t), (0, i.A)(n));
    }
}
