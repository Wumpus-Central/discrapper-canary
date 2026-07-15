d.d(t, { n: () => e, t: () => c });
var i = d(749378);
function e() {
    for (let l of (0, i.r)()
        ? ["video/mp4", "video/webm", "video/webm;codecs=vp9", "video/webm;codecs=vp8"]
        : ["video/webm", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/mp4"])
        if (MediaRecorder.isTypeSupported(l)) return l;
    return "";
}
function c() {
    let l = e();
    return (0, i.r)()
        ? { mimeType: l, videoBitsPerSecond: 1e6, bitsPerSecond: 1e6 }
        : { mimeType: l, videoBitsPerSecond: 5e5, bitsPerSecond: 5e5 };
}
