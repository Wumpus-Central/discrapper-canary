(n.d(t, { A: () => j }), n(938796));
var i,
    r,
    a = n(665260),
    s = n(855986),
    l = n(205693),
    o = n(73153),
    d = n(652896),
    c = n(46653),
    u = n(495867),
    _ = n(753181),
    E = n(972347),
    A = n(507821),
    f = n(626584),
    h =
        (((i = {}).Connect = "connect"),
        (i.Disconnect = "disconnect"),
        (i.Key = "key"),
        (i.MouseButton = "mouse-button"),
        (i.MouseMove = "mouse-move"),
        (i.Grab = "grab"),
        (i.GrabAllow = "grab-allow"),
        (i.Drop = "drop"),
        (i.Log = "log"),
        i),
    I =
        (((r = {}).Connect = "connect"),
        (r.SendKey = "sendKey"),
        (r.SendMouseMove = "sendMouseMove"),
        (r.SendMouseButton = "sendMouseButton"),
        (r.SendGrab = "sendGrab"),
        (r.SendGrabAllow = "sendGrabAllow"),
        (r.SendDrop = "sendDrop"),
        (r.SetHosting = "setHosting"),
        (r.Close = "close"),
        r);
(n(323874), n(14289), n(35956));
class p extends E.A {
    worker;
    userId;
    rtc;
    logger;
    webTransportAck;
    state = 0;
    constructor(e, t) {
        (super(),
            (this.userId = t),
            (this.logger = new f.A("InputConnection")),
            (this.rtc = e),
            (this.webTransportAck = this.onWebTransportAck.bind(this)),
            this.on(h.Connect, () => {
                this.state = 2;
            }),
            this.on(h.Disconnect, this.onDisconnect.bind(this)),
            this.on(h.Log, this.onLogMessage.bind(this)),
            (this.worker = new Worker(
                new URL("/assets/" + n.u(126501), n.b),
                Object.assign({}, { name: "input-worker" }, { type: void 0 }),
            )),
            null != this.worker &&
                (this.worker.onmessage = (e) => {
                    this.emit(e.data[0], ...e.data.slice(1));
                }));
    }
    get isConnected() {
        return 2 === this.state;
    }
    connect() {
        ((this.state = 1),
            this.rtc.on(A.q.WebTransportAck, this.webTransportAck),
            this.rtc.startWebTransport(),
            setTimeout(() => {
                1 === this.state &&
                    (this.logger.info("Timed out connecting"),
                    this.rtc.off(A.q.WebTransportAck, this.webTransportAck),
                    this.emit(h.Disconnect));
            }, 1e4));
    }
    onWebTransportAck(e, t) {
        this.rtc.off(A.q.WebTransportAck, this.webTransportAck);
        let n = this.rtc.getVoiceAddress();
        if (null == n) {
            (this.logger.info("Failed to get SFU address"), this.emit(h.Disconnect));
            return;
        }
        let i = `https://${n.address}:${n.port}/?token=${e}`;
        (this.logger.info(`Starting WebTransport connection to ${n.address}:${n.port}`),
            this.worker?.postMessage([I.Connect, i, t, this.userId]));
    }
    onLogMessage(e) {
        this.logger.log(e);
    }
    onDisconnect() {
        ((this.state = 0), this.worker?.terminate());
    }
    setHosting(e) {
        this.worker?.postMessage([I.SetHosting, e]);
    }
    sendKey(e, t, n) {
        this.worker?.postMessage([I.SendKey, e, t, n]);
    }
    sendMouseMove(e, t, n) {
        this.worker?.postMessage([I.SendMouseMove, e, t, n]);
    }
    sendMouseButton(e, t, n) {
        this.worker?.postMessage([I.SendMouseButton, e, t, n]);
    }
    sendGrab(e, t) {
        this.worker?.postMessage([I.SendGrab, e, t]);
    }
    sendGrabAllow(e) {
        this.worker?.postMessage([I.SendGrabAllow, e]);
    }
    sendDrop(e) {
        this.worker?.postMessage([I.SendDrop, e]);
    }
    close() {
        this.worker?.postMessage([I.Close]);
    }
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
let m = {
    Escape: 27,
    Digit0: 48,
    Digit1: 49,
    Digit2: 50,
    Digit3: 51,
    Digit4: 52,
    Digit5: 53,
    Digit6: 54,
    Digit7: 55,
    Digit8: 56,
    Digit9: 57,
    Minus: 189,
    Equal: 187,
    Backspace: 8,
    Tab: 9,
    KeyA: 65,
    KeyB: 66,
    KeyC: 67,
    KeyD: 68,
    KeyE: 69,
    KeyF: 70,
    KeyG: 71,
    KeyH: 72,
    KeyI: 73,
    KeyJ: 74,
    KeyK: 75,
    KeyL: 76,
    KeyM: 77,
    KeyN: 78,
    KeyO: 79,
    KeyP: 80,
    KeyQ: 81,
    KeyR: 82,
    KeyS: 83,
    KeyT: 84,
    KeyU: 85,
    KeyV: 86,
    KeyW: 87,
    KeyX: 88,
    KeyY: 89,
    KeyZ: 90,
    BracketLeft: 219,
    BracketRight: 221,
    Enter: 13,
    ControlLeft: 162,
    ControlRight: 163,
    Semicolon: 186,
    Quote: 222,
    Backquote: 192,
    ShiftLeft: 160,
    ShiftRight: 161,
    Backslash: 220,
    Comma: 188,
    Period: 190,
    Slash: 191,
    AltLeft: 164,
    AltRight: 165,
    Space: 32,
    CapsLock: 20,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    ArrowUp: 38,
    ArrowDown: 40,
    ArrowLeft: 37,
    ArrowRight: 39,
};
class T {
    connection;
    keyHandler;
    mouseHandler;
    connectHandler;
    grabAllowHandler;
    releaseHandler;
    disconnectHandler;
    pointerLockChangeHandler;
    _host;
    _streamKey;
    hostAsBigInt;
    sessionId = crypto.getRandomValues(new Uint32Array(1))[0];
    logger;
    isMouseCaptured = !1;
    isShutdown = !1;
    constructor(e, t, n) {
        ((this.connection = e),
            (this._host = t),
            (this._streamKey = n),
            (this.hostAsBigInt = BigInt(t)),
            (this.keyHandler = this._handleKeyEvent.bind(this)),
            (this.mouseHandler = this._handleMouseEvent.bind(this)),
            (this.connectHandler = this._handleConnect.bind(this)),
            (this.grabAllowHandler = this._handleGrabAllow.bind(this)),
            (this.releaseHandler = this._handleRelease.bind(this)),
            (this.disconnectHandler = this._dropController.bind(this)),
            (this.pointerLockChangeHandler = this._handlePointerLockChange.bind(this)),
            (this.logger = new f.A(`InputGuest(${t})`)),
            e.on(h.Connect, this.connectHandler),
            e.on(h.GrabAllow, this.grabAllowHandler),
            e.on(h.Drop, this.releaseHandler),
            e.on(h.Disconnect, this.disconnectHandler),
            e.isConnected && this._handleConnect());
    }
    get host() {
        return this._host;
    }
    _handleConnect() {
        this.connection.sendGrab(this.hostAsBigInt, this.sessionId);
    }
    _handleGrabAllow(e) {
        e === this.sessionId &&
            (document.addEventListener("keydown", this.keyHandler, !0),
            document.addEventListener("keyup", this.keyHandler, !0),
            this._captureMouse());
    }
    _handleKeyEvent(e) {
        (e.preventDefault(), this.isMouseCaptured && "Escape" === e.code)
            ? this._dropController()
            : null == m[e.code]
              ? this.logger.log(`Unhandled key code ${e.code}`)
              : this.connection.sendKey(this.sessionId, m[e.code], "keydown" === e.type);
    }
    _handleMouseEvent(e) {
        (e.preventDefault(),
            "mousemove" === e.type
                ? this.connection.sendMouseMove(this.sessionId, e.movementX, e.movementY)
                : this.connection.sendMouseButton(this.sessionId, e.button, "mousedown" === e.type));
    }
    _handlePointerLockChange() {
        null == document.pointerLockElement && this._dropController();
    }
    async _captureMouse() {
        try {
            await document.body.requestPointerLock({ unadjustedMovement: !0 });
        } catch (e) {
            await document.body.requestPointerLock();
        }
        this.isShutdown
            ? document.exitPointerLock()
            : (document.body.addEventListener("mousedown", this.mouseHandler, !0),
              document.body.addEventListener("mouseup", this.mouseHandler, !0),
              document.body.addEventListener("mousemove", this.mouseHandler, !0),
              document.addEventListener("pointerlockchange", this.pointerLockChangeHandler),
              (this.isMouseCaptured = !0));
    }
    _dropController() {
        this.isMouseCaptured && this._releaseController();
    }
    _handleRelease(e) {
        e === this.sessionId && this._releaseController();
    }
    _releaseController() {
        o.h.dispatch({
            type: "PASS_THE_CONTROLLER_UPDATE",
            streamKey: this._streamKey,
            isHost: !1,
            host: this._host,
            active: !1,
        });
    }
    _releaseMouse() {
        this.isMouseCaptured &&
            (document.removeEventListener("pointerlockchange", this.pointerLockChangeHandler),
            document.body.removeEventListener("mousedown", this.mouseHandler, !0),
            document.body.removeEventListener("mouseup", this.mouseHandler, !0),
            document.body.removeEventListener("mousemove", this.mouseHandler, !0),
            document.exitPointerLock(),
            (this.isMouseCaptured = !1));
    }
    shutdown() {
        ((this.isShutdown = !0),
            this.connection.sendDrop(this.sessionId),
            this._releaseMouse(),
            document.removeEventListener("keydown", this.keyHandler, !0),
            document.removeEventListener("keyup", this.keyHandler, !0),
            this.connection.off(h.Connect, this.connectHandler),
            this.connection.off(h.GrabAllow, this.grabAllowHandler),
            this.connection.off(h.Drop, this.releaseHandler),
            this.connection.off(h.Disconnect, this.disconnectHandler));
    }
}
var g = n(805048),
    S = n(719129);
let N = (0, n(945810).mj)({
    name: "2026-11-pass-the-controller",
    kind: "guild",
    defaultConfig: { enabled: !1, allowWrestling: !1 },
    variations: { 1: { enabled: !0, allowWrestling: !1 }, 2: { enabled: !0, allowWrestling: !0 } },
});
class C {
    pid;
    connection;
    guildId;
    onHolderChange;
    keyHandler;
    mouseButtonHandler;
    mouseMoveHandler;
    grabHandler;
    dropHandler;
    hook;
    holderSessionId = null;
    holderUserId = null;
    constructor(e, t, n, i) {
        ((this.pid = t),
            (this.connection = e),
            (this.guildId = n),
            (this.onHolderChange = i),
            (this.hook = null),
            this._connectHook(t),
            (this.keyHandler = this._handleKey.bind(this)),
            (this.mouseButtonHandler = this._handleMouseButton.bind(this)),
            (this.mouseMoveHandler = this._handleMouseMove.bind(this)),
            (this.grabHandler = this._handleGrab.bind(this)),
            (this.dropHandler = this._handleDrop.bind(this)),
            e.on(h.Key, this.keyHandler),
            e.on(h.MouseButton, this.mouseButtonHandler),
            e.on(h.MouseMove, this.mouseMoveHandler),
            e.on(h.Grab, this.grabHandler),
            e.on(h.Drop, this.dropHandler),
            e.setHosting(!0));
    }
    async _connectHook(e) {
        this.hook = await (0, S.Vz)(e, this._handleHookConnect.bind(this), () => {});
    }
    _handleHookConnect() {
        null != this.hook && this.hook.sendCommand(JSON.stringify({ message: "inject_input", inject: !0 }));
    }
    _handleGrab(e, t) {
        if (
            (null != this.holderSessionId &&
                e === this.holderUserId &&
                (this.connection.sendDrop(this.holderSessionId), (this.holderSessionId = null)),
            null != this.holderSessionId)
        ) {
            if (
                !(
                    null != this.guildId &&
                    N.getConfig({ guildId: this.guildId, location: "_handleGrab" }).allowWrestling
                )
            )
                return void this.connection.sendDrop(t);
            this.connection.sendDrop(this.holderSessionId);
        }
        ((this.holderSessionId = t),
            (this.holderUserId = e),
            this.connection.sendGrabAllow(t),
            this.onHolderChange((0, g.C)(e.toString())));
    }
    _handleDrop(e) {
        e === this.holderSessionId &&
            ((this.holderSessionId = null), (this.holderUserId = null), this.onHolderChange(null));
    }
    takeBackController() {
        null != this.holderSessionId &&
            (this.connection.sendDrop(this.holderSessionId),
            (this.holderSessionId = null),
            (this.holderUserId = null),
            this.onHolderChange(null));
    }
    _handleKey(e, t, n) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: "inject_key_event", keycode: t, down: n }));
    }
    _handleMouseButton(e, t, n) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: "inject_mousebutton_event", which: t, down: n }));
    }
    _handleMouseMove(e, t, n) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: "inject_mousemove_event", x: t, y: n }));
    }
    shutdown() {
        (null != this.holderSessionId && this.connection.sendDrop(this.holderSessionId),
            this.connection.setHosting(!1),
            this.connection.off(h.Key, this.keyHandler),
            this.connection.off(h.MouseButton, this.mouseButtonHandler),
            this.connection.off(h.MouseMove, this.mouseMoveHandler),
            this.connection.off(h.Grab, this.grabHandler),
            this.connection.off(h.Drop, this.dropHandler),
            null != this.hook &&
                (this.hook.sendCommand(JSON.stringify({ message: "inject_input", inject: !1 })),
                this.hook.destroy(),
                (this.hook = null)));
    }
}
var O = n(652215),
    R = n(55010);
