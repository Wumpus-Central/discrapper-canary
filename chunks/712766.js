(n.d(t, { A: () => K }), n(938796));
var i,
    r,
    a = n(665260),
    s = n(855986),
    l = n(205693),
    o = n(73153),
    d = n(644727),
    c = n(652896),
    u = n(46653),
    _ = n(495867),
    E = n(753181),
    A = n(972347),
    f = n(507821),
    h = n(626584),
    I =
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
    p =
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
class m extends A.A {
    worker;
    userId;
    rtc;
    logger;
    webTransportAck;
    state = 0;
    constructor(e, t) {
        (super(),
            (this.userId = t),
            (this.logger = new h.A("InputConnection")),
            (this.rtc = e),
            (this.webTransportAck = this.onWebTransportAck.bind(this)),
            this.on(I.Connect, () => {
                this.state = 2;
            }),
            this.on(I.Disconnect, this.onDisconnect.bind(this)),
            this.on(I.Log, this.onLogMessage.bind(this)),
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
            this.rtc.on(f.q.WebTransportAck, this.webTransportAck),
            this.rtc.startWebTransport(),
            setTimeout(() => {
                1 === this.state &&
                    (this.logger.info("Timed out connecting"),
                    this.rtc.off(f.q.WebTransportAck, this.webTransportAck),
                    this.emit(I.Disconnect));
            }, 1e4));
    }
    onWebTransportAck(e, t) {
        this.rtc.off(f.q.WebTransportAck, this.webTransportAck);
        let n = this.rtc.getVoiceAddress();
        if (null == n) {
            (this.logger.info("Failed to get SFU address"), this.emit(I.Disconnect));
            return;
        }
        let i = `https://${n.address}:${n.port}/?token=${e}`;
        (this.logger.info(`Starting WebTransport connection to ${n.address}:${n.port}`),
            this.worker?.postMessage([p.Connect, i, t, this.userId]));
    }
    onLogMessage(e) {
        this.logger.log(e);
    }
    onDisconnect() {
        ((this.state = 0), this.worker?.terminate());
    }
    setHosting(e) {
        this.worker?.postMessage([p.SetHosting, e]);
    }
    sendKey(e, t, n) {
        this.worker?.postMessage([p.SendKey, e, t, n]);
    }
    sendMouseMove(e, t, n) {
        this.worker?.postMessage([p.SendMouseMove, e, t, n]);
    }
    sendMouseButton(e, t, n) {
        this.worker?.postMessage([p.SendMouseButton, e, t, n]);
    }
    sendGrab(e, t) {
        this.worker?.postMessage([p.SendGrab, e, t]);
    }
    sendGrabAllow(e) {
        this.worker?.postMessage([p.SendGrabAllow, e]);
    }
    sendDrop(e) {
        this.worker?.postMessage([p.SendDrop, e]);
    }
    close() {
        this.worker?.postMessage([p.Close]);
    }
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
let T = {
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
class g {
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
            (this.logger = new h.A(`InputGuest(${t})`)),
            e.on(I.Connect, this.connectHandler),
            e.on(I.GrabAllow, this.grabAllowHandler),
            e.on(I.Drop, this.releaseHandler),
            e.on(I.Disconnect, this.disconnectHandler),
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
            : null == T[e.code]
              ? this.logger.log(`Unhandled key code ${e.code}`)
              : this.connection.sendKey(this.sessionId, T[e.code], "keydown" === e.type);
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
            this.logger.log(`Sending drop to ${this._host}`),
            this.connection.sendDrop(this.sessionId),
            this._releaseMouse(),
            document.removeEventListener("keydown", this.keyHandler, !0),
            document.removeEventListener("keyup", this.keyHandler, !0),
            this.connection.off(I.Connect, this.connectHandler),
            this.connection.off(I.GrabAllow, this.grabAllowHandler),
            this.connection.off(I.Drop, this.releaseHandler),
            this.connection.off(I.Disconnect, this.disconnectHandler));
    }
}
var S = n(805048),
    N = n(719129),
    C = n(775456);
