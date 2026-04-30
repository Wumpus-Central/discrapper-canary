n.d(t, { GH: () => f, Zi: () => A, c1: () => I, r6: () => S });
var i = n(228366),
    l = n(386406),
    a = n(56562),
    r = n(328153),
    s = n(760751),
    o = n(287809),
    d = n(954571),
    u = n(723702),
    c = n(19575),
    h = n(652215);
let E = { development: [0, 0, 0, 0], canary: [1, 0, 30, 10], ptb: [1, 0, 1005, 2], stable: [1, 0, 9001, 2] };
function A() {
    return !c.Ay?.isModuleVersionAtLeast?.("discord_hook", E);
}
let _ = null;
async function p() {
    if (!(0, u.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if (A()) return Promise.reject(Error("Hook module is too old"));
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
async function g() {
    return null != _ ? _ : (_ = await p());
}
function f(e, t) {
    return p().then((n) => {
        let o = r.Ay.getGameForPID(e),
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
                A = r.Ay.getOverlayOptionsForPID(e),
                _ = { ...a.gH, ...A, elevate: r.Ay.shouldElevateProcessForPID(e) };
            null == _.allowHook || _.allowHook
                ? ((E = setTimeout(() => {
                      n.cancelAttachToProcess(e), o("Timed out waiting for hook response", !1);
                  }, 12e4)),
                  n.attachToProcess(e, _, o),
                  i.h.wait(() => l.A.clearElevatedProcess()))
                : s("Hook is disabled for this game");
        });
    });
}
function I(e) {
    return p().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
function S() {
    return g()
        .then((e) => (null != e.findSteamProcess ? e.findSteamProcess() : null))
        .catch(() => null);
}
