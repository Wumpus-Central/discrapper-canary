s.d(t, { A: () => x }), s(321073);
var n,
    i = s(627968),
    o = s(64700),
    r = s(695497),
    l = s.n(r),
    d = s(143236),
    a = s(723702),
    h = s(19575),
    c = s(350535),
    u = s(650583);
let p = [];
function m(e, t, s) {
    let n = +!(0, a.isWindows)();
    (e !== u.zY.MOUSE_BUTTON || s !== n) && p.forEach((n) => n._handleEvent(e, t, s));
}
class R extends d.EventEmitter {
    combo = [];
    constructor() {
        super(), p.push(this), 1 === p.length && h.Ay.setOnInputEventCallback(m);
    }
    destroy() {
        this.removeAllListeners(), 0 === (p = p.filter((e) => e !== this)).length && h.Ay.setOnInputEventCallback(null);
    }
    toString() {
        return (0, c.dI)(this.combo);
    }
    _handleEvent(e, t, s) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [n, i] = t;
                  return n !== e || i !== s;
              }))
            : (this.combo.push([e, s, (0, c._$)()]), this.emit("change", this));
    }
}
var g = s(503698),
    C = s.n(g),
    E = s(507392),
    f = s.n(E),
    D = s(735438),
    _ = s.n(D),
    v = s(187322),
    b = s(821609),
    N = s(235986),
    O = s(375708),
    I = s(598723),
    y = (((n = {}).DEFAULT = "DEFAULT"), (n.RECORDING = "RECORDING"), n);
let A = { DEFAULT: I.__invalid_default, RECORDING: I.oz };
class U extends o.PureComponent {
    _inputId = _().uniqueId("key-recorder-");
    _unregisterNativeRecorder = null;
    _mousedownMode = null;
    _inputRef = o.createRef();
    _containerRef = o.createRef();
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: s } = e;
        if (s === t) return;
        let { _inputRef: n } = this;
        if (null == n.current) return;
        let { activeElement: i } = document;
        "DEFAULT" === t && n.current === i && n.current.blur(),
            "RECORDING" === t && n.current !== i && n.current.focus();
    }
    setInputRef = (e) => {
        let { registerNativeRecorder: t, onChange: s } = this.props;
        if (((this._inputRef.current = e), this._unregisterNativeRecorder?.(), null != e))
            if (null != t && null != s)
                try {
                    this._unregisterNativeRecorder = t(e.id, s);
                } catch (e) {
                    this._unregisterNativeRecorder = null;
                }
            else null != s && (new (f())(e).handleKey = s);
    };
    handleClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { disabled: t, onClick: s, disableOnClickWhileRecording: n } = this.props;
        !0 === t || (n && "RECORDING" === this._mousedownMode) || s();
    };
    handleMouseDown = () => {
        this._mousedownMode = this.props.mode;
    };
    handleKeyDown = (e) => {
        "RECORDING" === this.props.mode &&
            e.key === u.dh.ESCAPE &&
            (e.preventDefault(), e.stopPropagation(), this.props.onClick());
    };
    render() {
        let e,
            { mode: t, value: s, disabled: n, trailingActions: o } = this.props,
            r = (0, c.dI)(s, !0);
        return (
            (e =
                "RECORDING" === t
                    ? O.intl.string(O.t.bmOri0)
                    : 0 === s.length
                      ? O.intl.string(O.t.co3wt9)
                      : O.intl.string(O.t.idFMvH)),
            (0, i.jsx)(v.vN, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, i.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: C()(I.Qm, A[t], { [I.Qz]: n }),
                    children: (0, i.jsxs)(N.A, {
                        className: I.Pp,
                        children: [
                            (0, i.jsx)(N.A.Child, {
                                className: I.bZ,
                                children: (0, i.jsx)("input", {
                                    id: this._inputId,
                                    placeholder: O.intl.string(O.t.nWRdnl),
                                    type: "text",
                                    ref: this.setInputRef,
                                    onKeyDown: this.handleKeyDown,
                                    readOnly: !0,
                                    value: r,
                                    disabled: "RECORDING" !== this.props.mode || n,
                                }),
                            }),
                            null != o && !1 !== o
                                ? (0, i.jsx)("div", {
                                      className: I.Sq,
                                      onClick: (e) => e.stopPropagation(),
                                      children: o,
                                  })
                                : (0, i.jsx)("div", {
                                      className: I.UD,
                                      children: (0, i.jsx)(b.$, {
                                          size: "sm",
                                          variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                                          text: e,
                                          onClick: (e) => {
                                              e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                          },
                                          disabled: n,
                                      }),
                                  }),
                        ],
                    }),
                }),
            })
        );
    }
}
let k = a.isPlatformEmbedded && null != h.Ay.getDiscordUtils().inputCaptureRegisterElement;
class w extends o.PureComponent {
    _input;
    gs;
    _mounted = !1;
    constructor(e) {
        super(e);
        const { defaultValue: t } = e;
        this.state = { codes: t, mode: y.DEFAULT };
    }
    componentDidMount() {
        this._mounted = !0;
    }
    componentWillUnmount() {
        (this._mounted = !1), this.cleanUp();
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue }),
            !0 === this.props.disabled && !0 !== e.disabled && this.state.mode === y.RECORDING && this.recordEnd();
    }
    cleanUp() {
        a.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { disabled: s, onChange: n } = this.props;
        if (!0 !== s && t === y.RECORDING) {
            if (e.some((e) => "esc" === (0, c.dI)([e]).toLowerCase())) return void this.recordEnd();
            null != n && n(e), this.setState({ codes: e });
        }
    }
    recordStart = () => {
        !0 !== this.props.disabled &&
            (a.isPlatformEmbedded && !k && ((this.gs = new R()), this.gs.on("change", this.handleGSChange)),
            this.setState({ mode: y.RECORDING }));
    };
    recordEnd = () => {
        this.cleanUp(), this.setState({ mode: y.DEFAULT });
    };
    toggleRecordMode = () => {
        this.state.mode === y.DEFAULT ? this.recordStart() : this.recordEnd();
    };
    handleComboKeys = (e, t, s) => {
        if ((s.preventDefault(), "keydown" === s.type)) {
            let e = t.map((e) => [u.zY.KEYBOARD_KEY, l()(e), u.g$.BROWSER]),
                { keyCode: n } = s;
            null ==
                e.find((e) => {
                    let [, t] = e;
                    return n === t;
                }) && e.push([u.zY.KEYBOARD_KEY, n, u.g$.BROWSER]),
                this.handleComboChange(e);
        }
    };
    handleGSChange = (e) => {
        if (!1 === this._mounted) return;
        let t = [...e.combo];
        this.handleComboChange(t);
    };
    handleNativeChange = (e) => {
        e.length > 0 && this.handleComboChange(e), this.recordEnd();
    };
    render() {
        let e,
            t,
            { codes: s, mode: n } = this.state,
            { disabled: o, trailingActions: r } = this.props;
        return (
            k
                ? ((t = h.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : a.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, i.jsx)(U, {
                disabled: o,
                value: s,
                mode: n,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: k,
                trailingActions: r,
            })
        );
    }
}
let x = w;
