(n.d(t, { A: () => J }), n(938796));
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
    E = n(753181);
n(321073);
var A = n(972347),
    f = n(626584),
    h = n(654186),
    I = n(182667),
    p =
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
    m =
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
class g extends A.A {
    lease;
    transport;
    detach = [];
    logger = new f.A("InputConnection");
    hosting = !1;
    closed = !1;
    constructor(e, t) {
        var n;
        (super(), (n = this), (this.lease = (0, I.i)(e, t)), (this.transport = this.lease.connection));
        let i = () => this.setHosting(this.hosting);
        for (let e of (this.transport.on(h.I.Connect, i),
        this.detach.push(() => this.transport.off(h.I.Connect, i)),
        this.on(p.Log, (e) => this.logger.log(e)),
        Object.values(p)))
            this.forward(e);
        let r = () => this.logger.info("Failed to get SFU address"),
            a = (e, t) => this.logger.info(`Starting WebTransport connection to ${e}:${t}`),
            s = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                return n.logger.log(t);
            },
            l = () => this.logger.info("Timed out connecting"),
            o = (e) => this.emit(p.Log, `awaiting read with size ${e}`);
        (this.transport.on(h.I.Failure, s),
            this.transport.on(h.I.Timeout, l),
            this.transport.on(h.I.ReadStarted, o),
            this.detach.push(() => this.transport.off(h.I.Failure, s)),
            this.detach.push(() => this.transport.off(h.I.Timeout, l)),
            this.detach.push(() => this.transport.off(h.I.ReadStarted, o)),
            this.transport.on(h.I.MissingAddress, r),
            this.transport.on(h.I.Starting, a),
            this.detach.push(() => this.transport.off(h.I.MissingAddress, r)),
            this.detach.push(() => this.transport.off(h.I.Starting, a)));
    }
    forward(e) {
        var t = this;
        let n = function () {
            for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            return t.emit(e, ...i);
        };
        (this.transport.on(e, n), this.detach.push(() => this.transport.off(e, n)));
    }
    get isConnected() {
        return this.transport.isConnected;
    }
    connect() {
        this.transport.connect();
    }
    setHosting(e) {
        this.closed || ((this.hosting = e), this.transport.send(m.SetHosting, e));
    }
    sendKey(e, t, n) {
        this.transport.send(m.SendKey, e, t, n);
    }
    sendMouseWheel(e, t) {
        this.transport.send(m.SendMouseWheel, e, t);
    }
    sendMouseMove(e, t, n) {
        this.transport.send(m.SendMouseMove, e, t, n);
    }
    sendMouseButton(e, t, n) {
        this.transport.send(m.SendMouseButton, e, t, n);
    }
    sendControllerButton(e, t, n) {
        this.transport.send(m.SendControllerButton, e, t, n);
    }
    sendControllerStick(e, t, n, i) {
        this.transport.send(m.SendControllerStick, e, t, n, i);
    }
    sendControllerTrigger(e, t, n) {
        this.transport.send(m.SendControllerTrigger, e, t, n);
    }
    sendControllerPlug(e, t) {
        this.transport.send(m.SendControllerPlug, e, t);
    }
    sendGrab(e, t) {
        this.transport.send(m.SendGrab, e, t);
    }
    sendGrabAllow(e) {
        this.transport.send(m.SendGrabAllow, e);
    }
    sendDrop(e) {
        this.transport.send(m.SendDrop, e);
    }
    close() {
        for (let e of ((this.closed = !0), this.detach.splice(0))) e();
        this.lease.release();
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
    },
    S = [12, 13, 14, 15, 8, 9, null, null, 5, 4, 6, 7, 0, 1, 2, 3],
    N = 1e3 / 120;
