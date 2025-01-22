var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(827498);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = {
    show: !1,
    entrypoint: l._b.NONE,
    lastShownEntrypoint: l._b.NONE,
    activeViewType: null,
    closeReason: l.ti.DISMISSED,
    initialState: void 0
};
function d(e) {
    let { entrypoint: n, activeViewType: r, initialState: i } = e;
    return (c.show = !0), (c.entrypoint = n), (c.lastShownEntrypoint = n), (c.closeReason = l.ti.DISMISSED), (c.activeViewType = r), (c.initialState = i), !0;
}
function f(e) {
    let { closeReason: n = l.ti.DISMISSED } = e;
    return (c.show = !1), (c.entrypoint = l._b.NONE), (c.closeReason = n), (c.initialState = void 0), !0;
}
let p = new Set();
class h extends (i = o.ZP.Store) {
    initialize() {}
    shouldShowPopup() {
        return c.show && c.entrypoint === l._b.TEXT;
    }
    shouldShowModal() {
        return c.show && c.entrypoint === l._b.VOICE;
    }
    entrypoint() {
        return c.entrypoint;
    }
    lastShownEntrypoint() {
        return c.lastShownEntrypoint;
    }
    activeViewType() {
        return c.activeViewType;
    }
    closeReason() {
        return c.closeReason;
    }
    initialState() {
        return c.initialState;
    }
    appDMChannelsWithFailedLoads() {
        return p;
    }
}
function _() {
    f({ closeReason: l.ti.DISMISSED });
}
function m() {
    f({ closeReason: l.ti.COMMAND });
}
function g(e) {
    let { channelId: n } = e;
    p.add(n);
}
function E(e) {
    let { channelId: n } = e;
    p.delete(n);
}
u(h, 'displayName', 'AppLauncherStore'),
    (n.Z = new h(s.Z, {
        APP_LAUNCHER_SHOW: d,
        APP_LAUNCHER_DISMISS: f,
        CONNECTION_OPEN: _,
        LOGOUT: _,
        CHANNEL_SELECT: _,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: m,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: m,
        APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD: g,
        APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD: E
    }));
