var i = d(522681),
    e = d(880008),
    c = d(154676);
let a = "cameraPermissionsGranted";
function s() {
    let l = (0, e.r)();
    l && l.setItem(a, String(!0));
}
let n = !1;
function Z() {
    return n;
}
async function b(l) {
    return l.hasBeenRequestedThisSession()
        ? "granted"
        : l.hasMotionPermissionDeniedThisSession()
          ? "denied"
          : (async function (l = new e.t()) {
                return l.requestPermission();
            })(l);
}
async function m(l = new e.t()) {
    if (l.hasMotionPermissionDeniedThisSession() || !l.hasPermission) return !1;
    try {
        await l.start();
        let t = await i.t.getInstance();
        return (await t.rsp(), t.ssl(), (n = !0), !0);
    } catch {
        return !1;
    }
}
async function o(l = {}) {
    try {
        if (l.requestMotion) {
            let l = new e.t();
            if ((await b(l)) === "denied") return "denied";
            Z() || (await m(l));
        }
        return ((0, c.a)(await (0, c.r)({ video: !0, audio: l.requestAudio ?? !1 })), s(), "granted");
    } catch (t) {
        let l = t instanceof Error ? t.name : void 0;
        if ("NotAllowedError" === l || "PermissionDeniedError" === l) return "denied";
        return "prompt";
    }
}
d.d(
    t,
    {},
    {
        a: Z,
        i: o,
        n: async function (l) {
            if (!l.requestMotionPermission) return o();
            if ("granted" === l.permissionResult) {
                if (!Z()) {
                    let l = new e.t();
                    if ((await b(l)) === "denied" || !(await m(l))) return "denied";
                }
                return "granted";
            }
            return o({ requestMotion: !0 });
        },
        o: function () {
            n = !1;
        },
        r: async function (l) {
            let t;
            if (!0 !== l.ds || Z() || !(!0 === l.cameraGranted || ((t = (0, e.r)()) && "true" === t.getItem(a))))
                return;
            let d = new e.t(),
                i = await b(d);
            "denied" === i || (("granted" === i || "not-required" === i) && (await m(d)));
        },
        t: async function () {
            let l = await (async function () {
                return (async function (l) {
                    try {
                        if ("u" < typeof navigator || !navigator.permissions) return "prompt";
                        return (await navigator.permissions.query({ name: l })).state;
                    } catch {
                        return "prompt";
                    }
                })("camera");
            })();
            return "granted" === l ? (s(), "granted") : "denied" === l ? "denied" : "prompt";
        },
    },
);
