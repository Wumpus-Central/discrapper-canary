let i;
r.d(n, {
    l: function () {
        return m;
    }
});
var a,
    s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(58654),
    d = r(84735),
    f = r(763971);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = '\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n',
    p = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-transform', 'width', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
class m extends (a = o.PureComponent) {
    componentDidMount() {
        var e, n;
        null === (e = (n = this.props).onResize) || void 0 === e || e.call(n, void 0), Promise.resolve().then(() => this.calculateSize());
    }
    componentDidUpdate(e, n) {
        if (this.state.height !== n.height) {
            let { onResize: e } = this.props;
            null == e || e(this.state.height);
        }
        e.value !== this.props.value && Promise.resolve().then(() => this.calculateSize());
    }
    calculateSize() {
        var e;
        let n = this._textArea;
        if (null == n) return;
        let { fontWidthEstimate: r, rows: a } = this.props,
            s = null !== (e = this.props.value) && void 0 !== e ? e : n.value;
        if (null != r && -1 === s.indexOf('\n') && s.length * r < 0.8 * n.offsetWidth) {
            this.setState({ height: void 0 });
            return;
        }
        null == i && null != document.body && ((i = document.createElement('textarea')), document.body.appendChild(i));
        let { paddingSize: o, borderSize: l, boxSizing: u, sizingStyle: c } = this.calculateNodeStyling(n);
        i.setAttribute('style', c + ';' + h), (i.value = s), null != a ? i.setAttribute('rows', ''.concat(a)) : i.removeAttribute('rows');
        let d = i.scrollHeight;
        'border-box' === u ? (d += l) : 'content-box' === u && (d -= o), this.setState({ height: d });
    }
    calculateNodeStyling(e) {
        let n = window.getComputedStyle(e),
            r = (0, c.L)(n.getPropertyValue('box-sizing'), n.getPropertyValue('-moz-box-sizing'), n.getPropertyValue('-webkit-box-sizing')),
            i = parseFloat(n.getPropertyValue('padding-bottom')) + parseFloat(n.getPropertyValue('padding-top')),
            a = parseFloat(n.getPropertyValue('border-bottom-width')) + parseFloat(n.getPropertyValue('border-top-width'));
        return {
            sizingStyle: p.map((e) => ''.concat(e, ':').concat(n.getPropertyValue(e))).join(';'),
            paddingSize: i,
            borderSize: a,
            boxSizing: r
        };
    }
    clear() {
        null != this._textArea && (this._textArea.value = ''), this.calculateSize();
    }
    blur() {
        let { _textArea: e } = this;
        null != e && e.blur();
    }
    focus() {
        let { _textArea: e } = this;
        null != e && e.focus();
    }
    setSelection(e, n) {
        null != this._textArea && ((this._textArea.selectionStart = e), (this._textArea.selectionEnd = n));
    }
    get selectionStart() {
        var e, n;
        return null !== (n = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionStart) && void 0 !== n ? n : 0;
    }
    get selectionEnd() {
        var e, n;
        return null !== (n = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionEnd) && void 0 !== n ? n : 0;
    }
    get value() {
        var e, n;
        return null !== (n = null === (e = this._textArea) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : '';
    }
    render() {
        let { style: e, className: n, onResize: r, ...i } = this.props;
        delete i.fontWidthEstimate;
        let a = {
            ...this.state,
            ...e
        };
        return (0, s.jsx)(d.t, {
            children: (0, s.jsx)('textarea', {
                ...i,
                className: u()(n, f.scrollbarGhostHairline),
                ref: this.handleSetRef,
                style: a,
                onChange: this.handleChange
            })
        });
    }
    constructor(e) {
        super(e),
            _(this, '_textArea', void 0),
            _(this, 'handleSetRef', (e) => {
                this._textArea = e;
            }),
            _(this, 'handleChange', (e) => {
                let { onChange: n } = this.props;
                null == n || n(e), this.calculateSize();
            }),
            (this.state = { height: void 0 });
    }
}
_(m, 'defaultProps', {
    autoFocus: !1,
    disabled: !1,
    autoCorrect: 'off'
});
