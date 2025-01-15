n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    s = n(481060),
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
class c extends r.PureComponent {
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    render() {
        return (0, i.jsx)(s.TextInput, {
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
                    r = this._inputRef;
                if (e === n || null == r || null == n) return;
                let s = (0, a.M)(e),
                    l = r.selectionStart;
                s === n && s.length <= 3 && n.includes('/') && !e.includes('/') ? (s = s.replace(o, '')) : s === n && e.includes('/') && !n.includes('/') && (s += '/'), s.length > e.length && (l += s.length - e.length), (this.selectionStart = l), null != i && i(s, t);
            });
    }
}
t.Z = c;
