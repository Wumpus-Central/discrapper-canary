(n.d(t, {
    Z: () => O,
    c: () => _
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
    m = n(755721),
    p = n(481060),
    g = n(600164),
    h = n(13140),
    f = n(388032),
    b = n(556707);
function x(e, t, n) {
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
var _ = (((i = {}).DEFAULT = 'DEFAULT'), (i.RECORDING = 'RECORDING'), i);
let j = {
    DEFAULT: b.__invalid_default,
    RECORDING: b.recording
};
class E extends s.PureComponent {
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
            s = (0, h.BB)(n, !0);
        e = 'RECORDING' === t ? f.intl.string(f.t.bmOri4) : 0 === n.length ? f.intl.string(f.t.co3wt7) : f.intl.string(f.t.idFMvL);
        let a = 'DEFAULT' === t && n.length > 0;
        return (0, r.jsx)(p.tEY, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: l()(b.recorderContainer, j[t], {
                    [b.hasValue]: a,
                    [b.containerDisabled]: i
                }),
                children: (0, r.jsxs)(g.Z, {
                    className: b.recorderLayout,
                    children: [
                        (0, r.jsx)(g.Z.Child, {
                            className: b.keybindInput,
                            children: (0, r.jsx)('input', {
                                id: this._inputId,
                                placeholder: f.intl.string(f.t.nWRdnp),
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: s,
                                disabled: 'RECORDING' !== this.props.mode || i
                            })
                        }),
                        (0, r.jsx)(g.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, r.jsxs)(m.zx, {
                                className: b.addKeybindButton,
                                disabled: i,
                                onClick: (e) => {
                                    (e.stopPropagation(), e.preventDefault(), this.handleClick(e));
                                },
                                size: m.zx.Sizes.MIN,
                                color: m.Tt.PRIMARY,
                                children: [
                                    (0, r.jsx)('span', {
                                        className: b.text,
                                        children: e
                                    }),
                                    (0, r.jsx)('span', { className: b.editIcon })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        (super(...e),
            x(this, '_inputId', u().uniqueId('key-recorder-')),
            x(this, '_unregisterNativeRecorder', null),
            x(this, '_mousedownMode', null),
            x(this, '_inputRef', s.createRef()),
            x(this, '_containerRef', s.createRef()),
            x(this, 'setInputRef', (e) => {
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
            x(this, 'handleClick', (e) => {
                (e.stopPropagation(), e.preventDefault());
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                (n && 'RECORDING' === this._mousedownMode) || t();
            }),
            x(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            }));
    }
}
let O = E;
