n.d(t, { Z: () => _ });
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
                  writable: !0,
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
    activeChannelId: null,
    closeReason: o.ti.DISMISSED,
    initialState: void 0,
};
function c(e) {
    let { entrypoint: t, activeViewType: n, initialState: r, activeChannelId: i } = e;
    return (
        (l.show = !0),
        (l.entrypoint = t),
        (l.lastShownEntrypoint = t),
        (l.closeReason = o.ti.DISMISSED),
        (l.activeViewType = n),
        (l.activeChannelId = i),
        (l.initialState = r),
        !0
    );
}
function u(e) {
    let { closeReason: t = o.ti.DISMISSED } = e;
    return (
        (l.show = !1),
        (l.entrypoint = o._b.NONE),
        (l.closeReason = t),
        (l.initialState = void 0),
        (l.activeChannelId = null),
        !0
    );
}
class d extends (r = i.ZP.Store) {
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
    activeChannelId() {
        var e;
        return null != (e = l.activeChannelId) ? e : null;
    }
    closeReason() {
        return l.closeReason;
    }
    initialState() {
        return l.initialState;
    }
}
function f() {
    u({ closeReason: o.ti.DISMISSED });
}
function p() {
    u({ closeReason: o.ti.COMMAND });
}
s(d, "displayName", "AppLauncherStore");
let _ = new d(a.Z, {
    APP_LAUNCHER_SHOW: c,
    APP_LAUNCHER_DISMISS: u,
    CONNECTION_OPEN: f,
    LOGOUT: f,
    CHANNEL_SELECT: f,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
});
