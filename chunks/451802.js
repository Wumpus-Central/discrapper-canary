n.d(t, { A: () => S, E: () => x });
var i,
    s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(507392),
    d = n.n(o),
    u = n(735438),
    c = n.n(u),
    g = n(187322),
    m = n(821609),
    _ = n(235986),
    A = n(350535),
    h = n(985018),
    p = n(598723),
    x = (((i = {}).DEFAULT = "DEFAULT"), (i.RECORDING = "RECORDING"), i);
let E = { DEFAULT: p.__invalid_default, RECORDING: p.oz };
class T extends l.PureComponent {
    _inputId = c().uniqueId("key-recorder-");
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
            l = (0, A.dI)(n, !0);
        return (
            (e =
                "RECORDING" === t
                    ? h.intl.string(h.t.bmOri0)
                    : 0 === n.length
                      ? h.intl.string(h.t.co3wt9)
                      : h.intl.string(h.t.idFMvH)),
            (0, s.jsx)(g.vN, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, s.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: r()(p.Qm, E[t], { [p.Qz]: i }),
                    children: (0, s.jsxs)(_.A, {
                        className: p.Pp,
                        children: [
                            (0, s.jsx)(_.A.Child, {
                                className: p.bZ,
                                children: (0, s.jsx)("input", {
                                    id: this._inputId,
                                    placeholder: h.intl.string(h.t.nWRdnl),
                                    type: "text",
                                    ref: this.setInputRef,
                                    readOnly: !0,
                                    value: l,
                                    disabled: "RECORDING" !== this.props.mode || i,
                                }),
                            }),
                            (0, s.jsx)("div", {
                                className: p.UD,
                                children: (0, s.jsx)(m.$, {
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
let S = T;
