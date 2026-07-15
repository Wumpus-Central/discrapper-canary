d.d(t, { a: () => a, i: () => c, n: () => s, r: () => e, t: () => n });
let i = [
    { height: 720 },
    { width: 3840, height: 2160 },
    { width: 1920, height: 1080 },
    { width: 640, height: 480 },
    { width: 800, height: 480 },
    {},
];
async function e(l) {
    if ("u" < typeof navigator || !navigator.mediaDevices) throw Error("MediaDevices API not available");
    return navigator.mediaDevices.getUserMedia(l);
}
async function c(l, t = i) {
    if ("u" < typeof navigator || !navigator.mediaDevices) throw Error("MediaDevices API not available");
    let d = l.video;
    for (let i = 0; i < t.length; i++) {
        let e = t[i],
            c = { ...d };
        e.width && (c.width = { ideal: e.width }),
            e.height && (c.height = { ideal: e.height }),
            e.width || e.height || (delete c.width, delete c.height);
        try {
            return await navigator.mediaDevices.getUserMedia({ ...l, video: c });
        } catch (l) {
            if (i === t.length - 1) throw l;
        }
    }
    throw Error("All camera resolution fallbacks failed");
}
function a(l) {
    for (let t of l.getTracks()) t.stop();
}
async function s() {
    return "u" < typeof navigator || !navigator.mediaDevices
        ? []
        : (await navigator.mediaDevices.enumerateDevices()).filter((l) => "videoinput" === l.kind);
}
async function n(l, t) {
    await l.applyConstraints(t);
}
