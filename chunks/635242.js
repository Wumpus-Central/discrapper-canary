n.d(t, { A: () => L }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(695497),
    r = n.n(a),
    o = n(143236),
    d = n(723702),
    u = n(19575),
    c = n(350535),
    g = n(650583);
let _ = [],
    m = (e, t, n) => {
        let i = +!(0, d.isWindows)();
        (e !== g.zY.MOUSE_BUTTON || n !== i) && _.forEach((i) => i._handleEvent(e, t, n));
    };
class h extends o.EventEmitter {
    combo = [];
    constructor() {
        super(), _.push(this), 1 === _.length && u.Ay.setOnInputEventCallback(m);
    }
    destroy() {
        this.removeAllListeners(), 0 === (_ = _.filter((e) => e !== this)).length && u.Ay.setOnInputEventCallback(null);
    }
    toString() {
        return (0, c.dI)(this.combo);
    }
    _handleEvent(e, t, n) {
        0 === t
            ? (this.combo = this.combo.filter((t) => {
                  let [i, l] = t;
                  return i !== e || l !== n;
              }))
            : (this.combo.push([e, n, (0, c._$)()]), this.emit("change", this));
    }
}
var A = n(503698),
    p = n.n(A),
    E = n(507392),
    T = n.n(E),
    S = n(735438),
    x = n.n(S),
    f = n(187322),
    b = n(821609),
    N = n(235986),
    C = n(985018),
    I = n(598723),
    v = (((i = {}).DEFAULT = "DEFAULT"), (i.RECORDING = "RECORDING"), i);
let y = { DEFAULT: I.__invalid_default, RECORDING: I.oz };
class j extends s.PureComponent {
    _inputId = x().uniqueId("key-recorder-");
    _unregisterNativeRecorder = null;
    _mousedownMode = null;
    _inputRef = s.createRef();
    _containerRef = s.createRef();
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (n === t) return;
        let { _inputRef: i } = this;
        if (null == i.current) return;
        let { activeElement: l } = document;
        "DEFAULT" === t && i.current === l && i.current.blur(),
            "RECORDING" === t && i.current !== l && i.current.focus();
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
            else null != n && (new (T())(e).handleKey = n);
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
            { mode: t, value: n, disabled: i } = this.props,
            s = (0, c.dI)(n, !0);
        return (
            (e =
                "RECORDING" === t
                    ? C.intl.string(C.t.bmOri0)
                    : 0 === n.length
                      ? C.intl.string(C.t.co3wt9)
                      : C.intl.string(C.t.idFMvH)),
            (0, l.jsx)(f.vN, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, l.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: p()(I.Qm, y[t], { [I.Qz]: i }),
                    children: (0, l.jsxs)(N.A, {
                        className: I.Pp,
                        children: [
                            (0, l.jsx)(N.A.Child, {
                                className: I.bZ,
                                children: (0, l.jsx)("input", {
                                    id: this._inputId,
                                    placeholder: C.intl.string(C.t.nWRdnl),
                                    type: "text",
                                    ref: this.setInputRef,
                                    readOnly: !0,
                                    value: s,
                                    disabled: "RECORDING" !== this.props.mode || i,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: I.UD,
                                children: (0, l.jsx)(b.$, {
                                    size: "sm",
                                    variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                                    text: e,
                                    onClick: (e) => {
                                        e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                    },
                                    disabled: i,
                                }),
                            }),
                        ],
                    }),
                }),
            })
        );
    }
}
let O = d.isPlatformEmbedded && null != u.Ay.getDiscordUtils().inputCaptureRegisterElement;
class R extends s.PureComponent {
    _input;
    gs;
    _mounted = !1;
    constructor(e) {
        super(e);
        const { defaultValue: t } = e;
        this.state = { codes: t, mode: v.DEFAULT };
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
        d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { onChange: n } = this.props;
        t === v.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    recordStart = () => {
        d.isPlatformEmbedded && !O && ((this.gs = new h()), this.gs.on("change", this.handleGSChange)),
            this.setState({ mode: v.RECORDING });
    };
    recordEnd = () => {
        this.cleanUp(), this.setState({ mode: v.DEFAULT });
    };
    toggleRecordMode = () => {
        this.state.mode === v.DEFAULT ? this.recordStart() : this.recordEnd();
    };
    handleComboKeys = (e, t, n) => {
        if ((n.preventDefault(), "keydown" === n.type)) {
            let e = t.map((e) => [g.zY.KEYBOARD_KEY, r()(e), g.g$.BROWSER]),
                { keyCode: i } = n;
            null ==
                e.find((e) => {
                    let [, t] = e;
                    return i === t;
                }) && e.push([g.zY.KEYBOARD_KEY, i, g.g$.BROWSER]),
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
            { codes: n, mode: i } = this.state,
            { disabled: s } = this.props;
        return (
            O
                ? ((t = u.Ay.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : d.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, l.jsx)(j, {
                disabled: s,
                value: n,
                mode: i,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: O,
            })
        );
    }
}
let L = R;
