n.d(t, {
    Br: () => s,
    MH: () => c,
    Ol: () => u,
    TG: () => h,
    UF: () => f,
    sJ: () => d,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    l = n(439849),
    o = n(358085),
    a = n(981631);
async function s(e) {
    if (e.platform_type === a.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId,
            n = e.parsed_launch_parameters.inviteToken;
        if (!(0, o.isWindows)() || null == t || null == n) return;
        let r = await p(t, !1),
            l = await m(n);
        i.Z.dispatch({
            type: "GAME_INVITE_UPDATE_STATUS",
            inviteId: e.invite_id,
            installed: r,
            joinable: l,
        });
    } else throw Error("Unsupported invite platform " + e.platform_type);
}
async function c(e) {
    if (e.platform_type === a.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId;
        return !!(0, o.isWindows)() && null != t && (await g(t));
    }
    throw Error("Unsupported invite platform " + e.platform_type);
}
async function u(e) {
    if (e.platform_type === a.ABu.XBOX) {
        let t = e.parsed_launch_parameters.inviteToken;
        return !!(0, o.isWindows)() && null != t && (await b(t));
    }
    throw Error("Unsupported invite platform " + e.platform_type);
}
function d() {
    i.Z.dispatch({ type: "GAME_INVITE_CLEAR_UNSEEN" });
}
async function f(e) {
    await r.tn.del({
        url: a.ANM.GAME_INVITE(e.invite_id),
        rejectWithError: !1,
    });
}
async function h() {
    await r.tn.del({
        url: a.ANM.GAME_INVITES,
        rejectWithError: !1,
    });
}
async function p(e, t) {
    if (!(0, o.isWindows)()) return !1;
    let n = await (0, l.Z)();
    return new Promise((r, i) => {
        if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null)
            return void i(Error("Game utils module not loaded"));
        n.xboxIsApplicationInstalled(e, t, (e) => {
            r(e);
        });
    });
}
async function g(e) {
    if (!(0, o.isWindows)()) return !1;
    let t = await (0, l.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxLaunchGame) == null) return void r(Error("Game utils module not loaded"));
        t.xboxLaunchGame(e, (e) => {
            n(e);
        });
    });
}
async function m(e) {
    if (!(0, o.isWindows)()) return !1;
    let t = await (0, l.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null)
            return void r(Error("Game utils module not loaded"));
        t.xboxIsInviteTokenValid(e, (e) => {
            n(e);
        });
    });
}
async function b(e) {
    if (!(0, o.isWindows)()) return !1;
    let t = await (0, l.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) return void r(Error("Game utils module not loaded"));
        t.xboxAcceptGameInvite(e, (e) => {
            n(e);
        });
    });
}