let L = null,
    y = null,
    D = null,
    b = null,
    v = new Set();
function P(e, t, n) {
    return (0, d._z)({ streamType: null != t ? R.U4.GUILD : R.U4.CALL, guildId: t, channelId: n, ownerId: e });
}
function M(e) {
    e !== b && ((b = e), H.emitChange());
}
function U() {
    if (null != L) return L;
    let e = u.A.getRTCConnection();
    if (null == e) return null;
    let t = new p(e, c.default.getId());
    return (
        t.on(h.Disconnect, () => {
            L === t &&
                (null != y &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: y.streamKey,
                        isHost: !0,
                        host: c.default.getId(),
                        active: !1,
                    }),
                null != D &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: D.streamKey,
                        isHost: !1,
                        host: D.inputGuest.host,
                        active: !1,
                    }));
        }),
        t.connect(),
        (L = t)
    );
}
function w() {
    null != L && null == y && null == D && (L.close(), (L = null));
}
function G(e) {
    return y?.streamKey === e && (y.inputHost.shutdown(), (y = null), (b = null), w(), !0);
}
function x() {
    null != D &&
        (_.A.getRTCConnection(D.streamKey)?.setAvSyncEnabled(D.inputGuest.host, !0),
        D.inputGuest.shutdown(),
        (D = null));
}
function k(e) {
    return D?.streamKey === e && (x(), w(), !0);
}
function F(e) {
    let t = G(e),
        n = k(e);
    return t || n;
}
function B(e) {
    let t = v.delete(e),
        n = k(e);
    return t || n;
}
class V extends s.Ay.Store {
    initialize() {
        this.waitFor(c.default, u.A, _.A);
    }
    static displayName = "PassTheControllerStore";
    isSelfPassingController(e) {
        return y?.streamKey === e;
    }
    isStreamPassingController(e) {
        return v.has(e);
    }
    isSelfHoldingController(e) {
        return D?.streamKey === e;
    }
    getInputGuest(e) {
        return D?.streamKey === e ? D.inputGuest : null;
    }
    getControllerHolderId(e) {
        return y?.streamKey === e ? b : null;
    }
    getGuestStreamKey() {
        return D?.streamKey ?? null;
    }
    getGuestHostId(e) {
        return D?.streamKey === e ? D.inputGuest.host : null;
    }
    getHostStreamKeys() {
        return v;
    }
}
let H = new V(o.h, {
        CONNECTION_OPEN: function () {
            (v.clear(), (b = null));
        },
        PASS_THE_CONTROLLER_UPDATE: function (e) {
            let { streamKey: t, isHost: n, host: i, active: r } = e;
            return n
                ? r
                    ? (function (e) {
                          if (y?.streamKey === e) return !1;
                          let t = _.A.getStreamPid(e);
                          if (null == t) return !1;
                          let n = U();
                          return (
                              null != n &&
                              (y?.inputHost.shutdown(),
                              (b = null),
                              (y = { streamKey: e, inputHost: new C(n, t, (0, d.Iy)(e).guildId ?? null, M) }),
                              !0)
                          );
                      })(t)
                    : G(t)
                : r
                  ? (function (e, t) {
                        if (D?.streamKey === e) return !1;
                        let n = U();
                        return (
                            null != n &&
                            (x(),
                            _.A.getRTCConnection(e)?.setAvSyncEnabled(t, !1),
                            (D = { streamKey: e, inputGuest: new T(n, t, e) }),
                            !0)
                        );
                    })(t, i)
                  : k(t);
        },
        PASS_THE_CONTROLLER_TAKE_BACK: function (e) {
            if (y?.streamKey !== e.streamKey || null == b) return !1;
            y.inputHost.takeBackController();
        },
        STREAM_DELETE: function (e) {
            return D?.streamKey === e.streamKey && e.reason === O.H2B.USER_REQUESTED ? B(e.streamKey) : F(e.streamKey);
        },
        STREAM_START: function (e) {
            let { streamType: t, guildId: n, channelId: i } = e,
                r = (0, d._z)({ streamType: t, guildId: n, channelId: i, ownerId: c.default.getId() });
            return y?.streamKey === r && _.A.getStreamPid(r) !== y.inputHost.pid && G(r);
        },
        STREAM_STOP: function (e) {
            return F(e.streamKey);
        },
        RTC_CONNECTION_FLAGS: function (e) {
            let { flags: t, userId: n, guildId: i, channelId: r } = e,
                s = P(n, i, r);
            (0, a.Lt)(t, O.Ajs.PASS_THE_CONTROLLER_HOST) ? v.add(s) : B(s);
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, guildId: n, channelId: i, context: r } = e;
            return r === l.x.DEFAULT && (null != y && t === b && y.inputHost.takeBackController(), B(P(t, n, i)));
        },
        RTC_CONNECTION_STATE: function (e) {
            if (e.context !== l.x.DEFAULT || e.state !== O.S7L.DISCONNECTED || 0 === v.size) return !1;
            v.clear();
        },
    }),
    j = H;
