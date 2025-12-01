n.d(t, {
    Z: () => y,
    c: () => g,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(879443),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(481060),
    f = n(600164),
    p = n(13140),
    _ = n(388032),
    m = n(151028);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var g = (function (e) {
    return (e.DEFAULT = "DEFAULT"), (e.RECORDING = "RECORDING"), e;
})({});
let E = {
    DEFAULT: m.__invalid_default,
    RECORDING: m.recording,
};
class b extends i.PureComponent {
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (n === t) return;
        let { _inputRef: r } = this;
        if (null == r.current) return;
        let { activeElement: i } = document;
        "DEFAULT" === t && r.current === i && r.current.blur(),
            "RECORDING" === t && r.current !== i && r.current.focus();
    }
    render() {
        let e,
            { mode: t, value: n, disabled: i } = this.props,
            a = (0, p.BB)(n, !0);
        return (
            (e =
                "RECORDING" === t
                    ? _.intl.string(_.t.bmOri0)
                    : 0 === n.length
                      ? _.intl.string(_.t.co3wt9)
                      : _.intl.string(_.t.idFMvH)),
            (0, r.jsx)(d.tEY, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, r.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: o()(m.recorderContainer, E[t], { [m.containerDisabled]: i }),
                    children: (0, r.jsxs)(f.Z, {
                        className: m.recorderLayout,
                        children: [
                            (0, r.jsx)(f.Z.Child, {
                                className: m.keybindInput,
                                children: (0, r.jsx)("input", {
                                    id: this._inputId,
                                    placeholder: _.intl.string(_.t.nWRdnl),
                                    type: "text",
                                    ref: this.setInputRef,
                                    readOnly: !0,
                                    value: a,
                                    disabled: "RECORDING" !== this.props.mode || i,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: m.buttonContainer,
                                children: (0, r.jsx)(d.Button, {
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
    constructor(...e) {
        super(...e),
            h(this, "_inputId", u().uniqueId("key-recorder-")),
            h(this, "_unregisterNativeRecorder", null),
            h(this, "_mousedownMode", null),
            h(this, "_inputRef", i.createRef()),
            h(this, "_containerRef", i.createRef()),
            h(this, "setInputRef", (e) => {
                var t, n;
                let { registerNativeRecorder: r, onChange: i } = this.props;
                if (
                    ((this._inputRef.current = e),
                    null == (t = (n = this)._unregisterNativeRecorder) || t.call(n),
                    null != e)
                )
                    if (null != r && null != i)
                        try {
                            this._unregisterNativeRecorder = r(e.id, i);
                        } catch (e) {
                            this._unregisterNativeRecorder = null;
                        }
                    else null != i && (new (l())(e).handleKey = i);
            }),
            h(this, "handleClick", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                (n && "RECORDING" === this._mousedownMode) || t();
            }),
            h(this, "handleMouseDown", () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
let y = b;
