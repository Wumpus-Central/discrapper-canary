n.d(t, {
    c: function () {
        return i;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(879443),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    g = n(481060),
    h = n(600164),
    p = n(13140),
    x = n(388032),
    f = n(944500);
function _(e, t, n) {
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
let E = {
    DEFAULT: f.__invalid_default,
    RECORDING: f.recording
};
class C extends a.PureComponent {
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
        e = 'RECORDING' === t ? x.intl.string(x.t.bmOri4) : 0 === n.length ? x.intl.string(x.t.co3wt7) : x.intl.string(x.t.idFMvL);
        let a = 'DEFAULT' === t && n.length > 0;
        return (0, r.jsx)(g.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: o()(f.recorderContainer, E[t], {
                    [f.hasValue]: a,
                    [f.containerDisabled]: i
                }),
                children: (0, r.jsxs)(h.Z, {
                    className: f.recorderLayout,
                    children: [
                        (0, r.jsx)(h.Z.Child, {
                            className: f.keybindInput,
                            children: (0, r.jsx)('input', {
                                id: this._inputId,
                                placeholder: x.intl.string(x.t.nWRdnp),
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: s,
                                disabled: 'RECORDING' !== this.props.mode || i
                            })
                        }),
                        (0, r.jsx)(h.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, r.jsxs)(g.Button, {
                                className: f.addKeybindButton,
                                disabled: i,
                                onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: g.Button.Sizes.MIN,
                                color: g.ButtonColors.PRIMARY,
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
            _(this, '_inputId', m().uniqueId('key-recorder-')),
            _(this, '_unregisterNativeRecorder', null),
            _(this, '_mousedownMode', null),
            _(this, '_inputRef', a.createRef()),
            _(this, '_containerRef', a.createRef()),
            _(this, 'setInputRef', (e) => {
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
            _(this, 'handleClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                if (!n || 'RECORDING' !== this._mousedownMode) t();
            }),
            _(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
t.Z = C;
