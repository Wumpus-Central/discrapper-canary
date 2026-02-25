"use strict";
n.d(t, { GH: () => I, Zi: () => h, c1: () => T, r6: () => S });
var r = n(73153),
    i = n(386406),
    s = n(56562),
    a = n(15285),
    o = n(760751),
    l = n(287809),
    u = n(954571),
    c = n(723702),
    d = n(837921),
    _ = n(241696),
    f = n(652215);
let p = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function h() {
    return !d.Ay?.isModuleVersionAtLeast?.("discord_hook", p);
}
let m = null;
async function E() {
    if (!(0, c.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if (h()) return Promise.reject(Error("Hook module is too old"));
    await d.Ay.ensureModule("discord_hook");
    let e = await d.Ay.requireModule("discord_hook");
    return A(e), e;
}
async function g() {
    return null != m ? m : (m = await E());
}
function A(e) {
    if (null == e.setFlags) return;
    let t = 0,
        n = _.A.getCurrentConfig({ location: "edd7d3_1" }, { autoTrackExposure: !1 });
    n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), (t |= 1));
    let r = l.default.getCurrentUser();
    null != r && (r.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), (t |= 2)),
        e.setFlags(t);
}
function I(e, t) {
    return E().then((n) => {
        let l = a.Ay.getGameForPID(e),
            c = l?.name,
            d = null != l ? o.A.findGame(l) : null,
            _ = null;
        return new Promise((o) => {
            let l = (e, n) => {
                    u.default.track(f.HAw.HOOK_RESULT, {
                        game_name: c,
                        game_id: null == d ? null : d.id,
                        success: n,
                        error: e,
                        ...t,
                    }),
                        null != _ && (clearTimeout(_), (_ = null)),
                        n ? o() : o((e = e ?? "Unknown hook error"));
                },
                p = a.Ay.getOverlayOptionsForPID(e),
                h = { ...s.gH, ...p, elevate: a.Ay.shouldElevateProcessForPID(e) };
            null == h.allowHook || h.allowHook
                ? ((_ = setTimeout(() => {
                      n.cancelAttachToProcess(e), l("Timed out waiting for hook response", !1);
                  }, 12e4)),
                  n.attachToProcess(e, h, l),
                  r.h.wait(() => i.A.clearElevatedProcess()))
                : o("Hook is disabled for this game");
        });
    });
}
function T(e) {
    return E().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
function S() {
    return g()
        .then((e) => (null != e.findSteamProcess ? e.findSteamProcess() : null))
        .catch(() => null);
}
