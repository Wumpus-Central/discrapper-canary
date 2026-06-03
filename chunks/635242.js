n.d(t, { A: () => w }), n(321073);
var s,
    i = n(627968),
    r = n(64700),
    o = n(695497),
    l = n.n(o),
    d = n(143236),
    a = n(723702),
    h = n(19575),
    u = n(350535),
    c = n(650583);
let p = [],
    m = (e, t, n) => {
        let s = +!(0, a.isWindows)();
        (e !== c.zY.MOUSE_BUTTON || n !== s) && p.forEach((s) => s._handleEvent(e, t, n));
    };
class g extends d.EventEmitter {
    combo = [];
    constructor() {
        super(), p.push(this), 1 === p.length && h.Ay.setOnInputEventCallback(m);
    }
    destroy() {
        this.removeAllListeners(), 0 === (p = p.filter((e) => e !== this)).length && h.Ay.setOnInputEventCallback(null);
    }
    toString() {
        return (0, u.dI)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [s, i] = t;
                  return s !== e || i !== n;
              }))
            : (this.combo.push([e, n, (0, u._$)()]), this.emit("change", this));
    }
}
var R = n(503698),
    C = n.n(R),
    E = n(507392),
    f = n.n(E),
    _ = n(735438),
    D = n.n(_),
    v = n(187322),
    b = n(821609),
    N = n(235986),
    O = n(375708),
    I = n(598723),
    U = (((s = {}).DEFAULT = "DEFAULT"), (s.RECORDING = "RECORDING"), s);
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
            { mode: n } = e;
        if (n === t) return;
        let { _inputRef: s } = this;
        if (null == s.current) return;
        let { activeElement: i } = document;
        "DEFAULT" === t && s.current === i && s.current.blur(),
            "RECORDING" === t && s.current !== i && s.current.focus();
    }
    setInputRef = (e) => {
        let { registerNativeRecorder: t, onChange: n } = this.props;
        if (((this._inputRef.current = e), this._unregisterNativeRecorder?.(), null != e))
            if (null != t && null != n)
                try {
                    this._unregisterNativeRecorder = t(e.id, n);
                } catch (e) {
                    this._unregisterNativeRecorder = null;
                }
            else null != n && (new (f())(e).handleKey = n);
    };
    handleClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t, disableOnClickWhileRecording: n } = this.props;
        (n && "RECORDING" === this._mousedownMode) || t();
    };
    handleMouseDown = () => {
        this._mousedownMode = this.props.mode;
    };
    render() {
        let e,
            { mode: t, value: n, disabled: s, trailingActions: r } = this.props,
            o = (0, u.dI)(n, !0);
        return (
            (e =
                "RECORDING" === t
                    ? O.intl.string(O.t.bmOri0)
                    : 0 === n.length
                      ? O.intl.string(O.t.co3wt9)
                      : O.intl.string(O.t.idFMvH)),
            (0, i.jsx)(v.vN, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, i.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: C()(I.Qm, A[t], { [I.Qz]: s }),
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
                                    disabled: "RECORDING" !== this.props.mode || s,
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
                                      children: (0, i.jsx)(b.$, {
                                          size: "sm",
                                          variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                                          text: e,
                                          onClick: (e) => {
                                              e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                          },
                                          disabled: s,
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
        this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue });
    }
    cleanUp() {
        a.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { onChange: n } = this.props;
        t === U.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    recordStart = () => {
        a.isPlatformEmbedded && !k && ((this.gs = new g()), this.gs.on("change", this.handleGSChange)),
            this.setState({ mode: U.RECORDING });
    };
    recordEnd = () => {
        this.cleanUp(), this.setState({ mode: U.DEFAULT });
    };
    toggleRecordMode = () => {
        this.state.mode === U.DEFAULT ? this.recordStart() : this.recordEnd();
    };
    handleComboKeys = (e, t, n) => {
        if ((n.preventDefault(), "keydown" === n.type)) {
            let e = t.map((e) => [c.zY.KEYBOARD_KEY, l()(e), c.g$.BROWSER]),
                { keyCode: s } = n;
            null ==
                e.find((e) => {
                    let [, t] = e;
                    return s === t;
                }) && e.push([c.zY.KEYBOARD_KEY, s, c.g$.BROWSER]),
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
            { codes: n, mode: s } = this.state,
            { disabled: r, trailingActions: o } = this.props;
        return (
            k
                ? ((t = h.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : a.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, i.jsx)(y, {
                disabled: r,
                value: n,
                mode: s,
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
