(s.d(t, { A: () => G }), s(321073));
var n,
    i = s(477900),
    r = s(582128),
    o = s(695497),
    l = s.n(o),
    d = s(143236),
    a = s(723702),
    h = s(253400),
    c = s(350535),
    u = s(650583);
let p = [];
function m(e, t, s) {
    let n = +!(0, a.uF)();
    (e !== u.zY.MOUSE_BUTTON || s !== n) && p.forEach((n) => n._handleEvent(e, t, s));
}
class g extends d.EventEmitter {
    combo = [];
    constructor() {
        (super(), p.push(this), 1 === p.length && h.Ay.setOnInputEventCallback(m));
    }
    destroy() {
        (this.removeAllListeners(),
            0 === (p = p.filter((e) => e !== this)).length && h.Ay.setOnInputEventCallback(null));
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
var R = s(503698),
    C = s.n(R),
    E = s(507392),
    f = s.n(E),
    D = s(435558),
    v = s.n(D),
    _ = s(559106),
    N = s(475358),
    b = s(821609),
    I = s(235986),
    O = s(792996),
    y = s(317070),
    k = (((n = {}).DEFAULT = "DEFAULT"), (n.RECORDING = "RECORDING"), n);
let A = { DEFAULT: y.__invalid_default, RECORDING: y.oz };
class U extends r.PureComponent {
    _inputId = v().uniqueId("key-recorder-");
    _unregisterNativeRecorder = null;
    _mousedownMode = null;
    _inputRef = r.createRef();
    _containerRef = r.createRef();
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
        ("DEFAULT" === t && n.current === i && n.current.blur(),
            "RECORDING" === t && n.current !== i && n.current.focus());
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
        (e.stopPropagation(), e.preventDefault());
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
            { mode: t, value: s, disabled: n, trailingActions: r, keycaps: o } = this.props,
            l = (0, c.dI)(s, !0),
            d = !0 === o && s.length > 0;
        e =
            "RECORDING" === t
                ? O.intl.string(O.t.bmOri0)
                : 0 === s.length
                  ? O.intl.string(O.t.co3wt9)
                  : O.intl.string(O.t.idFMvH);
        let a = (0, i.jsx)(I.A.Child, {
            className: C()(y.bZ, { [y.N7]: d }),
            children: (0, i.jsx)("input", {
                id: this._inputId,
                placeholder: O.intl.string(O.t.nWRdnl),
                type: "text",
                ref: this.setInputRef,
                onKeyDown: this.handleKeyDown,
                readOnly: !0,
                value: l,
                disabled: "RECORDING" !== this.props.mode || n,
            }),
        });
        return (0, i.jsx)(_.vN, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, i.jsx)("div", {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: C()(y.Qm, A[t], { [y.Qz]: n }),
                children: (0, i.jsxs)(I.A, {
                    className: y.Pp,
                    children: [
                        d
                            ? (0, i.jsxs)("div", {
                                  className: y.F9,
                                  children: [
                                      a,
                                      (0, i.jsx)("div", {
                                          className: y.LZ,
                                          "aria-hidden": !0,
                                          children: (0, i.jsx)(N.e, { shortcut: s.map((e) => (0, c.dI)([e], !0)) }),
                                      }),
                                  ],
                              })
                            : a,
                        null != r && !1 !== r
                            ? (0, i.jsx)("div", { className: y.Sq, onClick: (e) => e.stopPropagation(), children: r })
                            : (0, i.jsx)("div", {
                                  className: y.UD,
                                  children: (0, i.jsx)(b.$, {
                                      size: "sm",
                                      variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                                      text: e,
                                      onClick: (e) => {
                                          (e.stopPropagation(), e.preventDefault(), this.handleClick(e));
                                      },
                                      disabled: n,
                                  }),
                              }),
                    ],
                }),
            }),
        });
    }
}
let x = a.isPlatformEmbedded && null != h.Ay.getDiscordUtils().inputCaptureRegisterElement;
class w extends r.PureComponent {
    gs = null;
    _mounted = !1;
    constructor(e) {
        super(e);
        let { defaultValue: t } = e;
        this.state = { codes: t, mode: k.DEFAULT };
    }
    componentDidMount() {
        this._mounted = !0;
    }
    componentWillUnmount() {
        ((this._mounted = !1), this.cleanUp());
    }
    componentDidUpdate(e) {
        (this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue }),
            !0 === this.props.disabled && !0 !== e.disabled && this.state.mode === k.RECORDING && this.recordEnd());
    }
    cleanUp() {
        a.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { disabled: s, onChange: n } = this.props;
        if (!0 !== s && t === k.RECORDING) {
            if (e.some((e) => "esc" === (0, c.dI)([e]).toLowerCase())) return void this.recordEnd();
            (null != n && n(e), this.setState({ codes: e }));
        }
    }
    recordStart = () => {
        !0 !== this.props.disabled &&
            (a.isPlatformEmbedded && !x && ((this.gs = new g()), this.gs.on("change", this.handleGSChange)),
            this.setState({ mode: k.RECORDING }));
    };
    recordEnd = () => {
        (this.cleanUp(), this.setState({ mode: k.DEFAULT }));
    };
    toggleRecordMode = () => {
        this.state.mode === k.DEFAULT ? this.recordStart() : this.recordEnd();
    };
    handleComboKeys = (e, t, s) => {
        if ((s.preventDefault(), "keydown" === s.type)) {
            let e = t.map((e) => [u.zY.KEYBOARD_KEY, l()(e), u.g$.BROWSER]),
                { keyCode: n } = s;
            (null ==
                e.find((e) => {
                    let [, t] = e;
                    return n === t;
                }) && e.push([u.zY.KEYBOARD_KEY, n, u.g$.BROWSER]),
                this.handleComboChange(e));
        }
    };
    handleGSChange = (e) => {
        if (!1 === this._mounted) return;
        let t = [...e.combo];
        this.handleComboChange(t);
    };
    handleNativeChange = (e) => {
        (e.length > 0 && this.handleComboChange(e), this.recordEnd());
    };
    render() {
        let e,
            t,
            { codes: s, mode: n } = this.state,
            { disabled: r, trailingActions: o, keycaps: l } = this.props;
        return (
            x
                ? ((t = h.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : a.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, i.jsx)(U, {
                disabled: r,
                value: s,
                mode: n,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: x,
                trailingActions: o,
                keycaps: l,
            })
        );
    }
}
let G = w;
