n.d(t, {
    Z: () => f,
    c: () => E
}),
    n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(879443),
    c = n.n(o),
    d = n(392711),
    u = n.n(d),
    h = n(481060),
    m = n(600164),
    g = n(13140),
    x = n(388032),
    _ = n(509238);
function p(e, t, n) {
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
var E = (((i = {}).DEFAULT = 'DEFAULT'), (i.RECORDING = 'RECORDING'), i);
let C = {
    DEFAULT: _.__invalid_default,
    RECORDING: _.recording
};
class N extends l.PureComponent {
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
        e = 'RECORDING' === t ? x.intl.string(x.t.bmOri4) : 0 === n.length ? x.intl.string(x.t.co3wt7) : x.intl.string(x.t.idFMvL);
        let r = 'DEFAULT' === t && n.length > 0;
        return (0, s.jsx)(h.tEY, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, s.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: a()(_.recorderContainer, C[t], {
                    [_.hasValue]: r,
                    [_.containerDisabled]: i
                }),
                children: (0, s.jsxs)(m.Z, {
                    className: _.recorderLayout,
                    children: [
                        (0, s.jsx)(m.Z.Child, {
                            className: _.keybindInput,
                            children: (0, s.jsx)('input', {
                                id: this._inputId,
                                placeholder: x.intl.string(x.t.nWRdnp),
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: l,
                                disabled: 'RECORDING' !== this.props.mode || i
                            })
                        }),
                        (0, s.jsx)(m.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, s.jsxs)(h.zxk, {
                                className: _.addKeybindButton,
                                disabled: i,
                                onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: h.zxk.Sizes.MIN,
                                color: h.Ttl.PRIMARY,
                                children: [
                                    (0, s.jsx)('span', {
                                        className: _.text,
                                        children: e
                                    }),
                                    (0, s.jsx)('span', { className: _.editIcon })
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
            p(this, '_inputId', u().uniqueId('key-recorder-')),
            p(this, '_unregisterNativeRecorder', null),
            p(this, '_mousedownMode', null),
            p(this, '_inputRef', l.createRef()),
            p(this, '_containerRef', l.createRef()),
            p(this, 'setInputRef', (e) => {
                var t;
                let { registerNativeRecorder: n, onChange: i } = this.props;
                if (((this._inputRef.current = e), null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e)) {
                    if (null != n && null != i)
                        try {
                            this._unregisterNativeRecorder = n(e.id, i);
                        } catch (e) {
                            this._unregisterNativeRecorder = null;
                        }
                    else null != i && (new (c())(e).handleKey = i);
                }
            }),
            p(this, 'handleClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                (!n || 'RECORDING' !== this._mousedownMode) && t();
            }),
            p(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
let f = N;
