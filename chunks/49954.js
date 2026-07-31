d.d(t, { a: () => o, i: () => N, n: () => M, o: () => m, r: () => h, t: () => W });
var i = d(522681),
    e = d(880008),
    c = d(154676);
let a = "cameraPermissionsGranted";
function s() {
    let l = (0, e.r)();
    l && l.setItem(a, String(!0));
}
async function n(l) {
    try {
        if ("u" < typeof navigator || !navigator.permissions) return "prompt";
        return (await navigator.permissions.query({ name: l })).state;
    } catch {
        return "prompt";
    }
}
async function Z() {
    return n("camera");
}
let b = !1;
function m() {
    b = !1;
}
function o() {
    return b;
}
async function u(l) {
    return l.hasBeenRequestedThisSession() ? "granted" : l.hasMotionPermissionDeniedThisSession() ? "denied" : G(l);
}
async function h(l) {
    let t;
    if (!0 !== l.ds || b || !(!0 === l.cameraGranted || ((t = (0, e.r)()) && "true" === t.getItem(a)))) return;
    let d = new e.t(),
        i = await u(d);
    "denied" === i || (("granted" === i || "not-required" === i) && (await p(d)));
}
async function W() {
    let l = await Z();
    return "granted" === l ? (s(), "granted") : "denied" === l ? "denied" : "prompt";
}
async function G(l = new e.t()) {
    return l.requestPermission();
}
async function p(l = new e.t()) {
    if (l.hasMotionPermissionDeniedThisSession() || !l.hasPermission) return !1;
    try {
        await l.start();
        let t = await i.t.getInstance();
        return await t.rsp(), t.ssl(), (b = !0), !0;
    } catch {
        return !1;
    }
}
async function N(l = {}) {
    try {
        if (l.requestMotion) {
            let l = new e.t();
            if ((await u(l)) === "denied") return "denied";
            b || (await p(l));
        }
        return (0, c.a)(await (0, c.r)({ video: !0, audio: l.requestAudio ?? !1 })), s(), "granted";
    } catch (t) {
        let l = t instanceof Error ? t.name : void 0;
        if ("NotAllowedError" === l || "PermissionDeniedError" === l) return "denied";
        return "prompt";
    }
}
async function M(l) {
    if (!l.requestMotionPermission) return N();
    if ("granted" === l.permissionResult) {
        if (!b) {
            let l = new e.t();
            if ((await u(l)) === "denied" || !(await p(l))) return "denied";
        }
        return "granted";
    }
    return N({ requestMotion: !0 });
}