function C(e) {
    return Math.max(-32768, Math.min(32767, Math.round((e ?? 0) * 32767)));
}
function O(e) {
    return Math.max(0, Math.min(255, Math.round((e?.value ?? 0) * 255)));
}
class R {
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
            (this.logger = new f.A(`InputGuest(${t})`)),
            e.on(p.Connect, this.connectHandler),
            e.on(p.GrabAllow, this.grabAllowHandler),
            e.on(p.Drop, this.releaseHandler),
            e.on(p.Disconnect, this.disconnectHandler),
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
            : null == T[e.code]
              ? this.logger.log(`Unhandled key code ${e.code}`)
              : this.connection.sendKey(this.sessionId, T[e.code], "keydown" === e.type);
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
            (this.lastButtons = S.map(() => !1)),
            (this.lastLeftStick = [0, 0]),
            (this.lastRightStick = [0, 0]),
            (this.lastLeftTrigger = 0),
            (this.lastRightTrigger = 0),
            this.connection.sendControllerPlug(this.sessionId, !0),
            (this.gamepadPollInterval = setInterval(this.gamepadPollHandler, N)),
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
            S.forEach((t, n) => {
                if (null == t) return;
                let i = e.buttons[n]?.pressed ?? !1;
                i !== this.lastButtons[n] &&
                    ((this.lastButtons[n] = i), this.connection.sendControllerButton(this.sessionId, t, i));
            }));
        let t = O(e.buttons[6]);
        t !== this.lastLeftTrigger &&
            ((this.lastLeftTrigger = t), this.connection.sendControllerTrigger(this.sessionId, !0, t));
        let n = O(e.buttons[7]);
        n !== this.lastRightTrigger &&
            ((this.lastRightTrigger = n), this.connection.sendControllerTrigger(this.sessionId, !1, n));
        let i = C(e.axes[0]),
            r = C(-(e.axes[1] ?? 0));
        (i !== this.lastLeftStick[0] || r !== this.lastLeftStick[1]) &&
            ((this.lastLeftStick = [i, r]), this.connection.sendControllerStick(this.sessionId, !0, i, r));
        let a = C(e.axes[2]),
            s = C(-(e.axes[3] ?? 0));
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
            this.connection.off(p.Connect, this.connectHandler),
            this.connection.off(p.GrabAllow, this.grabAllowHandler),
            this.connection.off(p.Drop, this.releaseHandler),
            this.connection.off(p.Disconnect, this.disconnectHandler));
    }
}
var L = n(777636),
    y = n(719129),
    D = n(775456);
class b {
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
            (this.logger = new f.A("InputHost")),
            e.on(p.Key, this.keyHandler),
            e.on(p.MouseButton, this.mouseButtonHandler),
            e.on(p.MouseMove, this.mouseMoveHandler),
            e.on(p.MouseWheel, this.mouseWheelHandler),
            e.on(p.ControllerPlug, this.gamepadPlugHandler),
            e.on(p.ControllerButton, this.gamepadButtonHandler),
            e.on(p.ControllerStick, this.gamepadStickHandler),
            e.on(p.ControllerTrigger, this.gamepadTriggerHandler),
            e.on(p.Grab, this.grabHandler),
            e.on(p.Drop, this.dropHandler),
            e.setHosting(!0));
    }
    async _connectHook(e) {
        this.hook = await (0, y.Vz)(e, this._handleHookConnect.bind(this), () => {});
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
                    D.A.getConfig({ guildId: this.guildId, location: "_handleGrab" }).allowWrestling
                )
            )
                return void this.connection.sendDrop(t);
            (this._handleGamepadPlug(this.holderSessionId, !1), this.connection.sendDrop(this.holderSessionId));
        }
        ((this.holderSessionId = t),
            (this.holderUserId = e),
            this.connection.sendGrabAllow(t),
            this.onGrab((0, L.C)(e.toString())));
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
            this.connection.off(p.Key, this.keyHandler),
            this.connection.off(p.MouseButton, this.mouseButtonHandler),
            this.connection.off(p.MouseMove, this.mouseMoveHandler),
            this.connection.off(p.MouseWheel, this.mouseWheelHandler),
            this.connection.off(p.ControllerPlug, this.gamepadPlugHandler),
            this.connection.off(p.ControllerButton, this.gamepadButtonHandler),
            this.connection.off(p.ControllerStick, this.gamepadStickHandler),
            this.connection.off(p.ControllerTrigger, this.gamepadTriggerHandler),
            this.connection.off(p.Grab, this.grabHandler),
            this.connection.off(p.Drop, this.dropHandler),
            null != this.hook &&
                (this.hook.sendCommand(JSON.stringify({ message: "inject_input", inject: !1 })),
                this.hook.destroy(),
                (this.hook = null)));
    }
}
var v = n(565886),
    P = n(652215),
    M = n(55010);
let U = null,
    w = null,
    G = null,
    x = null,
    k = null,
    F = new Set();
