n.d(t, {
    A: () => x,
    E: () => h,
}),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(507392),
    c = n.n(o),
    d = n(735438),
    u = n.n(d),
    _ = n(397927),
    p = n(235986),
    m = n(350535),
    g = n(985018),
    A = n(181204);

function f(e, t, n) {
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
var h = (((r = {}).DEFAULT = "DEFAULT"), (r.RECORDING = "RECORDING"), r);
let b = {
    DEFAULT: A.__invalid_default,
    RECORDING: A.oz,
};
class E extends l.PureComponent {
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
            { mode: t, value: n, disabled: r } = this.props,
            l = (0, m.dI)(n, !0);
        return (
            (e =
                "RECORDING" === t
                    ? g.intl.string(g.t.bmOri0)
                    : 0 === n.length
                      ? g.intl.string(g.t.co3wt9)
                      : g.intl.string(g.t.idFMvH)),
            (0, i.jsx)(_.vN3, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, i.jsx)("div", {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: a()(A.Qm, b[t], {
                        [A.Qz]: r,
                    }),
                    children: (0, i.jsxs)(p.A, {
                        className: A.Pp,
                        children: [
                            (0, i.jsx)(p.A.Child, {
                                className: A.bZ,
                                children: (0, i.jsx)("input", {
                                    id: this._inputId,
                                    placeholder: g.intl.string(g.t.nWRdnl),
                                    type: "text",
                                    ref: this.setInputRef,
                                    readOnly: !0,
                                    value: l,
                                    disabled: "RECORDING" !== this.props.mode || r,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: A.UD,
                                children: (0, i.jsx)(_.Button, {
                                    size: "sm",
                                    variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                                    text: e,
                                    onClick: (e) => {
                                        e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                    },
                                    disabled: r,
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
            f(this, "_inputId", u().uniqueId("key-recorder-")),
            f(this, "_unregisterNativeRecorder", null),
            f(this, "_mousedownMode", null),
            f(this, "_inputRef", l.createRef()),
            f(this, "_containerRef", l.createRef()),
            f(this, "setInputRef", (e) => {
                var t;
                let { registerNativeRecorder: n, onChange: r } = this.props;
                if (
                    ((this._inputRef.current = e),
                    null == (t = this._unregisterNativeRecorder) || t.call(this),
                    null != e)
                )
                    if (null != n && null != r)
                        try {
                            this._unregisterNativeRecorder = n(e.id, r);
                        } catch (e) {
                            this._unregisterNativeRecorder = null;
                        }
                    else null != r && (new (c())(e).handleKey = r);
            }),
            f(this, "handleClick", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                (n && "RECORDING" === this._mousedownMode) || t();
            }),
            f(this, "handleMouseDown", () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
let x = E;
