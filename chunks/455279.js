n.d(t, {
    c: function () {
        return i;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    d = n(879443),
    u = n.n(d),
    h = n(392711),
    c = n.n(h),
    m = n(481060),
    g = n(600164),
    p = n(13140),
    b = n(388032),
    f = n(944500);
function C(e, t, n) {
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
((s = i || (i = {})).DEFAULT = 'DEFAULT'), (s.RECORDING = 'RECORDING');
let x = {
    DEFAULT: f.__invalid_default,
    RECORDING: f.recording
};
class v extends l.PureComponent {
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
            s = (0, p.BB)(n, !0);
        e = 'RECORDING' === t ? b.intl.string(b.t.bmOri4) : 0 === n.length ? b.intl.string(b.t.co3wt7) : b.intl.string(b.t.idFMvL);
        let l = 'DEFAULT' === t && n.length > 0;
        return (0, r.jsx)(m.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: a()(f.recorderContainer, x[t], {
                    [f.hasValue]: l,
                    [f.containerDisabled]: i
                }),
                children: (0, r.jsxs)(g.Z, {
                    className: f.recorderLayout,
                    children: [
                        (0, r.jsx)(g.Z.Child, {
                            className: f.keybindInput,
                            children: (0, r.jsx)('input', {
                                id: this._inputId,
                                placeholder: b.intl.string(b.t.nWRdnp),
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
                            children: (0, r.jsxs)(m.Button, {
                                className: f.addKeybindButton,
                                disabled: i,
                                onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: m.Button.Sizes.MIN,
                                color: m.ButtonColors.PRIMARY,
                                children: [
                                    (0, r.jsx)('span', {
                                        className: f.text,
                                        children: e
                                    }),
                                    (0, r.jsx)('span', { className: f.editIcon })
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
            C(this, '_inputId', c().uniqueId('key-recorder-')),
            C(this, '_unregisterNativeRecorder', null),
            C(this, '_mousedownMode', null),
            C(this, '_inputRef', l.createRef()),
            C(this, '_containerRef', l.createRef()),
            C(this, 'setInputRef', (e) => {
                var t;
                let { registerNativeRecorder: n, onChange: i } = this.props;
                if (((this._inputRef.current = e), null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e)) {
                    if (null != n && null != i)
                        try {
                            this._unregisterNativeRecorder = n(e.id, i);
                        } catch (e) {
                            this._unregisterNativeRecorder = null;
                        }
                    else null != i && (new (u())(e).handleKey = i);
                }
            }),
            C(this, 'handleClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                if (!n || 'RECORDING' !== this._mousedownMode) t();
            }),
            C(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
t.Z = v;
