n.d(t, { GH: () => h, c1: () => I });
var i = n(73153),
    r = n(386406),
    a = n(56562),
    s = n(952818),
    l = n(760751),
    o = n(287809),
    d = n(174459),
    c = n(723702),
    u = n(19575),
    _ = n(9302),
    E = n(652215);
async function A() {
    if (!(0, c.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if ((0, _.isHookModuleTooOld)()) return Promise.reject(Error("Hook module is too old"));
    await u.Ay.ensureModule("discord_hook");
    let e = await u.Ay.requireModule("discord_hook");
    return (
        (function (e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = o.default.getCurrentUser();
            (null != n && n.isStaff() && (console.log("Hook: Enabling crash trigger."), (t |= 2)), e.setFlags(t));
        })(e),
        e
    );
}
function h(e, t) {
    return A().then((n) => {
        let o = s.Ay.getGameForPID(e),
            c = o?.name,
            u = null != o ? l.A.findGame(o) : null,
            _ = null;
        return new Promise((l) => {
            function o(e, n) {
                (d.default.track(E.HAw.HOOK_RESULT, {
                    game_name: c,
                    game_id: null == u ? null : u.id,
                    success: n,
                    error: e,
                    ...t,
                }),
                    null != _ && (clearTimeout(_), (_ = null)),
                    n ? l() : l((e = e ?? "Unknown hook error")));
            }
            let A = s.Ay.getOverlayOptionsForPID(e),
                h = { ...a.gH, ...A, elevate: s.Ay.shouldElevateProcessForPID(e) };
            null == h.allowHook || h.allowHook
                ? ((_ = setTimeout(() => {
                      (n.cancelAttachToProcess(e), o("Timed out waiting for hook response", !1));
                  }, 12e4)),
                  n.attachToProcess(e, h, o),
                  i.h.wait(() => r.A.clearElevatedProcess()))
                : l("Hook is disabled for this game");
        });
    });
}
function I(e) {
    return A().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
