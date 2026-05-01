"use strict";
n.d(t, { GH: () => g, Zi: () => h, c1: () => A, r6: () => I });
var i = n(228366),
    r = n(386406),
    s = n(56562),
    a = n(328153),
    o = n(760751),
    l = n(287809),
    u = n(174459),
    c = n(723702),
    d = n(19575),
    _ = n(652215);
let f = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function h() {
    return !d.Ay?.isModuleVersionAtLeast?.("discord_hook", f);
}
let p = null;
async function E() {
    if (!(0, c.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if (h()) return Promise.reject(Error("Hook module is too old"));
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
    return null != p ? p : (p = await E());
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
                h = a.Ay.getOverlayOptionsForPID(e),
                p = { ...s.gH, ...h, elevate: a.Ay.shouldElevateProcessForPID(e) };
            null == p.allowHook || p.allowHook
                ? ((f = setTimeout(() => {
                      n.cancelAttachToProcess(e), l("Timed out waiting for hook response", !1);
                  }, 12e4)),
                  n.attachToProcess(e, p, l),
                  i.h.wait(() => r.A.clearElevatedProcess()))
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
