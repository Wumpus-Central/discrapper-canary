"use strict";
n.d(t, { GH: () => p, Zi: () => A, c1: () => T, r6: () => m });
var i = n(228366),
    r = n(386406),
    a = n(56562),
    s = n(952818),
    l = n(760751),
    o = n(287809),
    d = n(174459),
    c = n(723702),
    u = n(19575),
    _ = n(652215);
let E = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function A() {
    return !u.Ay?.isModuleVersionAtLeast?.("discord_hook", E);
}
let h = null;
async function I() {
    if (!(0, c.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if (A()) return Promise.reject(Error("Hook module is too old"));
    await u.Ay.ensureModule("discord_hook");
    let e = await u.Ay.requireModule("discord_hook");
    return (
        (function (e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = o.default.getCurrentUser();
            null != n && n.isStaff() && (console.log("Hook: Enabling crash trigger."), (t |= 2)), e.setFlags(t);
        })(e),
        e
    );
}
async function f() {
    return null != h ? h : (h = await I());
}
function p(e, t) {
    return I().then((n) => {
        let o = s.Ay.getGameForPID(e),
            c = o?.name,
            u = null != o ? l.A.findGame(o) : null,
            E = null;
        return new Promise((l) => {
            function o(e, n) {
                d.default.track(_.HAw.HOOK_RESULT, {
                    game_name: c,
                    game_id: null == u ? null : u.id,
                    success: n,
                    error: e,
                    ...t,
                }),
                    null != E && (clearTimeout(E), (E = null)),
                    n ? l() : l((e = e ?? "Unknown hook error"));
            }
            let A = s.Ay.getOverlayOptionsForPID(e),
                h = { ...a.gH, ...A, elevate: s.Ay.shouldElevateProcessForPID(e) };
            null == h.allowHook || h.allowHook
                ? ((E = setTimeout(() => {
                      n.cancelAttachToProcess(e), o("Timed out waiting for hook response", !1);
                  }, 12e4)),
                  n.attachToProcess(e, h, o),
                  i.h.wait(() => r.A.clearElevatedProcess()))
                : l("Hook is disabled for this game");
        });
    });
}
function T(e) {
    return I().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
function m() {
    return f()
        .then((e) => (null != e.findSteamProcess ? e.findSteamProcess() : null))
        .catch(() => null);
}
