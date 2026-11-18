(n.d(t, { A: () => q }), n(938796));
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
        (i.MouseWheel = "mouse-wheel"),
        (i.ControllerButton = "controller-button"),
        (i.ControllerStick = "controller-stick"),
        (i.ControllerTrigger = "controller-trigger"),
        (i.ControllerPlug = "controller-plug"),
        (i.Grab = "grab"),
        (i.GrabAllow = "grab-allow"),
        (i.Drop = "drop"),
        (i.Log = "log"),
        i),
    p =
        (((r = {}).Connect = "connect"),
        (r.SendKey = "sendKey"),
        (r.SendMouseMove = "sendMouseMove"),
        (r.SendMouseWheel = "sendMouseWheel"),
        (r.SendMouseButton = "sendMouseButton"),
        (r.SendControllerButton = "sendControllerButton"),
        (r.SendControllerStick = "sendControllerStick"),
        (r.SendControllerTrigger = "sendControllerTrigger"),
        (r.SendControllerPlug = "sendControllerPlug"),
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
    sendMouseWheel(e, t) {
        this.worker?.postMessage([p.SendMouseWheel, e, t]);
    }
    sendMouseMove(e, t, n) {
        this.worker?.postMessage([p.SendMouseMove, e, t, n]);
    }
    sendMouseButton(e, t, n) {
        this.worker?.postMessage([p.SendMouseButton, e, t, n]);
    }
    sendControllerButton(e, t, n) {
        this.worker?.postMessage([p.SendControllerButton, e, t, n]);
    }
    sendControllerStick(e, t, n, i) {
        this.worker?.postMessage([p.SendControllerStick, e, t, n, i]);
    }
    sendControllerTrigger(e, t, n) {
        this.worker?.postMessage([p.SendControllerTrigger, e, t, n]);
    }
    sendControllerPlug(e, t) {
        this.worker?.postMessage([p.SendControllerPlug, e, t]);
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
let g = {
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
    },
    T = [12, 13, 14, 15, 8, 9, null, null, 5, 4, 6, 7, 0, 1, 2, 3],
    S = 1e3 / 120;
function N(e) {
    return Math.max(-32768, Math.min(32767, Math.round((e ?? 0) * 32767)));
}
function C(e) {
    return Math.max(0, Math.min(255, Math.round((e?.value ?? 0) * 255)));
}
class O {
    connection;
    keyHandler;
    mouseHandler;
    connectHandler;
    grabAllowHandler;
    releaseHandler;
    disconnectHandler;
    pointerLockChangeHandler;
    gamepadConnectedHandler;
    gamepadDisconnectedHandler;
    gamepadPollHandler;
    _host;
    _streamKey;
    hostAsBigInt;
    sessionId = crypto.getRandomValues(new Uint32Array(1))[0];
    logger;
    isMouseCaptured = !1;
    isGamepadCaptured = !1;
    isShutdown = !1;
    gamepadIndex = null;
    gamepadPollInterval = null;
    lastGamepadTimestamp = -1;
    lastButtons = [];
    lastLeftStick = [0, 0];
    lastRightStick = [0, 0];
    lastLeftTrigger = 0;
    lastRightTrigger = 0;
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
            (this.gamepadConnectedHandler = this._handleGamepadConnected.bind(this)),
            (this.gamepadDisconnectedHandler = this._handleGamepadDisconnected.bind(this)),
            (this.gamepadPollHandler = this._pollGamepad.bind(this)),
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
            this._captureMouse(),
            this._captureGamepad());
    }
    _handleKeyEvent(e) {
        (e.preventDefault(), this.isMouseCaptured && "Escape" === e.code)
            ? this._dropController()
            : null == g[e.code]
              ? this.logger.log(`Unhandled key code ${e.code}`)
              : this.connection.sendKey(this.sessionId, g[e.code], "keydown" === e.type);
    }
    _handleMouseEvent(e) {
        (e.preventDefault(),
            "mousemove" === e.type
                ? this.connection.sendMouseMove(this.sessionId, e.movementX, e.movementY)
                : "wheel" === e.type
                  ? this.connection.sendMouseWheel(this.sessionId, Math.round((-120 * e.deltaY) / 100))
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
              document.body.addEventListener("wheel", this.mouseHandler, !0),
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
            document.body.removeEventListener("wheel", this.mouseHandler, !0),
            document.exitPointerLock(),
            (this.isMouseCaptured = !1));
    }
    _captureGamepad() {
        this.isGamepadCaptured ||
            ((this.isGamepadCaptured = !0),
            window.addEventListener("gamepadconnected", this.gamepadConnectedHandler),
            window.addEventListener("gamepaddisconnected", this.gamepadDisconnectedHandler),
            this._findGamepad());
    }
    _findGamepad() {
        for (let e of navigator.getGamepads())
            if (null != e && e.connected && "standard" === e.mapping) return void this._plugGamepad(e);
    }
    _handleGamepadConnected(e) {
        if (null == this.gamepadIndex) {
            if ("standard" !== e.gamepad.mapping)
                return void this.logger.log(`Ignoring gamepad ${e.gamepad.id} with unsupported mapping`);
            this._plugGamepad(e.gamepad);
        }
    }
    _handleGamepadDisconnected(e) {
        e.gamepad.index === this.gamepadIndex && (this._unplugGamepad(), this._findGamepad());
    }
    _plugGamepad(e) {
        (this.logger.log(`Forwarding gamepad ${e.id}`),
            (this.gamepadIndex = e.index),
            (this.lastGamepadTimestamp = -1),
            (this.lastButtons = T.map(() => !1)),
            (this.lastLeftStick = [0, 0]),
            (this.lastRightStick = [0, 0]),
            (this.lastLeftTrigger = 0),
            (this.lastRightTrigger = 0),
            this.connection.sendControllerPlug(this.sessionId, !0),
            (this.gamepadPollInterval = setInterval(this.gamepadPollHandler, S)),
            this._pollGamepad());
    }
    _unplugGamepad() {
        (null != this.gamepadPollInterval &&
            (clearInterval(this.gamepadPollInterval), (this.gamepadPollInterval = null)),
            (this.gamepadIndex = null),
            this.connection.sendControllerPlug(this.sessionId, !1));
    }
    _pollGamepad() {
        if (null == this.gamepadIndex) return;
        let e = navigator.getGamepads()[this.gamepadIndex];
        if (null == e || e.timestamp === this.lastGamepadTimestamp) return;
        ((this.lastGamepadTimestamp = e.timestamp),
            T.forEach((t, n) => {
                if (null == t) return;
                let i = e.buttons[n]?.pressed ?? !1;
                i !== this.lastButtons[n] &&
                    ((this.lastButtons[n] = i), this.connection.sendControllerButton(this.sessionId, t, i));
            }));
        let t = C(e.buttons[6]);
        t !== this.lastLeftTrigger &&
            ((this.lastLeftTrigger = t), this.connection.sendControllerTrigger(this.sessionId, !0, t));
        let n = C(e.buttons[7]);
        n !== this.lastRightTrigger &&
            ((this.lastRightTrigger = n), this.connection.sendControllerTrigger(this.sessionId, !1, n));
        let i = N(e.axes[0]),
            r = N(-(e.axes[1] ?? 0));
        (i !== this.lastLeftStick[0] || r !== this.lastLeftStick[1]) &&
            ((this.lastLeftStick = [i, r]), this.connection.sendControllerStick(this.sessionId, !0, i, r));
        let a = N(e.axes[2]),
            s = N(-(e.axes[3] ?? 0));
        (a !== this.lastRightStick[0] || s !== this.lastRightStick[1]) &&
            ((this.lastRightStick = [a, s]), this.connection.sendControllerStick(this.sessionId, !1, a, s));
    }
    _releaseGamepad() {
        this.isGamepadCaptured &&
            (window.removeEventListener("gamepadconnected", this.gamepadConnectedHandler),
            window.removeEventListener("gamepaddisconnected", this.gamepadDisconnectedHandler),
            null != this.gamepadIndex && this._unplugGamepad(),
            (this.isGamepadCaptured = !1));
    }
    shutdown() {
        ((this.isShutdown = !0),
            this._releaseGamepad(),
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
var R = n(777636),
    L = n(719129),
    y = n(775456);
class D {
    pid;
    connection;
    guildId;
    onGrab;
    onDrop;
    keyHandler;
    mouseButtonHandler;
    mouseMoveHandler;
    mouseWheelHandler;
    gamepadPlugHandler;
    gamepadButtonHandler;
    gamepadStickHandler;
    gamepadTriggerHandler;
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
            (this.mouseWheelHandler = this._handleMouseWheel.bind(this)),
            (this.gamepadPlugHandler = this._handleGamepadPlug.bind(this)),
            (this.gamepadButtonHandler = this._handleGamepadButton.bind(this)),
            (this.gamepadStickHandler = this._handleGamepadStick.bind(this)),
            (this.gamepadTriggerHandler = this._handleGamepadTrigger.bind(this)),
            (this.grabHandler = this._handleGrab.bind(this)),
            (this.dropHandler = this._handleDrop.bind(this)),
            (this.logger = new h.A("InputHost")),
            e.on(I.Key, this.keyHandler),
            e.on(I.MouseButton, this.mouseButtonHandler),
            e.on(I.MouseMove, this.mouseMoveHandler),
            e.on(I.MouseWheel, this.mouseWheelHandler),
            e.on(I.ControllerPlug, this.gamepadPlugHandler),
            e.on(I.ControllerButton, this.gamepadButtonHandler),
            e.on(I.ControllerStick, this.gamepadStickHandler),
            e.on(I.ControllerTrigger, this.gamepadTriggerHandler),
            e.on(I.Grab, this.grabHandler),
            e.on(I.Drop, this.dropHandler),
            e.setHosting(!0));
    }
    async _connectHook(e) {
        this.hook = await (0, L.Vz)(e, this._handleHookConnect.bind(this), () => {});
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
                    y.A.getConfig({ guildId: this.guildId, location: "_handleGrab" }).allowWrestling
                )
            )
                return void this.connection.sendDrop(t);
            (this._handleGamepadPlug(this.holderSessionId, !1), this.connection.sendDrop(this.holderSessionId));
        }
        ((this.holderSessionId = t),
            (this.holderUserId = e),
            this.connection.sendGrabAllow(t),
            this.onGrab((0, R.C)(e.toString())));
    }
    _handleDrop(e) {
        (this.logger.log(`Received drop for session ${e}`),
            e === this.holderSessionId &&
                (this._handleGamepadPlug(this.holderSessionId, !1),
                (this.holderSessionId = null),
                (this.holderUserId = null),
                this.onDrop()));
    }
    takeBackController() {
        null != this.holderSessionId &&
            (this.connection.sendDrop(this.holderSessionId),
            this._handleGamepadPlug(this.holderSessionId, !1),
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
    _handleMouseWheel(e, t) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: "inject_mousewheel_event", delta: t }));
    }
    _handleGamepadPlug(e, t) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: t ? "inject_gamepad" : "release_gamepad", index: 0 }));
    }
    _handleGamepadButton(e, t, n) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: "inject_gamepad_button", index: 0, button: t, down: n }));
    }
    _handleGamepadStick(e, t, n, i) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: "inject_gamepad_stick", index: 0, x: n, y: i, isLeft: t }));
    }
    _handleGamepadTrigger(e, t, n) {
        null != this.hook &&
            e === this.holderSessionId &&
            this.hook.sendCommand(JSON.stringify({ message: "inject_gamepad_trigger", index: 0, val: n, isLeft: t }));
    }
    shutdown() {
        (null != this.holderSessionId && this.connection.sendDrop(this.holderSessionId),
            this.connection.setHosting(!1),
            this.connection.off(I.Key, this.keyHandler),
            this.connection.off(I.MouseButton, this.mouseButtonHandler),
            this.connection.off(I.MouseMove, this.mouseMoveHandler),
            this.connection.off(I.MouseWheel, this.mouseWheelHandler),
            this.connection.off(I.ControllerPlug, this.gamepadPlugHandler),
            this.connection.off(I.ControllerButton, this.gamepadButtonHandler),
            this.connection.off(I.ControllerStick, this.gamepadStickHandler),
            this.connection.off(I.ControllerTrigger, this.gamepadTriggerHandler),
            this.connection.off(I.Grab, this.grabHandler),
            this.connection.off(I.Drop, this.dropHandler),
            null != this.hook &&
                (this.hook.sendCommand(JSON.stringify({ message: "inject_input", inject: !1 })),
                this.hook.destroy(),
                (this.hook = null)));
    }
}
var b = n(565886),
    v = n(652215),
    P = n(55010);
