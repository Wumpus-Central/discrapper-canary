n.d(t, { GH: () => A, c1: () => h });
var i = n(386406),
    r = n(56562),
    a = n(952818),
    s = n(760751),
    l = n(287809),
    o = n(174459),
    d = n(723702),
    c = n(19575),
    u = n(9302),
    _ = n(652215);
async function E() {
    if (!(0, d.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if ((0, u.isHookModuleTooOld)()) return Promise.reject(Error("Hook module is too old"));
    await c.Ay.ensureModule("discord_hook");
    let e = await c.Ay.requireModule("discord_hook");
    return (
        (function (e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = l.default.getCurrentUser();
            (null != n && n.isStaff() && (console.log("Hook: Enabling crash trigger."), (t |= 2)), e.setFlags(t));
        })(e),
        e
    );
}
function A(e, t) {
    return E().then((n) => {
        let l = a.Ay.getGameForPID(e),
            d = l?.name,
            c = null != l ? s.A.findGame(l) : null,
            u = null;
        return new Promise((s) => {
            function l(e, n) {
                (o.default.track(_.HAw.HOOK_RESULT, {
                    game_name: d,
                    game_id: null == c ? null : c.id,
                    success: n,
                    error: e,
                    ...t,
                }),
                    null != u && (clearTimeout(u), (u = null)),
                    n ? s() : s((e = e ?? "Unknown hook error")));
            }
            let E = a.Ay.getOverlayOptionsForPID(e),
                A = { ...r.gH, ...E, elevate: a.Ay.shouldElevateProcessForPID(e) };
            null == A.allowHook || A.allowHook
                ? ((u = setTimeout(() => {
                      (n.cancelAttachToProcess(e), l("Timed out waiting for hook response", !1));
                  }, 12e4)),
                  n.attachToProcess(e, A, l),
                  i.A.clearElevatedProcess())
                : s("Hook is disabled for this game");
        });
    });
}
function h(e) {
    return E().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
