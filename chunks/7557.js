(n.d(t, { Z: () => p }), n(388685), n(539854));
var s,
    i,
    r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    c = n(600164),
    h = n(713569);
function u(e, t, n) {
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
class d extends (s = l.PureComponent) {
    render() {
        let { className: e } = this.props;
        return (0, r.jsx)('input', {
            ref: this.setCodeBlockRef,
            className: a()(h.input, e),
            maxLength: 1,
            value: null != this.props.code ? this.props.code : void 0,
            autoFocus: this.props.autoFocus,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange
        });
    }
    focus() {
        var e;
        null == (e = this._codeBlockRef) || e.focus();
    }
    blur() {
        var e;
        null == (e = this._codeBlockRef) || e.blur();
    }
    constructor(...e) {
        (super(...e),
            u(this, '_codeBlockRef', void 0),
            u(this, 'setCodeBlockRef', (e) => {
                this._codeBlockRef = e;
            }),
            u(this, 'handleKeyDown', (e) => {
                let t = 8 === e.which || 37 === e.which || 39 === e.which,
                    n = (e.which >= 48 && e.which <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
                t || n || e.preventDefault();
                let { onKeyDown: s } = this.props;
                null == s || s(e);
            }),
            u(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            }));
    }
}
u(d, 'defaultProps', { autoFocus: !1 });
class E extends (i = l.PureComponent) {
    render() {
        let { className: e, inputClassName: t } = this.props,
            { codes: n } = this.state,
            s = [];
        for (let e = 0; e < n.length; e++)
            (e === n.length / 2 && s.push((0, r.jsx)('div', { className: h.spacer }, 'spacer')),
                s.push(
                    (0, r.jsx)(
                        d,
                        {
                            ref: (t) => this.setCodeBlockRef(e, t),
                            code: n[e],
                            autoFocus: 0 === e,
                            onChange: (t) => this.handleChange(e, t),
                            onKeyDown: (t) => this.handleKeyDown(e, t),
                            className: t
                        },
                        e
                    )
                ));
        return (0, r.jsx)(c.Z, {
            align: c.Z.Align.CENTER,
            justify: c.Z.Justify.CENTER,
            className: e,
            children: s
        });
    }
    setCodeBlockRef(e, t) {
        this._codeBlockRefs[e] = t;
    }
    handleChange(e, t) {
        this.state.codes[e] = t;
        let n = this.getCodeOrFirstEmptyIndex();
        if ('string' == typeof n) this.submit(n);
        else {
            let e = this._codeBlockRefs[n];
            null == e || e.focus();
        }
    }
    handleKeyDown(e, t) {
        let { codes: n } = this.state;
        if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
            let t = e - 1;
            n[t] = '';
            let s = this._codeBlockRefs[t];
            null == s || s.focus();
        }
    }
    getCodeOrFirstEmptyIndex() {
        let { codes: e } = this.state,
            t = '';
        for (let n = 0; n < e.length; n++) {
            if (isNaN(parseInt(e[n]))) return n;
            t += e[n];
        }
        return t;
    }
    submit(e) {
        let { onSubmit: t } = this.props;
        null == t || t(e);
    }
    constructor(e) {
        (super(e), u(this, '_codeBlockRefs', Array(this.props.count)), (this.state = { codes: Array(e.count) }));
    }
}
u(E, 'defaultProps', { count: 6 });
let p = E;