class O {
    pid;
    connection;
    guildId;
    onGrab;
    onDrop;
    keyHandler;
    mouseButtonHandler;
    mouseMoveHandler;
    grabHandler;
    dropHandler;
    logger;
    hook;
    holderSessionId = null;
    holderUserId = null;
    constructor(e, t, n, i, r) {
        ((this.pid = t),
            (this.connection = e),
            (this.guildId = n),
            (this.onGrab = i),
            (this.onDrop = r),
            (this.hook = null),
            this._connectHook(t),
            (this.keyHandler = this._handleKey.bind(this)),
            (this.mouseButtonHandler = this._handleMouseButton.bind(this)),
            (this.mouseMoveHandler = this._handleMouseMove.bind(this)),
            (this.grabHandler = this._handleGrab.bind(this)),
            (this.dropHandler = this._handleDrop.bind(this)),
            (this.logger = new h.A("InputHost")),
            e.on(I.Key, this.keyHandler),
            e.on(I.MouseButton, this.mouseButtonHandler),
            e.on(I.MouseMove, this.mouseMoveHandler),
            e.on(I.Grab, this.grabHandler),
            e.on(I.Drop, this.dropHandler),
            e.setHosting(!0));
    }
    async _connectHook(e) {
        this.hook = await (0, N.Vz)(e, this._handleHookConnect.bind(this), () => {});
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
                    C.A.getConfig({ guildId: this.guildId, location: "_handleGrab" }).allowWrestling
                )
            )
                return void this.connection.sendDrop(t);
            this.connection.sendDrop(this.holderSessionId);
        }
        ((this.holderSessionId = t),
            (this.holderUserId = e),
            this.connection.sendGrabAllow(t),
            this.onGrab((0, S.C)(e.toString())));
    }
    _handleDrop(e) {
        (this.logger.log(`Received drop for session ${e}`),
            e === this.holderSessionId && ((this.holderSessionId = null), (this.holderUserId = null), this.onDrop()));
    }
    takeBackController() {
        null != this.holderSessionId &&
            (this.connection.sendDrop(this.holderSessionId),
            (this.holderSessionId = null),
            (this.holderUserId = null),
            this.onDrop());
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
            this.connection.off(I.Key, this.keyHandler),
            this.connection.off(I.MouseButton, this.mouseButtonHandler),
            this.connection.off(I.MouseMove, this.mouseMoveHandler),
            this.connection.off(I.Grab, this.grabHandler),
            this.connection.off(I.Drop, this.dropHandler),
            null != this.hook &&
                (this.hook.sendCommand(JSON.stringify({ message: "inject_input", inject: !1 })),
                this.hook.destroy(),
                (this.hook = null)));
    }
}
var R = n(565886),
    L = n(652215),
    y = n(55010);
let D = null,
    b = null,
    v = null,
    P = null,
    M = new Set();
