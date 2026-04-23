"use strict";
n.d(t, { GH: () => g, Zi: () => p, c1: () => A, r6: () => I });
var r = n(73153),
    i = n(386406),
    s = n(56562),
    a = n(15285),
    o = n(760751),
    l = n(287809),
    u = n(954571),
    c = n(723702),
    d = n(837921),
    _ = n(652215);
let f = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function p() {
    return !d.Ay?.isModuleVersionAtLeast?.("discord_hook", f);
}
let h = null;
async function E() {
    if (!(0, c.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if (p()) return Promise.reject(Error("Hook module is too old"));
    await d.Ay.ensureModule("discord_hook");
    let e = await d.Ay.requireModule("discord_hook");
    return (
        (function (e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = l.default.getCurrentUser();
            null != n && n.isStaff() && (console.log("Hook: Enabling crash trigger."), (t |= 2)), e.setFlags(t);
        })(e),
        e
    );
}
async function m() {
    return null != h ? h : (h = await E());
}
function g(e, t) {
    return E().then((n) => {
        let l = a.Ay.getGameForPID(e),
            c = l?.name,
            d = null != l ? o.A.findGame(l) : null,
            f = null;
        return new Promise((o) => {
            let l = (e, n) => {
                    u.default.track(_.HAw.HOOK_RESULT, {
                        game_name: c,
                        game_id: null == d ? null : d.id,
                        success: n,
                        error: e,
                        ...t,
                    }),
                        null != f && (clearTimeout(f), (f = null)),
                        n ? o() : o((e = e ?? "Unknown hook error"));
                },
                p = a.Ay.getOverlayOptionsForPID(e),
                h = { ...s.gH, ...p, elevate: a.Ay.shouldElevateProcessForPID(e) };
            null == h.allowHook || h.allowHook
                ? ((f = setTimeout(() => {
                      n.cancelAttachToProcess(e), l("Timed out waiting for hook response", !1);
                  }, 12e4)),
                  n.attachToProcess(e, h, l),
                  r.h.wait(() => i.A.clearElevatedProcess()))
                : o("Hook is disabled for this game");
        });
    });
}
function A(e) {
    return E().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
function I() {
    return m()
        .then((e) => (null != e.findSteamProcess ? e.findSteamProcess() : null))
        .catch(() => null);
}
