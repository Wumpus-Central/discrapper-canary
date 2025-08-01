(n.d(t, {
    Z: () => C,
    c: () => x
}),
    n(388685));
var i,
    r = n(255367),
    s = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(879443),
    c = n.n(o),
    d = n(392711),
    u = n.n(d),
    m = n(481060),
    p = n(600164),
    g = n(13140),
    h = n(388032),
    f = n(556707);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var x = (((i = {}).DEFAULT = 'DEFAULT'), (i.RECORDING = 'RECORDING'), i);
let _ = {
    DEFAULT: f.__invalid_default,
    RECORDING: f.recording
};
class j extends s.PureComponent {
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (n === t) return;
        let { _inputRef: i } = this;
        if (null == i.current) return;
        let { activeElement: r } = document;
        ('DEFAULT' === t && i.current === r && i.current.blur(), 'RECORDING' === t && i.current !== r && i.current.focus());
    }
    render() {
        let e,
            { mode: t, value: n, disabled: i } = this.props,
            s = (0, g.BB)(n, !0);
        return (
            (e = 'RECORDING' === t ? h.intl.string(h.t.bmOri4) : 0 === n.length ? h.intl.string(h.t.co3wt7) : h.intl.string(h.t.idFMvL)),
            (0, r.jsx)(m.tEY, {
                focusTarget: this._inputRef,
                ringTarget: this._containerRef,
                children: (0, r.jsx)('div', {
                    onClick: this.handleClick,
                    onMouseDown: this.handleMouseDown,
                    ref: this._containerRef,
                    className: l()(f.recorderContainer, _[t], { [f.containerDisabled]: i }),
                    children: (0, r.jsxs)(p.Z, {
                        className: f.recorderLayout,
                        children: [
                            (0, r.jsx)(p.Z.Child, {
                                className: f.keybindInput,
                                children: (0, r.jsx)('input', {
                                    id: this._inputId,
                                    placeholder: h.intl.string(h.t.nWRdnp),
                                    type: 'text',
                                    ref: this.setInputRef,
                                    readOnly: !0,
                                    value: s,
                                    disabled: 'RECORDING' !== this.props.mode || i
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: f.buttonContainer,
                                children: (0, r.jsx)(m.zxk, {
                                    size: 'sm',
                                    variant: 'RECORDING' === this.props.mode ? 'critical-secondary' : 'secondary',
                                    text: e,
                                    onClick: (e) => {
                                        (e.stopPropagation(), e.preventDefault(), this.handleClick(e));
                                    },
                                    disabled: i
                                })
                            })
                        ]
                    })
                })
            })
        );
    }
    constructor(...e) {
        (super(...e),
            b(this, '_inputId', u().uniqueId('key-recorder-')),
            b(this, '_unregisterNativeRecorder', null),
            b(this, '_mousedownMode', null),
            b(this, '_inputRef', s.createRef()),
            b(this, '_containerRef', s.createRef()),
            b(this, 'setInputRef', (e) => {
                var t;
                let { registerNativeRecorder: n, onChange: i } = this.props;
                if (((this._inputRef.current = e), null == (t = this._unregisterNativeRecorder) || t.call(this), null != e))
                    if (null != n && null != i)
                        try {
                            this._unregisterNativeRecorder = n(e.id, i);
                        } catch (e) {
                            this._unregisterNativeRecorder = null;
                        }
                    else null != i && (new (c())(e).handleKey = i);
            }),
            b(this, 'handleClick', (e) => {
                (e.stopPropagation(), e.preventDefault());
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                (n && 'RECORDING' === this._mousedownMode) || t();
            }),
            b(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            }));
    }
}
let C = j;
