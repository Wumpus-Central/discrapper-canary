n.d(t, {
    Br: function () {
        return s;
    },
    MH: function () {
        return c;
    },
    Ol: function () {
        return u;
    },
    TG: function () {
        return h;
    },
    UF: function () {
        return m;
    },
    sJ: function () {
        return d;
    }
}),
    n(411104);
var i = n(544891),
    r = n(570140),
    l = n(439849),
    a = n(358085),
    o = n(981631);
async function s(e) {
    if (e.platform_type === o.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId,
            n = e.parsed_launch_parameters.inviteToken;
        if (!(0, a.isWindows)() || null == t || null == n) return;
        let i = await f(t, !1),
            l = await _(n);
        r.Z.dispatch({
            type: 'GAME_INVITE_UPDATE_STATUS',
            inviteId: e.invite_id,
            installed: i,
            joinable: l
        });
    } else throw Error('Unsupported invite platform ' + e.platform_type);
}
async function c(e) {
    if (e.platform_type === o.ABu.XBOX) {
        let t = e.parsed_launch_parameters.titleId;
        return !!(0, a.isWindows)() && null != t && (await p(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
async function u(e) {
    if (e.platform_type === o.ABu.XBOX) {
        let t = e.parsed_launch_parameters.inviteToken;
        return !!(0, a.isWindows)() && null != t && (await g(t));
    }
    throw Error('Unsupported invite platform ' + e.platform_type);
}
function d() {
    r.Z.dispatch({ type: 'GAME_INVITE_CLEAR_UNSEEN' });
}
async function m(e) {
    await i.tn.del({
        url: o.ANM.GAME_INVITE(e.invite_id),
        rejectWithError: !1
    });
}
async function h() {
    await i.tn.del({
        url: o.ANM.GAME_INVITES,
        rejectWithError: !1
    });
}
async function f(e, t) {
    if (!(0, a.isWindows)()) return !1;
    let n = await (0, l.Z)();
    return new Promise((i, r) => {
        if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
            r(Error('Game utils module not loaded'));
            return;
        }
        n.xboxIsApplicationInstalled(e, t, (e) => {
            i(e);
        });
    });
}
async function p(e) {
    if (!(0, a.isWindows)()) return !1;
    let t = await (0, l.Z)();
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
async function _(e) {
    if (!(0, a.isWindows)()) return !1;
    let t = await (0, l.Z)();
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
async function g(e) {
    if (!(0, a.isWindows)()) return !1;
    let t = await (0, l.Z)();
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
