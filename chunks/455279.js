n.d(t, {
    Z: () => v,
    c: () => f
}),
    n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(879443),
    d = n.n(a),
    h = n(392711),
    u = n.n(h),
    c = n(481060),
    p = n(600164),
    g = n(13140),
    m = n(388032),
    b = n(944500);
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
var f = (((i = {}).DEFAULT = 'DEFAULT'), (i.RECORDING = 'RECORDING'), i);
let C = {
    DEFAULT: b.__invalid_default,
    RECORDING: b.recording
};
class _ extends l.PureComponent {
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
        'DEFAULT' === t && i.current === s && i.current.blur(), 'RECORDING' === t && i.current !== s && i.current.focus();
    }
    render() {
        let e;
        let { mode: t, value: n, disabled: i } = this.props,
            l = (0, g.BB)(n, !0);
        e = 'RECORDING' === t ? m.intl.string(m.t.bmOri4) : 0 === n.length ? m.intl.string(m.t.co3wt7) : m.intl.string(m.t.idFMvL);
        let r = 'DEFAULT' === t && n.length > 0;
        return (0, s.jsx)(c.tEY, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, s.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: o()(b.recorderContainer, C[t], {
                    [b.hasValue]: r,
                    [b.containerDisabled]: i
                }),
                children: (0, s.jsxs)(p.Z, {
                    className: b.recorderLayout,
                    children: [
                        (0, s.jsx)(p.Z.Child, {
                            className: b.keybindInput,
                            children: (0, s.jsx)('input', {
                                id: this._inputId,
                                placeholder: m.intl.string(m.t.nWRdnp),
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: l,
                                disabled: 'RECORDING' !== this.props.mode || i
                            })
                        }),
                        (0, s.jsx)(p.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, s.jsxs)(c.zxk, {
                                className: b.addKeybindButton,
                                disabled: i,
                                onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: c.zxk.Sizes.MIN,
                                color: c.Ttl.PRIMARY,
                                children: [
                                    (0, s.jsx)('span', {
                                        className: b.text,
                                        children: e
                                    }),
                                    (0, s.jsx)('span', { className: b.editIcon })
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
            x(this, '_inputId', u().uniqueId('key-recorder-')),
            x(this, '_unregisterNativeRecorder', null),
            x(this, '_mousedownMode', null),
            x(this, '_inputRef', l.createRef()),
            x(this, '_containerRef', l.createRef()),
            x(this, 'setInputRef', (e) => {
                var t;
                let { registerNativeRecorder: n, onChange: i } = this.props;
                if (((this._inputRef.current = e), null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e)) {
                    if (null != n && null != i)
                        try {
                            this._unregisterNativeRecorder = n(e.id, i);
                        } catch (e) {
                            this._unregisterNativeRecorder = null;
                        }
                    else null != i && (new (d())(e).handleKey = i);
                }
            }),
            x(this, 'handleClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                (!n || 'RECORDING' !== this._mousedownMode) && t();
            }),
            x(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
let v = _;
