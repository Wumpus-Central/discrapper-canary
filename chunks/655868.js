n(47120), n(757143);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    a = n(218872);
function l(e, t, n) {
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
let o = /[^0-9]/g;
class c extends s.PureComponent {
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    render() {
        return (0, i.jsx)(r.TextInput, {
            ...this.props,
            inputMode: 'numeric',
            onChange: this.handleChange,
            inputRef: this.setRef
        });
    }
    constructor(...e) {
        super(...e),
            l(this, '_inputRef', void 0),
            l(this, 'selectionStart', 0),
            l(this, 'setRef', (e) => {
                let { inputRef: t } = this.props;
                (this._inputRef = e), null != t && t(e);
            }),
            l(this, 'handleChange', (e, t) => {
                let { value: n, onChange: i } = this.props,
                    s = this._inputRef;
                if (e === n || null == s || null == n) return;
                let r = (0, a.M)(e),
                    l = s.selectionStart;
                r === n && r.length <= 3 && n.includes('/') && !e.includes('/') ? (r = r.replace(o, '')) : r === n && e.includes('/') && !n.includes('/') && (r += '/'), r.length > e.length && (l += r.length - e.length), (this.selectionStart = l), null != i && i(r, t);
            });
    }
}
t.Z = c;
