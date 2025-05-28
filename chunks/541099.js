n.d(t, { Z: () => g }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(827498);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {
    show: !1,
    entrypoint: o._b.NONE,
    lastShownEntrypoint: o._b.NONE,
    activeViewType: null,
    closeReason: o.ti.DISMISSED,
    initialState: void 0
};
function c(e) {
    let { entrypoint: t, activeViewType: n, initialState: r } = e;
    return (l.show = !0), (l.entrypoint = t), (l.lastShownEntrypoint = t), (l.closeReason = o.ti.DISMISSED), (l.activeViewType = n), (l.initialState = r), !0;
}
function u(e) {
    let { closeReason: t = o.ti.DISMISSED } = e;
    return (l.show = !1), (l.entrypoint = o._b.NONE), (l.closeReason = t), (l.initialState = void 0), !0;
}
let d = new Set();
class f extends (r = i.ZP.Store) {
    initialize() {}
    shouldShowPopup() {
        return l.show && l.entrypoint === o._b.TEXT;
    }
    shouldShowModal() {
        return l.show && l.entrypoint === o._b.VOICE;
    }
    entrypoint() {
        return l.entrypoint;
    }
    lastShownEntrypoint() {
        return l.lastShownEntrypoint;
    }
    activeViewType() {
        return l.activeViewType;
    }
    closeReason() {
        return l.closeReason;
    }
    initialState() {
        return l.initialState;
    }
    appDMChannelsWithFailedLoads() {
        return d;
    }
}
function _() {
    u({ closeReason: o.ti.DISMISSED });
}
function p() {
    u({ closeReason: o.ti.COMMAND });
}
function h(e) {
    let { channelId: t } = e;
    d.add(t);
}
function m(e) {
    let { channelId: t } = e;
    d.delete(t);
}
s(f, 'displayName', 'AppLauncherStore');
let g = new f(a.Z, {
    APP_LAUNCHER_SHOW: c,
    APP_LAUNCHER_DISMISS: u,
    CONNECTION_OPEN: _,
    LOGOUT: _,
    CHANNEL_SELECT: _,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD: h,
    APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD: m
});