function B(e, t, n) {
    return (0, c._z)({ streamType: null != t ? M.U4.GUILD : M.U4.CALL, guildId: t, channelId: n, ownerId: e });
}
function V(e) {
    e !== k && ((k = e), Q.emitChange());
}
function H() {
    null != k && ((k = null), Q.emitChange());
}
function j() {
    if (null != U) return U;
    let e = _.A.getRTCConnection();
    if (null == e) return null;
    let t = new g(e, u.default.getId());
    return (
        (w = () => {
            U === t &&
                (null != G &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: G.streamKey,
                        isHost: !0,
                        host: u.default.getId(),
                        active: !1,
                    }),
                null != x &&
                    o.h.dispatch({
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: x.streamKey,
                        isHost: !1,
                        host: x.inputGuest.host,
                        active: !1,
                    }));
        }),
        t.on(p.Disconnect, w),
        t.connect(),
        (U = t)
    );
}
function W() {
    null != U && null == G && null == x && (null != w && U.off(p.Disconnect, w), U.close(), (w = null), (U = null));
}
function Y(e) {
    return G?.streamKey === e && (G.inputHost.shutdown(), (G = null), (k = null), W(), !0);
}
function K() {
    null != x &&
        (E.A.getRTCConnection(x.streamKey)?.setAvSyncEnabled(x.inputGuest.host, !0),
        x.inputGuest.shutdown(),
        (x = null));
}
function $(e) {
    return x?.streamKey === e && (K(), W(), !0);
}
function X(e) {
    let t = Y(e),
        n = $(e);
    return t || n;
}
function z(e) {
    let t = F.delete(e),
        n = $(e);
    return t || n;
}
class q extends s.Ay.Store {
    initialize() {
        this.waitFor(u.default, _.A, d.Ay, E.A);
    }
    static displayName = "PassTheControllerStore";
    isSelfPassingController(e) {
        return G?.streamKey === e;
    }
    isStreamPassingController(e) {
        return F.has(e);
    }
    isSelfHoldingController(e) {
        return x?.streamKey === e;
    }
    getInputGuest(e) {
        return x?.streamKey === e ? x.inputGuest : null;
    }
    getControllerHolderId(e) {
        return G?.streamKey === e ? k : null;
    }
    getGuestStreamKey() {
        return x?.streamKey ?? null;
    }
    getGuestHostId(e) {
        return x?.streamKey === e ? x.inputGuest.host : null;
    }
    getHostStreamKeys() {
        return F;
    }
}
let Q = new q(o.h, {
        CONNECTION_OPEN: function () {
            (F.clear(), (k = null));
        },
        PASS_THE_CONTROLLER_UPDATE: function (e) {
            let { streamKey: t, isHost: n, host: i, active: r } = e;
            return n
                ? r
                    ? (function (e) {
                          if (G?.streamKey === e) return !1;
                          let t = E.A.getStreamPid(e);
                          if (null == t || (0, v.X)(e)) return !1;
                          let n = j();
                          return (
                              null != n &&
                              (G?.inputHost.shutdown(),
                              (k = null),
                              (G = { streamKey: e, inputHost: new b(n, t, (0, c.Iy)(e).guildId ?? null, V, H) }),
                              !0)
                          );
                      })(t)
                    : Y(t)
                : r
                  ? (function (e, t) {
                        if (x?.streamKey === e) return !1;
                        let n = j();
                        return (
                            null != n &&
                            (K(),
                            E.A.getRTCConnection(e)?.setAvSyncEnabled(t, !1),
                            (x = { streamKey: e, inputGuest: new R(n, t, e) }),
                            !0)
                        );
                    })(t, i)
                  : $(t);
        },
        PASS_THE_CONTROLLER_TAKE_BACK: function (e) {
            if (G?.streamKey !== e.streamKey || null == k) return !1;
            G.inputHost.takeBackController();
        },
        STREAM_DELETE: function (e) {
            return x?.streamKey === e.streamKey && e.reason === P.H2B.USER_REQUESTED ? z(e.streamKey) : X(e.streamKey);
        },
        STREAM_START: function (e) {
            let { streamType: t, guildId: n, channelId: i } = e,
                r = (0, c._z)({ streamType: t, guildId: n, channelId: i, ownerId: u.default.getId() });
            return G?.streamKey === r && E.A.getStreamPid(r) !== G.inputHost.pid && Y(r);
        },
        STREAM_STOP: function (e) {
            return X(e.streamKey);
        },
        RTC_CONNECTION_FLAGS: function (e) {
            let { flags: t, userId: n, guildId: i, channelId: r } = e,
                s = B(n, i, r);
            (0, a.Lt)(t, P.Ajs.PASS_THE_CONTROLLER_HOST) ? F.add(s) : z(s);
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, guildId: n, channelId: i, context: r } = e;
            return r === l.x.DEFAULT && (null != G && t === k && G.inputHost.takeBackController(), z(B(t, n, i)));
        },
        RTC_CONNECTION_STATE: function (e) {
            if (e.context !== l.x.DEFAULT || e.state !== P.S7L.DISCONNECTED || 0 === F.size) return !1;
            F.clear();
        },
    }),
    J = Q;
