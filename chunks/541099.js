n.d(t, { Z: () => g }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(827498);
function o(e, t, n) {
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
    entrypoint: s._b.NONE,
    lastShownEntrypoint: s._b.NONE,
    activeViewType: null,
    closeReason: s.ti.DISMISSED,
    initialState: void 0
};
function u(e) {
    let { entrypoint: t, activeViewType: n, initialState: i } = e;
    return (l.show = !0), (l.entrypoint = t), (l.lastShownEntrypoint = t), (l.closeReason = s.ti.DISMISSED), (l.activeViewType = n), (l.initialState = i), !0;
}
function c(e) {
    let { closeReason: t = s.ti.DISMISSED } = e;
    return (l.show = !1), (l.entrypoint = s._b.NONE), (l.closeReason = t), (l.initialState = void 0), !0;
}
let d = new Set();
class f extends (i = r.ZP.Store) {
    initialize() {}
    shouldShowPopup() {
        return l.show && l.entrypoint === s._b.TEXT;
    }
    shouldShowModal() {
        return l.show && l.entrypoint === s._b.VOICE;
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
    c({ closeReason: s.ti.DISMISSED });
}
function p() {
    c({ closeReason: s.ti.COMMAND });
}
function h(e) {
    let { channelId: t } = e;
    d.add(t);
}
function m(e) {
    let { channelId: t } = e;
    d.delete(t);
}
o(f, 'displayName', 'AppLauncherStore');
let g = new f(a.Z, {
    APP_LAUNCHER_SHOW: u,
    APP_LAUNCHER_DISMISS: c,
    CONNECTION_OPEN: _,
    LOGOUT: _,
    CHANNEL_SELECT: _,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD: h,
    APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD: m
});
