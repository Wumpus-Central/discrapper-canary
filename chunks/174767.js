n.d(t, {
    Br: () => o,
    MH: () => c,
    Ol: () => d,
    TG: () => h,
    UF: () => m,
    sJ: () => u
}),
    n(411104);
var i = n(544891),
    l = n(570140),
    a = n(439849),
    r = n(358085),
    s = n(981631);
async function o(e) {
    if (e.platform_type === s.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId,
            n = e.parsed_launch_parameters.inviteToken;
        if (!(0, r.isWindows)() || null == t || null == n) return;
        let i = await _(t, !1),
            a = await g(n);
        l.Z.dispatch({
            type: 'GAME_INVITE_UPDATE_STATUS',
            inviteId: e.invite_id,
            installed: i,
            joinable: a
        });
    } else throw Error('Unsupported invite platform ' + e.platform_type);
}
async function c(e) {
    if (e.platform_type === s.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId;
        return !!(0, r.isWindows)() && null != t && (await p(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
async function d(e) {
    if (e.platform_type === s.ABu.XBOX) {
        let t = e.parsed_launch_parameters.inviteToken;
        return !!(0, r.isWindows)() && null != t && (await f(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
function u() {
    l.Z.dispatch({ type: 'GAME_INVITE_CLEAR_UNSEEN' });
}
async function m(e) {
    await i.tn.del({
        url: s.ANM.GAME_INVITE(e.invite_id),
        rejectWithError: !1
    });
}
async function h() {
    await i.tn.del({
        url: s.ANM.GAME_INVITES,
        rejectWithError: !1
    });
}
async function _(e, t) {
    if (!(0, r.isWindows)()) return !1;
    let n = await (0, a.Z)();
    return new Promise((i, l) => {
        if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
            l(Error('Game utils module not loaded'));
            return;
        }
        n.xboxIsApplicationInstalled(e, t, (e) => {
            i(e);
        });
    });
}
async function p(e) {
    if (!(0, r.isWindows)()) return !1;
    let t = await (0, a.Z)();
    return new Promise((n, i) => {
        if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
            i(Error('Game utils module not loaded'));
            return;
        }
        t.xboxLaunchGame(e, (e) => {
            n(e);
        });
    });
}
async function g(e) {
    if (!(0, r.isWindows)()) return !1;
    let t = await (0, a.Z)();
    return new Promise((n, i) => {
        if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
            i(Error('Game utils module not loaded'));
            return;
        }
        t.xboxIsInviteTokenValid(e, (e) => {
            n(e);
        });
    });
}
async function f(e) {
    if (!(0, r.isWindows)()) return !1;
    let t = await (0, a.Z)();
    return new Promise((n, i) => {
        if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
            i(Error('Game utils module not loaded'));
            return;
        }
        t.xboxAcceptGameInvite(e, (e) => {
            n(e);
        });
    });
}
