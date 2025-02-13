s.d(t, { Z: () => m }), s(47120), s(653041);
var n,
    i,
    l = s(200651),
    o = s(192379),
    a = s(120356),
    r = s.n(a),
    h = s(600164),
    d = s(778888);
function c(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class u extends (n = o.PureComponent) {
    render() {
        let { className: e } = this.props;
        return (0, l.jsx)('input', {
            ref: this.setCodeBlockRef,
            className: r()(d.input, e),
            maxLength: 1,
            value: null != this.props.code ? this.props.code : void 0,
            autoFocus: this.props.autoFocus,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange
        });
    }
    focus() {
        var e;
        null === (e = this._codeBlockRef) || void 0 === e || e.focus();
    }
    blur() {
        var e;
        null === (e = this._codeBlockRef) || void 0 === e || e.blur();
    }
    constructor(...e) {
        super(...e),
            c(this, '_codeBlockRef', void 0),
            c(this, 'setCodeBlockRef', (e) => {
                this._codeBlockRef = e;
            }),
            c(this, 'handleKeyDown', (e) => {
                let t = 8 === e.which || 37 === e.which || 39 === e.which,
                    s = (e.which >= 48 && e.which <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
                t || s || e.preventDefault();
                let { onKeyDown: n } = this.props;
                null == n || n(e);
            }),
            c(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
c(u, 'defaultProps', { autoFocus: !1 });
class p extends (i = o.PureComponent) {
    render() {
        let { className: e, inputClassName: t } = this.props,
            { codes: s } = this.state,
            n = [];
        for (let e = 0; e < s.length; e++)
            e === s.length / 2 && n.push((0, l.jsx)('div', { className: d.spacer }, 'spacer')),
                n.push(
                    (0, l.jsx)(
                        u,
                        {
                            ref: (t) => this.setCodeBlockRef(e, t),
                            code: s[e],
                            autoFocus: 0 === e,
                            onChange: (t) => this.handleChange(e, t),
                            onKeyDown: (t) => this.handleKeyDown(e, t),
                            className: t
                        },
                        e
                    )
                );
        return (0, l.jsx)(h.Z, {
            align: h.Z.Align.CENTER,
            justify: h.Z.Justify.CENTER,
            className: e,
            children: n
        });
    }
    setCodeBlockRef(e, t) {
        this._codeBlockRefs[e] = t;
    }
    handleChange(e, t) {
        this.state.codes[e] = t;
        let s = this.getCodeOrFirstEmptyIndex();
        if ('string' == typeof s) this.submit(s);
        else {
            let e = this._codeBlockRefs[s];
            null == e || e.focus();
        }
    }
    handleKeyDown(e, t) {
        let { codes: s } = this.state;
        if (8 === t.which && e > 0 && (null == s[e] || 0 === s[e].length)) {
            let t = e - 1;
            s[t] = '';
            let n = this._codeBlockRefs[t];
            null == n || n.focus();
        }
    }
    getCodeOrFirstEmptyIndex() {
        let { codes: e } = this.state,
            t = '';
        for (let s = 0; s < e.length; s++) {
            if (isNaN(parseInt(e[s]))) return s;
            t += e[s];
        }
        return t;
    }
    submit(e) {
        let { onSubmit: t } = this.props;
        null == t || t(e);
    }
    constructor(e) {
        super(e), c(this, '_codeBlockRefs', Array(this.props.count)), (this.state = { codes: Array(e.count) });
    }
}
c(p, 'defaultProps', { count: 6 });
let m = p;