let M = null,
    U = null,
    w = null,
    G = null,
    x = new Set();
function k(e, t, n) {
    return (0, c._z)({ streamType: null != t ? P.U4.GUILD : P.U4.CALL, guildId: t, channelId: n, ownerId: e });
}
function F(e) {
    e !== G && ((G = e), z.emitChange());
}
function B() {
    null != G && ((G = null), z.emitChange());
}
function V() {
    if (null != M) return M;
    let e = _.A.getRTCConnection();
    if (null == e) return null;
    let t = new m(e, u.default.getId());
    return (
        t.on(I.Disconnect, () => {
            M === t &&
                (null != U &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: U.streamKey,
                        isHost: !0,
                        host: u.default.getId(),
                        active: !1,
                    }),
                null != w &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: w.streamKey,
                        isHost: !1,
                        host: w.inputGuest.host,
                        active: !1,
                    }));
        }),
        t.connect(),
        (M = t)
    );
}
function H() {
    null != M && null == U && null == w && (M.close(), (M = null));
}
function j(e) {
    return U?.streamKey === e && (U.inputHost.shutdown(), (U = null), (G = null), H(), !0);
}
function W() {
    null != w &&
        (E.A.getRTCConnection(w.streamKey)?.setAvSyncEnabled(w.inputGuest.host, !0),
        w.inputGuest.shutdown(),
        (w = null));
}
function Y(e) {
    return w?.streamKey === e && (W(), H(), !0);
}
function K(e) {
    let t = j(e),
        n = Y(e);
    return t || n;
}
function $(e) {
    let t = x.delete(e),
        n = Y(e);
    return t || n;
}
class X extends s.Ay.Store {
    initialize() {
        this.waitFor(u.default, _.A, d.Ay, E.A);
    }
    static displayName = "PassTheControllerStore";
    isSelfPassingController(e) {
        return U?.streamKey === e;
    }
    isStreamPassingController(e) {
        return x.has(e);
    }
    isSelfHoldingController(e) {
        return w?.streamKey === e;
    }
    getInputGuest(e) {
        return w?.streamKey === e ? w.inputGuest : null;
    }
    getControllerHolderId(e) {
        return U?.streamKey === e ? G : null;
    }
    getGuestStreamKey() {
        return w?.streamKey ?? null;
    }
    getGuestHostId(e) {
        return w?.streamKey === e ? w.inputGuest.host : null;
    }
    getHostStreamKeys() {
        return x;
    }
}
let z = new X(o.h, {
        CONNECTION_OPEN: function () {
            (x.clear(), (G = null));
        },
        PASS_THE_CONTROLLER_UPDATE: function (e) {
            let { streamKey: t, isHost: n, host: i, active: r } = e;
            return n
                ? r
                    ? (function (e) {
                          if (U?.streamKey === e) return !1;
                          let t = E.A.getStreamPid(e);
                          if (null == t || (0, b.X)(e)) return !1;
                          let n = V();
                          return (
                              null != n &&
                              (U?.inputHost.shutdown(),
                              (G = null),
                              (U = { streamKey: e, inputHost: new D(n, t, (0, c.Iy)(e).guildId ?? null, F, B) }),
                              !0)
                          );
                      })(t)
                    : j(t)
                : r
                  ? (function (e, t) {
                        if (w?.streamKey === e) return !1;
                        let n = V();
                        return (
                            null != n &&
                            (W(),
                            E.A.getRTCConnection(e)?.setAvSyncEnabled(t, !1),
                            (w = { streamKey: e, inputGuest: new O(n, t, e) }),
                            !0)
                        );
                    })(t, i)
                  : Y(t);
        },
        PASS_THE_CONTROLLER_TAKE_BACK: function (e) {
            if (U?.streamKey !== e.streamKey || null == G) return !1;
            U.inputHost.takeBackController();
        },
        STREAM_DELETE: function (e) {
            return w?.streamKey === e.streamKey && e.reason === v.H2B.USER_REQUESTED ? $(e.streamKey) : K(e.streamKey);
        },
        STREAM_START: function (e) {
            let { streamType: t, guildId: n, channelId: i } = e,
                r = (0, c._z)({ streamType: t, guildId: n, channelId: i, ownerId: u.default.getId() });
            return U?.streamKey === r && E.A.getStreamPid(r) !== U.inputHost.pid && j(r);
        },
        STREAM_STOP: function (e) {
            return K(e.streamKey);
        },
        RTC_CONNECTION_FLAGS: function (e) {
            let { flags: t, userId: n, guildId: i, channelId: r } = e,
                s = k(n, i, r);
            (0, a.Lt)(t, v.Ajs.PASS_THE_CONTROLLER_HOST) ? x.add(s) : $(s);
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, guildId: n, channelId: i, context: r } = e;
            return r === l.x.DEFAULT && (null != U && t === G && U.inputHost.takeBackController(), $(k(t, n, i)));
        },
        RTC_CONNECTION_STATE: function (e) {
            if (e.context !== l.x.DEFAULT || e.state !== v.S7L.DISCONNECTED || 0 === x.size) return !1;
            x.clear();
        },
    }),
    q = z;
