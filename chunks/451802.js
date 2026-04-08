n.d(t, { A: () => f, E: () => h });
var i,
    s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(507392),
    d = n.n(o),
    c = n(735438),
    u = n.n(c),
    m = n(397927),
    g = n(235986),
    _ = n(350535),
    x = n(985018),
    A = n(61826),
    h = (((i = {}).DEFAULT = "DEFAULT"), (i.RECORDING = "RECORDING"), i);
let p = { DEFAULT: A.__invalid_default, RECORDING: A.oz };
class T extends l.PureComponent {
    _inputId = u().uniqueId("key-recorder-");
    _unregisterNativeRecorder = null;
    _mousedownMode = null;
    _inputRef = l.createRef();
    _containerRef = l.createRef();
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (n === t) return;
        let { _inputRef: i } = this;
        if (null == i.current) return;
        let { activeElement: s } = document;
        "DEFAULT" === t && i.current === s && i.current.blur(),
            "RECORDING" === t && i.current !== s && i.current.focus();
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
            else null != n && (new (d())(e).handleKey = n);
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
            l = (0, _.dI)(n, !0);
        return (
            (e =
                "RECORDING" === t
                    ? x.intl.string(x.t.bmOri0)
                    : 0 === n.length
                      ? x.intl.string(x.t.co3wt9)
                      : x.intl.string(x.t.idFMvH)),
            (0, s.jsx)(m.vN3, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, s.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: r()(A.Qm, p[t], { [A.Qz]: i }),
                    children: (0, s.jsxs)(g.A, {
                        className: A.Pp,
                        children: [
                            (0, s.jsx)(g.A.Child, {
                                className: A.bZ,
                                children: (0, s.jsx)("input", {
                                    id: this._inputId,
                                    placeholder: x.intl.string(x.t.nWRdnl),
                                    type: "text",
                                    ref: this.setInputRef,
                                    readOnly: !0,
                                    value: l,
                                    disabled: "RECORDING" !== this.props.mode || i,
                                }),
                            }),
                            (0, s.jsx)("div", {
                                className: A.UD,
                                children: (0, s.jsx)(m.Button, {
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
let f = T;
