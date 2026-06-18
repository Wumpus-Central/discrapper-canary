s.d(t, { A: () => w }), s(321073);
var n,
    i = s(627968),
    r = s(64700),
    o = s(695497),
    l = s.n(o),
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
class g extends d.EventEmitter {
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
var R = s(503698),
    C = s.n(R),
    E = s(507392),
    f = s.n(E),
    _ = s(735438),
    D = s.n(_),
    b = s(187322),
    v = s(821609),
    N = s(235986),
    O = s(375708),
    I = s(598723),
    U = (((n = {}).DEFAULT = "DEFAULT"), (n.RECORDING = "RECORDING"), n);
let A = { DEFAULT: I.__invalid_default, RECORDING: I.oz };
class y extends r.PureComponent {
    _inputId = D().uniqueId("key-recorder-");
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
    render() {
        let e,
            { mode: t, value: s, disabled: n, trailingActions: r } = this.props,
            o = (0, c.dI)(s, !0);
        return (
            (e =
                "RECORDING" === t
                    ? O.intl.string(O.t.bmOri0)
                    : 0 === s.length
                      ? O.intl.string(O.t.co3wt9)
                      : O.intl.string(O.t.idFMvH)),
            (0, i.jsx)(b.vN, {
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
                                    readOnly: !0,
                                    value: o,
                                    disabled: "RECORDING" !== this.props.mode || n,
                                }),
                            }),
                            null != r && !1 !== r
                                ? (0, i.jsx)("div", {
                                      className: I.Sq,
                                      onClick: (e) => e.stopPropagation(),
                                      children: r,
                                  })
                                : (0, i.jsx)("div", {
                                      className: I.UD,
                                      children: (0, i.jsx)(v.$, {
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
class x extends r.PureComponent {
    _input;
    gs;
    _mounted = !1;
    constructor(e) {
        super(e);
        const { defaultValue: t } = e;
        this.state = { codes: t, mode: U.DEFAULT };
    }
    componentDidMount() {
        this._mounted = !0;
    }
    componentWillUnmount() {
        (this._mounted = !1), this.cleanUp();
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue }),
            !0 === this.props.disabled && !0 !== e.disabled && this.state.mode === U.RECORDING && this.recordEnd();
    }
    cleanUp() {
        a.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { disabled: s, onChange: n } = this.props;
        !0 !== s && t === U.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    recordStart = () => {
        !0 !== this.props.disabled &&
            (a.isPlatformEmbedded && !k && ((this.gs = new g()), this.gs.on("change", this.handleGSChange)),
            this.setState({ mode: U.RECORDING }));
    };
    recordEnd = () => {
        this.cleanUp(), this.setState({ mode: U.DEFAULT });
    };
    toggleRecordMode = () => {
        this.state.mode === U.DEFAULT ? this.recordStart() : this.recordEnd();
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
            { disabled: r, trailingActions: o } = this.props;
        return (
            k
                ? ((t = h.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : a.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, i.jsx)(y, {
                disabled: r,
                value: s,
                mode: n,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: k,
                trailingActions: o,
            })
        );
    }
}
let w = x;
