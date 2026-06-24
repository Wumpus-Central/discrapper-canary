async function r(e) {
    if ("u" < typeof navigator || !navigator.mediaDevices) throw Error("MediaDevices API not available");
    return navigator.mediaDevices.getUserMedia(e);
}
function n(e) {
    for (let t of e.getTracks()) t.stop();
}
async function o() {
    return "u" < typeof navigator || !navigator.mediaDevices
        ? []
        : (await navigator.mediaDevices.enumerateDevices()).filter((e) => "videoinput" === e.kind);
}
async function s(e, t) {
    await e.applyConstraints(t);
}
i.d(t, { i: () => n, n: () => o, r: () => r, t: () => s });
