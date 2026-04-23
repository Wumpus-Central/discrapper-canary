n.d(t, { GH: () => g, Zi: () => _, c1: () => I, r6: () => T });
var i = n(228366),
    r = n(386406),
    l = n(56562),
    a = n(328153),
    s = n(760751),
    o = n(287809),
    d = n(954571),
    u = n(723702),
    c = n(19575),
    h = n(652215);
let E = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function _() {
    return !c.Ay?.isModuleVersionAtLeast?.("discord_hook", E);
}
let p = null;
async function A() {
    if (!(0, u.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if (_()) return Promise.reject(Error("Hook module is too old"));
    await c.Ay.ensureModule("discord_hook");
    let e = await c.Ay.requireModule("discord_hook");
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
    return null != p ? p : (p = await A());
}
function g(e, t) {
    return A().then((n) => {
        let o = a.Ay.getGameForPID(e),
            u = o?.name,
            c = null != o ? s.A.findGame(o) : null,
            E = null;
        return new Promise((s) => {
            let o = (e, n) => {
                    d.default.track(h.HAw.HOOK_RESULT, {
                        game_name: u,
                        game_id: null == c ? null : c.id,
                        success: n,
                        error: e,
                        ...t,
                    }),
                        null != E && (clearTimeout(E), (E = null)),
                        n ? s() : s((e = e ?? "Unknown hook error"));
                },
                _ = a.Ay.getOverlayOptionsForPID(e),
                p = { ...l.gH, ..._, elevate: a.Ay.shouldElevateProcessForPID(e) };
            null == p.allowHook || p.allowHook
                ? ((E = setTimeout(() => {
                      n.cancelAttachToProcess(e), o("Timed out waiting for hook response", !1);
                  }, 12e4)),
                  n.attachToProcess(e, p, o),
                  i.h.wait(() => r.A.clearElevatedProcess()))
                : s("Hook is disabled for this game");
        });
    });
}
function I(e) {
    return A().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
function T() {
    return f()
        .then((e) => (null != e.findSteamProcess ? e.findSteamProcess() : null))
        .catch(() => null);
}
