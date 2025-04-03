n.d(t, {
    Z: () => E,
    c: () => N
}),
    n(47120);
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(879443),
    c = n.n(o),
    d = n(392711),
    u = n.n(d),
    m = n(481060),
    g = n(600164),
    p = n(13140),
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
var N = (((r = {}).DEFAULT = 'DEFAULT'), (r.RECORDING = 'RECORDING'), r);
let x = {
    DEFAULT: f.__invalid_default,
    RECORDING: f.recording
};
class _ extends s.PureComponent {
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
        'DEFAULT' === t && r.current === i && r.current.blur(), 'RECORDING' === t && r.current !== i && r.current.focus();
    }
    render() {
        let e,
            { mode: t, value: n, disabled: r } = this.props,
            s = (0, p.BB)(n, !0);
        e = 'RECORDING' === t ? h.NW.string(h.t.bmOri4) : 0 === n.length ? h.NW.string(h.t.co3wt7) : h.NW.string(h.t.idFMvL);
        let a = 'DEFAULT' === t && n.length > 0;
        return (0, i.jsx)(m.tEY, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, i.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: l()(f.recorderContainer, x[t], {
                    [f.hasValue]: a,
                    [f.containerDisabled]: r
                }),
                children: (0, i.jsxs)(g.Z, {
                    className: f.recorderLayout,
                    children: [
                        (0, i.jsx)(g.Z.Child, {
                            className: f.keybindInput,
                            children: (0, i.jsx)('input', {
                                id: this._inputId,
                                placeholder: h.NW.string(h.t.nWRdnp),
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: s,
                                disabled: 'RECORDING' !== this.props.mode || r
                            })
                        }),
                        (0, i.jsx)(g.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, i.jsxs)(m.zxk, {
                                className: f.addKeybindButton,
                                disabled: r,
                                onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: m.zxk.Sizes.MIN,
                                color: m.Ttl.PRIMARY,
                                children: [
                                    (0, i.jsx)('span', {
                                        className: f.text,
                                        children: e
                                    }),
                                    (0, i.jsx)('span', { className: f.editIcon })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            b(this, '_inputId', u().uniqueId('key-recorder-')),
            b(this, '_unregisterNativeRecorder', null),
            b(this, '_mousedownMode', null),
            b(this, '_inputRef', s.createRef()),
            b(this, '_containerRef', s.createRef()),
            b(this, 'setInputRef', (e) => {
                var t;
                let { registerNativeRecorder: n, onChange: r } = this.props;
                if (((this._inputRef.current = e), null == (t = this._unregisterNativeRecorder) || t.call(this), null != e))
                    if (null != n && null != r)
                        try {
                            this._unregisterNativeRecorder = n(e.id, r);
                        } catch (e) {
                            this._unregisterNativeRecorder = null;
                        }
                    else null != r && (new (c())(e).handleKey = r);
            }),
            b(this, 'handleClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                (n && 'RECORDING' === this._mousedownMode) || t();
            }),
            b(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
let E = _;
