n.d(t, {
    Br: () => s,
    MH: () => c,
    Ol: () => d,
    TG: () => m,
    UF: () => p,
    sJ: () => u
}),
    n(411104);
var r = n(544891),
    i = n(570140),
    a = n(439849),
    o = n(358085),
    l = n(981631);
async function s(e) {
    if (e.platform_type === l.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId,
            n = e.parsed_launch_parameters.inviteToken;
        if (!(0, o.isWindows)() || null == t || null == n) return;
        let r = await f(t, !1),
            a = await g(n);
        i.Z.dispatch({
            type: 'GAME_INVITE_UPDATE_STATUS',
            inviteId: e.invite_id,
            installed: r,
            joinable: a
        });
    } else throw Error('Unsupported invite platform ' + e.platform_type);
}
async function c(e) {
    if (e.platform_type === l.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId;
        return !!(0, o.isWindows)() && null != t && (await h(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
async function d(e) {
    if (e.platform_type === l.ABu.XBOX) {
        let t = e.parsed_launch_parameters.inviteToken;
        return !!(0, o.isWindows)() && null != t && (await _(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
function u() {
    i.Z.dispatch({ type: 'GAME_INVITE_CLEAR_UNSEEN' });
}
async function p(e) {
    await r.tn.del({
        url: l.ANM.GAME_INVITE(e.invite_id),
        rejectWithError: !1
    });
}
async function m() {
    await r.tn.del({
        url: l.ANM.GAME_INVITES,
        rejectWithError: !1
    });
}
async function f(e, t) {
    if (!(0, o.isWindows)()) return !1;
    let n = await (0, a.Z)();
    return new Promise((r, i) => {
        if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
            i(Error('Game utils module not loaded'));
            return;
        }
        n.xboxIsApplicationInstalled(e, t, (e) => {
            r(e);
        });
    });
}
async function h(e) {
    if (!(0, o.isWindows)()) return !1;
    let t = await (0, a.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
            r(Error('Game utils module not loaded'));
            return;
        }
        t.xboxLaunchGame(e, (e) => {
            n(e);
        });
    });
}
async function g(e) {
    if (!(0, o.isWindows)()) return !1;
    let t = await (0, a.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
            r(Error('Game utils module not loaded'));
            return;
        }
        t.xboxIsInviteTokenValid(e, (e) => {
            n(e);
        });
    });
}
async function _(e) {
    if (!(0, o.isWindows)()) return !1;
    let t = await (0, a.Z)();
    return new Promise((n, r) => {
        if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
            r(Error('Game utils module not loaded'));
            return;
        }
        t.xboxAcceptGameInvite(e, (e) => {
            n(e);
        });
    });
}