function U(e, t, n) {
    return (0, c._z)({ streamType: null != t ? y.U4.GUILD : y.U4.CALL, guildId: t, channelId: n, ownerId: e });
}
function w(e) {
    e !== P && ((P = e), Y.emitChange());
}
function G() {
    null != P && ((P = null), Y.emitChange());
}
function x() {
    if (null != D) return D;
    let e = _.A.getRTCConnection();
    if (null == e) return null;
    let t = new m(e, u.default.getId());
    return (
        t.on(I.Disconnect, () => {
            D === t &&
                (null != b &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: b.streamKey,
                        isHost: !0,
                        host: u.default.getId(),
                        active: !1,
                    }),
                null != v &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: v.streamKey,
                        isHost: !1,
                        host: v.inputGuest.host,
                        active: !1,
                    }));
        }),
        t.connect(),
        (D = t)
    );
}
function k() {
    null != D && null == b && null == v && (D.close(), (D = null));
}
function F(e) {
    return b?.streamKey === e && (b.inputHost.shutdown(), (b = null), (P = null), k(), !0);
}
function B() {
    null != v &&
        (E.A.getRTCConnection(v.streamKey)?.setAvSyncEnabled(v.inputGuest.host, !0),
        v.inputGuest.shutdown(),
        (v = null));
}
function V(e) {
    return v?.streamKey === e && (B(), k(), !0);
}
function H(e) {
    let t = F(e),
        n = V(e);
    return t || n;
}
function j(e) {
    let t = M.delete(e),
        n = V(e);
    return t || n;
}
class W extends s.Ay.Store {
    initialize() {
        this.waitFor(u.default, _.A, d.Ay, E.A);
    }
    static displayName = "PassTheControllerStore";
    isSelfPassingController(e) {
        return b?.streamKey === e;
    }
    isStreamPassingController(e) {
        return M.has(e);
    }
    isSelfHoldingController(e) {
        return v?.streamKey === e;
    }
    getInputGuest(e) {
        return v?.streamKey === e ? v.inputGuest : null;
    }
    getControllerHolderId(e) {
        return b?.streamKey === e ? P : null;
    }
    getGuestStreamKey() {
        return v?.streamKey ?? null;
    }
    getGuestHostId(e) {
        return v?.streamKey === e ? v.inputGuest.host : null;
    }
    getHostStreamKeys() {
        return M;
    }
}
let Y = new W(o.h, {
        CONNECTION_OPEN: function () {
            (M.clear(), (P = null));
        },
        PASS_THE_CONTROLLER_UPDATE: function (e) {
            let { streamKey: t, isHost: n, host: i, active: r } = e;
            return n
                ? r
                    ? (function (e) {
                          if (b?.streamKey === e) return !1;
                          let t = E.A.getStreamPid(e);
                          if (null == t || (0, R.X)(e)) return !1;
                          let n = x();
                          return (
                              null != n &&
                              (b?.inputHost.shutdown(),
                              (P = null),
                              (b = { streamKey: e, inputHost: new O(n, t, (0, c.Iy)(e).guildId ?? null, w, G) }),
                              !0)
                          );
                      })(t)
                    : F(t)
                : r
                  ? (function (e, t) {
                        if (v?.streamKey === e) return !1;
                        let n = x();
                        return (
                            null != n &&
                            (B(),
                            E.A.getRTCConnection(e)?.setAvSyncEnabled(t, !1),
                            (v = { streamKey: e, inputGuest: new g(n, t, e) }),
                            !0)
                        );
                    })(t, i)
                  : V(t);
        },
        PASS_THE_CONTROLLER_TAKE_BACK: function (e) {
            if (b?.streamKey !== e.streamKey || null == P) return !1;
            b.inputHost.takeBackController();
        },
        STREAM_DELETE: function (e) {
            return v?.streamKey === e.streamKey && e.reason === L.H2B.USER_REQUESTED ? j(e.streamKey) : H(e.streamKey);
        },
        STREAM_START: function (e) {
            let { streamType: t, guildId: n, channelId: i } = e,
                r = (0, c._z)({ streamType: t, guildId: n, channelId: i, ownerId: u.default.getId() });
            return b?.streamKey === r && E.A.getStreamPid(r) !== b.inputHost.pid && F(r);
        },
        STREAM_STOP: function (e) {
            return H(e.streamKey);
        },
        RTC_CONNECTION_FLAGS: function (e) {
            let { flags: t, userId: n, guildId: i, channelId: r } = e,
                s = U(n, i, r);
            (0, a.Lt)(t, L.Ajs.PASS_THE_CONTROLLER_HOST) ? M.add(s) : j(s);
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, guildId: n, channelId: i, context: r } = e;
            return r === l.x.DEFAULT && (null != b && t === P && b.inputHost.takeBackController(), j(U(t, n, i)));
        },
        RTC_CONNECTION_STATE: function (e) {
            if (e.context !== l.x.DEFAULT || e.state !== L.S7L.DISCONNECTED || 0 === M.size) return !1;
            M.clear();
        },
    }),
    K = Y;
