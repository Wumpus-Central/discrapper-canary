n.d(t, { A: () => x, E: () => h });
var i,
    s = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(507392),
    c = n.n(o),
    d = n(735438),
    u = n.n(d),
    _ = n(397927),
    m = n(235986),
    A = n(350535),
    g = n(985018),
    E = n(181204),
    h = (((i = {}).DEFAULT = "DEFAULT"), (i.RECORDING = "RECORDING"), i);
let p = { DEFAULT: E.__invalid_default, RECORDING: E.oz };
class C extends r.PureComponent {
    _inputId = u().uniqueId("key-recorder-");
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
            else null != n && (new (c())(e).handleKey = n);
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
            r = (0, A.dI)(n, !0);
        return (
            (e =
                "RECORDING" === t
                    ? g.intl.string(g.t.bmOri0)
                    : 0 === n.length
                      ? g.intl.string(g.t.co3wt9)
                      : g.intl.string(g.t.idFMvH)),
            (0, s.jsx)(_.vN3, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, s.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: l()(E.Qm, p[t], { [E.Qz]: i }),
                    children: (0, s.jsxs)(m.A, {
                        className: E.Pp,
                        children: [
                            (0, s.jsx)(m.A.Child, {
                                className: E.bZ,
                                children: (0, s.jsx)("input", {
                                    id: this._inputId,
                                    placeholder: g.intl.string(g.t.nWRdnl),
                                    type: "text",
                                    ref: this.setInputRef,
                                    readOnly: !0,
                                    value: r,
                                    disabled: "RECORDING" !== this.props.mode || i,
                                }),
                            }),
                            (0, s.jsx)("div", {
                                className: E.UD,
                                children: (0, s.jsx)(_.Button, {
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
let x = C;
